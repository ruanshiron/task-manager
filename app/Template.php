<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Template extends Model
{
    protected $guarded = [];

    public function viewers()
    {
        return $this->belongsToMany('App\User', 'templates_viewers', 'user_id', 'template_id');
    }

    public function implementers()
    {
        return $this->belongsToMany('App\User', 'template_implementers', 'user_id', 'template_id');
    }

    public function approvers()
    {
        return $this->belongsToMany('App\User', 'template_approvers', 'user_id', 'template_id');
    }

    public function observers()
    {
        return $this->belongsToMany('App\User', 'template_observers', 'user_id', 'template_id');
    }

    public function actions()
    {
        return $this->hasMany('App\Action');
    }

    public function informations()
    {
        return $this->hasMany('App\Information');
    }
}
