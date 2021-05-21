import React, {useState} from 'react';
import './App.css';
import ModalPortal from './ModalPortal';
import Modal from './Modal';
import { Button } from 'react-bootstrap';

const App = () => {
  const [openPortal, setOpenPortal] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setOpenPortal(!openPortal)} >
          Open Portal Modal
        </Button>
        <br></br>
        <Button onClick={() => setOpenModal(!openModal)} >
          Open Modal
        </Button>
        
        {/* Modal Portal */}
        <ModalPortal isOpened={openPortal} title="Modal Portal" onClose={() => setOpenPortal(false)} children="Modal renderizado en un portal" />

        {/* Modal */}
        <Modal isOpened={openModal} title="Modal" onClose={() => setOpenModal(false)} children="Modal default" />

      </header>
    </div>
  );
}

export default App;
