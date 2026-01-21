<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bulletin_acts', function (Blueprint $table) {
            $table->id();
            $table->string('service_type'); // 10-0-1 etc
            $table->string('address');
            $table->date('date');
            $table->string('time');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bulletin_acts');
    }
};
