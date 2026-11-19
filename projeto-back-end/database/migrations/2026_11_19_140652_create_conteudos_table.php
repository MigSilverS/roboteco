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
        Schema::create('tblConteudos', function (Blueprint $table) {
            $table->id('conId');
            $table->string('conTitulo', 150);
            $table->text('conDescricao');
            $table->string('conApostila', 255);
            $table->string('conVideo', 255);
            $table->foreignId('catId')->constrained('tblCategoriaConteudo', 'catId')->restrictOnDelete();
            $table->string('conNivel', 80);
            $table->string('conStatus', 80);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tblConteudos');
    }
};
