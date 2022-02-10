import React, { useEffect, useState } from "react";
import './../AllTrips.css'


const FilterDays = ({duration, filterDays}) => {

  return (

  <div>
    <p className='daytitle'>Duration (max days)</p>

    <>
    <input onChange={(e) => filterDays(e.target.value)}
    className='duration' 
    type="number" 
    name="duration" 
    min="0"
    value={duration}
    />
    </>

  </div>
  )
};

export default FilterDays;
