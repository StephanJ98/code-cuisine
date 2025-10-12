<?php

namespace Database\Seeders;

use App\Models\Enum\IngredientUnit;
use App\Models\Ingredient;
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
    }
}
