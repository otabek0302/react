import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai'
import { useParams } from "react-router-dom"
import Endpoint from '../api/Api';
import '../css/banner.css'


export default function AdminBanner() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userRole"));
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(Endpoint + `users/show/admin/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
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
            <h3 className='adminName'>{data.name} {data.lastname}</h3>
          {/* <img className='imageUser' src="https://media.herworld.com/public/2019/03/image/lisa_rec.png?compress=true&quality=80&w=400&dpr=2.6" alt="" /> */}
          {/* <div className='userName' style={{marginTop: '100px'}}>
            <div>
              <p className='firstName'> {data.name}</p>
            </div>
            <div>
              <p className='firstName'> {data.lastname}</p>
            </div>
          </div> */}
        </div>


        <div className='singleDetail'>



          <div>
            <p className='caption'>job started</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.startDate}</p>
          </div>
          <div>
            <p className='caption'>payment</p>
            <p className='phone'> <AiOutlineUser className='icon' /> {data.paymentString}</p>
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
