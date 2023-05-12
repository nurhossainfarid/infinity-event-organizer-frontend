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
  const navigateOrgPackages = (oId) => {
    navigate(`/organizerDetails/${oId}`);
  };

  // delete organization
  const handleDelete = (id) => {
    const url = `https://event-api.nurhossainfarid.com/v1/organization/${id}`;
    const decision = window.confirm("Will you remove this Organizer?");
    if (decision) {
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
    }
  };
  return (
    <div className="mx-1 md:mx-0 mt-5 md:mt-10 pb-10">
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
      <p className='text-lg'>Click the <span className="text-purple-600 font-semibold">"Details" </span> 
           Button to Know about organizer details, also update or delete a organizer</p>
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
              <td>{(org?.name).substring(0, 30)}...</td>
              <td>{org.email}</td>
              <td>{org.contactNumber}</td>
              <td>{(org.address).substring(0, 15)}..</td>
              <td>{org.status}</td>
              <td className="flex flex-col gap-2">
                    {/* The button to open modal */}
                  <label htmlFor={org?._id} className="btn btn-xs 
                    hover:btn-secondary">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={org?._id} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-7/12 max-w-5xl">
                        <label htmlFor={org?._id} className="btn btn-sm btn-circle absolute right-2 
                      top-2">✕</label>
                        <div className="grid grid-cols-1 gap-5">
                          <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                           {org?.name} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                           {org?.email} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Phone : </span> 
                           {org?.contactNumber} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Address : </span> 
                           {org?.address}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Status : </span> 
                           {org?.status} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Image : </span> 
                           {org?.image}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Website : </span> 
                           {org?.website}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Facebook : </span> 
                           {org?.facebook}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Whatsapp : </span> 
                           {org?.whatsapp}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Instagram : </span> 
                           {org?.instagram}  
                           </p>
                        </div>
                    <div className="modal-action">
                          <button
                            className="btn btn-sm hover:btn-secondary"
                            onClick={() => navigateOrgPackages(org?._id)}
                          >
                            See Packages
                          </button>
                          <button
                            className="btn btn-sm hover:btn-secondary"
                            onClick={() => navigateOrganizer(org._id)}
                          >
                            Update
                          </button>
                      <button
                          htmlFor={org?._id}
                            className="btn btn-sm hover:btn-secondary"
                            onClick={() => handleDelete(org._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleOrganizers;
