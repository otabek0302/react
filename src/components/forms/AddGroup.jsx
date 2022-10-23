import React, { useState, useEffect } from 'react';
import Endpoint from '../../api/Api';
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import axios from 'axios';
import '../../css/form.css'

export default function AddGroup() {
    const [data, setData] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [room, setRoom] = useState([]);


    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDateTime] = useState('');
    const [lessonStartTime, setLessonStartTime] = useState('');
    const [lessonEndTime, setLessonEndTime] = useState();
    const [teacherId, setTeacherId] = useState('');
    const [roomId, setRoomId] = useState('');
    const [comment, setComment] = useState('');

    const [weekdaysid, setvalue] = useState([]);
    const handleOnchange = (val) => setvalue(val);
    const submitHandler = (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            price,
            duration,
            startDate,
            lessonStartTime,
            lessonEndTime,
            teacherId,
            weekDaysIdList: weekdaysid.split(","),
            roomId,
            comment
        }
        console.log(postData)
        axios.post(Endpoint + 'group/add', postData,
            { headers: { "Authorization": `Bearer ${token}` } })

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'users/get/teachers', { headers: { "Authorization": `Bearer ${token}` } });
                setTeacher(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);
    // room get request
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'room/get', { headers: { "Authorization": `Bearer ${token}` } });
                setRoom(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);
    // days get request
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userRole"));
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(Endpoint + 'weekday/get/days',
                    { headers: { "Authorization": `Bearer ${token}` } });
                setData(response);
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchData();
    }, []);
    return (
        <div>
            <form onSubmit={submitHandler} className='addForm center'>
                <h3 className='add welcome first'>Add new teacher</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='name' />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className='inputForm' placeholder='price' />
                <input type="text" onChange={(e) => setDuration(e.target.value)} className='inputForm' placeholder='duration' />
                <input type="date" onChange={(e) => setStartDateTime(e.target.value)} className='inputForm' />
                <input type="time" onChange={(e) => setLessonStartTime(e.target.value)} className='inputForm' />
                <input type="time" onChange={(e) => setLessonEndTime(e.target.value)} className='inputForm'/>

                    <MultiSelect
                        style={{
                            width: '250px',
                            backgroundColor: '#fff',
                            borderRadius: '15px',
                        }}
                        placeholder="Select weekdays"
                        className="multi-select selectmulti"
                        onChange={handleOnchange}
                        options={data}
                        required
                    />
                <select className='inputForm' onChange={(e) => setTeacherId(e.target.value)}>
                    <option >select teacher</option>
                    {teacher.map(teacher => <option key={teacher.id} value={teacher.id}>{teacher.fullName}</option>)}
                </select>
                <select className='inputForm' onChange={(e) => setRoomId(e.target.value)} required>
                    <option >select room</option>
                    {room.map(room => <option key={room.id} value={room.id}>{room.name}</option>)}
                </select>
                <input type="text" onChange={(e) => setComment(e.target.value)} className='inputForm comment' placeholder='comment ' />
                <button type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
            </form>
        </div>
    )
}
