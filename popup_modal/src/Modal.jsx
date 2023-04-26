import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ setShowModal }) => {
  const modalRef = useRef();

  //close the modal when clicking outside the modal.
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  //Render the modal component in the portal div
  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className='container fixed top-0 left-0 bottom-0 right-0 h-full flex justify-center items-center bg-black/70'
      onClick={closeModal}
    >
      <div className='modal z-[1] w-[350px] h-[220px] bg-white flex items-center justify-center rounded-md relative'>
        <h2
          className='text-2xl font-bold
      '
        >
          This is a Modal
        </h2>
        <button
          className='absolute top-[7px] right-[7px] px-3 py-1 bg-red-700 text-white font-bold border-none outline-none rounded-sm cursor-pointer'
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
