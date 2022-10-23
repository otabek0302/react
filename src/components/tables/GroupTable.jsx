import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BiTime } from 'react-icons/bi'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { Link, useParams } from "react-router-dom"
import Endpoint from '../../api/Api';
import '../../css/table.css'
// import '../../css/rootCss.css'
import '../../css/toggleModal.css'
import '../../css/group.css'
import TeacherAddForm from '../forms/TeacherAddForm';
import AddGroup from '../forms/AddGroup';


export default function GroupTable() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'group/show/models', { headers: { "Authorization": `Bearer ${token}` } });
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
                    <Link to={`/group/${data.id}`} className='link'>

                        <div className="box" key={data.id}>
                            <div className='card1 border-radius' >
                                <div className='top1'>

                                    <div className='phone groupName'>
                                        {data.groupName}
                                    </div>
                                </div>
                                <div>
                                    <p className='caption1'>time</p>
                                    <p className='phone1'> <BiTime className='icon' />{data.lessonStartTime}~~~{data.lessonEndTime}</p>
                                </div>
                                <div className='bottom'>
                                    <div className='flex'>
                                        <div className='listDays'>
                                            {data.weekDays.map((data) => (
                                                <ul key={data.id} >
                                                    <li className='li'>{data.name}</li>
                                                </ul>
                                            ))}
                                        </div>
                                        <div className='price'>{data.price} so'm</div>
                                    </div>
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
                                <AddGroup />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
