import React from "react";
import HomePage from "./pages/homePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import CardDetails from "./pages/CardDetails";
import ExpenseTracker from './pages/ExpenseTracker/App'

const App = () => {
  return (
       <>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/analytics' component={Analytics} />
          <Route exact path='/me' component={Profile} />
          <Route exact path='/card' component={CardDetails} />
          <Route exact path='/expense-tracker' component={ExpenseTracker} />
        
       </>

  );
};

export default App;
