<?php

use Illuminate\Database\Seeder;
use App\TaskKpi;

class TaskKpiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(TaskKpi::class, 20)->create();
    }
}
