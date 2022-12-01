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
        fetch('https://100griffs.github.io/animal.json')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items:json,
            });

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

                    <ul>
                            {items.map(thing => (
                                
                            <li key={thing.id}>
                               name: {thing.name} | status: {thing.status}
                            </li>
                           ))}
                    </ul>

                </div>
            )
        }

    }
}
export default Ecx