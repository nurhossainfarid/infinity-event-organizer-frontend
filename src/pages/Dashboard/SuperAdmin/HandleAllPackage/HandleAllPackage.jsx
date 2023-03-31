import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HandlePackages = () => {
  const [packagesData, setPackagesData] = useState([]);

  useEffect(() => {
    const url = "https://event-api.nurhossainfarid.com/v1/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPackagesData(data.data);
      });
  }, [packagesData]);

  const navigate = useNavigate();
  const navigatePackage = (packageId) => {
    navigate(`/updatePackage/${packageId}`);
  };

  const handleDelete = (id) => {
    const url = `https://event-api.nurhossainfarid.com/v1/package/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success(`Package was deleted successfully`);
        } else {
          toast.error(`Failed delete`);
        }
      });
  };
  return (
    <div className="mt-5 mx-1 md:mx-0">
      <div className="flex justify-between mt-5">
        <h1 className="text-xl md:text-3xl text-center mb-10 dashboard-header">
          Handle Package
        </h1>
        <button className="btn btn-outline btn-secondary animate-bounce text-sm md:text-lg">
          <Link to="/dashboard/createPackage">Add Package</Link>
        </button>
      </div>
      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Time</th>
              <th>People</th>
              <th>Organizers</th>
              <th>Category</th>
              <th>Status</th>
              <th>Package Img</th>
              <th>Extra Service</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packagesData.map((packs) => (
              <tr>
                <td>{packs.name}</td>
                <td>${packs.price}</td>
                <td>{packs.time}</td>
                <td>{packs.attend}</td>
                <td>{packs.organization.name}</td>
                <td>{packs.category}</td>
                <td>{packs.status}</td>
                <td>Null</td>
                <td>
                  Decoration, <br />
                  Catering{" "}
                </td>
                <td className="flex flex-col gap-2">
                  <label
                    htmlFor="my-modal"
                    className="btn btn-xs hover:btn-secondary"
                    onClick={() => navigatePackage(packs._id)}
                  >
                    Update
                  </label>
                  <button
                    onClick={() => handleDelete(packs._id)}
                    className="btn btn-xs hover:btn-secondary"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HandlePackages;
