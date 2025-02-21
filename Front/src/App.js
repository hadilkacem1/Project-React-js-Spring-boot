import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/NoMatch/NoMatch";
import PostUser from "./pages/users/PostUser";
import Home from "./pages/Home/Home";
import UpdateUser from "./pages/users/UpdateUser";
import Layout from './pages/Layouts/layout';
import ListUsers from './pages/users/ListUsers';
import Contact from "./pages/Contact/contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/PostUser" element={<PostUser />} />
        <Route path="/UpdateUser" element={<UpdateUser />} />
        <Route path="/Listusers" element={<ListUsers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
}

export default App;
