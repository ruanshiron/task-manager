<?php

use App\Action;
use Illuminate\Database\Seeder;


class ActionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Action::class, 20)->create();
    }
}
