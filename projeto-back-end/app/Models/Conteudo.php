<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conteudo extends Model
{
    protected $table = 'tblConteudos';
    protected $primaryKey = 'conId';

    protected $fillable = [
        'conTitulo',
        'conDescricao',
        'conApostila',
        'conVideo',
        'catId',
        'conNivel',
        'conStatus'
    ];

    public function categoria()
    {
        return $this->belongsTo(CategoriaConteudo::class, 'catId', 'catId');
    }
}
