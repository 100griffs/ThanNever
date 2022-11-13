import React from 'react'
import Reader from './Reader';

function art1({Arts}) {
const dark = Arts.find(crazy =>{
    return crazy.id === 1;
    
    
})

console.log(dark)
  return (
    <div className='stem'>
    <Reader
       Title={dark.Title}
       img={dark.img}
       About={dark.About}
       />
       </div>
  )
}

export default art1