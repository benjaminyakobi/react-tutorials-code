//43
import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: "",
             title: "",
             body: ""
        }
    }

    chnageHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    submitHandler = (event) => {
        event.preventDefault() //to avoid page refresh
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {console.log(response)})
        .catch(error => {console.log(error)})
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.chnageHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.chnageHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.chnageHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm