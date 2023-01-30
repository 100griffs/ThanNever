import React, { useEffect, useState } from "react";
import{ useParams}  from 'react-router-dom'; 
import axios from "axios";

const Card=()=>{
    const[Data ,setData]= useState([])

    const{id}=useParams()


    useEffect(()=>{

        
        axios
        
        
           .get(`http://localhost:9000/causes/${id}`)
            .then(res =>{
                console.log(res)
                setData(res.data)

            })
       .catch(err => {
      
  })

  
    }, [id])

    return(

        <div className='stem'>

<h1>{Data.Title}</h1>
<img alt="img" className="im" src={Data.img}/>
<h1>{Data.About}</h1> </div>
    )}
export default Card