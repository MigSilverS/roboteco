<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
     return response()->json([
        'message' => 'Endpoint não encontrado. Utilize o prefixo /api.'
    ], 404);
});
