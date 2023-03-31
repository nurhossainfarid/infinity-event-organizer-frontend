import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// custom css
import "./HandleOrganizers.css";

const HandleOrganizers = () => {
  const [organizersData, setOrganizersData] = useState([]);
  useEffect(() => {
    const url = "https://event-api.nurhossainfarid.com/v1/organization";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrganizersData(data.data);
      });
  }, [organizersData]);

  // navigate organizer
  const navigate = useNavigate();
  const navigateOrganizer = (orgId) => {
    navigate(`/updateOrganizer/${orgId}`);
  };

  // delete organization
  const handleDelete = (id) => {
    const url = `https://event-api.nurhossainfarid.com/v1/organization/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status.toLowerCase() === "success") {
          toast.success("Organizer delete successfully");
        } else {
          toast.error("Organizer could not delete successfully");
        }
      });
  };
  return (
    <div className="mx-1 md:mx-0 mt-5 md:mt-10">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl text-center mb-10 dashboard-header">
          Handle Organizers
        </h1>
        <Link
          to="/dashboard/createOrganization"
          className="btn btn-outline btn-secondary animate-bounce 
                  md:text-lg "
        >
          Add Organizers
        </Link>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizersData.map((org) => (
            <tr>
              <td>{org?.name}</td>
              <td>{org.email}</td>
              <td>{org.contactNumber}</td>
              <td>{org.address}</td>
              <td>{org.status}</td>
              <td className="flex flex-col gap-2">
                <button className="btn btn-sm hover:btn-secondary">
                  Details
                </button>
                <button
                  className="btn btn-sm hover:btn-secondary"
                  onClick={() => navigateOrganizer(org._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-sm hover:btn-secondary"
                  onClick={() => handleDelete(org._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleOrganizers;
