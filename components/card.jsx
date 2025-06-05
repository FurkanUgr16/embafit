import Image from "next/image"
export default function Card ({title, description, imageUrl}){
    return (
    // Kartın genel konteyneri: Tailwind CSS ile genişlik, yükseklik, kenarlık, gölge vb.
    <div className="relative w-[300] mx-2 overflow-hidden shadow-lg flex-shrink-0 group">
      {/* Arka plan resmi */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-[300] h-[600] object-cover bg-center bg-no-repeat bg-cover transform transition-transform duration-300 group-hover:scale-105" // Resim boyutları ve hover efekti
        />
      )}

      {/* İçerik katmanı: Resmin üzerine bindirilen metin ve düğme */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
        {title && <h3 className="text-3xl font-bold mb-2 text-center uppercase">{title}</h3>} {/* Başlık */}
        {description && <p className="text-sm mb-4 text-center">{description}</p>} {/* Açıklama */}
        {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full self-center transition-colors duration-300">
          
        </button> */}
      </div>
    </div>
  );
};