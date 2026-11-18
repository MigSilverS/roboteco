<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'tblEventos';
    protected $primaryKey = 'eveId';

    protected $fillable = [
        'eveTitulo',
        'eveDtInicio',
        'eveDtTermino',
        'eveDiaTodo',
        'eveCorBackground',
        'eveCorBorda',
        'eveCorTexto',
        'eveDescricao',
    ];

    protected $casts = [
        'eveDiaTodo' => 'boolean',
        'eveDtInicio' => 'datetime',
        'eveDtTermino' => 'datetime'
    ];
}
