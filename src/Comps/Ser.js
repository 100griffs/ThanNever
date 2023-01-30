

import React, { useState, useEffect } from "react"
import{ Link,}  from 'react-router-dom'; 

import axios from "axios"; 

function Search() {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
     const [loading, setLoading] = useState(false);

     const [posts, setPosts] = useState([]);

      const [searchTitle, setSearchTitle] = useState(""); 


      useEffect(() => { const loadPosts = async () => { 
        setLoading(true); 

        const response = await axios.get("http://localhost:9000/search"); 

        setPosts(response.data); setLoading(false); }; loadPosts(); }, []); 

        return ( 
      
    <div className='list'>
        <h3>Search Filter</h3> 

        <input type="text"
placeholder="search about Endangered species,extinctions, ecosystems, and more" className='search' 
 onChange={(e) => setSearchTitle(e.target.value)} /> 


<div className='space' >

<div className="sc_1">

        {loading ? ( <h4>Loading ...</h4> ) : ( posts.filter((value) =>
        { if (searchTitle === "") 

         {return value; }
        
        else if (value.Title ||  value.name.toLowerCase().includes(searchTitle.toLowerCase()) ) 

        { return value; } 
        
      }).map((item) => 
<Link  className='link' to={`/lines/${item.name}`}>
<div>
        <h5  key={item.id}>
          {item.name}
          </h5>
          </div>
</Link> 


         
        ) )}
        </div>
       
        </div>
        <Link to='/Than' >  <h2>mass extinctions</h2></Link>
         </div>
         
        
        
        
        );
      
      
      }
         export default Search;
