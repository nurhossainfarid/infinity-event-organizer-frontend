import React, { useEffect, useState } from 'react';

const useUserRole = user => {
    const [userRole, setUserRole] = useState(false);
    const [userRoleLoading, setUserRoleLoading] = useState(true);

    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://infinity-event-organizer-backend.vercel.app/v1/user/role/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bear ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUserRole(data.data);
                    setUserRoleLoading(false);
                })
        }
    }, [user]);
    
    return [userRole, userRoleLoading];
};

export default useUserRole;