import { useState } from "react";

const categories = ['budget', 'comfortable', 'luxury', 'family', 'adventure', 'culture', 'shopping', 'romantic', 'party', 'gastronomic', 'nature']


const FilterCats = ({filteredCats, callbackFilter}) => {

  return (
      <div>

        <div className='catfilters'>
        {categories.map(( category ) => {
          return (
            <div key={category}>
                <div>
                  <input
                    type="checkbox"
                    id={category}
                    name={category}
                    value={category}
                    onChange={(e) => callbackFilter(e.target.value, e.target.checked)}
                  />
                  <label>{category}</label>
                </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}


export default FilterCats
