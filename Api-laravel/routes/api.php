<?php

<<<<<<< HEAD
use App\Http\Controllers\CategoryController;
=======
use App\Http\Controllers\UserController;
>>>>>>> ed07480ac6a19a623ca3a7f9c7bb39c3f5f34a95
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
Route::post('login',[UserController::class,'authenticate']);
Route::post('register',[UserController::class,'register']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('categories')->group(function (){
    Route::get('/',[CategoryController::class,'index']);
    Route::get('/{id}',[CategoryController::class,'show']);
    Route::post('/',[CategoryController::class,'store']);
    Route::put('/{id}',[CategoryController::class,'update']);
    Route::delete('/{id}',[CategoryController::class,'destroy']);
});
