import { Routes, Route } from "react-router-dom"
import Login from "./components/User/Login"
import SignUp from "./components/User/SignUp"
import TasksList from "./components/Tasks/TasksList/TaksList"
import TaskNew from "./components/Tasks/TaskNew/TaskNew"
import AuthComponent from "./lib/authComponent"

function App() {
  return(
    <Routes>
      <Route path="/" element={
        <AuthComponent>
          <TasksList />
        </AuthComponent>
        } />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/tasks/new" element={<TaskNew />} />
    </Routes>
  )
}
export default App
