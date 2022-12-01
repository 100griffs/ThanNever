
import React from 'react';


function Side({FaSearch,Link}) {
  
  return (
    <div className='side'> 

            <ul className='slinks'>

              <Link className='link' to='/home'>
              
              <li><h4>HOME</h4></li>
              </Link>
              <Link  className='link'to='/Search'>
              <li><FaSearch/></li>
              </Link>
              <Link className='link' to='/extinct'>
              
              <li><p>Extinct animals</p></li>
              </Link>
              <Link className='link' to='/about'>
              <li><p>ABOUT</p></li>
              </Link>
              <Link className='link' to='/than'>
              <li><p> Mass extinctions</p></li>
              </Link>

              <Link className='link' to='/cos'>
              <li><p> Our impact</p></li>
              </Link>
              <Link className='link' to='/Clim'>
              <li><p>Climate change</p></li>
              </Link>

              <Link  className='link'to='/Way'>
              <li><p> what we should do</p>  </li>
              </Link>

              <Link className='link' to='/Endangered'>
              <li><p> learn about most hurt animals</p>  </li>
              </Link>
              
              <Link className='link' to='/Eco'>
              <li><p> Eco system</p>  </li>
              </Link>
              <Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link>

             
            </ul>
          

    </div> 
  );
}

export default Side;
