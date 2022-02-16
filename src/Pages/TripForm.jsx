import axios from "axios";
import React, { useState, useRef } from "react";
import apiHandler from "../api/apiHandler";
import FormDay from "../Components/Forms/FormDay";
import FormActivity from "../Components/Forms/FormActivity";
import { useNavigate } from "react-router-dom";
import "./../Crud.css";

const TripForm = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef();
  const [days, setDays] = useState([
    [{ title: "", address: "", description: "" }],
  ]);
  const navigate = useNavigate();

  const categoriesList = [
    "budget",
    "comfortable",
    "luxury",
    "family",
    "adventure",
    "culture",
    "shopping",
    "romantic",
    "party",
    "gastronomic",
    "nature",
  ];

  // ADD A NEW DAY
  const addDay = (event) => {
    event.preventDefault();
    setDays((days) => [...days, [{ title: "", address: "", description: "" }]]);
  };

  // HANDLE CHECKED CATEGORIES
  const handleCategory = (e) => {
    if (e.target.checked) {
      setCategories([...categories, e.target.value]);
    } else {
      const filteredCategory = categories.filter((category) => {
        return category !== e.target.value;
      });
      setCategories(filteredCategory);
    }
  };

  // SUBMIT DATA
  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("categories", categories);
    fd.append("location", location);
    fd.append("description", description);
    fd.append("image", imageRef.current.files[0]);
    fd.append("days", JSON.stringify(days));

    console.log("FORM DATA ------>", fd);
    console.log("---> What are you 'days' ?", days);
    apiHandler
      .post("/trips", fd)
      .then((res) => {
        console.log("RES apiHandler", res);
        navigate("/profile");
      })
      .catch((e) => console.log(e));
  };

  console.log("------- CURRENT STATE OF TRIP IS -----");

  // FORM
  return (
    <div className="crudbody">
      <h2>Create a travel itinerary</h2>
      <div className="maintripform">
        <form className="crudform" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title"> Title </label>
            <input
              type="text"
              id="title"
              className="crud-long-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="location"> Location </label>
            <input
              type="text"
              id="location"
              className="crud-long-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="crud-cats">
            {categoriesList.map((categorie, i) => (
              <React.Fragment key={i}>
                <input
                  type="checkbox"
                  id={`category-${categorie}-${i}`}
                  value={categorie}
                  onChange={handleCategory}
                />
                <label htmlFor={`category-${categorie}-${i}`}>
                  {categorie}
                </label>
              </React.Fragment>
            ))}
          </div>

          <div>
            <label htmlFor="description"> Description </label>
            <input
              type="text"
              id="description"
              className="crud-long-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <p>Upload a picture from your trip:</p>
          <input ref={imageRef} name="image" type="file" />

          <h3 className="daycount">
            <i className="far fa-calendar-alt"></i> DAYS: {days?.length}
          </h3>
          <button onClick={addDay}>
            ADD DAY <i className="fa-solid fa-plus"></i>
          </button>

          {days.map((el, i) => (
            <FormDay
              // callback={callback}
              activities={days[i]}
              setDays={setDays}
              dayNumber={i}
              key={i}
            />
          ))}

          <div className="crud-submit">
            <button onClick={handleSubmit}>Good</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TripForm;
