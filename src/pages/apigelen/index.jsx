import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Api = () => {
  const [data, Setdata] = useState([]);
  useEffect(() => {
    axios.get("https://www.omdbapi.com/?apikey=8e81bb0&s=films")
      .then((data) => {
        Setdata(data.data);
      });
  }, []);
  return (
    <div className="card">
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
  );
};

export default Api;
