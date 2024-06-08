import Spinner from "./Spinner";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import useFetch from "./services/useFetch";

export default function App() {
  const { data: users, loading, error } = useFetch("api/users");
  if (error) throw error;
  if (loading) return <Spinner />;
  return (
    <>
      <NavBar users={users} />
      <main className="container-fluid mt-4 page-body bg-image mb-0">
        <div className="main_section_headersContainer mt-5">
          <h2>No of Registered Users are: {users?.length}</h2>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/:signup" element={<SignUp />} />
            <Route path="/:login" element={<Login />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}
