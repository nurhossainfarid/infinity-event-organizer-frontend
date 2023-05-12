import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RandomPackage = () => {
    const [bookingData, setBookingData] = useState([]);
    const [user] = useAuthState(auth);
    const { email } = user;
    useEffect(() => {
      const url = `http://localhost:5000/v1/booking/email/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data.data);
        });
    }, [bookingData]);
  const navigate = useNavigate();
  const navigateFeedback = (bookingRefId) => {
    navigate(`/feedback/${bookingRefId}`)
  }
    return (
        <div className="mx-1 md:mx-0 mt-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Booking Ref. Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Package Name</th>
                  <th>Organizer</th>
                  <th>Customer Feedback</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookingData?.map((book) => (
                  <tr>
                    <td>{book?._id}</td>
                    <td>{book?.customerName}</td>
                    <td>{book?.customerEmail}</td>
                    <td>{book?.packageName}</td>
                    <td>{book?.organizerName}</td>
                    <td className="">
                      {/* The button to open modal */}
                      <button 
                        className="btn btn-xs hover:btn-secondary" onClick={() => 
                         navigateFeedback(book?._id)}>Feedback</button>
                    </td>
                    <td className="">
                      {/* The button to open modal */}
                      <label htmlFor={book?._id} className="btn btn-xs hover:btn-secondary">Details</label>

                      {/* Put this part before </body> tag */}
                      <input type="checkbox" id={book?._id} className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box w-6/12 max-w-5xl">
                          <label htmlFor={book?._id} className="btn btn-sm btn-circle absolute right-2 
                        top-2">✕</label>
                          <div className="grid grid-cols-2 gap-5">
                            <p><span className="font-semibold text-sm">Ref. Id : </span> 
                              <span className="text-lg">{book?._id}</span>
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                            {book?.customerName} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                            {book?.customerEmail} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Phone : </span> 
                            {book?.customerNumber} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Address : </span> 
                            {book?.customerAddress} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Package Name : </span> 
                            {book?.packageName}  
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Package Price : </span> 
                            {book?.packagePrice}  
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Organizer Name : </span> 
                            {book?.organizerName} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Date : </span> 
                            {book?.date} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Time : </span> 
                            {book?.time} 
                            </p>
                          </div>
                          <div className="modal-action">
                            <button disabled className="btn btn-sm hover:btn-secondary">
                              Update
                            </button>
                                <label
                                  disabled
                              htmlFor={book?._id}
                                  className="btn btn-sm hover:btn-secondary"
                                  
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

export default RandomPackage;