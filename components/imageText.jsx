"use client"
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ImageText({ imageUrl, title, description, reverse, alt }) {
    // 1. Animasyonu tetiklemek için referans ve hook'ları ayarlıyoruz.
    const ref = useRef(null);
    // { once: true } animasyonun sadece bir kez çalışmasını sağlar.
    const isInView = useInView(ref, { once: true }); 
    const mainControls = useAnimation();

    // 2. 'reverse' prop'una göre dinamik animasyon variant'ları oluşturuyoruz.
    const imageVariants = {
        hidden: { 
            opacity: 0, 
            x: reverse ? 100 : -100 // reverse ise sağdan (-), değilse soldan (+) gelsin
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        },
    };

    const textVariants = {
        hidden: { 
            opacity: 0, 
            x: reverse ? -100 : 100 // reverse ise soldan (+), değilse sağdan (-) gelsin
        },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } // Resimden biraz sonra başlaması için hafif gecikme
        },
    };

    // 3. Bileşen ekrana girdiğinde animasyonu başlatıyoruz.
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        // Ana kapsayıcıya ref'i ekliyoruz. Framer Motion bu elemanı izleyecek.
        <section 
            ref={ref}
            className={`flex flex-col md:flex-row items-center justify-around gap-6 sm:gap-8 md:gap-10 mx-2 sm:mx-3 px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-10 md:py-12 text-center sm:text-left mb-6 sm:mb-8 md:mb-[40px] ${reverse && "md:flex-row-reverse md:w-full"}`}
        >
            {/* 4. Resim kapsayıcısını motion.div'e çevirip variant'ları ekliyoruz */}
            <motion.div 
                className="w-full md:w-1/2"
                variants={imageVariants}
                initial="hidden"
                animate={mainControls}
            >
                {imageUrl &&
                    <Image
                        src={imageUrl}
                        alt={alt}
                        height={600}
                        width={400}
                        className="shadow-lg object-cover w-full h-auto  max-h-[300px] sm:max-h-[400px] md:max-h-none"
                    />
                }
            </motion.div>

            {/* 5. Metin kapsayıcısını motion.div'e çevirip variant'ları ekliyoruz */}
            <motion.div 
                className="w-full md:w-1/2 px-2 sm:px-0"
                variants={textVariants}
                initial="hidden"
                animate={mainControls}
            >
                <h2 className="text-center sm:text-left text-2xl sm:text-3xl md:text-4xl font-blackOpsOne mb-3 sm:mb-4 uppercase text-brandYellow leading-tight">
                    {title}
                </h2>
                <p className="text-gray-600 font-openSans text-base sm:text-lg md:text-xl text-center sm:text-left leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </section>
    )
}