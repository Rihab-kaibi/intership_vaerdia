import React, { useState, useEffect } from "react";
import axiosClient from "../../../api/axios";
import { FadeLoader } from "react-spinners";
import { MdOutlineDocumentScanner } from "react-icons/md";

const Client_Folders = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ocrResults, setOcrResults] = useState([]);

  const handleScanClick = async () => {
    try {
      const response = await axiosClient.post("/api/scan-all-pdfs");
      setOcrResults(response.data.results);
    } catch (error) {
      console.error("Error performing OCR scan:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/api/pdfs-with-images");
        setPdfFiles(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FadeLoader color="gray" size={150} />
      </div>
    );
  }

  return (
    <div className="bg-white p-8">
      <div className="flex justify-end mb-4">
      </div>
     
    </div>
  );
};

export default Client_Folders;
