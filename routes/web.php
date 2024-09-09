<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodosController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// TODOS URLS
// here we define all the endpoints for our todos, please note that
// although all the routes here are prefixed with /todos, they are managed
// by a different method. Read about RESTful methods here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
// the methods for resouces are: GET, POST, PUT, PATCH, DELETE

Route::get('/todos',[TodosController::class, 'index'])->name('todos.index');
Route::post('/todos',[TodosController::class, 'store'])->name('todos.edit');
Route::delete('/todos/{id}',[TodosController::class, 'destroy'])->name('todos.delete');

// -- end of todos urls --

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
