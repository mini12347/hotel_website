import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1.4, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    } 
  },
};

const floatingMotion = {
  y: [0, -12, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const staggerText = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function AboutSection() {
  const title = "Notre philosophie";
  const text = "À Velyssa, chaque séjour est pensé comme une immersion dans l'élégance. Nos suites somptueuses, notre cuisine raffinée et notre service d'exception sont conçus pour vous offrir bien plus qu'un simple hébergement : une émotion.";

  return (
    <section
      id="apropos"
      className="relative py-32 px-8 md:px-20 bg-gradient-to-b from-[#F5F0E8] to-[#EFE6D9] overflow-hidden"
    >
      {/* Éléments décoratifs flottants */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-[#B8742D]/5 rounded-full blur-2xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 bg-[#5C2E00]/3 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 25, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Titre avec animation de lettres */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-8 text-[#5C2E00] tracking-wider"
            animate={floatingMotion}
            variants={staggerText}
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                className="inline-block"
                style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Ligne décorative animée */}
          <motion.div 
            className="flex items-center justify-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.div 
              className="flex items-center space-x-4"
              animate={{ 
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#B8742D]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
              <motion.div 
                className="w-2 h-2 bg-[#B8742D] rounded-full"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#B8742D]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Texte principal avec effet typewriter subtil */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <motion.p
            className="text-xl md:text-2xl text-[#5C2E00]/80 leading-relaxed font-light max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 2,
              delay: 1.5,
              ease: "easeOut"
            }}
          >
            {text.split(' ').map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.5 + (index * 0.03),
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Effet de brillance subtil */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
            animate={{ 
              x: ['-100%', '100%'],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Citation décorative */}
        <motion.div
          className="mt-16 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="text-6xl text-[#B8742D]/20 font-serif absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotate: [0, 2, 0, -2, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            "
          </motion.div>
          
          <motion.p
            className="text-lg text-[#B8742D] font-light italic tracking-wide"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 2.5 }}
          >
            L'art de l'hospitalité réinventé
          </motion.p>
        </motion.div>

        {/* Effet de particules subtiles */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#B8742D]/30 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${40 + (i % 2) * 20}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;