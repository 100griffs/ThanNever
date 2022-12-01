import React from 'react'
import Reader from './Reader';

function Eco({Arts,Link}) {
const dark = Arts.find(crazy =>{
    return crazy.id === 2;

})

console.log(dark)
  return (
    <div className='stem'>
       <Reader
       Title={dark.Title}
       img={dark.img}

       />
    <div >

<h4>What is an eco system?</h4>
<p></p>An eco system is a the chain of  interactions  between living organisms with their environment to form a biological community in a particular unit of space .
There are two types of ecosystems:
The aquatic (ocean,river,lakes etc)this is the biggest .
The terrestrial (mountains,forest,dessert etc)<p/>

<h4>There are two categories found in any  ecosystem namely;</h4> abiotic and biotic.<br/>
In abiotic category is where we find all non living components that make up an ecosystem from water,soil,minerals,ocean currents,salinity,temperature, etc. Each type of  ecosystem has different abiotic components that make it unique , <br/> 
In biotic category is where we find all the living organisms that make up an ecosystem system,plants,fish,animals,etc
Ecosystems come in different sizes some are too small for our eyes to see, and others are too large like oceans , even the entire earth can be regarded as an ecosystem. 

<h5>Every factor in an ecosystem relays on every other factor, either directly or indirectly.</h5>

<h4>Threats that face ecosystems.</h4>
Since every component in an ecosystem depends on each other ,a destruction or a disturbance in one component could  possibly  cause endangerment or extinction  of the species in the whole ecosystem.
There are  many factors that  threaten the health of ecosystems like earth's quakes,volcanic eruptions,landslides, pollution,ocean acidification,invansive species , deforestation etc 
The main threat to eco systems and to life that lives in them is Global Climate change or Global warming.
<h5>How does climate change affect ecosystems.</h5> 
All ecosystems are influenced by climate in one way ,when the climate changes the ecosystems and organisms that live in them adapt but when climate change happens very rapidly it can overwhelm the ecosystems ability to adapt causing endangerment and <Link to='/Than' >  extinctions</Link>.<br /> 
 rapid climate change can cause species to move away from their natural habitats, how they interact, and when  biological events happen , which could fundamentally change  current ecosystems and food webs again leading to  <Link to='/Endangered'>
    endangerment </Link> or <Link to='/Than' >  extinctions</Link> of species .
<p>Climate change can overwhelm the capacity of ecosystems to mitigate extreme events and constant disturbances, like storms wildfires, floods,drought etc which can easily lead to  endangerment or extinction of species in these ecosystems </p>

<p>Ecosystems are very complex and difficult to model, and our ability to predict accurately how species and ecosystems will respond to the rapid changes in Global climate is limited.
The best thing  we can do is to preserve and conserve the conditions in which these ecosystems and species in them,  have thrived.</p>
<Link  className='link'to='/Way'>check out some of it ways we can achieve this </Link>
<p>All the species on our planet benefit from healthy ecosystems in a lot of ways such as providing us with food,medicine,shelter ,aesthetics and recreations etc 
Since  earth is one giant ecosystem we have to strive to enhance its health ,resilience and capacity to handle threats and to  look for ways to decrease catastrophes that it has to face. For it to be able maintain  the vital functions and processes that are critical to our survival. </p>
<h4>There are alot of ways we can achieve this namely .</h4>
Reduce, reuse,recycle the materials and products we use <br/>
Use of eco friendly products <br/>
Restoring and maintaining  the  diversity of native plant species in your environment.<br/>
Taking care of wild life including plants.<br/>
Save energy and water <br/>

       </div>
       </div>
  )
}

export default Eco