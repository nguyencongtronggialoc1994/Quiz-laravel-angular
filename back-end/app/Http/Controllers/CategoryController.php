<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use Illuminate\Database\Console\DbCommand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        return response()->json($categories, 200);
    }


    public function create()
    {
        //
    }


    public function store(AddCategoryRequest $request)
    {
        $categories = new Category();
        $categories->fill($request->all());
        $categories->save();
        $statusCode = 201;
        if (!$categories)
            $statusCode = 404;
        return response($categories, $statusCode);

    }

    public function show($id)
    {
        $categories = Category::findOrFail($id);
        $statusCode = 200;
        if (!$categories)
            $statusCode = 404;
        return response()->json($categories, $statusCode);

    }


    public function edit($id)
    {
        //
    }


    public function update(UpdateCategoryRequest $request, $id)
    {
        $categories = Category::findOrFail($id);
        $categories->fill($request->all());
        $categories->save();
        $statusCode = 200;
        if (!$categories)
            $statusCode = 404;
        return response()->json($categories, $statusCode);
    }


    public function destroy($id)
    {
        DB::table('category_quiz')->where('category_id', '=', $id)->delete();
        DB::table('results')->where('category_id','=',$id)->delete();
        $category = Category::findOrFail($id);
        $message = "category not found";
        $statusCode=404;
        if ($category) {
            $category->delete();
            $message = "delete success";
            $statusCode = 200;
        }

        return response()->json($message, $statusCode);
    }



}
