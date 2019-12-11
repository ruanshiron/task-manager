<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $guarded = [];

    public function parent()
    {
        return $this->belongsTo(Unit::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Unit::class, 'parent_id');
    }

    public function unit_deputies()
    {
        return $this->belongsToMany('App\User', 'unit_deputies', 'user_id', 'unit_id');
    }
    public function unit_members()
    {
        return $this->belongsToMany('App\User', 'unit_members', 'user_id', 'unit_id');
    }
}
