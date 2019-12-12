<?php

use Illuminate\Database\Seeder;
use App\Deputy;

class DeputiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {       
        factory(Deputy::class, 25)->create();
    }
}
