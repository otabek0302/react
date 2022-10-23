import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
// import '../css/rootCss.css'
import TeacherTable from '../../components/tables/TeacherTable'
import SuperSidebar from '../../components/SuperSidebar'
import CashierTable from '../../components/tables/CashierTable'
import { useNavigate } from 'react-router-dom'

export default function CashierPage() {
    const users = JSON.parse(localStorage.getItem("userRole"));
    const logOutNavigate = useNavigate();
    const logout = () => {
        localStorage.removeItem(users);
        logOutNavigate('/')
    };
    return (
        <>
            <SuperSidebar/>
            <div style={{marginLeft: '220px'}} className='title'>
                <h1 className='titleName'>Cashiers</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut' onClick={logout}>
                        <FiLogOut/>
                    </div>
                </div>
            </div>
            <CashierTable/>
        </>
    )
}