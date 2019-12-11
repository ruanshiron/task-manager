<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    protected $guarded = [];

    public function template()
    {
        return $this->belongsTo('App\Template');
    }

}
