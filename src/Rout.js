
/*elements in shown on client side  */

 import React from 'react';
 import{ 
          
  BrowserRouter,
  Routes,
  Link,
  Route 

}  from 'react-router-dom'; 





import Ecx from './Comps/Ecx';
import Home from './Home';
import About from './About';
import ERROR from './ERROR';
import Cos from './Cos';
import Extinct from './Extinct';
import Nature from './Nature';
import Logo from  './than.svg'
import Endangered from './Endangered';
import View from './View';
import Layout from './Layout';
import Footer from './Footer';
import Voice from'./Voice';
import Bar from'./Bar';

const LazyLines=React.lazy(()=>import('./Comps/Lines'))
const LazySearched=React.lazy(()=>import('./Comps/Search'))

















/*setting up routes to navigate different parts of the websites*/

function Rout() {

  return (
      
   
   
   <div>
      <BrowserRouter>
     <Bar />
<div className='rout'>
  
          
           
              <Routes>
              
              <Route  element={<Layout Link={Link}/>}>
          
                <Route path= 'Lines/:from/:id' element={<React.Suspense fallback="loading.....">
                <LazyLines/>
                </React.Suspense>
                }/>

                <Route path='/Ecx' element={<Ecx />}/>
                <Route path='/Cos' element={<Cos/>}/>
              <Route path= '/*' element={<Nature Logo={Logo} />} />
              <Route path= '/extinct' element={<Extinct />} />
                  <Route path= '/about' element={<About/>} />
                  <Route path= '/Voice' element={<Voice/>} />
                  <Route path= '/View' element={<View  Link={Link}/>} />
                  <Route path='/Endangered' element={<Endangered />}/>
                <Route path= '*' element={<ERROR />} />
           
                </Route>
            
                <Route path= '/Search' element={<React.Suspense fallback="loading.....">
                <LazySearched/>
                </React.Suspense>
                }/>

                <Route path= '/home' element={<Home  Link={Link} F/>} />
              </Routes>

              

                </div>
                <Footer  Link={Link}  Logo={Logo}  />

           
      </BrowserRouter>
   
   <div>
   
   </div>
     
  
      </div>
    );
  }
  
  export default Rout;
   