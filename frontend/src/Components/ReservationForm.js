import React, { useState, useEffect } from "react";
import { Calendar, Users, Search, Star, MapPin, Phone, Mail, User, CreditCard, Shield, Check, Clock, Wifi, Car, Coffee, Utensils, Waves, Mountain } from "lucide-react";

const HotelReservationSystem = () => {
  const [currentStep, setCurrentStep] = useState('search');
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1
  });
  
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingData, setBookingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  
  const [focusedField, setFocusedField] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [nights, setNights] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationId, setReservationId] = useState(null);

  // Simulation des chambres disponibles
  const availableRooms = [
    { 
      id: 'classic', 
      name: 'Chambre Classique', 
      price: 185, 
      originalPrice: 220,
      image: '🛏️',
      size: '25m²',
      capacity: 2,
      features: ['Vue jardin', 'Wifi gratuit', 'Minibar', 'Bureau'],
      amenities: [Wifi, Coffee, Car],
      description: 'Chambre élégante avec vue sur nos jardins luxuriants',
      available: 3
    },
    { 
      id: 'deluxe', 
      name: 'Suite Deluxe', 
      price: 350, 
      originalPrice: 420,
      image: '🏖️',
      size: '45m²',
      capacity: 3,
      features: ['Vue mer panoramique', 'Balcon privé', 'Service étage 24h', 'Salon séparé'],
      amenities: [Waves, Wifi, Utensils, Car],
      description: 'Suite spacieuse avec vue imprenable sur la mer',
      available: 2
    },
    { 
      id: 'presidential', 
      name: 'Suite Présidentielle', 
      price: 750, 
      originalPrice: 950,
      image: '🏰',
      size: '85m²',
      capacity: 4,
      features: ['Terrasse privée 20m²', 'Jacuzzi', 'Butler personnel', 'Salon & salle à manger'],
      amenities: [Mountain, Waves, Utensils, Car],
      description: 'Le summum du luxe avec services personnalisés',
      available: 1
    }
  ];

  // Calculer le nombre de nuits
  useEffect(() => {
    if (searchData.checkIn && searchData.checkOut) {
      const checkIn = new Date(searchData.checkIn);
      const checkOut = new Date(searchData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setNights(nightCount > 0 ? nightCount : 0);
    }
  }, [searchData.checkIn, searchData.checkOut]);

  const handleSearchSubmit = async () => {
    if (!searchData.checkIn || !searchData.checkOut) {
      alert('Veuillez sélectionner vos dates de séjour');
      return;
    }
    
    setIsSearching(true);
    // Simulation d'une recherche
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSearching(false);
    setCurrentStep('rooms');
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setCurrentStep('booking');
  };

  const handleBookingSubmit = async () => {
    // Validation des champs obligatoires
    if (!bookingData.firstName || !bookingData.lastName || !bookingData.email || !bookingData.phone) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingData.email)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }

    const reservationData = {
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      phone: bookingData.phone,
      specialRequests: bookingData.specialRequests,
      roomType: selectedRoom?.name,
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: searchData.guests,
      rooms: searchData.rooms,
      totalPrice: getTotalPrice()
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("http://localhost:5000/api/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReservationId(result.reservationId);
        setCurrentStep('confirmation');
      } else {
        alert(result.message || "Erreur lors de la réservation !");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      alert("Erreur de connexion au serveur. Veuillez vérifier que le serveur backend est démarré.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTotalPrice = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * nights * searchData.rooms;
  };

  // Étape 1: Recherche
  if (currentStep === 'search') {
    return (
      <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #5a4432 0%, #b1762c 50%, #e8dcc9 100%)'}} className="relative overflow-hidden">
        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="max-w-4xl w-full">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl" style={{background: 'linear-gradient(135deg, #b1762c 0%, #e8dcc9 100%)'}}>
                  <Star className="w-8 h-8" style={{color: '#fcf9f2'}} />
                </div>
                <h1 className="text-5xl font-light tracking-wide" style={{color: '#fcf9f2'}}>Château Élégance</h1>
              </div>
              <p className="text-xl font-light" style={{color: '#fcf9f2', opacity: 0.9}}>Découvrez l'art de l'hospitalité raffinée</p>
            </div>

            {/* Formulaire de recherche */}
           <div
  className="rounded-3xl p-8 border shadow-xl"
  style={{
    backgroundColor: '#f6efe2',
    borderColor: '#e2d6c3',
  }}
>
  <div className="text-center mb-8">
    <h2 className="text-2xl font-semibold mb-2" style={{ color: '#5a3a1e' }}>
      Trouvez votre séjour parfait
    </h2>
    <p style={{ color: '#7a5a3a' }}>
      Sélectionnez vos dates et préférences
    </p>
  </div>

  <div className="grid lg:grid-cols-5 gap-6 mb-8">
    {/* Arrivée */}
    <div className="relative">
      <input
        type="date"
        value={searchData.checkIn}
        onChange={(e) =>
          setSearchData((prev) => ({ ...prev, checkIn: e.target.value }))
        }
        min={new Date().toISOString().split('T')[0]}
        className="w-full h-16 px-4 pt-6 pb-2 border rounded-2xl focus:outline-none"
        style={{
          backgroundColor: '#fbf8f2',
          borderColor: '#d7c5af',
          color: '#5a3a1e',
        }}
      />
      <label
        className="absolute left-4 top-2 text-xs font-medium"
        style={{ color: '#b1762c' }}
      >
        Arrivée
      </label>
    </div>

    {/* Départ */}
    <div className="relative">
      <input
        type="date"
        value={searchData.checkOut}
        onChange={(e) =>
          setSearchData((prev) => ({ ...prev, checkOut: e.target.value }))
        }
        min={searchData.checkIn || new Date().toISOString().split('T')[0]}
        className="w-full h-16 px-4 pt-6 pb-2 border rounded-2xl focus:outline-none"
        style={{
          backgroundColor: '#fbf8f2',
          borderColor: '#d7c5af',
          color: '#5a3a1e',
        }}
      />
      <label
        className="absolute left-4 top-2 text-xs font-medium"
        style={{ color: '#b1762c' }}
      >
        Départ
      </label>
    </div>

    {/* Invités */}
    <div className="relative">
      <select
        value={searchData.guests}
        onChange={(e) =>
          setSearchData((prev) => ({
            ...prev,
            guests: parseInt(e.target.value),
          }))
        }
        className="w-full h-16 px-4 pt-6 pb-2 border rounded-2xl appearance-none focus:outline-none"
        style={{
          backgroundColor: '#fbf8f2',
          borderColor: '#d7c5af',
          color: '#5a3a1e',
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <option
            key={num}
            value={num}
            style={{
              backgroundColor: '#f6efe2',
              color: '#5a3a1e',
            }}
          >
            {num} {num === 1 ? 'personne' : 'personnes'}
          </option>
        ))}
      </select>
      <label
        className="absolute left-4 top-2 text-xs font-medium"
        style={{ color: '#b1762c' }}
      >
        Invités
      </label>
    </div>

    {/* Chambres */}
    <div className="relative">
      <select
        value={searchData.rooms}
        onChange={(e) =>
          setSearchData((prev) => ({
            ...prev,
            rooms: parseInt(e.target.value),
          }))
        }
        className="w-full h-16 px-4 pt-6 pb-2 border rounded-2xl appearance-none focus:outline-none"
        style={{
          backgroundColor: '#fbf8f2',
          borderColor: '#d7c5af',
          color: '#5a3a1e',
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option
            key={num}
            value={num}
            style={{
              backgroundColor: '#f6efe2',
              color: '#5a3a1e',
            }}
          >
            {num} {num === 1 ? 'chambre' : 'chambres'}
          </option>
        ))}
      </select>
      <label
        className="absolute left-4 top-2 text-xs font-medium"
        style={{ color: '#b1762c' }}
      >
        Chambres
      </label>
    </div>

    {/* Bouton Rechercher */}
    <button
      onClick={handleSearchSubmit}
      disabled={isSearching}
      className="h-16 px-8 rounded-2xl font-medium transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      style={{
        background: 'linear-gradient(to right, #b1762c, #7e5d3c)',
        color: '#fefbf7',
        boxShadow: '0 12px 24px rgba(177, 118, 44, 0.3)',
      }}
    >
      {isSearching ? (
        <>
          <div
            className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
            style={{
              borderColor: 'rgba(90, 68, 50, 0.3)',
              borderTopColor: '#fff',
            }}
          />
          Recherche...
        </>
      ) : (
        <>
          <Search className="w-5 h-5" />
          Rechercher
        </>
      )}
    </button>
  </div>

  {/* Résumé séjour */}
  {nights > 0 && (
    <div className="text-center" style={{ color: '#7a5a3a' }}>
      <p className="text-lg">
        <span className="font-medium" style={{ color: '#b1762c' }}>
          {nights}
        </span>{' '}
        {nights === 1 ? 'nuit' : 'nuits'}
        <span className="mx-2">•</span>
        <span className="font-medium" style={{ color: '#b1762c' }}>
          {searchData.guests}
        </span>{' '}
        {searchData.guests === 1 ? 'personne' : 'personnes'}
        <span className="mx-2">•</span>
        <span className="font-medium" style={{ color: '#b1762c' }}>
          {searchData.rooms}
        </span>{' '}
        {searchData.rooms === 1 ? 'chambre' : 'chambres'}
      </p>
    </div>
  )}
