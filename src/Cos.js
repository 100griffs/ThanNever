import React from "react";
import Cardx from "./Cardx";

const Cos =({ Causes }) => {
    const caused = Causes.map((dd,j) => {
        return <Cardx key={Causes[j].id} 
        Title={Causes[j].Title} 
        img={Causes[j].img} 
        About={Causes[j].About} /> 
      })
      return(
        <div className='stem'> 
            <h4>Major Causes of extinctions</h4>
           {caused}
        </div>
      )
    


}
export default Cos;