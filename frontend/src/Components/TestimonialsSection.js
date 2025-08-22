import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [likes, setLikes] = useState({});

  const testimonials = [
    {
      id: 1,
      name: "Sophie Moreau",
      location: "Paris",
      comment: "L'excellence redéfinie. Chaque instant à Velyssa transcende les attentes et crée des souvenirs impérissables.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      profession: "Architecte",
      initialLikes: 247
    },
    {
      id: 2,
      name: "Ahmed Bennani",
      location: "Casablanca", 
      comment: "Un art de vivre exceptionnel où la tradition méditerranéenne se marie à l'innovation contemporaine.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      profession: "Entrepreneur",
      initialLikes: 189
    },
    {
      id: 3,
      name: "Elena Vasquez",
      location: "Barcelona",
      comment: "Velyssa capture l'essence du luxe authentique. Une expérience qui marque l'âme autant que l'esprit.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      profession: "Designer",
      initialLikes: 312
    }
  ];

  // Initialize likes
  useEffect(() => {
    const initialLikes = {};
    testimonials.forEach(testimonial => {
      initialLikes[testimonial.id] = {
        count: testimonial.initialLikes,
        isLiked: false
      };
    });
    setLikes(initialLikes);
  }, []);

  const handleLike = (testimonialId) => {
    setLikes(prev => ({
      ...prev,
      [testimonialId]: {
        count: prev[testimonialId].isLiked 
          ? prev[testimonialId].count - 1 
          : prev[testimonialId].count + 1,
        isLiked: !prev[testimonialId].isLiked
      }
    }));
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Animation pour le titre principal
  const titleAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: 1.2
      }
    }
  };

  // Animation pour les lignes décoratives
  const lineAnimation = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { 
      scaleX: 1, 
      opacity: 1,
      transition: { 
        duration: 2, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  // Animation pour le sous-titre "Témoignages"
  const subtitleAnimation = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      letterSpacing: '0.6em',
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      letterSpacing: '0.3em',
      filter: 'blur(0px)',
      transition: { 
        duration: 1.5, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.8
      }
    }
  };

  // Animation conteneur pour orchestrer les animations
  const containerAnimation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      
      {/* Background sophistiqué */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EFE6D9]/30 via-white to-[#EFE6D9]/20"></div>
      
      {/* Pattern géométrique subtil */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E1AD2D' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header ultra-fin avec animations fluides */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerAnimation}
        >
          <motion.div className="inline-flex items-center space-x-3 mb-8">
            <motion.div 
              className="w-8 h-px bg-gradient-to-r from-transparent to-[#E1AD2D]"
              variants={lineAnimation}
              whileInView={{ 
                scaleX: [0, 1], 
                opacity: [0, 1] 
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3
              }}
            ></motion.div>
            <motion.span 
              className="text-xs font-medium text-[#B8742D] uppercase relative overflow-hidden"
              variants={subtitleAnimation}
              whileInView={{
                opacity: [0, 1],
                y: [30, 0],
                letterSpacing: ['0.6em', '0.3em'],
                filter: ['blur(6px)', 'blur(0px)']
              }}
              transition={{ 
                duration: 2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.8
              }}
            >
              <span className="inline-block">
                {'Témoignages'.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateX: 90 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0 
                    }}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.8 + (index * 0.1)
                    }}
                    viewport={{ once: true }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.span>
            <motion.div 
              className="w-8 h-px bg-gradient-to-l from-transparent to-[#E1AD2D]"
              variants={lineAnimation}
              whileInView={{ 
                scaleX: [0, 1], 
                opacity: [0, 1] 
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3
              }}
            ></motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-extralight text-[#5C2E00] tracking-wide relative"
            variants={titleAnimation}
            whileInView={{
              opacity: [0, 1],
              y: [40, 0],
              scale: [0.9, 1],
              filter: ['blur(8px)', 'blur(0px)']
            }}
            transition={{ 
              duration: 2.2, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.5
            }}
            viewport={{ once: true }}
          >
            <span className="inline-block">
              {'Expériences d\'exception'.split(' ').map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3">
                  {word.split('').map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      className="inline-block"
                      initial={{ 
                        opacity: 0, 
                        y: 60, 
                        rotateY: 90,
                        scale: 0.8
                      }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        rotateY: 0,
                        scale: 1
                      }}
                      transition={{ 
                        duration: 1.2, 
                        ease: [0.16, 1, 0.3, 1],
                        delay: 1.8 + (wordIndex * 0.3) + (letterIndex * 0.05)
                      }}
                      viewport={{ once: true }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </span>
            
            {/* Effet de lueur subtile */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E1AD2D]/10 to-transparent"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ 
                opacity: [0, 0.3, 0], 
                scaleX: [0, 1, 0] 
              }}
              transition={{ 
                duration: 3, 
                ease: [0.16, 1, 0.3, 1],
                delay: 2.5
              }}
              viewport={{ once: true }}
            />
          </motion.h2>
        </motion.div>

        {/* Container principal avec effet de perspective */}
        <div 
          className="relative perspective-1000"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Cards en cascade */}
          <div className="relative h-96 flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + testimonials.length) % testimonials.length;
              const isNext = index === (activeIndex + 1) % testimonials.length;
              
              let transform = 'translateX(100%) scale(0.8) rotateY(15deg)';
              let zIndex = 1;
              let opacity = 0;
              
              if (isActive) {
                transform = 'translateX(0%) scale(1) rotateY(0deg)';
                zIndex = 10;
                opacity = 1;
              } else if (isPrev) {
                transform = 'translateX(-80%) scale(0.85) rotateY(-15deg)';
                zIndex = 5;
                opacity = 0.7;
              } else if (isNext) {
                transform = 'translateX(80%) scale(0.85) rotateY(15deg)';
                zIndex = 5;
                opacity = 0.7;
              }

              const testimonialLikes = likes[testimonial.id] || { count: 0, isLiked: false };

              return (
                <motion.div
                  key={index}
                  className="absolute w-full max-w-lg"
                  animate={{ 
                    transform,
                    zIndex,
                    opacity
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                >
                  <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/60 shadow-2xl overflow-hidden">
                    
                    {/* Header de la card */}
                    <div className="relative h-32 bg-gradient-to-br from-[#EFE6D9]/50 to-[#E1AD2D]/10 flex items-center justify-center">
                      <div className="absolute top-4 right-4">
                        <svg className="w-6 h-6 text-[#E1AD2D]/30" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                        </svg>
                      </div>
                      
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-white/80 shadow-lg">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="p-8">
                      <blockquote className="text-[#5C2E00] text-lg font-light leading-relaxed italic mb-6 min-h-[3.5rem]">
                        "{testimonial.comment}"
                      </blockquote>

                      {/* Étoiles minimalistes */}
                      <div className="flex justify-center mb-4 space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-[#E1AD2D] rounded-full"></div>
                        ))}
                      </div>

                      {/* Section like avec cœur */}
                      <div className="flex justify-center mb-4">
                        <button
                          onClick={() => handleLike(testimonial.id)}
                          className="group flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-[#E1AD2D]/5 transition-all duration-300"
                        >
                          <motion.div
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <svg 
                              className={`w-5 h-5 transition-all duration-300 ${
                                testimonialLikes.isLiked 
                                  ? 'text-red-500 fill-current transform scale-110' 
                                  : 'text-[#E1AD2D]/40 hover:text-red-400'
                              }`} 
                              fill={testimonialLikes.isLiked ? "currentColor" : "none"}
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={testimonialLikes.isLiked ? 0 : 1.5} 
                                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                              />
                            </svg>
                          </motion.div>
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            testimonialLikes.isLiked 
                              ? 'text-red-500' 
                              : 'text-[#B8742D] group-hover:text-[#E1AD2D]'
                          }`}>
                            {testimonialLikes.count}
                          </span>
                        </button>
                      </div>

                      {/* Info client */}
                      <div className="text-center">
                        <h4 className="font-medium text-[#5C2E00] text-lg mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#B8742D] text-sm">
                          {testimonial.profession} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation sophistiquée */}
          <div className="flex justify-center items-center mt-16 space-x-8">
            
            {/* Bouton précédent */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="group w-10 h-10 rounded-full border border-[#E1AD2D]/30 hover:border-[#E1AD2D] transition-all duration-300 flex items-center justify-center hover:bg-[#E1AD2D]/5"
            >
              <svg className="w-4 h-4 text-[#E1AD2D] transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicateurs linéaires */}
            <div className="flex items-center space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="group relative"
                >
                  <div className={`transition-all duration-500 ${
                    index === activeIndex 
                      ? 'w-12 h-0.5 bg-[#E1AD2D]' 
                      : 'w-6 h-0.5 bg-[#E1AD2D]/20 group-hover:bg-[#E1AD2D]/50'
                  }`}></div>
                  {index === activeIndex && (
                    <div className="absolute -top-1 left-0 w-2 h-2 bg-[#E1AD2D] rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Bouton suivant */}
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
              className="group w-10 h-10 rounded-full border border-[#E1AD2D]/30 hover:border-[#E1AD2D] transition-all duration-300 flex items-center justify-center hover:bg-[#E1AD2D]/5"
            >
              <svg className="w-4 h-4 text-[#E1AD2D] transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

        {/* Footer minimaliste */}
        <motion.div 
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center space-x-4 text-[#B8742D] text-sm">
            <div className="w-3 h-px bg-[#E1AD2D]/30"></div>
            <span>Plus de 500 expériences d'exception</span>
            <div className="w-3 h-px bg-[#E1AD2D]/30"></div>
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;