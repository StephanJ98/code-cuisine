<?php

namespace App\Models;

use App\Models\Enum\RecetteDifficulty;
use App\Models\Traits\HasSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Recette extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\RecetteFactory> */
    use HasFactory;
    use HasSortable;
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'description',
        'duration',
        'persons',
        'level',
    ];

    protected $sortable = [
        'name',
        'duration',
        'persons',
        'level',
        'id'
    ];

    protected $casts = [
        'level' => RecetteDifficulty::class,
        'created_at' => 'immutable_datetime',
        'updated_at' => 'immutable_datetime',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('image')->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('thumb')
            ->fit(Fit::Crop, 160, 160);
    }
}
