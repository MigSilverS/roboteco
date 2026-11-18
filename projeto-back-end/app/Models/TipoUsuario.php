<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoUsuario extends Model
{
    protected $table = 'tblTipoUsuario';
    protected $primaryKey = 'tipId';

    protected $fillable = [
        'tipDescricao'
    ];

}
