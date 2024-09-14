import React, { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import axiosClient from "../../api/axios";
import { Button } from "@/components/ui/button";

const VerificationModal = ({ isOpen, closeModal, selectedFile, images }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [pdfData, setPdfData] = useState([]);
  const [verificationResults, setVerificationResults] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      axiosClient
        .get("/api/categories")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });

      axiosClient
        .get("/api/pdf_files")
        .then((response) => {
          if (Array.isArray(response.data)) {
            setPdfData(response.data);
          } else {
            console.error("Expected an array but got:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching PDF data:", error);
        });
    }
  }, [isOpen]);

  const handleCategoryChange = (pdfId, imageId, categoryId) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [pdfId]: {
        ...prev[pdfId],
        [imageId]: categoryId,
      },
    }));
  };

  const handleVerification = () => {
    setLoading(true);

    const verificationData = Object.keys(selectedCategory).map((pdfId) => ({
      pdfId,
      images: Object.keys(selectedCategory[pdfId]).map((imageId) => ({
        imageId,
        categoryId: selectedCategory[pdfId][imageId],
      })),
    }));

    axiosClient
      .post("/verify", { verificationData })
      .then((response) => {
        setVerificationResults(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error verifying documents:", error);
        setLoading(false);
      });
  };

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
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
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Verification Modal
                </Dialog.Title>
                <div className="mt-4">
                  <Button
                    type="button"
                    onClick={handleVerification}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Start Verification"}
                  </Button>

                  <div className="mt-4">
                    {Array.isArray(pdfData) ? (
                      pdfData.map((pdf) => (
                        <div key={pdf.id} className="mb-4">
                          <h4 className="text-lg font-medium text-gray-900">
                            {pdf.filename}
                          </h4>
                          <div className="ml-4">
                            {pdf.images &&
                              pdf.images.map((image) => (
                                <div key={image.id} className="mb-2">
                                  <p>Image ID: {image.id}</p>
                                  <div className="flex items-center">
                                    <select
                                      value={
                                        selectedCategory[pdf.id] &&
                                        selectedCategory[pdf.id][image.id]
                                          ? selectedCategory[pdf.id][image.id]
                                          : ""
                                      }
                                      onChange={(e) =>
                                        handleCategoryChange(
                                          pdf.id,
                                          image.id,
                                          e.target.value
                                        )
                                      }
                                      className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 mr-2"
                                    >
                                      <option value="">
                                        Select Category Type
                                      </option>
                                      {categories.map((category) => (
                                        <option
                                          key={category.id}
                                          value={category.id}
                                        >
                                          {category.name}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>Error: PDF data is not an array.</p>
                    )}
                  </div>

                  <div className="mt-4">
                    {Object.keys(verificationResults).length > 0 && (
                      <div>
                        {pdfData.map((pdf) => (
                          <div key={pdf.id} className="mb-4">
                            <h4 className="text-lg font-medium text-gray-900">
                              {pdf.filename}
                            </h4>
                            <div className="ml-4">
                              {verificationResults[pdf.id]?.map((result) => (
                                <div
                                  key={result.image_id}
                                  className={`p-2 border rounded-md ${
                                    result.results.some((r) => r.isMatch)
                                      ? "bg-green-100"
                                      : "bg-red-100"
                                  }`}
                                >
                                  <p>Image ID: {result.image_id}</p>
                                  {result.results.map((r) => (
                                    <div key={r.box_id}>
                                      <p>Box ID: {r.box_id}</p>
                                      <p>Expected Text: {r.expected_text}</p>
                                      <p>Extracted Text: {r.extracted_text}</p>
                                      <p>
                                        Match Percentage:{" "}
                                        {r.match_percentage.toFixed(2)}%
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    type="button"
                    onClick={closeModal}
                    className="bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                  >
                    Close
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VerificationModal;
