<?php

use App\Models\Ingredient;
use App\Models\Recette;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ingredient_recette', function (Blueprint $table) {
            $table->primary(['recette_id', 'ingredient_id']);
            $table->foreignIdFor(Recette::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Ingredient::class)->constrained()->onDelete('cascade');
            $table->integer('quantity')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ingredient_recipe');
    }
};
