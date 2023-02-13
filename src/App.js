
import Rout from './Rout'
import Top from './Comps/Top'
import { useEffect } from 'react'







const App = () => {
  useEffect(() => {
    //  scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
       <Rout />
     <Top/>
    </div>
  )
}

export default App;