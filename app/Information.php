<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Information extends Model
{
    protected $guarded = [];

    public function template()
    {
        return $this->belongsTo('App\Template');
    }
}
