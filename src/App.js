import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Product from "./pages/Product";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
