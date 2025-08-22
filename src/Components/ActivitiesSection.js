import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.3, 
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

const floatingMotion = {
  y: [0, -10, 0],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const pulseMotion = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

function ActivitiesSection() {
  const activities = [
    {
      title: "Plongée sous-marine",
      description: "Explorez les fonds marins cristallins et découvrez la richesse de la vie aquatique",
      icon: "🤿",
      color: "from-[#5C2E00] to-[#8B4513]"
    },
    {
      title: "Cours de cuisine",
      description: "Maîtrisez l'art culinaire local avec nos chefs renommés",
      icon: "👨‍🍳",
      color: "from-[#B8742D] to-[#D4A574]"
    },
    {
      title: "Yoga au lever du soleil",
      description: "Trouvez votre équilibre intérieur face à l'océan au petit matin",
      icon: "🧘‍♀️",
      color: "from-[#D4A574] to-[#EFE6D9]"
    },
    {
      title: "Randonnées",
      description: "Parcourez des sentiers authentiques à travers des paysages préservés",
      icon: "🥾",
      color: "from-[#8B4513] to-[#B8742D]"
    },
    {
      title: "Sorties en bateau",
      description: "Naviguez vers des îles secrètes et des criques cachées",
      icon: "⛵",
      color: "from-[#5C2E00] to-[#D4A574]"
    },
    {
      title: "Visites culturelles",
      description: "Immergez-vous dans l'histoire et les traditions locales",
      icon: "🏛️",
      color: "from-[#B8742D] to-[#5C2E00]"
    },
  ];

  return (
    <section
      id="activites"
      className="relative py-32 px-6 md:px-20 bg-gradient-to-br from-[#EFE6D9] via-[#F5F0E8] to-[#EFE6D9] overflow-hidden"
    >
      {/* Éléments décoratifs animés */}
      <motion.div 
        className="absolute top-16 right-20 w-40 h-40 bg-[#B8742D]/4 rounded-full blur-3xl"
        animate={{
          x: [0, 25, 0],
          y: [0, -15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-24 left-16 w-56 h-56 bg-[#5C2E00]/3 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* En-tête élégant */}
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
            Activités
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div 
              className="flex items-center space-x-6"
              animate={pulseMotion}
            >
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[#B8742D]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.div 
                className="w-3 h-3 bg-[#B8742D] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[#B8742D]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-[#5C2E00]/70 text-lg max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.8 }}
          >
            Des expériences authentiques pour enrichir votre séjour et créer des souvenirs inoubliables
          </motion.p>
        </motion.div>

        {/* Grille d'activités avec espacement généreux */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
        >
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              variants={fadeInUp}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Carte moderne avec design sophistiqué */}
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-700">
                
                {/* Image avec overlay gradient */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={`https://source.unsplash.com/700x500/?${activity.title.toLowerCase().replace(' ', ',')},luxury`}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  {/* Overlay avec gradient personnalisé */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />
                  
                  {/* Icône flottante */}
                  <motion.div 
                    className="absolute top-6 right-6 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {activity.icon}
                  </motion.div>

                  {/* Effet de lumière animé */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </div>

                {/* Contenu avec espacement parfait */}
                <div className="p-8">
                  <motion.h3
                    className="text-xl font-medium mb-4 text-[#5C2E00] group-hover:text-[#B8742D] transition-colors duration-500"
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {activity.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-[#5C2E00]/70 leading-relaxed font-light mb-6"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activity.description}
                  </motion.p>

                  {/* Bouton d'action élégant */}
                  <motion.div
                    className="flex items-center text-[#B8742D] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-500"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm font-medium tracking-wide">Découvrir</span>
                    <motion.svg 
                      className="w-4 h-4 ml-3" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Ligne décorative animée */}
                <motion.div 
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>

              {/* Effet de particules au survol */}
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-[#B8742D]/60 rounded-full"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${30 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: [-15, -35, -15],
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Élément de fermeture élégant */}
        <motion.div 
          className="flex items-center justify-center mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="text-center"
            animate={{ 
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <motion.p 
              className="text-[#5C2E00]/60 font-light italic mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              Chaque moment devient une aventure
            </motion.p>
            <motion.div 
              className="flex items-center justify-center space-x-3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#B8742D]" />
              <div className="w-2 h-2 bg-[#B8742D] rounded-full" />
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#B8742D]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ActivitiesSection;