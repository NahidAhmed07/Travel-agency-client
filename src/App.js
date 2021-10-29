import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Menubar from "./pages/Shared/Menubar/Menubar";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import MyOrders from "./pages/Services/MyOrders/MyOrders";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import PlaceOrder from "./pages/Services/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/my_orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/place_order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
