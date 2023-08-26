import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RegisterPage() {
  const { singUp, user, isAuthenticated, errors: registerErrors } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    singUp(values);
    console.log(user);
  });

  return (
    <div className="bg-zinc-800 w-96 mt-3 ml-3 p-10 rounded-md">

      {registerErrors.map((error,  i) => (
        <div className="bg-red-500 text-white p-2" key={i}>
          {error}
        </div>
      ))}

      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 mt-2.5  py-1 rounded-md"
            placeholder="Username"
          />
          {errors.username && (
            <span className="text-red-500 text-xs">Username is required</span>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 mt-2.5 py-1 rounded-md"
            placeholder="Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">Email is required</span>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 mt-2.5 py-1 rounded-md"
            placeholder="Password"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">Password is required</span>
          )}
        </div>

        {/*----------------------------------------------------------------*/}
        <button type="submit" className=" mx-3 text-white mt-4">
          Register
        </button>
        {/*----------------------------------------------------------------*/}
      </form>
    </div>
  );
}

export default RegisterPage;
