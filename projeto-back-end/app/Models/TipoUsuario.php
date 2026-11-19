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

     public function usuario()
    {
        return $this->hasMany(Usuario::class, 'tipId', 'tipId');
    }

}
