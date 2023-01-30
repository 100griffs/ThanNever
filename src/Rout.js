
/*elements in shown on client side  */

 



import THAN from './THAN';
import Ecx from './Comps/Ecx';
import Home from './Home';
import About from './About';
import ERROR from './ERROR';
import Cos from './Cos';
import Way from './Way';
import Forward from './Forward';
import Extinct from './Extinct';
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
import Voice from'./Voice';
import Bar from'./Bar';
import Lines from './Comps/Lines'
import Articles from './Comps/articles'
import Card from './Comps/Card'
import Sea from './Comps/Ser'













import{ 
          
          BrowserRouter,
          Routes,
          Link,
          Route 

  }  from 'react-router-dom'; 
import Blue from './Blue';






/*setting up routes to navigate different parts of the websites*/

function Rout({Species, Causes,FaSearch,FaStream}) {

  return (
      
   
   
   <div>
      <BrowserRouter>
     <Bar />
<div className='rout'>
  
          
           
              <Routes>
              
              <Route  element={<Layout FaSearch={FaSearch}  Link={Link}/>}>
          
                <Route path= 'Lines/:id' element={<Lines/>}/>
                
                <Route path= 'Card/:id' element={<Card/>}/>
                <Route path= '/lines/' element={<Lines/>}/>
                <Route path= '/Articles/' element={<Articles/>}/>
                <Route path= '/lines/:id' element={<Lines/>}/>
                <Route path= '/Articles/:id' element={<Articles/>}/>
              <Route path='/Way' element={<Way Forward={Forward}/>}/>
                <Route path='/Ecx' element={<Ecx />}/>
                <Route path='/Cos' element={<Cos Causes={Causes}/>}/>
              <Route path= '/Blue' element={<Blue Species={Species} Causes={Causes}/>} />
              <Route path= 'than' element={<THAN />} />
              <Route path= '/*' element={<Nature Logo={Logo} Species={Species} Causes={Causes} />} />
              <Route path= '/extinct' element={<Extinct />} />
              <Route path= '/Eco' element={<Eco  Link={Link}/>} />
                  <Route path= '/about' element={<About/>} />
                  <Route path= '/Bio' element={<Bio/>} />
                  <Route path= '/Voice' element={<Voice/>} />
                  <Route path= '/Clim' element={<Clim Link={Link}/>} />
                  <Route path= '/View' element={<View Causes={Causes} Link={Link}/>} />
                  <Route path= '/art1' element={<Art1 Logo={Logo}/>} />
                  <Route path='/Endangered' element={<Endangered Species={Species} />}/>
                <Route path= '*' element={<ERROR />} />
           
                </Route>
                <Route path= '/Search' element={<Sea/>}/>

                <Route path= '/home' element={<Home Slider={Slider} Causes={Causes} Link={Link} FaStream={FaStream} />} />
              </Routes>

              

                </div>
                <Footer FaSearch={FaSearch}  Link={Link}  Logo={Logo}  />

           
      </BrowserRouter>
   
   <div>
   
   </div>
     
  
      </div>
    );
  }
  
  export default Rout;
   