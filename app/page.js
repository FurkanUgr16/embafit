import Header from "@/components/header";
import Hero from "@/components/hero";
import ImageText from "@/components/imageText";
import Image1 from "../assets/pexels-victorfreitas-949129.jpg";
import ImageSlider from "@/components/imageSlider";


export default function Home() {

  const SliderImages = [
     "/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club.jpg",
     "/pexels-victorfreitas-949131.jpg"
  ]

  return <>
  <Header/>
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

  <ImageSlider images={SliderImages}/>
  
  </>

}
