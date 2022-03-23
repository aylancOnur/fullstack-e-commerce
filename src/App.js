import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  Cart,
  Favorites,
  Orders,
  Products,
  Product,
  UserProfile,
  Login,
  Categories,
} from ".//pages/index";
import { Navbar, MobileNavbar } from "./components/Navbar/index";
import Header from "./components/Header";

const App = () => {
  const user = false;
  const isMobile = window.innerWidth < 821 ? true : false;
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
        <Route
          path="/categories"
          element={isMobile ? <Categories /> : <Navigate replace to="/" />}
        />
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
