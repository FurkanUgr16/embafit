export default function sitemap(){
    const baseUrl = "https://www.embafit.com"
    return[
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        
        {
            url: `${baseUrl}/kyokushin`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        
        {
            url: `${baseUrl}/egitmenler`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },

        {
            url: `${baseUrl}/iletisim`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
        
        {
            url: `${baseUrl}/kyokushin/dojo-kun`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },

        
    ]
}