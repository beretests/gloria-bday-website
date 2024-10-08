// import React from "react";
import { Component } from "react";
// import { useState, useEffect } from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";

import "./Gallery.scss";

function Gallery({ pictures }) {
  const url = import.meta.env.VITE_DATA_URL;

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  return (
    <>
      <div className="main-container">
        <h1 className="title">Happy Birthday, Gloria!!!&#127874;&#x1F382;</h1>
        <Carousel className="carousel-slide" data-bs-theme="dark">
          {pictures.map((picture) => (
            <Carousel.Item key={picture.id}>
              <div className="carousel-container">
                <img
                  src={picture.image}
                  alt={picture.name}
                  className="carousel-image"
                />
                <Carousel.Caption>
                  <h3 className="feelings">{picture.label}</h3>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Gallery;
