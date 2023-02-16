import React from 'react'
import  './footer.css'; 

function Footer({FaSearch,Link,Logo}) {
  
  return (<div>


    <div className='foots'>
      <hr className='hr_foot'/>
      <footer className="footer">
<div className="container">
  <div className="row">
    <div className="footer-col">

       
      <h4> who we are</h4>
      <ul className='like'>
        <li>about us</li>
        <li></li>
        <li>privacy policy</li>
        <li>Apis and more</li>
        <li>support</li>
      </ul>
    
    </div>
    
    <div className="footer-col">
    
      <h4>our impact</h4>
      <ul className='like' >
        <li>pollution</li>
        <li>over fishing</li>
        <li>over hunting</li>
        <li>invasive species</li>
        <li>diseases..etc</li>
      </ul>
      
    </div> 
    <div className="footer-col">
    
      <h4>What we can do</h4>
      <ul className='like'>
        <li>Understand human impact</li>
        <li>Recycle,restore and Speak Up.</li>
        <li>Adopt an animal,volunteer and donate</li>
        <li>Help the zoos or aquariums</li>
        <li>support conservation programs..etc</li>
      </ul>
      
    </div>

   
  </div>
</div>
</footer>
</div>
    </div>
  );
}

export default Footer