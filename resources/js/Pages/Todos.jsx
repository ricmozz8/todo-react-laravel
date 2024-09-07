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
            <div className="p-5 my-3 mx-auto max-w-md block bg-white rounded-lg shadow-lg ">
                <h1 className="text-2xl font-bold text-center">
                    Todos from React and Laravel
                </h1>

                <div className="">
                    <form
                        action=""
                        onSubmit={createTodo}
                        method="POST"
                        className="flex-col gap-4"
                    >
                        <input
                            onChange={(e) => handleChange(e.target.value)}
                            type="text"
                            name="todo"
                            placeholder="Create a new todo"
                            className="w-full bg-slate-100 border-none rounded-lg shadow-lg p-2 hover:bg-slate-200 focus:bg-slate-200 transition-colors"
                            value={todo.content}
                        />

                        {/* Showing form errors */}
                        {pageErrors.length > 0 && (
                            <ul className="text-red-500">
                                {pageErrors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        )}

                        <button className="p-1 py-2 my-3 w-full border bg-blue-500  shadow-lg border-none rounded-lg block text-white hover:bg-blue-700 transition-colors">
                            Create
                        </button>
                    </form>
                </div>

                <div className="border-separate border-spacing-2">
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
                                    className="p-1 py-2 border bg-red-500  shadow-lg border-none rounded-lg block text-white hover:bg-red-600 transition-colors"
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

                <pre className="text-yellow-600 text-center">Add edit functionality</pre>
            </div>
        </AuthenticatedLayout>
    );
}
