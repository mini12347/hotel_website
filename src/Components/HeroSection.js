import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {heroImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: index === currentImage ? 1 : 0,
            scale: index === currentImage ? 1 : 1.05,
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* Voile de superposition subtile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10" />

      {/* Texte et bouton au centre */}
      <motion.div
        className="relative z-20 text-center text-white px-6 flex flex-col justify-center items-center h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeIn}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-wide"
          variants={zoomIn}
        >
          Vivez le luxe autrement
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md"
          variants={fadeIn}
        >
          Découvrez une expérience unique au cœur de la Méditerranée, dans un lieu où chaque détail inspire le raffinement.
        </motion.p>

        <motion.div variants={zoomIn}>
          <Link
            to="/reservation"
            className="inline-block bg-[#E1AD2D] hover:bg-[#B8742D] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1"
          >
            Réserver maintenant
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Dots de navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full border border-white ${
              currentImage === index ? "bg-white" : "bg-white/30"
            } transition-all duration-300`}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;