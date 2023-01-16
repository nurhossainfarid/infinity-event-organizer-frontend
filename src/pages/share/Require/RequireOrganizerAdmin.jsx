import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Navigate, useLocation} from 'react-router-dom';
import useUserRole from '../CustomHooks/useUserRole';
import Loading from '../Loading';
import auth from '../../../firebase.init';

const RequireOrganizerAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [userRole, userRoleLoading] = useUserRole(user)
    const location = useLocation();
    const organizerAdmin = userRole?.role === "organizeradmin";
    const superAdmin = userRole?.role === "super admin";

    if (loading || userRoleLoading || superAdmin) {
        return <Loading></Loading>
    }
    
    if (!user || !organizerAdmin) {
        signOut(auth);
        return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
    }


    return children;
};

export default RequireOrganizerAdmin;