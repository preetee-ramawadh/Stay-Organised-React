import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { useState } from "react";
import UserTodos from "./components/UserTodos";
// import useFetch from "./services/useFetch";
// import Spinner from "./Spinner";
import Task from "./components/Task";

export default function App() {
  const [selectedUserId, setSelectedUserId] = useState(""); // State to store selected user ID

  const handleSelectedUser = (userId) => {
    setSelectedUserId(userId);
    console.log("selectedUserId in app");
    console.log(selectedUserId);
  };

  return (
    <>
      <NavBar sendUserIdToApp={handleSelectedUser} />
      <main className="container-fluid mt-4 page-body bg-image mb-0">
        <div className="main_section_headersContainer mt-5">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<UserTodos />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
