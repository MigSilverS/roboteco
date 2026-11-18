<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Chamado;
use Illuminate\Http\Request;

class ChamadoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dados = Chamado::with(['status', 'usuario'])->get();
        return response()->json($dados);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Chamado $chamados)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chamado $chamados)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chamado $chamados)
    {
        //
    }
}
