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
        Schema::create('bulletin_articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category'); // Institucional, Capacitación, etc.
            $table->longText('content');
            $table->string('image_path')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->date('published_at');
            $table->timestamps();
        });

        Schema::create('bulletin_events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('event_date');
            $table->string('time'); // 20:00 hrs
            $table->timestamps();
        });

        Schema::create('bulletin_stats', function (Blueprint $table) {
            $table->id();
            $table->string('month_year'); // "Enero 2026"
            $table->integer('actos_count')->default(0);
            $table->string('voluntarios_stats')->default('0%');
            $table->integer('capacitaciones_count')->default(0);
            $table->string('response_time')->default('0:00');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bulletin_stats');
        Schema::dropIfExists('bulletin_events');
        Schema::dropIfExists('bulletin_articles');
    }
};
