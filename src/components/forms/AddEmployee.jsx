import React, { useState } from 'react';
import Endpoint from '../../api/Api';
import axios from 'axios';
import '../../css/form.css'

export default function AddEmployee() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');
    const [startDate, setStartdate] = useState('');
    const [payment, setPayment] = useState('');
    const [paymentStatic, setStaticpayment] = useState(false);
    const [phoneNumber, setNumber] = useState('');
    const [comment, setComment] = useState('');
    console.log(paymentStatic)
    const submitHandler = (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            lastname,
            role,
            startDate,
            payment,
            phoneNumber,
            comment,
            paymentStatic
        }
        console.log(postData)
        axios.post(Endpoint + 'auth/register/employee', postData,
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
            <form onSubmit={submitHandler} className='addForm center' style={{minHeight: '360px'}} >
                <h3 className='add welcome first'>Add new Employee</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='name' />
                <input type="text" onChange={(e) => setLastname(e.target.value)} className='inputForm' placeholder='lastname' />
                <input type="text" onChange={(e) => setRole(e.target.value)} className='inputForm' placeholder='role' />
                <input type="date" onChange={(e) => setStartdate(e.target.value)} className='inputForm' />
                <input type="number" onChange={(e) => setPayment(e.target.value)} className='inputForm' placeholder='payment'/>
                <input type="text" onChange={(e) => setNumber(e.target.value)} className='inputForm' placeholder='phone' />
                <input type="text" onChange={(e) => setComment(e.target.value)} className='inputForm comment' placeholder='comment ' style={{gridColumn: '1/3'}} />
                <button type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
            </form>
        </div>
    )
}
