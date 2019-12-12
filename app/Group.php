<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $guarded = [];

    public function captain()
    {
        return $this->hasOne('App\User', 'id', 'captain_id');
    }

    public function deputies()
    {
        return $this->belongsToMany('App\User', 'deputies', 'user_id', 'group_id');
    }

    public function members()
    {
        return $this->belongsToMany('App\User', 'members', 'user_id', 'group_id');
    }
}
