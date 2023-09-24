import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const createaccount = () => {
    navigate("/register");
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singin, errors: singinErrors, isAuthenticated } = useAuth();
  const onSubmit = handleSubmit((data) => {
    singin(data);
    if (singinErrors == []) {
      console.log("llego vacio");
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks")
     }
   },[isAuthenticated])

  return (
    <div className="flex h-[calc(80vh-100px)]  items-center justify-center ">
      <div className="w-96 bg-zinc-800  p-10 rounded-md">
        <p className="text-white text-2xl mb-3">Login</p>

        {singinErrors.map((error, i) => (
          <div className="bg-red-500 text-white p-2" key={i}>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
          <div>
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
              className="w-full bg-zinc-700 text-white px-4 mt-5 py-1 rounded-md"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">Password is required</span>
            )}
          </div>

          {/*----------------------------------------------------------------*/}
          <div className="flex justify-between">
            <button type="submit" className=" mx-3 text-white mt-4">
              Login
            </button>
            <button
              onClick={createaccount}
              className=" mx-3 mt-4 text-xs relative left-8 top-9 text-blue-700"
            >
              no account? create one
            </button>
          </div>
          {/*----------------------------------------------------------------*/}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
