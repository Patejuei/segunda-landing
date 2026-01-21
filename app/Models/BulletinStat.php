<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletinStat extends Model
{
    use HasFactory;

    protected $fillable = [
        'edition_number',
        'month_year',
        'actos_count',
        // 'voluntarios_stats', // Removed
        'capacitaciones_count',
    ];
}
