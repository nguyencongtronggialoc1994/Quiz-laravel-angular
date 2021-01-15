<?php

namespace App\Http\Controllers;

use App\Models\Result;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ResultController extends Controller
{
    public function index()
    {
        $results = DB::table('users')
            ->join('results', 'users.id', '=', 'results.user_id')
            ->join('categories', 'results.category_id', '=', 'categories.id')
            ->select('users.email', 'results.*')->get();
        return response()->json($results, 200);
    }

    public function store(Request $request)
    {

        $result = new Result();
        $result->fill($request->all());
        // $result->point=$request->point;
        // $result->category_id= $request->category_id;
        // $result->user_id=$request->user_id;
        $result->save();
        $statusCode = 201;
        if (!$result)
            $statusCode = 404;
        return response()->json($result, $statusCode);
    }

    public function delete($id)
    {
        $result = Result::findOrFail($id);
        $message = "result not found";
        $statusCode = 404;
        if ($result) {
            $result->delete();
            $message = "delete successfully";
            $statusCode = 200;
        }
        return response()->json($message, $statusCode);
    }
}
