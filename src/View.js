import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider';
import "./Slider.css";




function view({Causes}) {
  return (
    <div className='view'> 
  
     
   

      
      <Link className='link' to='/home'>
      
      <h3>HOME</h3>
      </Link>
      <Link className='link' to='/extinct'>
      
      <h3>Extinct animals</h3>
      </Link>
      <Link className='link' to='/about'>
      <h3>ABOUT</h3>
      </Link>
      <Link className='link' to='/than'>
   <h3> Mass extinctions</h3>
      </Link>

      <Link className='link' to='/cos'>
      <h3> Our impact</h3>
      </Link>
      <Link className='link' to='/Clim'>
      <h3>Climate change</h3>
      </Link>

      <Link  className='link'to='/Way'>
     <h3> what we should do</h3>
      </Link>

      <Link className='link' to='/Endangered'>
   <h3> learn about most hurt animals</h3>  
      </Link>
      
      <Link className='link' to='/Eco'>
      <h3> Eco system</h3> 
      </Link>
      <Link className='link' to='/Bio'>
  <h3>Bio diversity</h3> 
      </Link>
      <Link className='link' to='/cos'>
<h1> causes of bio diversity loss</h1>
      <Slider Causes={Causes}/>
      </Link>
</div> 
);
 
}

export default view