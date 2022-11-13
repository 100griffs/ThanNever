import React from 'react'
import Cardx from './Cardx'


const Endangered =({ Species}) => {

  const  animals = Species.map((being,i) => {
                return <Cardx 
                      key={i}
                      img={Species[i].img} 
                      Title={Species[i].Title}
                      About={Species[i].About}/>
              })
              return(

                <div className='stem'>


                        <h4 className='text'> some of the most endangered species</h4>
                             <div className='container' key={animals}>
                                {animals}
                             </div>

              </div>
            
          
          );
  }
  
  
  
  
  
  export default Endangered