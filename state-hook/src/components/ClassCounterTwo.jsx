//46
import React, { Component } from 'react'

class ClassCounter extends Component {
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

    incrementFive = () => {
        for (let i=0; i<5; i++)
            this.incrementCount()
    }

    resetCount = () => {
        this.setState(prvState => {
            return { count: prvState.count - prvState.count}
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment One</button>
                <button onClick={this.incrementFive}>Increment Five</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        )
    }
}

export default ClassCounter
