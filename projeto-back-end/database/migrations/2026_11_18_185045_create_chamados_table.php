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
           Schema::create('TblChamados', function (Blueprint $table) {
            $table->id();
            $table->text('chaMensagem');
            $table->dateTime('chaData_Abertura')->useCurrent();
            $table->dateTime('chaData_Fechamento')->nullable();
            $table->foreignId('staId')->constrained('tblStatusChamado', 'staId')->restrictOnDelete();
            $table->foreignId('usuId')->constrained('tblUsuarios', 'usuId')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chamados');
    }
};
