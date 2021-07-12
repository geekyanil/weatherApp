import React, { useEffect, useState } from "react";
import "./tempApp.css";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [desh,setDesh]=useState(null);
  const [search, setSearch] = useState("Bangalore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=81753ef39d07b7655bd9a63be14ef5d3`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="heading">
          <h1 className="main-header">Weather App</h1>
        </div>
        <h3 className="sub-topic">Search Temperature By City Name</h3>
        <div className="inputData">
          <input
            type="search"
            placeholder="Enter the City Name"
            value={search}
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="noDataFound">No Data Found</p>
        ) : (
          <div className="container">
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view search">{search}</i>
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min:{city.temp_min} °C | Max:{city.temp_max} °C
              </h3>
              {/* <h3>Country:{city.country}</h3> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TempApp;
