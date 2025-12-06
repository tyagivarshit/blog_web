// data.js

const productCategories = ["Laptop", "Hosting", "Tool", "Accessories", "Mobile", "Tablet", "Shoes", "Clothing"];

const posts = [
  // LAPTOPS (8 posts)
  {
    slug: "dell-15",
    category: "Laptop",
    readTime: "3 min read",
    badgeColor: "silver",
    title: "Dell Inspiron 15 5502 Laptop",
    excerpt: "15.6 inch FHD, Intel i5 11th Gen, 8GB RAM, 512GB SSD, Windows 11",
    date: "Nov 2025",
    author: "You",
    image: "./images/dell_inspiron_15_5502.jpg",
    price: "₹59,990",
    rating: 4.3,
    ctaLabel: "Buy on Amazon",
    ctaUrl: "https://amzn.to/3MGX6Ba",
    sections: {
      intro: ["Dell Inspiron 15 5502 is a great mid-range laptop suitable for students and professionals."],
      layout: ["Intel i5 11th gen, 8GB DDR4 RAM, 512GB SSD storage."],
      pros: ["Value for money", "Good battery life", "Lightweight design"],
      cons: ["Average speakers", "No dedicated GPU"],
      conclusion: ["Highly recommended for daily use and moderate gaming."]
    },
    cta: { url: "https://amzn.to/3MGX6Ba", text: "Buy dell_inspiron_15_5502 →" }
  },
  {
    slug: "HP Victus",
    category: "Laptop",
    readTime: "4 min read",
    badgeColor: "mica silver",
    title: "HP Victus gaming laptop",
    excerpt: "13th Gen Intel Core i5-13420H, 16GB RTX 3050, 1TB SSD,144Hz",
    date: "Dec 2025",
    author: "You",
    image: "./images/hp_pavilion_15_gaming.jpeg",
    price: "₹70,990",
    rating: 4.5,
    ctaLabel: "Buy Gaming Laptop",
    ctaUrl: "https://amzn.to/4iFryHX",
    sections: {
      intro: ["HP Pavilion Gaming 15 offers excellent performance for gaming and coding."],
      layout: ["RTX 3050 GPU, 144Hz display, 16GB RAM upgradeable."],
      pros: ["Great gaming performance", "Fast SSD", "RGB keyboard"],
      cons: ["Average battery life", "Gets warm during gaming"],
      conclusion: ["Perfect for developers who game too."]
    },
    cta: { url: "https://amzn.to/4iFryHX", text: "Buy Gaming Laptop →" }
  },

  // ACCESSORIES (8 posts)
  {
    slug: "logitech-mx-master-3s",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Logitech MX Master 3S Wireless Mouse",
    excerpt: "Ergonomic mouse with 8000 DPI, 70-day battery, multi-device support",
    date: "Dec 2025",
    author: "You",
    image: "./images/logitech_wireless_mouse.jpeg",
    price: "₹4,995",
    rating: 4.7,
    ctaLabel: "Buy Logitech Mouse",
    ctaUrl: "https://amzn.to/4pKQ0Ke",
    sections: {
      intro: ["MX Master 3S is the best ergonomic mouse for developers."],
      layout: ["MagSpeed scrolling, 7 programmable buttons, USB-C charging."],
      pros: ["Super comfortable", "Silent clicks", "Long battery life"],
      cons: ["Premium price"],
      conclusion: ["Worth every penny for productivity."]
    },
    cta: { url: "https://amzn.to/4pKQ0Ke", text: "Buy Logitech Mouse →" }
  },
  {
    slug: "redragon-k552-keyboard",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Redragon K552 Mechanical Keyboard",
    excerpt: "Compact 60% keyboard with blue switches, RGB lighting",
    date: "Dec 2025",
    author: "You",
    image: "./images/redragon_mechanical_keyboard.jpeg",
    price: "₹2,290",
    rating: 4.4,
    ctaLabel: "Buy Mechanical Keyboard",
    ctaUrl: "https://amzn.to/3KzlOmu",
    sections: {
      intro: ["Perfect compact mechanical keyboard for developers."],
      layout: ["Outemu blue switches, RGB backlighting, metal frame."],
      pros: ["Great typing feel", "Affordable", "Compact design"],
      cons: ["No software customization"],
      conclusion: ["Best budget mechanical keyboard."]
    },
    cta: { url: "https://amzn.to/3KzlOmu", text: "Buy Mechanical Keyboard →" }
  },

  // MOBILES (5 posts)
  {
    slug: "samsung-galaxy-a35",
    category: "Mobile",
    readTime: "4 min read",
    badgeColor: "sky",
    title: "Samsung Galaxy A35 5G",
    excerpt: "6.6-inch AMOLED, Exynos 1380, 8GB RAM, 128GB storage",
    date: "Dec 2025",
    author: "You",
    image: "./images/samsung_galaxy_a35_5g.webp",
    price: "₹19,400",
    rating: 4.3,
    ctaLabel: "Buy Samsung A35",
    ctaUrl: "https://amzn.to/4pOVqE1",
    sections: {
      intro: ["Samsung's best mid-range phone with excellent display."],
      layout: ["120Hz AMOLED, IP67 rating, 5000mAh battery."],
      pros: ["Vibrant display", "Good battery", "Clean software"],
      cons: ["Average camera low light"],
      conclusion: ["Great all-rounder under 30k."]
    },
    cta: { url: "https://amzn.to/4pOVqE1", text: "Buy Samsung A35 →" }
  },

  // TABLETS (4 posts)
  {
    slug: "samsung-galaxy-tab-a9",
    category: "Tablet",
    readTime: "3 min read",
    badgeColor: "indigo",
    title: "Samsung Galaxy Tab A9",
    excerpt: "8.7-inch display, 4GB RAM, 64GB storage, Android 13",
    date: "Dec 2025",
    author: "You",
    image: "./images/samsung_tab_a9.jpeg",
    price: "₹22,280",
    rating: 4.2,
    ctaLabel: "Buy Samsung Tablet",
    ctaUrl: "https://amzn.to/48DwwAq",
    sections: {
      intro: ["Budget tablet perfect for media consumption and light work."],
      layout: ["Expandable storage, quad speakers, slim design."],
      pros: ["Good value", "Decent battery", "Lightweight"],
      cons: ["Average performance"],
      conclusion: ["Great for students and casual use."]
    },
    cta: { url: "https://amzn.to/48DwwAq", text: "Buy Samsung Tablet →" }
  },

  // CLOTHES (5 posts)
  {
    slug: "levi-straight-fit-jeans",
    category: "Clothing",
    readTime: "2 min read",
    badgeColor: "blue",
    title: "Levi's Men's Straight Fit Jeans",
    excerpt: "Classic straight fit jeans with stretch fabric for comfort",
    date: "Dec 2025",
    author: "You",
    image: "./images/levi_mens_jeans.webp",
    price: "₹1,571",
    rating: 4.4,
    ctaLabel: "Buy Levi's Jeans",
    ctaUrl: "https://amzn.to/4rXkCub",
    sections: {
      intro: ["Levi's classic straight fit jeans for everyday wear."],
      layout: ["Stretch denim, 5-pocket styling, mid-rise."],
      pros: ["Perfect fit", "Great quality", "Durable"],
      cons: ["Limited color options"],
      conclusion: ["Timeless wardrobe essential."]
    },
    cta: { url: "https://amzn.to/4rXkCub", text: "Buy Levi's Jeans →" }
  },

  // 5 MacBook Posts
  {
    slug: "macbook-air-m2",
    category: "Laptop",
    readTime: "4 min read",
    badgeColor: "silver",
    title: "Apple MacBook Air M2 - Best for Developers",
    excerpt: "13.6-inch Retina display, M2 chip, 8GB RAM, 256GB SSD, 18hr battery",
    date: "Dec 2025",
    author: "You",
    image: "./images/macbook_air_m2.jpeg",
    price: "₹94,990",
    rating: 4.8,
    ctaLabel: "Buy MacBook Air M2",
    ctaUrl: "https://amzn.to/4plXPGo",
    sections: {
      intro: ["MacBook Air M2 is the perfect balance of power and portability for developers."],
      layout: ["M2 chip with 8-core CPU/GPU, 13.6-inch Liquid Retina, fanless design."],
      pros: ["Insane battery life", "Silent operation", "Lightning fast performance"],
      cons: ["Base RAM might be limiting", "Only 2 USB-C ports"],
      conclusion: ["Best MacBook for most developers."]
    },
    cta: { url: "https://amzn.to/4plXPGo", text: "Buy MacBook Air M2 →" }
  },

  {
    slug: "macbook-pro-14-m3",
    category: "Laptop",
    readTime: "5 min read",
    badgeColor: "silver",
    title: "MacBook Pro 14-inch M3 - Pro Developer Machine",
    excerpt: "14.2-inch Liquid Retina XDR, M3 chip, 16GB RAM, 512GB SSD",
    date: "Dec 2025",
    author: "You",
    image: "./images/macbook_14inch_m3_pro.jpeg",
    price: "₹1,62,900",
    rating: 4.9,
    ctaLabel: "Buy MacBook Pro M3",
    ctaUrl: "https://amzn.to/3KBjU4D",
    sections: {
      intro: ["MacBook Pro M3 is built for professional developers and video editors."],
      layout: ["M3 chip, 120Hz ProMotion display, 6-speaker system, HDMI port."],
      pros: ["Stunning display", "Pro-level performance", "Excellent ports"],
      cons: ["Expensive upgrades", "Heavier than Air"],
      conclusion: ["Ultimate MacBook for power users."]
    },
    cta: { url: "https://amzn.to/3KBjU4D", text: "Buy MacBook Pro M3 →" }
  },

  {
    slug: "macbook-air-m3-13inch",
    category: "Laptop",
    readTime: "4 min read",
    badgeColor: "Midnight",
    title: "MacBook Air 13-inch M3 - Latest & Greatest",
    excerpt: "13.6-inch Retina, M3 chip, 24GB RAM, 512GB SSD, Midnight color",
    date: "Dec 2025",
    author: "You",
    image: "./images/macbook_14inch_m3_pro.jpeg",
    price: "₹1,44,690",
    rating: 4.9,
    ctaLabel: "Buy MacBook Air M3",
    ctaUrl: "https://amzn.to/4iGy80U",
    sections: {
      intro: ["Latest MacBook Air M3 with more power and better webcam."],
      layout: ["M3 chip 20% faster than M2, 1080p FaceTime HD camera."],
      pros: ["Future-proof performance", "Better video calls", "Same great battery"],
      cons: ["Still limited ports", "Price premium"],
      conclusion: ["Best choice for new MacBook buyers."]
    },
    cta: { url: "https://amzn.to/4iGy80U", text: "Buy MacBook Air M3 →" }
  },

  {
    slug: "macbook-pro-14-m4",
    category: "Laptop",
    readTime: "6 min read",
    badgeColor: "indigo",
    title: "MacBook Pro 16-inch M4  - Beast Mode",
    excerpt: "14.2-inch XDR display, M4 10-core GPU, 14GB RAM, 1TB SSD",
    date: "Dec 2025",
    author: "You",
    image: "./images/macbook_16inch_m3pro.webp",
    price: "₹1,99,900",
    rating: 4.9,
    ctaLabel: "Buy MacBook Pro 16 M3 Max",
    ctaUrl: "https://amzn.to/3XAaFVs",
    sections: {
      intro: ["The most powerful MacBook ever made for machine learning and 8K video."],
      layout: ["M3 Max with 40-core GPU, 16.2-inch 120Hz XDR, Liquid Engine cooling."],
      pros: ["Insane performance", "Desktop-class power", "Best display ever"],
      cons: ["Very expensive", "Heavy for portability"],
      conclusion: ["For professionals who need the absolute best."]
    },
    cta: { url: "https://amzn.to/3XAaFVs", text: "Buy MacBook Pro 16 M3 Max →" }
  },

  {
    slug: "samsung-galaxy-s24-ultra",
    category: "Mobile",
    readTime: "5 min read",
    badgeColor: "indigo",
    title: "Samsung Galaxy S24 Ultra - Flagship Beast",
    excerpt: "6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 12GB RAM, 512GB, S Pen",
    date: "Dec 2025",
    author: "You",
    image: "./images/samsung_galaxy_s24_ultra.avif",
    price: "₹1,29,999",
    rating: 4.9,
    ctaLabel: "Buy Galaxy S24 Ultra",
    ctaUrl: "https://amzn.to/4pQrkjB",
    sections: {
      intro: ["Samsung's ultimate flagship with S Pen and 200MP camera system."],
      layout: ["6.8-inch QHD+ 120Hz display, 5000mAh battery, 7 years updates."],
      pros: ["Best display ever", "S Pen included", "Insane camera", "Long software support"],
      cons: ["Very expensive", "Too big for some"],
      conclusion: ["Best Android phone money can buy."]
    },
    cta: { url: "https://amzn.to/4pQrkjB", text: "Buy Galaxy S24 Ultra →" }
  },

  {
    slug: "iphone-17-pro-max",
    category: "Mobile",
    readTime: "5 min read",
    badgeColor: "sky",
    title: "iPhone 17 Pro Max - iOS Powerhouse",
    excerpt: "6.7-inch Super Retina XDR, A19 Pro chip, 256GB, Titanium frame",
    date: "Dec 2025",
    author: "You",
    image: "./images/iphone15promax.webp",
    price: "₹1,34,900",
    rating: 4.8,
    ctaLabel: "Buy iPhone 17 Pro Max",
    ctaUrl: "https://amzn.to/3KDVdod",
    sections: {
      intro: ["Apple's most powerful iPhone with titanium design and A17 Pro."],
      layout: ["USB-C finally, Action button, 5x telephoto camera."],
      pros: ["Best iOS experience", "Gaming beast", "Long battery", "Premium build"],
      cons: ["Very expensive", "60Hz display"],
      conclusion: ["Perfect for iOS lovers and professionals."]
    },
    cta: { url: "https://amzn.to/3KDVdod", text: "Buy iPhone 17 Pro Max →" }
  },

  {
    slug: "oneplus-12",
    category: "Mobile",
    readTime: "4 min read",
    badgeColor: "violet",
    title: "OnePlus 12 - Flagship Killer Returns",
    excerpt: "6.82-inch AMOLED 120Hz, Snapdragon 8 Gen 3, 12GB RAM, 256GB, 5400mAh",
    date: "Dec 2025",
    author: "You",
    image: "./images/one_plus_12.jpeg",
    price: "₹64,999",
    rating: 4.7,
    ctaLabel: "Buy OnePlus 12",
    ctaUrl: "https://amzn.to/4plTPpo",
    sections: {
      intro: ["OnePlus flagship with best value for money performance."],
      layout: ["Hasselblad cameras, 100W charging, IP65 rating."],
      pros: ["Best performance/price", "Super fast charging", "Clean OxygenOS"],
      cons: ["Average low light camera", "No wireless charging"],
      conclusion: ["Best bang for buck flagship."]
    },
    cta: { url: "https://amzn.to/4plTPpo", text: "Buy OnePlus 12 →" }
  },

  {
    slug: "google-pixel-8-pro",
    category: "Mobile",
    readTime: "4 min read",
    badgeColor: "sky",
    title: "Google Pixel 8 Pro - Camera King",
    excerpt: "6.7-inch LTPO OLED, Tensor G3, 12GB RAM, 128GB, Best AI camera",
    date: "Dec 2025",
    author: "You",
    image: "./images/google_pixel_8_pro.jpeg",
    price: "₹55,900",
    rating: 4.6,
    ctaLabel: "Buy Pixel 8 Pro",
    ctaUrl: "https://amzn.to/4iGzQzn",
    sections: {
      intro: ["Google's best Pixel with unmatched camera software."],
      layout: ["Magic Editor, Best Take, 7 years Android updates."],
      pros: ["Best camera software", "Clean Android", "Long support"],
      cons: ["Tensor chip not fastest", "Average battery"],
      conclusion: ["Photography first phone."]
    },
    cta: { url: "https://amzn.to/4iGzQzn", text: "Buy Pixel 8 Pro →" }
  },

  {
    slug: "poco-x7-pro",
    category: "Mobile",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "POCO X7 Pro - Gaming Budget Beast",
    excerpt: "6.67-inch AMOLED 120Hz, Dimensity 8400 Ultra, 8GB RAM, 256GB",
    date: "Dec 2025",
    author: "You",
    image: "./images/poco_x6_pro.jpeg",
    price: "₹21,850",
    rating: 4.4,
    ctaLabel: "Buy POCO X7 Pro",
    ctaUrl: "https://amzn.to/4oDDSde",
    sections: {
      intro: ["Budget gaming phone with flagship-level performance."],
      layout: ["120W charging, UFS 4.0, HyperOS, IP54 rating."],
      pros: ["Insane performance", "Fast charging", "Great value"],
      cons: ["Average camera", "Bloatware"],
      conclusion: ["Best gaming phone under 25k."]
    },
    cta: { url: "https://amzn.to/4oDDSde", text: "Buy POCO X7 Pro →" }
  },

  {
    slug: "motorola-edge-60-pro",
    category: "Mobile",
    readTime: "4 min read",
    badgeColor: "indigo",
    title: "Motorola Edge 60 Pro - Clean Premium Midrange",
    excerpt: "6.7-inch pOLED 144Hz, Mediatek Dimensity 8300, 8GB RAM, 256GB",
    date: "Dec 2025",
    author: "You",
    image: "./images/moto_edge_50_pro.jpeg",
    price: "₹29,990",
    rating: 4.5,
    ctaLabel: "Buy Motorola Edge 60 Pro",
    ctaUrl: "https://amzn.to/4pW2WNC",
    sections: {
      intro: ["Motorola's clean Android experience with premium features."],
      layout: ["125W charging, wireless charging, Pantone colors."],
      pros: ["Clean software", "Smooth 144Hz display", "Fast charging"],
      cons: ["Average battery life", "Camera processing"],
      conclusion: ["Best clean Android midrange."]
    },
    cta: { url: "https://amzn.to/4pW2WNC", text: "Buy Motorola Edge 60 Pro →" }
  },

  // MacBook Covers (5 posts)
  {
    slug: "mosiso-macbook-air-m2-sleeve",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "MOSISO Sleeve Case for MacBook Air M2",
    excerpt: "Slim, lightweight sleeve with soft interior lining to protect MacBook Air M2.",
    date: "Dec 2025",
    author: "You",
    image: "./images/macbook_m2_sleeve_case.jpeg",
    price: "₹799",
    rating: 4.5,
    ctaLabel: "Buy MOSISO Sleeve",
    ctaUrl: "https://amzn.to/49WhmbK",
    sections: {
      intro: ["This sleeve is perfect for lightweight protection on the go."],
      layout: ["Water-repellent exterior, soft lining, multiple color options."],
      pros: ["Slim profile", "Affordable", "Machine washable"],
      cons: ["No stand functionality"],
      conclusion: ["Great for MacBook Air/M1/M2 owners looking for minimal protection."]
    },
    cta: { url: "https://amzn.to/49WhmbK", text: "Buy MOSISO Sleeve →" }
  },
  {
    slug: "tomtoc-macbook-pro-14-sleeve",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Tomtoc 360 Protective Sleeve for MacBook Pro 14-inch",
    excerpt: "Protective sleeve with corner armor and soft interior for MacBook Pro 14.",
    date: "Dec 2025",
    author: "You",
    image: "./images/tomtoc_14inch_macbook_cover.jpeg",
    price: "₹1,499",
    rating: 4.7,
    ctaLabel: "Buy Tomtoc Sleeve",
    ctaUrl: "https://amzn.to/4oBkJIA",
    sections: {
      intro: ["Excellent protection for your MacBook Pro in a slim design."],
      layout: ["Corner armor, soft fleece lining, durable zipper."],
      pros: ["Superior drop protection", "High quality", "Multiple colors"],
      cons: ["Few bulkier than typical sleeves"],
      conclusion: ["Ideal for users needing rugged protection on the go."]
    },
    cta: { url: "https://amzn.to/4oBkJIA", text: "Buy Tomtoc Sleeve →" }
  },
  {
    slug: "tomtoc-hard-shell-case-macbook-pro-14",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Tomtoc Hard Shell Case for MacBook Pro 14-inch",
    excerpt: "Durable hard shell case that adds zero bulk and protects your MacBook Pro.",
    date: "Dec 2025",
    author: "You",
    image: "./images/tomtoc_hardshell_macbook_cover.jpeg",
    price: "₹3,099",
    rating: 4.4,
    ctaLabel: "Buy Tomtoc Hard Case",
    ctaUrl: "https://amzn.to/4pNjW8t",
    sections: {
      intro: ["Sturdy and lightweight, gives solid protection without weight."],
      layout: ["Slim snap-on design, ventilation holes, non-slip rubber feet."],
      pros: ["Easy to install", "Good protection", "Doesn't interfere with ports"],
      cons: ["Can get scratched over time"],
      conclusion: ["Perfect for professionals needing hard protection."]
    },
    cta: { url: "https://amzn.to/4pNjW8t", text: "Buy Tomtoc Hard Case →" }
  },
  {
    slug: "kelpu-cases-macbook-air-13",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Kelpu Cases Transparent Hard Cover for MacBook Air 13",
    excerpt: "Crystal clear hard shell with slim fit and anti-scratch coating.",
    date: "Dec 2025",
    author: "You",
    image: "./images/transparent_macbook_cover.jpeg",
    price: "₹1,099",
    rating: 4.2,
    ctaLabel: "Buy Kelpu Transparent Case",
    ctaUrl: "https://amazon.in/dp/B0B3Z8Q9ZQ?tag=youraffiliateid-21",
    sections: {
      intro: ["Keeps your MacBook Air's design visible and protected."],
      layout: ["Lightweight hard cover, anti-yellowing, precise cutouts."],
      pros: ["Affordable", "Good fit", "Protects from scratches"],
      cons: ["Limited shock protection"],
      conclusion: ["Great value for everyday protection."]
    },
    cta: { url: "https://amazon.in/dp/B0B3Z8Q9ZQ?tag=youraffiliateid-21", text: "Buy Kelpu Transparent Case →" }
  },
  {
    slug: "mosiso-macbook-pro-16-sleeve",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "MOSISO Sleeve for MacBook Pro 16-inch",
    excerpt: "Shockproof lightweight sleeve with waterproof exterior for MacBook Pro 16.",
    date: "Dec 2025",
    author: "You",
    image: "./images/mosiso_macbook_16inch_cover.jpeg",
    price: "₹1,199",
    rating: 4.6,
    ctaLabel: "Buy MOSISO Sleeve 16",
    ctaUrl: "https://amzn.to/4py1uRu",
    sections: {
      intro: ["Perfect heavy-duty protection mixed with portability."],
      layout: ["Waterproof nylon, shockproof interior, multiple colors."],
      pros: ["Durable", "Lightweight", "Fashionable"],
      cons: ["No stand or additional pockets"],
      conclusion: ["Trusted brand for MacBook accessories."]
    },
    cta: { url: "https://amzn.to/4py1uRu", text: "Buy MOSISO Sleeve 16 →" }
  },

  // Phone Covers (5 posts)
  {
    slug: "spigen-ultra-hybrid-case-iphone-15-pro",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Spigen Ultra Hybrid Case for iPhone 15 Pro",
    excerpt: "Clear hybrid case with hard back and flexible bumper, military grade protection.",
    date: "Dec 2025",
    author: "You",
    image: "./images/iphone_15pro_cover.jpeg",
    price: "₹1,804",
    rating: 4.7,
    ctaLabel: "Buy Spigen Ultra Hybrid",
    ctaUrl: "https://amzn.to/4pUjQfv",
    sections: {
      intro: ["Slim clear case for iPhone 15 Pro with robust protection."],
      layout: ["Made of TPU & polycarbonate, button covers, wireless charging friendly."],
      pros: ["Crystal clear", "Good grip", "Affordable"],
      cons: ["No extra storage"],
      conclusion: ["Best transparent case for premium look."]
    },
    cta: { url: "https://amzn.to/4pUjQfv", text: "Buy Spigen Ultra Hybrid →" }
  },
  {
    slug: "ringke-fusion-case-poco-x6-pro",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Ringke Fusion Case for POCO X6 Pro",
    excerpt: "Durable transparent case with matte finish edges and bumper protection.",
    date: "Dec 2025",
    author: "You",
    image: "./images/ringke_poco_x6pro_cover.jpeg",
    price: "₹1,390",
    rating: 4.5,
    ctaLabel: "Buy Ringke Fusion Case",
    ctaUrl: "https://amzn.to/4pwK0VN",
    sections: {
      intro: ["Affordable, sleek case to show off POCO X6 Pro's design while protecting."],
      layout: ["Hybrid TPU & PC, raised bezels, wireless charging compatible."],
      pros: ["Slim", "Scratch resistant", "Non-yellowing"],
      cons: ["Limited color options"],
      conclusion: ["Solid choice for POCO X6 protection."]
    },
    cta: { url: "https://amzn.to/4pwK0VN", text: "Buy Ringke Fusion Case →" }
  },
  {
    slug: "spigen-armor-tough-case-samsung-s24-ultra",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Spigen Armor Tough Case for Samsung Galaxy S24 Ultra",
    excerpt: "Military grade protection case with textured grip and reinforced corners.",
    date: "Dec 2025",
    author: "You",
    image: "./images/spigen_s24_ultra_case.jpeg",
    price: "₹1,804",
    rating: 4.6,
    ctaLabel: "Buy Spigen Armor Case",
    ctaUrl: "https://amzn.to/48mmGE7",
    sections: {
      intro: ["Rugged protection for Samsung S24 Ultra with sleek design."],
      layout: ["Hard PC back, TPU bumper, air cushion technology."],
      pros: ["Excellent drop protection", "Comfortable grip", "Slim profile"],
      cons: ["Pricey compared to basic cases"],
      conclusion: ["Protects well without bulk."]
    },
    cta: { url: "https://amzn.to/48mmGE7", text: "Buy Spigen Armor Case →" }
  },
  {
    slug: "ringke-fusion-pixel-8-pro",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Ringke Fusion Case for Google Pixel 8 Pro",
    excerpt: "Clear hybrid protector with flexible bumper and scratch resistant hard back.",
    date: "Dec 2025",
    author: "You",
    image: "./images/ringke_fusion_pixel_8pro_case.jpeg",
    price: "₹1297",
    rating: 4.5,
    ctaLabel: "Buy Ringke Fusion Pixel Case",
    ctaUrl: "https://amzn.to/4ptl6Xg",
    sections: {
      intro: ["Compact, clear case perfect for Pixel 8 Pro's design showcase."],
      layout: ["Hybrid TPU bumper, PC back, wireless charging compatible."],
      pros: ["Good grip", "Minimal yellowing", "Affordable"],
      cons: ["No kickstand"],
      conclusion: ["Great basic transparent case."]
    },
    cta: { url: "https://amzn.to/4ptl6Xg", text: "Buy Ringke Fusion Pixel Case →" }
  },
  {
    slug: "apple-silicone-case-iphone-15",
    category: "Accessories",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Apple Silicone Case for iPhone 15",
    excerpt: "Official Apple silicone case with smooth finish and MagSafe compatibility.",
    date: "Dec 2025",
    author: "You",
    image: "./images/iphone_15_silicon_case.jpeg",
    price: "₹349",
    rating: 4.8,
    ctaLabel: "Buy Apple Silicone Case",
    ctaUrl: "https://amzn.to/3Mjvoui",
    sections: {
      intro: ["Premium Apple made case designed perfectly for iPhone 15."],
      layout: ["Silicone finish, MagSafe compatible, silky soft interior."],
      pros: ["Premium feel", "Perfect fit", "Safe wireless charging"],
      cons: ["Expensive"],
      conclusion: ["Best if you want original Apple quality."]
    },
    cta: { url: "https://amzn.to/3Mjvoui", text: "Buy Apple Silicone Case →" }
  },

  {
    slug: "airpods-3rd-gen",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "sky",
    title: "AirPods 3rd Generation - Best Value Apple Earbuds",
    excerpt: "Spatial audio, 6hrs battery, MagSafe wireless charging case",
    date: "Dec 2025",
    author: "You",
    image: "./images/airpod_2n_generation.jpeg",
    price: "₹11,999",
    rating: 4.5,
    ctaLabel: "Buy AirPods 3rd Gen",
    ctaUrl: "https://amzn.to/4rHgj5K",
    sections: {
      intro: ["Apple's best-selling true wireless earbuds with spatial audio."],
      layout: ["Open-ear design, Adaptive EQ, IPX4 sweat/water resistance."],
      pros: ["Comfortable fit", "Great sound quality", "Seamless Apple integration"],
      cons: ["No ANC", "No silicone tips"],
      conclusion: ["Best for casual Apple users."]
    },
    cta: { url: "https://amzn.to/4rHgj5K", text: "Buy AirPods 3rd Gen →" }
  },

  {
    slug: "airpods-max",
    category: "Accessories",
    readTime: "5 min read",
    badgeColor: "indigo",
    title: "AirPods Max - Premium Over-Ear Headphones",
    excerpt: "Active Noise Cancellation, Spatial Audio, 20hrs battery, Premium build",
    date: "Dec 2025",
    author: "You",
    image: "./images/airpod_2n_generation.jpeg",
    price: "₹59,990",
    rating: 4.6,
    ctaLabel: "Buy AirPods Max",
    ctaUrl: "https://amzn.to/48Vy0qT",
    sections: {
      intro: ["Apple's premium over-ear headphones with audiophile-grade sound."],
      layout: ["High-fidelity drivers, mesh canopy headband, 40mm drivers."],
      pros: ["Amazing sound", "Best ANC in class", "Luxury build"],
      cons: ["Very expensive", "Heavy", "No lossless audio"],
      conclusion: ["For audiophiles in Apple ecosystem."]
    },
    cta: { url: "https://amzn.to/48Vy0qT", text: "Buy AirPods Max →" }
  },

  {
    slug: "airpods-4th-gen-anc",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "sky",
    title: "AirPods 4th Gen with Active Noise Cancellation",
    excerpt: "New AirPods with ANC, Personalized Spatial Audio, USB-C case",
    date: "Dec 2025",
    author: "You",
    image: "./images/airpod_4_gen.jpeg",
    price: "₹16,960",
    rating: 4.7,
    ctaLabel: "Buy AirPods 4 ANC",
    ctaUrl: "https://amzn.to/4a0jOhn",
    sections: {
      intro: ["Latest AirPods with ANC at affordable price."],
      layout: ["H2 chip, ANC, Transparency mode, wireless charging case."],
      pros: ["ANC at good price", "Improved fit", "Better battery"],
      cons: ["Open design", "Average bass"],
      conclusion: ["Best value ANC AirPods."]
    },
    cta: { url: "https://amzn.to/4a0jOhn", text: "Buy AirPods 4 ANC →" }
  },

  {
    slug: "beats-studio-buds-plus",
    category: "Accessories",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Beats Studio Buds Plus - Apple Approved",
    excerpt: "Active Noise Cancelling, Transparency mode, 9hrs battery, Spatial Audio",
    date: "Dec 2025",
    author: "You",
    image: "./images/beats_studio_buds_plus.jpeg",
    price: "₹15,826",
    rating: 4.4,
    ctaLabel: "Buy Beats Studio Buds+",
    ctaUrl: "https://amzn.to/4rLNHbU",
    sections: {
      intro: ["Beats premium buds with Apple Spatial Audio support."],
      layout: ["IPX4 rating, USB-C, Android/iOS compatible."],
      pros: ["Bass-heavy sound", "Good ANC", "Comfortable fit"],
      cons: ["Case scratches easily", "Average call quality"],
      conclusion: ["Great for bass lovers."]
    },
    cta: { url: "https://amzn.to/4rLNHbU", text: "Buy Beats Studio Buds+ →" }
  },

  // CLOTHES
  {
    slug: "alan-jones-women-zipper-hoodie",
    category: "Clothing",
    readTime: "3 min read",
    badgeColor: "violet",
    title: "Alan Jones Women's Solid Zipper Hooded Sweatshirt",
    excerpt: "Front Zip, Ribbed Hem, Lined Hood, Casual Winter Wear, Cotton Blend",
    date: "Dec 2025",
    author: "You",
    image: "./images/alan-jones-women-zipper-hoodie.png",
    price: "₹684",
    rating: 4.2,
    ctaLabel: "Buy Alan Jones Hoodie",
    ctaUrl: "https://amzn.to/3YdCGCk",
    sections: {
      intro: ["Premium cotton blend hooded sweatshirt with front zipper, perfect for casual winter outings and daily comfort."],
      layout: ["60% Cotton 40% Polyester fabric, long sleeves, regular fit, solid colors available in multiple sizes."],
      pros: ["Cozy lined hood for extra warmth", "Smooth front zipper for easy layering", "Ribbed hems lock in warmth"],
      cons: ["May shrink slightly after first wash", "Limited color options in some sizes"],
      conclusion: ["Ideal winter essential for college, errands and casual layering."]
    },
    cta: { 
      url: "https://amzn.to/3YdCGCk", 
      text: "Buy Alan Jones Hoodie →" 
    }
  },

  {
    slug: "alan-jones-womens-fluffy-yarn-fleece-jacket",
    category: "Clothing",
    readTime: "3 min read",
    badgeColor: "red",
    badgeText: "Limited-time deal",
    title: "Alan Jones Clothing Women's Fluffy Yarn Fleece Full-Zip Jacket",
    excerpt: "Soft, lightweight yet warm fleece jacket with stand collar and stylish piping at hem & cuffs.",
    date: "Dec 2025",
    author: "You",
    image: "./images/alan-jones-womens-fluffy-yarn-fleece-jacket.png",
    price: "₹757",
    rating: 4.3,
    ctaLabel: "Grab this Warm Jacket",
    ctaUrl: "https://amzn.to/44MTYdh",
    sections: {
      intro: ["Experience cozy warmth with Alan Jones Women's Fluffy Yarn Fleece Jacket, ideal for chilly days and casual outings."],
      layout: ["Full zipper closure, stand collar for neck protection, piping details at hem and cuffs add a stylish touch."],
      pros: ["Extremely soft and comfortable fleece fabric", "Lightweight yet provides ample warmth", "Trendy piping design enhances look"],
      cons: ["Limited color options available", "Not suitable for heavy rain or snow"],
      conclusion: ["A fantastic outerwear piece for winters that balances comfort, warmth, and style."]
    },
    cta: {
      url: "https://amzn.to/44MTYdh",
      text: "Buy Alan Jones Fluffy Yarn Fleece Jacket →"
    }
  },

  {
    slug: "lymio-men-lightweight-outerwear-jacket-j10-11",
    category: "Clothing",
    readTime: "3 min read",
    badgeColor: "red",
    badgeText: "Limited-time deal",
    title: "Lymio Men's Lightweight Outerwear Jacket (J-10-11)",
    excerpt: "Versatile lightweight jacket perfect for transitional weather, daily wear & travel.",
    date: "Dec 2025",
    author: "You",
    image: "./images/jacket-j-10-j-11.png",
    price: "₹749",
    rating: 4.1,
    ctaLabel: "Grab Lymio Jacket Now",
    ctaUrl: "https://amzn.to/4rE6i9s",
    sections: {
      intro: ["Lymio J-10-11 offers lightweight comfort with full protection for unpredictable weather."],
      layout: ["Full zip closure, stand collar, multiple pockets, water-resistant fabric for all-day versatility."],
      pros: ["Super lightweight and packable for travel", "Water-resistant coating handles light rain", "Multiple functional pockets for essentials"],
      cons: ["Not heavily insulated for extreme cold", "Zipper quality could be improved"],
      conclusion: ["Perfect everyday jacket for college, office commutes, and weekend adventures."]
    },
    cta: {
      url: "https://amzn.to/4rE6i9s",
      text: "Buy Lymio Lightweight Jacket →"
    }
  }
];


// Add 15 more posts following the same pattern...
// Total 30 posts ready for your affiliate marketing