</div>

            {/* Contact info */}
            <div className="text-center mt-12">
              <div className="flex items-center justify-center gap-8 text-sm" style={{color: 'rgba(252, 249, 242, 0.6)'}}>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@chateau-elegance.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Côte d'Azur, France</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Étape 2: Sélection des chambres
  if (currentStep === 'rooms') {
    return (
      <div className="min-h-screen p-4" style={{background: 'linear-gradient(135deg, #fcf9f2 0%, #f5f2ed 100%)'}}>
        <div className="max-w-6xl mx-auto">
          {/* Header avec résumé de recherche */}
          <div className="rounded-3xl shadow-xl p-6 mb-8" style={{backgroundColor: '#fcf9f2'}}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-light mb-2" style={{color: '#5a4432'}}>Chambres disponibles</h1>
                <div className="flex items-center gap-6" style={{color: '#5a4432', opacity: 0.8}}>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(searchData.checkIn).toLocaleDateString('fr-FR')} - {new Date(searchData.checkOut).toLocaleDateString('fr-FR')}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {searchData.guests} {searchData.guests === 1 ? 'personne' : 'personnes'}
                  </span>
                  <span className="font-medium" style={{color: '#b1762c'}}>{nights} {nights === 1 ? 'nuit' : 'nuits'}</span>
                </div>
              </div>
              <button
                onClick={() => setCurrentStep('search')}
                className="px-6 py-3 rounded-xl transition-colors"
                style={{backgroundColor: '#f5f2ed', color: '#5a4432'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e8dcc9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f5f2ed'}
              >
                Modifier la recherche
              </button>
            </div>
          </div>

          {/* Liste des chambres */}
          <div className="space-y-6">
            {availableRooms.filter(room => room.capacity >= searchData.guests).map((room) => {
              const Amenity1 = room.amenities[0];
              const Amenity2 = room.amenities[1];
              const Amenity3 = room.amenities[2];
              const Amenity4 = room.amenities[3];

              return (
                <div key={room.id} className="rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]" style={{backgroundColor: '#fcf9f2'}}>
                  <div className="grid lg:grid-cols-4 gap-6 p-8">
                    {/* Image et infos de base */}
                    <div className="lg:col-span-1">
                      <div className="text-6xl mb-4 text-center rounded-2xl p-8" style={{background: 'linear-gradient(135deg, #f5f2ed 0%, #e8dcc9 100%)'}}>
                        {room.image}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-medium mb-2" style={{color: '#5a4432'}}>{room.name}</h3>
                        <div className="flex items-center justify-center gap-4 text-sm mb-4" style={{color: '#5a4432', opacity: 0.8}}>
                          <span>{room.size}</span>
                          <span>•</span>
                          <span>Max {room.capacity} pers.</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-4">
                          {room.amenities.map((Amenity, idx) => (
                            <div key={idx} className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#f5f2ed'}}>
                              <Amenity className="w-4 h-4" style={{color: '#b1762c'}} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Description et équipements */}
                    <div className="lg:col-span-2">
                      <p className="mb-6 text-lg" style={{color: '#5a4432', opacity: 0.8}}>{room.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {room.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2" style={{color: '#5a4432'}}>
                            <Check className="w-4 h-4" style={{color: '#b1762c'}} />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm px-3 py-2 rounded-xl inline-flex" style={{color: '#b1762c', backgroundColor: '#f5f2ed'}}>
                        <Clock className="w-4 h-4" />
                        <span>Plus que {room.available} chambre{room.available > 1 ? 's' : ''} disponible{room.available > 1 ? 's' : ''}</span>
                      </div>
                    </div>

                    {/* Prix et réservation */}
                    <div className="lg:col-span-1 flex flex-col justify-between">
                      <div className="text-right mb-6">
                        <div className="text-sm line-through mb-1" style={{color: '#5a4432', opacity: 0.5}}>€{room.originalPrice}/nuit</div>
                        <div className="text-3xl font-light mb-1" style={{color: '#5a4432'}}>€{room.price}</div>
                        <div className="text-sm" style={{color: '#5a4432', opacity: 0.8}}>par nuit</div>
                        
                        <div className="mt-4 p-4 rounded-xl" style={{backgroundColor: '#f5f2ed'}}>
                          <div className="text-sm mb-2" style={{color: '#5a4432', opacity: 0.8}}>Total {nights} {nights === 1 ? 'nuit' : 'nuits'}</div>
                          <div className="text-2xl font-medium" style={{color: '#b1762c'}}>€{room.price * nights}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleRoomSelect(room)}
                        className="w-full py-4 rounded-2xl font-medium transform hover:scale-105 transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #b1762c 0%, #e8dcc9 100%)',
                          color: '#fcf9f2',
                          boxShadow: '0 15px 30px rgba(177, 118, 44, 0.3)'
                        }}
                        onMouseEnter={(e) => e.target.style.boxShadow = '0 20px 40px rgba(177, 118, 44, 0.4)'}
                        onMouseLeave={(e) => e.target.style.boxShadow = '0 15px 30px rgba(177, 118, 44, 0.3)'}
                      >
                        Réserver maintenant
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }


  // Étapes 3 & 4: Formulaire de réservation et confirmation
return (
  <div className="min-h-screen p-4" style={{ backgroundColor: '#f6efe2' }}>
    <div className="max-w-4xl mx-auto">
      {currentStep === 'booking' && (
        <div className="rounded-3xl shadow-2xl overflow-hidden" style={{ backgroundColor: '#fbf8f2' }}>
          {/* Header */}
          <div className="p-8" style={{ background: 'linear-gradient(to right, #b1762c, #a56b26)', color: '#fff' }}>
            <h1 className="text-3xl font-light mb-4">Finaliser votre réservation</h1>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="opacity-80 mb-1">Chambre sélectionnée</div>
                <div className="font-medium">{selectedRoom?.name}</div>
              </div>
              <div>
                <div className="opacity-80 mb-1">Dates</div>
                <div className="font-medium">
                  {new Date(searchData.checkIn).toLocaleDateString('fr-FR')} - {new Date(searchData.checkOut).toLocaleDateString('fr-FR')}
                </div>
              </div>
              <div>
                <div className="opacity-80 mb-1">Total</div>
                <div className="font-medium text-2xl">€{getTotalPrice()}</div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="p-8 text-[#5a3a1e]">
            <h2 className="text-xl font-medium mb-6">Vos informations</h2>

            <div className="space-y-6">
              {/* Prénom et nom */}
              <div className="grid md:grid-cols-2 gap-6">
                {['firstName', 'lastName'].map((field) => (
                  <div key={field} className="relative group">
                    <input
                      type="text"
                      value={bookingData[field]}
                      onChange={(e) =>
                        setBookingData((prev) => ({ ...prev, [field]: e.target.value }))
                      }
                      onFocus={() => setFocusedField(field)}
                      onBlur={() => setFocusedField('')}
                      className="w-full h-14 px-4 pt-6 pb-2 border rounded-2xl focus:outline-none transition-all duration-300"
                      style={{
                        backgroundColor: '#fff',
                        borderColor: '#e3d9c8',
                        color: '#5a3a1e',
                        boxShadow:
                          focusedField === field
                            ? '0 0 0 3px rgba(177, 118, 44, 0.2)'
                            : 'none',
                      }}
                      placeholder={field === 'firstName' ? 'Prénom' : 'Nom'}
                    />
                    <label
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === field || bookingData[field]
                          ? 'top-2 text-xs text-[#b1762c] font-medium'
                          : 'top-4 text-gray-500'
                      }`}
                    >
                      {field === 'firstName' ? 'Prénom' : 'Nom de famille'}
                    </label>
                  </div>
                ))}
              </div>

              {/* Email */}
              <div className="relative group">
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData((prev) => ({ ...prev, email: e.target.value }))}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 px-4 pt-6 pb-2 border rounded-2xl focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#e3d9c8',
                    color: '#5a3a1e',
                    boxShadow:
                      focusedField === 'email'
                        ? '0 0 0 3px rgba(177, 118, 44, 0.2)'
                        : 'none',
                  }}
                  placeholder="Email"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || bookingData.email
                      ? 'top-2 text-xs text-[#b1762c] font-medium'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Adresse email
                </label>
              </div>

              {/* Téléphone */}
              <div className="relative group">
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData((prev) => ({ ...prev, phone: e.target.value }))}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField('')}
                  className="w-full h-14 px-4 pt-6 pb-2 border rounded-2xl focus:outline-none transition-all duration-300"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#e3d9c8',
                    color: '#5a3a1e',
                    boxShadow:
                      focusedField === 'phone'
                        ? '0 0 0 3px rgba(177, 118, 44, 0.2)'
                        : 'none',
                  }}
                  placeholder="Téléphone"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'phone' || bookingData.phone
                      ? 'top-2 text-xs text-[#b1762c] font-medium'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Numéro de téléphone
                </label>
              </div>

              {/* Demandes spéciales */}
              <div className="relative group">
                <textarea
                  value={bookingData.specialRequests}
                  onChange={(e) =>
                    setBookingData((prev) => ({ ...prev, specialRequests: e.target.value }))
                  }
                  onFocus={() => setFocusedField('requests')}
                  onBlur={() => setFocusedField('')}
                  rows="4"
                  className="w-full px-4 pt-6 pb-2 border rounded-2xl focus:outline-none resize-none transition-all duration-300"
                  style={{
                    backgroundColor: '#fff',
                    borderColor: '#e3d9c8',
                    color: '#5a3a1e',
                    boxShadow:
                      focusedField === 'requests'
                        ? '0 0 0 3px rgba(177, 118, 44, 0.2)'
                        : 'none',
                  }}
                  placeholder="Demandes spéciales"
                />
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'requests' || bookingData.specialRequests
                      ? 'top-2 text-xs text-[#b1762c] font-medium'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Demandes spéciales (optionnel)
                </label>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-8">
                <button
                  onClick={() => setCurrentStep('rooms')}
                  className="px-8 py-4 rounded-2xl text-[#5a3a1e] bg-[#f1e6d4] hover:bg-[#e6d5bb] transition"
                >
                  ← Retour aux chambres
                </button>

                <button
                  onClick={handleBookingSubmit}
                  className="px-12 py-4 rounded-2xl text-white font-medium transition transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(to right, #b1762c, #a56b26)',
                    boxShadow: '0 10px 20px rgba(177, 118, 44, 0.3)',
                  }}
                >
                  Confirmer la réservation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 'confirmation' && (
        <div className="rounded-3xl shadow-2xl overflow-hidden text-center p-12" style={{ backgroundColor: '#fbf8f2', color: '#5a3a1e' }}>
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-light mb-4">Réservation confirmée !</h1>
          <p className="mb-8">Merci {bookingData.firstName}, votre réservation a été enregistrée avec succès.</p>

          <div className="rounded-2xl p-6 mb-8 text-left max-w-md mx-auto" style={{ backgroundColor: '#f6efe2' }}>
            <h3 className="font-medium mb-4">Récapitulatif de votre séjour</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Chambre:</span><span className="font-medium">{selectedRoom?.name}</span></div>
              <div className="flex justify-between"><span>Dates:</span><span className="font-medium">{new Date(searchData.checkIn).toLocaleDateString('fr-FR')} - {new Date(searchData.checkOut).toLocaleDateString('fr-FR')}</span></div>
              <div className="flex justify-between"><span>Durée:</span><span className="font-medium">{nights} {nights === 1 ? 'nuit' : 'nuits'}</span></div>
              <div className="flex justify-between"><span>Invités:</span><span className="font-medium">{searchData.guests} {searchData.guests === 1 ? 'personne' : 'personnes'}</span></div>
              <div className="border-t pt-2 mt-2 flex justify-between font-medium"><span>Total:</span><span style={{ color: '#b1762c' }}>€{getTotalPrice()}</span></div>
            </div>
          </div>

          <div className="space-y-4">
            <p>Un email de confirmation a été envoyé à <span className="font-medium" style={{ color: '#b1762c' }}>{bookingData.email}</span></p>
            <p className="text-sm text-gray-500">Vous recevrez également un SMS de rappel 24h avant votre arrivée.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              onClick={() => {
                setCurrentStep('search');
                setSelectedRoom(null);
                setBookingData({ firstName: '', lastName: '', email: '', phone: '', specialRequests: '' });
                setSearchData({ checkIn: '', checkOut: '', guests: 2, rooms: 1 });
              }}
              className="px-8 py-3 rounded-xl text-[#5a3a1e] bg-[#f1e6d4] hover:bg-[#e6d5bb] transition"
            >
              Nouvelle recherche
            </button>

            <button
              onClick={() => alert('Fonction d\'impression à implémenter')}
              className="px-8 py-3 rounded-xl text-white transition"
              style={{
                background: 'linear-gradient(to right, #b1762c, #a56b26)',
                boxShadow: '0 8px 18px rgba(177, 118, 44, 0.3)',
              }}
            >
              Imprimer la confirmation
            </button>
          </div>

          <div className="mt-12 pt-8 border-t" style={{ borderColor: '#e7dcc9' }}>
            <h4 className="font-medium mb-4">Besoin d'aide ?</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+33 1 23 45 67 89</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>contact@chateau-elegance.com</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

  
};

export default HotelReservationSystem;