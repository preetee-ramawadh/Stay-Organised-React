import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
//import UserTodos from "./components/UserTodos";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container-fluid mt-4 page-body bg-image mb-0">
        <div className="main_section_headersContainer mt-5">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/todos" element={<UserTodos />} /> */}
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
