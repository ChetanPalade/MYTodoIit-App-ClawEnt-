import React, {useEffect} from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home';
import Footer from './component/footer/Footer';
import About from './component/about/About';
import Signup from './component/signup/Signup';
import LogIn from './component/signup/LogIn';
import Todo from "./component/todo/Todo";
import { useDispatch } from 'react-redux';
import { authActions }  from "./store";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
   
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/todo" element={<Todo />}/>
          <Route path="/login" element={<LogIn />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
