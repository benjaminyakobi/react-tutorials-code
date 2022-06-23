//38+39+40
import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

// static contextType = UserContext //Possible replacement for ComponentE.contextType = UserContext

    render() {
        return (
            <diV>
                Component E context {this.context} {/* another way to display context */}
                <ComponentF />
            </diV>
        )
    }
}

ComponentE.contextType = UserContext //another way to display context

export default ComponentE

//Limitations of ContextType:   1. works with calss components only
//                              2. works with single context
//                              x. for more one single context we've to use the Consumer Component