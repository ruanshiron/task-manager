<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TaskController extends Controller
{
    private function findChild($tasks)
    {
        foreach ($tasks as $task) {
            $task->priority;
            foreach ($task->children as $child) {
                // $child->with('priority', 'children', 'parent')->get();
                $child->priority;
                $this->findChild($child->children);
            }
        }

        return $tasks;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::with('priority', 'children', 'parent')->where('parent_id', null)->get();

        $tasks = $this->findChild($tasks);

        return response()->json($tasks);
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
            "parent_id" => "nullable",
            "template_id" => "required",
            "group_id" => "required",
            "priority_id" => "required",
            "name" => "required",
            "start_at" => "required",
            "end_at" => "required",

        ])->validate();

        $validator_2 = Validator::make($request->all(), [
            "kpis_id" => "required|array",
            "implementers_id" => "required|array",
            "approvers_id" => "required|array",
            "observers_id" => "required|array"
        ])->validate();

        $task = Task::create($validator);

        $kpis = array();
        $observers = array();
        $approvers = array();
        $implementers = array();

        if ($validator_2["kpis_id"]) {
            foreach ($validator_2["kpis_id"] as $value) {
                array_push($kpis, ["kpi_id" => $value, "task_id" => $task->id]);
            }
        }

        if ($validator_2["approvers_id"]) {
            foreach ($validator_2["approvers_id"] as $value) {
                array_push($approvers, ["user_id" => $value, "task_id" => $task->id]);
            }
        }

        if ($validator_2["observers_id"]) {
            foreach ($validator_2["observers_id"] as $value) {
                array_push($observers, ["user_id" => $value, "task_id" => $task->id]);
            }
        }

        if ($validator_2["implementers_id"]) {
            foreach ($validator_2["implementers_id"] as $value) {
                array_push($implementers, ["user_id" => $value, "task_id" => $task->id]);
            }
        }

        DB::table('observers')->insert($observers);
        DB::table('approvers')->insert($approvers);
        DB::table('task_kpis')->insert($kpis);
        DB::table('implementers')->insert($implementers);

        return response()->json($task);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = Task::with('approvers', 'observers', 'implementers', 'priority')->find($id);
        return response()->json($task);
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
        $task = Task::find($id)->delete();

        return response()->json([
            "succeed" => true,
        ]);
    }
}
