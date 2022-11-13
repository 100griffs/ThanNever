import React from 'react';
import{motion} from 'framer-motion';





/* carda and card are just functionality that creates cards  for images with props */

const Carda = (props) => {
  return(

<motion.div className='item' key={props.id}>
          <img alt='huh' src= {props.img } /> 
         
            <h5>{props.Title}</h5>
            
            </motion.div>
          
       

   
  )

}
export default Carda;