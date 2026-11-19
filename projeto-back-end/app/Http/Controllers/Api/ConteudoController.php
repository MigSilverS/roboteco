<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conteudo;
use Illuminate\Http\Request;

class ConteudoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dados = Conteudo::with('categoria')->get();
        return response()->json($dados);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $conteudo = Conteudo::create($request->all());
        return response()->json($conteudo);
    }

    /**
     * Display the specified resource.
     */
    public function show(Conteudo $conteudo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Conteudo $conteudo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Conteudo $conteudo)
    {
        //
    }
}
