import React, { useState } from 'react';

import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import '../css/rootCss.css'

import AuthService from '../service/AuthService'

export default function LoginPage() {
const [login, setUsername] = useState("");
const [password, setPassword] = useState("");

    const supernavigate = useNavigate();
    const adminnavigate = useNavigate();
    const cashiernavigate = useNavigate();
    const noUserNavigate = useNavigate();

const handleLogin = async (e) => {
    e.preventDefault();

    try {
        await AuthService.login(login, password)
            .then(() => {
                const users = JSON.parse(localStorage.getItem("userRole"));
                const atts = jwt_decode(users);
                const atributs = atts;
                const roleName = atributs
                // console.log(roleName.roles)
                const userrole = roleName.roles

                if (userrole === "SUPER_ADMIN") {
                    supernavigate('/dashboard')
                }
                else if (userrole === "ADMIN") {
                    adminnavigate('/schedule')
                }
                else if (userrole === "CASHIER") {
                    cashiernavigate('/debtors')
                }
                else {
                    noUserNavigate("/")
                }
            }
            )
    } catch (err) {
        console.log(err);
    }
};
  return (
    <div>
        <form className='form center' onSubmit={handleLogin}>
            <h1 className='welcome'>Welcome</h1>
            <input className='input' type="text" placeholder='login' onChange={(e) => setUsername(e.target.value)} />
            <input className='input' type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>
            <button className='btn-form-primary border-radius border-shadow'>Login</button>
        </form>
    </div>
  )
}
