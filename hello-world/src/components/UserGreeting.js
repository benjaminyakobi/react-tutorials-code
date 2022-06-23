//16
import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: false
        }
    }
    

    render() {

        /* Fourth approach - short circuit operator
            used when we want choose between
            something or nothing */
        return this.state.isLoggedin &&  <div>Welcome Benjamin!</div>

        /* Third approach - ternary condition:
            unlike 1st & 2nd approaches,
            this onecan be used inside the jsx
        */
        // return (
        //     this.state.isLoggedin ?
        //     <div>Welcome Benjamin</div> :
        //     <div>Welcome Guest</div>
        // )
        

        /* Second approach - variable */
        // let message
        // if(this.state.isLoggedin){
        //     message = <div>Welcome Benjamin</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        /* First approach */
        // if (this.state.isLoggedin){
        //     return (
        //         <div>Welcome Benjamin</div>
        //     )
        // }else{
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }
    }
}

export default UserGreeting
