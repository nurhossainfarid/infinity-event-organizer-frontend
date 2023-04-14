import React from 'react';

const ForgotPassword = () => {
    return (
        <div>
                              <form onSubmit={handleSubmit(onSubmit)} action="">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Email</span>
                      </label>
                      <input
                        type="email"
                        className="input input-bordered md:w-3/4"
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
                        <span className="label-text text-white">Password</span>
                      </label>
                      <input
                        type="password"
                        className="input input-bordered md:w-3/4"
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
                      <button
                        className="btn btn-white md:w-3/4 hover:text-black"
                        value="Login"
                      >
                        Reset Password
                    </button> 
                  </form>
        </div>
    );
};

export default ForgotPassword;