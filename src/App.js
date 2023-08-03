import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import {auth} from "./firebase";
import {useStateValue} from "./components/StateProvider";

function App() {
  const[{}, dispatch]= useStateValue();

  useEffect(()=>{
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
    
    if(authUser){
      // the user just logged in/ the user was logged in
      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    }
    else{
      //the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })
  }, [])

  return (
    //BEM
    <div className="app">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="checkout/*" element={<Checkout />} />
          <Route path="login/" element={<Login />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
