<?php

use Illuminate\Database\Seeder;
use App\Unit;
use Faker as Faker;

class UnitsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Unit::class, 10)->create();
        $faker = Faker\Factory::create();
        for ($i=0; $i < 15 ; $i++) { 
            Unit::create([
                'parent_id' => $faker->boolean(70) ? $faker->numberBetween($min = 1, $max = 10) : null,
                'captain_id' => $faker->numberBetween($min = 1, $max = 20),
                'name' => $faker->sentence($nbWords = 2, $variableNbWords = true),
                'description' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
            ]);
        }

        for ($i=0; $i < 20 ; $i++) { 
            Unit::create([
                'parent_id' => $faker->boolean(70) ? $faker->numberBetween($min = 1, $max = 25) : null,
                'captain_id' => $faker->numberBetween($min = 1, $max = 20),
                'name' => $faker->sentence($nbWords = 2, $variableNbWords = true),
                'description' => $faker->boolean(75) ? $faker->text($maxNbChars = 200) : null,
            ]);
        }
    }
}
