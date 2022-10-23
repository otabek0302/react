import React, { useState } from 'react';
import Endpoint from '../../api/Api';
import axios from 'axios';
import '../../css/form.css'

export default function TeacherAddForm() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [startDate, setStartdate] = useState('');
    const [payment, setPayment] = useState('');
    const [paymentStatic, setStaticpayment] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const [text, setText] = useState("");
    console.log(paymentStatic)
    const submitHandler = (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            lastname,
            subjectName,
            startDate,
            payment,
            paymentStatic,
            phoneNumber,
            login,
            password,
            comment
        }
        console.log(postData)
        axios.post(Endpoint + 'auth/register/teacher', postData,
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
            <form onSubmit={submitHandler} className='addForm center'>
                <h3 className='add welcome first'>Add new teacher</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='name' />
                <input type="text" onChange={(e) => setLastname(e.target.value)} className='inputForm' placeholder='lastname' />
                <input type="text" onChange={(e) => setSubjectName(e.target.value)} className='inputForm' placeholder='subject' />
                <input type="date" onChange={(e) => setStartdate(e.target.value)} className='inputForm' />
                <div className='paymentBox'>
                    <input
                        className='inputForm'
                        name="input"
                        type="text"
                        disabled={!paymentStatic}
                        // value={text}
                        onChange={e => setPayment(e.target.value)}
                    />
                    <div className='check'>
                        <input
                            className='check'
                            name="checkbox"
                            type="checkbox"
                            checked={paymentStatic}
                            onChange={() => {
                                if (paymentStatic) {
                                    setText('')
                                }
                                setStaticpayment(!paymentStatic)
                            }
                            }
                        />
                    <p>%</p>
                    </div>
                    <input
                        className='inputForm'
                        name="input"
                        type="text"
                        disabled={paymentStatic}

                        // value={text}
                        onChange={e => setPayment(e.target.value)}
                    />
                </div>

                <input type="text" onChange={(e) => setNumber(e.target.value)} className='inputForm' placeholder='phone' />
                <input type="text" onChange={(e) => setLogin(e.target.value)} className='inputForm' placeholder='login' />
                <input type="text" onChange={(e) => setPassword(e.target.value)} className='inputForm' placeholder='password' />
                <input type="text" onChange={(e) => setComment(e.target.value)} className='inputForm comment' placeholder='comment ' />
                <button type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
            </form>
        </div>
    )
}
