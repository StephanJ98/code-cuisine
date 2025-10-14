<?php

namespace App\Models;

use App\Models\Enum\IngredientUnit;
use App\Models\Traits\HasSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

/**
 * @property IngredientUnit $unit
 * @method static \Database\Factories\IngredientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient query()
 * @mixin \Eloquent
 */
class Ingredient extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\IngredientFactory> */
    use HasFactory;
    use HasSortable;
    use InteractsWithMedia;

    protected $fillable = [
        'name',
        'unit',
    ];

    protected $sortable = [
        'name',
        'unit',
        'id'
    ];

    protected $casts = [
        'unit' => IngredientUnit::class,
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
