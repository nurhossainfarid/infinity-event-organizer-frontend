import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

import "./Login.css";

// custom css

const Login = () => {
  // sign in with google
  const [signInWithGoogle, gUser, gError, gLoading] = useSignInWithGoogle(auth);

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // react hooks form
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  let signInError;
  if (loading) {
    return (
      <div>
        <p>Initialing User...</p>
      </div>
    );
  }
  if (error || gError) {
    signInError = (
      <p className="text-red-500 mb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  return (
    <div className="">
      <section className="login-bg relative">
        <div className="">
          <div className="absolute bg-black w-full h-full opacity-60"></div>
          <div className="relative py-28">
            <h1 className="text-5xl text-white text-center mt-5">Login</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-16 bg-slate-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-2/5 shadow-2xl bg-secondary mr-8">
              <div className="card-body">
                <p className="text-cyan-300 fs-semibold text-md">New To IEO???? <Link to= 
                 {'/registration'}> 
                  <small className='text-white ml-1 fs-bold text-md'>Create An Account</small></Link>
                </p>
                <form onSubmit={handleSubmit(onSubmit)} action="">
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
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-primary">Password</span>
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
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6 flex flex-col items-center gap-5">
                    <button
                      className="btn btn-primary w-2/3 text-white hover:text-black"
                      value="Login"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => signInWithGoogle()}
                      className="btn btn-primary w-2/3 text-white hover:text-black"
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

export default Login;
