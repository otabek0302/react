import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoutingAdmin from './ProtectedRoutingAdmin'
import SuperAdminProtectedRouting from './SuperAdminProtectedRouting'
import ProtectedRouteCashier from './ProtectedRouteCashier'

import Rooms from '../pages/Rooms'
import GroupPage from '../pages/GroupPage'
import StudentPage from '../pages/StudentPage'
import TeacherPage from '../pages/TeacherPage'
import SchedulePage from '../pages/SchedulePage'
import LoginPage from '../pages/LoginPage'
import SingleTeacher from '../pages/SingleTeacher'
import SingleGroup from '../pages/SingleGroup'
import SingleStudent from '../pages/SingleStudent'
import Dashboard from '../pages/SuperAdminPages/Dashboard'
import AdminsPage from '../pages/SuperAdminPages/AdminsPage'
import ReportsPage from '../pages/SuperAdminPages/ReportsPage'
import CashierPage from '../pages/SuperAdminPages/CashierPage'
import Employee from '../pages/SuperAdminPages/Employee'
import SingleAdmin from '../pages/SingleAdmin'
import TeacherС from '../pages/TeacherC'
import SingleCashier from '../pages/SingleCashier'
import TeacherC from '../pages/TeacherC'
import StudentC from '../pages/StudentC'
import AdminC from '../pages/AdminC'
import CashierC from '../pages/CashierC'
import EmployeesC from '../pages/EmployeeC'
import DeptorsC from '../pages/DeptorsC'
import Lid from '../pages/Lid'

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={<LoginPage />} />

                <Route path='/' exact element={<ProtectedRouteCashier />}>
                    <Route path='/teachers' element={<TeacherC />} />
                    <Route path='/students' element={<StudentC />} />
                    <Route path='/admins' element={<AdminC />} />
                    <Route path='/cashiers' element={<CashierC />} />
                    <Route path='/employees' element={<EmployeesC />} />
                    <Route path='/debtors' element={<DeptorsC />} />
                </Route>
                <Route path='/' exact element={<SuperAdminProtectedRouting />}>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/admin' element={<AdminsPage />} />
                    <Route path='/admin/:id' element={<SingleAdmin />} />
                    <Route path='/report' element={<ReportsPage />} />
                    <Route path='/cashier' element={<CashierPage />} />
                    <Route path='/cashier/:id' element={<SingleCashier />} />
                    <Route path='/employee' element={<Employee />} />
                </Route>
                <Route path='/' exact element={<ProtectedRoutingAdmin />}>
                    <Route path='/group' element={<GroupPage />} />
                    <Route path='/group/:id' element={<SingleGroup />} />
                    <Route path='/teacher' element={<TeacherPage />} />
                    <Route path='/teacher/:id' element={<SingleTeacher />} />
                    <Route path='/schedule' element={<SchedulePage />} />
                    <Route path='/student' element={<StudentPage />} />
                    <Route path='/student/:id' element={<SingleStudent />} />
                    <Route path='/room' element={<Rooms />} />
                    <Route path='/lid' element={<Lid />} />
                </Route>
            </Routes>
        </div>
    )
}
