import React from 'react';

const UserBookingHistory = () => {
    return (
        <div className="mt-5">
        <h1 className="dashboard-header text-xl md:text-3xl text-center animate-bounce">Booking History</h1>
        <div className="overflow-x-auto mt-5">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Package Name</th>
                    <th>Package Price</th>
                    <th>Organizer</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Nur Hossain</td>
                        <td>nur1516@gmail.com</td>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>Grandiose</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Sabbir Hossain</td>
                        <td>sabbir74@gmail.com</td>
                        <td>Wedding with Lama</td>
                        <td>$1000</td>
                        <td>Lama</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Kiron Chowdhury</td>
                        <td>kiron932@gmail.com</td>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>Red Chili</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Tareque Ahmed</td>
                        <td>tareque93@gmail.com</td>
                        <td>WEDDING STAGE DECORATION</td>
                        <td>$500</td>
                        <td>Sultan Dayan</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>Ebrahim Rahaman</td>
                        <td>ebrahim49@gmail.com</td>
                        <td>Birthday photography</td>
                        <td>$200</td>
                        <td>Remison</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>Salman Afsar</td>
                        <td>salman1516@gmail.com</td>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>Grandiose</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
    );
};

export default UserBookingHistory;