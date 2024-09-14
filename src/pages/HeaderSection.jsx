import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

const HeaderSection = () => {
  return (
    <header className="flex justify-between items-center rounded bg-white p-4 shadow">
      <div className="text-blue-700 text-2xl font-semibold">
      </div>
      <nav>
        <ul className="flex items-center space-x-6 text-blue-700">
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900">
              <span>Solutions</span>
              <FiChevronDown />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/solution1">Solution 1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/solution2">Solution 2</Link></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900">
              <span>Produits</span>
              <FiChevronDown />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/produit1">Produit 1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/produit2">Produit 2</Link></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900">
              <span>Ressources</span>
              <FiChevronDown />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ressource1">Ressource 1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/ressource2">Ressource 2</Link></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900">
              <span>À propos</span>
              <FiChevronDown />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about1">About 1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/about2">About 2</Link></li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900">
              <span>Partenaires</span>
              <FiChevronDown />
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/partenaire1">Partenaire 1</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/partenaire2">Partenaire 2</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/search" className="hover:text-blue-900">
              <FiSearch className="text-xl" />
            </Link>
          </li>
          <li>
            <Link to="/demo" className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800">
              Démo gratuite
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
