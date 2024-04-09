/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from 'react';
import { totalPrice } from './../utils';

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMovilMenuOpen, setIsMovilMenuOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [searchByName, setSearchByName] = useState('');
  const [selectedSortOption, setSelectedSortOption] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [isNotiCartOpen, setIsNotiCartOpen] = useState(false);

  const openCheckoutSideMenu = () => {
    setIsNotiCartOpen(false),
    setIsCheckoutSideMenuOpen(true)
  };
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  const SUPLEMENTOS = [
    // Tu lista de suplementos
    {
      id: 1,
      name: "Venom",
      description: "Formulado para ser un catalizador de conducción sin tonterías, energía de alta intensidad y enfoque, Venom® no deja nada al azar y aborda todos los ángulos para optimizar su potencial de rendimiento. Con energía de alta intensidad impulsada por 375 mg de cafeína anhidra y 50 mg de Infinergy® (dicafeína malato) y un enfoque impulsado aún más por una combinación sinérgica de L-tirosina y huperzina, estarás preparado para dominar cada entrenamiento.",
      brand: "Dragon Pharma",
      price: 600,
      category: "Pre-entreno",
      image : ["../../public/img/suplements/venom-1.webp"],
      sales: 35
    },
    {
      id: 2,
      name: "Neuromorph",
      description: "NeuroMorph utiliza nootrópicos de vanguardia para mejorar la cognición, hierbas adaptogénicas para mitigar el estrés, soporte antioxidante para la salud celular y luteína patentada para combatir el daño de la luz azul de dispositivos digitales. La cafeína de origen natural en NeuroMorph es equivalente a una taza de café promedio, proporcionando enfoque y estado de alerta sin los efectos negativos de un exceso de cafeína.",
      brand: "Dragon Pharma",
      price: 600,
      category: "Pre-entreno",
      image : ["../../public/img/suplements/neuromorfo-1.webp"],
      sales: 2
    },
    {
      id: 3,
      name: "Isophorm",
      description: "IsoPhorm® fue creado para brindar una opción premium para satisfacer sus necesidades de proteínas. IsoPhorm®, que contiene 25 g de proteína de suero hidrolizada completa y de primera calidad en cada porción, va más allá de sol el aislado de proteína de suero. Aprovechando el poder del aislado de proteína de suero hidrolizado, cuando usa IsoPhorm®, activará la síntesis de proteínas y maximizará su potencial de crecimiento y reparación.",
      brand: "Dragon Pharma",
      price: 2100,
      category: "Proteina",
      image : ["../../public/img/suplements/isophorm-1.webp"],
      sales: 89
    },
    {
      id: 4,
      name: "Weyphorm",
      description: "WheyPhorm de Dragon Pharma contiene 25 g de proteína de la más alta calidad en cada porción para tus necesidades post-entrenamiento o para alcanzar tus objetivos proteicos diarios cuando estás en movimiento. WheyPhorm consta de 2 tipos diferentes de proteínas, aislado de suero y concentrado de suero. Esta combinación contribuye a un sabor y una textura superiores.",
      brand: "Dragon Pharma",
      price: 1870,
      category: "Proteina",
      image : ["../../public/img/suplements/wheyphorm-1.webp"],
      sales: 42
    },
    {
      id: 5,
      name: "Massphorm",
      description: "MassPhorm aborda las necesidades del ectomorfo que gana con dificultad y lleva su potencial de construcción de masa magra al siguiente nivel. Con un perfil completo que incluye más de 200 g de carbohidratos, 50 g de proteína premium de suero de leche y caseína micelar de alta calidad para niveles rápidos y sostenidos de aminoácidos y más de 1080 calorías por porción.",
      brand: "Dragon Pharma",
      price: 2500,
      category: "Proteina",
      image : ["../../public/img/suplements/massphorm-1.webp"],
      sales: 49
    },
    {
      id: 6,
      name: "Mr. Veinz",
      description: "El bombeo. ¿Qué es, te preguntarás? Para algunos, se define literalmente, con el término científico hiperemia, que es el aumento del flujo sanguíneo a los músculos del cuerpo, saturándolos con sangre oxigenada y rica en nutrientes. Para otros, “The Pump” es un estado mental… y una experiencia extracorporal donde lo que sucede físicamente se fusiona con la satisfacción de conectarse con el hierro en un nivel ritual. ",
      brand: "Dragon Pharma",
      price: 600,
      category: "Pre-entreno",
      image : ["../../public/img/suplements/mrbeinz-1.webp"],
      sales: 21
    },
    {
      id: 7,
      name: "ATP Force",
      description: "During intense exercise, muscle contraction is powered by ATP (Adenosine-Triphosphate), but there is only enough ATP to provide energy for a short period of time. Dragon Pharma ATP-FORCE was designed to maximally increase and replenish cellular ATP production and provide more cellular energy, allowing the body to train harder, leading to increased lean muscle and faster recovery.",
      brand: "Dragon Pharma",
      price: 700,
      category: "Creatina",
      image : ["../../public/img/suplements/atpforce-1.webp"],
      sales: 7
    },
    {
      id: 8,
      name: "Creatine Monohydrate",
      brand: "Dragon Pharma",
      description: "Your supplement arsenal is not complete without Dragon Pharma’s Creatine Monohydrate. One of the best-selling and most studied tried supplements on the market. Dragon Pharma Creatine Monohydrate assists in increasing strength, increasing muscle mass and helping to recover muscles faster during exercise. Each scoop (one serving) of Dragon Pharma Creatine Monohydrate contains 5 grams of pure Creatine Monohydrate.",
      price: 1000,
      category: "Creatina",
      image : [
        ["../../public/img/suplements/creatine-1.webp"]
      ],
      sales: 12
    },
    {
      id: 9,
      name: "IsoJects Natural",
      description: "El proceso de filtración ultra avanzado de Evogen Isoject garantiza una proteína de calidad superior y de rápida absorción. Además, está enriquecida con enzimas digestivas para asegurar una absorción óptima y una experiencia sin molestias digestivas. Con su presentación de 1.77 libras, tendrás suficiente proteína de alta calidad para satisfacer tus necesidades de acondicionamiento físico.",
      brand: "Evogen",
      price: 1900,
      category: "Proteina",
      image : ["../../public/img/suplements/isoject-1.webp", "../../public/img/suplements/isoject-2.webp"],
      sales: 32
    },
    {
      id: 10,
      name: "Evofusiom",
      description: "Quiere un crecimiento más extremo y una recuperación sostenida? ¿Quieres más BCAA y EAA para alimentar tu cuerpo? Apodado El Pro Creator, Hany Rambod ha estado construyendo físicos ganadores de campeonatos durante más de 20 años mientras usaba su innovador sistema de entrenamiento FST-7. Rambod se enorgullece de ofrecer solo innovaciones de calidad a sus clientes en todo el mundo y la introducción de Evofusion es una prueba más de este compromiso.",
      brand: "Evogen",
      price: 1200,
      category: "Proteina",
      image : ["../../public/img/suplements/evofusion-1.webp"],
      sales: 46
    }
  ];

  const filterByName = (items, itemNameSearch) => {
    return items?.filter(item => item.name.toLowerCase().includes(itemNameSearch.toLowerCase()))
  }

  const filterByCategory = (items, selectedCategories) => {
    if (selectedCategories.length === 0) {
      return items;
    }
    return items.filter(item => selectedCategories.includes(item.category));
  }

  const sortItems = (items, option) => {
    switch (option) {
      case 'mas-vendido':
        return items.sort((a, b) => b.sales - a.sales);
      case 'precio-bajo-alto':
        return items.sort((a, b) => a.price - b.price);
      case 'precio-alto-bajo':
        return items.sort((a, b) => b.price - a.price);
      default:
        return items;
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  }

  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
  };

  const updateCartItemQuantity = (productId, newQuantity) => {
    const updatedCartProducts = cartProducts.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartProducts(updatedCartProducts);
  };

  useEffect(() => {
    setItems(SUPLEMENTOS);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filteredItemsByCategory = filterByCategory(items, selectedCategories);
    const filteredItemsByName = filterByName(filteredItemsByCategory, searchByName);
    const sortedItems = sortItems(filteredItemsByName, selectedSortOption);
    setFilteredItems(sortedItems);
  }, [items, searchByName, selectedCategories, selectedSortOption]);

  useEffect(() => {
    const storedCartProducts = localStorage.getItem('cartProducts');
    if (storedCartProducts) {
      setCartProducts(JSON.parse(storedCartProducts));
    }
  }, []);

  const totalPriceCartProducts = totalPrice(cartProducts);

  return (
    <ShopContext.Provider value = {{
      items,
      isMovilMenuOpen, 
      setIsMovilMenuOpen,
      setSearchByName,
      filteredItems,
      selectedCategories,
      handleCategoryChange,
      selectedSortOption,
      handleSortOptionChange,
      cartProducts,
      setCartProducts,
      isCheckoutSideMenuOpen,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      updateCartItemQuantity,
      totalPriceCartProducts,
      isNotiCartOpen,
      setIsNotiCartOpen
    }}>
      {children}
    </ShopContext.Provider>
  )
}
