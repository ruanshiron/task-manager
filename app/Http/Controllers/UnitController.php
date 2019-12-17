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
        //
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
            "members" => "nullable|array",
            "deputies" => "nullable|array",
        ])->validate();

        $validator_2 = Validator::make($request->all(), [
            "members" => "nullable|array",
            "members.*.user_id" => "nullable",
            "members.*.mission" => "nullable"
        ])->validate();

        $members = array();
        $deputies = array();

        $unit = Unit::find($id);

        if ($unit == null) {
            return response()->json(["error" => "unit ID is not existed"]);
        }

        if ($validator["name"] && $unit->name != "" && $unit->name != null) {
            $unit->name = $validator["name"];
        }
        if ($validator["description"] && $unit->description != "" && $unit->description != null) {
            $unit->description = $validator["description"];
        }
        if ($validator["captain_id"] && $unit->captain_id != "" && $unit->captain_id != null) {
            $unit->captain_id = $validator["captain_id"];
        }

        if ($validator["members"]) {
            foreach ($validator["members"] as $value) {
                array_push($members, ["member_id" => $value["user_id"], "unit_id" => $id, "mission" => $value["mission"]]);
            }
        }

        if ($validator["deputies"]) {
            foreach ($validator["deputies"] as $value) {
                array_push($deputies, ["user_id" => $value["user_id"], "unit_id" => $id, "mission" => $value["mission"]]);
            }
        }

        $unit->save();

        DB::table('unit_deputies')->where('unit_id', $unit->id)->delete();
        DB::table('unit_members')->where('unit_id', $unit->id)->delete();

        DB::table('unit_deputies')->insert($deputies);
        DB::table('unit_members')->insert($members);

        return response()->json($unit);
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
