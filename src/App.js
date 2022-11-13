import React from 'react'
import Rout from './Rout'
import Species from './Species'
import{FaSearch,FaStream} from 'react-icons/fa'
import Causes from './Causes'



const App = () => {
  return (
    <div>
       <Rout  Species={Species}  FaSearch={FaSearch} FaStream={FaStream} Causes={Causes} />
     
    </div>
  )
}

export default App;