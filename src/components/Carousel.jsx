import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel.css"; // Create a CSS file for styling
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const slides = [
    {
      imgSrc:
        "https://assets.telegraphindia.com/telegraph/2023/Apr/1681962670_heatwave.jpg",
      title: "#HeatwaveReady",
      subtitle:
        "Being #Heatwave Ready means understanding HeatWave risk and taking steps now to prepare.",
    },
    {
      imgSrc:
        "https://assets.telegraphindia.com/telegraph/376e2768-95d8-4b32-94b3-a3a1208d21c0.jpg",
      title: "#FireProof",
      subtitle:
        "Being #FireProof means understanding Safety Tips and taking steps now to prevent fire",
    },
  ];

  return (
    <Slider {...carouselSettings}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <img
            src={slide.imgSrc}
            alt={`Slide ${index + 1}`}
            className="carousal-img"
          />
          <div className="grey-box">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <button
              className="mt-4 button-c "
              onClick={() => navigate("/plan")}
            >
              Make Plan
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
