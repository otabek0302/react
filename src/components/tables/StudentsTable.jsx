import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsPhone } from 'react-icons/bs'
import { AiOutlineUserAdd,AiOutlineUser } from 'react-icons/ai'
import { Link, useParams } from "react-router-dom"
import Endpoint from '../../api/Api';
import '../../css/table.css'
// import '../../css/rootCss.css'
import '../../css/toggleModal.css'
import TeacherAddForm from '../forms/TeacherAddForm';
import AddStudent from '../forms/AddStudent';


export default function StudentsTable() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'users/show/students', { headers: { "Authorization": `Bearer ${token}` } });
                setData(response);
                console.log(response)
            } catch (error) {
                console.error(error.message);
            }

        }

        fetchData();
    }, []);


    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    return (
        <div className='table'>
            <div className='search-bar-button'>
                <input type="search" placeholder='search' className='search' onChange={event => setQuery(event.target.value)} />
                <div className='addButton' onClick={toggleModal}><AiOutlineUserAdd /></div>
            </div>
            <div className="boxes ">
                {data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                    else if (post.lastname.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((data) => (
                    <Link to={`/student/${data.id}`} className='link'>

                        <div className="box" key={data.id}>

                            <div className='card border-radius' >
                                <div className='top'>
                                    <div className='user'>
                                        <img className='userImageCard border-radius' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                                        {/* <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" alt="" /> */}
                                    </div>
                                    <div className='info'>
                                        <p className='name'>{data.name} {data.lastname}</p>
                                        <p className='subject'>{data.subjectName}</p>
                                    </div>
                                </div>
                                <div className='bottom'>
                                    <p className='caption'>phone</p>
                                    <p className='phone'> <BsPhone className='icon' /> {data.phoneNumber}</p>
                                    <p className='caption'>username</p>
                                    <p className='phone'> <AiOutlineUser className='icon' /> {data.login}</p>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
                {modal && (
                    <div>
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <AddStudent/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
