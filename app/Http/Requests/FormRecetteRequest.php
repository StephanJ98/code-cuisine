<?php

namespace App\Http\Requests;

use App\Models\Enum\IngredientUnit;
use App\Models\Enum\RecetteDifficulty;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FormRecetteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'description' => ['nullable', 'string', 'max:255'],
            'duration' => ['required', 'string', 'min:2'],
            'persons' => ['required', 'integer', 'min:1'],
            'level' => ['required', Rule::enum(RecetteDifficulty::class)],
            'image' => ['nullable', 'image', 'mimes:jpeg,png,jpg,webp', 'max:2048'], // max 2MB
        ];
    }
}
