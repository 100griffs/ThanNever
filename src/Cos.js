import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";





const Cos=()=>{
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

        <div className='stem'>



<h3>causes of Species extinction/endanger</h3>
<p className="text"> By understanding the causes of species extinction and endangerment, we can work to protect and conserve the remaining species on our planet. here are some of them</p>
  
    {Data.map(data=>(
        <div key={data.id} className="viewer">
        <>
    
        <h2>{data.Title}</h2>
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
export default Cos