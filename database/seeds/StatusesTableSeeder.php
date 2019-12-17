<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
            'name' => 'Chưa thực hiện',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Đang thực hiện',
        ]);
        DB::table('statuses')->insert([
            'name' => 'Đã thực hiện',
        ]);

    }
}
