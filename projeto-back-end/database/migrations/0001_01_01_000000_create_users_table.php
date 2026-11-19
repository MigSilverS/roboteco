<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('tblTipoUsuario', function (Blueprint $table) {
            $table->id('tipId');
            $table->string("tipDescricao", 50);
            $table->timestamps();
        });

        Schema::create('tblUsuarios', function (Blueprint $table) {
            $table->id('usuId');
            $table->string('usuNome');
            $table->string('usuEmail')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('usuSenha');
            $table->foreignId('tipId')->constrained('tblTipoUsuario', 'tipId')->restrictOnDelete();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('usuId')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblUsuarios');
        Schema::dropIfExists('tblTipoUsuario');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
