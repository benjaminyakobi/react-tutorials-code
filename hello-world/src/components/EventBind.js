// 14/77
import React, { Component } from 'react'

class EventBind extends Component {

constructor(props) {
    super(props)

    this.state = {
         msg : 'Hello'
    }

    {/* Third approach */}
    this.clickHandler = this.clickHandler.bind(this)

}

clickHandler(){
    if (this.state.msg == 'Hello')
        this.setState({
            msg : 'Goodbye'
        })
    else
        this.setState({
            msg : 'Hello'
        })
}

    render() {
        return (
            <div>
            <div>{this.state.msg}</div>
            {/* First approach - bad performance */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            {/* Second approach - bad performance , easiest way to pass parameters*/}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}

            {/* Third approach - suggested by react documentations*/}
                <button onClick={this.clickHandler}>Click</button>
            
            {/* Fourth approach in the video 10:00~ - experimantal feature*/}
            </div>
        )
    }
}

export default EventBind
