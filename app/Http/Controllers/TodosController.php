<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // with inertia we just need to specify the component name on the directory
        // resources/js/Pages/ + component name without the extension
        // the next parameter is the props passed to the component
        // for more info check https://react.dev/learn/passing-props-to-a-component
        return Inertia::render('Todos',  ['todos' => Todo::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Implement this
        // Note: you can add a modal and skip this implementation
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validating the obtained POST request
        $validated = $request->validate([
            'content'=>'required|min:2|max:60'
            // these are the flags for validating the request parameters
            // for more info check https://laravel.com/docs/11.x/validation
        ]);

        Todo::create($validated);
        // ORM Creates a new record in the database for us, we just
        // need to indicate the model and the method create.
        // This is the equivalent to the SQL INSERT statement.
        // Note: this will create and save the record in the database automatically

        // we redirect to the previous page
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // You may create a new component to show the edit form or
        // just create a modal component and place it withing the Todos component
        // if you want to create a new view, manage here the rendering of the component
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // implement this
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param string  $id the id of the post to remove
     * @return \Illuminate\Http\RedirectResponse redirects to the previous page
     */
    public function destroy(string $id)
    {
        // we get the model via the id and delete it automatically.
        // this is the equivalent to the SQL DELETE statement
        $todo = Todo::find($id)->delete();

        // we redirect to the previous page
        return redirect()->back();
    }
}
