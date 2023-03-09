import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateOrganizer = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const addOrganizer = {
      name: data.name,
      email: data.email,
      contactNumber: data.contactNumber,
      address: data.address,
      image: data.image,
      status: data.status,
    };
    let url =
      "https://infinity-event-organizer-backend.vercel.app/v1/organization";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addOrganizer),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status === "Success") {
          toast.success("Organizer added successfully");
        } else {
          toast.error(`Organizer could not be added successfully.`);
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2"
      >
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Organizer Name
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Organizer Name is require",
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
            <span className="label-text text-black text-lg">Email</span>
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
                value: /[a-zA-Z1-9]+@[a-zA-Z]+\.[a-z]{2,3}/,
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
        {/* website */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Website</span>
          </label>
          <input
            type="website"
            className="input input-bordered w-full max-w-xs"
            {...register("website")}
          />
          <label className="label">
            {errors.website?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.website.message}
              </span>
            )}
            {errors.website?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.website.message}
              </span>
            )}
          </label>
        </div>
        {/* facebook */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Facebook</span>
          </label>
          <input
            type="facebook"
            className="input input-bordered w-full max-w-xs"
            {...register("facebook")}
          />
          <label className="label">
            {errors.facebook?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.facebook.message}
              </span>
            )}
            {errors.facebook?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.facebook.message}
              </span>
            )}
          </label>
        </div>
        {/* instagram */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Instagram</span>
          </label>
          <input
            type="instagram"
            className="input input-bordered w-full max-w-xs"
            {...register("instagram")}
          />
          <label className="label">
            {errors.instagram?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.instagram.message}
              </span>
            )}
            {errors.instagram?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.instagram.message}
              </span>
            )}
          </label>
        </div>
        {/* whatsapp */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Whatsapp</span>
          </label>
          <input
            type="whatsapp"
            className="input input-bordered w-full max-w-xs"
            {...register("whatsapp")}
          />
          <label className="label">
            {errors.whatsapp?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.whatsapp.message}
              </span>
            )}
            {errors.whatsapp?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.whatsapp.message}
              </span>
            )}
          </label>
        </div>
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Contact Number
            </span>
          </label>
          <input
            type="phone"
            className="input input-bordered w-full max-w-xs"
            {...register("contactNumber", {
              required: {
                value: true,
                message: "Phone is require",
              },
            })}
          />
          <label className="label">
            {errors.contactNumber?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.contactNumber.message}
              </span>
            )}
            {errors.contactNumber?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.contactNumber.message}
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
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">Image</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            {...register("image")}
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        {/* status */}
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
        <div className="form-control mt-6">
          <button className="btn btn-white w-1/2" value="registration">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrganizer;
