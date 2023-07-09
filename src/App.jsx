import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product2 from "./pages/Product2";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { categories } from "./data";

const App = () => {
  const user = false; //imitates user
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/products" element={<Product2 />}></Route>
        <Route path="/products/:cat" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product2 />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        ></Route>
        <Route
          path="/register"
          element={user ? <Navigate replace to="/" /> : <Register />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
