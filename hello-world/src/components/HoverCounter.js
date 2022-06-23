//33+34+35
import React, { Component } from 'react'
import withCounter from './withCounter';

class HoverCounter extends Component {
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
            <div>
                <h2 onMouseOver={incrementCount}>{this.props.name} Hovered {count} Times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
