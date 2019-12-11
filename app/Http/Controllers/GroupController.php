<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use App\Group;
use Illuminate\Support\Facades\DB;

class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Group::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "description" => "nullable",
            "captain_id" => "required",
        ])->validate();

        Group::create($validator);

        return response()->json([
            "succeed" => true,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {


    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            "name" => "nullable",
            "description" => "nullable",
            "captain_id" => "nullable",
            "members_id" => "nullable|array",
            "deputies_id" => "nullable|array",
        ])->validate();

        $members = array();
        $deputies = array();

        $group = Group::find($id);

        if ($group == null) {
            return response()->json(["error" => "Group ID is not existed"]);
        }

        if ($validator["name"] && $group->name != "" && $group->name != null) {
            $group->name = $validator["name"];
        }
        if ($validator["description"] && $group->description != "" && $group->description != null) {
            $group->description = $validator["description"];
        }
        if ($validator["captain_id"] && $group->captain_id != "" && $group->captain_id != null) {
            $group->captain_id = $validator["captain_id"];
        }

        $group->save();

        if ($validator["members_id"]) {
            foreach ($validator["members_id"] as $value) {
                array_push($members, ["user_id" => $value, "group_id" => $id]);
            }
        }

        if ($validator["deputies_id"]) {
            foreach ($validator["deputies_id"] as $value) {
                array_push($deputies, ["user_id" => $value, "group_id" => $id]);
            }
        }

        DB::table('deputies')->insert($deputies);
        DB::table('members')->insert($members);

        return response()->json(["succeed" => true]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
