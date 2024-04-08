/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef, useContext } from 'react';
import { ShopContext } from '../../context'; // Importa el contexto

const SortedBy = () => {
  const { selectedSortOption, handleSortOptionChange } = useContext(ShopContext); // Obtiene la opción de ordenamiento seleccionada y la función para cambiarla
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
        Ordenar por{' '}
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
                id="default-radio-1"
                type="radio"
                value="mas-vendido"
                name="default-radio"
                className="w-4 h-4"
                checked={selectedSortOption === 'mas-vendido'} // Marca el radio button si la opción está seleccionada
                onChange={() => handleSortOptionChange('mas-vendido')}
              />
              <label htmlFor="default-radio-1" className="ms-2 text-sm text-black">Más vendido</label>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value="precio-bajo-alto"
                name="default-radio"
                className="w-4 h-4"
                checked={selectedSortOption === 'precio-bajo-alto'} // Marca el radio button si la opción está seleccionada
                onChange={() => handleSortOptionChange('precio-bajo-alto')}
              />
              <label htmlFor="default-radio-2" className="ms-2 text-sm text-black">Precio bajo a alto</label>
            </div>
          </li>

          <li>
            <div className="flex items-center">
              <input
                id="default-radio-3"
                type="radio"
                value="precio-alto-bajo"
                name="default-radio"
                className="w-4 h-4"
                checked={selectedSortOption === 'precio-alto-bajo'} // Marca el radio button si la opción está seleccionada
                onChange={() => handleSortOptionChange('precio-alto-bajo')}
              />
              <label htmlFor="default-radio-3" className="ms-2 text-sm text-black">Precio alto a bajo</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortedBy;
