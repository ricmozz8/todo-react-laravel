import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm, router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Todos({ auth, todos }) {
    const createTodo = (e) => {
        e.preventDefault();
        router.post("/todos", todo);
        setTodo({ content: "" });
    };

    const pageErrors = Object.values(usePage().props.errors);

    const handleChange = (value) => {
        setTodo({ content: value });
    };

    const deleteTodo = (id) => {
        router.delete(route("todos.delete", id));
    };

    const [todo, setTodo] = useState({
        content: "",
    });

    console.log(todos);

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
