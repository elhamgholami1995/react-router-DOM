import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Posts from "./pages/posts";
import Dashboard from "./pages/dashboard";
import AppNav from "./components/AppNav";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Post from "./components/post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Profile />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
