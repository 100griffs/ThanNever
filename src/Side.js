
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
              
              <Link className='link' to='/cos'>
              <li><p>learn about the causes of extinction</p>  </li>
              </Link>
              <Link className='link' to='/lines/Nature/Greenhouse%20Gases'>
              <li><p>green house gases</p> </li>
              </Link>
              
              <Link className='link' to='/lines/Nature/How%20to%20limit%20Greenhouse%20Gas%20Emissions'>
              <li><p> how to limit green house gases </p> </li>
              </Link>
              <Link className='link' to='/lines/Nature/Bio%20Diversity'>
              <li><p> Bio diversity</p> </li>
              </Link>
              <Link className='link' to='/lines/Nature/Ecosystem'>
              <li><p>Eco system</p> </li>
              </Link><Link className='link' to='/Bio'>
              <li><p>ocean acidification</p> </li>
              </Link>
              <Link className='link' to='/lines/Nature/politics%20in%20environment%20crisis'>
              <li><p>politics in nature</p> </li>
              </Link>
              <Link className='link' to='/lines/Nature/Mass%20extinctions'>
              <li><p> Mass extinctions</p></li>
              </Link>
              <Link className='link' to='/lines/causes/Habitat%20Loss'>
              <li><p>Habitat Loss</p> </li>
              </Link>

             
            </ul>
          

  
    </div>
  );
}

export default Side;
