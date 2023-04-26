import { useState } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className='text-center'>
      <h1 className='text-[32px] font-bold'>Popup Modal</h1>
      <button
        className='bg-red-700 text-white  text-base px-7 py-3 font-bold rounded-md border-none outline-none cursor-pointer'
        onClick={openModal}
      >
        Open Modal
      </button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default App;
