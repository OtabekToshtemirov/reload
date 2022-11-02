import React, { Component } from 'react';




class Lifecircle extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor is working..")
    }

    componentDidMount(){
        console.log("Component didmount is working//")
    }
    
    render() { 
        console.log("Render is working...");
        return ( 
            <div>

            </div>
         );
    }
}
 
export default Lifecircle;