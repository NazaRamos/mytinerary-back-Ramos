import Cities from "../City.js";
import "dotenv/config.js"
import "../../config/database.js";

let cities = [
    {
      "name": "Paris",
      "photo": "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
      "country": "France",
      "continent": "Europe",
      "description": "Paris, the capital of France, is renowned for its romantic ambiance, world-class art, and iconic landmarks. The Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral are must-visit attractions. Enjoy strolls along the Seine River and savor exquisite French cuisine in charming cafés."
    },
    {
      "name": "New York City",
      "photo": "https://media.cntraveler.com/photos/63483e15ef943eff59de603a/3:2/w_3000,h_2000,c_limit/New%20York%20City_GettyImages-1347979016.jpg",
      "country": "United States",
      "continent": "North America",
      "description": "New York City, the city that never sleeps, is a bustling metropolis known for its towering skyscrapers, Broadway shows, and diverse neighborhoods. Times Square, Central Park, and the Statue of Liberty are just a few highlights of this dynamic and cultural hub."
    },
    {
      "name": "Tokyo",
      "photo": "https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg",
      "country": "Japan",
      "continent": "Asia",
      "description": "Tokyo, the capital of Japan, seamlessly blends traditional and modern elements. Explore vibrant districts like Shibuya and Akihabara, visit historic temples like Senso-ji, and indulge in delicious sushi. The city's energy is palpable, making it a must-visit for any traveler."
    },
    {
      "name": "Sydney",
      "photo": "https://i.natgeofe.com/n/bd48279e-be5a-4f28-9551-5cb917c6766e/GettyImages-103455489cropped.jpg",
      "country": "Australia",
      "continent": "Australia",
      "description": "Sydney, Australia's largest city, is a stunning coastal metropolis. Admire the architectural marvels of the Sydney Opera House and Harbour Bridge. Relax on the famous Bondi Beach or take a ferry to explore the scenic landscapes of the Sydney Harbour."
    },
    {
      "name": "Rio de Janeiro",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1200px-Cidade_Maravilhosa.jpg",
      "country": "Brazil",
      "continent": "South America",
      "description": "Rio de Janeiro, known for its lively carnival and breathtaking landscapes, is a city of samba and sunshine. Enjoy the vibrant atmosphere of Copacabana Beach, ascend Sugarloaf Mountain for panoramic views, and explore the historic streets of Santa Teresa."
    },
    {
      "name": "Cape Town",
      "photo": "https://www.andbeyond.com/wp-content/uploads/sites/5/cape-town-aerial-view-greenpoint-stadium.jpg",
      "country": "South Africa",
      "continent": "Africa",
      "description": "Cape Town, a coastal gem in South Africa, offers a unique blend of natural beauty and cultural richness. Table Mountain provides a stunning backdrop, while the Cape of Good Hope and Robben Island are essential historical landmarks to explore."
    },
    {
      "name": "Istanbul",
      "photo": "https://europeinwinter.com/wp-content/uploads/2022/06/iStock-475460738.jpeg",
      "country": "Turkey",
      "continent": "Europe",
      "description": "Istanbul, a city straddling two continents, boasts a rich history and architectural wonders. Visit the Hagia Sophia, Blue Mosque, and Topkapi Palace. Immerse yourself in the vibrant atmosphere of the Grand Bazaar, where East meets West."
    },
    {
      "name": "Marrakech",
      "photo": "https://viajes.nationalgeographic.com.es/medio/2017/07/24/y8g-2441412_bd41caa2.jpg",
      "country": "Morocco",
      "continent": "Africa",
      "description": "Marrakech, a city of vibrant colors and bustling souks, is a cultural treasure in Morocco. Explore the historic Medina, visit the Koutoubia Mosque, and experience the lively atmosphere of Jemaa el-Fna square, where street performers and market stalls abound."
    },
    {
      "name": "Vancouver",
      "photo": "https://upload.wikimedia.org/wikipedia/commons/5/57/Concord_Pacific_Master_Plan_Area.jpg",
      "country": "Canada",
      "continent": "North America",
      "description": "Vancouver, surrounded by mountains and the Pacific Ocean, is a city of natural beauty and outdoor adventures. Enjoy the scenic views from Stanley Park, explore diverse neighborhoods like Gastown, and experience the city's cultural diversity and culinary scene."
    },
    {
      "name": "Buenos Aires",
      "photo": "https://cdn.britannica.com/63/188963-050-2C94FEC2/Night-view-obelisk-Buenos-Aires.jpg",
      "country": "Argentina",
      "continent": "South America",
      "description": "Buenos Aires, the vibrant capital of Argentina, is known for its passionate tango, historic architecture, and delicious cuisine. Stroll along the colorful streets of La Boca, visit the iconic Obelisco, and immerse yourself in the lively atmosphere of San Telmo."
    },
    {
      "name": "Cairo",
      "photo": "https://static.nationalgeographic.es/files/styles/image_3200/public/resized-gettyimages-1411179963.jpg?w=1600&h=900",
      "country": "Egypt",
      "continent": "Africa",
      "description": "Cairo, the bustling capital of Egypt, is a city steeped in history and ancient wonders. Explore the Pyramids of Giza and the Sphinx, visit the Egyptian Museum, and experience the vibrant street life of Khan El Khalili bazaar."
    },
    {
      "name": "Auckland",
      "photo": "https://www.scenichotelgroup.co.nz/content/uploads/2022/03/Region-Auckland-City-Sunset-Water-Banner-2000x1000.jpg",
      "country": "New Zealand",
      "continent": "Australia",
      "description": "Auckland, surrounded by stunning harbors and volcanic landscapes, is New Zealand's largest city. Explore the vibrant waterfront, visit the Sky Tower for panoramic views, and take a ferry to Waiheke Island for wine tasting and beautiful beaches."
    },
    {
      "name": "Rome",
      "photo": "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg",
      "country": "Italy",
      "continent": "Europe",
      "description": "Rome, the eternal city, is a living museum of ancient history and Renaissance art. Visit the Colosseum, Roman Forum, and Pantheon. Marvel at the artistry of the Vatican City, home to St. Peter's Basilica and the Sistine Chapel."
    },
    {
      "name": "Mexico City",
      "photo": "https://images.squarespace-cdn.com/content/v1/5d1a28b95422a10001b1aada/6f845a88-2a59-4713-a8eb-8c86ed7e15f9/MexicoCity-BellasArtes.jpg",
      "country": "Mexico",
      "continent": "North America",
      "description": "Mexico City, the vibrant capital of Mexico, offers a mix of colonial architecture, Aztec ruins, and modern culture. Explore the historic center, visit the National Palace, and indulge in the diverse flavors of Mexican cuisine."
    },
    {
      "name": "Seoul",
      "photo": "https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg",
      "country": "South Korea",
      "continent": "Asia",
      "description": "Seoul, the capital of South Korea, is a dynamic city blending traditional and futuristic elements. Explore ancient palaces like Gyeongbokgung, stroll through the trendy districts of Gangnam, and indulge in delicious Korean barbecue and street food."
    }
  ];

Cities.insertMany(cities);
