import React, { useEffect, useState } from "react";
import{ useParams}  from 'react-router-dom'; 
import axios from "axios";

const Articles=()=>{
    const[Data ,setData]= useState([])

    const{name}=useParams()


    useEffect(()=>{

        
        axios
        
        
           .get(`http://localhost:9000/endangered/${name}`)
            .then(res =>{
        console.log(res)
                setData(res.data)

            })
       .catch(err => {
      
  })

  
    }, [name])

    return(

        <div className="stem">

    <h2>{Data.Title}</h2>
     <img alt="img" className="im" src={Data.img}/>
<div>
    <h4>{Data.About}</h4> 
    <p>{Data.About1}</p> 
    <p>{Data.About2}</p> 
    <p>{Data.About2}</p> 
    </div>

</div>
    )}
export default Articles