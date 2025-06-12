import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import Carousel from "@/components/carousel";
import Card from "@/components/card";
import { fitnessCardContent } from "@/libs/cardContent";




export default function Home() {
  return <>
  <Hero 
    title="DEĞİŞİME HAZIR MISIN?"
    text="Sadece vücudunu değil, hayatını da şekillendir."
    bgImageUrl="/danielle-cerullo-CQfNt66ttZM-unsplash.jpg"
  />
  <ImageText 
    imageUrl="/victor-freitas-nlZTjUZX2qo-unsplash.jpg" alt="deadlift"
    title="SİZE ÖZEL YOL HARİTASI"
    description=" Herkesin vücudu ve hedefi farklıdır. Alanında uzman ekibimiz, sizinle bire bir ilgilenerek hedeflerinize en uygun antrenman ve beslenme programını oluşturur. Sadece bir spor salonu değil, başarınıza giden yolda en güvenilir partneriniz olmak için buradayız."
  />
  <ImageText 
    imageUrl="/pexels-victorfreitas-703016.jpg" alt="deadlift"
    title="BİR SALONDAN DAHA FAZLASI"
    description="Biz, hedeflerine tutkuyla bağlı insanlardan oluşan bir topluluğuz. Burada sadece antrenman yapmaz, aynı zamanda ilham alır, tecrübelerinizi paylaşır ve birbirinizi daha iyiye teşvik edersiniz. Eğitmenlerimiz ve diğer üyelerimizle birlikte, bu yolculukta sizin yanınızdayız."
    reverse
  />


      <div className="text-center mt-[60] mb-[30]">
          <h1 className=" font-blackOpsOne text-4xl text-brandYellow uppercase  ">ARAMIZA KATIL, FARKI HİSSET</h1>
          <p className="font-openSans capitalize">Profesyonel eğitmenlerle hedeflerine güvenle ulaş.</p>
      </div>

      <Carousel>
          <Card cardContext={fitnessCardContent} />
      </Carousel>  
  </>

}
