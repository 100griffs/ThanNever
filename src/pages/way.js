import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import axios from "axios";
import { Helmet } from 'react-helmet-async';





const Way=()=>{


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
        
           .get("http://localhost:8000/way")
            .then(res =>{
              
                setData(res.data)
            })
       .catch(err => {
        
       console.log(err)
  })
    }, [])
         
     

   
   
    return(

        <div className='maison'>
                              <Helmet>
  <title>Thannever | way forward </title>
  <meta name='description' content='learn about how we can help stop animal extinction strategies that we should take to limit green house gases ,helping conservation programs ,helping bird populations,habitat loss,stopping ocean acidification ,pollution,invasive species,The Importance of Recycling and Sustainable Product Use for the Environment etc  '/>
 </Helmet>
            <div id="progressBarContainer">
<div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />

</div>



<h2>Way forward</h2>
<hr/>
<p className="text1"> The world is facing an unprecedented environmental dangers that threatens all lives on Earth. </p>
<p className="text">To effectively address this issues, it is essential that we take meaningful, decisive actions to reduce pollution, conserve energy,protect all species and protect our natural resources. One of the most essential steps is fighting climate change by reducing our carbon emissions. This can be accomplished by transitioning to renewable sources of energy, such as solar and wind, and replacing fossil fuels.<Link className='link' to='/lines/way/How%20to%20limit%20Greenhouse%20Gas%20Emissions'>read more</Link> </p>
<h3>some of the solutions</h3>
<p className="text">We must also prioritize conservation efforts to protect our natural resources and help mitigate the effects of climate change. </p>
  <p className="text"> This includes putting in place regulations to prevent activities such as deforestation, overfishing, and unsustainable farming practices. Furthermore, we must fund and support the conservation and restoration of habitats, including coral reefs, wetlands, and rainforests.</p>
    {Data.map(data=>(
        <div key={data.id} className="viewer">
        <>
    
        <h2>{data.name}</h2>
        <hr/>
        <img className="im" alt="images" src={data.img}/>
        <p className='text'>{data.about2}  <Link className='link' to={`/lines/${data.from}/${data.name}`}>
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
    <button className="button"> nature 101 </button>
    </Link>
    </div>

        </div>
    )
}
export default Way