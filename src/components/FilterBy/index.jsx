/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from 'react';
import { ShopContext } from '../../context'; // Importa el contexto

const FilterBy = () => {
  const { selectedCategories, handleCategoryChange } = useContext(ShopContext); // Obtiene las categorías seleccionadas y la función para cambiarlas
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        id="dropdownCheckboxButton"
        onClick={toggleDropdown}
        className="text-black bg-white rounded-lg py-3 px-4 text-center inline-flex items-center border border-black"
        type="button"
      >
        Filtrar por{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        ref={menuRef}
        id="dropdownDefaultCheckbox"
        className={`absolute z-10 ${isOpen ? 'block' : 'hidden'} w-48 bg-white `}
        style={{ top: 'calc(100% + 0.5rem)', left: 0 }}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value="Proteina"
                className="w-4 h-4 rounded"
                onChange={() => handleCategoryChange('Proteina')} // Agrega el cambio de categoría al seleccionar/deseleccionar el checkbox
                checked={selectedCategories.includes('Proteina')} // Marca el checkbox si la categoría está seleccionada
              />
              <label
                htmlFor="checkbox-item-1"
                className="ms-2 text-sm text-black"
              >
                Proteinas
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value="Creatina"
                className="w-4 h-4 rounded"
                onChange={() => handleCategoryChange('Creatina')} // Agrega el cambio de categoría al seleccionar/deseleccionar el checkbox
                checked={selectedCategories.includes('Creatina')} // Marca el checkbox si la categoría está seleccionada
              />
              <label
                htmlFor="checkbox-item-2"
                className="ms-2 text-sm text-black"
              >
                Creatinas
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value="Pre-entreno"
                className="w-4 h-4 rounded"
                onChange={() => handleCategoryChange('Pre-entreno')} // Agrega el cambio de categoría al seleccionar/deseleccionar el checkbox
                checked={selectedCategories.includes('Pre-entreno')} // Marca el checkbox si la categoría está seleccionada
              />
              <label
                htmlFor="checkbox-item-3"
                className="ms-2 text-sm text-black"
              >
                Pre-entrenos
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBy;
