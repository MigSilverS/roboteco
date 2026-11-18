<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StatusChamado extends Model
{
    protected $table = 'tblStatusChamado';
    protected $primaryKey = 'staId';

    protected $fillable = [
        'staDescricao'
    ];
}
