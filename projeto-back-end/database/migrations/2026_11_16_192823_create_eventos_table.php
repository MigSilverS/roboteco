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
        Schema::create('tblEventos', function (Blueprint $table) {
            $table->id('eveId');
            $table->string('eveTitulo', 150);
            $table->timestamp('eveDtInicio');
            $table->timestamp('eveDtTermino');
            $table->boolean('eveDiaTodo');
            $table->string('eveCorBackground', 50);
            $table->string('eveCorBorda', 50);
            $table->string('eveCorTexto', 50);
            $table->string('eveDescricao', 200);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eventos');
    }
};
