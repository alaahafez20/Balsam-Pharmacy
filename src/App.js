import "./App.css";
import Navbar from "./Navbar/Navbar";
import JopApplication from "./JopApplication/JopApplication";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { handleUserProfile } from "./firebase/config";
import { auth } from "./firebase/config";
import React, { useState, useEffect, useContext } from "react";
import Admin from "./Admin/Admin";
import ContextProvider from "./Context/Context";
import ProductDetails from "./ProductDetails/ProductDetails";
import { Checkout } from "./Checkout/Checkout";

import OrderSuccess from "./OrderSuccess/OrderSuccess";
import OrdersHistory from "./OrdersHistory/OrdersHistory";
import AdminOrders from "./AdminOrders/AdminOrders";
import Article from "./Blogs/Article/Article";
import Article2 from "./Blogs/Article/Article2";
import Article3 from "./Blogs/Article/Article3";
import { Store } from "./Context/Context";

function App() {
  const store = useContext(Store)

  const initialState = {
    currentUser: null,
  };
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({
            currentUser: {
              id: snapshot.id,
            },
          });
        });
      } else {
        setUser({
          ...initialState,
        });
      }
    });
  }, []);

  return (
    <ContextProvider>
      <Router>
          <Navbar user={user} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route exact path="/Products" component={Products} />
            <Route path="/Products/:documentID" component={ProductDetails} />
            <Route path="/About" component={About} />
            <Route path="/Contacts" component={Contacts} />
            <Route
              path="/admin"
              render={() =>
                user.currentUser ? <Admin></Admin> : <Redirect to="/" />
              }
            />
            <Route
              path="/adminOrders"
              render={() =>
                user.currentUser ? <AdminOrders user={user}></AdminOrders> : <Redirect to="/" />
              }
            />
            <Route
              path="/SignIn"
              render={() =>
                user.currentUser ? <Redirect to="/" /> : <SignIn></SignIn>
              }
            />
            <Route
              path="/SignUp"
              render={() =>
                user.currentUser ? <Redirect to="/" /> : <SignUp></SignUp>
              }
            />
            <Route
              path="/OrderPrescription"
              render={() =>
                user.currentUser ? <Redirect to="/Checkout" /> : <SignIn></SignIn>
              }
            />
            
            <Route path="/Cart" component={() => <Cart user={user} />} />
            <Route path="/Checkout" component={() => <Checkout user={user} />} />
            <Route path="/OrderSuccess" component={OrderSuccess} />
            <Route path="/OrdersHistory" component={() => <OrdersHistory user={user} />} />
            <Route path="/JobApplication" component={JopApplication} />
            <Route path='/Article' component={Article} />
            <Route path='/Article2' component={Article2} />
            <Route path='/Article3' component={Article3} />
          </Switch>
        
          <Footer />
      </Router>

    </ContextProvider>
  );
}

export default App;
