<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

#[Fillable(['usuNome', 'usuEmail', 'usuSenha', 'tipId'])]
#[Hidden(['usuSenha', 'remember_token'])]
class Usuario extends Authenticatable
{

    protected $table = 'tblUsuarios';
    protected $primaryKey = 'usuId';

    /** @use HasFactory<UserFactory> */
    use HasFactory, Notifiable;

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'usuSenha' => 'hashed',
        ];
    }

    public function tipoUsuario()
    {
        return $this->belongsTo(TipoUsuario::class, 'tipId', 'tipId');
    }

    public function chamado()
    {
        return $this->hasMany(Chamado::class, 'usuId', 'usuId');
    }
}
