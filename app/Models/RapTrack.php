<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RapTrack extends Model
{
    use HasFactory;

    protected $fillable = [
        'author',
        'name',
        'track_file',
        'en_lyric',
        'ru_lyric',
    ];

    static public function getTrackById($id)
    {
        return self::where('id', $id)->first();
    }
}
