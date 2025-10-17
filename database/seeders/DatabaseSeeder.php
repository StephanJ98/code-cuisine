<?php

namespace Database\Seeders;

use App\Models\Enum\IngredientUnit;
use App\Models\Enum\RecetteDifficulty;
use App\Models\Ingredient;
use App\Models\Recette;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::firstOrCreate(
            ['email' => 'diego.jeandon@gmail.com'],
            [
                'name' => 'Diego Jeandon',
                'password' => Hash::make('password_1234'),
                'email_verified_at' => now(),
            ]
        );

        $ingredients = [
            ['name' => 'Beurre doux', 'unit' => IngredientUnit::Grams],
            ['name' => 'Sucre roux', 'unit' => IngredientUnit::Grams],
            ['name' => 'Farine de blé', 'unit' => IngredientUnit::Grams],
            ['name' => 'Œufs', 'unit' => IngredientUnit::None],
            ['name' => 'Lait entier', 'unit' => IngredientUnit::Ml],
            ['name' => 'Levure chimique', 'unit' => IngredientUnit::Grams],
            ['name' => 'Extrait de vanille', 'unit' => IngredientUnit::Ml],
            ['name' => 'Sel', 'unit' => IngredientUnit::Grams],
            ['name' => 'Chocolat noir', 'unit' => IngredientUnit::Grams],
            ['name' => 'Chocolat au lait', 'unit' => IngredientUnit::Grams],
            ['name' => 'Chocolat blanc', 'unit' => IngredientUnit::Grams],
            ['name' => 'Crème liquide', 'unit' => IngredientUnit::Ml],
            ['name' => 'Sucre glace', 'unit' => IngredientUnit::Grams],
            ['name' => 'Fruits rouges', 'unit' => IngredientUnit::Grams],
            ['name' => 'Citron', 'unit' => IngredientUnit::None],
            ['name' => 'Eau', 'unit' => IngredientUnit::Ml],
            ['name' => 'Huile végétale', 'unit' => IngredientUnit::Ml],
            ['name' => 'Miel', 'unit' => IngredientUnit::Ml],
            ['name' => 'Amandes effilées', 'unit' => IngredientUnit::Grams],
            ['name' => 'Noix de coco râpée', 'unit' => IngredientUnit::Grams],
            ['name' => 'Pépites de chocolat', 'unit' => IngredientUnit::Grams],
            ['name' => 'Yaourt nature', 'unit' => IngredientUnit::Grams],
            ['name' => 'Fromage blanc', 'unit' => IngredientUnit::Grams],
            ['name' => 'Cacao en poudre', 'unit' => IngredientUnit::Grams],
            ['name' => 'Noix', 'unit' => IngredientUnit::Grams],
            ['name' => 'Pistaches', 'unit' => IngredientUnit::Grams],
            ['name' => 'Sirop d\'érable', 'unit' => IngredientUnit::Ml],
            ['name' => 'Café', 'unit' => IngredientUnit::Ml],
            ['name' => 'Rhum', 'unit' => IngredientUnit::Ml],
            ['name' => 'Mascarpone', 'unit' => IngredientUnit::Grams],
            ['name' => 'Fromage à la crème', 'unit' => IngredientUnit::Grams],
        ];

        Ingredient::factory()->createMany($ingredients);

        $recettes = [
            [
                'name' => 'Tarte au citron meringuée',
                'description' => 'Une délicieuse tarte au citron avec une meringue légère et aérienne.',
                'duration' => '1h30',
                'persons' => 6,
                'level' => RecetteDifficulty::Medium,
            ],
            [
                'name' => 'Crème brûlée',
                'description' => 'Une crème onctueuse avec une croûte de sucre caramélisé, un dessert élégant et savoureux.',
                'duration' => '1h15',
                'persons' => 4,
                'level' => RecetteDifficulty::Medium,
            ],
            [
                'name' => 'Tiramisu classique',
                'description' => 'Un dessert italien traditionnel à base de mascarpone, café et cacao, idéal pour toutes les occasions.',
                'duration' => '4h (incluant le temps de réfrigération)',
                'persons' => 6,
                'level' => RecetteDifficulty::Medium,
            ],
            [
                'name' => 'Ile flottante',
                'description' => 'Un dessert léger et aérien à base de blancs d\'œufs, servi sur une crème anglaise.',
                'duration' => '1h',
                'persons' => 4,
                'level' => RecetteDifficulty::Medium,
            ],
            [
                'name' => 'Mousse au chocolat',
                'description' => 'Une mousse riche et onctueuse, parfaite pour les amateurs de chocolat.',
                'duration' => '30 minutes (plus 2h de réfrigération)',
                'persons' => 4,
                'level' => RecetteDifficulty::Easy,
            ],
            [
                'name' => 'Strudel aux pommes',
                'description' => 'Une délicieuse pâtisserie d\'origine autrichienne, garnie de pommes et de cannelle.',
                'duration' => '1h',
                'persons' => 6,
                'level' => RecetteDifficulty::Medium,
            ],
            [
                'name' => 'Croissants',
                'description' => 'Des croissants frais et feuilletés, parfaits pour le petit-déjeuner.',
                'duration' => '3h (incluant le temps de repos)',
                'persons' => 8,
                'level' => RecetteDifficulty::Chef,
            ],
            [
                'name' => 'Macarons français',
                'description' => 'Des macarons délicats et colorés, garnis de ganache ou de confiture.',
                'duration' => '4 jours (incluant le temps de repos)',
                'persons' => 12,
                'level' => RecetteDifficulty::Chef,
            ]
        ];

        Recette::factory()->createMany($recettes);
    }
}
