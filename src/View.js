import React from 'react'


function view({ Link } ) {
  return (
    <div className='stem'> 
  
     
   <h2> Nature 101</h2>

   <hr/>

      
      <Link className='link' to='/lines/Nature/Our World'>
      
      <h3>Our world</h3>
      </Link>
      <Link className='link' to='/extinct'>
      
      <h3>Bio Diversity</h3>
      </Link>
      <Link className='link' to='/about'>
      <h3>Eco systems</h3>
      </Link>
      <Link className='link' to='/than'>
   <h3> our impact</h3>
      </Link>

      <Link className='link' to='/Clim'>
      <h3>Climate change</h3>
      </Link>

      <Link className='link' to='/Endangered'>
   <h3> learn about most hurt animals</h3>  
      </Link>

      <Link className='link' to='/cos'>
      <h3>Sustainability and Conservation</h3>
      </Link>

      <Link  className='link'to='/Way'>
     <h3> what we should do</h3>
      </Link>

      <Link className='link' to='/Bio'>
  <h3>Politics and Nature</h3> 
      </Link>

</div> 
);
 
}

export default view