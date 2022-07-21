import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./components/Navbar/NavbarComp";
import Home from "./pages/Home/Home";
import About from "./pages/About/About"
import Login from "./pages/Login/Login";
import RegisterScreen from "./pages/Register/Register";
import ProfileScreen from "./pages/Profile/Profile";
import Product from "./pages/Product/Product";
import UserList from "./pages/UserList/UserList";
import Categories from "./pages/Categories/Categories"
import ProductsList from "./pages/ProductList/test2";
import ProductAdd from "./pages/ProductList/ProductsAdd";
import Test3 from "./pages/ProductList/test3";
import Test2 from "./pages/ProductList/test2";
import UserUpdate from "./pages/UserList/userUpdate";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavbarComp />
          <div className="pages">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin/userList" element={<UserList />} />
              <Route path="/admin/user/:id/edit" element={<UserUpdate />} />
              <Route path="/products" element={<Product />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/exercises" element={<Categories />} />
              <Route path="/exercises/:id" element={<Categories />} />
              <Route path="/admin/productlist" element={<Test2 />} />
              <Route path="/admin/product/add" element={<Test3 />} />
              <Route path="/update/:id" element={<Test3 />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
