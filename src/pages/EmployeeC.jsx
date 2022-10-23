import React, { useState } from 'react'
import '../css/report.css'
import '../css/calendar.css'
import '../css/toggleModal.css'
import Calendar from 'react-calendar';
import AdminSidebar from '../components/AdminSidebar'
import { FiLogOut } from 'react-icons/fi'
// import '../css/rootCss.css'
import TeacherTable from '../components/tables/TeacherTable'
import CashierSidebar from '../components/CashierSideBar'

export default function EmployeesC() {
    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);
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
    const toggleModal1 = () => {
        setModal1(!modal1);
    };

    if (modal1) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    function calendar(e) {
        e.preventDefault()
    }
    return (
        <>
            <CashierSidebar />
            <div style={{ marginLeft: '220px' }} className='title'>
                <h1 className='titleName'>Employees</h1>
                <div className='titleUser'>
                    <p>Alixon Hasanxonov</p>
                    <div className='logOut'>
                        <FiLogOut />
                    </div>
                </div>
            </div>
            <div style={{ marginLeft: '240px' }} className='buttonContainer'>
                <p className='calendarButton' onClick={toggleModal}>Calendar</p>
                <div onClick={toggleModal1}>
                    <h4 className='addButton margin'>+</h4>
                </div>
            </div>
            <div>
                <input type="search"  className='search' style={{ marginLeft: '240px' }} placeholder='search'/>
            </div>
            <div className='tableHeader' style={{ marginLeft: '220px' }}>
                <table>
                    <tr className='tableTitle'>
                        <th>No</th>
                        <th>Employee</th>
                        <th>Job tart date</th>
                        <th>Payment</th>
                        <th>Account</th>
                        <th>Phone</th>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                    <tr className='tableTitle'>
                        <td>1</td>
                        <td>Xusan Xukumov</td>
                        <td>21/2/2020</td>
                        <td>2000000</td>
                        <td>0</td>
                        <td>+998979964545</td>
                    </tr>
                
                </table>

            </div>
            {modal && (
                <div>
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <Calendar
                                onChange={onChange}
                                value={value}
                                maxDetail='year'
                                locale='en'
                            />
                            <div className='containerBox'>
                                <div className='calendarButton yellow' onClick={toggleModal} onSubmit={calendar}>
                                    <p>Search</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {modal1 && (
                <div>
                    <div className="modal">
                        <div onClick={toggleModal1} className="overlay"></div>
                        <div className="modal-content">
                            <form className='addForm center' style={{ minHeight: '200px' }}>
                                <h3 className='add welcome first'>Give a payment for Employee</h3>
                                <input type="text" className='inputForm ' placeholder='Select Teacher' />
                                <input type="text" className='inputForm' placeholder='Amount' />
                                <input type="date" className='inputForm '  />
                                <input type="text" className='inputForm' placeholder='Comment' />
                                <button style={{ gridColumn: '1/3' }} type='submit' className='btn-form-primary border-radius btn-submit'>save</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}