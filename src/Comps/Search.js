import React, { useEffect, useState } from "react";
import{ Link,}  from 'react-router-dom'; 

let dream = []

function Searched() {
    
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
 
 
  useEffect(() => {
 
    const urls = [
      "http://localhost:8000/endangered",
      "http://localhost:8000/causes",
      "http://localhost:8000/articles",
      "http://localhost:8000/Nature",
      "http://localhost:8000/Way",
     
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
            return (
              <div key={result.name}>
                <Link  className='link' to={`/lines/${result.from}/${result.name}`}>
                <h2>{result.name}</h2>
                </Link>
                </div>
              
            );
          }
        })}
          </div>
              </div>
    </div>
  );
}

export default Searched