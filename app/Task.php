<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $guarded = [];

    public function parent()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Task::class, 'parent_id');
    }

    public function approvers() {
        return $this->belongsToMany('App\User', 'approvers', 'task_id', 'user_id');
    }

    public function observers() {
        return $this->belongsToMany('App\User', 'observers', 'task_id', 'user_id');
    }

    public function implementers()
    {
        return $this->belongsToMany('App\User', 'implementers', 'task_id', 'user_id');
    }

    public function priority() {
        return $this->belongsTo('App\Priority', 'priority_id');
    }
}
