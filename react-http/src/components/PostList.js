// 41+42
import React, { Component } from 'react'
import axios from 'axios'

//Flow:
// 1. construcor
// 2. render() -> list is still empty so nothing will be displayed
// 3. componentDidMount -> success: posts's state changed
//  3.1 render() again -> re-render the component and display the list

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMessage: ""
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMessage: 'Error retreiving data'})
        })
    }

    render() {
        const { posts, errorMessage } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ? 
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {errorMessage ? <div>{errorMessage}</div> : null}
            </div>
        )
    }
}

export default PostList
