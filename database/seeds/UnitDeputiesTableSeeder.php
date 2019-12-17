<?php

use Illuminate\Database\Seeder;
use App\UnitDeputy;

class UnitDeputiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(UnitDeputy::class, 20)->create();
    }
}
