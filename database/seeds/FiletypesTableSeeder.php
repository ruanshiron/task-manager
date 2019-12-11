<?php

use Illuminate\Database\Seeder;

class FiletypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('filetypes')->insert([
            'name' => 'PDF',
        ]);
        DB::table('filetypes')->insert([
            'name' => 'DOC',
        ]);
        DB::table('filetypes')->insert([
            'name' => 'EXCEL',
        ]);

    }
}
