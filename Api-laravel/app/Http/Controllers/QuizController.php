<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuizzesRequest;
use App\Models\Quizzes;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $quizzes= Quizzes::all();
        return response()->json($quizzes,200);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuizzesRequest $request)
    {
        $quizzes= new Quizzes();
        $quizzes->fill($request-> all());
        $quizzes->save();
        $statusCode= 201;
        if(!$quizzes){
            $statusCode=404;
        }

        return response()-> json($quizzes,$statusCode);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $quizzes= Quizzes::find($id);
        $statusCode=200;
        if(!$quizzes){
            $statusCode=404;
        }

        return response()-> json($quizzes, $statusCode);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(QuizzesRequest $request, $id)
    {
        $quizzes= Quizzes::find($id);
        $statusCode=200;
        if(!$quizzes){
            $statusCode=404;
        }
        $quizzes->fill($request-> all());
        $quizzes->save();

        return response()-> json($quizzes,$statusCode);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quizzes= Quizzes::find($id);
        $message="User not found";
        if($quizzes){
            $quizzes->delete();
            $message="delete success";
            $statusCode=200;
        }

        return response()-> json($message, $statusCode);
    }
}
