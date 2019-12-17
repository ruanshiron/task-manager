<?php

use Illuminate\Database\Seeder;
use App\Approver;

class ApproversTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Approver::class, 20)->create();
    }
}
