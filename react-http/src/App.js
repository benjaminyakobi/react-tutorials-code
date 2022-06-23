import './App.css';
import React, { Component } from 'react'
import PostList from './components/PostList';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 43 */}
        <PostForm />
        {/* 41+42 */}
        {/* <PostList /> */}
      </div>
    )
  }
}

export default App;
