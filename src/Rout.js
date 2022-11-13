
/*elements in shown on client side  */

 


import React from 'react';
import THAN from './THAN';
import Articles from './Articles';
import Home from './Home';
import About from './About';
import ERROR from './ERROR';
import Searchbox from './Searchbox';
import Cos from './Cos';
import Way from './Way';
import Forward from './Forward';
import Extinct from './Extinct';
import Nav from './Nav';
import Nature from './Nature';
import Logo from  './than.svg'
import Side from './Side';
import Endangered from './Endangered';
import Eco from './Eco';
import Bio from './Bio'
import Clim from './Clim';
import View from './View';
import Art1 from './Art1';












import{ 
          BrowserRouter,
          Routes,
          Route 
  }  from 'react-router-dom'; 






/*setting up routes to navigate different parts of the websites*/

function rout({Species, Causes,FaSearch,FaStream}) {
    return (
    <div>
   
   
      <BrowserRouter>
   

      <Nav Logo={Logo} FaSearch={FaSearch} FaStream={FaStream} />
     
      
<div className='rout'>
          <Side FaSearch={FaSearch} className='side'/>
           
              <Routes>
                
                < Route exact path='/search' element={<Searchbox Species={Species} Causes={Causes}/>} />
                <Route path='/Way' element={<Way Forward={Forward}/>}/>
                <Route path='/Cos' element={<Cos Causes={Causes}/>}/>
              <Route path= '/home' element={<Home Species={Species} Causes={Causes} />} />
              <Route path= 'than' element={<THAN />} />
              <Route path= '/*' element={<Nature Logo={Logo} Species={Species} Causes={Causes} />} />
              <Route path= '/extinct' element={<Extinct />} />
              <Route path= '/Eco' element={<Eco />} />
                  <Route path= '/about' element={<About/>} />
                  <Route path= '/Bio' element={<Bio/>} />
                  <Route path= '/Clim' element={<Clim/>} />
                  <Route path= '/View' element={<View Causes={Causes} />} />
                  <Route path= '/art1' element={<Art1 Arts={Articles} Logo={Logo}/>} />
                  <Route path='/Endangered' element={<Endangered Species={Species} />}/>
                <Route path= '*' element={<ERROR />} />
                </Routes>
             
              
                </div>
               
              

      </BrowserRouter>
   
      </div>
    );
  }
  
  export default rout;
   