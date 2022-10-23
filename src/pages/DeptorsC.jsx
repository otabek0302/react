import React, { useState } from 'react'
import '../css/report.css'
import '../css/calendar.css'
import '../css/toggleModal.css'
import Calendar from 'react-calendar';
import AdminSidebar from '../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
// import '../css/rootCss.css'
import TeacherTable from '../components/tables/TeacherTable'
import CashierSidebar from '../components/CashierSideBar'

import { useNavigate } from "react-router-dom";

export default function DeptorsC() {

    const users = JSON.parse(localStorage.getItem("userRole"));
    const logOutNavigate = useNavigate();
    const logout = () => {
        localStorage.removeItem(users);
        logOutNavigate('/')
    };


    return (
        <>
            <CashierSidebar />
            <div style={{ marginLeft: '220px' }} className='title'>
                <h1 className='titleName'>Debtors</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut' onClick={logout}>
                        <FiLogOut />
                    </div>
                </div>
            </div>

            <div>
                <input type="search" className='search' style={{ marginLeft: '240px' }} placeholder='search / filter' />
            </div>
            <div className='tableHeader' style={{ marginLeft: '220px' }}>
                <table>
                    <tr className='tableTitle'>
                        <th>No</th>
                        <th>Student</th>
                        <th>Group</th>
                        <th>Amount</th>
                        <th>Month</th>
                        <th>Phone</th>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>

                </table>

            </div>
        </>
    )
}