<?php

use Illuminate\Database\Seeder;
use Faker as Faker;
use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Task::class, 20)->create();
        $faker = Faker\Factory::create();
        for ($i=0; $i < 30 ; $i++) { 
            Task::create([
                'parent_id' => $faker->boolean(70) ? $faker->numberBetween($min = 1, $max = 20) : null,
                'template_id' => $faker->numberBetween($min = 1, $max = 20),
                'group_id' => $faker->numberBetween($min = 1, $max = 20),
                'priority_id' => $faker->numberBetween($min = 1, $max = 5),
                'start_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'end_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'name' => $faker->sentence($nbWords = 6, $variableNbWords = true)
            ]);
        }

        for ($i=0; $i < 30 ; $i++) { 
            Task::create([
                'parent_id' => $faker->boolean(70) ? $faker->numberBetween($min = 1, $max = 50) : null,
                'template_id' => $faker->numberBetween($min = 1, $max = 20),
                'group_id' => $faker->numberBetween($min = 1, $max = 20),
                'priority_id' => $faker->numberBetween($min = 1, $max = 5),
                'start_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'end_at' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'name' => $faker->sentence($nbWords = 6, $variableNbWords = true)
            ]);
        }
    }
}
