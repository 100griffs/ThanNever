
import React from 'react';
import Line from './Line';
import "./Home.css";
import {useEffect} from 'react';
import Card from './Comps/Card'




const Home =({Link}) => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

return(

<div className='maison'>
  <div>
<img className='image' alt='trees' src='https://images.pexels.com/photos/50579/africa-elephant-words-animal-50579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
<p className='text'>
We all share this world and we have a responsibility to protect the environment and its inhabitants. Every living thing on this planet has a right to exist and it is our job to ensure that happens. Animals are some of the most vulnerable members of our planet’s community, and they deserve respect and care from us  
</p>
</div>
<div className='home'>
  <div className='home1'>
      <hr/>
        <h1>Biodiversity</h1>
      <hr/>
      <img className='im1' alt='trees' src='https://youmatter.world/app/uploads/sites/2/2019/01/ecosystem-services-definition-examples.jpg'/>
        
        <h1>Ecosystems</h1>
      <p className='text'>an eco system is a biological community where living things interact with each other and with their non living things surroundings and conditions to form a bubble of life<br/> check out</p>
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
<p className='text'>
 It helps to reduce waste and environmental damage, while also giving wastes a second chance. By taking a stand for the environment, we can help to spread awareness of the importance of protecting our planet.</p>
</div>
</div>
</div>
<div >
          <div className='home2'>
          <img className='im' alt='trees' src='https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
          <div className='home_onside'>
          <h2> Supporting conservation programs and adopting animals</h2>
          <p className='text'>
          Conservation programs are efforts to help endangered species. One way that individuals can help conservation programs is by adopting animals from shelters
.</p>
         
          </div>

</div>

</div>

</div>

</div>


<div className='causes_home'>

<Line/>


</div> 

<div className='home2'>
  <div className='side_word' >
    <Card/>
  </div>
<div className='side_word'> 
<h4> causes of bio diversity loss</h4>
<p className='text' > Biodiversity is the term used to describe all the different kinds of species you’ll find in one area or collection of areas—the variety of animals, plants, and even microorganisms like bacteria and their genetic variations plus the ecosystems patterns that make up any given natural environment. <Link to='/Bio' > check out more here </Link></p>
</div> 
</div> 

<div>
<p className='text'>
We all share this world and we have a responsibility to protect the environment and its inhabitants. Every living thing on this planet has a right to exist and it is our job to ensure that happens. Animals are some of the most vulnerable members of our planet’s community, and they deserve respect and care from us  
</p>
  <div>
<img className='image' alt='trees' src='https://images.pexels.com/photos/4808424/pexels-photo-4808424.jpeg'/>
</div>
</div>

<div className='home2'>
<div className='sidd'> 
<h2>Endangered species</h2>
<p className='text' >
Endangered species are Species that are at risk of becoming extinct,This negative status on these species is caused by a lot of reasons such as habitat destruction, over-hunting, pollution, and climate change. Conservation efforts are necessary to protect these species and to ensure that they survive and thrive in their natural habitats.  we must also take steps to reduce our negative impacts on the environment. This includes reducing carbon emissions, reducing pesticides, and reducing the illegal wildlife trade. By making a conscious effort to be more sustainable and responsible, we can help ensure that endangered species are given a chance to thrive. <Link to='/Bio' > check out more here </Link></p>
</div>
</div>
</div>


);
}

export default Home;


