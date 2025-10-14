<?php

namespace App\Models\Enum;

enum IngredientUnit: string
{
    case Grams = "g";
    case Kilograms = "kg";
    case Slice = "slice";
    case Ml = "ml";
    case Tablespoon = "tbsp";
    case Teaspoon = "tsp";
    case None = "none";

    public function label(): string
    {
        return match ($this) {
            self::Grams => "g",
            self::Kilograms => "kg",
            self::Slice => "Tranche",
            self::Ml => "ml",
            self::Tablespoon => "Cuillère à soupe",
            self::Teaspoon => "Cuillère à café",
            self::None => "",
        };
    }

    public static function getOptions(): array
    {
        return array_map(fn(self $unit) => [
            'value' => $unit->value,
            'label' => $unit->label() ?: 'Aucune quantité',
        ], self::cases());
    }
}
