<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Member;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Member::class, function (Faker $faker) {
    return [
        'user_id' => $faker->numberBetween($min = 1, $max = 100),
        'group_id' => $faker->numberBetween($min = 1, $max = 20),
        'mission' => $faker->text($maxNbChars = 200)         
    ];
});
