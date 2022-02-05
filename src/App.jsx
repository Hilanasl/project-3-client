import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Trips from "./Pages/Trips";
import TripDetails from "./Pages/TripDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import TripForm from "./Pages/TripForm";
// import PrivateRoute from "./Components/PrivateRoute";
import apiHandler from '../../project-3-client/src/api/apiHandler'

function App() {

  const [trips, setTrips] = useState([]);
    
  useEffect(() => {
    apiHandler
      .get('http://localhost:8000/trips')
      .then (({ data }) => {
        console.log('hi', data);
        setTrips(data)
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trips" element={<Trips trips={trips} />} />
        <Route path="/trips/:id" element={<TripDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/create" element={<TripForm />} />
        <Route path="/profile/:id/update" element={<TripForm />} />
      </Routes>
    </div>
  );
}

export default App;