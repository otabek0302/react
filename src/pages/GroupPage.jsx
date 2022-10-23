import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
import '../css/rootCss.css'
import TeacherTable from '../components/tables/TeacherTable'
import GroupTable from '../components/tables/GroupTable'

export default function GroupPage() {
    return (
        <>
            <AdminSidebar/>
            <div style={{marginLeft: '220px'}} className='title'>
                <h1 className='titleName'>Groups</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut'>
                        <FiLogOut/>
                    </div>
                </div>
            </div>
            <GroupTable/>
        </>
    )
}