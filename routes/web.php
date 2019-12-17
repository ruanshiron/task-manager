<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('api')->group(function() {
    Route::get('/users/me', 'UserController@me');
    Route::resource('users', 'UserController');

    Route::resource('tasks', 'TaskController');
    Route::delete('tasks/delete/{id}', 'TaskController@destroy');
    Route::resource('groups', 'GroupController');
    Route::delete('groups/delete/{id}', 'GroupController@destroy');
    Route::resource('units', 'UnitController');
    Route::resource('templates', 'TemplateController');
    Route::delete('templates/delete/{id}', 'TemplateController@destroy');
    Route::resource('filetypes', 'FiletypeController');
    Route::resource('kpis', 'KpiController');
    Route::resource('priorities', 'PriorityController');
});

Route::get('/{path?}', 'HomeController@index')->where('path', '.*')->name('react');

// Route::get('/{path?}', 'HomeController@index')->where('path', '.*')->name('react');
