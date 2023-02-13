import React, { useEffect, useState } from "react";
import{ useParams,}  from 'react-router-dom'; 
import axios from "axios";

const Lines=()=>{

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
      
    const[Data ,setData]= useState([])


    const{id,from}=useParams()


    useEffect(()=>{

        
        axios
        
        
           .get(`http://localhost:8000/${from}/${id}`)
            .then(res =>{
     
                setData(res.data)

            })
       .catch(err => {
      
  })

  
    }, [id,from])

    return(

        <div className="stem">

    <h1 className="text">{Data.name}</h1>
    <hr/>
     <img alt="img" className="image" src={Data.img}/>
<div>
    <h2 className="text">{Data.about1}</h2> 
    <hr/ >
    <p className='text'>{Data.about2}</p> 
    <p className='text'>{Data.about3}</p> 
    <h4>{Data.first}</h4> 
    <p className='text'>{Data.about4}</p> 
    <h4>{Data.second}</h4> 
    <p className='text'>{Data.about5}</p> 

    <h4>{Data.third}</h4> 
    <p className='text'>{Data.about6}</p> 
    </div>

    <h4>{Data.fourth}</h4> 
    <p className='text'>{Data.about7}</p> 

    <h4>{Data.fifth}</h4> 
    <p className='text'>{Data.about8}</p> 

    <h4>{Data.sixth}</h4> 
    <p className='text'>{Data.about9}</p> 
    <p className='text'>{Data.about10}</p> 
    

</div>
    )}
export default Lines