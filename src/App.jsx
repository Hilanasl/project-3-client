import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Trips from "./Pages/Trips";
import TripDetails from "./Pages/TripDetails";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import TripForm from "./Pages/TripForm";
// import PrivateRoute from "./Components/PrivateRoute";
import apiHandler from "./api/apiHandler";
import Carousel from "./Components/Carousel";
import useAuth from "./auth/useAuth";


function App() {
  const [trips, setTrips] = useState([]);
  const [faves, setFaves] = useState([]);
  const { currentUser, isLoggedIn, storeToken } = useAuth()

  useEffect(() => {
    apiHandler
      .get("/trips")
      .then(({ data }) => {
        setTrips(data);
      })
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    if(currentUser) {
      setFaves(currentUser.favourites)
    } 
  }, [isLoggedIn])

  const favesClick = (id) => {
    apiHandler
      .patch("/users/favourites/" + id)
      .then(({ data }) => {
        setFaves(data.favourites);
        })
      .catch((err) => console.error(err));
}


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home trips={trips} />} />
        <Route path="/trips" element={<Trips trips={trips} />} />
        <Route path="/trips/:id" element={<TripDetails trips={trips} favesClick={favesClick} faves={faves}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<Profile faves={faves}/>} />
        <Route path="/profile/create" element={<TripForm />} />
        <Route path="/profile/:id/update" element={<TripForm />} />
      </Routes>
    </div>
  );
}

export default App;
