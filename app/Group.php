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
        return $this->belongsToMany('App\User', 'deputies', 'group_id', 'user_id')->withPivot('mission');
    }

    public function members()
    {
        return $this->belongsToMany('App\User', 'members', 'group_id', 'user_id')->withPivot('mission');
    }
}
