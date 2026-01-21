<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletinAct extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_type', // e.g., '10-0-1'
        'address',
        'corner',
        'commune',
        'vehicles',
        'date',
        'time',
    ];

    protected $casts = [
        'date' => 'date',
    ];
}
