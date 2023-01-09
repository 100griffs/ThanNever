
import React from 'react';
import Slider from './Slider';
import "./Slider.css";
import Line from './Line';
import "./Home.css";
import {useEffect} from 'react';











const Home =({Causes,Link,FaStream}) => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

return(

<div>

<div className='home'>
  <div className='home1'>
      <hr/>
        <h1>Ecosystems</h1>
      <hr/>
      <img className='im1' alt='trees' src='https://youmatter.world/app/uploads/sites/2/2019/01/ecosystem-services-definition-examples.jpg'/>
        
        <h1>Ecosystems</h1>
      <p>an eco system is a biological community where living things interact with each other and with their non living things surroundings and conditions to form a bubble of life<br/> check out</p>
</div>
     <div >
       <hr />
      <h1>green house gasses</h1>
     <hr/>
<div>
<div className='home2'>

<img className='im' alt='trees' src='https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/health4_26_airpollguide_istock_2796602_2400.jpg?itok=n2tBYa7S'/>
<div className='home_onside'>
<h2>Recycle,Restore And Speak Up.</h2>
<p>
14 November 2022 — The UN General Assembly on Monday adopted a resolution that calls for Russia to pay war reparations to Ukraine, as ambassadors met to resume their emergency special session..</p>
</div>
</div>
<Link className='stream' to='/View'>
              <h2><FaStream/></h2>
              </Link>
</div>
<div >
          <div className='home2'>
          <img className='im' alt='trees' src='https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/health4_26_airpollguide_istock_2796602_2400.jpg?itok=n2tBYa7S'/>
          <div className='home_onside'>
          <h2> Supporting conservation programs and adopting animals</h2>
          <p>
          14 November 2022 — The UN General Assembly on Monday adopted a resolution that calls for Russia to pay war reparations to Ukraine, as ambassadors met to resume their emergency special session..</p>
         
          </div>

</div>

</div>

</div>

</div>


<div className='causes_home'>

<Line/>
<h1> causes of bio diversity loss</h1>

</div> 

<div className='home2'>
<div className='side_word'> 
<p > Biodiversity is the term used to describe all the different kinds of species you’ll find in one area or collection of areas—the variety of animals, plants, and even microorganisms like bacteria and their genetic variations plus the ecosystems patterns that make up any given natural environment. <Link to='/Bio' > check out more here </Link></p>
</div> 

<Slider   Causes={Causes}/>


</div>         
</div>

);
}

export default Home;
