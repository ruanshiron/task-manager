<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Group;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Group::class, function (Faker $faker) {
    return [
        'captain_id' => $faker->numberBetween($min = 1, $max = 100),
        'description' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
        'name' => $faker->company
    ];
});
