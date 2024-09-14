import React, { useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axiosClient from '../../../api/axios';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { FadeLoader } from 'react-spinners';

const ClassificationModal = ({ closeModal }) => {
    const [pdfFiles, setPdfFiles] = useState([]);
    const [classificationResult, setClassificationResult] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPdfFiles = async () => {
            try {
                const response = await axiosClient.get('/api/pdf_files');
                console.log(response.data); // Verify the structure

                const pdfFilesData = response.data.documents;
                setPdfFiles(pdfFilesData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching PDF files:', error);
                setLoading(false);
            }
        };
        fetchPdfFiles();
    }, []);

    const handlePdfClick = async (pdf) => {
        console.log(`Classifying PDF ID: ${pdf.id}`);
        try {
            const response = await axiosClient.post('http://localhost:5001/classify', {
                pdf_id: pdf.id,
                pdf_path: pdf.file_path,
                keywords: ["devis", "rapport", "audit"]
            }, {
                withCredentials: true,  // Include credentials in the request
            });
            console.log(response.data); // Verify the structure

            if (response.data.classification) {
                setClassificationResult(response.data.classification);
                console.log('Classification result:', response.data.classification);
            } else {
                console.log('Classification failed.');
            }
        } catch (error) {
            console.error('Error classifying PDF:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <FadeLoader color="gray" size={150} />
            </div>
        );
    }

    if (!Array.isArray(pdfFiles)) {
        return null; // or handle this case appropriately
    }

    return (
        <Transition appear show={true} as={React.Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div>
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                        Classify Documents
                                    </Dialog.Title>
                                    <div className="mt-4 grid grid-cols-3 gap-4">
                                        {pdfFiles.map((pdf) => (
                                            <div
                                                key={pdf.id}
                                                className="border rounded p-2 cursor-pointer"
                                                onClick={() => handlePdfClick(pdf)}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <MdOutlineDocumentScanner className="text-4xl text-gray-600 mb-2" />
                                                    <span className="text-sm text-center">{pdf.filename}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {classificationResult && (
                                        <div className="mt-2 bg-gray-100 p-2 rounded">
                                            <h4 className="text-lg font-medium text-gray-900">Classification Result</h4>
                                            <pre>{classificationResult}</pre>
                                        </div>
                                    )}
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 flex items-center"
                                        >
                                            <IoMdClose className="mr-2" />
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ClassificationModal;
