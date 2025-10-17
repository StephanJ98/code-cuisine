<?php

namespace App\Http\Controllers;

use App\Http\Requests\FormRecetteRequest;
use App\Models\Recette;
use App\Http\Requests\StoreRecetteRequest;
use App\Http\Requests\UpdateRecetteRequest;
use App\Http\Resources\RecetteResource;
use App\Models\Enum\RecetteDifficulty;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Inertia\Inertia;

class RecetteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Recette::query()->orderFromRequest($request);
        $search = $request->get('q');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        return Inertia::render('recettes/index', [
            'q' => $search,
            'collection' => RecetteResource::collection(
                $query->paginate(10)->withQueryString()
            )
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $recette = new Recette();
        return $this->edit($recette);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormRecetteRequest $request)
    {
        $recette = Recette::create($request->validated());
        $this->handleFormRequest($request, $recette);
        return to_route('recettes.index')->with('success', "La recette a bien été créée.");
    }

    /**
     * Display the specified resource.
     */
    public function show(Recette $recette)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Recette $recette)
    {
        return Inertia::render('recettes/form', [
            'recette' => new RecetteResource($recette),
            'levels' => RecetteDifficulty::getOptions(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormRecetteRequest $request, Recette $recette)
    {
        $recette->update($request->validated());
        $this->handleFormRequest($request, $recette);
        return to_route('recettes.index')->with('success', "La recette a bien été mise à jour.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Recette $recette)
    {
        $recette->delete();
        return to_route('recettes.index')->with('success', "La recette a bien été supprimée.");
    }

    /**
     * Handle the form request for creating or updating an recette.
     */
    private function handleFormRequest(FormRecetteRequest $request, Recette $recette)
    {
        $image = $request->validated('image');
        if ($image && $image instanceof UploadedFile) {
            $recette->addMedia($image)->toMediaCollection('image');
        }
    }
}
