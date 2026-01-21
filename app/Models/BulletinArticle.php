<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BulletinArticle extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'category',
        'content',
        'image_path',
        'published_at',
        'is_featured',
    ];

    protected $casts = [
        'published_at' => 'date',
        'is_featured' => 'boolean',
    ];
}
