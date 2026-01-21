<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  public function up(): void
  {
    Schema::table('bulletin_acts', function (Blueprint $table) {
      $table->string('corner')->nullable()->after('address');
      $table->string('commune')->nullable()->after('corner');
      $table->string('vehicles')->nullable()->after('commune');
      // Ensure address is nullable if it wasn't, or strict. User said col 7 is Address.
    });
  }

  public function down(): void
  {
    Schema::table('bulletin_acts', function (Blueprint $table) {
      $table->dropColumn(['corner', 'commune', 'vehicles']);
    });
  }
};
