<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\TaskKpi;

use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(TaskKpi::class, function (Faker $faker) {
    return [
        'task_id' => $faker->numberBetween($min = 1, $max = 20) ,
        'kpi_id' => $faker->numberBetween($min = 1, $max = 20),
        
    ];
});
