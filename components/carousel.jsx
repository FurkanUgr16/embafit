"use client";

// 1. Gerekli modülleri içe aktarıyoruz
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

// 2. Animasyon variant'larını tanımlıyoruz
const carouselVariants = {
  // Başlangıç durumu: 75px aşağıda ve görünmez
  hidden: { opacity: 0, y: 75 },
  // Bitiş durumu: Orijinal pozisyonunda ve görünür
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  },
};

export default function Carousel({ children }){
  // ... (Mevcut state'leriniz ve fonksiyonlarınızın tümü AYNEN KALIYOR)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 3. Animasyonu tetiklemek için ref ve hook'u ayarlıyoruz
  const animationRef = useRef(null);
  // { once: true } animasyonun sadece bir kez çalışmasını sağlar
  const isInView = useInView(animationRef, { once: true, amount: 0.2 });

  // Mevcut kodunuzdaki tüm fonksiyonlar ve useEffect'ler burada...
  const totalCards = Array.isArray(children) ? children.length : 0;

  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) setCardsPerPage(1);
    else if (window.innerWidth < 1024) setCardsPerPage(2);
    else setCardsPerPage(3);
  };
  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  useEffect(() => {
    if (totalCards > 0 && currentIndex > totalCards - cardsPerPage) {
      setCurrentIndex(Math.max(0, totalCards - cardsPerPage));
    }
  }, [cardsPerPage, totalCards, currentIndex]);
  
  const slide = (direction) => {
    let newIndex = currentIndex + direction;
    if (totalCards > 0) {
      if (newIndex < 0) newIndex = Math.max(0, totalCards - cardsPerPage);
      else if (newIndex > totalCards - cardsPerPage) newIndex = 0;
    } else {
        newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e) => { /* ... */ };
  const handleTouchMove = (e) => { /* ... */ };
  const handleTouchEnd = () => { /* ... */ };
  useEffect(() => { /* ... */ }, [isDragging]);
  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      const gap = window.innerWidth < 640 ? 8 : window.innerWidth < 1024 ? 16 : 24;
      carouselRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }
  }, [currentIndex, cardsPerPage]);

  return (
    // 4. Ana kapsayıcıyı motion.div'e çevirip animasyon proplarını ekliyoruz
    <motion.div
        ref={animationRef}
        variants={carouselVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full overflow-hidden flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8"
    >
       <button
        onClick={() => slide(-1)}
        className="hidden sm:flex bg-brandYellow/60 hover:bg-brandYellow text-white p-2 sm:p-3 rounded-full shadow-lg text-lg sm:text-xl md:text-2xl z-20 transition-colors duration-300 flex-shrink-0"
        aria-label="Previous slide"
      >
        <svg width="40" height="40" className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </button>

      
      <div 
        className="overflow-hidden flex-grow mx-0 sm:mx-2 md:mx-4 cursor-grab active:cursor-grabbing sm:cursor-default"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out py-2 sm:py-3 md:py-4 gap-2 sm:gap-4 md:gap-6" 
          ref={carouselRef}
        >
          {children}
        </div>
      </div>
      
      {/* Sağ Ok */}
       <button
        onClick={() => slide(1)}
        className="hidden sm:flex bg-brandYellow/60 hover:bg-brandYellow text-white p-2 sm:p-3 rounded-full shadow-lg text-lg sm:text-xl md:text-2xl z-20 transition-colors duration-300 flex-shrink-0"
        aria-label="Next slide"
      >
        <svg width="40" height="40" className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </button>
    </motion.div>
  );
};
