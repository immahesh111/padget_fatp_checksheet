import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBasedRoutes from './utils/RoleBasedRoutes';
import AdminSummary from './components/dashboard/AdminSummary';
import DepartmentList from './components/department/DepartmentList';
import AddDepartment from './components/department/AddDepartment';
import EditDepartment from './components/department/EditDepartment';
import List from './components/employee/List';
import Add from './components/employee/Add';
import View from './components/employee/View';
import Edit from './components/employee/Edit';
import Summary from './components/EmployeeDashboard/Summary'

import LeaveList from './components/leave/List'
import FAList from './components/leave/List2'
import LeaveList3 from './components/leave/List3'
import LeaveList4 from './components/leave/List4'
import LeaveList5 from './components/leave/List5'
import LeaveList6 from './components/leave/List6'
import LeaveList7 from './components/leave/List7'
import LeaveList8 from './components/leave/List8'
import LeaveList9 from './components/leave/List9'
import LeaveList10 from './components/leave/List10'
import LeaveList11 from './components/leave/List11'
import LeaveList12 from './components/leave/List12'

import AddLeave from './components/leave/Add'
import AddLeave2 from './components/leave/Add2'
import AddLeave3 from './components/leave/Add3'
import AddLeave4 from './components/leave/Add4'
import AddLeave5 from './components/leave/Add5'
import AddLeave6 from './components/leave/Add6'
import AddLeave7 from './components/leave/Add7'
import AddLeave8 from './components/leave/Add8'
import AddLeave9 from './components/leave/Add9'
import AddLeave10 from './components/leave/Add10'
import AddLeave11 from './components/leave/Add11'
import AddLeave12 from './components/leave/Add12'

import Setting from './components/EmployeeDashboard/Setting';

import Table from './components/leave/Table';
import Table1 from './components/leave/Table1'
import Table2 from './components/leave/Table2'
import Table3 from './components/leave/Table3'
import Table4 from './components/leave/Table4'
import Table5 from './components/leave/Table5'
import Table6 from './components/leave/Table6'
import Table7 from './components/leave/Table7'
import Table8 from './components/leave/Table8'
import Table9 from './components/leave/Table9'
import Table10 from './components/leave/Table10'
import Table11 from './components/leave/Table11'

