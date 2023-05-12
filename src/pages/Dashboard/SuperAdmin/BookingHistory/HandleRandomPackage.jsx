import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const HandleRandomPackage = () => {
    const [bookingData, setBookingData] = useState([]);
    useEffect(() => {
      const url = "https://event-api.nurhossainfarid.com/v1/booking";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data.data);
        });
    }, [bookingData]);
  
    const handleDelete = (id) => {
      const url = `https://event-api.nurhossainfarid.com/v1/booking/${id}`;
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
        <div className="overflow-x-auto mt-5">
          <p className='text-lg'>Click the <span className="text-purple-600 font-semibold">"Details" </span> 
           Button to Know about package details, also update or delete a package</p>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Ref. Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Package Name</th>
                <th>Organizer Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking) => (
                <tr>
                  <td>{booking?._id}</td>
                  <td>{booking?.customerName}</td>
                  <td>{booking?.customerEmail}</td>
                  <td>{booking?.customerNumber}</td>
                  <td>{booking?.packageName}</td>
                  <td>{booking?.organizerName}</td>
                  <td className="flex flex-col gap-2">
                  {/* The button to open modal */}
                  <label htmlFor={booking?._id} className="btn btn-xs hover:btn-secondary">Details</label>

                  {/* Put this part before </body> tag */}
                  <input type="checkbox" id={booking?._id} className="modal-toggle" />
                  <div className="modal">
                    <div className="modal-box w-6/12 max-w-5xl">
                      <label htmlFor={booking?._id} className="btn btn-sm btn-circle absolute right-2 
                    top-2">✕</label>
                      <div className="grid grid-cols-2 gap-5">
                        <p><span className="font-semibold text-sm">Ref. Id : </span> 
                          <span className="text-lg">{booking?._id}</span>
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                        {booking?.customerName} 
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                        {booking?.customerEmail} 
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Phone : </span> 
                        {booking?.customerNumber} 
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Address : </span> 
                        {booking?.customerAddress} 
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Package Name : </span> 
                        {booking?.packageName}  
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Package Price : </span> 
                        {booking?.packagePrice}  
                        </p>
                        <p className="text-lg"><span className="font-semibold text-sm">Organizer Name : </span> 
                        {booking?.organizerName} 
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
                          htmlFor={booking?._id}
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

export default HandleRandomPackage;