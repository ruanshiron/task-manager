<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Unit;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Validator;

class UnitController extends Controller
{
    private function findChild($units)
    {
        foreach ($units as $unit) {
            foreach ($unit->children as $child) {
                $child->with('children')->get();

                $this->findChild($child->children);
            }
        }

        return $units;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $units = Unit::with('children', 'parent')->where('parent_id', null)->get();

        $units = $this->findChild($units);

        return response()->json($units);
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

        Unit::create($validator);

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
        $unit = Unit::with('deputies', 'members', 'captain')->find($id);
        return response()->json($unit);
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

        $group = Unit::find($id);

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
