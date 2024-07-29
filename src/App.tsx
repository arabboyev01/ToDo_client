import { Routes, Route } from "react-router-dom"
import Login from "./components/User/Login"
import SignUp from "./components/User/SignUp"
import TasksList from "./components/Tasks/TasksList/TaksList"
import TaskNew from "./components/Tasks/TaskNew/TaskNew"
import AuthComponent from "./lib/authComponent"
import AdminLayout from "./admin/AdminLayout/AdminLayout"
import EditableTable from "./admin/Table/EditiableTable"
import UsersList from "./admin/Users/UsersList"
import Analytics from "./admin/Analytics/Analytics"

function App() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />

      {/* Tasks routes  */}
      <Route path="/" element={<AuthComponent role="user"> <TasksList /></AuthComponent>} />
      <Route path="/tasks/new" element={<AuthComponent role="user"><TaskNew /> </AuthComponent>} />
      
      {/* Admin routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Analytics />} />
        <Route path="users" element={<UsersList />} />
        <Route path="tasks" element={<EditableTable />} />
      </Route>
    </Routes>
  )
}
export default App
