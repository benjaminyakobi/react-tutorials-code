//37
import React, { Component } from 'react'

class CounterTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prvState => {
            return { count: prvState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                {/* First variation with render ---> see changes in App.js */}
                {this.props.render(this.state.count, this.incrementCount)} 
                
                {/* Second variation with children ---> see changes in App.js */}
                {/* {this.props.children(this.state.count, this.incrementCount)}  */}
                
            </div>
        )
    }
}

export default CounterTwo
