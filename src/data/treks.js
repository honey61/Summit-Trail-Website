// export const TREKS = [
//   {
//     id: "dayara",
//     title: "Dayara Bugyal",
//     altitude: "~3,408 m",
//     region: "Uttarkashi, Uttarakhand",
//     difficulty: "Easy - Moderate",
//     bestTime: "May to June, Sept to Oct",
//     abount:"bdf fxd",
//     Highlights: "Meadow camping panoramic summit views, summer flowers",

//     excerpt:
//       "Expansive Himalayan grassland trek with open trails, meadow camping and panoramic summit views.",
//     image:
//       "https://images.unsplash.com/photo-1581579185006-1c7f61d49e64?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "dodi",
//     title: "Dodi Taal",
//     altitude: "~3,650 m",
//     region: "Yamunotri Valley, Uttarakhand",
//     difficulty: "Moderate",
//     bestTime: "April to June, Sept to Nov",
//      abount:"bdf fxd",
//     Highlights: "Meadow camping panoramic summit views, summer flowers",
//     excerpt:
//       "Quiet alpine lake trek through lush forest and meadows. Lake camp & birdwatching.",
//     image:
//       "https://images.unsplash.com/photo-1589308078058-8a142f0f0e2b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "har",
//     title: "Har Ki Dun",
//     altitude: "~3,566 m",
//     region: "Garhwal Himalayas, Uttarakhand",
//     difficulty: "Moderate",
//     bestTime: "Mar to June, Sept to Nov",
//      abount:"bdf fxd",
//     Highlights: "Meadow camping panoramic summit views, summer flowers",
//     excerpt:
//       "Valley trek flanked by villages and meadows. Village culture & wildlife.",
//     image:
//       "https://images.unsplash.com/photo-1605878591968-6f51b07a941b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "kedarkantha",
//     title: "Kedarkantha",
//     altitude: "~3,800 m",
//     region: "Govind Wildlife Sanctuary",
//     difficulty: "Easy - Moderate",
//     bestTime: "Dec to April (snow), May to June",
//      abount:"bdf fxd",
//     Highlights: "Meadow camping panoramic summit views, summer flowers",
//     excerpt:
//       "Popular summit trek with sunrise vistas and snowfields. Great for beginners.",
//     image:
//       "https://images.unsplash.com/photo-1677160419207-63f234b7c9a1?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "roopkund",
//     title: "Roopkund",
//     altitude: "~5,020 m",
//     region: "Chamoli District, Uttarakhand",
//     difficulty: "Challenging",
//     bestTime: "May to June, Sept to Oct",
//      abount:"bdf fxd",
//     Highlights: "Meadow camping panoramic summit views, summer flowers",
//     excerpt:
//       "The mysterious Skeleton Lake trek with alpine meadows and big views.",
//     image:
//       "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=800&q=80",
//   },
// ];
export const TREKS = [
  {

    name: "Dayara Bugyal",
    altitude: "3,408 m",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Easy–Moderate",
    bestTime: "May to June, Sept to Oct",
    about: "Expansive Himalayan grassland trek with open trails.",
    highlights: [
      "Meadow camping",
      "Panoramic summit views",
      "Summer flowers"
    ],
    description: `Welcome to one of the most stunning alpine meadows in Uttarkashi — Dayara Bugyal. Spread like a velvet carpet over rolling hills, this high-altitude grassland comes alive with wildflowers in summer and turns into a snowy wonderland in winter. The trek begins from Raithal, near Uttarkashi, offering a gradual climb, beautiful forests, and expansive views of Mt. Bandarpoonch and Srikanth.`,
    
    // ✅ Multiple images for the auto-slideshow
    image: [
      "/images/dayara1.jpg",
      "/images/dayara2.jpg",
      "/images/dayara3.jpg"
    ],
  },
  {
    name: "Dodi Taal",
    altitude: "3,650 m",
    region: "Yamunotri Valley, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "April to June, Sept to Nov",
    about: "Quiet alpine lake trek through lush forest and meadows.",
    highlights: [
      "Lake camp",
      "Pine woods",
      "Birdwatching",
      "Darwa Pass views"
    ],
    description: `Dodi Taal is a calm and beautiful lake hidden in the forests of Uttarkashi. The trek starts from Sangam Chatti and passes through pine and oak forests, villages, and wooden bridges. At around 3,000 m, the lake sits peacefully surrounded by tall trees. You can extend the trek to Darwa Top for stunning Himalayan views.`,
  },
  {
    name: "Har Ki Dun",
    altitude: "3,566 m",
    region: "Garhwal Himalayas, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "Mar to June, Sept to Nov",
    about: "Trek through alpine valley flanked by villages and meadows.",
    highlights: [
      "Village culture",
      "Mountain wildlife",
      "Snow-rimmed ridges"
    ],
    description: `Known as the “Valley of Gods,” Har Ki Dun is a beautiful valley trek surrounded by peaks and meadows. Starting from Sankri, the trail passes through wooden villages, pine forests, and riversides with views of Swargarohini and Black Peak.`,
  },
  {
    name: "Kedarkantha",
    altitude: "3,800 m",
    region: "Govind Wildlife Sanctuary, Uttarakhand",
    difficulty: "Easy–Moderate",
    bestTime: "Dec to April (snow), May to June",
    about: "Popular peak trek ending in breathtaking summit views.",
    highlights: [
      "Snowfields",
      "Pine forests",
      "Frozen lake",
      "Sunrise vistas"
    ],
    description: `One of India’s most loved winter treks, Kedarkantha offers a snowy summit experience with views of Swargarohini, Bandarpunch, and Black Peak. The trek starts from Sankri, with peaceful campsites like Juda Ka Talab along the way.`,
  },
  {
    name: "Brahmatal",
    altitude: "3,734 m",
    region: "Uttarkashi, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to July, Sept to Oct",
    about: "A serene high-altitude meadow trek with starry nights.",
    highlights: [
      "Wildflower fields",
      "Glacier views",
      "Peaceful camping"
    ],
    description: `Starting from Lohajung, Brahmatal takes you through snowy forests and to a frozen lake where Lord Brahma is said to have meditated. From the summit, you see Mt. Trishul, Nanda Ghunti, and Roopkund ridge.`,
  },
  {
    name: "Ali Bedni Bugyal",
    altitude: "3,825 m",
    region: "Chamoli District, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to July, Sept to Oct",
    about: "Photo-perfect bugyal trek with shimmering lakes.",
    highlights: [
      "Lake reflections",
      "Meadow camps",
      "Mountain panorama"
    ],
    description: `Ali and Bedni Bugyal are twin meadows known for lush grasslands and stunning views of Trishul and Nanda Ghunti. The trek starts from Lohajung and passes through oak and rhododendron forests.`,
  },
  {
    name: "Kyarkoti",
    altitude: "3,820 m",
    region: "Garhwal, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to June, Sept to Oct",
    about: "Offbeat trek through ridges and remote villages.",
    highlights: [
      "Ridge trails",
      "Local culture",
      "Serene campsites"
    ],
    description: `A hidden gem near Harsil, Kyarkoti features alpine forests, icy streams, and views of Mt. Srikanth. The route follows part of the Lamkhaga Pass trail and is perfect for solitude seekers.`,
  },
  {
    name: "Gangotri – Tapovan",
    altitude: "4,463 m",
    region: "Gangotri Valley, Uttarakhand",
    difficulty: "Challenging",
    bestTime: "June to Sept",
    about: "Pilgrimage trek crossing Gangotri Glacier to Tapovan.",
    highlights: [
      "Glacier bridge",
      "Spiritual vibes",
      "Close-up peaks"
    ],
    description: `Starting from Gangotri, this trek leads to the origin of the Ganga at Gomukh and onward to Tapovan — a high meadow surrounded by Mt. Shivling and Bhagirathi peaks.`,
  },
  {
    name: "Satopanth Lake",
    altitude: "4,600 m",
    region: "Between Gangotri & Badrinath, Uttarakhand",
    difficulty: "Very Challenging",
    bestTime: "June to Sept",
    about: "High-altitude expedition through pristine glacier terrain.",
    highlights: [
      "Rugged glaciers",
      "Expedition-style camps",
      "Extreme views"
    ],
    description: `A sacred glacial lake trek starting from Badrinath via Mana and Vasudhara Falls. Satopanth sits at 4,600 m surrounded by Chaukhamba and Neelkanth peaks.`,
  },
  {
    name: "Valley of Flowers",
    altitude: "3,352 – 3,658 m",
    region: "Chamoli District, Uttarakhand",
    difficulty: "Easy–Moderate",
    bestTime: "July to August",
    about: "UNESCO listed valley bursting with alpine blooms.",
    highlights: [
      "Floral carpets",
      "Waterfalls",
      "Wildlife",
      "Vivid scenery"
    ],
    description: `A colorful Himalayan valley filled with wildflowers and snow peaks. The trek begins at Pulna near Govindghat and continues through Ghangaria to the Valley of Flowers National Park.`,
  },
  {
    name: "Madmaheshwar",
    altitude: "3,497 m",
    region: "Kedarnath, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to June, Sept to Oct",
    about: "Pilgrimage trek to Lord Shiva’s temple in high meadows.",
    highlights: [
      "Spiritual camp",
      "Mountain views",
      "Forest trails"
    ],
    description: `A sacred Panch Kedar temple trek starting from Ransi, through Gaundhar and Bantoli villages, leading to a serene temple meadow with views of Chaukhamba.`,
  },
  {
    name: "Rudranath",
    altitude: "3,600 m",
    region: "Chamoli District, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to June, Sept to Oct",
    about: "Subalpine trek featuring Rudranath Temple in the forest.",
    highlights: [
      "Spiritual tone",
      "Water crossings",
      "Lush trails"
    ],
    description: `A peaceful forest and ridge walk to the Rudranath Temple — the least visited Panch Kedar site, with panoramic Himalayan views from Panar Bugyal.`,
  },
  {
    name: "Khaliya Top",
    altitude: "3,500 m",
    region: "Kumaon (Munsyari), Uttarakhand",
    difficulty: "Moderate",
    bestTime: "June to July, Sept to Oct",
    about: "Quiet trek to serene snow lake surface at high meadow.",
    highlights: [
      "Snow lake",
      "Wildflowers",
      "Offbeat trail experience"
    ],
    description: `A short, scenic hike near Munsyari with panoramic views of Panchachuli, Nanda Devi, and Hardeol peaks — ideal for beginners and weekend trekkers.`,
  },
  {
    name: "Namik Glacier",
    altitude: "3,600 m",
    region: "Kumaon, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "June to July, Sept to Oct",
    about: "Trek up to a beautiful glacial valley and moraine.",
    highlights: [
      "Ice walls",
      "Glacier pool",
      "Mixed terrain trails"
    ],
    description: `Offbeat trail from Gogina village in the Kumaon Himalayas, offering a mix of culture, ancient temples, and close views of Nanda Kot and Nanda Devi.`,
  },
  {
    name: "Tungnath – Chandrashila – Deori Tal",
    altitude: "3,680 m (Chandrashila)",
    region: "Rudraprayag District, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "May to June, Sept to Oct",
    about: "Temple trek + summit ridge + high altitude lake.",
    highlights: [
      "Highest Shiva temple",
      "360° summit view",
      "Pristine lake"
    ],
    description: `A popular short trek combining Deoriatal Lake, Tungnath Temple, and Chandrashila Peak. Offers grand 360° views of Nanda Devi, Kedarnath, and Chaukhamba.`,
  },
  {
    name: "Pindari Glacier",
    altitude: "3,800 m",
    region: "Bageshwar District, Uttarakhand",
    difficulty: "Moderate–Challenging",
    bestTime: "May to June, Sept to Oct",
    about: "Lead-up to glacier snout with meadow camping.",
    highlights: [
      "Glacier views",
      "Meadow camps",
      "Wildlife trails"
    ],
    description: `A classic Kumaon trek leading to the snout of Pindari Glacier. Starting from Khaati village, it passes Dwali and Phurkiya before reaching Zero Point at 3,700 m.`,
  },
  {
    name: "Roopkund",
    altitude: "5,020 m",
    region: "Chamoli District, Uttarakhand",
    difficulty: "Challenging",
    bestTime: "May to June, Sept to Oct",
    about: "Trek to the mysterious “Skeleton Lake” surrounded by peaks.",
    highlights: [
      "Snowfields",
      "Ancient bones",
      "Alpine meadows"
    ],
    description: `The legendary Roopkund trek from Lohajung to the Skeleton Lake. Known for its mystery and high-altitude beauty — though lake access is now restricted.`,
  },
  {
    name: "Kuari Pass",
    altitude: "3,815 m",
    region: "Chamoli District, Uttarakhand",
    difficulty: "Moderate",
    bestTime: "April to June, Sept to Nov",
    about: "“Curzon Trail” across ridges offering Himalayan panoramas.",
    highlights: [
      "Wildlife",
      "High meadows",
      "Sunrise views over Nanda Devi"
    ],
    description: `The Kuari Pass trek near Joshimath offers rhododendron forests and ridge walks with wide views of Nanda Devi, Dronagiri, and Trishul.`,
  },
];
