//modal verfication de la page de document
import  { useState, useRef, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Tesseract from "tesseract.js";
import leven from "leven";
import axiosClient from "../../../api/axios";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const ImageModal = ({ isOpen, closeModal, image }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [segmentationZones, setSegmentationZones] = useState([]);
  const [ocrResults, setOcrResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalBgColor, setModalBgColor] = useState("bg-gray-100");
  const imageCanvasRef = useRef(null);
  const [imageScale, setImageScale] = useState(1);

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
    }
  }, [isOpen]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    axiosClient
      .get(`/api/boxes/${categoryId}`)
      .then((response) => {
        console.log("Fetched segmentation zones:", response.data);
        setSegmentationZones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching segmentation zones:", error);
      });
  };

  const performOCR = (blob, zone) => {
    return new Promise((resolve) => {
      Tesseract.recognize(blob, "eng", {
        logger: (m) => console.log(m),
      }).then(({ data: { text } }) => {
        console.log(`OCR result for zone ${zone.id}: ${text}`);
        const matchPercentage = calculateMatchPercentage(zone.text, text);
        resolve({
          zoneId: zone.id,
          zoneText: zone.text,
          extractedText: text,
          matchPercentage,
          isMatch: matchPercentage >= 85,
        });
      });
    });
  };

  const calculateMatchPercentage = (expectedText, extractedText) => {
    const distance = leven(expectedText, extractedText || "");
    const maxLength = Math.max(expectedText.length, (extractedText || "").length);
    return ((maxLength - distance) / maxLength) * 100;
  };

  const handleScanZone = (zone, imageBlobUrl) => {
    const canvas = imageCanvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageBlobUrl;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      const { x, y, width, height } = zone;
      const imageData = ctx.getImageData(x, y, width, height);
      const tempCanvas = document.createElement("canvas");
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext("2d");
      tempCtx.putImageData(imageData, 0, 0);

      tempCanvas.toBlob((blob) => {
        if (!blob) {
          console.error("Failed to create blob from canvas");
          return;
        }
        console.log(`Scanning zone ${zone.id} with blob size: ${blob.size}`);
        performOCR(blob, zone).then((ocrResult) => {
          console.log(`OCR result: ${ocrResult}`);
          setOcrResults((prevResults) => [...prevResults, ocrResult]);
        });
      }, 'image/png');
    };

    img.onerror = () => {
      console.error("Failed to load image from blob");
    };
  };

  const addCategorySegmentations = () => {
    console.log("addCategorySegmentations called");
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    if (imageCanvasRef.current && image) {
      const ctx = imageCanvasRef.current.getContext("2d");
      const img = new Image();
      img.src = `http://localhost:5000/${image.path.replace('localhost:8000', '')}`;
      img.onload = () => {
        ctx.clearRect(0, 0, imageCanvasRef.current.width, imageCanvasRef.current.height);
        ctx.drawImage(img, 0, 0, img.width * imageScale, img.height * imageScale);

        segmentationZones.forEach((zone) => {
          ctx.strokeStyle = "red";
          ctx.lineWidth = 2;
          ctx.strokeRect(zone.x * imageScale, zone.y * imageScale, zone.width * imageScale, zone.height * imageScale);
          ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
          ctx.fillRect(zone.x * imageScale, zone.y * imageScale, zone.width * imageScale, zone.height * imageScale);
        });
      };
    }
  };

  const scanOCR = async () => {
    console.log("scanOCR called");
    if (!selectedCategory) {
      alert("Please select a category.");
      return;
    }

    setIsLoading(true);
    const promises = segmentationZones.map((zone) => handleScanZone(zone, `http://localhost:5000/${image.path.replace('localhost:8000', '')}`));
    await Promise.all(promises);
    console.log("OCR results:", ocrResults);

    const allMatch = ocrResults.every(result => result.isMatch);
    if (allMatch) {
      setModalBgColor("bg-green-300");
    } else {
      setModalBgColor("bg-red-300");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!isOpen) {
      setSelectedCategory("");
      setSegmentationZones([]);
      setOcrResults([]);
      setModalBgColor("bg-gray-100");
    }
  }, [isOpen]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
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
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex">
                  <LeftSidebar
                    categories={categories}
                    selectedCategory={selectedCategory}
                    handleCategoryChange={handleCategoryChange}
                  />
                  <div className="w-1/2 p-4">
                    <div className="relative">
                      <canvas ref={imageCanvasRef} className="w-full h-auto" />
                      <img
                        src={`http://localhost:5000/${image.path.replace('localhost:8000', '')}`}
                        alt={`Page ${image.page_number}`}
                        className="w-full h-auto opacity-0 absolute top-0 left-0"
                        onLoad={() => {
                          const canvas = imageCanvasRef.current;
                          const ctx = canvas.getContext("2d");
                          const img = new Image();
                          img.crossOrigin = "anonymous"; // Ensure cross-origin is handled
                          img.src = `http://localhost:5000/${image.path.replace('localhost:8000', '')}`;
                          img.onload = () => {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0);
                            setImageScale(canvas.width / img.width);
                          };
                          img.onerror = () => {
                            console.error("Failed to load image in canvas");
                          };
                        }}
                      />
                    </div>
                    {isLoading && <div className="mt-4">Processing OCR...</div>}
                  </div>
                  <RightSidebar
                    ocrResults={ocrResults}
                    isLoading={isLoading}
                    scanOCR={scanOCR}
                    addCategorySegmentations={addCategorySegmentations}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ImageModal;
