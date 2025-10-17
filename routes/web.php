<?php

use App\Http\Controllers\IngredientController;
use App\Http\Controllers\RecetteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('ingredients', IngredientController::class);
    Route::resource('recettes', RecetteController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
