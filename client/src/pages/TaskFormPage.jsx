import { useForm } from "react-hook-form";
import { useTasks } from "../contexts/TasksContext";

export default function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks, createTasks } = useTasks();

  const onSubmit = handleSubmit((data) => {
    createTasks(data)
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-7 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
          className="w-full bg-zinc-700 text-white px-4 py-1 rounded-md my-2"
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px4 py2 rounded-md my-2"
        />
        <button>Save</button>
      </form>
    </div>
  );
}
