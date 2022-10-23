import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
import jwt_decode from "jwt-decode";
import '../css/rootCss.css'
import TeacherTable from '../components/tables/TeacherTable'
import RoomTable from '../components/tables/RoomTable';

export default function Rooms() {
    const users = JSON.parse(localStorage.getItem("userRole"));
    const atts = jwt_decode(users);
    const atributs = atts;
    const roleName = atributs
    // console.log(roleName.roles)
    const userrole = roleName.fullName
    return (
        <>
            <AdminSidebar/>
            <div style={{marginLeft: '220px'}} className='title'>
                <h1 className='titleName'>Rooms</h1>
                <div className='titleUser'>
                    <p>{userrole}</p>
                    <div className='logOut'>
                        <FiLogOut/>
                    </div>
                </div>
            </div>
            <RoomTable/>
        </>
    )
}