import React from 'react'
import Rout from './Rout'
import Species from './Species'
import{FaSearch,FaStream} from 'react-icons/fa'
import Causes from './Causes'
import Top from './Comps/Top'



const App = () => {
  return (
    <div>
       <Rout  Species={Species}  FaSearch={FaSearch} FaStream={FaStream} Causes={Causes} />
     <Top/>
    </div>
  )
}

export default App;