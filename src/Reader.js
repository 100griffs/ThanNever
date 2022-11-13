import React from 'react';




const Reader = (props) => {
  return(
<div>
          <img className='imaged' alt='filthy' src= {props.img } /> 
            <div>
              <h4>{props.Title}</h4>
          <p>{props.About}</p>
          
    </div>
    </div>
   
  )

}
export default Reader;