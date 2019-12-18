<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Task;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Task::class, function (Faker $faker) {
    return [
        'parent_id' => $faker->boolean(50) ? $faker->numberBetween($min = 1, $max = 20) : null,
        'template_id' => $faker->numberBetween($min = 1, $max = 20),
        'group_id' => $faker->numberBetween($min = 1, $max = 20),
        'priority_id' => $faker->numberBetween($min = 1, $max = 3),
        'start_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'end_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'name' => $faker->sentence($nbWords = 6, $variableNbWords = true)

    ];
});
