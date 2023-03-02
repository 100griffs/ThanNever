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
        
           .get("http://3.26.179.44:8000/causes")
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
  <title>Thannever | causes of extinction/endanger in animals </title>
  <meta name='description' content='learn about what causes extinction in species, climate change,diseases in animals,lack of genetic diversity, habitat loss,pollution, invasive species ,natural disasters ocean acidification etc  '/>
 </Helmet>
            <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>



<h3>causes of Species extinction/endanger</h3>
<p className="text"> By understanding the causes of species extinction and endangerment, we can work to protect and conserve the remaining species on our planet. here are some of them</p>
  
    {Data.map(data=>(
        <div key={data.id} className="viewer">
        <>
    
        <h2>{data.name}</h2>
        <hr/>
        <img className="im" alt="images" src={data.img}/>
      
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