<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Unit;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Unit::class, function (Faker $faker) {
    return [
        'parent_id' => null,
        'captain_id' => $faker->numberBetween($min = 1, $max = 20),
        'name' => $faker->sentence($nbWords = 2, $variableNbWords = true),
        'description' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
    ];
});
