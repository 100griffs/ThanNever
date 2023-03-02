import React from "react";



function Top(){
  //function that scrolls up on the page with its styles...griff
  return(
          <button
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}
            style={{
              position: 'fixed',
              padding: '0.5rem 1rem',
              fontSize: '20px',
              bottom: '30px',
              right: '40px',
              backgroundColor: '#0C9',
              color: '#fff',
              textAlign: 'center',
            }}
      >
       To top
      </button>

  )
}


export default Top;