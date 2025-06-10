"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Single row component
const ImageRow = ({ images, reverse = false, speed = 30, rowIndex = 0 }) => {
  // Create triple array for seamless looping
  const extendedImages = [...images, ...images, ...images];
  
  // Calculate dimensions
  const imageWidth = 300; // Fixed width in pixels
  const totalOriginalWidth = images.length * imageWidth;
  
  return (
    <div className="overflow-hidden h-48 mb-4">
      <motion.div
        className="flex h-full"
        animate={{
          x: reverse 
            ? [`-${totalOriginalWidth}px`, `0px`]
            : [`-${totalOriginalWidth}px`, `-${totalOriginalWidth * 2}px`]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: totalOriginalWidth / speed,
            ease: "linear",
          },
        }}
        style={{
          width: `${extendedImages.length * imageWidth}px`,
        }}
        initial={{
          x: `-${totalOriginalWidth}px` // Start from middle section
        }}
      >
        {extendedImages.map((item, idx) => {
          const imageSrc = item?.imageUrl || item?.src || item;
          const imageTitle = item?.title || `Image ${idx + 1}`;
          
          if (!imageSrc || imageSrc.trim() === '') {
            return (
              <div
                key={`placeholder-${rowIndex}-${idx}`}
                className="flex-shrink-0 bg-gray-200 flex items-center justify-center mr-4 rounded-lg"
                style={{ width: `${imageWidth - 16}px`, height: '100%' }}
              >
                <span className="text-gray-500 text-sm">No Image</span>
              </div>
            );
          }

          return (
            <div
              key={`${imageSrc}-${rowIndex}-${idx}`}
              className="flex-shrink-0 relative mr-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ width: `${imageWidth - 16}px`, height: '100%' }}
            >
              <Image
                src={imageSrc}
                alt={imageTitle}
                fill
                className="object-cover"
                sizes={`${imageWidth}px`}
                priority={rowIndex === 0 && idx < 3}
                onError={(e) => {
                  console.warn('Image failed to load:', imageSrc);
                }}
              />
              {/* Image title overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-sm font-medium truncate">
                  {imageTitle}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

// Main component
export default function ThreeRowGridLayout({ 
  images = [], 
  speed = 30 // pixels per second
}) {
  // Validate images
  const validImages = images.filter(item => {
    const src = item?.imageUrl || item?.src || item;
    return src && src.trim() !== '';
  });

  if (validImages.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg">
        <span className="text-gray-500 text-lg">No valid images to display</span>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gray-50">
      <div className="max-w-full">
        {/* Row 1: Left to Right (Normal) */}
        <ImageRow 
          images={validImages} 
          reverse={false} 
          speed={speed}
          rowIndex={0}
        />
        
        {/* Row 2: Right to Left (Reverse) */}
        <ImageRow 
          images={validImages} 
          reverse={true} 
          speed={speed * 0.8} // Slightly different speed for variation
          rowIndex={1}
        />
        
        {/* Row 3: Left to Right (Normal) */}
        <ImageRow 
          images={validImages} 
          reverse={false} 
          speed={speed * 1.2} // Slightly different speed for variation
          rowIndex={2}
        />
      </div>
    </div>
  );
}