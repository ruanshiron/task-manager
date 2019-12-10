<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Deputy;
use App\Group;

class DeputyController extends Controller
{
    public function index()
    {
        $deputies = Deputy::all();
        return response()->json($deputies);
    }

    // public function store(Request $request)
    // {
    //     request()->validate([
    // 		'name' => 'required',
    // 		'mission' => 'required'
    // 	]);

    // 	Deputy::create(request(['name', 'mission']));
    //     return response()->json(['success' => true]);
    // }

    public function store(Group $group)
    {
        dd($group);
        Deputy::create([
            'group_id' => $group->id,
            'name' => request('name'),
            'mission' => request('mission')
        ]);

        return response()->json(['success' => true]);
    }


    public function show($id)
    {

    }

    public function edit(Deputy $deputy)
    {
        $deputy = Deputy::find($id);
        return response()->json(['success' => true]);
    }

    public function update(Deputy $deputy)
    {
        // $item = Deputy::find($id);
        // $item->name = $request->get('name');
        // $item->mission = $request->get('mission');
        // $item->save();
        $deputy->update(request(['name', 'mission']));

        return response()->json(['success' => true]);
    }

    public function destroy(Deputy $deputy)
    {
        $deputy = Deputy::find($id);

        $deputy->delete();
      return response()->json(['success' => true]);
    }
}
