import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";
import { Helmet } from 'react-helmet-async';
import  '../Comps/Lines.css'; 





const Endangered=()=>{


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

        <div className='lines'>
                       <Helmet>
  <title>Thannever | Endangered Species </title>
  <meta name='description' content='learn about some of  the most endangered species according to IUCN red list including tigers,giant pandas, polar bears, tasmanian devil,african penguins,blue whales etc learn about thier history and what we can do help them  '/>
 </Helmet>
                        <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>

            
<h2>Endangered Species</h2>



<p className="text">We live in a world of incredible biodiversity, but sadly, many species are under threat of extinction due to human activities. Endangered species are those that are at risk of disappearing forever, and if we don't take action soon, these amazing creatures may never be seen again. In this article, we'll discuss the causes of endangerment, the importance of preserving endangered species, and what we can do to protect them</p>
<Link to='/view'>
    <button className="button">check out nature 101 </button>
    </Link>
    <Link to='/lines/extinct/Extinction%20of%20Species%20Due%20to%20Human%20Activity'>
    <button className="button">check out extinct species  </button>
    </Link>
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
export default Endangered