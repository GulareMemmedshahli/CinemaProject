import React from "react";
import { Carousel } from "antd";
import "./index.scss"
const contentStyle = {
  height: "80vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "cover",
};
const Slide = () => {
  return (
<div className="carusel">
      <Carousel autoplay>
        {/* <div> */}
            {/* <h3 style={contentStyle}><img src="https://series.az/dimg/slider/28035218122113330388houseofdragons-bgNEW.jpg" alt="" /></h3> */}
  {/* <h1>FILM <br /> your business</h1> */}
        {/* </div> */}
        
        <div>
          <img
            style={contentStyle}
            src="https://series.az/dimg/slider/24956311562802931238LOTR.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://series.az/dimg/slider/23857Game-of-Thrones-series.az.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://series.az/dimg/slider/283313097531136245131.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://series.az/dimg/slider/233903067330417249035lH7NtGZ5ApTXQ8lufosf2JN4bh.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://series.az/dimg/slider/20910276462302928144star_wars_the_mandalorian.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>

   
  );
};

export default Slide;
