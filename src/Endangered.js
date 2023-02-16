import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";





const Endangered=()=>{
    const[Data ,setData]= useState([])


    useEffect(()=>{
        axios
        
           .get("http://3.26.179.44:8000/endangered/")
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
<h2>Protecting Endangered Species: What Can We Do?</h2>



<p className="text">We live in a world of incredible biodiversity, but sadly, many species are under threat of extinction due to human activities. Endangered species are those that are at risk of disappearing forever, and if we don't take action soon, these amazing creatures may never be seen again. In this article, we'll discuss the causes of endangerment, the importance of preserving endangered species, and what we can do to protect them</p>
<h4>Causes of Endangerment of species</h4>
<p className="text">There are numerous factors that can lead to a species becoming endangered, including habitat destruction, pollution, overhunting, and climate change. Habitat destruction is a major issue, as it destroys the natural environment of animals and plants, leaving them without the resources they need to survive. <Link className='link' to='/cos'> read more</Link></p>
<h4>The Importance of Preservation</h4>
<p className="text"> It's essential that we preserve endangered species, as they are key components of our natural environment. Each species has an important role to play in maintaining our ecosystems, and without them, many other species could be put in danger. In addition, endangered species are often considered indicators of environmental health, so preserving them is important for understanding how our environment is changing.</p>
<h2 className='text'>some of Endangered Species</h2>
<hr/>
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