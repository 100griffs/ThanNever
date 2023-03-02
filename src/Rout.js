
/*elements in shown on client side  */

 import React from 'react';
 import{ 
          
  BrowserRouter,
  Routes,
  Link,
  Route 

}  from 'react-router-dom'; 






import Home from './Home';
import About from './About';
import ERROR from './pages/ERROR';
import View from './pages/View';
import Layout from './Layout';
import Footer from './Footer';
import Voice from'./pages/Voice';
import Bar from'./Comps/nav/Bar';

const LazyLines=React.lazy(()=>import('./Comps/Lines'))
const LazySearched=React.lazy(()=>import('./Comps/Search'))
const LazyEndangered=React.lazy(()=>import('./pages/Endangered'))
const LazyWay=React.lazy(()=>import('./pages/way'))
const LazyCos=React.lazy(()=>import('./pages/Cos'))

















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
       <Route path= '/cos' element={<React.Suspense fallback="loading.....">
                <LazyCos/>
                </React.Suspense>
                }/>

<Route path= '/way-forward' element={<React.Suspense fallback="loading.....">
                <LazyWay/>
                </React.Suspense>
                }/>


<Route path= '/endangered' element={<React.Suspense fallback="loading.....">
                <LazyEndangered/>
                </React.Suspense>
                }/>


<Route path= '/way-forward' element={<React.Suspense fallback="loading.....">
                <LazyWay/>
                </React.Suspense>
                }/>
                  <Route path= '/about' element={<About/>} />
                  <Route path= '/Voice' element={<Voice/>} />
                  <Route path= '/View' element={<View  Link={Link}/>} />
              
                </Route>

                <Route path= '/Search' element={<React.Suspense fallback="loading.....">
                <LazySearched/>
                </React.Suspense>
                }/>
                  <Route path= '*' element={<ERROR />} />

                <Route path= '/' element={<Home  Link={Link}/>} />
              </Routes>

              

                </div>
                <Footer  Link={Link}   />

           
      </BrowserRouter>
   
   <div>
   
   </div>
     
  
      </div>
    );
  }
  
  export default Rout;
   