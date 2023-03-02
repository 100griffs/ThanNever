import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 
import { Helmet } from 'react-helmet-async';

let dream = []

function Searched() {
    
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
 
 
  useEffect(() => {
 
    const urls = [
      "http://localhost:8000/endangered",
      "http://localhost:8000/causes",
      "http://localhost:8000/articles",
      "http://localhost:8000/nature",
      "http://localhost:8000/Way",
      "http://localhost:8000/extinct",
     
    ];
    
    Promise.race(
      urls.map((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((data) => dream.push(...data))
          .catch((error) => console.log("There was a error", error))
      ),
    ).then(() => setResults(dream));
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  };

  const displayedResults = [];

  return (
    <div className="list" htmlFor="search-input">
  
      <input
        type="text"
        name="query"
        value={input}
        id="search"
        placeholder="Search"
        onChange={handleChange}
        className='search' 

      />
      <div className='space' >
              <div className="sc_1" >
                
      {results
        .filter((i) => i.name.toLowerCase().includes(input))
        .map((result, index) => {
          if (!displayedResults.includes(result.name)) {
            displayedResults.push(result.name);
            return (<div key={result.name}>
                     <Helmet>
  <title>thannever | search </title>
  <meta name='description' content='search about endangered species, climate change, politics in environmental crisis causes of extinction in species, how we can help  endangered animals and all topics concerning environment and animals '/>
 </Helmet>
              <div >
                <Link  className='link' to={`/lines/${result.from}/${result.name}`}>
                <h2>{result.name}</h2>
                </Link>
                </div>
                </div>
              
            );
          }
        })}
  
          </div>
              </div>
             
    
  
    <Link to='/view'>
    <button className="button">nature 1o1  </button>
    </Link>
    </div>
   
  );
}

export default Searched