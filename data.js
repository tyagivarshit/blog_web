// data.js

const productCategories = ["Laptop", "Hosting", "Tool", "Accessories", "Mobile", "Tablet", "Shoes", "Clothes"];

const posts = [
  // LAPTOPS (8 posts)
  {
    slug: "dell-inspiron-15-5502",
    category: "Laptop",
    readTime: "3 min read",
    badgeColor: "sky",
    title: "Dell Inspiron 15 5502 Laptop",
    excerpt: "15.6 inch FHD, Intel i5 11th Gen, 8GB RAM, 512GB SSD, Windows 11",
    date: "Nov 2025",
    author: "You",
    image: "./images/dell_inspiron_15_5502.jpg",
    price: "₹65,000",
    rating: 4.3,
    ctaLabel: "Buy on Amazon",
    ctaUrl: "https://amazon.in/dp/B08PC1Q5D5?tag=youraffiliateid-21",
    sections: {
      intro: ["Dell Inspiron 15 5502 is a great mid-range laptop suitable for students and professionals."],
      layout: ["Intel i5 11th gen, 8GB DDR4 RAM, 512GB SSD storage."],
      pros: ["Value for money", "Good battery life", "Lightweight design"],
      cons: ["Average speakers", "No dedicated GPU"],
      conclusion: ["Highly recommended for daily use and moderate gaming."]
    },
    cta: { url: "https://amazon.in/dp/B08PC1Q5D5?tag=youraffiliateid-21", text: "Buy on Amazon →" }
  },
  {
    slug: "hp-pavilion-gaming-15",
    category: "Laptop",
    readTime: "4 min read",
    badgeColor: "indigo",
    title: "HP Pavilion Gaming 15 Laptop",
    excerpt: "AMD Ryzen 5, RTX 3050, 16GB RAM, 512GB SSD, 144Hz Display",
    date: "Dec 2025",
    author: "You",
    image: "./images/hp_pavilion_15_gaming.jpeg",
    price: "₹72,990",
    rating: 4.5,
    ctaLabel: "Buy Gaming Laptop",
    ctaUrl: "https://amazon.in/dp/B0BWN8K3S6?tag=youraffiliateid-21",
    sections: {
      intro: ["HP Pavilion Gaming 15 offers excellent performance for gaming and coding."],
      layout: ["RTX 3050 GPU, 144Hz display, 16GB RAM upgradeable."],
      pros: ["Great gaming performance", "Fast SSD", "RGB keyboard"],
      cons: ["Average battery life", "Gets warm during gaming"],
      conclusion: ["Perfect for developers who game too."]
    },
    cta: { url: "https://amazon.in/dp/B0BWN8K3S6?tag=youraffiliateid-21", text: "Buy Gaming Laptop →" }
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
    price: "₹8,995",
    rating: 4.7,
    ctaLabel: "Buy Logitech Mouse",
    ctaUrl: "https://amazon.in/dp/B09HMKXZGQ?tag=youraffiliateid-21",
    sections: {
      intro: ["MX Master 3S is the best ergonomic mouse for developers."],
      layout: ["MagSpeed scrolling, 7 programmable buttons, USB-C charging."],
      pros: ["Super comfortable", "Silent clicks", "Long battery life"],
      cons: ["Premium price"],
      conclusion: ["Worth every penny for productivity."]
    },
    cta: { url: "https://amazon.in/dp/B09HMKXZGQ?tag=youraffiliateid-21", text: "Buy Logitech Mouse →" }
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
    price: "₹3,499",
    rating: 4.4,
    ctaLabel: "Buy Mechanical Keyboard",
    ctaUrl: "https://amazon.in/dp/B07Q7JS7B9?tag=youraffiliateid-21",
    sections: {
      intro: ["Perfect compact mechanical keyboard for developers."],
      layout: ["Outemu blue switches, RGB backlighting, metal frame."],
      pros: ["Great typing feel", "Affordable", "Compact design"],
      cons: ["No software customization"],
      conclusion: ["Best budget mechanical keyboard."]
    },
    cta: { url: "https://amazon.in/dp/B07Q7JS7B9?tag=youraffiliateid-21", text: "Buy Mechanical Keyboard →" }
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
    price: "₹27,999",
    rating: 4.3,
    ctaLabel: "Buy Samsung A35",
    ctaUrl: "https://amazon.in/dp/B0D3J8J7K5?tag=youraffiliateid-21",
    sections: {
      intro: ["Samsung's best mid-range phone with excellent display."],
      layout: ["120Hz AMOLED, IP67 rating, 5000mAh battery."],
      pros: ["Vibrant display", "Good battery", "Clean software"],
      cons: ["Average camera low light"],
      conclusion: ["Great all-rounder under 30k."]
    },
    cta: { url: "https://amazon.in/dp/B0D3J8J7K5?tag=youraffiliateid-21", text: "Buy Samsung A35 →" }
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
    price: "₹13,999",
    rating: 4.2,
    ctaLabel: "Buy Samsung Tablet",
    ctaUrl: "https://amazon.in/dp/B0CL3W8K4L?tag=youraffiliateid-21",
    sections: {
      intro: ["Budget tablet perfect for media consumption and light work."],
      layout: ["Expandable storage, quad speakers, slim design."],
      pros: ["Good value", "Decent battery", "Lightweight"],
      cons: ["Average performance"],
      conclusion: ["Great for students and casual use."]
    },
    cta: { url: "https://amazon.in/dp/B0CL3W8K4L?tag=youraffiliateid-21", text: "Buy Samsung Tablet →" }
  },

  // SHOES (5 posts)
  {
    slug: "nike-air-zoom-pegasus",
    category: "Shoes",
    readTime: "3 min read",
    badgeColor: "sky",
    title: "Nike Air Zoom Pegasus 40 Running Shoes",
    excerpt: "Premium running shoes with responsive cushioning and breathable upper",
    date: "Dec 2025",
    author: "You",
    image: "./images/nike_running_shoes.webp",
    price: "₹12,995",
    rating: 4.6,
    ctaLabel: "Buy Nike Running Shoes",
    ctaUrl: "https://amazon.in/dp/B0C5K5L6M7?tag=youraffiliateid-21",
    sections: {
      intro: ["Nike's best running shoe for daily training."],
      layout: ["Air Zoom cushioning, Flywire technology, breathable mesh."],
      pros: ["Excellent comfort", "Great durability", "Responsive ride"],
      cons: ["Premium price"],
      conclusion: ["Perfect for serious runners."]
    },
    cta: { url: "https://amazon.in/dp/B0C5K5L6M7?tag=youraffiliateid-21", text: "Buy Nike Running Shoes →" }
  },

  // CLOTHES (5 posts)
  {
    slug: "levi-straight-fit-jeans",
    category: "Clothes",
    readTime: "2 min read",
    badgeColor: "violet",
    title: "Levi's Men's Straight Fit Jeans",
    excerpt: "Classic straight fit jeans with stretch fabric for comfort",
    date: "Dec 2025",
    author: "You",
    image: "./images/levi_mens_jeans.webp",
    price: "₹2,499",
    rating: 4.4,
    ctaLabel: "Buy Levi's Jeans",
    ctaUrl: "https://amazon.in/dp/B07N8M9N0P?tag=youraffiliateid-21",
    sections: {
      intro: ["Levi's classic straight fit jeans for everyday wear."],
      layout: ["Stretch denim, 5-pocket styling, mid-rise."],
      pros: ["Perfect fit", "Great quality", "Durable"],
      cons: ["Limited color options"],
      conclusion: ["Timeless wardrobe essential."]
    },
    cta: { url: "https://amazon.in/dp/B07N8M9N0P?tag=youraffiliateid-21", text: "Buy Levi's Jeans →" }
  },
  // 5 MacBook Posts - Add these to your posts array

{
  slug: "macbook-air-m2-2022",
  category: "Laptop",
  readTime: "4 min read",
  badgeColor: "sky",
  title: "Apple MacBook Air M2 (2022) - Best for Developers",
  excerpt: "13.6-inch Retina display, M2 chip, 8GB RAM, 256GB SSD, 18hr battery",
  date: "Dec 2025",
  author: "You",
  image: "./images/macbook_air_m2.jpeg",
  price: "₹1,14,900",
  rating: 4.8,
  ctaLabel: "Buy MacBook Air M2",
  ctaUrl: "https://amazon.in/dp/B0B3GNYN7N?tag=youraffiliateid-21",
  sections: {
    intro: ["MacBook Air M2 is the perfect balance of power and portability for developers."],
    layout: ["M2 chip with 8-core CPU/GPU, 13.6-inch Liquid Retina, fanless design."],
    pros: ["Insane battery life", "Silent operation", "Lightning fast performance"],
    cons: ["Base RAM might be limiting", "Only 2 USB-C ports"],
    conclusion: ["Best MacBook for most developers."]
  },
  cta: { url: "https://amazon.in/dp/B0B3GNYN7N?tag=youraffiliateid-21", text: "Buy MacBook Air M2 →" }
},

{
  slug: "macbook-pro-14-m3",
  category: "Laptop",
  readTime: "5 min read",
  badgeColor: "indigo",
  title: "MacBook Pro 14-inch M3 - Pro Developer Machine",
  excerpt: "14.2-inch Liquid Retina XDR, M3 chip, 8GB RAM, 512GB SSD",
  date: "Dec 2025",
  author: "You",
  image: "./images/macbook_14inch_m3_pro.jpeg",
  price: "₹1,69,900",
  rating: 4.9,
  ctaLabel: "Buy MacBook Pro M3",
  ctaUrl: "https://amazon.in/dp/B0CHZ3Y5N2?tag=youraffiliateid-21",
  sections: {
    intro: ["MacBook Pro M3 is built for professional developers and video editors."],
    layout: ["M3 chip, 120Hz ProMotion display, 6-speaker system, HDMI port."],
    pros: ["Stunning display", "Pro-level performance", "Excellent ports"],
    cons: ["Expensive upgrades", "Heavier than Air"],
    conclusion: ["Ultimate MacBook for power users."]
  },
  cta: { url: "https://amazon.in/dp/B0CHZ3Y5N2?tag=youraffiliateid-21", text: "Buy MacBook Pro M3 →" }
},

{
  slug: "macbook-air-m3-13inch",
  category: "Laptop",
  readTime: "4 min read",
  badgeColor: "sky",
  title: "MacBook Air 13-inch M3 - Latest & Greatest",
  excerpt: "13.6-inch Retina, M3 chip, 16GB RAM, 512GB SSD, Midnight color",
  date: "Dec 2025",
  author: "You",
  image: "./images/macbook_14inch_m3_pro.jpeg",
  price: "₹1,34,900",
  rating: 4.9,
  ctaLabel: "Buy MacBook Air M3",
  ctaUrl: "https://amazon.in/dp/B0CX22ZW1W?tag=youraffiliateid-21",
  sections: {
    intro: ["Latest MacBook Air M3 with more power and better webcam."],
    layout: ["M3 chip 20% faster than M2, 1080p FaceTime HD camera."],
    pros: ["Future-proof performance", "Better video calls", "Same great battery"],
    cons: ["Still limited ports", "Price premium"],
    conclusion: ["Best choice for new MacBook buyers."]
  },
  cta: { url: "https://amazon.in/dp/B0CX22ZW1W?tag=youraffiliateid-21", text: "Buy MacBook Air M3 →" }
},

{
  slug: "macbook-pro-16-m3-max",
  category: "Laptop",
  readTime: "6 min read",
  badgeColor: "indigo",
  title: "MacBook Pro 16-inch M3 Max - Beast Mode",
  excerpt: "16.2-inch XDR display, M3 Max 40-core GPU, 36GB RAM, 1TB SSD",
  date: "Dec 2025",
  author: "You",
  image: "./images/macbook_16inch_m3pro.webp",
  price: "₹3,49,900",
  rating: 4.9,
  ctaLabel: "Buy MacBook Pro 16 M3 Max",
  ctaUrl: "https://amazon.in/dp/B0CHZ5K6N3?tag=youraffiliateid-21",
  sections: {
    intro: ["The most powerful MacBook ever made for machine learning and 8K video."],
    layout: ["M3 Max with 40-core GPU, 16.2-inch 120Hz XDR, Liquid Engine cooling."],
    pros: ["Insane performance", "Desktop-class power", "Best display ever"],
    cons: ["Very expensive", "Heavy for portability"],
    conclusion: ["For professionals who need the absolute best."]
  },
  cta: { url: "https://amazon.in/dp/B0CHZ5K6N3?tag=youraffiliateid-21", text: "Buy MacBook Pro 16 M3 Max →" }
},

{
  slug: "macbook-air-m1-refurbished",
  category: "Laptop",
  readTime: "3 min read",
  badgeColor: "violet",
  title: "MacBook Air M1 Refurbished - Best Value Mac",
  excerpt: "13.3-inch Retina, M1 chip, 8GB RAM, 256GB SSD, Excellent condition",
  date: "Dec 2025",
  author: "You",
  image: "./images/macbook_14inch_m3_pro.jpeg",
  price: "₹72,990",
  rating: 4.7,
  ctaLabel: "Buy Refurbished MacBook M1",
  ctaUrl: "https://amazon.in/dp/B08N5LN5N5?tag=youraffiliateid-21",
  sections: {
    intro: ["M1 MacBook Air at unbeatable price - still powerful in 2025."],
    layout: ["Same M1 chip that powers iPhones, fanless design, 18hr battery."],
    pros: ["Amazing value", "Still very fast", "Apple quality warranty"],
    cons: ["Older design", "Lightning port"],
    conclusion: ["Perfect for budget-conscious developers."]
  },
  cta: { url: "https://amazon.in/dp/B08N5LN5N5?tag=youraffiliateid-21", text: "Buy Refurbished MacBook M1 →" }
},
// 6 Different Smartphones - Add these to your posts array

{
  slug: "samsung-galaxy-s24-ultra",
  category: "Mobile",
  readTime: "5 min read",
  badgeColor: "indigo",
  title: "Samsung Galaxy S24 Ultra - Flagship Beast",
  excerpt: "6.8-inch Dynamic AMOLED 2X, Snapdragon 8 Gen 3, 12GB RAM, 256GB, S Pen",
  date: "Dec 2025",
  author: "You",
  image: "./images/samsung_galaxy_s24_ultra.avif",
  price: "₹1,29,999",
  rating: 4.9,
  ctaLabel: "Buy Galaxy S24 Ultra",
  ctaUrl: "https://amazon.in/dp/B0CN8CR8V8?tag=youraffiliateid-21",
  sections: {
    intro: ["Samsung's ultimate flagship with S Pen and 200MP camera system."],
    layout: ["6.8-inch QHD+ 120Hz display, 5000mAh battery, 7 years updates."],
    pros: ["Best display ever", "S Pen included", "Insane camera", "Long software support"],
    cons: ["Very expensive", "Too big for some"],
    conclusion: ["Best Android phone money can buy."]
  },
  cta: { url: "https://amazon.in/dp/B0CN8CR8V8?tag=youraffiliateid-21", text: "Buy Galaxy S24 Ultra →" }
},

{
  slug: "iphone-15-pro-max",
  category: "Mobile",
  readTime: "5 min read",
  badgeColor: "sky",
  title: "iPhone 15 Pro Max - iOS Powerhouse",
  excerpt: "6.7-inch Super Retina XDR, A17 Pro chip, 8GB RAM, 256GB, Titanium frame",
  date: "Dec 2025",
  author: "You",
  image: "./images/iphone15promax.webp",
  price: "₹1,59,900",
  rating: 4.8,
  ctaLabel: "Buy iPhone 15 Pro Max",
  ctaUrl: "https://amazon.in/dp/B0CHX1W1T7?tag=youraffiliateid-21",
  sections: {
    intro: ["Apple's most powerful iPhone with titanium design and A17 Pro."],
    layout: ["USB-C finally, Action button, 5x telephoto camera."],
    pros: ["Best iOS experience", "Gaming beast", "Long battery", "Premium build"],
    cons: ["Very expensive", "60Hz display"],
    conclusion: ["Perfect for iOS lovers and professionals."]
  },
  cta: { url: "https://amazon.in/dp/B0CHX1W1T7?tag=youraffiliateid-21", text: "Buy iPhone 15 Pro Max →" }
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
  ctaUrl: "https://amazon.in/dp/B0CP8D2R8S?tag=youraffiliateid-21",
  sections: {
    intro: ["OnePlus flagship with best value for money performance."],
    layout: ["Hasselblad cameras, 100W charging, IP65 rating."],
    pros: ["Best performance/price", "Super fast charging", "Clean OxygenOS"],
    cons: ["Average low light camera", "No wireless charging"],
    conclusion: ["Best bang for buck flagship."]
  },
  cta: { url: "https://amazon.in/dp/B0CP8D2R8S?tag=youraffiliateid-21", text: "Buy OnePlus 12 →" }
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
  price: "₹89,999",
  rating: 4.6,
  ctaLabel: "Buy Pixel 8 Pro",
  ctaUrl: "https://amazon.in/dp/B0CG9PNH9M?tag=youraffiliateid-21",
  sections: {
    intro: ["Google's best Pixel with unmatched camera software."],
    layout: ["Magic Editor, Best Take, 7 years Android updates."],
    pros: ["Best camera software", "Clean Android", "Long support"],
    cons: ["Tensor chip not fastest", "Average battery"],
    conclusion: ["Photography first phone."]
  },
  cta: { url: "https://amazon.in/dp/B0CG9PNH9M?tag=youraffiliateid-21", text: "Buy Pixel 8 Pro →" }
},

{
  slug: "poco-x6-pro",
  category: "Mobile",
  readTime: "3 min read",
  badgeColor: "violet",
  title: "POCO X6 Pro - Gaming Budget Beast",
  excerpt: "6.67-inch AMOLED 120Hz, Dimensity 8300 Ultra, 8GB RAM, 256GB",
  date: "Dec 2025",
  author: "You",
  image: "./images/poco_x6_pro.jpeg",
  price: "₹24,999",
  rating: 4.4,
  ctaLabel: "Buy POCO X6 Pro",
  ctaUrl: "https://amazon.in/dp/B0CS8G8W8X?tag=youraffiliateid-21",
  sections: {
    intro: ["Budget gaming phone with flagship-level performance."],
    layout: ["120W charging, UFS 4.0, HyperOS, IP54 rating."],
    pros: ["Insane performance", "Fast charging", "Great value"],
    cons: ["Average camera", "Bloatware"],
    conclusion: ["Best gaming phone under 25k."]
  },
  cta: { url: "https://amazon.in/dp/B0CS8G8W8X?tag=youraffiliateid-21", text: "Buy POCO X6 Pro →" }
},

{
  slug: "motorola-edge-50-pro",
  category: "Mobile",
  readTime: "4 min read",
  badgeColor: "indigo",
  title: "Motorola Edge 50 Pro - Clean Premium Midrange",
  excerpt: "6.7-inch pOLED 144Hz, Snapdragon 7 Gen 3, 12GB RAM, 256GB",
  date: "Dec 2025",
  author: "You",
  image: "./images/moto_edge_50_pro.jpeg",
  price: "₹31,999",
  rating: 4.5,
  ctaLabel: "Buy Motorola Edge 50 Pro",
  ctaUrl: "https://amazon.in/dp/B0D2F3G4H5?tag=youraffiliateid-21",
  sections: {
    intro: ["Motorola's clean Android experience with premium features."],
    layout: ["125W charging, wireless charging, Pantone colors."],
    pros: ["Clean software", "Smooth 144Hz display", "Fast charging"],
    cons: ["Average battery life", "Camera processing"],
    conclusion: ["Best clean Android midrange."]
  },
  cta: { url: "https://amazon.in/dp/B0D2F3G4H5?tag=youraffiliateid-21", text: "Buy Motorola Edge 50 Pro →" }
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
  price: "₹1,299",
  rating: 4.5,
  ctaLabel: "Buy MOSISO Sleeve",
  ctaUrl: "https://amazon.in/dp/B0B3ZVSP2Z?tag=youraffiliateid-21",
  sections: {
    intro: ["This sleeve is perfect for lightweight protection on the go."],
    layout: ["Water-repellent exterior, soft lining, multiple color options."],
    pros: ["Slim profile", "Affordable", "Machine washable"],
    cons: ["No stand functionality"],
    conclusion: ["Great for MacBook Air/M1/M2 owners looking for minimal protection."]
  },
  cta: { url: "https://amazon.in/dp/B0B3ZVSP2Z?tag=youraffiliateid-21", text: "Buy MOSISO Sleeve →" }
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
  price: "₹2,799",
  rating: 4.7,
  ctaLabel: "Buy Tomtoc Sleeve",
  ctaUrl: "https://amazon.in/dp/B01MQZWGMW?tag=youraffiliateid-21",
  sections: {
    intro: ["Excellent protection for your MacBook Pro in a slim design."],
    layout: ["Corner armor, soft fleece lining, durable zipper."],
    pros: ["Superior drop protection", "High quality", "Multiple colors"],
    cons: ["Few bulkier than typical sleeves"],
    conclusion: ["Ideal for users needing rugged protection on the go."]
  },
  cta: { url: "https://amazon.in/dp/B01MQZWGMW?tag=youraffiliateid-21", text: "Buy Tomtoc Sleeve →" }
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
  price: "₹3,399",
  rating: 4.4,
  ctaLabel: "Buy Tomtoc Hard Case",
  ctaUrl: "https://amazon.in/dp/B074DFZ5VF?tag=youraffiliateid-21",
  sections: {
    intro: ["Sturdy and lightweight, gives solid protection without weight."],
    layout: ["Slim snap-on design, ventilation holes, non-slip rubber feet."],
    pros: ["Easy to install", "Good protection", "Doesn’t interfere with ports"],
    cons: ["Can get scratched over time"],
    conclusion: ["Perfect for professionals needing hard protection."]
  },
  cta: { url: "https://amazon.in/dp/B074DFZ5VF?tag=youraffiliateid-21", text: "Buy Tomtoc Hard Case →" }
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
    intro: ["Keeps your MacBook Air’s design visible and protected."],
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
  price: "₹1,799",
  rating: 4.6,
  ctaLabel: "Buy MOSISO Sleeve 16",
  ctaUrl: "https://amazon.in/dp/B01LYH6BWG?tag=youraffiliateid-21",
  sections: {
    intro: ["Perfect heavy-duty protection mixed with portability."],
    layout: ["Waterproof nylon, shockproof interior, multiple colors."],
    pros: ["Durable", "Lightweight", "Fashionable"],
    cons: ["No stand or additional pockets"],
    conclusion: ["Trusted brand for MacBook accessories."]
  },
  cta: { url: "https://amazon.in/dp/B01LYH6BWG?tag=youraffiliateid-21", text: "Buy MOSISO Sleeve 16 →" }
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
  price: "₹1,299",
  rating: 4.7,
  ctaLabel: "Buy Spigen Ultra Hybrid",
  ctaUrl: "https://amazon.in/dp/B0B1J3K7G3?tag=youraffiliateid-21",
  sections: {
    intro: ["Slim clear case for iPhone 15 Pro with robust protection."],
    layout: ["Made of TPU & polycarbonate, button covers, wireless charging friendly."],
    pros: ["Crystal clear", "Good grip", "Affordable"],
    cons: ["No extra storage"],
    conclusion: ["Best transparent case for premium look."]
  },
  cta: { url: "https://amazon.in/dp/B0B1J3K7G3?tag=youraffiliateid-21", text: "Buy Spigen Ultra Hybrid →" }
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
  price: "₹899",
  rating: 4.5,
  ctaLabel: "Buy Ringke Fusion Case",
  ctaUrl: "https://amazon.in/dp/B07XFHGZSL?tag=youraffiliateid-21",
  sections: {
    intro: ["Affordable, sleek case to show off POCO X6 Pro’s design while protecting."],
    layout: ["Hybrid TPU & PC, raised bezels, wireless charging compatible."],
    pros: ["Slim", "Scratch resistant", "Non-yellowing"],
    cons: ["Limited color options"],
    conclusion: ["Solid choice for POCO X6 protection."]
  },
  cta: { url: "https://amazon.in/dp/B07XFHGZSL?tag=youraffiliateid-21", text: "Buy Ringke Fusion Case →" }
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
  price: "₹1,599",
  rating: 4.6,
  ctaLabel: "Buy Spigen Armor Case",
  ctaUrl: "https://amazon.in/dp/B09MSFP2YZ?tag=youraffiliateid-21",
  sections: {
    intro: ["Rugged protection for Samsung S24 Ultra with sleek design."],
    layout: ["Hard PC back, TPU bumper, air cushion technology."],
    pros: ["Excellent drop protection", "Comfortable grip", "Slim profile"],
    cons: ["Pricey compared to basic cases"],
    conclusion: ["Protects well without bulk."]
  },
  cta: { url: "https://amazon.in/dp/B09MSFP2YZ?tag=youraffiliateid-21", text: "Buy Spigen Armor Case →" }
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
  price: "₹899",
  rating: 4.5,
  ctaLabel: "Buy Ringke Fusion Pixel Case",
  ctaUrl: "https://amazon.in/dp/B08QXKDSJV?tag=youraffiliateid-21",
  sections: {
    intro: ["Compact, clear case perfect for Pixel 8 Pro’s design showcase."],
    layout: ["Hybrid TPU bumper, PC back, wireless charging compatible."],
    pros: ["Good grip", "Minimal yellowing", "Affordable"],
    cons: ["No kickstand"],
    conclusion: ["Great basic transparent case."]
  },
  cta: { url: "https://amazon.in/dp/B08QXKDSJV?tag=youraffiliateid-21", text: "Buy Ringke Fusion Pixel Case →" }
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
  price: "₹4,599",
  rating: 4.8,
  ctaLabel: "Buy Apple Silicone Case",
  ctaUrl: "https://amazon.in/dp/B0B4N5Y4TW?tag=youraffiliateid-21",
  sections: {
    intro: ["Premium Apple made case designed perfectly for iPhone 15."],
    layout: ["Silicone finish, MagSafe compatible, silky soft interior."],
    pros: ["Premium feel", "Perfect fit", "Safe wireless charging"],
    cons: ["Expensive"],
    conclusion: ["Best if you want original Apple quality."]
  },
  cta: { url: "https://amazon.in/dp/B0B4N5Y4TW?tag=youraffiliateid-21", text: "Buy Apple Silicone Case →" }
},
// 8 Apple Headphones & Earbuds Posts - Add to your posts array

{
  slug: "airpods-pro-2nd-gen-usb-c",
  category: "Accessories",
  readTime: "4 min read",
  badgeColor: "sky",
  title: "AirPods Pro 2nd Gen (USB-C) - Best Noise Cancelling",
  excerpt: "Active Noise Cancellation 2x better, Adaptive Transparency, 6hrs battery with ANC",
  date: "Dec 2025",
  author: "You",
  image: "./images/airpod_2n_generation.jpeg",
  price: "₹22,900",
  rating: 4.8,
  ctaLabel: "Buy AirPods Pro 2",
  ctaUrl: "https://amazon.in/dp/B0CHX5K7Y3?tag=youraffiliateid-21",
  sections: {
    intro: ["Apple's best earbuds with industry-leading ANC and spatial audio."],
    layout: ["USB-C charging case, IP54 rating, Precision Finding with U1 chip."],
    pros: ["Best ANC", "Spatial Audio with head tracking", "Find My integration"],
    cons: ["Expensive", "Battery slightly less than competitors"],
    conclusion: ["Perfect for Apple ecosystem users."]
  },
  cta: { url: "https://amazon.in/dp/B0CHX5K7Y3?tag=youraffiliateid-21", text: "Buy AirPods Pro 2 →" }
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
  price: "₹16,900",
  rating: 4.5,
  ctaLabel: "Buy AirPods 3rd Gen",
  ctaUrl: "https://amazon.in/dp/B09JQMJHLY?tag=youraffiliateid-21",
  sections: {
    intro: ["Apple's best-selling true wireless earbuds with spatial audio."],
    layout: ["Open-ear design, Adaptive EQ, IPX4 sweat/water resistance."],
    pros: ["Comfortable fit", "Great sound quality", "Seamless Apple integration"],
    cons: ["No ANC", "No silicone tips"],
    conclusion: ["Best for casual Apple users."]
  },
  cta: { url: "https://amazon.in/dp/B09JQMJHLY?tag=youraffiliateid-21", text: "Buy AirPods 3rd Gen →" }
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
  price: "₹54,900",
  rating: 4.6,
  ctaLabel: "Buy AirPods Max",
  ctaUrl: "https://amazon.in/dp/B08PZDZT9S?tag=youraffiliateid-21",
  sections: {
    intro: ["Apple's premium over-ear headphones with audiophile-grade sound."],
    layout: ["High-fidelity drivers, mesh canopy headband, 40mm drivers."],
    pros: ["Amazing sound", "Best ANC in class", "Luxury build"],
    cons: ["Very expensive", "Heavy", "No lossless audio"],
    conclusion: ["For audiophiles in Apple ecosystem."]
  },
  cta: { url: "https://amazon.in/dp/B08PZDZT9S?tag=youraffiliateid-21", text: "Buy AirPods Max →" }
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
  price: "₹18,900",
  rating: 4.7,
  ctaLabel: "Buy AirPods 4 ANC",
  ctaUrl: "https://amazon.in/dp/B0DLKX5N8P?tag=youraffiliateid-21",
  sections: {
    intro: ["Latest AirPods with ANC at affordable price."],
    layout: ["H2 chip, ANC, Transparency mode, wireless charging case."],
    pros: ["ANC at good price", "Improved fit", "Better battery"],
    cons: ["Open design", "Average bass"],
    conclusion: ["Best value ANC AirPods."]
  },
  cta: { url: "https://amazon.in/dp/B0DLKX5N8P?tag=youraffiliateid-21", text: "Buy AirPods 4 ANC →" }
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
  price: "₹17,900",
  rating: 4.4,
  ctaLabel: "Buy Beats Studio Buds+",
  ctaUrl: "https://amazon.in/dp/B0C3RZN7YQ?tag=youraffiliateid-21",
  sections: {
    intro: ["Beats premium buds with Apple Spatial Audio support."],
    layout: ["IPX4 rating, USB-C, Android/iOS compatible."],
    pros: ["Bass-heavy sound", "Good ANC", "Comfortable fit"],
    cons: ["Case scratches easily", "Average call quality"],
    conclusion: ["Great for bass lovers."]
  },
  cta: { url: "https://amazon.in/dp/B0C3RZN7YQ?tag=youraffiliateid-21", text: "Buy Beats Studio Buds+ →" }
},

{
  slug: "airpods-pro-usb-c-1st-gen",
  category: "Accessories",
  readTime: "3 min read",
  badgeColor: "sky",
  title: "AirPods Pro 1st Gen (USB-C MagSafe Case)",
  excerpt: "Refreshed AirPods Pro with USB-C charging case and MagSafe.",
  date: "Dec 2025",
  author: "You",
  image: "./images/airpod_1gen_case.jpeg",
  price: "₹19,900",
  rating: 4.6,
  ctaLabel: "Buy AirPods Pro USB-C",
  ctaUrl: "https://amazon.in/dp/B0D3K4L5M6?tag=youraffiliateid-21",
  sections: {
    intro: ["Same great AirPods Pro now with USB-C charging case."],
    layout: ["Same H1 chip, ANC, Transparency, Wireless charging."],
    pros: ["Proven performance", "USB-C finally", "Great value"],
    cons: ["Older chip vs Pro 2"],
    conclusion: ["Excellent deal for Pro features."]
  },
  cta: { url: "https://amazon.in/dp/B0D3K4L5M6?tag=youraffiliateid-21", text: "Buy AirPods Pro USB-C →" }
},

{
  slug: "beats-fit-pro",
  category: "Accessories",
  readTime: "3 min read",
  badgeColor: "violet",
  title: "Beats Fit Pro - Workout Earbuds",
  excerpt: "Wingtip design, Active Noise Cancelling, Apple H1 chip, IPX4",
  date: "Dec 2025",
  author: "You",
  image: "./images/beats_fit_pro.jpeg",
  price: "₹18,499",
  rating: 4.5,
  ctaLabel: "Buy Beats Fit Pro",
  ctaUrl: "https://amazon.in/dp/B09JQMJHPQ?tag=youraffiliateid-21",
  sections: {
    intro: ["Secure fit earbuds perfect for workouts and running."],
    layout: ["Wingtip design, Spatial Audio, 6hrs battery with ANC."],
    pros: ["Secure fit", "Bass-heavy sound", "Sweat resistant"],
    cons: ["Bulky charging case", "ANC not best in class"],
    conclusion: ["Best workout buds for Apple users."]
  },
  cta: { url: "https://amazon.in/dp/B09JQMJHPQ?tag=youraffiliateid-21", text: "Buy Beats Fit Pro →" }
},

{
  slug: "airpods-4th-gen-standard",
  category: "Accessories",
  readTime: "2 min read",
  badgeColor: "sky",
  title: "AirPods 4th Gen (Standard) - Open Ear Design",
  excerpt: "New design with improved comfort, H2 chip, USB-C case",
  date: "Dec 2025",
  author: "You",
  image: "./images/airpod_4_gen.jpeg",
  price: "₹12,900",
  rating: 4.4,
  ctaLabel: "Buy AirPods 4 Standard",
  ctaUrl: "https://amazon.in/dp/B0DLKX5N8Q?tag=youraffiliateid-21",
  sections: {
    intro: ["Entry-level AirPods 4 with latest Apple tech."],
    layout: ["Open-ear design, H2 chip, wireless charging case."],
    pros: ["Affordable", "Improved fit", "Good battery"],
    cons: ["No ANC", "Average sound isolation"],
    conclusion: ["Best entry point to Apple audio."]
  },
  cta: { url: "https://amazon.in/dp/B0DLKX5N8Q?tag=youraffiliateid-21", text: "Buy AirPods 4 Standard →" }
}



];

// Add 15 more posts following the same pattern...
// Total 30 posts ready for your affiliate marketing
