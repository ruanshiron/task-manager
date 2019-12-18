<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use App\Group;
use Illuminate\Support\Facades\DB;

class GroupController extends Controller
{
    public function index()
    {
        return response()->json(Group::with('captain')->get());
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required",
            "description" => "nullable",
            "captain_id" => "required"
        ])->validate();

        $validator_2 = Validator::make($request->all(), [
            "deputies" => "array",
            "deputies.*.user_id" => "required",
            "deputies.*.mission" => "nullable",
        ])->validate();

        $validator_3 = Validator::make($request->all(), [
            "members" => "array",
            "members.*.user_id" => "required",
            "members.*.mission" => "nullable",
        ])->validate();


        $group = Group::create($validator);

        $deputies = array();
        $members = array();

        foreach ($validator_2["deputies"] as $value) {
            array_push($deputies, ["user_id" => $value["user_id"], "group_id" => $group->id, "mission" => $value["mission"]]);
        }

        foreach ($validator_3["members"] as $member) {
            array_push($members, ["user_id" => $value["user_id"], "group_id" => $group->id, "mission" => $value["mission"]]);
        }

        DB::table('deputies')->insert($deputies);
        DB::table('members')->insert($members);

        return response()->json($group);
    }

    public function show($id)
    {
        $group = Group::with('deputies', 'members', 'captain')->find($id);
        return response()->json($group);
    }

    public function edit(Request $request)
    {


    }

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

        $unit = Group::find($id);

        if ($unit == null) {
            return response()->json(["error" => "group ID is not existed"]);
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
                array_push($members, ["user_id" => $value["user_id"], "group_id" => $id, "mission" => $value["mission"]]);
            }
        }

        if ($validator["deputies"]) {
            foreach ($validator["deputies"] as $value) {
                array_push($deputies, ["user_id" => $value["user_id"], "group_id" => $id, "mission" => $value["mission"]]);
            }
        }

        $unit->save();

        DB::table('deputies')->where('group_id', $unit->id)->delete();
        DB::table('members')->where('group_id', $unit->id)->delete();

        DB::table('deputies')->insert($deputies);
        DB::table('members')->insert($members);

        return response()->json($unit);
    }

    public function destroy($id)
    {
        $group = Group::find($id)->delete();

        return response()->json([
            "succeed" => true,
        ]);
    }
}
