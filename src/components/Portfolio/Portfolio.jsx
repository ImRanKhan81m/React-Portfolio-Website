import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import project2 from "../../img/project2.png"
import project3 from "../../img/project3.png"
import project4 from "../../img/project4.png"
import project5 from "../../img/project5.png"
import project7 from "../../img/project7.png"
import project8 from "../../img/project8.png"
import project9 from "../../img/project9.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img src={project9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project5} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
