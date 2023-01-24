import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const OrganizerBookingHistory = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [organizer, setOrganizer] = useState();
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        const url = `https://infinity-event-organizer-backend.vercel.app/v1/organization/email/${email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setOrganizer(data.data);
            })
    }, [organizer]);
    const organizerName = organizer?.name;
    useEffect(() => {
        const url = `https://infinity-event-organizer- 
         backend.vercel.app/v1/booking/organizerName/${organizerName}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBooking(data.data);
            })
    }, [booking]);
    return (
        <div className="mt-5">
            <h1 className="dashboard-header text-3xl text-center animate-bounce">Booking History</h1>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>User Number</th>
                        <th>User Address</th>
                        <th>Package Name</th>
                        <th>Package Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((book) => 
                            <tr>
                                <td>{book?.customerName}</td>
                                <td>{book?.customerEmail}</td>
                                <td>{book?.customerNumber}</td>
                                <td>{book?.customerAddress}</td>
                                <td>{book?.packageName}</td>
                                <td>{book?.packagePrice}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizerBookingHistory;