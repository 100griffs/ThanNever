import React from 'react';
//import ReactDOM from 'react-dom/client';
import Carda from './Carda';


import{motion} from 'framer-motion';
import  { useRef, useEffect,useState } from 'react';
import { Link }  from 'react-router-dom'; 



/*all the css for the container has to be put around {causality} because thats where all the cards are after the loop */


 const Blue =({ Causes,Species }) => {

      const [Width, setWidth] =useState(0);
      const carousel = useRef();
      /*the use of state,ref,effect is to help the scroll not to not go on even when looped data is over .
      it helps in setting width wen we scroll over...derrick*/

      useEffect(( )=> {setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)},
      
      []);

      
     
      const causality = Causes.map((dd,j) => {
      return <Carda key={j}
       Title={Causes[j].Title}
       img={Causes[j].img}
       />})

       const animal = Species.map((u,i) => {
        return <Carda key={i}
         Title={Species[i].Title}
         img={Species[i].img}
          />})
         
                return(
                  <div>
                    <div>

              <h4>
                what is animal extinction?
                </h4>
                <p>
                      Extinction refers to the dying out of species <br/> Or the termination of a kind a group or kinds of groups usually a species.<br/>
                      Or the death of the last member of a certain kind of group 
                  </p>
                  <h5> Animal extinction</h5>
                  <p>
                  Extinction of a particular animal species occurs when there are no more individuals of that species alive anywhere in the world - the species has died out. 
                  </p>
                  <h5> The history of extinctions</h5>
                  <p>
                  Extinctions have been a natural part of the planet’s evolutionary history and so, a natural part of animal 
                  species, of which we are among
                  </p>
                  
                  
                  
                  <h3>
                    5 mass extinction that have happened in our planets history and the 6th that's happening now
                  </h3>
                  <div className='ex' >
                  <Link to='/than'>
                  <h4>The Ordovician Mass Extinction</h4>
                    <h4>The Devonian Mass Extinction </h4>
                  <h4>The Permian Mass Extinction </h4>
                  <h4>The Triassic-Jurassic Mass Extinction</h4>   
                  <h4> The K-T Mass Extinction </h4>
             
                  </Link>
           
              
              
              </div>
             
              
                      
             
                    </div>
                 
                    <h5> Check out some of the Endangered species</h5>
 <motion.div ref={carousel}  className='carousel' key={animal} whileTap={{cursor:"grabbing"}}>
                                        
                                        <motion.div  drag="x" dragConstraints={{right:0, left: -Width}} className='inner-carousel'>
                                        {animal}
                                        </motion.div>

                                  </motion.div>



                    
                   
                                  <h5> Check out the major causes of extinction </h5>
                            <motion.div ref={carousel}  className='carousel' key={causality} whileTap={{cursor:"grabbing"}}>
                          
                                <motion.div  drag="x" dragConstraints={{right:0, left: -Width}} className='inner-carousel'>
                                
                                {causality}
          
                                </motion.div>

                          </motion.div>
                     </div>
                   
                    );
            }


     export default Blue;