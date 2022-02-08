import axios from "axios";
import React, {useState, useRef, useEffect} from "react";
import apiHandler from "../api/apiHandler";
import FormDay from "../Components/Forms/FormDay";
import FormActivity from "../Components/Forms/FormActivity";
// import { useNavigate } from "react-router-dom";

const TripForm = () => {
  
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([])
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const imageRef = useRef();

  // const [activities, setActivities] = useState([{}])
  const [activityTitle,setActivityTitle] = useState("");
  const [address, setAddress] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const categoriesList = ['budget', 'comfortable', 'luxury', 'family', 'adventure', 'culture', 'shopping', 'romantic', 'party', 'gastronomic', 'nature']
  
  const [day, setDay] = useState([<FormDay 
    key='0' 
    day='0'
    activityTitle ={activityTitle}
    setActivityTitle={setActivityTitle} 
    address={address} 
    setAddress={setAddress} 
    activityDescription={activityDescription}
    setActivityDescription={setActivityDescription} />])
  // const [author, setAuthor] = useState("");
  // const navigate = useNavigate()


  // ADD A NEW DAY
  const addDay = event => {
    event.preventDefault()
    setDay([...day, <FormDay key={day.length} day={day.length} />])
  }
  
  // HANDLE CHECKED CATEGORIES
  const handleCategory = (e) => {
    if (e.target.checked) {
      setCategories([...categories, e.target.value])
    } else {
      const filteredCategory = categories.filter(category => {
        return category !== e.target.value
      })
      setCategories(filteredCategory)
    }
  }

  // SUBMIT DATA
  const handleSubmit = () =>{
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title)
    fd.append("categories",categories)
    fd.append("location", location)
    fd.append("description", description)
    fd.append("image", image.current.files)
    fd.append("day", day) //on n'en a peut etre pas besoin 
    // about activities
    //ici on veut envoyer activities qui est un tableau d'objet; chaque object contenant le titre, la description de lactivité en question 
    //et peut-être le jour auquel cette activité correspond 
    fd.append("activityTitle", activityTitle)
    fd.append("address", address)
    fd.append("activityDescription", activityDescription) 
    
    apiHandler.post('/trips', fd)
    .then(res => console.log(res))
    .catch(e => console.log(e))
  }
  
    // FORM
  return <div>
   <h2>ADD A NEW TRIP</h2>
    <form className="tripform" onSubmit={handleSubmit} >
     <div>
       <label htmlFor="title"> Title </label>
       <input
         type="text"
         id="title"
         value={title}
         onChange={(e)=> setTitle(e.target.value)}
       />
     </div>

     <div>
       <label  htmlFor="location"> Location </label>
       <input
         type="text"
         id="location"
         value={location}
         onChange={(e)=> setLocation(e.target.value)}
       />
     </div>
      
      <div>
        {categoriesList.map((categorie, i)=>(
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
         onChange={(e)=> setDescription(e.target.value)}
       />
     </div>

     <input ref={imageRef} name="image" type="file"/>

     <button onClick={addDay}>Add a day</button>
     <p>Number of days {day.length} </p>
     {day.map(el => {
       return el
     })}

     <button onClick={handleSubmit}>Good</button>
    </form>

  </div>;
};

export default TripForm;
