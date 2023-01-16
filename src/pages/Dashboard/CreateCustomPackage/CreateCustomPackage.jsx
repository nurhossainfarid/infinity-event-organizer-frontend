import React from "react";
import { useForm } from "react-hook-form";

const CreateCustomPackage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-3xl text-center dashboard-header">
          Custom Package
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2"
      >
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">User Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is require",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">User Email</span>
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
            <span className="label-text text-black text-lg">Phone</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("Phone", {
              required: {
                value: true,
                message: "Phone is require",
              },
              maxLength: 11,
              minLength: 11,
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
        {/* address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Address</span>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Time</span>
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
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Maximum Attendant
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("Phone", {
              required: {
                value: true,
                message: "Phone is require",
              },
              maxLength: 11,
              minLength: 11,
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
        {/* address */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Organizer Name
            </span>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Select Location
            </span>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Needed Extra Service
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is require",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-1/2" value="registration">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomPackage;
