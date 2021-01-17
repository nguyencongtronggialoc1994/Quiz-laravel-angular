<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoryQuizTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_quiz', function (Blueprint $table) {
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('quiz_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('quiz_id')->references('id')->on('quizzes');
            $table->primary(['category_id','quiz_id']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_quiz');
    }
}
