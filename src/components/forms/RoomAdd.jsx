import React, { useState,useEffect } from 'react';
import Endpoint from '../../api/Api';
import axios from 'axios';
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import '../../css/form.css'


export default function RoomAdd() {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');


    const submitHandler = (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            comment
        }
        console.log(postData)
        axios.post(Endpoint + 'room/add', postData,
            { headers: { "Authorization": `Bearer ${token}` } })

            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <form onSubmit={submitHandler} className='addForm center' style={{minHeight: '200px' }}>
                <h3 className='add welcome first'>Add new Student</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='Name' />
                <input type="text" onChange={(e) => setComment(e.target.value)} className='inputForm' placeholder='Comment' />
                <button style={{gridColumn: '1/3'}} type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
            </form>
        </div>
    )
}
