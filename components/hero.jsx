"use client"

import { motion } from 'framer-motion';

// Animasyon "variant"ları (değişkenleri) tanımlıyoruz. Bu, kodu daha temiz ve yönetilebilir yapar.
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // Çocuk elemanların (h1 ve p) art arda gelmesini sağlar.
            staggerChildren: 0.3, 
        },
    },
};

const itemVariants = {
    // Başlangıç durumu: görünmez ve 20 piksel aşağıda
    hidden: { y: 20, opacity: 0 }, 
    // Bitiş durumu: tam görünür ve orijinal pozisyonunda
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" // Animasyonun sonunda yavaşlaması için
        }
    },
};


export default function Hero({ title, text, bgImageUrl }) {
    return (
        <section
            className="relative w-screen h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${bgImageUrl})`
            }}
        >
            {/* Kapsayıcı div'i motion.div'e çeviriyoruz ve variant'ları ekliyoruz */}
            <motion.div
                className="bg-black/60 absolute inset-0 p-4 sm:p-6 md:p-[30px] text-center flex flex-col items-center justify-center text-white/90"
                variants={containerVariants}
                initial="hidden"  // Başlangıç durumu
                animate="visible" // Animasyonun hedef durumu
            >
                {/* h1 etiketini motion.h1'e çeviriyoruz */}
                <motion.h1
                    className="font-blackOpsOne text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide sm:tracking-wider md:tracking-widest text-brandYellow leading-tight"
                    variants={itemVariants} // Çocuk eleman variant'ını kullanıyoruz
                >
                    {title}
                </motion.h1>

                {/* p etiketini motion.p'ye çeviriyoruz */}
                <motion.p
                    className="mt-2 sm:mt-3 md:mt-4 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-center text-sm sm:text-lg md:text-xl lg:text-2xl font-openSans tracking-wide px-4 sm:px-0"
                    variants={itemVariants} // Çocuk eleman variant'ını kullanıyoruz
                >
                    {text}
                </motion.p>
            </motion.div>
        </section>
    )
}