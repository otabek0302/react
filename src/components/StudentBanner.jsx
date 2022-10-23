import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { useParams } from "react-router-dom"
import Endpoint from '../api/Api';
import '../css/banner.css'


export default function StudentBanner() {
  const { id } = useParams();
  const [data, setData] = useState([]);

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
    <div className='banner'>
      <div className="imageBanner">
        <div className='imageTitle'>

          <img className='imageUser' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
          <div className='userName'>
            <div>
              <p className='firstName'> {data.name}</p>
            </div>
            <div>
              <p className='firstName'> {data.lastname}</p>
            </div>
          </div>
        </div>


        <div className='singleDetail'>



          <div>
            <p className='caption'>Groups</p>
            <p className='phone'> <AiOutlineUser className='icon' /> English,    Math</p>
          </div>
          <div>
            <p className='caption'>account</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.account}</p>
          </div>
          <div>
            <p className='caption'>phone</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.phoneNumber}</p>
          </div>
          <div>
            <p className='caption'>login</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.login}</p>
          </div>
          <div>
            <p className='caption'>password</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.password}</p>
          </div>
          <div>
            <p className='caption'>comment</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.comment}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
