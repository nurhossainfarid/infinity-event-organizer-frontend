import Lottie from "lottie-react";
import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import RegistrationAnimation from "./RegistrationAnimation.json";

// import custom css
import "./Registration.css";

const Registration = () => {
  // create user with email and password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

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
    if (data.password === data.confirmPassword) {
      let url = "https://event-api.nurhossainfarid.com/v1/user";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.status.toLowerCase() === 'success') {
            toast.success("You are Successfully complete your registration");
            navigate('/home');
          }
        });
      await createUserWithEmailAndPassword(data.email, data.password);
    } else {
      toast.error("Password doesn't matched! Please check your password.");
    }
    // await updateProfile({ displayName: data.name });
    // alert('Updated profile');
  };
  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-500 mb-2">
        <small>{error?.message}</small>
      </p>
    );
  }
  return (
    <div className="registration-bg relative">
      <section className="">
        <div className="">
          <div className="absolute bg-black w-full h-full opacity-40"></div>
          <div className="relative pt-28">
            <h1 className="text-5xl text-white text-center mt-5">
              Registration
            </h1>
          </div>
        </div>
      </section>
      <section>
        <div className="hero py-16 w-full">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <div className="card flex-shrink-0 shadow-2xl login_glass_bg w-full">
              <div className="card-body grid grid-cols lg:grid-cols-2 p-3 md:p-8">
                <div>
                  <Lottie
                    loop={true}
                    animationData={RegistrationAnimation}
                  ></Lottie>
                </div>
                <div>
                  <p className="text-cyan-300 fs-semibold text-md">
                    Already have an account????
                    <Link to={"/login"}>
                      <small className="text-white ml-1 fs-bold text-md">
                        Please login
                      </small>
                    </Link>
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className="grid grid-cols md:grid-cols-2 gap-1 md:gap-3 mt-2">
                      {/* first name */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-base">
                            First Name
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered w-full max-w-xs text-sm md:text-md bg-transparent 
                           border-white text-white"
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
                          <span className="label-text text-white text-base">
                            Last Name
                          </span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                          border-white text-white"
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
                      {/* confirm password */}
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-base">
                            Confirm Password
                          </span>
                        </label>
                        <input
                          type="password"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                           border-white text-white"
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
                          <span className="label-text text-white text-base">Phone</span>
                        </label>
                        <input
                          type="phone"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                           border-white text-white"
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
                          <span className="label-text text-white text-base">Address</span>
                        </label>
                        <input
                          type="text"
                          className="input input-bordered w-full max-w-xs bg-transparent 
                           border-white text-white"
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
                          <span className="label-text text-white text-base">Role</span>
                        </label>
                        <select
                          className="select select-bordered w-full max-w-xs bg-transparent 
                           border-white text-white"
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
                        className="btn btn-white bg-purple-600 text-white md:w-1/3 hover:bg-pink-500 ease-in 
                         duration-300 hover:scale-105 text-sm md:text-lg border-none"
                        value="registration"
                      >
                        Registration
                      </button>
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

export default Registration;
