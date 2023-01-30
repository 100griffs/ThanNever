import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";




const Ecx=()=>{
    const[Data ,setData]= useState([])


    useEffect(()=>{
        axios
        
           .get("http://localhost:9000/endangered/")
            .then(res =>{
              
                setData(res.data)
            })
       .catch(err => {
       console.log(err)
  })
    }, [])
          
     
   
    return(

        <div>


{console.log(Data)}
  
    {Data.map(data=>(
        <div className="stem">
        <>
     <Link to={`/lines/${data.name}`}>
        <h2>{data.name}</h2>
        <img className="im" alt="images" src={data.img}/>
    </Link> 
        </>
        </div>
      
    ))}
 

        </div>
    )
}
export default Ecx