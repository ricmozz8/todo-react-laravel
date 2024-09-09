<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    // this is the Todo models that references the todos table in your database
    // laravel allows to change that by defining a variable in the model
    /* $table = 'laravel_todos'; <- this will indicate laravel that the table
        for this model is called laravel_todos. For convention purposes, you
        define the table name in the migrations with a lowercase and plural name.
        The model is called singularly and capitalized.

        read more in: https://laravel.com/docs/11.x/eloquent
    */


    /**
     * This is the fillable property. In a sentence, this allows us to use the ::create method
     * to create records in the database.
     * @var array Specify which fields are fillable
     */
    protected $fillable = ['content'];


    /**
     *  This is the appends property. This adds some properties to the model that are not
     * in the defined table. You may use this for calculated values or specific data
     * that is unnecessary to store in the database.
     * @var array specify the name of the property
     */
    protected $appends = ['created'];

    /**
     * This is the method that will return the created property in the appends array. This will
     * need to have this naming convention in order to work.
     * @return mixed diffForHumans is a method from the Carbon library.
     * https://carbon.nesbot.com/docs
     */
    public function getCreatedAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
