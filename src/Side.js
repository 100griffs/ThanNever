
import React from 'react';


function Side({Link}) {
  
  return (
   
    <div className='side'> 

            <ul className='like'>

              <Link className='link' to='/home'>
              
              <li><h4>HOME</h4></li>
              </Link>
    
              <Link className='link' to='/voice'>
              
              <li><p>Contribute</p></li>
              </Link>
              <Link className='link' to='/about'>
              <li><p>ABOUT</p></li>
              </Link>

              <Link className='link' to='/view'>
              <li><h4>Nature 101</h4></li>
              </Link>
              <Link className='link' to='/lines/Nature/Our World'>
              <li><p> Our World</p></li>
              </Link>
              <Link className='link' to='/lines/causes/climateChange'>
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
              </Link>
              <Link className='link' to='/than'>
              <li><p> Mass extinctions</p></li>
              </Link>
              <Link className='link' to='/Bio'>
              <li><p> Bio diversity</p> </li>
              </Link>

             
            </ul>
          

  
    </div>
  );
}

export default Side;
