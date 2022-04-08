import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "It's always such a pleasure working with Joe and team! Our company's WebApp conitnues to improve with each project and we couldn't be happier! We will continue to use Programmatis for all of our future needs. Thank you for everything!",
    },
    {
      img: profilePic2,
      review:
        "Above and beyond what I was hoping for with this system they built. Both looks and works perfectly. They were flexible with scheduling and timing of the work to fit my needs. I would highly recommend them and plan to work with them again and again. Thank you!",
    },
    {
      img: profilePic3,
      review:
        "Great working with Imran. He understood exactly what I was asking for and was able to deliver. I will be working with him again.",
    },
    {
      img: profilePic4,
      review:
        "Fantastic work, delivered on time. High professional worker, recommended for all.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
