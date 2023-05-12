import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const CreateCustomPackage = () => {
  const [user] = useAuthState(auth)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [customPackage, setCustomPackage] = useState([]);

  const onSubmit = async (data) => {
    const packageData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      eventCategory: data.eventCategory,
      foodItems: data.foodItems,
      attend: data.attend,
      organizerName: data.organizerName,
      location: data.location,
      date: data.date,
      time: data.time,
      extraService: data.extraService,
    } 
    console.log(packageData);
    const url = "http://localhost:5000/v1/customPackage";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(packageData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success("Your package booking Successfully");
        } else {
          toast.error(result.error);
        }
      })
  };
  return (
    <div className="pb-10">
      <div className="flex justify-between my-5 pb-10">
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
            <span className="label-text text-black text-lg">Your Name</span>
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
            <span className="label-text text-base">Email</span>
          </label>
          <input
            type="email"
            Value={user?.email}
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
        {/* Phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Phone</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full max-w-xs"
            {...register("phone", {
              required: {
                value: true,
                message: "phone is require",
              },
            })}
          />
          <label className="label">
            {errors.phone?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.phone.message}
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
        {/* Event Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Event Category</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("eventCategory", {
              required: {
                value: true,
                message: "Event category is require",
              },
            })}
          >
            <option>wedding</option>
            <option selected>birthday</option>
            <option>private party</option>
          </select>
          <label className="label">
            {errors.eventCategory?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.eventCategory.message}
              </span>
            )}
          </label>
        </div>
        {/* Food Items */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Food Items</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("foodItems", {
              required: {
                value: true,
                message: "Food items is require",
              },
            })}
          />
          <label className="label">
            {errors.foodItems?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.foodItems.message}
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
        {/* Organization Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Organization Name
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("organizerName", {
              required: {
                value: true,
                message: "Organizer Name is require",
              },
            })}
          />
          <label className="label">
            {errors.organizerName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.organizerName.message}
              </span>
            )}
          </label>
        </div>
        {/* Location*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Location</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("location", {
              required: {
                value: true,
                message: "Location is require",
              },
            })}
          />
          <label className="label">
            {errors.location?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.location.message}
              </span>
            )}
          </label>
        </div>
        {/* Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Date</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("date", {
              required: {
                value: true,
                message: "Date category is require",
              },
            })}
          />
          <label className="label">
            {errors.date?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.date.message}
              </span>
            )}
          </label>
        </div>
        {/* time */}
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
        {/* Extra Service */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Extra Service(optional)</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("extraService", {
              required: {
                value: true,
                message: "Extra service is require",
              },
            })}
          />
          <label className="label">
            {errors.extraService?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.extraService.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-white w-1/2" value="booking">
            Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCustomPackage;
