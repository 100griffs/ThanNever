import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [data, setImages] = useState([]);
  const length = data.length;

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
    }, 3500);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      {data.map((dat, i) => (
        index === i && (

          <div className="carousel" key={dat.id}>
            
            <div className="carousel__image">
          
            <Link to={`/endangered/`}>
              <img className="him" src={dat.img} alt="slide show" /> 
              
              </Link>
              </div>
             
            
         
          </div>

        )
      ))}
    </>
  );
};

export default Carousel;