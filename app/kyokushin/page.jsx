import Hero from "@/components/hero"
import ImageText from "@/components/imageText"
import GridImageLayout from "@/components/GridImageLayout"
import { ImageUrl } from "@/libs/imageUrl"



export default function KyokushinHome(){
    return<>
          <Hero 
            title="Header"
            text="Subtext"
            bgImageUrl="/karateHero.jpg"
          />
            <ImageText 
              imageUrl="/full-shot-woman-practicing-taekwondo.jpg" alt=" karate"
              title="Header"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non dignissimos porro deserunt iusto a iure aspernatur eaque odio totam reprehenderit, consequuntur cum vero. Ab illum adipisci error nam voluptatibus?
            Qui delectus vel vero, "
            />
              <ImageText 
                imageUrl="/black-belt-athlete-practicing-jujitsu-with-determination-generative-ai.jpg" alt="man karate"
                title="Header"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non dignissimos porro deserunt iusto a iure aspernatur eaque odio totam reprehenderit, consequuntur cum vero. Ab illum adipisci error nam voluptatibus?
              Qui delectus vel vero, "
              reverse
              />
                <ImageText 
                  imageUrl="/ready-fight-woman-white-karate-uniform.jpg" alt="woman karate"
                  title="Header"
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non dignissimos porro deserunt iusto a iure aspernatur eaque odio totam reprehenderit, consequuntur cum vero. Ab illum adipisci error nam voluptatibus?
                Qui delectus vel vero, "
                />

               
                  <GridImageLayout images={ImageUrl} />

    </>
}