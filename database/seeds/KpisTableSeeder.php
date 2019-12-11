<?php

use Illuminate\Database\Seeder;
use App\Kpi;

class KpisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Kpi::class, 20)->create();
    }
}
