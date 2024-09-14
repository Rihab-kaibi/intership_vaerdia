import React, { useState, useEffect } from "react";
import axiosClient from "../../../api/axios";
import { FaRegTrashAlt, FaFileAlt, FaFolder } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import ConfirmationDialog from "../../Admin_pages/ClientManagementFolder/ConfirmationDialog";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoMdQrScanner } from "react-icons/io";
import ImageModal from "./ImageModal";  // Import the ImageModal component
import ControlSidebar from "./ControlSidebar";  // Import the ControlSidebar component

const DocumentsPage = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [folderNames, setFolderNames] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  const [fileToDelete, setFileToDelete] = useState(null);
  const [expandedPdf, setExpandedPdf] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrResults, setOcrResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

  useEffect(() => {
    const fetchPdfFiles = async () => {
      setLoading(true);  // Set loading to true when the request starts
      try {
        const response = await axiosClient.get("/api/pdfs-with-images");
        setPdfFiles(response.data);
      } catch (error) {
        console.error("Error fetching PDF files:", error);
      } finally {
        setLoading(false);  // Ensure loading is set to false both on success and failure
      }
    };
  
    fetchPdfFiles();  // Execute the function to fetch PDF files
  }, []);  // Empty dependency array means this effect runs only once after the component mounts
  

  useEffect(() => {
    const fetchFolderName = async (folderId) => {
      try {
        const response = await axiosClient.get(`/api/folders/${folderId}`);
        const folderName = response.data.name;
        setFolderNames((prevState) => ({
          ...prevState,
          [folderId]: folderName,
        }));
      } catch (error) {
        console.error("Error fetching folder name:", error);
        setFolderNames((prevState) => ({
          ...prevState,
          [folderId]: "Unknown Folder",
        }));
      }
    };

    pdfFiles.forEach((pdf) => {
      fetchFolderName(pdf.folder_id);
    });
  }, [pdfFiles]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosClient.get("/api/categories");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleDeleteFile = async (id) => {
    try {
      await axiosClient.delete(`/api/pdf_files/${id}`);
      setPdfFiles(pdfFiles.filter((pdf) => pdf.id !== id));
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  const handleConfirmDelete = () => {
    if (fileToDelete) {
      handleDeleteFile(fileToDelete);
      setFileToDelete(null);
    }
  };

  const handleOpenConfirmationDialog = (id) => {
    setFileToDelete(id);
  };

  const toggleExpandPdf = (pdfId) => {
    setExpandedPdf(expandedPdf === pdfId ? null : pdfId);
    setSelectedCategory(null); // Reset selected category
    setSelectedPage(null); // Reset selected page
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleScanClick = async () => {
    if (!selectedCategory || !selectedPage) {
      alert("Please select a category and a page.");
      return;
    }

    try {
      const response = await axiosClient.post(`/api/scan-page`, {
        imageId: selectedPage,
        categoryId: selectedCategory,
      });
      setOcrResults(response.data.results);
    } catch (error) {
      console.error("Error performing OCR scan:", error);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pdfFiles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Documents</h1>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Document Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Folder Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Files Classifications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Uploaded
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((pdf) => (
              <React.Fragment key={pdf.id}>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">{pdf.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <FaFileAlt className="mr-2 text-gray-700" />
                    {pdf.filename}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap items-center">
                    <div className="flex items-center">
                      <FaFolder className="mr-2 text-gray-700" />
                      {folderNames[pdf.folder_id]}
                    </div>
                  </td>
                  <td> <button className=" rounded-full bg-gray-300  px-4 py-1 ">{pdf.file_data} </button></td>
                  <td className="px-6 py-4 whitespace-nowrap">{pdf.updated_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleOpenConfirmationDialog(pdf.id)}
                      className="p-2 bg-gray-800 text-white rounded-full shadow-md mr-2 hover:bg-red-700 focus:ring-2"
                    >
                      <FaRegTrashAlt />
                    </button>
                    <button
                      onClick={() => toggleExpandPdf(pdf.id)}
                      className="p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-blue-700 focus:ring-2"
                    >
                      <MdOutlineDocumentScanner />
                    </button>
                    <button
                      onClick={() => handleScanClick(pdf.id)}
                      className="p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-green-700 focus:ring-2 ml-2"
                    >
                     <IoMdQrScanner />
                    </button>
                  </td>
                </tr>
                {expandedPdf === pdf.id && (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 bg-gray-50">
                      <div className="ml-8">
                        <h4 className="text-lg font-medium text-gray-900">Pages</h4>
                        <ControlSidebar
                          categories={categories}
                          selectedCategory={selectedCategory}
                          setSelectedCategory={setSelectedCategory}
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                          pages={pdf.images}
                          handleScanClick={handleScanClick}
                        />
                        <div className="grid grid-cols-3 gap-4">
                          {pdf.images.map((image) => (
                            <div
                              key={image.id}
                              className="bg-gray-100 p-4 rounded-lg text-center cursor-pointer"
                              onClick={() => handleImageClick(image)}
                            >
                              <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/${image.path}`}
                                alt={`Page ${image.page_number}`}
                                className="mx-auto mb-2"
                              />
                              <span className="text-sm">Page {image.page_number}</span>
                            </div>
                          ))}
                        </div>
                      
                        <div className="mt-4">
                          <h4 className="text-lg font-medium text-gray-900">Extracted Information:</h4>
                          {ocrResults.length > 0 &&
                            ocrResults.map((result) => (
                              <div key={result.page_number} className="mt-2">
                                <h5 className="text-md font-semibold">Page {result.page_number}</h5>
                                <p>{result.text}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <nav className="flex justify-center mt-4" aria-label="Pagination">
        <ul className="flex">
          {Array.from({ length: Math.ceil(pdfFiles.length / itemsPerPage) }, (_, i) => (
            <li key={i}>
              <button
                onClick={() => paginate(i + 1)}
                className={`px-3 py-1 rounded-md text-sm font-medium focus:outline-none ${
                  currentPage === i + 1 ? "bg-gray-200 text-gray-800" : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {fileToDelete && (
        <ConfirmationDialog
          message="Are you sure you want to delete this file?"
          onConfirm={handleConfirmDelete}
          onCancel={() => setFileToDelete(null)}
        />
      )}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          closeModal={closeImageModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default DocumentsPage;
