import React,{Component} from "react";


class Ecx extends Component{ 
    constructor(props){ 
        super( );
        this.state ={
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
        fetch('http://localhost:9000/endangered')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items:json,
               
            });
            console.log(json)

        });
     }
    render (){ 
        var{isLoaded, items} = this.state;
        if(!isLoaded){
            return <div className="stem"><h1>Loading.......</h1></div>
        }
        else{

            return(
                <div className="stem">

                    <ul className="">
                    
                            {items.map(thing => (
                                
                            <li key={thing.id}>
                               <h1>name: {thing.name}</h1> | img: {thing.img}
                            </li>
                           ))}
                    </ul>

                </div>
            )
        }

    }
}
export default Ecx