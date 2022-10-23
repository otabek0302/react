import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
import { BsCalendar2WeekFill } from 'react-icons/bs'
import '../../css/dashboard.css'
import TeacherTable from '../../components/tables/TeacherTable'
import SuperSidebar from '../../components/SuperSidebar'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../css/toggleModal.css'
import styled from 'styled-components';

export default function Dashboard() {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const [value, onChange] = useState();
    console.log(value)

    function calendar(e) {
        e.preventDefault()
    }
    return (
        <>
            <SuperSidebar />
            <div style={{ marginLeft: '220px' }} className='title'>
                <h1 className='titleName'>Dashboard</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut'>
                        <FiLogOut />
                    </div>
                </div>
            </div>
            <div className='dashboardDetailes'>
                <div className='dashboardBox'>
                    <h3>Teachers</h3>
                    <h1>23</h1>
                </div>
                <div className='dashboardBox'>
                    <h3>Groups</h3>
                    <h1>60</h1>
                </div>
                <div className='dashboardBox'>
                    <h3>Rooms</h3>
                    <h1>30</h1>
                </div>
                <div className='dashboardBox'>
                    <h3>Students</h3>
                    <h1>670</h1>
                </div>
                <div className='calendarButton calendarDashboard' onClick={toggleModal}>
                    <BsCalendar2WeekFill />
                    <p className='date'>September</p>
                </div>
                <div className='dashboardBox'>
                    <h3>Expenditure</h3>
                    <h1>45000000</h1>
                </div>
                <div className='dashboardBox'>
                    <h3>Income</h3>
                    <h1>70000000</h1>
                </div>
                <div className='dashboardBox'>
                    <h3>Profit</h3>
                    <h1>99000000</h1>
                </div>
            </div>
            {modal && (
                <div>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <Container>

                                <Calendar
                                    onChange={onChange}
                                    value={value}
                                    maxDetail='year'
                                    locale='en'
                                />
                            </Container>
                            <div className='containerBox'>
                                <div className='calendarButton yellow' onClick={toggleModal} onSubmit={calendar}>
                                    <p>Search</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


const Container = styled.div`
    .react-calendar {
        z-index: 1;
    margin: 20px auto;
  width: 81.4vw;
  max-width: 100%;
  background: white;
  /* border: 1px solid #a0a096; */
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  border-radius: 20px;
}
.react-calendar--doubleView {
  width: 700px;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
}
.react-calendar__navigation button {
  min-width: 44px;
  background: none;
}
.react-calendar__navigation button:disabled {
  background-color: #f0f0f0;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
}
.react-calendar__month-view__days__day--weekend {
  color: #d10000;
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}
.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  text-align: center;
  line-height: 16px;
  border: none;
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
  
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
  border-radius: 20px;
}
.react-calendar__tile--now {
  background: #A098AE;
  border-radius: 20px;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #A098AE;
  border-radius: 20px;
}
.react-calendar__tile--hasActive {
  background: #363B64;
  color: #fff;
  border-radius: 20px;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #363B64;
  border-radius: 20px;
}
.react-calendar__tile--active {
  background: #363B64;
  color: #A098AE;
  border-radius: 20px;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #363B64;
  color: #A098AE;

}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;

}


`