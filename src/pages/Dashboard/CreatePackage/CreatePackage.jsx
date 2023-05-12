import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreatePackage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const addPackage = {
      name: data.name,
      price: data.price,
      time: data.time,
      attend: data.attend,
      eventName: data.eventName,
      organization: {
        name: data.organizationName,
        id: data.organizationId,
      },
      foodMenu: data.foodMenu,
      status: data.status,
      category: data.category,
    };
    let url = "https://event-api.nurhossainfarid.com/v1/package";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addPackage),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success("Package Added Successfully");
        } else {
          toast.error("Package could not added successfully");
        }
      });
  };
  return (
    <div>
      <div className="flex justify-between my-5">
        <h1 className="text-3xl text-center dashboard-header">Add Package</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2"
      >
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Package Name</span>
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
        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Price($)</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is require",
              },
            })}
          />
          <label className="label">
            {errors.price?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        {/* Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Time</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("time", {
              required: {
                value: true,
                message: "Time is require",
              },
            })}
          />
          <label className="label">
            {errors.time?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.time.message}
              </span>
            )}
          </label>
        </div>
        {/* Attendant people */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Maximum Attendant
            </span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("attend", {
              required: {
                value: true,
                message: "Attend is require",
              },
            })}
          />
          <label className="label">
            {errors.attend?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.attend.message}
              </span>
            )}
          </label>
        </div>
        {/* Event Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Event Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("eventName", {
              required: {
                value: true,
                message: "Event Name is require",
              },
            })}
          />
          <label className="label">
            {errors.eventName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.eventName.message}
              </span>
            )}
          </label>
        </div>
        {/* Organization Name and id */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Organization Name
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("organizationName", {
              required: {
                value: true,
                message: "Organization Name is require",
              },
            })}
          />
          <label className="label">
            {errors.organizationName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.organizationName.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Organization ID
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("organizationId", {
              required: {
                value: true,
                message: "Organization Id is require",
              },
            })}
          />
          <label className="label">
            {errors.organizationId?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.organizationId.message}
              </span>
            )}
          </label>
        </div>
        {/* Food Menu */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Food Menu</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("menu", {
              required: {
                value: true,
                message: "Food Menu is require",
              },
            })}
          />
          <label className="label">
            {errors.menu?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.menu.message}
              </span>
            )}
          </label>
        </div>
        {/* Category*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Category</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("category", {
              required: {
                value: true,
                message: "Category is require",
              },
            })}
          >
            <option>breakfast</option>
            <option selected>lunch</option>
            <option>snacks</option>
            <option>dinner</option>
          </select>
          <label className="label">
            {errors.category?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.category.message}
              </span>
            )}
          </label>
        </div>
        {/* Status Menu */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Status</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("status", {
              required: {
                value: true,
                message: "Status is require",
              },
            })}
          >
            <option selected>active</option>
            <option>inactive</option>
          </select>
          <label className="label">
            {errors.menu?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.menu.message}
              </span>
            )}
          </label>
        </div>
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Image</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is require",
              },
            })}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-white w-1/2" value="registration">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePackage;