import Detail from './components/leave/Detail';
import Detail1 from './components/leave/Detail1';
import Detail2 from './components/leave/Detail2';
import Detail3 from './components/leave/Detail3';
import Detail4 from './components/leave/Detail4';
import Detail5 from './components/leave/Detail5';
import Detail6 from './components/leave/Detail6';
import Detail7 from './components/leave/Detail7';
import Detail8 from './components/leave/Detail8';
import Detail9 from './components/leave/Detail9';
import Detail10 from './components/leave/Detail10';
import Detail11 from './components/leave/Detail11';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin"]}>
              <AdminDashboard />
            </RoleBasedRoutes>

          </PrivateRoutes>

        }>
          <Route index element={<AdminSummary />}></Route>

          <Route path="/admin-dashboard/departments" element={<DepartmentList />}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment />}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment />}></Route>

          <Route path="/admin-dashboard/employees" element={<List />}></Route>
          <Route path="/admin-dashboard/add-employee" element={<Add />}></Route>
          <Route path="/admin-dashboard/employees/:id" element={<View />}></Route>
          <Route path="/admin-dashboard/employees/edit/:id" element={<Edit />}></Route>

          <Route path="/admin-dashboard/leaves" element={<Table />}></Route>
          <Route path="/admin-dashboard/leaves1" element={<Table1 />}></Route>
          <Route path="/admin-dashboard/leaves2" element={<Table2 />}></Route>
          <Route path="/admin-dashboard/leaves3" element={<Table3 />}></Route>
          <Route path="/admin-dashboard/leaves4" element={<Table4 />}></Route>
          <Route path="/admin-dashboard/leaves5" element={<Table5 />}></Route>
          <Route path="/admin-dashboard/leaves6" element={<Table6 />}></Route>
          <Route path="/admin-dashboard/leaves7" element={<Table7 />}></Route>
          <Route path="/admin-dashboard/leaves8" element={<Table8 />}></Route>
          <Route path="/admin-dashboard/leaves9" element={<Table9 />}></Route>
          <Route path="/admin-dashboard/leaves10" element={<Table10 />}></Route>
          <Route path="/admin-dashboard/leaves11" element={<Table11 />}></Route>

          <Route path="/admin-dashboard/leaves/:id" element={<Detail />}></Route>
          <Route path="/admin-dashboard/leaves1/:id" element={<Detail1 />}></Route>
          <Route path="/admin-dashboard/leaves2/:id" element={<Detail2 />}></Route>
          <Route path="/admin-dashboard/leaves3/:id" element={<Detail3 />}></Route>
          <Route path="/admin-dashboard/leaves4/:id" element={<Detail4 />}></Route>
          <Route path="/admin-dashboard/leaves5/:id" element={<Detail5 />}></Route>
          <Route path="/admin-dashboard/leaves6/:id" element={<Detail6 />}></Route>
          <Route path="/admin-dashboard/leaves7/:id" element={<Detail7 />}></Route>
          <Route path="/admin-dashboard/leaves8/:id" element={<Detail8 />}></Route>
          <Route path="/admin-dashboard/leaves9/:id" element={<Detail9 />}></Route>
          <Route path="/admin-dashboard/leaves10/:id" element={<Detail10 />}></Route>
          <Route path="/admin-dashboard/leaves11/:id" element={<Detail11 />}></Route>


          <Route path="/admin-dashboard/employees/leaves/:id" element={<LeaveList />}></Route>
          <Route path="/admin-dashboard/employees/leaves1/:id" element={<FAList />}></Route>
          <Route path="/admin-dashboard/employees/leaves2/:id" element={<LeaveList3 />}></Route>
          <Route path="/admin-dashboard/employees/leaves3/:id" element={<LeaveList4 />}></Route>
          <Route path="/admin-dashboard/employees/leaves4/:id" element={<LeaveList5 />}></Route>
          <Route path="/admin-dashboard/employees/leaves5/:id" element={<LeaveList6 />}></Route>
          <Route path="/admin-dashboard/employees/leaves6/:id" element={<LeaveList7 />}></Route>
          <Route path="/admin-dashboard/employees/leaves7/:id" element={<LeaveList8 />}></Route>
          <Route path="/admin-dashboard/employees/leaves8/:id" element={<LeaveList9 />}></Route>
          <Route path="/admin-dashboard/employees/leaves9/:id" element={<LeaveList10 />}></Route>
          <Route path="/admin-dashboard/employees/leaves10/:id" element={<LeaveList11 />}></Route>
          <Route path="/admin-dashboard/employees/leaves11/:id" element={<LeaveList12 />}></Route>

          <Route path="/admin-dashboard/setting" element={<Setting />}></Route>
        </Route>
        <Route path="/employee-dashboard" element={<EmployeeDashboard />}>
          <Route index element={<Summary />}></Route>
          <Route path='/employee-dashboard/profile/:id' element={<View />}></Route>
          <Route path='/employee-dashboard/leaves/:id' element={<LeaveList />}></Route>
          <Route path='/employee-dashboard/leaves1/:id' element={<FAList/>}></Route>
          <Route path='/employee-dashboard/leaves2/:id' element={<LeaveList3/>}></Route>
          <Route path='/employee-dashboard/leaves3/:id' element={<LeaveList4/>}></Route>
          <Route path='/employee-dashboard/leaves4/:id' element={<LeaveList5/>}></Route>
          <Route path='/employee-dashboard/leaves5/:id' element={<LeaveList6/>}></Route>
          <Route path='/employee-dashboard/leaves6/:id' element={<LeaveList7/>}></Route>
          <Route path='/employee-dashboard/leaves7/:id' element={<LeaveList8/>}></Route>
          <Route path='/employee-dashboard/leaves8/:id' element={<LeaveList9/>}></Route>
          <Route path='/employee-dashboard/leaves9/:id' element={<LeaveList10/>}></Route>
          <Route path='/employee-dashboard/leaves10/:id' element={<LeaveList11/>}></Route>
          <Route path='/employee-dashboard/leaves11/:id' element={<LeaveList12/>}></Route>

          <Route path='/employee-dashboard/add-leave' element={<AddLeave />}></Route>
          <Route path='/employee-dashboard/add-leave2' element={<AddLeave2 />}></Route>
          <Route path='/employee-dashboard/add-leave3' element={<AddLeave3 />}></Route>
          <Route path='/employee-dashboard/add-leave4' element={<AddLeave4 />}></Route>
          <Route path='/employee-dashboard/add-leave5' element={<AddLeave5 />}></Route>
          <Route path='/employee-dashboard/add-leave6' element={<AddLeave6 />}></Route>
          <Route path='/employee-dashboard/add-leave7' element={<AddLeave7 />}></Route>
          <Route path='/employee-dashboard/add-leave8' element={<AddLeave8 />}></Route>
          <Route path='/employee-dashboard/add-leave9' element={<AddLeave9 />}></Route>
          <Route path='/employee-dashboard/add-leave10' element={<AddLeave10 />}></Route>
          <Route path='/employee-dashboard/add-leave11' element={<AddLeave11 />}></Route>
          <Route path='/employee-dashboard/add-leave12' element={<AddLeave12 />}></Route>

          <Route path='/employee-dashboard/setting' element={<Setting />}></Route>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
