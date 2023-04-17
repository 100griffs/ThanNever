
import React from 'react';
import "./Home.css";
import {useEffect,useState} from 'react';
import Card from './Comps/Card';
import { Helmet } from 'react-helmet-async';
import Quotes from './Comps/Qoutes';
import Latest from './Comps/Latest';








const Home =({Link}) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  

  useEffect(() => {

      let progressBarHandler = () => {
          
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;

          setScroll(scroll);
      }

      window.addEventListener("scroll", progressBarHandler);

      return () => window.removeEventListener("scroll", progressBarHandler);
  });

return(

<div className='maison'>
 <Helmet>
  <title>Thannever | Home</title>
  <meta name='description' content='learn about endangered species, eco systems,habitat loss, climate change, politics in environmental crisis, causes of extinction in species, how we can help  endangered animals and all topics concerning environment and animals '/>
  <meta name="google-site-verification" content="5_PJSNAK4NDWCY7VItOu2NAzJ1S_quwE_LouLkGVgow" />
  <meta name="msvalidate.01" content="1666A3302A4C99D2291ACE9B1BDF9DB7" />


 </Helmet>
<div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>
<div className='heading'>

</div>
  <div>
    <Quotes/>


  
<p className='text'>We all share this world and we have a responsibility to protect the environment and its inhabitants We all share this world and we have a responsibility to protect the environment and its inhabitants.<Link className='link' to='/cos'> learn about what causes bio diversity loss </Link> </p>
<p className='text'>
 Animals are some of the most vulnerable members of our planet’s community, and they deserve respect and care from us. Learn more with our short <Link className='link' to='/view'>Nature 1o1</Link> </p>
 <Link to='/view'>
<img className='image' alt='trees' src='https://images.pexels.com/photos/50579/africa-elephant-words-animal-50579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
</Link>
<p className='text'>Learn and get a basic understanding of what the problem is and how we can confront and overcome the problem of extinction and loss of Bio diversity on our planet. start now <Link className='link' to='/lines/Nature/Our World'>our world</Link>
</p>

<hr/>

<h1>top storeies</h1>
<hr/>
<div className='stories'><Latest/></div>
<p className='text'>Humans have been driving species to extinction for centuries, with devastating consequences for the environment. From deforestation to poaching to climate change, humans are the primary cause of species becoming extinct. <Link className='link' to='/lines/extinct/Extinction%20of%20Species%20Due%20to%20Human%20Activity'>Extinction of Species Due to Human Activity read more</Link></p>

<Link to='/lines/Stories/5%20most%20endangered%20forests'>
<img className='image' alt='trees' src='https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
</Link>
<p className='text'> Forests are one of the most important resources that we have on our planet, providing habitat for countless species of plants and animals, and playing a crucial role in regulating the Earth's climate. Unfortunately, many of the world's forests are under threat from deforestation, climate change, and other human activities. In this blog post, we will be discussing the five most endangered forests in the world in 2023.<Link className='link' to='/lines/Stories/5%20most%20endangered%20forests'> learn more</Link></p>

</div>


<div className='home'>
  <div className='home1'>
      <hr/>
        <h1>Biodiversity</h1>
 <Link className='link' to='/lines/Nature/Bio%20Diversity'>read more</Link>
      <hr/>
      <Link className='link' to='/lines/Nature/Ecosystem'>
      <img className='im1' alt='trees' src='https://cdn.pixabay.com/photo/2017/09/07/04/02/jaguar-2723827_960_720.jpg'/>
      </Link>
        <h1>Ecosystems</h1>
      <p className='text'>an eco system is a biological community where living things interact with each other and with their non living things surroundings and conditions to form a bubble of life. <Link className='link' to='/lines/Nature/Ecosystem'>read more</Link></p>
</div>
     <div >
       <hr />
       
      <h1>green house gasses</h1>
      <Link className='link' to='/lines/Nature/Greenhouse%20Gases'>read more</Link>

     <hr/>
<div>
<div className='home2'>
<Link  className='link' to='/lines/way/The%20Importance%20of%20Recycling%20and%20Sustainable%20Product%20Use%20for%20the%20Environment'>
<img className='im' alt='trees' src='https://images.pexels.com/photos/9800006/pexels-photo-9800006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
</Link>
<div className='home_onside'>
<h2>Recycling, and sustainability.</h2>
<p className='text'>
 It helps to reduce waste and environmental damage, while also giving wastes a second chance. <Link  className='link' to='/lines/way/The%20Importance%20of%20Recycling%20and%20Sustainable%20Product%20Use%20for%20the%20Environment'>read more</Link></p>
</div>
</div>
</div>
<div >
          <div className='home2'>
          <Link  className='link' to='/lines/way/Conservation%20Programs'>
          <img className='im' alt='trees' src='https://images.pexels.com/photos/730539/pexels-photo-730539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
          </Link>
          <div className='home_onside'>
          <h2> Supporting conservation programs and adopting animals</h2>
          <p className='text'>
          Conservation programs are efforts to help endangered species. One way that individuals can help conservation programs is by adopting animals from shelters. <Link  className='link' to='/lines/way/Conservation%20Programs'>read more</Link>
.</p>
         
          </div>

</div>

</div>

</div>

</div>


<div className='causes_home'>

<hr className='line'/>


</div> 

<div className='home2'>
  <div className='side_word' >
    <Card/>
    <p className="text"> <Link className='link' to='/endangered'>read more on endangered species</Link></p>
  </div>
<div className='side_word'> 
<h4> causes of bio diversity loss</h4>
<hr/>
<p className='text1' > Biodiversity is the term used to describe all the different kinds of species you’ll find in one area or collection of areas—the variety of animals, plants, and even microorganisms like bacteria and their genetic variations plus the ecosystems patterns that make up any given natural environment.And any loss of those environmental components is what "biodiversity loss" is <Link className='link' to='/lines/Nature/Bio%20Diversity' > read more </Link></p>
</div> 
</div> 

<div>
<p className='text'>
We all share this world and we have a responsibility to protect the environment and its inhabitants. Every living thing on this planet has a right to exist and it is our job to ensure that happens. Animals are some of the most vulnerable members of our planet’s community, and they deserve respect and care from us. <Link className='link' to='/way-forward'>learn more about how we can help animals </Link> 
</p>
  <div>
<img className='image' alt='trees' src='https://images.unsplash.com/photo-1588508107117-227d4ab6b751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80'/>
</div>
</div>

<div className='home2'>
<div className='sidd'> 
<h2>Endangered species</h2>
<p className='text' >
Endangered species are Species that are at risk of becoming extinct,This negative status on these species is caused by a lot of reasons such as habitat destruction, over-hunting, pollution, and climate change. <Link className='link' to='/endangered'>Endangered species</Link> </p>
<p className='text'>Conservation efforts are necessary to protect these species and to ensure that they survive and thrive in their natural habitats.  we must also take steps to reduce our negative impacts on the environment. This includes reducing carbon emissions, reducing pesticides, and reducing the illegal wildlife trade. By making a conscious effort to be more sustainable and responsible, we can help ensure that endangered species are given a chance to thrive. <Link className='link' to='/endangered' > check out more here </Link></p>



<div className='home2'>
  <div className='side_word' >
  <img className="image" alt='trees' src='https://images.pexels.com/photos/7023562/pexels-photo-7023562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
  </div>
<div className='side_word'> 
<h4> habitat Loss</h4>
<hr/>
<p className='text1' > Habitat loss is a major problem facing the world today. As humans expand their settlements and develop land for industrial or agricultural purposes, wildlife habitats are diminishing. This has devastating effects on many species, leading to population decline, species extinction, and fragmentation of habitats. <Link className='link' to='/lines/causes/Habitat%20Loss' > check out more here </Link></p>
<img className='image' alt='' src='https://images.unsplash.com/photo-1676625195945-0b12142742f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'/>
<div className="buttons_box">
    <Link to='/endangered'>
    <button className="button">endangered species</button>
    </Link>
    <Link to='/cos'>
    <button className="button" >causes of bio diversity loss</button>
    </Link>
    <Link to='/way-forward'>
    <button className="button" >way forward</button>
    </Link>
    <Link to='/view'>
    <button className="button"> nature 101  </button>
    </Link>
    </div>
</div> 



</div> 
</div>


</div>



</div>




);
}

export default Home;


