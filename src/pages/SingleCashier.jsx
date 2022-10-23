import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Endpoint from '../api/Api';
import AdminSidebar from '../components/AdminSidebar';
import { FiLogOut } from 'react-icons/fi'
import jwt_decode from "jwt-decode";
import TeacherBanner from '../components/TeacherBanner';
import '../css/banner.css'
import { useParams,Link } from "react-router-dom"
import CashierBanner from '../components/CashierBanner';
import SuperSidebar from '../components/SuperSidebar';


export default function SingleCashier() {
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
                <CashierBanner />

                {/* <div className='teacherGroups'> */}
                <div className='groupBox'>
                    {data.map((data) => (
                        <Link to={`/group/${data.id}`} className='link'>
                            <div className="box" key={data.id}>
                                <div className='card1 border-radius' >
                                    <div className='top1'>

                                        <div className='phone groupName'>
                                            {data.groupName}
                                        </div>

                                        {/* <div className='info'>
                                    <p className='name'></p>
                                    <p className='subject'>{data.subjectName}</p>
                                </div> */}
                                    </div>
                                    <div className='bottom'>
                                        <p className='caption1'>time</p>
                                        <p className='phone1'> {data.lessonStartTime}~~~{data.lessonEndTime}</p>
                                        <div className='flex'>
                                            <div className='listDays'>
                                                {data.weekDays.map((data) => (
                                                    <ul key={data.id} >
                                                        <li className='li'>{data.name}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                            <div className='price'>{data.price}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
