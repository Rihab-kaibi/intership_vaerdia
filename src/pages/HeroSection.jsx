import { Link } from 'react-router-dom';
import backgroundImage from '../assets/background_image.webp'; // Make sure to replace this with the correct path to your image

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center text-white p-12 text-center w-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-blue-600 bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Document Management and Data Parsing</h1>
        <h2 className="text-2xl font-bold mb-4">Embrace Digital Transformation</h2>
        <p className="text-lg mb-8">
          The digital revolution is underway: whether in the office, on the go, or working remotely.
          Archive, share, secure, validate, and sign your key documents with our solution.
          Automate your processes with workflows... no matter where you are.
        </p>
        <p className="text-lg mb-8">
          Discover our solutions for your departments:
        </p>
        <p className="text-lg mb-8">
          <Link to="/department1" className="text-blue-300 hover:underline">Purchasing and Accounting</Link> | 
          <Link to="/department2" className="text-blue-300 hover:underline">HR</Link> | 
          <Link to="/department3" className="text-blue-300 hover:underline">Sales and Marketing</Link> | 
          <Link to="/department4" className="text-blue-300 hover:underline">Quality</Link>
        </p>
        <p className="text-lg mb-8">
          And your specific needs:
        </p>
        <p className="text-lg mb-8">
          <Link to="/specific1" className="text-blue-300 hover:underline">Electronic Invoicing</Link> | 
          <Link to="/specific2" className="text-blue-300 hover:underline">Archiving</Link> | 
          <Link to="/specific3" className="text-blue-300 hover:underline">Remote Work</Link> | 
          <Link to="/specific4" className="text-blue-300 hover:underline">Electronic Signature</Link> | 
          <Link to="/specific5" className="text-blue-300 hover:underline">Contracts</Link>
        </p>
       
      </div>
    </section>
  );
};

export default HeroSection;
