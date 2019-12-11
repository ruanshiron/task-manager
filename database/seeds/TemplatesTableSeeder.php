<?php

use Illuminate\Database\Seeder;
use App\Template;

class TemplatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Template::class, 20)->create();
    }
}
