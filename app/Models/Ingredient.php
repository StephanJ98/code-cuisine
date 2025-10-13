<?php

namespace App\Models;

use App\Models\Enum\IngredientUnit;
use App\Models\Traits\HasSortable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property IngredientUnit $unit
 * @method static \Database\Factories\IngredientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Ingredient query()
 * @mixin \Eloquent
 */
class Ingredient extends Model
{
    /** @use HasFactory<\Database\Factories\IngredientFactory> */
    use HasFactory;
    use HasSortable;

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
}
