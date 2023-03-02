import { Component } from "react";
import "./Bar.css";
import{ linker } from "./Barm";
import { Link } from 'react-router-dom';
import Logo from  './than.svg'


class Bar extends Component{
    state={clicked:false};

    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

     handleLinkClick =()=>{
        this.setState({clicked: false})
    }
    render(){
        return(
            <nav className="NavbarItems">
                <Link className="link" to='./'>
            <h4 className="logo">ThanNever</h4> 
            </Link>
           
            <img className="icon" src={Logo} alt="page's logo"/>
          
             <div className="menu-icons"
                 onClick={this.handleClick}>
                 <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}> </i>
             </div>
     <ul className={this.state.clicked?
     "nav-menu active" :"nav-menu"
     }>
         {linker.map((items,i)=>{
             return(
         <li key={i}>
              <Link to={items.url} className={items.Cname} onClick={this.handleLinkClick}>
                         <i className={items.icon}>  
                         </i>{items.title}
                         </Link> 
         </li> 
             )
         })}
 
     </ul>
         </nav>

        )
    } 
}
export default Bar;