<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Vinh',
            'email' => 'theten12@gmail.com',
            'password' => bcrypt('Theten12'),
        ]);

        factory(User::class, 100)->create();
    }
}
