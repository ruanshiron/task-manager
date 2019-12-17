<?php

use Illuminate\Database\Seeder;
use App\UnitMember;

class UnitMembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(UnitMember::class, 20)->create();
    }
}
