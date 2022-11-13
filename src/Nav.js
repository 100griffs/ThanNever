
import React from 'react';
import { Link } from 'react-router-dom';







function Nav({Logo,FaSearch,FaStream}) {
  
  return (
    <header> 
  <div className="containerx ">
    <div className='container-nav'>
  <img className='logo' src={Logo} alt='nature in japanese'/>

    <nav>
      <ul >
      <Link className='link' to='/Search'>
              <h4><FaSearch/></h4>
              </Link>
      <Link className='link' to='/home'>
              <h4>HOME</h4>
              </Link>
              <Link className='link' to='/About'>
              <h4>About</h4>
              </Link>  
              <Link className='stream' to='/View'>
              <h4><FaStream/></h4>
              </Link>

      </ul>
    </nav>
  </div>
  </div>



    </header> 
  );
}

export default Nav;
