<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $guarded = [];

    public function deputies() {
        return $this->hasMany(Deputy::class);
    }

    public function members() {
        return $this->hasMany(Member::class);
    }
}
