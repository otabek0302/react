import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/sidebar.css'
import '../css/rootCss.css'

import { TbReportMoney } from 'react-icons/tb'
import { IoMdCash } from 'react-icons/io'
import { GiTeacher } from 'react-icons/gi'
import { MdGroups, MdOutlineAdminPanelSettings } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'

export default function CashierSidebar() {
    return (
        <div className='sideBar'>
            <h1 className='logo'>LOGO</h1>
            <div className="linkContainer">
                <NavLink className='navLink border-radius' to={'/teachers'}> <GiTeacher className='linkIcon'/>Teachers</NavLink>
                <NavLink className='navLink border-radius' to={'/students'}> <HiAcademicCap className='linkIcon'/>Students</NavLink>
                <NavLink className='navLink border-radius' to={'/admins'}> <MdOutlineAdminPanelSettings className='linkIcon'/> Admins</NavLink>
                <NavLink className='navLink border-radius' to={'/cashiers'}> <IoMdCash className='linkIcon'/> Cashiers</NavLink>
                <NavLink className='navLink border-radius' to={'/employees'}> <MdGroups className='linkIcon'/> Employee</NavLink>
                <NavLink className='navLink border-radius' to={'/debtors'}> <MdGroups className='linkIcon'/> Debtors</NavLink>
            </div>
        </div>
    )
}
