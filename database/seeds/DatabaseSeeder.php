<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(TemplatesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(TasksTableSeeder::class);
        $this->call(GroupsTableSeeder::class);
        $this->call(KpisTableSeeder::class);
        $this->call(PrioritiesTableSeeder::class);
        $this->call(FiletypesTableSeeder::class);
        $this->call(DeputiesTableSeeder::class);
        $this->call(MembersTableSeeder::class);
        $this->call(UnitsTableSeeder::class);
    }
}
