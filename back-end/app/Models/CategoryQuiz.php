<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryQuiz extends Model
{
    use HasFactory;
    protected $table='category_quiz';
    protected $fillable=[
        'category_id',
        'quiz_id',
    ];
}
