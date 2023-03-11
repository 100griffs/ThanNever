import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';


const View=({Link})=>{


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
  return (
    <div className='maison'> 
     <Helmet>
  <title>Thannever | Nature 101 </title>
  <meta name='description' content='with this simple short course you can learn about endangered species,politics in environmental crisis, climate change, causes of extinction in species, how we can help  endangered animals,bio diversity, eco systems  and all topics concerning the natural environment and animals to help you understand your position in the natural world and your impact onto it negative or positive '/>
 </Helmet>
 <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
</div>
     
   <h1> Nature 101</h1>
   <hr/>
   <p className='head'>Nature 101 is an introductory course on our natural world and its various components.</p>
   <p className='text'> Through this course, you will learn about the diversity of different species and ecosystems, the impact of human activities on the environment, the effects of climate change, the most vulnerable and endangered animals, sustainable and conservation methods, and the role of politics in nature.</p>
   <p className='text'>By the end of the course, you will have gained an essential understanding of our natural environment and how best to protect and preserve it</p>

   <hr/>

      
      <Link className='link' to='/lines/Nature/Our World'>
      
      <h3>1. Our world</h3>
      <ul>
         <li>introduction to our nature world</li>
      </ul>
      </Link>
      <Link className='link' to='/lines/Nature/Bio%20Diversity'>
      
      <h3>2. Bio Diversity</h3>

      <ul>
         <li>Learn about Biodiversity</li>
         <li>Learn about Biodiversity Loss</li>
         <li>Learn about limiting Biodiversity .etc</li>
      </ul>
      </Link>
      <Link className='link' to='/lines/Nature/Ecosystem'>
      <h3>3. Eco systems</h3>
      <ul>
         <li>Learn about Eco system</li>
         <li>Threats to Ecosystems</li>
         <li>Limiting Threats to Ecosystems .etc</li>
      </ul>

      </Link>
      <Link className='link' to='/cos'>
   <h3>4. causes of biodiversity loss and ecosystem degradation</h3>
   <ul>
         <li>Learn climate change</li>
         <li>invasive species</li>
         <li>Better adapted competition .etc</li>
      </ul>
      </Link>

      <Link className='link' to='/lines/causes/climateChange'>
      <h3>5. Climate change</h3>
      <ul><li>climateChange .etc</li></ul>
      </Link>

      <Link className='link' to='/Endangered'>
   <h3>6. learn about most hurt animals</h3>
   <ul><li>some of the endangered species .etc</li></ul> 
   <ul><li>some of the extinct species .etc</li></ul>   
      </Link>
      

      <Link className='link' to='/lines/Nature/politics%20in%20environment%20crisis'>
  <h3>7. Politics and Nature</h3> 
  <ul><li>politics</li></ul>
      </Link>

      <Link className='link' to='/way-forward'>
      <h3>8. some solution to help the environment and all its inhabitants</h3>
      <ul><li> conservation of animals</li>
      <li> how to limit Greenhouse gasses</li>
      <li> understanding human impact .etc</li>
      </ul> 
      
      </Link>
      <img className='him' alt='unable to get image' src="https://images.unsplash.com/photo-1677269309681-8ac2821d250a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

     

</div> 
);
 
}

export default View