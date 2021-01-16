<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;


class QuizzesRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title'=> "required|max:255",
            'text'=> "required|max:10000",
            'option1'=> "required|max:255",
            'option2'=> "required|max:255",
            'option3'=> "required|max:255",
            'option4'=> "required|max:255",
            'correctAnswer'=> "required|max:255"

        ];
    }

    public function messages()
    {
        return [
            'text.required'=> 'Không được để trống',
            'title.required'=> 'Không được để trống',
            'option1.required'=> 'Không được để trống',
            'option2.required'=> 'Không được để trống',
            'option3.required'=> 'Không được để trống',
            'option4.required'=> 'Không được để trống',
            'correctAnswer.required'=> 'Không được để trống',


            'text.max' => ' Không được quá 10000 ký tự',
            'title.max' => ' Không được quá 255 ký tự',
            'option1.max' => ' Không được quá 255 ký tự',
            'option2.max' => ' Không được quá 255 ký tự',
            'option3.max' => ' Không được quá 255 ký tự',
            'option4.max' => ' Không được quá 255 ký tự',
            'correctAnswer.max' => ' Không được quá 255 ký tự',

        ];
    }

    // protected function failedValidation(Validator $validator)
    // {
    //     throw (new ValidationException($validator))
    //     ->status(200)
    //     ->errorBag($this -> errorBag)
    //     ->redirectTo($this->getRedirectUrl());
    // }
}
