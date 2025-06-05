
import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import Image1 from "@/assets/pexels-victorfreitas-949129.jpg";
import Carousel from "@/components/carousel";
import Card from "@/components/card";


export default function Home() {

  const SliderImages = [
     "/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg",
     "/pexels-victorfreitas-949131.jpg"
  ]

  return <>
  <Hero />
  <ImageText 
    imageUrl={Image1} alt="deadlift"
    title="Header"
    description="Lorem Ipsum is simply dummy 
    text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  />
  <ImageText 
    imageUrl={Image1} alt="deadlift"
    title="Header"
    description="Lorem Ipsum is simply dummy 
    text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    reverse
  />


      <div className="text-center mt-[60] mb-[30]">
          <h1 className=" font-blackOpsOne text-4xl text-brandYellow uppercase  ">HEADER</h1>
          <p className="font-openSans capitalize">Subtext</p>
      </div>

      <Carousel>
          <Card
            title="Ürün 1"
            description="Bu, ürünlerinizden biri için harika bir açıklama."
            imageUrl="/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg"
          />
          <Card
            title="Ürün 2"
            description="İkinci ürünümüz de oldukça etkileyici özelliklere sahip."
            imageUrl="/pexels-victorfreitas-949131.jpg"
          />
          <Card
            title="BOX"
            description="Boks antrenmanlarıyla gücünüzü ve dayanıklılığınızı artırın."
            imageUrl="/pexels-victorfreitas-949129.jpg"
          />
          <Card
            title="BOX"
            description="Boks antrenmanlarıyla gücünüzü ve dayanıklılığınızı artırın."
            imageUrl="/pexels-victorfreitas-949129.jpg"
          />
          <Card
            title="BOX"
            description="Boks antrenmanlarıyla gücünüzü ve dayanıklılığınızı artırın."
            imageUrl="/pexels-victorfreitas-949129.jpg"
          />
  </Carousel>
  
  </>

}
