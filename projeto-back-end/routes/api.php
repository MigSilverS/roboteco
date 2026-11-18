<?php

use App\Http\Controllers\Api\ChamadoController;
use App\Http\Controllers\Api\EventoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource('eventos', EventoController::class);

Route::apiResource('chamados', ChamadoController::class);