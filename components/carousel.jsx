"use client"

import { useState, useRef, useEffect } from 'react';

export default function Carousel({ children }){
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const carouselRef = useRef(null);

  const totalCards = children.length;

  // Responsive cards per page calculation
  const updateCardsPerPage = () => {
    if (window.innerWidth < 640) {
      setCardsPerPage(1); // Mobile: 1 card
    } else if (window.innerWidth < 1024) {
      setCardsPerPage(2); // Tablet: 2 cards
    } else {
      setCardsPerPage(3); // Desktop: 3 cards
    }
  };

  useEffect(() => {
    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Reset index when cardsPerPage changes
  useEffect(() => {
    if (currentIndex > totalCards - cardsPerPage) {
      setCurrentIndex(Math.max(0, totalCards - cardsPerPage));
    }
  }, [cardsPerPage, totalCards, currentIndex]);

  const slide = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > totalCards - cardsPerPage) {
      newIndex = totalCards - cardsPerPage;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children[0]) {
      const cardWidth = carouselRef.current.children[0].offsetWidth;
      // CSS gap değerleriyle tutarlı olacak şekilde düzeltildi
      const gap = window.innerWidth < 640 ? 8 : window.innerWidth < 1024 ? 16 : 24; // 8px, 16px, 24px
      carouselRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }
  }, [currentIndex, cardsPerPage]);

  return (
    <div className="w-full overflow-hidden flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8">
      <button
        onClick={() => slide(-1)}
        className={`bg-brandYellow/60 hover:bg-brandYellow text-white p-2 sm:p-3 rounded-full shadow-lg text-lg sm:text-xl md:text-2xl z-20 transition-colors duration-300 flex-shrink-0 ${
          currentIndex === 0 ? 'opacity-0 pointer-events-none' : ''
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous slide"
      >
        <svg width="40" height="40" className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </button>
      
      <div className="overflow-hidden flex-grow mx-2 sm:mx-3 md:mx-4">
        <div
          className="flex transition-transform duration-500 ease-in-out py-2 sm:py-3 md:py-4 gap-2 sm:gap-4 md:gap-6" 
          ref={carouselRef}
        >
          {children}
        </div>
      </div>
      
      <button
        onClick={() => slide(1)}
        className={`bg-brandYellow/60 hover:bg-brandYellow text-white p-2 sm:p-3 rounded-full shadow-lg text-lg sm:text-xl md:text-2xl z-20 transition-colors duration-300 flex-shrink-0 ${
          currentIndex >= totalCards - cardsPerPage ? 'opacity-0 pointer-events-none' : ''
        }`}
        disabled={currentIndex >= totalCards - cardsPerPage}
        aria-label="Next slide"
      >
        <svg width="40" height="40" className="sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};