import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Endpoint from '../api/Api';
import AdminSidebar from '../components/AdminSidebar';
import { FiLogOut } from 'react-icons/fi'
import jwt_decode from "jwt-decode";
import TeacherBanner from '../components/TeacherBanner';
import '../css/banner.css'
import { useParams,Link } from "react-router-dom"
import AdminBanner from '../components/Adminbanner';
import SuperSidebar from '../components/SuperSidebar';


export default function SingleAdmin() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    console.log(data)
    const users = JSON.parse(localStorage.getItem("userRole"));
    const atts = jwt_decode(users);
    const atributs = atts;
    const roleName = atributs
    // console.log(roleName.roles)
    const userrole = roleName.fullName

    return (
        <div>
            <SuperSidebar />
            <div style={{ marginLeft: '220px' }} className='title'>
                <h1 className='titleName'>Details</h1>
                <div className='titleUser'>
                    <p>{userrole}</p>
                    <div className='logOut'>
                        <FiLogOut />
                    </div>
                </div>
            </div>
            <div className="singleBox">
                <AdminBanner />
                
            </div>
        </div>
    )
}
