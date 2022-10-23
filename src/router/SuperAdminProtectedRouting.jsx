import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const useAuth = () => {
    const users = JSON.parse(localStorage.getItem("userRole"));
    const atts = jwt_decode(users);
    const atributs = atts;
    const roleName = atributs
    console.log(roleName.roles)
    const userrole = roleName.roles
    if (userrole === "SUPER_ADMIN")
        return true
    else {
        return false
    }
}

const ProtectedRoutingAdmin = () => {

    const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutingAdmin;