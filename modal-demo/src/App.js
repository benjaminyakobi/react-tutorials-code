import React from 'react'
import Modal from 'react-modal'
import './App.css';

//API Documenation: https://github.com/reactjs/react-modal

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>Open modal</button>
      <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} style={
        {
          overlay: {
            background: 'grey'
          },
          content: {
            color: 'orange'
          }
        }
      }>
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close modal</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
