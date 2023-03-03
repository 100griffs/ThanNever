import React, { useEffect, useState } from "react";
import{ Link, useParams,}  from 'react-router-dom'; 
import axios from "axios";
import  './Lines.css'; 
import { Helmet } from 'react-helmet-async';

const Lines=()=>{
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


    const{id,from}=useParams()


    useEffect(()=>{

        
        axios
        
        
           .get(`http://3.26.179.44:8000/${from}/${id}`)
            .then(res =>{
     
                setData(res.data)

            })
       .catch(err => {
      
  })

  
    }, [id,from])

     if (Data.length === 0) {
        return ( <div className="lines">
        <h4>Loading…</h4>
        </div>
            )
     
     
     
     }


    return(
        
        
    <div className="lines">
             <Helmet>
  <title>{Data.name} </title>
  <meta name='description' content={Data.about2}/>
 </Helmet>
        {

            
        }
<div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>
    <h2>{Data.name}</h2>
    <hr/>
     <img alt="img" className="image" src={Data.img}/>
<div>
    <h2>{Data.about1}</h2> 
    <hr/ >
    <p className='text'>{Data.about2}</p> 
    <p className='text'>{Data.about3}</p> 
    <h4>{Data.first}</h4> 
    <hr/>
    <p className='text'>{Data.about4}</p> 
 <img alt="img" className="im" src={Data.img2}   />
  
    <h4>{Data.second}</h4> 
    <p className='text'>{Data.about5a}</p> 
    <p className='text'>{Data.about5b}</p> 
    <p className='text'>{Data.about5c}</p> 
    <p className='text'>{Data.about5d}</p> 

    <h4>{Data.third}</h4>
   
    <p className='text'>{Data.about6}</p> 
    <p className='text'>{Data.about6a}</p> 
    </div>
    <h4>{Data.fourth}</h4> 
    <p className='text'>{Data.about7}</p> 
    <p className='text'>{Data.about7a}</p> 
    <p className='text'>{Data.about7b}</p> 
    <p className='text'>{Data.about7c}</p> 
    <p className='text'>{Data.about7d}</p> 



    <h4>{Data.fifth}</h4> 
   
    <p className='text'>{Data.about8}</p> 
    <p className='text'>{Data.about8a}</p> 
    <p className='text'>{Data.about8b}</p> 
    <p className='text'>{Data.about8c}</p> 
    <p className='text'>{Data.about8d}</p>


  <img alt="img" className="im" src={Data.img3}/>
    <h4>{Data.sixth}</h4> 
 
    <p className='text'>{Data.about9}</p> 
    <p className='text'>{Data.about10}</p> 

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
    <button className="button"><p> nature 101  </p></button>
    </Link>
    </div>

</div>
    )}
export default Lines