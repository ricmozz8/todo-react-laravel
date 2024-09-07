<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = ['content'];

    protected $appends = ['created'];

    public function getCreatedAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
