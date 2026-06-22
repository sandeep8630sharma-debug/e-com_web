// --- 1. DATA (Simulates products.js) ---
export const initialProducts = [
  // Realistic Image URLs for Phone (Dark)
  {
    id: 101,
    name: "Classic Floral Diamond Necklace",
    price: 119990,
    image: "https://i.pinimg.com/170x/f8/c2/95/f8c2951eb46df797cf4e83449f509fc8.jpg",
    description:
      "A graceful floral-inspired necklace with sparkling stones and emerald accents, ideal for festive and party wear.",
    category: "necklace",
  },
  // Realistic Image URLs for Laptop (Silver)
  {
    id: 102,
    name: "Crystal Cascade Necklace Set",
    price: 9990,
    image: "https://i.pinimg.com/236x/67/80/f6/6780f6179807a31bba6298163be3850e.jpg",
    description:
       "A sophisticated necklace set featuring cascading crystal drops and matching earrings for elegant occasions.",
     category: "necklace",
  },
  // Realistic Image URLs for Tablet (with stylus)
  {
    id: 103,
    name: "Classic Floral Diamond Necklace",
    price: 9990,
    image: "https://i.pinimg.com/236x/c1/80/8c/c1808c92fae0c816523ab23fb0bf6647.jpg",
    description:
      "A graceful floral-inspired necklace with sparkling stones and emerald accents, ideal for festive and party wear.",
    category: "necklace",
  },
  // Realistic Image URLs for Camera (Mirrorless)
  {
    id: 401,
    name: "Diamond Empress Waterfall Set",
    price: 5490,
    image: "https://static.vecteezy.com/system/resources/thumbnails/075/625/735/small/a-diamond-necklace-and-earrings-on-display-photo.jpg",
    description:
      "Capture stunning photos and 4K videos with professional-grade performance.",
    category: "necklace",
  },
  // Realistic Image URLs for Phone (Light/Older Model)
  {
    id: 501,
    name: "Sovereign Sparkle Necklace Set",
    price: 9990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHn62jbqfVR3ISq9vWGVNTeR3FgEllpAw6BL2jZBxHttDqaBtXot82ZDU&s=10",
    description:
      "An affordable, feature-packed phone with a secure biometric sensor.",
    category: "necklace",
  },
  // Realistic Image URLs for Laptop (Chromebook)
  {
    id: 609,
    name: "HP Pavilion Plus, Intel Core i5-1335U-13th Gen Laptop, (16GB LPDDR5x,512GB SSD),IPS",
    price: 0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqHT8bxVHaiw82j8Mh2AsAK9yx4T3irA75BN-USS57Mc2jKmFtWq8WiIw&s=10",
    description:
      "The ultimate smartphone experience with a 108MP camera and all-day battery life.",
    category: "necklace",
  },
  {
    id: 601,
    name: "Eternal Diamond Royale",
    price: 5490,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQxpczjtsDl5epwbxhyTl8p7lL9Mnq4KRTxcTIYdFUIDp-5mojavCphQ&s=10",
    description:
      "Lightweight and fast, perfect for students and cloud-based work.",
    category: "necklace",
  },
  {
    id: 609,
    name: "The Imperial Spark Collection",
    price: 120990,
    image: "https://i.pinimg.com/videos/thumbnails/originals/61/a9/50/61a950d4d11905ca7f18011276c0a832.0000000.jpg",
    description:
      "27 Diamond necklace set ideas | diamond necklace set, diamond necklace designs, bridal diamond necklace.",

    category: "necklace",
  },
  {
    id: 602,
    name: "The Regal Heritage Collection green diamond",
    price: 4990,
    image: "https://i.pinimg.com/736x/b0/78/cc/b078cc2c59a8c172e890b9458a398b8f.jpg",
    description:
      "Delicate floral artistry adorned with sparkling stones, designed to capture the essence of modern royalty.",
    category: "necklace",
  },
  {
    id: 603,
    name: "The Regal Heritage Collection",
    price: 4990,
    image: "https://www.shreehari.co/media/catalog/product/cache/57db4a1e37f9bcfcae47c0bfd2b59438/a/s/ast3161rdkerb.jpg",
    description:
      "Featuring cascading diamond-like brilliance, this luxurious set exudes royal charm and sophistication.",
    category: "necklace",
  },
  {
    id: 604,
    name: "Signature Edition",
    price: 5990,
    image: "https://theppjewellers.com/storage/uploads/media/2026/05/Gemini-Generated-Image-kldun7kldun7kldu-940x1138.png",
    description:
      "An opulent emerald and diamond-inspired masterpiece crafted for timeless elegance and regal celebrations.",
    category: "necklace",
  },
  {
    id: 610,
    name: "The Quiet Luxury Diamond Pendant Set",
    price: 20990,
    image: "https://www.caratlane.com/blog/wp-content/uploads/2026/01/diamond-bridal-jewellery-set.jpg",
    description:
      "The Quiet Luxury Diamond Pendant Set.",
    category: "necklace",
  },
  {
    id: 605,
    name: "AD Necklace",
    price: 5990,
    image:
      "https://i.pinimg.com/474x/0d/e2/d7/0de2d7b05d46a4d938f8bc9418ffdf53.jpg?nii=t",
    description:
      "Designer Premium Bridal AD Stone Necklace Set With Earrings -Silver Polish.",
    category: "necklace",
  },
  {
    id: 606,
    name: "Dana AD Necklace Set",
    price: 7099,
    image: "https://ajeh.in/cdn/shop/files/IMG_8470.jpg?v=1752938569&width=1445",
    description:
      "Dana AD Necklace Set | American Diamond Necklace Set - sharma Jewellery.",
    category: "necklace",
  
  },
  {
    id: 607,
    name: "Silver Polish ",
    price: 9099,
    image: "https://siyari.com/cdn/shop/articles/Bridal_diamond_necklace_in_hyderabad_2.jpg?v=1762237316&width=4038",
    description:
      "Bridal Diamond Necklace – Classic Designs with Modern Elegance",

    category: "necklace",
  },
  {
    id: 608,
    name: "Premium Bridal AD Stone Necklace ",
    price: 6999,
    image: "https://zuccii.com/cdn/shop/files/Designer_Premium_Bridal_ADz_Stone_Necklace_Set_With_Earrings_-Silver_Polish.jpg",
    description:
      "Designer Premium Bridal AD Stone Necklace Set With Earrings -Silver Polish Pink.",
    category: "necklace",
  },

  {
    id: 654,
    name: "Silver Toned Emerald Green Zircon ",
    price: 9099,
    image: "https://cdn.eternz.com/thumbnails/products/283528329_110b7074_thumbnail_1024.jpg",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement Necklace.",
    category: "necklace",
  },

  {
    id: 655,
    name: "Silver Toned Emerald Green Zircon ",
    price: 9099,
    image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQA8Mi3HT0H3VL0WUDXOmBI_XjkD-B-WfxJw4CBEniWG6TW6HBeshTg8&s=10",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement Necklace set.",
    category: "necklace",
  },


  {
    id: 657,
    name: "Silver Toned Emerald Green Zircon ",
    price: 9099,
    image: "/images/bangle.png",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement bridal chuda set.",
    category: "bangles",
  },
  
  {
    id: 658,
    name: "purl royal Queen bridal chuda set",
    price: 9099,
    image: "/images/royalchuda.png",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement bridal chuda set.",
    category: "bangles",
  },
   
  {
    id: 659,
    name: "AD-001 embral ring",
    price: 909,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuHWGF4nM-Jmbgm55qCqJwk_0xqwIMWHWUtT7T1hJUwVgvmKSb8Mw40cp&s=10",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },
  
  {
    id: 689,
    name: "royal AD ring",
    price: 909,
    image: "https://www.kuvarjewels.com/cdn/shop/files/F4602376-FEE5-49F4-B2A2-6269F595649C_1080x1080.jpg?v=1715445385",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },
    
  {
    id: 700,
    name: "royal Maharani ring",
    price: 909,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1STGHJPOdEhtcaZ7v4_w_EFjrxzRtLpa9YDDnBdedAg&s=10",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },
  
  {
    id: 743,
    name: "Silver royal AD ring",
    price: 909,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGqe6NDl5bHtUDF6xoOBLlLMqqRl86E4ZvCCPUx2-hLS1DYtbDNrQ1gdeA&s=10",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },

  {
    id: 765,
    name: "royal AD ring",
    price: 909,
    image: "https://api.dipraluxe.com/storage/gallery/images/whatsapp-image-2026-04-29-at-71731-pm-3.webp",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },
  {
    id: 766,
    name: "royal AD ring",
    price: 909,
    image: "/images/hard.png",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "chuda",
  },
{
    id: 768,
    name: "royal AD chuda",
    price: 900,
    image: "https://jewelsgalaxy.com/cdn/shop/files/SMNJG-RNG-5293-M-1-2x.jpg?v=1757752807&width=1024",
    description:"Silver Toned Emerald Green Zircon AD Studded Layered Bridal Drop Designer Statement royal ring.",
    category: "Ring",
  },





];