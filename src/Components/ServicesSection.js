import React from "react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const floatingMotion = {
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

function ServicesSection() {
  const services = [
    { 
      title: "Spa & Bien-être", 
      description: "Un sanctuaire de détente où corps et esprit retrouvent leur harmonie",
      image: "https://source.unsplash.com/800x600/?spa,wellness,luxury"
    },
    { 
      title: "Gastronomie", 
      description: "Une cuisine d'exception qui sublime les saveurs authentiques",
      image: "https://source.unsplash.com/800x600/?fine,dining,restaurant"
    },
    { 
      title: "Suites Luxueuses", 
      description: "Des espaces raffinés pensés pour votre confort absolu",
      image: "https://source.unsplash.com/800x600/?luxury,suite,hotel"
    },
    { 
      title: "Piscine & Plage", 
      description: "Un accès privilégié à des eaux cristallines",
      image: "https://source.unsplash.com/800x600/?pool,beach,resort"
    },
    { 
      title: "Salle de sport", 
      description: "Un espace moderne pour maintenir votre forme",
      image: "https://source.unsplash.com/800x600/?gym,fitness,modern"
    },
    { 
      title: "Excursions guidées", 
      description: "Des découvertes authentiques avec nos guides experts",
      image: "https://source.unsplash.com/800x600/?adventure,travel,guide"
    },
  ];

  return (
    <section
      id="services"
      className="py-32 px-6 md:px-20 bg-gradient-to-b from-[#EFE6D9] to-[#F5F0E8]"
    >
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec animation douce */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light mb-8 text-[#5C2E00] tracking-wider"
            animate={floatingMotion}
          >
            Nos Services
          </motion.h2>
          
          <motion.div 
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#B8742D] to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-[#5C2E00]/70 text-lg max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            Une sélection de services pensés pour créer des moments d'exception et de bien-être absolu
          </motion.p>
        </motion.div>

        {/* Grille de services avec espacement généreux */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={fadeInUp}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Carte avec design moderne */}
              <div className="relative bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-700">
                
                {/* Image avec overlay subtil */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  
                  {/* Overlay graduel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Effet de lumière douce */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{ 
                      background: [
                        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
                        "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                        "linear-gradient(135deg, transparent 0%, transparent 50%, rgba(255,255,255,0.1) 100%)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Contenu avec espacement parfait */}
                <div className="p-8">
                  <motion.h3
                    className="text-xl font-medium mb-4 text-[#5C2E00] group-hover:text-[#B8742D] transition-colors duration-500"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-[#5C2E00]/60 leading-relaxed font-light mb-6"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  {/* Ligne décorative animée */}
                  <motion.div 
                    className="h-0.5 bg-gradient-to-r from-[#B8742D] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Élément décoratif final */}
        <motion.div 
          className="flex items-center justify-center mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="flex items-center space-x-6"
            animate={{ 
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#B8742D]" />
            <div className="w-3 h-3 bg-[#B8742D] rounded-full" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#B8742D]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;