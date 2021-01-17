<?php

namespace App\Http\Controllers;

use App\Models\CategoryQuiz;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryQuizController extends Controller
{

    public function store(Request $request){
        $categoryQuiz = new CategoryQuiz();
        $categoryQuiz->fill($request->all());
        $categoryQuiz->save();
        $statusCode = 201;
        if (!$categoryQuiz)
            $statusCode = 404;
        return response()->json($categoryQuiz,$statusCode);
    }
    public function delete($quiz_id,$category_id){
        DB::table('category_quiz')->where('quiz_id', '=', $quiz_id)->where('category_id','=',$category_id)->delete();
        $statusCode=200;
        $message='delete successfully';
        return response()->json($message,$statusCode);
    }
}
