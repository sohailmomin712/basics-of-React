import { Route, Routes } from "react-router-dom";
import TodoPage from "../pages/todo-page";
import Profile from "../pages/profile-page";
import HomePage from "../pages/home-page";

const EcomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products" element={<Profile />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
};


export default EcomRoutes;


/// Nested Routing 
/// Single Product page
/// hooks 
