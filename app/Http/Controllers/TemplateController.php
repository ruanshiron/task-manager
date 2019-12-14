<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Template;
use App\Action;
use App\Information;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Template::with('author')->with('tasks')->get());
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
            "kpi_fun" => "nullable"
        ])->validate();

        $validator_2 = Validator::make($request->all(), [
            "viewers_id" => "required|array",
            "implementers_id" => "required|array",
            "approvers_id" => "required|array",
            "observers_id" => "required|array"
        ])->validate();

        $validator_3 = Validator::make($request->all(), [
            "actions" => "required|array",
            "actions.*.name" => "required|string",
            "actions.*.must_be" => "required|boolean",
            "actions.*.order" => "required",
            "actions.*.description" => "nullable",
        ])->validate();

        $validator_4 = Validator::make($request->all(), [
            "informations" => "required|array",
            "informations.*.name" => "required|string",
            "informations.*.must_be" => "required|boolean",
            "informations.*.order" => "required",
            "informations.*.filetype_id" => "required",
            "informations.*.description" => "nullable",
        ])->validate();

        $template = Template::create($validator);
        $template->author_id = auth()->user()->id;
        $template->save();

        $viewers = array();
        $approvers = array();
        $observers = array();
        $implementers = array();


        if ($validator_2["viewers_id"]) {
            foreach ($validator_2["viewers_id"] as $value) {
                array_push($viewers, ["user_id" => $value, "template_id" => $template->id]);
            }
        }

        if ($validator_2["approvers_id"]) {
            foreach ($validator_2["approvers_id"] as $value) {
                array_push($approvers, ["user_id" => $value, "template_id" => $template->id]);
            }
        }

        if ($validator_2["observers_id"]) {
            foreach ($validator_2["observers_id"] as $value) {
                array_push($observers, ["user_id" => $value, "template_id" => $template->id]);
            }
        }

        if ($validator_2["implementers_id"]) {
            foreach ($validator_2["implementers_id"] as $value) {
                array_push($implementers, ["user_id" => $value, "template_id" => $template->id]);
            }
        }

        DB::table('template_observers')->insert($observers);
        DB::table('template_approvers')->insert($approvers);
        DB::table('template_viewers')->insert($viewers);
        DB::table('template_implementers')->insert($implementers);



        foreach ($validator_3["actions"] as $action) {
            Action::create([
                "name" => $action["name"],
                "description" => $action["description"],
                "must_be" => $action["must_be"],
                "order" => $action["order"],
                "template_id" => $template->id
            ]);
        }

        foreach ($validator_4["informations"] as $information) {
            Information::create([
                "name" => $information["name"],
                "description" => $information["description"],
                "must_be" => $information["must_be"],
                "filetype_id" => $information["filetype_id"],
                "order" => $information["order"],
                "template_id" => $template->id
            ]);
        }


        return response()->json($template);

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
    public function edit($id)
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
        //
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
