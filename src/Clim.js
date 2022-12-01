import React from 'react'


function Clim({Link}) {
  return (
    <div className='stem'>
        <h4>Climate change</h4>
        <h5> what is climate change?</h5>
        <p>Climate change is the long term shifts in the earths temperature and weather patterns</p>
    <p>For the most part of earths existence these shifts have been natural but since 1800s man's activity
    has been the major cause of these temperature shifts mainly because of industrialization that started during this
    period and still goes on till this day.</p>
<p>
since the industrial revolution humans activities like the burning fossil fuels, including coal and oil,
 have increased greenhouse gas concentrations in our atmosphere which trap and refract heat back on earth causing an extreme rapid increase of temperatures on our planet.</p>
 <p>The increased temperatures have a lot 0f affects on our planet;</p>

    <h6>How will climate change affect life on our planet</h6>
    <p>floods<br/>
    loss of agriculture productivity<br/>
    drought<br/>
    sudden disruptions to ecosystems patterns which leads to loss of species that benefit from the consistent conditions in which they have thrived in for so long <br/></p>
    <Link className='link' to='/home' >
  <p> check out how increased temperatures levels causes these and many more other catastrophic events</p>
   </Link>
   <h4>what me and you should do</h4>
<ul>
    <li>reduce consumption of diary products</li>
    <li> take less </li>
    <li>drive less</li>
  <li>reduce,recycle, reuse</li>
  <li>plant trees</li>
  <li>use less energy</li>
  <li> use public or mass transit more often, walk or bike </li>
  <li>teach people about the effects of their actions on climate change</li>
</ul>
<p> there are a lot of things we can do; check out more</p>

   <h4>what are governments doing</h4>
   <ul>
    <li>investing in renewable energy like Solar,wind energy,hydro etc</li>
    <li>many countries have pledged to reduce <Link className='link' to='/home' >green house gases</Link> exponentially and to reach "NET ZERO" emissions by 2050</li>
    <li>investing in nuclear energy </li>
    <li>setting up regulations to companies and individuals who deal in fossil fuels</li>
    
   </ul>
   <p>check out more</p>
<h4>problems facing </h4>








    <p>And also too much heat that is refracted back to earth by the green house gases in the atmosphere causes glaciers
        to melt which increases sea levels which could possibly cause catastrophic floods
    </p>
<p>
    Too much carbon dioxide in the atmosphere is being absorbed by our oceans, making them more acidic , this 
        degrades the  health of the aquatic ecosystems which could possibly lead to extinctions of a lot of marine 
        species
</p>


    </div>
  )
}

export default Clim