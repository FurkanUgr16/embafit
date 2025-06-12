"use client";

import { useState, useRef } from 'react';
import { motion, useInView, LayoutGroup } from 'framer-motion';

// Veri ve animasyon variantları aynı kalıyor
const dojoKunData = [
    { japanese: "一、吾々は心身を錬磨し 確固不抜の心技を極めること", turkish: "Karakterimizi, bedenimizi ve ruhumuzu sarsılmaz bir şekilde eğiteceğiz." },
    { japanese: "一、吾々は武の真髄を極め 機に発し感に敏なること", turkish: "Bu süre içinde duygularımızın uyarısı olabilir. Böylece dövüş sanatları yolunun gerçek anlamını sürdürmeye devam edeceğiz."},
    { japanese: "一、吾々は質実剛健を以て 克己の精神を涵養すること", turkish: "Gerçek gayreti öz inkar ruhunu yetiştirmek için çalışacağız." },
    { japanese: "一、吾々は礼節を重んじ 長上を敬し 粗暴の振る舞いを慎むこと", turkish: "Üstlerimize saygı gösterip şiddetten kaçınarak nezaket kurallarına uyacağız." },
    { japanese: "一、吾々は神仏を尊び 謙譲の美徳を忘れざること", turkish: "Dini ilkelerimizi takip edeceğiz. Tevazü gerçek erdemi asla unutmayacağız."},
    { japanese: "一、吾々は知性と体力とを向上させ、事に望んで過たざること", turkish: "Diğer arzuları arayan değil bilgelik ve güçle ileriye bakacağız."},
    { japanese: "一、吾々は生涯の修行を空手の道に通じ 極真の道を全うすること", turkish: "Karateyi disiplin aracılığı ile tüm hayatımızı, Kyokushin yoluyla gerçek anlamını yerine getirmek için çalışacağız."},
    { japanese: " ", turkish: "OSU!"},
];

const containerVariant = { /* ... */ };
const itemVariant = { /* ... */ };


export default function KyokushinHome() {
    const [language, setLanguage] = useState('turkish');
    const animationRef = useRef(null);
    const isInView = useInView(animationRef, { once: true, amount: 0.2 });

    return (
        <motion.section
            ref={animationRef}
            variants={containerVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            // 1. Dikey Boşluk (Padding) responsive yapıldı
            className="bg-white text-gray-800 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto text-center">
                {/* 2. Başlıkların font boyutları responsive yapıldı */}
                <motion.h1 variants={itemVariant} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-blackOpsOne text-brandYellow uppercase tracking-wider">
                    Dojo Kun (道場訓)
                </motion.h1>
                <motion.p variants={itemVariant} className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 font-openSans leading-relaxed">
                    Dojo Kun, antrenman sonunda okunan ve karate-ka'nın zihinsel ve ruhsal gelişimini hedefleyen dojo yeminidir. Bu yemin, savaş sanatının fiziksel yönlerinin ötesindeki ahlaki değerleri hatırlatır.
                </motion.p>

                {/* Butonlar arası boşluk responsive yapıldı */}
                <motion.div variants={itemVariant} className="mt-10 mb-12 flex justify-center items-center space-x-6 sm:space-x-8">
                    <LayoutGroup>
                        <TabButton text="Türkçe" isSelected={language === 'turkish'} onClick={() => setLanguage('turkish')} />
                        <TabButton text="Japonca" isSelected={language === 'japanese'} onClick={() => setLanguage('japanese')} />
                    </LayoutGroup>
                </motion.div>

                {/* İçerik alanı için minimum yükseklik responsive yapıldı */}
                <div className="mt-8 min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
                    {language === 'turkish' ? (
                        // Türkçe metin font boyutu ve boşlukları responsive yapıldı
                        <motion.div
                            key="turkish-version"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                            className="space-y-6 md:space-y-8 font-openSans text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed sm:leading-loose max-w-4xl mx-auto"
                        >
                            {dojoKunData.map((item, index) => <p key={index}>{item.turkish}</p>)}
                        </motion.div>
                    ) : (
                        // 3. JAPONCA METİN İÇİN EN KRİTİK DEĞİŞİKLİK
                        <motion.div
                            key="japanese-version"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.5 } }}
                        >
                            {/* Yatayda kaydırma sağlayan sarmalayıcı */}
                            <div className="w-full overflow-x-auto pb-4">
                                <div className="flex flex-nowrap justify-start sm:justify-center items-start gap-x-6 sm:gap-x-8 md:gap-x-12 w-max mx-auto px-4 sm:px-0">
                                    {dojoKunData.map((item, index) => (
                                        <div
                                            key={index}
                                            // Dikey metin yüksekliği ve font boyutu responsive yapıldı
                                            className="text-xl sm:text-2xl md:text-3xl h-[320px] sm:h-[360px] md:h-[400px] text-gray-900 [writing-mode:vertical-rl] text-orientation-mixed tracking-widest font-noto-sans-jp"
                                        >
                                            {item.japanese}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.section>
    );
}

// Buton font boyutu responsive yapıldı
function TabButton({ text, isSelected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`relative px-2 py-2 text-base sm:text-lg font-medium transition-colors duration-300
                ${isSelected ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'}
            `}
        >
            <span className="relative z-10">{text}</span>
            {isSelected && ( <motion.div layoutId="active-tab-underline" /*...*/ /> )}
        </button>
    );
}