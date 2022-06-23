//34+35
import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    return class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prvState => {
                return { count: prvState.count + incrementNumber }
            })
        }

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props}
            />
        }
    }
    // return WithCounter
}

export default withCounter