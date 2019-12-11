<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Template;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


$factory->define(Template::class, function (Faker $faker) {
    return [
        'kpi_fun' => $faker->text($maxNbChars = 10),
        'description' => $faker->text($maxNbChars = 200),
        'name' => $faker->sentence($nbWords = 6, $variableNbWords = true)
    ];
});
