import React, { useState, useEffect } from "react";
import axios from 'axios';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const length = images.length;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://3.26.179.44:8000/endangered");
      setImages(res.data);
    };
    getData();
  }, []);

  const handleNext = () => {
    const newIndex = index + 1 === length ? 0 : index + 1;
    setIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = index - 1 < 0 ? length - 1 : index - 1;
    setIndex(newIndex);
  };

  // 10 seconds interval
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      {images.map((image, i) => (
        index === i && (

          <div className="carousel" key={image.id}>
            <div className="carousel__image">
              <img className="him" src={image.img} alt="slide show" />
            </div>
          </div>

        )
      ))}
    </>
  );
};

export default Carousel;