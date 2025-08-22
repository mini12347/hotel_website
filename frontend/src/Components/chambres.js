import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideIn = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.2 }
  }
};

function ChambresPage() {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalRoom, setModalRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fonction pour retourner à l'accueil
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  // Fonction pour naviguer vers la page de réservation
  const handleReservation = (room) => {
    // Stocker les informations de la chambre pour la page de réservation
    sessionStorage.setItem('selectedRoom', JSON.stringify(room));
    window.location.href = "/ReservationForm";
  };

  // Fonction pour ouvrir le modal des détails
  const handleMoreDetails = (room) => {
    setModalRoom(room);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setShowModal(false);
    setModalRoom(null);
    setCurrentImageIndex(0);
  };

  // Navigation dans les images du modal
  const nextImage = () => {
    if (modalRoom) {
      setCurrentImageIndex((prev) => 
        prev === modalRoom.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (modalRoom) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? modalRoom.images.length - 1 : prev - 1
      );
    }
  };

  const rooms = [
    {
      id: 1,
      name: "Suite Présidentielle",
      type: "Suite Executive",
      size: "120m²",
      guests: "4 personnes",
      price: "850",
      features: ["Vue panoramique sur mer", "Terrasse privée 40m²", "Jacuzzi privatif", "Service majordome 24h/24", "Salon séparé", "Minibar premium"],
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "L'excellence à l'état pur. Cette suite d'exception offre un panorama exceptionnel et des prestations de standing international.",
      fullDescription: "Notre Suite Présidentielle représente l'apogée du luxe et de l'élégance. Située au dernier étage avec une vue imprenable sur l'océan, cette suite de 120m² dispose d'une terrasse privée de 40m² avec jacuzzi. Le salon séparé offre un espace de détente sophistiqué, tandis que la chambre principale bénéficie d'un lit king-size et d'une salle de bain en marbre avec douche à effet pluie. Un service de majordome personnalisé 24h/24 assure une expérience sur mesure."
    },
    {
      id: 2,
      name: "Suite Deluxe Ocean",
      type: "Suite Premium",
      size: "85m²",
      guests: "3 personnes",
      price: "520",
      features: ["Vue mer directe", "Balcon privé", "Baignoire spa", "Coin salon", "Dressing spacieux", "Wifi haut débit"],
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Élégance et confort se mêlent dans cette suite raffinée face à l'océan, pensée pour des séjours inoubliables.",
      fullDescription: "La Suite Deluxe Ocean combine harmonieusement luxe et fonctionnalité sur 85m². Face à l'océan, elle offre une vue panoramique depuis son balcon privé meublé. La baignoire spa dans la salle de bain en marbre invite à la détente, tandis que le coin salon permet de recevoir en toute intimité. Le dressing spacieux et les équipements haut de gamme complètent cette expérience premium."
    },
    {
      id: 3,
      name: "Chambre Confort Plus",
      type: "Chambre Premium",
      size: "55m²",
      guests: "2 personnes",
      price: "320",
      features: ["Vue jardin tropicaux", "Terrasse aménagée", "Salle de bain marbre", "Climatisation individuelle", "Coffre-fort", "Minibar"],
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594736797933-d0d9e2b3da29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Un cocon de douceur aux finitions soignées, parfait pour une escapade romantique dans un cadre enchanteur.",
      fullDescription: "Notre Chambre Confort Plus de 55m² offre une retraite paisible avec vue sur nos jardins tropicaux luxuriants. La terrasse aménagée permet de profiter du climat tropical en toute intimité. La salle de bain en marbre avec douche à l'italienne ajoute une touche d'élégance, tandis que l'aménagement soigné crée une atmosphère romantique et apaisante."
    },
    {
      id: 4,
      name: "Chambre Standard Superior",
      type: "Chambre Confort",
      size: "42m²",
      guests: "2 personnes", 
      price: "220",
      features: ["Vue parc", "Balcon meublé", "Douche à l'italienne", "Bureau moderne", "Télévision écran plat", "Service étage"],
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      description: "Le parfait équilibre entre confort moderne et authenticité, dans un environnement paisible et verdoyant.",
      fullDescription: "La Chambre Standard Superior de 42m² allie modernité et confort dans un cadre verdoyant. Avec vue sur le parc, elle dispose d'un balcon meublé pour profiter de la tranquillité des lieux. L'espace de travail moderne et les équipements contemporains en font un choix idéal pour les voyageurs d'affaires comme de loisirs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#EFE6D9] via-[#F5F0E8] to-[#EFE6D9]">
      {/* Header avec navigation retour */}
      <motion.div 
        className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <button
            onClick={handleBackToHome}
            className="flex items-center gap-3 text-[#5C2E00] hover:text-[#B8742D] transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Retour à l'accueil</span>
          </button>
          
          <div className="text-[#B8742D] font-extrabold text-2xl tracking-widest">
            Velyssa
          </div>
          
          <div className="w-32"></div>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <div className="py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          {/* En-tête de la page */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div
              className="inline-block"
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <h1 className="text-6xl md:text-7xl font-extralight mb-6 text-[#5C2E00] tracking-widest">
                Nos Chambres
              </h1>
            </motion.div>
            
            <motion.div 
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#B8742D] to-transparent mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-[#5C2E00]/70 text-xl max-w-4xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            >
              Des espaces d'exception conçus pour créer des souvenirs inoubliables, où chaque détail sublime votre expérience
            </motion.p>
          </motion.div>

          {/* Navigation des chambres */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {rooms.map((room, idx) => (
              <motion.button
                key={room.id}
                className={`px-8 py-4 rounded-full border-2 transition-all duration-500 ${
                  selectedRoom === idx
                    ? 'bg-[#B8742D] border-[#B8742D] text-white shadow-lg'
                    : 'bg-white/40 border-white/50 text-[#5C2E00] hover:border-[#B8742D] hover:bg-white/60'
                }`}
                onClick={() => setSelectedRoom(idx)}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">{room.type}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Chambre sélectionnée */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRoom}
              className="grid lg:grid-cols-2 gap-16 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Galerie d'images */}
              <motion.div 
                className="relative"
                variants={slideIn}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <motion.img
                    src={rooms[selectedRoom].images[0]}
                    alt={rooms[selectedRoom].name}
                    className="w-full h-96 object-cover cursor-pointer"
                    layoutId="main-image"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    onClick={() => handleMoreDetails(rooms[selectedRoom])}
                  />
                  
                  <motion.div 
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-semibold text-[#B8742D]">{rooms[selectedRoom].price}€</div>
                      <div className="text-sm text-[#5C2E00]/60">par nuit</div>
                    </div>
                  </motion.div>

                  {/* Overlay pour indiquer que l'image est cliquable */}
                  <motion.div 
                    className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <div className="bg-white/90 rounded-full p-3">
                      <svg className="w-6 h-6 text-[#B8742D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="flex gap-4 mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {rooms[selectedRoom].images.slice(1, 4).map((img, idx) => (
                    <motion.div
                      key={idx}
                      className="relative w-24 h-24 rounded-2xl overflow-hidden cursor-pointer shadow-md"
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleMoreDetails(rooms[selectedRoom])}
                    >
                      <img
                        src={img}
                        alt={`${rooms[selectedRoom].name} ${idx + 2}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Informations détaillées */}
              <motion.div
                className="space-y-8"
                variants={slideIn}
              >
                <div>
                  <motion.h2 
                    className="text-4xl font-light mb-4 text-[#5C2E00]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {rooms[selectedRoom].name}
                  </motion.h2>
                  
                  <motion.div 
                    className="flex items-center gap-8 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2 text-[#5C2E00]/70">
                      <span className="text-2xl">📐</span>
                      <span className="font-medium">{rooms[selectedRoom].size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#5C2E00]/70">
                      <span className="text-2xl">👥</span>
                      <span className="font-medium">{rooms[selectedRoom].guests}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    className="text-[#5C2E00]/80 text-lg leading-relaxed font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {rooms[selectedRoom].description}
                  </motion.p>
                </div>

                {/* Équipements */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h3 className="text-xl font-medium mb-6 text-[#5C2E00]">Équipements & Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {rooms[selectedRoom].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-white/30"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + idx * 0.1 }}
                        whileHover={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                      >
                        <span className="w-2 h-2 bg-[#B8742D] rounded-full flex-shrink-0" />
                        <span className="text-[#5C2E00]/80 font-light">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Boutons d'action */}
                <motion.div
                  className="flex gap-4 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    className="flex-1 group relative px-8 py-4 bg-gradient-to-r from-[#B8742D] to-[#8B5A22] text-white rounded-2xl font-medium shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleReservation(rooms[selectedRoom])}
                  >
                    <span className="relative z-10">Réserver maintenant</span>
                  </motion.button>
                  
                  <motion.button
                    className="px-8 py-4 border-2 border-[#B8742D] text-[#B8742D] rounded-2xl font-medium hover:bg-[#B8742D] hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMoreDetails(rooms[selectedRoom])}
                  >
                    Plus d'infos
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Grille de toutes les chambres */}
          <motion.div
            className="mt-32"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-3xl font-light text-center mb-16 text-[#5C2E00]"
              variants={fadeInUp}
            >
              Toutes nos chambres
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rooms.map((room, idx) => (
                <motion.div
                  key={room.id}
                  className="group cursor-pointer"
                  variants={fadeInUp}
                  onHoverStart={() => setHoveredRoom(idx)}
                  onHoverEnd={() => setHoveredRoom(null)}
                  onClick={() => setSelectedRoom(idx)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/40 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-700">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                      
                      <motion.div 
                        className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredRoom === idx ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-sm font-semibold text-[#B8742D]">{room.price}€</div>
                      </motion.div>
                    </div>

                    <div className="p-6">
                      <h4 className="text-lg font-medium mb-2 text-[#5C2E00] group-hover:text-[#B8742D] transition-colors duration-300">
                        {room.name}
                      </h4>
                      <p className="text-[#5C2E00]/60 text-sm mb-4 font-light">
                        {room.type} • {room.size}
                      </p>
                      
                      <motion.div 
                        className="h-0.5 bg-gradient-to-r from-[#B8742D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal pour les détails et galerie complète */}
      <AnimatePresence>
        {showModal && modalRoom && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du modal */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#5C2E00]">{modalRoom.name}</h2>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Galerie d'images */}
              <div className="p-6">
                <div className="relative mb-6">
                  <div className="relative h-96 rounded-2xl overflow-hidden">
                    <img
                      src={modalRoom.images[currentImageIndex]}
                      alt={`${modalRoom.name} ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation des images */}
                    {modalRoom.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center"
                        >
                          <svg className="w-6 h-6 text-[#B8742D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 flex items-center justify-center"
                        >
                          <svg className="w-6 h-6 text-[#B8742D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Indicateur d'image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">
                          {currentImageIndex + 1} / {modalRoom.images.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Miniatures */}
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                    {modalRoom.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === idx 
                            ? 'border-[#B8742D] scale-105' 
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${modalRoom.name} thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Informations détaillées */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center gap-2 text-[#5C2E00]/70">
                          <span className="text-xl">📐</span>
                          <span className="font-medium">{modalRoom.size}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#5C2E00]/70">
                          <span className="text-xl">👥</span>
                          <span className="font-medium">{modalRoom.guests}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#B8742D]">
                          <span className="text-xl">💰</span>
                          <span className="font-bold text-lg">{modalRoom.price}€/nuit</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-3 text-[#5C2E00]">Description complète</h3>
                      <p className="text-[#5C2E00]/80 leading-relaxed font-light">
                        {modalRoom.fullDescription}
                      </p>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleReservation(modalRoom)}
                        className="flex-1 bg-gradient-to-r from-[#B8742D] to-[#8B5A22] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                      >
                        Réserver maintenant
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-6 py-3 border-2 border-[#B8742D] text-[#B8742D] rounded-xl font-medium hover:bg-[#B8742D] hover:text-white transition-all duration-300"
                      >
                        Fermer
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-[#5C2E00]">Équipements & Services</h3>
                    <div className="space-y-3">
                      {modalRoom.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl"
                        >
                          <span className="w-2 h-2 bg-[#B8742D] rounded-full flex-shrink-0" />
                          <span className="text-[#5C2E00]/80 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Services additionnels */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-[#B8742D]/10 to-[#8B5A22]/10 rounded-xl">
                      <h4 className="font-semibold text-[#5C2E00] mb-2">Services inclus</h4>
                      <ul className="text-sm text-[#5C2E00]/70 space-y-1">
                        <li>• Petit-déjeuner continental</li>
                        <li>• Accès piscine et spa</li>
                        <li>• WiFi haut débit</li>
                        <li>• Service de conciergerie</li>
                        <li>• Parking privé</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChambresPage;