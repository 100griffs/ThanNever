
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Searchbox({ Species,Causes,}) {
  const [query,setQuery] = useState("")
 console.log(query)

  return (

    <div className='list'>
      <div >
    <input type="text" placeholder="Endangered species,extinctions, ecosystems, and more"className='search'
      onChange={(e)=> setQuery(e.target.value)}/>

</div>

<div className='space' >
<div className='sc_1'>
      {Species.filter(call=>call.Title.toLowerCase().includes(query)).map((call,j) =>(
       <Link className='link' to='/Endangered' > 

       <div  key={j} >
        <h4>{call.Title}</h4>
        </div> 
        </Link>
      ))}
</div>



<div className='sc_1'>
      {Causes.filter(cal=>cal.Title.toLowerCase().includes(query )).map((cal,i) =>(

        <Link  className='link' to='/cos' > 
      
        <div key={i}>
          <h4>{cal.Title} </h4>
          
        </div> </Link>
        
      ))}
      </div>
     
    </div>
    <Link to='/Than' >  <h2>extinctions</h2></Link>
     </div>)

}

export default Searchbox ;