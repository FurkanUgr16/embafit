// components/WhatsAppButton.js
"use client"
import { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // WhatsApp simgesini içe aktarın

const WhatsAppButton = ({ 
  phoneNumber = "905310804269", 
  message = "Merhaba, size ulaşmak istiyorum." 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Ana WhatsApp Butonu */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-16 h-16 bg-green-500 hover:bg-green-600 
                     rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl 
                     transform hover:scale-110 active:scale-95 transition-all duration-300 
                     focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50
                     group"
          aria-label="WhatsApp ile iletişime geç"
        >
          {/* Pulse Ring Efekti */}
          <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 group-hover:opacity-0"></div>
          
          {/* WhatsApp Icon */}
          <WhatsAppIcon fontSize='large' className="text-white text-3xl z-10" /> {/* Simgeyi buraya yerleştirin */}
        </button>

        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-20 right-0 bg-gray-900 text-white text-sm 
                          px-4 py-2 rounded-lg shadow-xl whitespace-nowrap
                          transform transition-all duration-200 ease-out
                          animate-fade-in">
            WhatsApp ile mesaj gönder
            {/* Tooltip Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 
                            border-l-4 border-r-4 border-t-4 
                            border-l-transparent border-r-transparent border-t-gray-900">
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppButton;