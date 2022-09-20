<?php

use App\Http\Controllers\RapTrackController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [RapTrackController::class, 'index']);

Route::get('/track/{id}', [RapTrackController::class, 'getTrackById']);

Route::get('/popup-add-track', [RapTrackController::class, 'edit']);

Route::post('/add-track', [RapTrackController::class, 'create']);

Route::get('/del-track/{id}', [RapTrackController::class, 'destroy']);
