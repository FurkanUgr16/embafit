import Image from "next/image"
export default function Card ({title, description, imageUrl}){
    return (
    <div className="relative w-[350] mx-4 overflow-hidden flex-shrink-0 group ">
  
      {imageUrl && (
        <Image
          width={350}
          height={600}
          src={imageUrl}
          alt={title}
          className="w-[350] h-[600] object-cover bg-center bg-no-repeat bg-cover transform transition-transform duration-300 group-hover:scale-105" 
        />
      )}

      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6 text-white">
        {title && <h3 className="text-3xl font-bold font-blackOpsOne mb-2 text-center uppercase">{title}</h3>} 
        {description && <p className="text-sm mb-4 font-openSans text-center">{description}</p>} 
      </div>
    </div>
  );
};