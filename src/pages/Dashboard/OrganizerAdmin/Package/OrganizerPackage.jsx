import React from 'react';

const OrganizerPackage = () => {
    return (
        <div className="mt-5">
            <div className="flex justify-between mt-5">
                <h1 className="text-3xl text-center mb-10 dashboard-header">Handle Package</h1>
                <button className="btn btn-outline btn-secondary animate-bounce text-lg">Add Package</button>
            </div>
            <div className="overflow-x-auto mt-3">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Time</th>
                        <th>People</th>
                        <th>Organizers</th>
                        <th>Package Img</th>
                        <th>Extra Service</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>B.C.P Friday Black Night</td>
                        <td>$100</td>
                        <td>5 Hours</td>
                        <td>Max. 10</td>
                        <td>Grandiose</td>
                        <td>Null</td>
                        <td>Decoration, <br />Catering </td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrganizerPackage;