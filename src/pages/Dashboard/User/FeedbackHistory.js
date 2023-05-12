import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const FeedbackHistory = () => {
    const [feedbackData, setFeedbackData] = useState([]);
    const [user] = useAuthState(auth);
    const {email} = user;
    useEffect(() => {
      const url = `http://localhost:5000/v1/feedback/email/${email}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setFeedbackData(data.data);
        });
    }, [feedbackData]);
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {feedbackData?.map((feedback) => (
                  <tr>
                    <td>{feedback?.bookingRefId}</td>
                    <td>{feedback?.name}</td>
                    <td>{feedback?.email}</td>
                    <td>{feedback?.packageName}</td>
                    <td>{feedback?.organizerName}</td>
                    <td className="">
                      {/* The button to open modal */}
                      <label htmlFor={feedback?._id} className="btn btn-xs hover:btn-secondary">Details</label>

                      {/* Put this part before </body> tag */}
                      <input type="checkbox" id={feedback?._id} className="modal-toggle" />
                      <div className="modal">
                        <div className="modal-box w-6/12 max-w-5xl">
                          <label htmlFor={feedback?._id} className="btn btn-sm btn-circle absolute right-2 
                        top-2">✕</label>
                          <div className="grid grid-cols-2 gap-5">
                            <p><span className="font-semibold text-sm">Booking Ref. Id : </span> 
                              <span className="text-lg">{feedback?.bookingRefId}</span>
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Name : </span> 
                            {feedback?.name} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Email : </span> 
                            {feedback?.email} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Package Name : </span> 
                            {feedback?.packageName}  
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Organizer Name :  
                             </span> 
                             {feedback?.organizerName} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Comment : </span> 
                            {feedback?.comment} 
                            </p>
                            <p className="text-lg"><span className="font-semibold text-sm">Comment : </span> 
                            {feedback?.rating} 
                            </p>
                          </div>
                          <div className="modal-action">
                            <button disabled className="btn btn-sm hover:btn-secondary">
                              Update
                            </button>
                                <label
                                  disabled
                              htmlFor={feedback?._id}
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

export default FeedbackHistory;