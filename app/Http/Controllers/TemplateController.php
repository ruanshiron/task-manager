<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Template;

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
        return response()->json(Template::all());
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
            "informations" => "required|array"
        ])->validate();

        $template = Template::create($validator);

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
