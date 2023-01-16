import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

// import custom css
import "./Registration.css";

const Registration = () => {
  // sing in with google
  const [signInWithGoogle, gUser, gError, gLoading] = useSignInWithGoogle(auth);

  // create user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contactNumber: data.phone,
      password: data.password,
      confirmPassword: data.confirmPassword,
      address: data.address,
      role: data.role,
    };
    console.log(userData);
    if (data.password === data.confirmPassword) {
      let url = "https://infinity-event-organizer-backend.vercel.app/v1/user";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      await createUserWithEmailAndPassword(data.email, data.password);
    }
    // await updateProfile({ displayName: data.name });
    // alert('Updated profile');
  };
  let signInError;
  if (error || gError) {
    signInError = (
      <p className="text-red-500 mb-2">
        <small>{error?.message || gError?.message?.message}</small>
      </p>
    );
  }
  return (
    <div className="">
      <section className="registration-bg relative">
        <div className="">
          <div className="absolute bg-black w-full h-full opacity-60"></div>
          <div className="relative py-28">
            <h1 className="text-5xl text-white text-center mt-5">
              Registration
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-16 bg-slate-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Registration Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-3/5 shadow-2xl bg-secondary mr-5">
              <div className="card-body">
                <p className="text-cyan-300 fs-semibold text-md">Already have an account???? <Link to={'/login'}> 
                 <small className='text-white ml-1 fs-bold text-md'>Please 
                 login</small></Link></p>
                <form onSubmit={handleSubmit(onSubmit)} action="">
                  <div className="grid grid-cols-2 gap-5">
                    {/* first name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("firstName", {
                          required: {
                            value: true,
                            message: "First Name is require",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.firstName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.firstName.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* last name */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">
                          Last Name
                        </span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("lastName", {
                          required: {
                            value: true,
                            message: "Last Name is require",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.lastName?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.lastName.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* email */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">Email</span>
                      </label>
                      <input
                        type="email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Email is require",
                          },
                          pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "Provide a valid email",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.email?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                        {errors.email?.type === "pattern" && (
                          <span className="label-text-alt text-red-500">
                            {errors.email.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* password */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Password is require",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be use 6 characters password",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* confirm password */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">
                          Confirm Password
                        </span>
                      </label>
                      <input
                        type="password"
                        className="input input-bordered w-full max-w-xs"
                        {...register("confirmPassword", {
                          required: {
                            value: true,
                            message: "Password is require",
                          },
                          minLength: {
                            value: 6,
                            message: "Must be use 6 characters password",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.password?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="label-text-alt text-red-500">
                            {errors.password.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* phone */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">Phone</span>
                      </label>
                      <input
                        type="phone"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone", {
                          required: {
                            value: true,
                            message: "Phone is require",
                          },
                          maxLength: 11,
                          minLength: 11,
                        })}
                      />
                      <label className="label">
                        {errors.phone?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.address.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* address */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">Address</span>
                      </label>
                      <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {
                          required: {
                            value: true,
                            message: "Address is require",
                          },
                        })}
                      />
                      <label className="label">
                        {errors.address?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.address.message}
                          </span>
                        )}
                      </label>
                    </div>
                    {/* Role */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-primary">Role</span>
                      </label>
                      <select
                        className="select select-bordered w-full max-w-xs"
                        {...register("role", {
                          required: {
                            value: true,
                            message: "Role is require",
                          },
                        })}
                      >
                        <option selected>user</option>
                        <option>organizationAdmin</option>
                      </select>
                      <label className="label">
                        {errors.role?.type === "required" && (
                          <span className="label-text-alt text-red-500">
                            {errors.role.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="form-control flex flex-col justify-center items-center mt-5">
                    <button
                      className="btn btn-primary w-1/3 mb-5 text-white hover:bg-pink-500 ease-in duration-300 hover:scale-105 text-lg"
                      value="registration"
                    >
                      Registration
                    </button>
                    <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-primary w-1/3 mb-5 text-white hover:bg-pink-500 ease-in duration-300 hover:scale-105 text-md"
                      value="Login"
                    >
                      Login with Google
                    </button>
                  </div>
                </form>
                {signInError}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
