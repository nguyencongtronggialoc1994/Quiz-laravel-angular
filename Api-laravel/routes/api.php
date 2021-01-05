<?php

use App\Http\Controllers\QuizController;
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
Route::prefix('quizzes')->group(function () {
    Route::get('/', [QuizController::class,'index']);
    Route::post('/',[QuizController::class,'store']);
    Route::get('/{id}',[QuizController::class,'show']);
    Route::put('/{id}',[QuizController::class,'update']);
});
