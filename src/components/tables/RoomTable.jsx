import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsPhone } from 'react-icons/bs'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { Link, useParams } from "react-router-dom"
import Endpoint from '../../api/Api';
import '../../css/table.css'
import '../../css/room.css'
// import '../../css/rootCss.css'
import '../../css/toggleModal.css'
import TeacherAddForm from '../forms/TeacherAddForm';
import RoomAdd from '../forms/RoomAdd';


export default function RoomTable() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")
    const [modal, setModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const [message, setMessage] = useState();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'room/get', { headers: { "Authorization": `Bearer ${token}` } });
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
    const toggleModalEdit = () => {
        setModalEdit(!modalEdit);
    };

    if (modalEdit) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    // delete
    const deleteRequestHandler = async (id) => {
        const token = JSON.parse(localStorage.getItem("user"));
        const response = await axios.delete(
            Endpoint + `room/delete/${id}`
            , { headers: { "Authorization": `Bearer ${token}` } }
        );

        if (response.data.id) {
            setMessage(response.data.id);
        }
        window.location.reload(false);
    };
    // edit
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');


    const editHandler = (e, id) => {
        // e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            comment
        }
        console.log(postData)
        axios.put(Endpoint + `room/update/${id}`, postData,
            { headers: { "Authorization": `Bearer ${token}` } })

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
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
                    <div className="room" key={data.id}>
                        <p className='caption'>name</p>
                        <p className='phone'>{data.name}</p>
                        <p className='caption'>comment</p>
                        <p className='phone'>{data.comment}</p>
                        <div className='flex buttons' style={{ justifyContent: 'space-evenly' }}>
                            <p onClick={toggleModalEdit} >edit</p>
                            {modalEdit && (
                                <div>
                                    <div className="modal">
                                        <div onClick={toggleModalEdit} className="overlay"></div>
                                        <div className="modal-content">
                                            <form  className='addForm center' style={{ minHeight: '200px' }}>
                                                <h3 className='add welcome first'>Edit</h3>
                                                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='Name' />
                                                <input type="text" onChange={(e) => setComment(e.target.value)} className='inputForm' placeholder='Comment' />
                                                <button
                                                    style={{ gridColumn: '1/3' }}
                                                    type='submit'
                                                    className='btn-form-primary border-radius btn-submit'
                                                    onClick={editHandler(data.id)}
                                                >
                                                    edit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <p onClick={() => deleteRequestHandler(data.id)}>
                                delete
                            </p>
                        </div>
                    </div>
                ))}
                {modal && (
                    <div>
                        <div className="modal">
                            <div onClick={toggleModal} className="overlay"></div>
                            <div className="modal-content">
                                <RoomAdd />
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}
