<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Unit extends Model
{
    protected $guarded = [];

    protected $hidden = ['captain_id'];

    public function parent()
    {
        return $this->belongsTo(Unit::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Unit::class, 'parent_id');
    }

    public function deputies()
    {
        return $this->belongsToMany('App\User', 'unit_deputies', 'unit_id', 'user_id');
    }
    public function members()
    {
        return $this->belongsToMany('App\User', 'unit_members', 'unit_id', 'member_id');
    }

    public function captain() {
        return $this->hasOne('App\User', 'id', 'captain_id');
    }
}
