<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Kpi;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Kpi::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence($nbWords = 6, $variableNbWords = true)
    ];
});
