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

        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            // here we define the columns for our table
            $table->string('content')->nullable(false);
            $table->timestamps();
        });

        /* To let Laravel create this code scaffolding you must specify
            your actions separated by underscores and all lowercase letters.

            For example:
            'Desired action' | command
            create a table called posts -> php artisan make:migration create_posts_table
            add a column to our table -> php artisan make:migration add_title_to_posts

            This files must be executed in order to update the database, just saving
            this fill will not update the database.

            To apply those changes, run
            > php artisan migrate

            To learn more about Laravel migrations
            see more here: https://laravel.com/docs/11.x/migrations
        */

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // this will be run if you run php artisan migrate:rollback
        Schema::dropIfExists('todos');
    }
};
