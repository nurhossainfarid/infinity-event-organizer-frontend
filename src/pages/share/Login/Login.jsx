import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { FcGoogle } from "react-icons/fc";
import Lottie from "lottie-react";
import { toast } from "react-toastify";
import LoginAnimation2 from "./LoginAnimation2.json";

import "./Login.css";

// custom css

const Login = () => {
  // sign in with google
  const [signInWithGoogle, gUser, gError, gLoading] = useSignInWithGoogle(auth);

  // sign in with email and password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // react hooks form
  const onSubmit = (data) => {
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
  navigate(from, { replace: true })
  return (
    <div className="login-bg relative">
      <section className="">
        <div className="">
          <div className="absolute bg-black w-full h-full opacity-40"></div>
          <div className="relative pt-28">
            <h1 className="text-5xl text-white text-center mt-5">Login</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-16">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 shadow-2xl login_glass_bg md:w-3/4">
              <div className="card-body grid grid-cols md:grid-cols-2 gap-5">
                <div>
                  <Lottie loop={true} animationData={LoginAnimation2}></Lottie>
                </div>
                <div>
                  <p className="text-cyan-300 fs-semibold text-md">New To IEO???? <Link to= 
                  {'/registration'}> 
                    <small className='text-white ml-1 fs-bold text-md'>Create An Account</small></Link>
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)} action="">
                      {/* email */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-base">Email</span>
                        </label>
                        <input
                          type="email"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                          border-white text-white"
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
                          <span className="label-text text-white text-base">
                            Password
                          </span>
                        </label>
                        <input
                          type="password"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                          border-white text-white"
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
                    <button
                        className="btn btn-white bg-purple-600 md:w-3/4 text-white hover:bg-pink-500 ease-in 
                         duration-300 hover:scale-105 text-sm md:text-lg border-none"
                        value="login"
                      >
                        Login
                      </button>
                    <p className="text-xl mt-5 text-white">Login with another system</p>
                    <div className="form-control mt-6 flex flex-col gap-5">
                      <FcGoogle className="text-6xl border-2 border-fuchsia-200 p-1 hover:bg-fuchsia-200"
                        onClick={() => signInWithGoogle()}></FcGoogle>
                    </div>
                  </form>
                  {signInError}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
