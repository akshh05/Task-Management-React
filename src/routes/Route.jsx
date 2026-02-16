import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Tasks from "../pages/Tasks"
import NavBar from "../components/NavBar"
import TaskDetails from "../pages/TaskDetails"
import { GlobalProvider } from "../context/GlobalContext"

function AppRoutes() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
    </GlobalProvider>
  )
}

export default AppRoutes
