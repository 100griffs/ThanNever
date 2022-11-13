import React from 'react'
import Cardx from './Cardx'



 const Way = ({Forward}) => {
    const Was = Forward.map(( gg,i)=>{
        return <Cardx key={Forward[i].id} Title={Forward[i].Title} img={Forward[i].img} About={Forward[i].About} />
    })
  return (
    <div className='stem'>
        <h1> What could be the way Forward</h1>


          {Was}


    </div>
  )
}

export default Way;