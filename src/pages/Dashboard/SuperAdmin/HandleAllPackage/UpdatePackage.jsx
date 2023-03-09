import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePackage = () => {
  const { packageId } = useParams();
  const [packageData, setPackageData] = useState([]);

  useEffect(() => {
    const url = `https://infinity-event-organizer-backend.vercel.app/v1/package/${packageId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPackageData(data.data);
      });
  }, [packageData]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const updatePackage = {
      name: !data.name ? packageData.name : data.name,
      price: !data.price ? packageData.price : data.price,
      time: !data.time ? packageData.time : data.time,
      attend: !data.attend ? packageData.attend : data.attend,
      eventName: !data.eventName ? packageData.eventName : data.eventName,
      organization: {
        name: !data.organizationName
          ? packageData.organization.name
          : data.organizationName,
        id: !data.organizationId
          ? packageData.organization.id
          : data.organizationId,
      },
      foodMenu: !data.foodMenu ? packageData.foodMenu : data.foodMenu,
      status: !data.status ? packageData.status : data.status,
      category: !data.category ? packageData.category : data.category,
    };
    console.log(updatePackage);
    let url = `https://infinity-event-organizer-backend.vercel.app/v1/package/${packageId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatePackage),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success("Package Update Successfully");
        } else {
          toast.error("Failed for Update");
        }
      });
  };
  return (
    <div className="mx-28 mt-28">
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="grid grid-cols-2 gap-5"
      >
        {/* name */}
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">
                Package Name
              </span>
            </label>
            <input
              type="text"
              Value={packageData?.name}
              className="input input-bordered w-full max-w-xs"
              {...register("name")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Price($)</span>
            </label>
            <input
              type="number"
              Value={packageData?.price}
              className="input input-bordered w-full max-w-xs"
              {...register("price")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Time</span>
            </label>
            <input
              type="text"
              Value={packageData?.time}
              className="input input-bordered w-full max-w-xs"
              {...register("time")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">
                Maximum Attendant
              </span>
            </label>
            <input
              type="number"
              Value={packageData?.attend}
              className="input input-bordered w-full max-w-xs"
              {...register("attend")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Event Name</span>
            </label>
            <input
              type="text"
              Value={packageData?.eventName}
              className="input input-bordered w-full max-w-xs"
              {...register("eventName")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">
                Organization Name
              </span>
            </label>
            <input
              type="text"
              Value={packageData?.organization?.name}
              className="input input-bordered w-full max-w-xs"
              {...register("organizationName")}
            />
          </div>
          <label className="label">
            {errors.organizationName?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.organizationName.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">
                Organization ID
              </span>
            </label>
            <input
              type="text"
              Value={packageData?.organization?.id}
              className="input input-bordered w-full max-w-xs"
              {...register("organizationId")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Food Menu</span>
            </label>
            <input
              type="text"
              Value={packageData?.foodMenu}
              className="input input-bordered w-full max-w-xs"
              {...register("menu")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Category</span>
            </label>
            <input
              type="text"
              Value={packageData?.category}
              className="input input-bordered w-full max-w-xs"
              {...register("category")}
            />
          </div>
          <label className="label">
            {errors.category?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.category.message}
              </span>
            )}
          </label>
        </div>
        {/* status */}
        <div className="form-control">
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Status</span>
            </label>
            <input
              type="text"
              Value={packageData?.status}
              className="input input-bordered w-full max-w-xs"
              {...register("status")}
            />
          </div>
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
          <div className="flex gap-2">
            <label className="label">
              <span className="label-text text-black text-lg">Image</span>
            </label>
            <input
              type="text"
              Value={packageData?.image}
              className="input input-bordered w-full max-w-xs"
              {...register("image")}
            />
          </div>
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        <div>
          <button className="btn btn-white w-1/2">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePackage;
