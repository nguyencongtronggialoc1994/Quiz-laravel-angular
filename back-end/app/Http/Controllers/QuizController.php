<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuizzesRequest;

use App\Models\Quizzes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuizController extends Controller
{

    public function index()
    {
        $quizzes = Quizzes::all();
        return response()->json($quizzes, 200);
    }


    public function create()
    {
        //
    }


    public function store(QuizzesRequest $request)
    {

        $quizzes = new Quizzes();
        $quizzes->fill($request->all());


        $option1 = $quizzes->option1;
        $option2 = $quizzes->option2;
        $option3 = $quizzes->option3;
        $option4 = $quizzes->option4;
        if ($option1 == $option2 || $option1 == $option3 || $option1 == $option4 || $option2 == $option3 || $option2 == $option4 || $option3 == $option4) {
            $statusCode = 404;
        } else {
            $statusCode = 201;
            $quizzes->save();
        }

        if (!$quizzes) {
            $statusCode = 404;
        }
        $data = [$statusCode, $quizzes];

        return response()->json($data);
    }


    public function show($id)
    {
        $quizzes = Quizzes::find($id);
        $statusCode = 200;
        if (!$quizzes) {
            $statusCode = 404;
        }

        return response()->json($quizzes, $statusCode);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        $quizzes = Quizzes::find($id);
        $quizzes->fill($request->all());
        $option1 = $quizzes->option1;
        $option2 = $quizzes->option2;
        $option3 = $quizzes->option3;
        $option4 = $quizzes->option4;
        if ($option1 == $option2 || $option1 == $option3 || $option1 == $option4 || $option2 == $option3 || $option2 == $option4 || $option3 == $option4) {
            $statusCode = 404;
        } else {
            $statusCode = 201;
            $quizzes->save();
        }

        if (!$quizzes) {
            $statusCode = 404;
        }
        $data = [$statusCode, $quizzes];

        return response()->json($data);
    }


    public function destroy($id)
    {
        DB::table('category_quiz')->where('quiz_id', '=', $id)->delete();
        $quizzes = Quizzes::find($id);
        $message = "User not found";
        $statusCode=404;
        if ($quizzes) {
            $quizzes->delete();
            $message = "delete success";
            $statusCode = 200;
        }

        return response()->json($message, $statusCode);
    }

    public function showTest($id)
    {
        $test = DB::table('quizzes')
            ->join('category_quiz', 'quizzes.id', '=', 'category_quiz.quiz_id')
            ->join('categories', 'category_quiz.category_id', '=', 'categories.id')
            ->where('categories.id', '=', $id)
            ->select('quizzes.*')
            ->get();
        return response()->json($test);
    }

    public function showQuizByCategoryId($id)
    {
        $quizzes = DB::table('quizzes')
            ->join('category_quiz', 'quizzes.id', '=', 'category_quiz.quiz_id')
            ->join('categories', 'category_quiz.category_id', '=', 'categories.id')
            ->where('categories.id', '=', $id)->select('quizzes.*')->get();
        return response()->json($quizzes, 200);
    }

    public function showQuizByCategoryId2($id)
    {
        $arr1 = [];
        $arr2 = [];
        $quizzes = Quizzes::all();

        foreach ($quizzes as $quiz) {
            $arr1[] = $quiz;
        }
        $quizzesByCategory = DB::table('quizzes')
            ->join('category_quiz', 'quizzes.id', '=', 'category_quiz.quiz_id')
            ->join('categories', 'category_quiz.category_id', '=', 'categories.id')
            ->where('categories.id', '=', $id)->select('quizzes.*')->get();
        foreach ($quizzesByCategory as $quiz) {
            $arr2[] = $quiz;
        }

        for ($i = count($arr1); $i > 0; $i--) {
            for ($j = 0; $j < count($arr2); $j++) {
                if ($arr2[$j]->id == $arr1[$i]->id) {
                    array_splice($arr1, $i, 1);
                }
            }
        }
        return response()->json($arr1, 200);
    }

    public function searchByCategory($key)
    {
        $quizzes = DB::table('quizzes')->join('categories', 'quizzes.category_id', '=', 'categories.id')
            ->where('categories.name', 'LIKE', '%' . $key . '%')
            ->select('quizzes.*', 'categories.name')
            ->get();
        return response()->json($quizzes, 200);
    }
}
