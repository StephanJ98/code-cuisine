<?php

namespace App\Models\Enum;

enum RecetteDifficulty: string
{
    case Easy = 'easy';
    case Medium = 'medium';
    case Hard = 'hard';
    case Chef = 'chef';

    public function label(): string
    {
        return match ($this) {
            self::Easy => 'Facile',
            self::Medium => 'Moyen',
            self::Hard => 'Difficile',
            self::Chef => 'Grand Chef',
        };
    }

    public static function getOptions(): array
    {
        return array_map(fn(self $difficulty) => [
            'value' => $difficulty->value,
            'label' => $difficulty->label(),
        ], self::cases());
    }
}
