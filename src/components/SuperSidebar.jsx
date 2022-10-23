import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/sidebar.css'
import '../css/rootCss.css'

import { TbReportMoney } from 'react-icons/tb'
import { IoMdCash } from 'react-icons/io'
import { HiAcademicCap } from 'react-icons/hi'
import { MdGroups, MdOutlineAdminPanelSettings } from 'react-icons/md'
import { AiFillDashboard } from 'react-icons/ai'

export default function SuperSidebar() {
    return (
        <div className='sideBar'>
            <h1 className='logo'>LOGO</h1>
            <div className="linkContainer">
                <NavLink className='navLink border-radius' to={'/dashboard'}> <AiFillDashboard className='linkIcon'/>Dashboard</NavLink>
                <NavLink className='navLink border-radius' to={'/report'}> <TbReportMoney className='linkIcon'/>Reports</NavLink>
                <NavLink className='navLink border-radius' to={'/admin'}> <MdOutlineAdminPanelSettings className='linkIcon'/> Admins</NavLink>
                <NavLink className='navLink border-radius' to={'/cashier'}> <IoMdCash className='linkIcon'/> Cashiers</NavLink>
                <NavLink className='navLink border-radius' to={'/employee'}> <MdGroups className='linkIcon'/> Employee</NavLink>
            </div>
        </div>
    )
}
