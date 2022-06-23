//36+37
import React, { Component } from 'react'

class HoverCounterTwo extends Component {
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
            <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
        )
    }
}

export default HoverCounterTwo
