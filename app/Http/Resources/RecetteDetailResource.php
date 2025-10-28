<?php

namespace App\Http\Resources;

use App\Models\Ingredient;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecetteDetailResource extends RecetteResource
{
    public static $wrap = null;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            ...parent::toArray($request),
            'description' => $this->resource->description,
            'ingredients' => $this->ingredients->map(fn(Ingredient $ingredient) => [
                'id' => $ingredient->id,
                'unit_label' => $ingredient->unit->label(),
                'quantity' => $ingredient->pivot->quantity,
                'name' => $ingredient->name,
            ])
        ];
    }
}
