<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriaConteudo extends Model
{
     protected $table = 'tblCategoriaConteudo';
    protected $primaryKey = 'catId';

    protected $fillable = [
        'catDescricao'
    ];

    public function conteudo()
    {
        return $this->hasMany(Conteudo::class, 'catId', 'catId');
    }
}
