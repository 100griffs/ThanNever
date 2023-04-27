
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [data, setImages] = useState([]);
  const length = data.length;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://tan-blushing-swallow.cyclic.app/Stories");
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
    }, 1800);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      {data.map((dat, i) => (
        index === i && (

          <div className="carousel" key={dat.id}>
               <h3>{dat.name}</h3>
               
            
            <div className="carousel__image">
          
            <Link to={`/Stories/`}>
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