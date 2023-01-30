
import Rout from './Rout'
import Species from './Species'
import{FaSearch,FaStream} from 'react-icons/fa'
import Causes from './Causes'
import Top from './Comps/Top'
import { useEffect } from 'react'







const App = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>

       <Rout  Species={Species}  FaSearch={FaSearch} FaStream={FaStream} Causes={Causes} />
     <Top/>
    </div>
  )
}

export default App;