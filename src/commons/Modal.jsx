import React from 'react';

const Modal = ({ isOpen, onClose, resumeData }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-[600px]">
        <h2 className="text-xl font-bold">Resume</h2>
        <p>{resumeData}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};
