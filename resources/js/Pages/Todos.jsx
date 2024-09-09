/*
Like in python, you can import modules and other files using the import keyword.
In javascript, sometimes those modules can include many functions and properties if
you only wish to use one of them you can destructure the module using brackets.

In this project, there are some libraries that are not included in
React by default, for example: InertiaJS, and Tailwind CSS are libraries
included by laravel by default.

Read the documentation for more information.
Inertiajs: https://inertiajs.com/
*/
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Todos({ auth, todos }) {
    // this is a function defined in javascript using the arrow function syntax.
    const createTodo = (e) => {
        e.preventDefault();
        // this prevents the event object from reloading the page and submitting the form
        router.post("/todos", todo);
        // this is included in the inertiajs package, to make a post request to our laravel app
        setTodo({ content: "" });
        // this resets the form using the setTodo function from the useState hook
    };

    const pageErrors = Object.values(usePage().props.errors);
    // this is another inertiajs function that returns an array of errors

    const handleChange = (value) => {
        // called once the user types into the input
        setTodo({ content: value });
    };

    const deleteTodo = (id) => {
        // called when the user clicks on the delete button
        router.delete(route("todos.delete", id));
    };

    // using the useState hook
    // read more at: https://reactjs.org/docs/hooks-reference.html#usestate
    const [todo, setTodo] = useState({
        content: "",
    });

    // React components are written in JSX, that allow us to write HTML inside of jsx files.
    //Note: All components in this project are styled using Tailwind CSS.

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Todos" />
            <div className="h-screen flex items-center justify-center">
                <div className="p-5 mx-auto max-w-xl block bg-white rounded-lg shadow-lg ">
                    <h1 className="text-3xl m-2 font-bold text-center">
                        Todos from React and Laravel
                    </h1>

                    <div className="">
                        <form
                            action=""
                            onSubmit={createTodo}
                            method="POST"
                            className="flex gap-2 items-center p-2 max-w-md m-auto"
                        >
                            <input
                                onChange={(e) => handleChange(e.target.value)}
                                type="text"
                                name="todo"
                                placeholder="Create a new todo"
                                className=" bg-slate-100 w-full border-none rounded-lg p-2 hover:bg-slate-200 focus:bg-slate-200 transition-colors"
                                value={todo.content}
                            />

                            <button className="p-1 py-2 my-3 border bg-blue-500 border-none rounded-lg block text-white hover:bg-blue-700 transition-colors">
                                Create
                            </button>
                        </form>

                        {/* Showing form errors */}
                        {pageErrors.length > 0 && (
                            <ul className="text-red-500">
                                {pageErrors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className=" divide-y divide-slate-200 max-w-md  m-auto">
                        {todos.map((todo, index) => (
                            <div
                                key={todo.id}
                                className="p-2  flex w-full my-2 items-center justify-between"
                            >
                                <p>{todo.content}</p>
                                <p>Created {todo.created}</p>

                                <form
                                    action=""
                                    onSubmit={(e) => e.preventDefault()}
                                >
                                    <button
                                        className="p-1 py-2 border bg-red-500 border-none rounded-lg block text-white hover:bg-red-600 transition-colors"
                                        onClick={() => {
                                            deleteTodo(todo.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        ))}
                    </div>

                    <pre className="text-yellow-600 text-center">
                        Try to add edit functionality for todos!
                    </pre>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
