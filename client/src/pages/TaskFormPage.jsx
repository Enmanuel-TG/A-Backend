import { useForm } from "react-hook-form";
import { useTasks } from "../contexts/TasksContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function TaskFormPage() {
  const { register, handleSubmit } = useForm();
  const { tasks, createTasks } = useTasks();
  const { errors: errorsTasks, setErrors } = useAuth();
  const Navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    if (data.title && data.description) {
      createTasks(data);
      Navigate("/tasks");
    }
    else {
      setErrors(["Please complete the form"])
    }

  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-7 rounded-md">
      {errorsTasks.map((error, i) => (
        <div className="bg-red-500 text-white p-2" key={i}>
          {error}
        </div>
      ))}
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
        <button className="text-white">Save</button>
      </form>
    </div>
  );
}
