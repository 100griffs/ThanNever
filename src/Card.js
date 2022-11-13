
import React from 'react';




const Card = (props) => {
  return(
<div>
          <img className='imaged' alt='filthy' src= {props.img } /> 
            <div>
              <h4>{props.Title}</h4>
              <button></button>
          
    </div>
    </div>
   
  )

}
export default Card;