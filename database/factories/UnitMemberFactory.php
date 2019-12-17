<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\UnitMember;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(UnitMember::class, function (Faker $faker) {
    return [
        'member_id' => $faker->numberBetween($min = 1, $max = 100) ,
        'unit_id' => $faker->numberBetween($min = 1, $max = 20),
        'mission' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
    ];
});
