import React, { useState, useEffect } from "react";
import axios from 'axios';


const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [data, setImages] = useState([]);
  const length = data.length;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://3.26.179.44:8000/Quotes");
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
    }, 8000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <>
      {data.map((dat, i) => (
        index === i && (

          <div  key={dat.id}>
            
           
              <p className='head'>{dat.name}</p>
              <p> By: {dat.by}</p>
             
             
            
         
          </div>

        )
      ))}
    </>
  );
};

export default Carousel;