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
    const decision = window.confirm("Will you remove this package?");
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
            toast.success(`Package was deleted successfully`);
          } else {
            toast.error(`Failed delete`);
          }
        });
    }
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
        <p className='text-lg'>Click the <span className="text-purple-600 font-semibold">"Details" </span> 
           Button to Know about package details, also update or delete a package</p>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Time</th>
              <th>People</th>
              <th>Organizers</th>
              <th>Event Category</th>
              <th>Status</th>
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
                <td className="flex flex-col gap-2">
                    {/* The button to open modal */}
                  <label htmlFor={packs?._id} className="btn btn-xs 
                    hover:btn-secondary">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id={packs?._id} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-6/12 max-w-5xl">
                        <label htmlFor={packs?._id} className="btn btn-sm btn-circle absolute right-2 
                      top-2">✕</label>
                        <div className="grid grid-cols-2 gap-5">
                          <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                           {packs?.name} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Price : </span> 
                           {packs?.price} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Time : </span> 
                           {packs?.time} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Attend : </span> 
                           {packs?.attend}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Organizer Name : </span> 
                           {packs?.organization?.name} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Status : </span> 
                           {packs?.status}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Category : </span> 
                           {packs?.category} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Food Menu : </span> 
                           {packs?.foodMenu} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Event Name : </span> 
                           {packs?.eventName} 
                           </p>
                        </div>
                        <div className="modal-action">
                          <label
                            className="btn btn-xs hover:btn-secondary"
                            onClick={() => navigatePackage(packs._id)}
                          >
                            Update
                          </label>
                        <button
                            htmlFor={packs?._id}
                            onClick={() => handleDelete(packs._id)}
                            className="btn btn-xs hover:btn-secondary"
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
    </div>
  );
};

export default HandlePackages;
