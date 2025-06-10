import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import Carousel from "@/components/carousel";
import Card from "@/components/card";
import { fitnesscardContent } from "@/libs/cardContent";
import WhatsAppButton from "@/components/whatsappButton";



export default function Home() {
  return <>
  <Hero 
    title="DİSİPLİNİNİ GÖSTER"
    text="En İyi vücudu İnşa et"
    bgImageUrl="/pexels-victorfreitas-791763.jpg"
  />
  <ImageText 
    imageUrl="/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg" alt="deadlift"
    title="Header"
    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non dignissimos porro deserunt iusto a iure aspernatur eaque odio totam reprehenderit, consequuntur cum vero. Ab illum adipisci error nam voluptatibus?
  Qui delectus vel vero, "
  />
  <ImageText 
    imageUrl="/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg" alt="deadlift"
    title="Header"
    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non dignissimos porro deserunt iusto a iure aspernatur eaque odio totam reprehenderit, consequuntur cum vero. Ab illum adipisci error nam voluptatibus?
  Qui delectus vel vero,"
    reverse
  />


      <div className="text-center mt-[60] mb-[30]">
          <h1 className=" font-blackOpsOne text-4xl text-brandYellow uppercase  ">HEADER</h1>
          <p className="font-openSans capitalize">Subtext</p>
      </div>

      <Carousel>
          <Card cardContext={fitnesscardContent} />
  </Carousel>  
  </>

}
