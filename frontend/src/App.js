import { BrowserRouter, Routes, Route , Outlet } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { ClientTable } from "./components/ClientTable";
import { Client } from "./pages/Client";
import { TaskCard } from "./components/Card";
import { AddClient } from "./components/AddClient";
import { EmployeeTable } from "./components/EmployeeTable";
import { AddEmployee } from "./components/AddEditEmployee";
import { ForgotPassword } from "./pages/ForgetPassword";
import { ResetPassword } from "./pages/resetPassword";
import { Setting } from "./components/Setting";
import { TaskTable } from "./components/Task";
import { AddEditTask } from "./components/AddEditTask";
import { WelcomePage } from "./pages/WelcomePage";
import { ContactUS } from "./components/ContactUs";
import { DocumentTable } from "./components/DocumentTable";
import {AddEditDocument} from "./components/AddEditDocument"
import { TenderList } from "./components/tender";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import PrivateRoute from "./utils/authGuard";
import { AddTender } from "./pages/addTender";
import AdminRoute from "./utils/adminGuard";
function App() {
  return (
    <div className="App">
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          spacing: {
            xs: "1rem",
            sm: "1.2rem",
            md: "1.8rem",
            lg: "2.2rem",
            xl: "2.8rem",
          },
        }}
      >
        <Notifications limit={5} />

        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<WelcomePage />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/tender" element={<AddTender />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/reset-token/:token" element={<ResetPassword />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/home" element={<Home />}>
                <Route path="/home" element={<TaskCard />} />
                <Route path="/home/client" element={<ClientTable />} />

                <Route path="/home/addclient" element={<AddClient />}>
                  <Route path="/home/addclient/:id" element={<AddClient />} />
                </Route>
                <Route path="/home/task" element={<TaskTable />} />
                <Route path="/home/addtask" element={<AddEditTask />}>
                  <Route path="/home/addtask/:id" element={<AddEditTask />} />
                </Route>
                <Route path="/home/setting" element={<Setting />} />
                <Route exact path="/home" element={<AdminRoute role="admin" />}>
                  <Route path="/home/employee" element={<EmployeeTable />} />
                  <Route path="/home/addemployee" element={<AddEmployee />}>
                    <Route
                      path="/home/addemployee/:id"
                      element={<AddEmployee />}
                    />
                  </Route>
                </Route>

                <Route path="/home/document" element={<DocumentTable />} />
                <Route path="/home/adddocument" element={<AddEditDocument />}>
                  <Route
                    path="/home/adddocument/:id"
                    element={<AddEditDocument />}
                  />
                </Route>
                <Route path="/home/event" element={<TenderList />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
