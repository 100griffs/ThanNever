
import React from 'react';
import Blue from './Blue';












/* loop that iterates through the  species array and returns animals 
which i render through a card component i have imported above . i have also added the 
blue component that adds the causes at the end of home check out blue and carda component 
for more info about blue and causes array ..derrick*/




const Home =({ Species,Causes}) => {


            return(
                
              <div className='stem'>
         
                      <div >
                           <Blue Causes={Causes} Species={Species}/>
                           
                      </div>
                  
            </div>
          
        
        );
}
  
  export default Home;
