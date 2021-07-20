import React, {useState} from 'react'
import './App.css';
import Navbar from './Containers/Navbar';
import Modal from './Containers/Modal'
import ToDoList from './Containers/ToDoList'
import { useSpring, animated } from 'react-spring'


const App = () => {

    const [modal, setModal] = useState(false)
    const modalStyle = useSpring({
        opacity: modal ? "100%" : "0%",
        transform: modal ? "scale(1)" : "scale(0)",
        borderRadius: modal ? "0px" : "50%",

        config: {duration: 150},
    })

  return(
    <div className="App" id="lightTheme">
      <Navbar />
      <header>My web app</header>
      <button onClick={() => setModal(true)} className="show-modal">Show Modal</button>
      <animated.div className="modal-wrapper" style={modalStyle}>
        <Modal onClose={() => setModal(false)} show={modal} />
      </animated.div>
      <ToDoList />
    </div>
  );
}

export default App;