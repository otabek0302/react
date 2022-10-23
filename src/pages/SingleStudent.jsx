import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Endpoint from '../api/Api';
import AdminSidebar from '../components/AdminSidebar';
import { FiLogOut } from 'react-icons/fi'
import jwt_decode from "jwt-decode";
import TeacherBanner from '../components/TeacherBanner';
import '../css/banner.css'
import { useParams } from "react-router-dom"
import StudentBanner from '../components/StudentBanner';


export default function SingleStudent() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    console.log(data)
    const users = JSON.parse(localStorage.getItem("userRole"));
    const atts = jwt_decode(users);
    const atributs = atts;
    const roleName = atributs
    // console.log(roleName.roles)
    const userrole = roleName.fullName

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + `users/show/student/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
                setData(response);
                console.log(response)
            } catch (error) {
                console.error(error.message);
            }

        }

        fetchData();
    }, []);

    return (
        <div>
            <AdminSidebar />
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
                <StudentBanner />
                    {/* <div className='groupBox'>
                    {data.map((data)=>(
                        <div className="box" key={data.id}> 
                        <div className='card1 border-radius' >
                            <div className='top1'>

                                    <div className='phone groupName'>
                                        {data.groupName}
                                    </div>

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
                    ))}
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    )
}
