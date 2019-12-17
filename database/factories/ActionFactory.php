<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Action;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Action::class, function (Faker $faker) {
    return [
        'template_id' => $faker->numberBetween($min = 1, $max = 100) ,
        'order' => $faker->numberBetween($min = 1, $max = 20),
        'name' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
        'description' =>$faker->text($maxNbChars = 200),
        'order' => $faker->numberBetween($min = 1, $max = 20),
        'must_be' => $faker->numberBetween($min = 0, $max = 1),
    ];
});
