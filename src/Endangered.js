import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";





const Endangered=()=>{
    const[Data ,setData]= useState([])


    useEffect(()=>{
        axios
        
           .get("http://localhost:8000/endangered/")
            .then(res =>{
              
                setData(res.data)
                console.log(res)
            })
       .catch(err => {
        
       console.log(err)
  })
    }, [])
         
     

   
   
    return(

        <div className='stem'>



<h2 className='text'>Endangered Species</h2>
  
    {Data.map(data=>(
        <div key={data.id} className="viewer">
        <>
    
        <h1>{data.name}</h1>
        <img className="im" alt="images" src={data.img}/>
        <p className='text'>{data.about2}</p>
        <Link to={`/lines/${data.from}/${data.name}`}>
        <p className='text'>read more</p>
    </Link> 
        </>
        </div>
    ))}
 

        </div>
    )
}
export default Endangered