import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";



const Slider = ({Causes}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = Causes.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
   
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
   
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {Causes.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                
                <img src={slide.img} alt="slide" className="image" />
                <div className="content">
                  <h2>{slide.Title}</h2>
                  <p>{slide.About}</p>
                  <hr/>

                </div>
              </div>
            )}
          </div>
        );
      })}
      
    </div>
    
  );
};

export default Slider;