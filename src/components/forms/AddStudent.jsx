import React, { useState,useEffect } from 'react';
import Endpoint from '../../api/Api';
import axios from 'axios';
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import '../../css/form.css'


export default function AddStudent() {
    const [groupIdList, setGroupId] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setNumber] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [comment, setComment] = useState('');
    const [paymentStatic, setStaticpayment] = useState(false);


    const handleOnchange = (val) => setGroupId(val);
    const [data, setData] = useState([]);
    const submitHandler = (e) => {
        e.preventDefault()
        const token = JSON.parse(localStorage.getItem("userRole"));
        const postData = {
            name,
            lastname,
            phoneNumber,
            groupIdList: groupIdList.split(","), 
            login,
            password,
            comment,
            paymentStatic
        }
        console.log(postData)
        axios.post(Endpoint + 'auth/register/student', postData,
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
                const { data: response } = await axios.get(Endpoint + 'group/get', { headers: { "Authorization": `Bearer ${token}` } });
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
                <h3 className='add welcome first'>Add new Student</h3>
                <input type="text" onChange={(e) => setName(e.target.value)} className='inputForm ' placeholder='name' />
                <input type="text" onChange={(e) => setLastname(e.target.value)} className='inputForm' placeholder='lastname' />
                <input type="number" onChange={(e) => setNumber(e.target.value)} className='inputForm' placeholder='Phone number' />
                <MultiSelect
                style={{
                    width: '250px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                }}
                placeholder="Select group(s)"
                    className="multi-select"
                    onChange={handleOnchange}
                    options={data}

                />
                <input type="text" onChange={(e) => setLogin(e.target.value)} className='inputForm' placeholder='login' />
                <input type="text" onChange={(e) => setPassword(e.target.value)} className='inputForm' placeholder='password' />
                <input style={{gridColumn: '1/3'}} type="text" onChange={(e) => setComment(e.target.value)} className='inputForm comment' placeholder='comment ' />
                <button style={{gridColumn: '1/3'}} type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
            </form>
        </div>
    )
}
