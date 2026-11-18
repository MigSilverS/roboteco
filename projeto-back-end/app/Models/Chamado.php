<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chamado extends Model
{
    protected $table = 'tblChamados';
    protected $primaryKey = 'chaId';

    protected $fillable = [
        'chaMensagem',
        'chaData_Abertura',
        'chaData_Fechamento',
        'staId',
        'usuId'
    ];

    protected $casts = [
        'chaData_Abertura'   => 'datetime',
        'chaData_Fechamento' => 'datetime'
    ];


    public function status()
    {
        return $this->belongsTo(StatusChamado::class, 'staId', 'staId');
    }

    public function usuario()
    {
        return $this->belongsTo(User::class, 'usuId', 'usuId');
    }
}
