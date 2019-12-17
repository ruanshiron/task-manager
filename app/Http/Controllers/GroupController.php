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

        Group::create($validator);

        return response()->json([
            "succeed" => true,
        ]);
    }

    public function show($id)
    {
        $group = Group::find($id);
        return response()->json($group  );
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
            "members_id" => "nullable|array",
            "deputies_id" => "nullable|array",
            "members_mission" => "nullable|array",
            "deputies_mission" => "nullable|array"
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

    public function destroy($id)
    {
        $group = Group::find($id)->delete();

        return response()->json([
            "succeed" => true,
        ]);
    }
}
