import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.prop = {
            isLoggedIn: false,
        }
    }
    render(){
        const status = "";
        if (this.prop.isLoggedIn == True){
            status = "in";
        } else{ status ="out"}
        return(
            <div>
                <h1>You are currently logged {this.isLoggedIn}</h1>
            </div>
        )
    }
}

export default App