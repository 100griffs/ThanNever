
/*elements in shown on client side  */

 


import React from 'react';
import THAN from './THAN';
import Ecx from './Ecx';
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
import Endangered from './Endangered';
import Eco from './Eco';
import Bio from './Bio'
import Clim from './Clim';
import View from './View';
import Art1 from './Art1';
import Layout from './Layout';
import Slider from './Slider'
import Footer from './Footer';












import{ 
          BrowserRouter,
          Routes,
          Link,
          Route 
  }  from 'react-router-dom'; 
import Blue from './Blue';






/*setting up routes to navigate different parts of the websites*/

function rout({Species, Causes,FaSearch,FaStream}) {
    return (
      
   
   
   <div>
      <BrowserRouter>
     

      <Nav Logo={Logo} FaSearch={FaSearch} FaStream={FaStream} />
     
      
<div className='rout'>
  
          
           
              <Routes>
              <Route  element={<Layout FaSearch={FaSearch}  Link={Link}/>}>
                <Route path='/Way' element={<Way Forward={Forward}/>}/>
                <Route path='/Ecx' element={<Ecx />}/>
                <Route path='/Cos' element={<Cos Causes={Causes}/>}/>
              <Route path= '/Blue' element={<Blue Species={Species} Causes={Causes}/>} />
              <Route path= 'than' element={<THAN />} />
              <Route path= '/*' element={<Nature Logo={Logo} Species={Species} Causes={Causes} />} />
              <Route path= '/extinct' element={<Extinct />} />
              <Route path= '/Eco' element={<Eco Arts={Articles} Link={Link}/>} />
                  <Route path= '/about' element={<About/>} />
                  <Route path= '/Bio' element={<Bio/>} />
                  <Route path= '/Clim' element={<Clim Link={Link}/>} />
                  <Route path= '/View' element={<View Causes={Causes} Link={Link}/>} />
                  <Route path= '/art1' element={<Art1 Arts={Articles} Logo={Logo}/>} />
                  <Route path='/Endangered' element={<Endangered Species={Species} />}/>
                <Route path= '*' element={<ERROR />} />
                </Route>
                < Route exact path='/search' element={<Searchbox Species={Species} Causes={Causes}/>} />
                <Route path= '/home' element={<Home Slider={Slider} Causes={Causes} Link={Link} FaStream={FaStream} />} />
                </Routes>
             
              
                </div>
               
              

      </BrowserRouter>
   
   
     
      <Footer FaSearch={FaSearch}  Link={Link}/>
      </div>
    );
  }
  
  export default rout;
   