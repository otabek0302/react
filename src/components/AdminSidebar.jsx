import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/sidebar.css'
import '../css/rootCss.css'

import { BsFillCalendar2RangeFill } from 'react-icons/bs'
import { GiTeacher } from 'react-icons/gi'
import { HiAcademicCap } from 'react-icons/hi'
import { MdGroups } from 'react-icons/md'
import { MdMeetingRoom } from 'react-icons/md'
import { AiOutlineBell } from 'react-icons/ai'

export default function AdminSidebar() {
    return (
        <div className='sideBar'>
            <h1 className='logo'>LOGO</h1>
            <div className="linkContainer">
                <NavLink className='navLink border-radius' to={'/schedule'}> <BsFillCalendar2RangeFill className='linkIcon'/> Schedule</NavLink>
                <NavLink className='navLink border-radius' to={'/lid'}> <AiOutlineBell className='linkIcon'/> Lids</NavLink>
                <NavLink className='navLink border-radius' to={'/teacher'}> <GiTeacher className='linkIcon'/> Teacher</NavLink>
                <NavLink className='navLink border-radius' to={'/student'}> <HiAcademicCap className='linkIcon'/> Student</NavLink>
                <NavLink className='navLink border-radius' to={'/group'}> <MdGroups className='linkIcon'/> Group</NavLink>
                <NavLink className='navLink border-radius' to={'/room'}> <MdMeetingRoom className='linkIcon'/> Room</NavLink>
            </div>
        </div>
    )
}
