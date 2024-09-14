import React, { useState } from 'react';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import ClassificationModal from './ClassificationModal'; // Import the new modal component

const IAClassificationsButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button 
                onClick={openModal}
                className="p-2 bg-gray-800 text-white rounded shadow-md mr-2 hover:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
            >
                <MdOutlineDocumentScanner className="mr-2" />
                <span>IA Classifications</span>
            </button>
            {isModalOpen && <ClassificationModal closeModal={closeModal} />}
        </div>
    );
};

export default IAClassificationsButton;
