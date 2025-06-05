
import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import Image1 from "@/assets/pexels-victorfreitas-949129.jpg";
import ImageSlider from "@/components/imageSlider";
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


  <h1>HEADER</h1>

  <ImageSlider>
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
            imageUrl="https://via.placeholder.com/600x800/555555/FFFFFF?text=BOX"
          />
          <Card
            title="BOX"
            description="Boks antrenmanlarıyla gücünüzü ve dayanıklılığınızı artırın."
            imageUrl="https://via.placeholder.com/600x800/555555/FFFFFF?text=BOX"
          />
          <Card
            title="BOX"
            description="Boks antrenmanlarıyla gücünüzü ve dayanıklılığınızı artırın."
            imageUrl="https://via.placeholder.com/600x800/555555/FFFFFF?text=BOX"
          />
  </ImageSlider>
  
  </>

}
