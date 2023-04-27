import React from 'react'
import  './footer.css'; 

function Footer({Link}) {
  
  return (


    <div className='foots'>
    <i className='headed'>ThanNever</i>
      <hr/>
 
    <div className="footer-col">
    

       
     
      <ul className='like'>
      <Link className='link' to='/about'>
              <li><p>ABOUT</p></li>
              </Link>
              <Link className='link' to='/voice'>
              <li><p>contribute</p></li>
              </Link>
              <Link className='link' to='/endangered'>
              <li><p>endangered species</p></li>
              </Link>
              <Link className='link' to='/cos'>
              <li><p>causes of extinction to species</p></li>
              </Link>
              <Link className='link' to='/lines/causes/Habitat%20Loss'>
              <li><p>habitat Loss</p></li>
              </Link>
              <Link className='link' to='/lines/Nature/Ecosystem'>
              <li><p>eco systems</p></li>
              </Link>
              
              <Link className='link' to='/lines/causes/climateChange'>
              <li><p>Climate change</p></li>
              </Link>
              <Link className='link'  to='/lines/Way/How%20to%20limit%20Greenhouse%20Gas%20Emissions'>
              <li><p> how to limit Greenhouse gasses</p></li>
              </Link>
              <Link className='link' to='/lines/way/Understanding%20the%20Human%20Impact%20on%20Nature'>
        <li>Understand human impact</li>
        </Link>
        <Link className='link' to='/way-forward'>
              <li><p>way forward </p></li>
              </Link>
        
       
      </ul>
    
   
  
 

   
  </div>
</div>


    
  );
}

export default Footer