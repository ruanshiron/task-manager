<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('deputies', 'DeputyController');

Route::delete('deputies/{id}', 'DeputyController@destroy');

Route::resource('members', 'MemberController');

Route::resource('groups', 'GroupController');
