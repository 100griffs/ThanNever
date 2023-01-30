import React, { useEffect, useState } from "react";
import{ useParams}  from 'react-router-dom'; 
import axios from "axios";

const Lines=()=>{
    const[Data ,setData]= useState([])

    const{id}=useParams()


    useEffect(()=>{

        
        axios
        
        
           .get(`http://localhost:9000/endangered/${id}`)
            .then(res =>{
        
                setData(res.data)

            })
       .catch(err => {
      
  })

  
    }, [id])

    return(

        <div className="stem">

    <h1>{Data.name}</h1>
     <img alt="img" className="im" src={Data.img}/>
<div>
    <p>{Data.About}</p> 
    <p>{Data.About1}</p> 
    <p>{Data.About2}</p> 
    <p>{Data.About2}</p> 
    </div>

</div>
    )}
export default Lines