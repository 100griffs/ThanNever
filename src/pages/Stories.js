import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import  '../Comps/Lines.css'; 






const Cos=()=>{


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
    const[Data ,setData]= useState([])


    useEffect(()=>{
        axios
        
           .get("https://tan-blushing-swallow.cyclic.app/Stories")
            .then(res =>{
              
                setData(res.data)
            })
       .catch(err => {
        
       console.log(err)
  })
    }, [])
         
     

   
   
    return(

        <div className='lines'>
              <Helmet>
  <title>Thannever | Stories,news, and all new things in ecology and environment </title>
  <meta name='description' content='learn about Carbon Management, Green Energy, biodiversity,climate,sustainability,ocean acidification ,overfishing ,new things in ecology and conservation programs,deforestation, Environment Conservation, Water Conservation and Energy Efficiency.   '/>
 </Helmet>
            <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>



<h3>New stories </h3>
<p className="text"> learn about all the interesting stories and sad stories concerning our environment,animals etc</p>
  
    {Data.map(data=>(
        <div key={data.id} className="viewer">
        <>
    
        <h2>{data.name}</h2>
        <hr/>
        <Link className='link' to={`/lines/${data.from}/${data.name}`}>
        <img className="im" alt="images" src={data.img}/>
        </Link>
        <p className='text'>{data.about2}    <Link className='link' to={`/lines/${data.from}/${data.name}`}>
        read more
    </Link> </p>
        </>
        </div>
    ))}
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
    <button className="button">nature 101  </button>
    </Link>
    </div>
 

        </div>
    )
}
export default Cos