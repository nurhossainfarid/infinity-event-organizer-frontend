import React from 'react';

const HandleClientFeedback = () => {
    return (
        <div className="mt-5">
            <h1 className="dashboard-header text-xl md:text-3xl text-center animate-bounce">Client Feedback</h1>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Nur Hossain</td>
                            <td>nur1516@gmail.com</td>
                            <td>Your service are awesome and mind blowing.</td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Sabbir Alom</td>
                            <td>sabbir938@gmail.com</td>
                            <td>First time I think your are fake but no your service system are awesome.</td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Ebrahim Tanduri</td>
                            <td>tanduri933@gmail.com</td>
                            <td>Your online payment is helpful for me.</td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Kiron Khan</td>
                            <td>kiron382@gmail.com</td>
                            <td>Your service are awesome and mind blowing.</td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>Tarque Kondas</td>
                            <td>kondas840@gmail.com</td>
                            <td>Your service are awesome and mind blowing.</td>
                            <td className="flex flex-col gap-2">
                                <button className="btn btn-xs hover:btn-secondary">Update</button>
                                <button className="btn btn-xs hover:btn-secondary">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>Salman Kawser</td>
                            <td>kaswer584@gmail.com</td>
                            <td>Your service are awesome and mind blowing.</td>
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

export default HandleClientFeedback;