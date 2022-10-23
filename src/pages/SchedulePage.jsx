import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
import '../css/rootCss.css'
import TeacherTable from '../components/tables/TeacherTable'
import Schedule from '../components/Schedule'

export default function SchedulePage() {
    return (
        <>
            <AdminSidebar/>
            <div style={{marginLeft: '220px'}} className='title'>
                <h1 className='titleName'>Schedule</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut'>
                        <FiLogOut/>
                    </div>
                </div>
            </div>
            <Schedule/>
        </>
    )
}