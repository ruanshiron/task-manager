<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Group;

class GroupController extends Controller
{
    public function index()
    {
        $groups = Group::all();
        return response()->json($groups);
    }

    public function store(Request $request)
    {
        request()->validate([
            'name' => 'required',
            'description' => 'required',
    		'captain' => 'required'
    	]);

    	Group::create(request(['name', 'description', 'captain']));
        return response()->json(['success' => true]);
    }

    public function show($id)
    {

    }

    public function destroy($id)
    {
        Group::find($id)->delete();
        return response()->json(['success' => true]);
    }
}
