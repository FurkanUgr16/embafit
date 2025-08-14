import Hero from "@/components/hero"
import ImageText from "@/components/imageText"
import GridImageLayout from "@/components/GridImageLayout"
import { ImageUrl } from "@/libs/imageUrl"



export default function KyokushinHome(){
    return<>
          <Hero 
            title=" BİR SPORDAN DAHA FAZLASI"
            text="Kyokushin: Sınırların yeniden çizildiği, iradenin test edildiği yer."
<<<<<<< HEAD
            bgImageUrl="/karateHero.jpg"
          />
            <ImageText 
              imageUrl="/full-shot-woman-practicing-taekwondo.jpg" alt=" karate"
=======
            bgImageUrl="https://res.cloudinary.com/dshdin1nx/image/upload/v1755161377/karateHero_jzez8i.jpg"
          />
            <ImageText 
              imageUrl="https://res.cloudinary.com/dshdin1nx/image/upload/v1755161386/full-shot-woman-practicing-taekwondo_js7rv0.jpg" alt=" karate"
>>>>>>> b9c81bd (seo changes)
              title="Çocuklara Özel "
              description="Çocuk sınıflarımız, Kyokushin'in temel değerleri olan saygı, disiplin ve öz denetimi, oyun ve tekniğin birleşimiyle öğretir. Amacımız sadece fiziksel becerileri değil, aynı zamanda odaklanma yeteneğini, sabrı ve zorluklar karşısında yılmama ruhunu geliştirmektir. Güvenli ve destekleyici bir ortamda, çocuklar hem kendilerine hem de çevrelerine karşı sorumluluk sahibi olmayı öğrenir. "
            />
              <ImageText 
<<<<<<< HEAD
                imageUrl="/black-belt-athlete-practicing-jujitsu-with-determination-generative-ai.jpg" alt="man karate"
=======
                imageUrl="https://res.cloudinary.com/dshdin1nx/image/upload/v1755161371/black-belt-athlete-practicing-jujitsu-with-determination-generative-ai_iu1mju.jpg" alt="man karate"
>>>>>>> b9c81bd (seo changes)
                title="Grup Dersleri "
                description="Grup derslerimiz, farklı seviyelerdeki öğrencilerin birbirlerinden öğrendiği, karşılıklı saygı ve disiplin içinde ortak bir hedefe ilerlediği yerdir."
              reverse
              />
                <ImageText 
<<<<<<< HEAD
                  imageUrl="/ready-fight-woman-white-karate-uniform.jpg" alt="woman karate"
=======
                  imageUrl="https://res.cloudinary.com/dshdin1nx/image/upload/v1755161395/ready-fight-woman-white-karate-uniform_u9awx1.jpg" alt="woman karate"
>>>>>>> b9c81bd (seo changes)
                  title=" BİRE BİR ÖZEL EĞİTİM"
                  description="Karate-do yolculuğunda kişisel hedeflere yönelik yoğunlaşmak isteyenler için bire bir dersler sunuyoruz. Bu seanslar, belirli bir kata üzerinde ustalaşmak, kumite stratejilerini geliştirmek veya kuşak sınavlarına hazırlık sürecinde eksikleri gidermek için en etkili yöntemdir. Eğitmenlerimiz tüm dikkatini size vererek, tekniğinizdeki en ince detayları düzeltmenize yardımcı olur. "
                />

                  <div className="text-center mt-[60] mb-[30]">
          <h1 className=" font-blackOpsOne text-4xl text-brandYellow uppercase  ">Resim Galerisi</h1>
          <p className="font-openSans ">Salonumuzdan kareler ve daha fazlası</p>
      </div>

               
                  <GridImageLayout images={ImageUrl} />

    </>
}