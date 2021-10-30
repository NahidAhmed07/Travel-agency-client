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
import ManageOrders from "./pages/Services/ManageOrders/ManageOrders";
import NotFound from "./pages/NotFound/NotFound";
import AddNewService from "./pages/Services/AddNewService/AddNewService";

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
            <PrivateRoute path="/manage_orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/add_service">
              <AddNewService></AddNewService>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
