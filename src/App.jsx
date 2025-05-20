import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";
import Photos from "./Components/Photos/Photos";
import Todos from "./Components/Todos/Todos";
import Users from "./Components/Users/Users";
import Albums from "./Components/Albums/Albums";
import Header from "./Components/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
        <Route path="albums" element={<Albums />} />
        <Route path="photos" element={<Photos />} />
        <Route path="todos" element={<Todos />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
