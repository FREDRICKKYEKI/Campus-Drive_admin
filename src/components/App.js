import React from "react"
import Signup from "./authentication/Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import Dashboard from "./google-drive/Dashboard"
import { About } from "./google-drive/About"
import NavbarComponent from "./google-drive/Navbar"
import { GetStarted } from "./google-drive/GetStarted"
import './App.css'


function App() {
  return (
    <Router>
      <NavbarComponent/>
        <AuthProvider>
          <Switch>
            {/* Drive */}
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

            {/* Profile */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <PrivateRoute exact path="/home" component={Dashboard} />

            {/* Auth */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path='/about' component={About}/>
            <Route path="/getstarted" component={GetStarted} />
          </Switch>
        </AuthProvider>      
    </Router>
  )
}

export default App
