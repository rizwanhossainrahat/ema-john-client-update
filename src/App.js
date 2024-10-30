import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import Error from './components/Error/Error';
import Inventory from './components/Inventory/Inventory';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipping from './components/Shipping/Shipping';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Shop />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="/review" element={<OrderReview />} />
        <Route path="inventory" element={<PrivateRoute><Inventory /></PrivateRoute> } />
        <Route path="/placeorder" element={<PrivateRoute> <PlaceOrder /></PrivateRoute>} />
        <Route path="/shipping" element={<PrivateRoute> <Shipping /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute> <Orders /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
