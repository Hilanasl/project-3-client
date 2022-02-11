import React, { useState, useEffect, useRef } from "react";
import apiHandler from "../api/apiHandler";
import FormDay from "../Components/Forms/FormDay";
import { useNavigate, useParams } from "react-router-dom";

export default function FormUpdate() {
  // id before
  const navigate = useNavigate();
  const params = useParams(); // to use url id

  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef();
  const [days, setDays] = useState(null);
  // [{activites[{title, adress, description}]}]
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

  useEffect(() => {
    const x = async () => {
      const { data } = await apiHandler.get("/trips/" + params.id);
      console.log(data);
      setTitle(data.title);
      setCategories(data.categories);
      setLocation(data.location);
      setDescription(data.description);
      //   const days = data.days.map((day) => (day = day.activities));
      setDays(data.days);
    };
    x();
  }, [params.id]);

  // ADD A NEW DAY
  const addDay = (event) => {
    event.preventDefault();
    setDays((days) => [
      ...days,
      {
        activities: [{ title: "", address: "", description: "" }],
        number: days.length + 1,
      },
    ]);
  };

  // EMPTY (remove) A DAY Or AN ACTIVITY ..

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
  const handleSubmit = async (e) => {
    console.log("i am in handle submit");
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("categories", categories);
    fd.append("location", location);
    fd.append("description", description);
    fd.append("image", imageRef.current.files[0]);
    fd.append("days", JSON.stringify(days));

    try {
      const { data } = await apiHandler.patch("/trips/" + params.id, fd);
      console.log("data updated :", data);
      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  return days ? (
    <>
      <div>
        <h2>UPDATE YOUR TRIP</h2>
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <input ref={imageRef} name="image" type="file" />

          <button onClick={addDay}>Add a day</button>

          <p>Number of days {days?.length} </p>

          {days.map((el, i) => (
            <FormDay
              activities={days[i].activities}
              setDays={setDays}
              dayNumber={i}
              key={i}
              update={true}
            />
          ))}

          <button onClick={handleSubmit}>Good</button>
        </form>
      </div>
    </>
  ) : (
    <p>Loading</p>
  );
}
