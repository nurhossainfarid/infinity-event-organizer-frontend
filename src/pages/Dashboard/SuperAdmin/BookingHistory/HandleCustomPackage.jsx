import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const HandleCustomPackage = () => {
    const [bookingData, setBookingData] = useState([]);
    useEffect(() => {
      const url = "http://localhost:5000/v1/customBooking";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data.data);
        });
    }, [bookingData]);
  
  const handleDelete = (id) => {
    const url = `http://localhost:5000/v1/customBooking/${id}`;
    const decision = window.confirm("Will you remove this booking history?");
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
            toast.success("Booking deleted successfully");
          } else {
            toast.error("Booking could not be deleted successfully");
          }
        });
    }
    };
    return (
        <div className="mx-1 md:mx-0 mt-5">
        <div className="overflow-x-auto">
          <p className='text-lg'>Click the <span className="text-purple-600 font-semibold">"Details" </span> 
           Button to Know about package details, also update or delete a package</p>
          <table className="table w-full mt-2">
            <thead>
              <tr>
                <th>Ref. Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Event Category</th>
                <th>Organizer Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr>
                  <td>{booking?._id}</td>
                  <td>{booking?.name}</td>
                  <td>{booking?.email}</td>
                  <td>{booking?.phone}</td>
                  <td>{booking?.eventCategory}</td>
                  <td>{booking?.organizerName}</td>
                  <td className="flex flex-col gap-2">
                    {/* The button to open modal */}
                    <label htmlFor="handleCustomModal" className="btn btn-xs hover:btn-secondary">Details</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="handleCustomModal" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box w-6/12 max-w-5xl">
                        <label htmlFor="handleCustomModal" className="btn btn-sm btn-circle absolute right-2 
                      top-2">✕</label>
                        <div className="grid grid-cols-2 gap-5">
                          <p><span className="font-semibold text-sm">Ref. Id : </span> 
                            <span className="text-lg">{booking?._id}</span>
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                           {booking?.name} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                           {booking?.email} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Phone : </span> 
                           {booking?.phone} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Address : </span> 
                           {booking?.address} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Event Category : </span> 
                           {booking?.eventCategory}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Food Items : </span> 
                           {booking?.foodItems}  
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Attend : </span> 
                           {booking?.attend} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Organizer Name : </span> 
                           {booking?.organizerName} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Location : </span> 
                           {booking?.location} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Date : </span> 
                           {booking?.date} 
                           </p>
                          <p className="text-lg"><span className="font-semibold text-sm">Time : </span> 
                           {booking?.time} 
                           </p>
                        </div>
                        <div className="modal-action">
                          <button className="btn btn-sm hover:btn-secondary">
                            Update
                          </button>
                          <label
                            htmlFor="handleCustomModal"
                            className="btn btn-sm hover:btn-secondary"
                            onClick={() => handleDelete(booking?._id)}
                          >
                            Delete
                          </label>
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

export default HandleCustomPackage;