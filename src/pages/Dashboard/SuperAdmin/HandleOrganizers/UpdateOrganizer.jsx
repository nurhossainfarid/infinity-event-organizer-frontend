import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateOrganizer = () => {
  const { orgId } = useParams();
  const [orgData, setOrgData] = useState();
  useEffect(() => {
    const url = `https://event-api.nurhossainfarid.com/v1/organization/${orgId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrgData(data.data);
      });
  }, [orgData]);
  // use form for update
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const addOrganizer = {
      name: !data.name ? orgData.name : data.name,
      email: !data.email ? orgData.email : data.email,
      contactNumber: !data.contactNumber
        ? orgData.contactNumber
        : data.contactNumber,
      address: !data.address ? orgData.address : data.address,
      image: !data.image ? orgData.image : data.image,
      status: !data.status ? orgData.status : data.status,
    };
    let url = `https://event-api.nurhossainfarid.com/v1/organization/${orgId}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addOrganizer),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success("Organizer updated successfully");
        } else {
          toast.error("Organizer could not be updated successfully");
        }
      });
  };
  return (
    <div className="mx-28 mt-28 mb-10">
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
            Value={orgData?.name}
            className="input input-bordered w-full max-w-xs"
            {...register("name")}
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
            Value={orgData?.email}
            className="input input-bordered w-full max-w-xs"
            {...register("email", {
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
        {/* phone */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-lg">
              Contact Number
            </span>
          </label>
          <input
            type="phone"
            Value={orgData?.contactNumber}
            className="input input-bordered w-full max-w-xs"
            {...register("contactNumber", {
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
            <span className="label-text text-black text-lg">Address</span>
          </label>
          <input
            type="text"
            Value={orgData?.address}
            className="input input-bordered w-full max-w-xs"
            {...register("address")}
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
          <input
            type="text"
            Value={orgData?.status}
            className="input input-bordered w-full max-w-xs"
            {...register("status")}
          />
          <label className="label">
            {errors.menu?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.menu.message}
              </span>
            )}
          </label>
        </div>
        {/* <h1>Package Name: {orgData?.packages.map(p => <span>{p?.name}</span>)}</h1> */}
        <div className="form-control mt-6">
          <button className="btn btn-white w-1/2" value="registration">
            Update
          </button>
        </div>
      </form>
      <div className="mt-10">
        <h1 className="text-center text-5xl">Handle All Packages</h1>
        <div className="grid grid-cols-3 gap-5">
          {orgData?.packages.map((pack) => (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{pack?.name}</h2>
                <p className="text-lg">Price: ${pack?.price}</p>
                <p className="text-lg">Time: {pack?.time}</p>
                <p className="text-lg">Attend: {pack?.attend}</p>
                <p className="text-lg">Category: {pack?.category}</p>
                <p className="text-lg">Event Name: {pack?.eventName}</p>
                <p className="text-lg">Food Menu: {pack?.foodMenu}</p>
                <p className="text-lg">Status: {pack?.status}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-white">Update Package</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateOrganizer;
