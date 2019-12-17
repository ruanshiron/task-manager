<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Approver;

use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Approver::class, function (Faker $faker) {
    return [
        'task_id' => $faker->numberBetween($min = 1, $max = 20) ,
        'user_id' => $faker->numberBetween($min = 1, $max = 100),
        
    ];
});
