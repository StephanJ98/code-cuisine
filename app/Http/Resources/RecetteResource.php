<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RecetteResource extends JsonResource
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
            'id' => $this->resource->id,
            'name' => $this->resource->name,
            'duration' => $this->resource->duration,
            'persons' => $this->resource->persons,
            'level' => $this->resource->level,
            'level_label' => $this->resource->level->label(),
            'image' => $this->resource->getFirstMediaUrl('image', 'thumb'),
        ];
    }
}
