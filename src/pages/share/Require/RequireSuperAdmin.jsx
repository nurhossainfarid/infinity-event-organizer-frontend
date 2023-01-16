import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { Navigate, useLocation} from 'react-router-dom';
import Loading from '../Loading';
import auth from '../../../firebase.init';
import useUserRole from '../CustomHooks/useUserRole';

const RequireSuperAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [userRole, userRoleLoading] = useUserRole(user)
    const location = useLocation();
    const admin = userRole?.role === "super admin";
    if (loading || userRoleLoading) {
        return <Loading></Loading>
    }
    
    if (!user || !admin) {
        signOut(auth);
        return <Navigate to={'/login'} state={{from : location}} replace></Navigate>
    }


    return children;
};

export default RequireSuperAdmin;