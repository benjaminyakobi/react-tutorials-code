//36+37
import React, { Component } from 'react'

class ClickCounterTwo extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prvState => {
    //         return { count: prvState.count + 1 }
    //     })
    // }

    render() {
        const { count, incrementCount } = this.props
        return (
            <button onClick={incrementCount}>Clicked {count} Times</button>
        )
    }
}

export default ClickCounterTwo
