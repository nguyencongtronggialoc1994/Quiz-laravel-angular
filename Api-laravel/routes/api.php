<?php

<<<<<<< HEAD
use App\Http\Controllers\CategoryController;
=======
use App\Http\Controllers\QuizController;
>>>>>>> 8d6a80bfd9f8bad24f72d81c206c980c0507d289
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
<<<<<<< HEAD


Route::prefix('categories')->group(function (){
    Route::get('/',[CategoryController::class,'index']);
    Route::get('/{id}',[CategoryController::class,'show']);
    Route::post('/',[CategoryController::class,'store']);
    Route::put('/{id}',[CategoryController::class,'update']);
    Route::delete('/{id}',[CategoryController::class,'destroy']);
=======
Route::prefix('quizzes')->group(function () {
    Route::get('/', [QuizController::class,'index']);
    Route::post('/',[QuizController::class,'store']);
    Route::get('/{id}',[QuizController::class,'show']);
    Route::put('/{id}',[QuizController::class,'update']);
    Route::delete('/{id}',[QuizController::class,'destroy']);
>>>>>>> 8d6a80bfd9f8bad24f72d81c206c980c0507d289
});
