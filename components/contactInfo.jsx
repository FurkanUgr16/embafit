"use client";

// 1. Gerekli modülleri içe aktarıyoruz
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// 2. Animasyon variant'larını tanımlıyoruz
// Soldan gelecek kutu için
const fromLeftVariant = {
  hidden: { opacity: 0, x: -100 }, // Başlangıç: solda ve görünmez
  visible: { 
    opacity: 1, 
    x: 0, // Bitiş: orijinal pozisyonunda ve görünür
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// Sağdan gelecek kutu için
const fromRightVariant = {
  hidden: { opacity: 0, x: 100 }, // Başlangıç: sağda ve görünmez
  visible: { 
    opacity: 1, 
    x: 0, // Bitiş: orijinal pozisyonunda ve görünür
    transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } // Daha hoş bir etki için hafif gecikme
  },
};


export default function ContactInfo() {
    // 3. Animasyonu tetiklemek için ref ve hook'u ayarlıyoruz
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        // Ana kapsayıcıya ref'i ekliyoruz. Animasyonlar bu eleman görününce tetiklenecek.
        <div ref={containerRef} className="flex flex-col lg:flex-row justify-evenly items-stretch gap-6 mx-4 md:mx-8 lg:mx-16 my-8 md:my-12">
            
            {/* İletişim Bilgileri (Soldan gelecek) */}
            <motion.div 
                className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8"
                variants={fromLeftVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl  text-gray-800 font-openSans">
                        İletişim Bilgileri
                    </h3>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                    {/* Telefon */}
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <PhoneIcon className="text-blue-600 mt-1 text-xl md:text-2xl flex-shrink-0" />
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1 font-openSans">Telefon</h4>
                            <p className="text-gray-600 text-sm md:text-base font-openSans">+90 531 080 42 69</p>
                        </div>
                    </div>
                    {/* Adres */}
                    <div className="flex items-start space-x-3 md:space-x-4">
                        <LocationPinIcon className="text-red-600 mt-1 text-xl md:text-2xl flex-shrink-0" />
                        <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base mb-1 font-openSans">Adres</h4>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-openSans">Ertuğrul Mahallesi, Elmas Sokak. No:21, 16000 Ni̇lüfer/Bursa</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Çalışma Saatleri (Sağdan gelecek) */}
            <motion.div 
                className="flex-1 bg-white rounded-lg shadow-md p-6 md:p-8"
                variants={fromRightVariant}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <div className="text-center mb-6">
                    <h3 className="text-xl md:text-2xl  text-gray-800 flex items-center justify-center space-x-2">
                        <AccessTimeIcon className="text-green-600 text-xl md:text-2xl" />
                        <span className='font-openSans'>Çalışma Saatleri</span>
                    </h3>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                    {/* Saatler... */}
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm md:text-base font-openSans">Pazartesi - Cuma</span>
                        <span className="text-gray-600 text-sm md:text-base font-openSans">10:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium text-gray-800 text-sm md:text-base font-openSans">Cumartesi</span>
                        <span className="text-gray-600 text-sm md:text-base font-openSans">10:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-800 text-sm md:text-base font-openSans">Pazar</span>
                        <span className="text-red-500 text-sm md:text-base font-openSans">Kapalı</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}