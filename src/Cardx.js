import React from 'react';




const Cardx = (props) => {
  return(
<div >
       <h5>{props.Title}</h5>
          <img className='imaged' alt='filthy' src= {props.img } /> 
            <div>

              <p>{props.About}</p>

              <button></button>
          
    </div>
    </div>
   
  )

}
export default Cardx;