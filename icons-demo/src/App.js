import React from 'react'
import './App.css';
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'
import { IconContext } from 'react-icons'

//API Documenation: https://react-icons.github.io/react-icons/

function App() {
  return (
    <div className="App">
      <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
        <FaReact color='red' size='5rem'/>
        <FaReact />
        <MdAlarm />
        <MdAlarm color='red' size='5rem'/>
      </IconContext.Provider>
      {/* <FaReact color='purple' size='10rem' /> */}
      {/* <MdAlarm color='red' size='10rem' /> */}
    </div>
  );
}

export default App;
