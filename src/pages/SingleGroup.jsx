import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Endpoint from '../api/Api';
import AdminSidebar from '../components/AdminSidebar';
import { FiLogOut } from 'react-icons/fi'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import jwt_decode from "jwt-decode";
import { Link, useParams } from "react-router-dom"

import '../css/singleGroup.css'


export default function SingleGroup() {
    const [data, setData] = useState([]);
    const [student, setStudent] = useState([]);
    // const [student, setStudent] = useState([]);
    const { id } = useParams();
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
                const { data: response } = await axios.get(Endpoint + `group/show/model/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
                setData(response);
                console.log(response)
            } catch (error) {
                console.error(error.message);
            }

        }

        fetchData();
    }, []);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + `group/show/students/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
                setStudent(response);
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
            <div className='flexItems' >
                <div className="singleGroup">
                    <div className='groupName'>
                        <h3 >{data.groupName}</h3>
                    </div>
                    <div className='groupGrid'>
                        <h3>Teacher:</h3>
                        <div>{data.teacherFullName}</div>
                        <h3>Started date:</h3>
                        <div>{data.startDate}</div>
                        <h3>Time:</h3>
                        <div className='time'>
                            <div>{data.lessonEndTime}  ~</div>
                            <p>~</p>
                            <div>~  {data.lessonStartTime}</div>
                        </div>
                        <h3>Duration:</h3>
                        <div>{data.duration} month</div>
                        <h3>Price:</h3>
                        <div>{data.price} so'm</div>
                        <h3>Room:</h3>
                        <div>{data.roomName}</div>
                    </div>
                </div>
                <div className='groupStudents'>
                    <h3 style={{gridColumn: '1/5', color: '#363B64', marginLeft: '10px'}}>Th number of Students: {student.length}</h3>
                    {student.map((student) => (
                        <Link to={`/student/${student.id}`} className='link'>
                            <div className='student'>
                                <p>
                                    {student.name} {student.lastname}
                                </p>
                                <BsFillArrowRightCircleFill className='icon' />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
