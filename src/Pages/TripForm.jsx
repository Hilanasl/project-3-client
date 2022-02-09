import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import apiHandler from "../api/apiHandler";
import FormDay from "../Components/Forms/FormDay";
import FormActivity from "../Components/Forms/FormActivity";

// import { useNavigate } from "react-router-dom";

// trip
// _id
// day
// _id
// activity
// _id

// state 1 => trip
// state 2 => days

// when push > merge the 2 states

/*
    const currentTrip = {
      name: "foo trip",
      days: [
        [{...formInputsInfos }, {...activity number2}], // 0
        [{...formInputsInfos }], // 1
        [{...formInputsInfos },{...formInputsInfos },{...formInputsInfos }], // 2
      ],
      daysAlt: {
        0: {...formInputsInfos },
        1: {...formInputsInfos },
        2: {...formInputsInfos },
      }
    } 
    state in trip form should be just one big object
    state like seed, big object every info
    send the all object in back end
    update with info 
    Define in trip form f° that will handle change of formDay and fromActivity
    pass the f° as props
    change the state for days, bc shouldn't give an array of components, but objects.
    to know wich activity in which day, have an argument in the change handler in activity that give the day (will be CRUCIAL)
    */

const TripForm = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef();
  const [days, setDays] = useState([
    [{ title: "", address: "", description: "" }],
  ]);

  // const [activities, setActivities] = useState([
  //   { title: "", address: "", description: "" },
  // ]);
  //const [activityTitles, setActivityTitles] = useState([]);
  //const [address, setAddress] = useState("");
  //const [activityDescription, setActivityDescription] = useState("");

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

  // const callback = (key, value) => console.log("foo foo foo !!!", key, value);

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
    fd.append("image", imageRef.current.files);
    fd.append("days", JSON.stringify(days));

    console.log("FORM DATA ------>", fd);
    console.log("---> What are you 'days' ?", days);
    apiHandler
      .post("/trips", fd)
      .then((res) => console.log("RES apiHandler", res))
      .catch((e) => console.log(e));
  };

  console.log("------- CURRENT STATE OF TRIP IS -----");

  // FORM
  return (
    <div>
      <h2>ADD A NEW TRIP</h2>
      <form className="tripform" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="location"> Location </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          {categoriesList.map((categorie, i) => (
            <React.Fragment key={i}>
              <input
                type="checkbox"
                id={`category-${categorie}-${i}`}
                value={categorie}
                onChange={handleCategory}
              />
              <label htmlFor={`category-${categorie}-${i}`}>{categorie}</label>
            </React.Fragment>
          ))}
        </div>

        <div>
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <input ref={imageRef} name="image" type="file" />

        <button onClick={addDay}>Add a day</button>

        <p>Number of days {days?.length} </p>

        {days.map((el, i) => (
          <FormDay
            // callback={callback}
            activities={days[i]}
            setDays={setDays}
            dayNumber={i}
            key={i}
          />
        ))}

        <button onClick={handleSubmit}>Good</button>
      </form>
    </div>
  );
};

export default TripForm;
