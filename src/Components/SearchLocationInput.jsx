import React, { useState, useEffect, useRef } from "react";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current
  );
  //autoComplete.setFields(["address_components", "formatted_address"]);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery) {
  const addressObject = autoComplete.getPlace();
  const { lat, lng } = addressObject.geometry.location;
  //updateQuery(query);
  updateQuery({
    name: "address",
    value: addressObject.formatted_address,
    address: addressObject.formatted_address,
    coords: [lat(), lng()],
  });
  console.log("addressObject", addressObject);
}

function SearchLocationInput({ address, activityChange, activityNumber }) {
  const [query, setQuery] = useState(address);
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEaeUiFD9oAnB1LNDiK-GWyDq6zS9HWS4&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  useEffect(() => {
    console.log("~query changed");
    activityChange({ target: query });
  }, [query]);

  const handleAddressChange = (event) => {
    //setQuery((prev) => ({ ...prev, value: event.target.value }));
  };

  console.log("> QUERY >>>", query);

  return (
    <div className="search-location-input">
      <label htmlFor={"address-" + activityNumber}>Address</label>
      <input
        type="text"
        name="address"
        id={"address-" + activityNumber}
        ref={autoCompleteRef}
        onChange={handleAddressChange}
        placeholder=""
      />
    </div>
  );
}

export default SearchLocationInput;
