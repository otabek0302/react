import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
// import '../css/rootCss.css'
import TeacherTable from '../../components/tables/TeacherTable'
import SuperSidebar from '../../components/SuperSidebar'
import ReportTable from './ReportTable'

export default function ReportsPage() {
    return (
        <>
            <SuperSidebar/>
            <div style={{marginLeft: '220px'}} className='title'>
                <h1 className='titleName'>Reports</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut'>
                        <FiLogOut/>
                    </div>
                </div>
            </div>
            <ReportTable/>
        </>
    )
}