<?php

use Illuminate\Database\Seeder;

class PrioritiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('priorities')->insert([
            'title' => 'Cao',
        ]);
        DB::table('priorities')->insert([
            'title' => 'Trung Bình',
        ]);
        DB::table('priorities')->insert([
            'title' => 'Thấp',
        ]);

    }
}
