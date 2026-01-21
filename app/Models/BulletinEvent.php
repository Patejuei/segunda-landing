<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletinEvent extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'event_date',
        'time',
    ];

    protected $casts = [
        'event_date' => 'date',
    ];
}
