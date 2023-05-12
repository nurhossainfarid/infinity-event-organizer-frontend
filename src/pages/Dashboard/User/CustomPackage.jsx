import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useEffect } from 'react';

const CustomPackage = () => {
    const [bookingData, setBookingData] = useState([]);
    const [user] = useAuthState(auth);
  const { email } = user;
    useEffect(() => {
      const url = `http://localhost:5000/v1/customBooking/email/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data.data);
        });
    }, [bookingData]);
    return (
        <div>
        <div className="overflow-x-auto mt-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Ref. Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Event Category</th>
                <th>Food Items</th>
                <th>Attend</th>
                <th>Organizer</th>
                <th>Date</th>
                <th>Time</th>
                <th>Extra Service</th>
              </tr>
            </thead>
            <tbody>
              {bookingData?.map((book) => (
                <tr>
                  <td>{book?._id}</td>
                  <td>{book?.name}</td>
                  <td>{book?.email}</td>
                  <td>{book?.phone}</td>
                  <td>{book?.address}</td>
                  <td>{book?.eventCategory}</td>
                  <td>{book?.foodItems}</td>
                  <td>{book?.attend}</td>
                  <td>{book?.organizerName}</td>
                  <td>{book?.location}</td>
                  <td>{book?.date}</td>
                  <td>{book?.time}</td>
                  <td>{book?.extraService}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default CustomPackage;