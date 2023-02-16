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
    render(){
        return(
            <nav className="NavbarItems">
     
                <h1 className="logo">Than Never</h1> 
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
                 <Link to={items.url} className={items.Cname}>
                       
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