
import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import{ Link,}  from 'react-router-dom'; 


function About() {

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
        <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>
        <h1>ThanNever</h1>
        <Helmet>
  <title>Thannever | about us</title>
  <meta name='description' content=' ThanNever is a website dedicated to raising awareness and helping to protect endangered animals and environment. It provides news, articles, and resources on topics such as animal conservation, global warming, climate change, and sustainability. '/>
 </Helmet>
        <p className='text'>ThanNever is a website dedicated to raising awareness,Teaching and helping to protect endangered animals and environment. It provides news, articles, and resources on topics such as animal conservation, global warming, climate change, and sustainability.</p>
        <p className='text'>The creation of ThanNever is driven by the passion of its founder, who believes that everyone has a responsibility to protect the planet and its inhabitants.  </p>
       <p className='text'>With ThanNever, we hope to motivate people to take meaningful action in order to make a positive change. Everyone is welcome to join the cause, and help make the world a better and safer place.</p>
       <p className='text'> find us here :thannever.com@gmail.com  </p>
      <img className="him" alt="no img" src="https://images.unsplash.com/photo-1516642369279-74481a67f24f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
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
    <button className="button"> nature 101</button>
    </Link>
    </div>
     
       </div>
    );
  }
  
  export default About;
  