"use client"; // Hook'lar kullanıldığı için bu direktif gerekli

// 1. Gerekli modülleri içe aktarıyoruz
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// 2. Animasyon variant'larını tanımlıyoruz
const mapAnimationVariants = {
  hidden: { opacity: 0, y: 50 }, // Başlangıç: 50px aşağıda ve görünmez
  visible: { 
    opacity: 1, 
    y: 0, // Bitiş: Orijinal pozisyonunda ve görünür
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  },
};

export default function Map(){
   // 3. Animasyonu tetiklemek için ref ve hook'u ayarlıyoruz
   const mapRef = useRef(null);
   const isInView = useInView(mapRef, { once: true, amount: 0.3 }); // %30'u görününce tetikle

   return (
      // 4. Ana div'i motion.div'e çevirip animasyon proplarını ekliyoruz
      <motion.div 
         ref={mapRef}
         variants={mapAnimationVariants}
         initial="hidden"
         animate={isInView ? "visible" : "hidden"}
         className="flex items-center justify-center p-4"
      >
         <iframe 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 
                       sm:w-5/6 md:w-4/5 lg:w-4/5 xl:w-4/5
                       rounded-lg shadow-lg" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.8426125016952!2d28.921613384705143!3d40.2148261234434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca393cf0533fe3%3A0x318fc65b5e1a246e!2sKyokushin%20Karate%20Academy%20-%20Emba%20Fit%20Spor%20Kul%C3%BCb%C3%BC!5e0!3m2!1str!2str!4v1749302079619!5m2!1str!2str"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
         </iframe>
      </motion.div>
   )
}