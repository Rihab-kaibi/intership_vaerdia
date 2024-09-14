import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex space-x-4 justify-center md:justify-start mb-4 md:mb-0">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-500 hover:text-blue-400" size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-700 hover:text-blue-600" size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 hover:text-blue-300" size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-pink-500 hover:text-pink-400" size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-500 hover:text-red-400" size={24} />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Explore Documents-IA</h3>
              <ul>
                <li className="mb-1"><Link to="/contact" className="hover:underline">Contact</Link></li>
                <li className="mb-1"><Link to="/solutions" className="hover:underline">Solutions</Link></li>
                <li className="mb-1"><Link to="/architecture" className="hover:underline">Architecture</Link></li>
                <li className="mb-1"><Link to="/testimonials" className="hover:underline">Client Testimonials</Link></li>
                <li className="mb-1"><Link to="/resources" className="hover:underline">Resources</Link></li>
                <li className="mb-1"><Link to="/careers" className="hover:underline">Careers</Link></li>
                <li className="mb-1"><Link to="/glossary" className="hover:underline">Glossary</Link></li>
                <li className="mb-1"><Link to="/gender-note" className="hover:underline">Gender Note</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Partner Resources</h3>
              <ul>
                <li className="mb-1"><Link to="/become-partner" className="hover:underline">Become a Partner</Link></li>
                <li className="mb-1"><Link to="/find-partner" className="hover:underline">Find a Partner</Link></li>
                <li className="mb-1"><Link to="/partner-portal" className="hover:underline">Partner Portal</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal Information</h3>
              <ul>
                <li className="mb-1"><Link to="/legal" className="hover:underline">Legal Information</Link></li>
                <li className="mb-1"><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <ul>
                <li className="mb-1"><Link to="/contact" className="hover:underline">Contact Us</Link></li>
                <li className="mb-1"><Link to="/office-location" className="hover:underline">Office Locations</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2024 Documents-IA-Scanner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
