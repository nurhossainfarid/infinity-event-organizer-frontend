import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BookingHistory = () => {
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
  };
  return (
    <div className="mx-1 md:mx-0 mt-5">
      <h1 className="dashboard-header text-xl md:text-3xl text-center animate-bounce">
        Booking History
      </h1>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>U.Number</th>
              <th>U.Address</th>
              <th>Package Name</th>
              <th>Package Price</th>
              <th>Organizer Name</th>
              <th>Organizer Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookingData.map((booking) => (
              <tr>
                <td>{booking?.customerName}</td>
                <td>{booking?.customerEmail}</td>
                <td>{booking?.customerNumber}</td>
                <td>{booking?.customerAddress}</td>
                <td>{booking?.packageName}</td>
                <td>{booking?.packagePrice}</td>
                <td>{booking?.organizerName}</td>
                <td>{booking?.organizerAddress}</td>
                <td className="flex flex-col gap-2">
                  <button className="btn btn-xs hover:btn-secondary">
                    Update
                  </button>
                  <button
                    className="btn btn-xs hover:btn-secondary"
                    onClick={() => handleDelete(booking?._id)}
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

export default BookingHistory;
