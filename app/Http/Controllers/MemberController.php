<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Member;

class MemberController extends Controller
{
    public function index()
    {
        $members = Member::all();
        return response()->json($members);
    }

    public function store(Request $request)
    {
        request()->validate([
    		'name' => 'required',
            'mission' => 'required'
    	]);

    	Member::create(request(['name', 'mission']));
        return response()->json(['success' => true]);
    }

    public function show($id)
    {

    }

    public function edit($id)
    {
        $item = Member::find($id);
        return response()->json($item);
    }

    public function update(Request $request, $id)
    {
        $item = Member::find($id);
        $item->name = $request->get('name');
        $item->mission = $request->get('mission');
        $item->save();

        return response()->json('Successfully Updated');
    }

    public function destroy($id)
    {
      $item = Member::find($id);
      $item->delete();

      return response()->json('Successfully Deleted');
    }
}
