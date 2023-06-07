import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=8e81bb0&s=films")
      .then((response) => {
        setData(response.data);
      });
  }, []);

// const handleSearch=(value)=>{
//   axios.get("https://www.omdbapi.com/?apikey=8e81bb0&s=films").then((response)=>{
//     let search=response.data.filter((data)=>data.Title.toLowerCase().includes(value.toLowerCase()))
//     setData(search)
//   })
// }
  return (
    <div className="card">
      <div className="cardword">
        <h1>Best Movies</h1>
        {/* <input onChange={(e)=>handleSearch(e.target.value)} type="text" /> */}
      </div>

<div className="data">
{data.Search?.map((element) => {
        return (
          <div>
            <Link to={`/${element.imdbID}`}>
              <div className="cards">
                <img src={element.Poster} alt="" />
                <div className="cardsword">
                  <p>{element.Title}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
</div>
    
    </div>
  );
};

export default Api;
