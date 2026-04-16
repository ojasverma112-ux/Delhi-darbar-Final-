/* ==========================================================================
   DELHI DARBAAR V4 - BACKEND EDITABLE DATA SOURCE
   FILE 3/4: menu-data.js

   HOW TO EDIT:
   - This is your single source of truth.
   - Update notices, links, categories, items, and image URLs here.
   - Each item supports local + remote image fallback.
   - Script will resolve image as: local -> remote -> global fallback.
   ========================================================================== */

window.DELHI_DARBAAR_DATA = {
  meta: {
    brand: "Delhi Darbaar Hilversum",
    currency: "€",
    localeDefault: "nl",
    version: "4.0.0",
    imageVersion: "2026-04-16",
    projectBase: "/Delhi-darbar-Final-",
    contact: {
      phone: "+31 613 53 36 12",
      email: "info@delhidarbaar.nl",
      address: "Havenstraat 75, 1211 KH Hilversum, Netherlands"
    }
  },

  notices: {
    openHours: {
      nl: "WE ARE OPEN MON TO SAT FROM 13:00 TO 22:00 HRS",
      en: "WE ARE OPEN MON TO SAT FROM 13:00 TO 22:00 HRS"
    },
    minDeliveryOrder: {
      nl: "MINIMUM ORDER FOR HOME DELIVERY IS €20",
      en: "MINIMUM ORDER FOR HOME DELIVERY IS €20"
    },
    onlineOrderNote: {
      nl: "Minimum Online Food Order for Delivery is €20, Delivery Service Fee is €2.50",
      en: "Minimum Online Food Order for Delivery is €20, Delivery Service Fee is €2.50"
    }
  },

  links: {
    googleReviews: "https://share.google/Uf3ZmKgW9fJFOXmPP",
    uberEats: "https://www.ubereats.com/nl/store/delhi-darbaar-indiaas-restaurant/ZreIMyHhQma4YGTfFjBAnQ"
  },

  images: {
    fallback: {
      local: "/Delhi-darbar-Final-/fallback.jpg",
      remote: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
    },

    hero1: {
      local: "/Delhi-darbar-Final-/hero-1.jpg",
      remote: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
    },
    hero2: {
      local: "/Delhi-darbar-Final-/hero-2.jpg",
      remote: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=80"
    },
    hero3: {
      local: "/Delhi-darbar-Final-/hero-3.jpg",
      remote: "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&w=1800&q=80"
    },

    gallery1: {
      local: "/Delhi-darbar-Final-/gallery-1.jpg",
      remote: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"
    },
    gallery2: {
      local: "/Delhi-darbar-Final-/gallery-2.jpg",
      remote: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=80"
    },
    gallery3: {
      local: "/Delhi-darbar-Final-/gallery-3.jpg",
      remote: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1400&q=80"
    },
    gallery4: {
      local: "/Delhi-darbar-Final-/gallery-4.jpg",
      remote: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80"
    },
    gallery5: {
      local: "/Delhi-darbar-Final-/gallery-5.jpg",
      remote: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1400&q=80"
    },
    gallery6: {
      local: "/Delhi-darbar-Final-/gallery-6.jpg",
      remote: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=80"
    },
    gallery7: {
      local: "/Delhi-darbar-Final-/gallery-7.jpg",
      remote: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80"
    },
    gallery8: {
      local: "/Delhi-darbar-Final-/gallery-8.jpg",
      remote: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80"
    }
  },

  categories: [
    { id: "all", label: { nl: "All", en: "All" } },
    { id: "darbaar-special-menus", label: { nl: "Darbaar Special Menus", en: "Darbaar Special Menus" } },
    { id: "soup", label: { nl: "Soup", en: "Soup" } },
    { id: "street-food", label: { nl: "Delhi Darbaar Special Street Food", en: "Delhi Darbaar Special Street Food" } },
    { id: "veg-starter", label: { nl: "Veg Starter", en: "Veg Starter" } },
    { id: "non-veg-starter", label: { nl: "Non Veg Starter", en: "Non Veg Starter" } },
    { id: "tandoori-main", label: { nl: "Tandoori Main Dishes", en: "Tandoori Main Dishes" } },
    { id: "non-veg-main", label: { nl: "Non Veg Main Dishes", en: "Non Veg Main Dishes" } },
    { id: "veg-main", label: { nl: "Veg Main Dishes", en: "Veg Main Dishes" } },
    { id: "indo-chinese-main", label: { nl: "Indo Chinese Main Dishes", en: "Indo Chinese Main Dishes" } },
    { id: "biryani", label: { nl: "Biryani", en: "Biryani" } },
    { id: "tandoori-breads", label: { nl: "Indian Tandoori Breads", en: "Indian Tandoori Breads" } },
    { id: "extras", label: { nl: "Extras", en: "Extras" } },
    { id: "dessert", label: { nl: "Dessert", en: "Dessert" } },
    { id: "afgani-popular", label: { nl: "Darya/Afgani Popular Dishes", en: "Darya/Afgani Popular Dishes" } },
    { id: "drinks", label: { nl: "Drinks", en: "Drinks" } }
  ],

  /* ==========================================================================
     MENU ITEMS
     NOTES:
     - image.local can point to your own uploaded image
     - image.remote is backup
     - available: false hides item from listing
     ========================================================================== */
  items: [
    /* DARBAAR SPECIAL MENUS */
    {
      id: "menu-surprise-1p",
      category: "darbaar-special-menus",
      featured: true,
      available: true,
      spicy: 1,
      name: {
        nl: "Three Course Surprise Dinner - 1 Person",
        en: "Three Course Surprise Dinner - 1 Person"
      },
      description: {
        nl: "Verrassingsmenu met authentieke starters, combinatie van groente- en vleesgerechten met rijst en dessert. Vegetarisch mogelijk.",
        en: "A surprise menu with authentic starters, mixed veg and meat dishes with rice, finished with dessert. Vegetarian possible."
      },
      price: 35.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/surprise-1p.jpg",
        remote: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "menu-veg-deluxe-2p",
      category: "darbaar-special-menus",
      featured: true,
      available: true,
      spicy: 1,
      name: { nl: "Veg Deluxe Menu – 2 Person (3 Courses)", en: "Veg Deluxe Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Veg Samosa & Onion Bhajee. Main: Dal Makhni, Palak Paneer, Mix Vegetable, Rice. Extras: Naan, Raita, Salad, Pappadam, sauzen. Dessert: Kheer & Gulab Jamun.",
        en: "Starter: Veg Samosa & Onion Bhajee. Main: Dal Makhni, Palak Paneer, Mix Vegetable, Rice. Extras: Naan, Raita, Salad, Pappadam, sauces. Dessert: Kheer & Gulab Jamun."
      },
      price: 69.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/veg-deluxe.jpg",
        remote: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "menu-tandoori-deluxe-2p",
      category: "darbaar-special-menus",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Tandoori Deluxe Menu – 2 Person (3 Courses)", en: "Tandoori Deluxe Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Samosa Lamb & Tandoori Chicken Tikka. Main: Butter Chicken, Tandoori Chicken, Dal Makhni, Rice. Inclusief extras en dessert.",
        en: "Starter: Samosa Lamb & Tandoori Chicken Tikka. Main: Butter Chicken, Tandoori Chicken, Dal Makhni, Rice. Includes extras and dessert."
      },
      price: 75.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/tandoori-deluxe.jpg",
        remote: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "menu-seafood-2p",
      category: "darbaar-special-menus",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Darbaar Seafood Menu – 2 Person (3 Courses)", en: "Darbaar Seafood Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Fish Pakora, King Prawn Pakora. Main: Fish Curry, King Prawn Curry, Dal Tadka, Rice. Inclusief extras en dessert.",
        en: "Starter: Fish Pakora, King Prawn Pakora. Main: Fish Curry, King Prawn Curry, Dal Tadka, Rice. Includes extras and dessert."
      },
      price: 85.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/seafood-deluxe.jpg",
        remote: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "menu-royal-4p",
      category: "darbaar-special-menus",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Darbaar Royal Menu – 4 Person (3 Courses)", en: "Darbaar Royal Menu – 4 Person (3 Courses)" },
      description: {
        nl: "Starter: Samosa & Hot Wings. Main: Butter Chicken, Chicken Madras, Tandoori Mix Grill, Dal Makhni, Rice. Extras en dessert inbegrepen.",
        en: "Starter: Samosa & Hot Wings. Main: Butter Chicken, Chicken Madras, Tandoori Mix Grill, Dal Makhni, Rice. Extras and dessert included."
      },
      price: 140.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/royal-4p.jpg",
        remote: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* SOUP */
    {
      id: "soup-chicken",
      category: "soup",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Kip Soup", en: "Chicken Soup" },
      description: {
        nl: "Chicken curry soup met rijke smaak.",
        en: "Chicken curry soup with a bound and rich taste."
      },
      price: 6.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/chicken-soup.jpg",
        remote: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "soup-dal",
      category: "soup",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Dal Soup", en: "Dal Soup" },
      description: {
        nl: "Indiase linzensoep.",
        en: "Indian lentil soup."
      },
      price: 6.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/dal-soup.jpg",
        remote: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* STREET FOOD */
    {
      id: "street-aashak",
      category: "street-food",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Aashak (Vegetarian)", en: "Aashak (Vegetarian)" },
      description: {
        nl: "Gestoomde pasta gevuld met prei, geserveerd met yoghurt, linzen, tomatensaus, koriander en munt.",
        en: "Steamed pasta with leek, topped with yoghurt, lentils in tomato sauce, coriander and mint."
      },
      price: 9.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/aashak.jpg",
        remote: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "street-mantu",
      category: "street-food",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Mantu", en: "Mantu" },
      description: {
        nl: "Gestoomde pasta gevuld met kip en lam, afgemaakt met yoghurt, linzen en aromatische kruiden.",
        en: "Steamed pasta filled with marinated chicken and lamb, topped with yoghurt and lentils."
      },
      price: 9.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/mantu.jpg",
        remote: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5f5?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* VEG STARTER */
    {
      id: "veg-onion-bhaji",
      category: "veg-starter",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Onion Bhaji", en: "Onion Bhaji" },
      description: {
        nl: "Gefrituurde ronde uien in kikkererwtenmeel met Indiase kruiden.",
        en: "Fried onions in gram flour with Indian spices."
      },
      price: 6.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/onion-bhaji.jpg",
        remote: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "veg-samosa",
      category: "veg-starter",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Punjabi Samosa Vegetarian", en: "Punjabi Samosa Vegetarian" },
      description: {
        nl: "Pasteitjes gevuld met mild gekruide aardappel en doperwten.",
        en: "Pastries filled with mild spiced potatoes and peas."
      },
      price: 6.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/veg-samosa.jpg",
        remote: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "veg-paneer-pakora",
      category: "veg-starter",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Paneer Pakora", en: "Paneer Pakora" },
      description: {
        nl: "Verse paneerblokjes in gekruid beslag, gefrituurd.",
        en: "Fresh cottage cheese marinated in spiced batter and fried."
      },
      price: 7.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/paneer-pakora.jpg",
        remote: "https://images.unsplash.com/photo-1574653853027-9f56f7f22f4f?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* NON VEG STARTER */
    {
      id: "nveg-samosa-lamb",
      category: "non-veg-starter",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Samosa Lamb", en: "Samosa Lamb" },
      description: {
        nl: "Pasteitjes gevuld met gekruid lamsgehakt.",
        en: "Pastries filled with minced lamb meat."
      },
      price: 7.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/samosa-lamb.jpg",
        remote: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "nveg-chicken-pakora",
      category: "non-veg-starter",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Chicken Pakora", en: "Chicken Pakora" },
      description: {
        nl: "Kip gefrituurd met kikkererwtenmeel, kruiden en specerijen.",
        en: "Chicken fried with gram flour, Indian spices and herbs."
      },
      price: 7.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/chicken-pakora.jpg",
        remote: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "nveg-hot-wings",
      category: "non-veg-starter",
      featured: true,
      available: true,
      spicy: 3,
      name: { nl: "Hot Chicken Wings", en: "Hot Chicken Wings" },
      description: {
        nl: "Gegrilde chicken wings in pittige tandoori saus.",
        en: "Grilled chicken wings marinated in a hot tandoori sauce."
      },
      price: 7.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/hot-wings.jpg",
        remote: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* TANDOORI MAIN */
    {
      id: "tandoori-chicken-main",
      category: "tandoori-main",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Tandoori Chicken", en: "Tandoori Chicken" },
      description: {
        nl: "Kip gemarineerd in kruiden, yoghurt, gember en knoflook, geroosterd in tandoor. Met rijst en groente.",
        en: "Chicken marinated in herbs, yoghurt, ginger and garlic, roasted in tandoor. Served with rice and vegetables."
      },
      price: 18.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/tandoori-chicken-main.jpg",
        remote: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "tandoori-chicken-tikka-main",
      category: "tandoori-main",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Chicken Tikka Tandoori", en: "Chicken Tikka Tandoori" },
      description: {
        nl: "Malse kipstukken gemarineerd in tandoorisaus, gegrild. Met rijst en mix groente.",
        en: "Boneless chicken marinated in tandoori sauce and grilled. Served with rice and mixed vegetables."
      },
      price: 19.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/chicken-tikka-main.jpg",
        remote: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "tandoori-mix-grill",
      category: "tandoori-main",
      featured: true,
      available: true,
      spicy: 3,
      name: { nl: "DARBAAR spl. Tandoori Mix Grill", en: "DARBAAR spl. Tandoori Mix Grill" },
      description: {
        nl: "Combinatie van chicken, lamb chop, seekh kebab, lamb en chicken tikka. Geserveerd met rijst en groente.",
        en: "Combination of chicken, lamb chop, seekh kebab, lamb and chicken tikka. Served with rice and vegetables."
      },
      price: 22.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/mix-grill.jpg",
        remote: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* NON VEG MAIN */
    {
      id: "main-butter-chicken",
      category: "non-veg-main",
      featured: true,
      available: true,
      spicy: 1,
      name: { nl: "Butter Chicken", en: "Butter Chicken" },
      description: {
        nl: "Tandoori kip in milde romige tomaten-curry. Met rijst.",
        en: "Tandoori chicken cooked in mild creamy tomato curry. Served with rice."
      },
      price: 19.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/butter-chicken.jpg",
        remote: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "main-chicken-tikka-masala",
      category: "non-veg-main",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Chicken Tikka Masala", en: "Chicken Tikka Masala" },
      description: {
        nl: "Gegrilde kip in kruidige currysaus met paprika. Met rijst.",
        en: "Grilled chicken in spiced curry with capsicum. Served with rice."
      },
      price: 18.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/chicken-tikka-masala.jpg",
        remote: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "main-lamb-curry",
      category: "non-veg-main",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Lamb Curry", en: "Lamb Curry" },
      description: {
        nl: "Lamsvlees met Indiase kruiden, tomaat, ui en koriander in currysaus. Met rijst.",
        en: "Lamb cooked with Indian spices, tomatoes, onions and coriander. Served with rice."
      },
      price: 19.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/lamb-curry.jpg",
        remote: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "main-chicken-madras",
      category: "non-veg-main",
      featured: false,
      available: true,
      spicy: 3,
      name: { nl: "Chicken Madras", en: "Chicken Madras" },
      description: {
        nl: "Zuid-Indiaas recept, medium pittig met citroen en chili. Met rijst.",
        en: "South Indian style medium-hot curry flavored with lemon and chili. Served with rice."
      },
      price: 18.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/chicken-madras.jpg",
        remote: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* VEG MAIN */
    {
      id: "vegmain-dal-tadka",
      category: "veg-main",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Dal Tadka", en: "Dal Tadka" },
      description: {
        nl: "Gele linzen met kruiden, chili en koriander. Met rijst.",
        en: "Yellow lentils with spices, chili and coriander. Served with rice."
      },
      price: 17.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/dal-tadka.jpg",
        remote: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e3?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "vegmain-dal-makhani",
      category: "veg-main",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Dal Makhani", en: "Dal Makhani" },
      description: {
        nl: "Zwarte linzen (urad) langzaam gekookt met boter. Met rijst.",
        en: "Black lentils (urad) cooked with butter. Served with rice."
      },
      price: 17.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/dal-makhani.jpg",
        remote: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "vegmain-saag-paneer",
      category: "veg-main",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Saag Paneer", en: "Saag Paneer" },
      description: {
        nl: "Verse paneer in gekruide spinaziesaus. Met rijst.",
        en: "Fresh paneer cooked in spiced spinach gravy. Served with rice."
      },
      price: 18.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/saag-paneer.jpg",
        remote: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "vegmain-paneer-tikka-masala",
      category: "veg-main",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Paneer Tikka Masala", en: "Paneer Tikka Masala" },
      description: {
        nl: "Verse paneer gesauteerd in gekruide currysaus met paprika. Met rijst.",
        en: "Fresh paneer sautéed in spiced curry with capsicum. Served with rice."
      },
      price: 19.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/paneer-tikka-masala.jpg",
        remote: "https://images.unsplash.com/photo-1631515242808-497c3fbd397f?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "vegmain-chana-masala",
      category: "veg-main",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Chana Masala", en: "Chana Masala" },
      description: {
        nl: "Kikkererwten met ui en tomatensaus. Met rijst.",
        en: "Chickpeas cooked with onions and tomato sauce. Served with rice."
      },
      price: 17.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/chana-masala.jpg",
        remote: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* INDO CHINESE MAIN */
    {
      id: "indochinese-veg-manchurian",
      category: "indo-chinese-main",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Veg Manchurian (Chef Special)", en: "Veg Manchurian (Chef Special)" },
      description: {
        nl: "Groenteballetjes in pittige Indo-Chinese saus met paprika en lente-ui.",
        en: "Vegetable dumplings in spicy Indo-Chinese sauce with capsicum and spring onion."
      },
      price: 18.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/veg-manchurian.jpg",
        remote: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* BIRYANI */
    {
      id: "biryani-veg-special",
      category: "biryani",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Special Vegetable Biryani", en: "Special Vegetable Biryani" },
      description: {
        nl: "Groenten met saffraan basmatirijst, noten en rozijnen. Met raita en salade.",
        en: "Mixed vegetables cooked with saffron basmati rice, nuts and raisins. Served with raita and salad."
      },
      price: 18.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/biryani-veg.jpg",
        remote: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "biryani-chicken",
      category: "biryani",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Chicken Biryani", en: "Chicken Biryani" },
      description: {
        nl: "Kip met saffraan basmatirijst, noten en rozijnen. Met raita en salade.",
        en: "Chicken cooked with saffron basmati rice, nuts and raisins. Served with raita and salad."
      },
      price: 18.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/biryani-chicken.jpg",
        remote: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "biryani-lamb",
      category: "biryani",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Lamb Biryani", en: "Lamb Biryani" },
      description: {
        nl: "Lamsvlees met saffraan basmati en specerijen. Met raita en salade.",
        en: "Lamb cooked with saffron basmati rice and fragrant spices. Served with raita and salad."
      },
      price: 20.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/biryani-lamb.jpg",
        remote: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* TANDOORI BREADS */
    {
      id: "bread-naan",
      category: "tandoori-breads",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Naan", en: "Naan" },
      description: {
        nl: "Klassiek Indiaas brood uit de tandoor.",
        en: "Traditional Indian bread from tandoor."
      },
      price: 3.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/naan.jpg",
        remote: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "bread-garlic-naan",
      category: "tandoori-breads",
      featured: true,
      available: true,
      spicy: 0,
      name: { nl: "Garlic Naan", en: "Garlic Naan" },
      description: {
        nl: "Naan met knoflook.",
        en: "Naan with garlic."
      },
      price: 4.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/garlic-naan.jpg",
        remote: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "bread-cheese-naan",
      category: "tandoori-breads",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Cheese Naan", en: "Cheese Naan" },
      description: {
        nl: "Naan gevuld met kaas.",
        en: "Naan stuffed with cheese."
      },
      price: 5.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/cheese-naan.jpg",
        remote: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* EXTRAS */
    {
      id: "extra-papaddam",
      category: "extras",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Papaddam", en: "Papaddam" },
      description: {
        nl: "Krokante linzenchips met komijn.",
        en: "Crispy lentil chips with cumin."
      },
      price: 1.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/papaddam.jpg",
        remote: "https://images.unsplash.com/photo-1604909053194-1f805f4f7dfb?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "extra-saffron-rice",
      category: "extras",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Saffron Rice", en: "Saffron Rice" },
      description: {
        nl: "Aromatische saffraan basmatirijst.",
        en: "Aromatic saffron basmati rice."
      },
      price: 4.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/saffron-rice.jpg",
        remote: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "extra-raita",
      category: "extras",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Raita", en: "Raita" },
      description: {
        nl: "Yoghurt met komkommer, tomaat en ui.",
        en: "Yoghurt with cucumber, tomatoes and onions."
      },
      price: 4.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/raita.jpg",
        remote: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* DESSERT */
    {
      id: "dessert-gulab-jamun",
      category: "dessert",
      featured: true,
      available: true,
      spicy: 0,
      name: { nl: "Gulab Jamun", en: "Gulab Jamun" },
      description: {
        nl: "Klassieke Indiase zoete specialiteit.",
        en: "Classic Indian sweet dessert."
      },
      price: 5.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/gulab-jamun.jpg",
        remote: "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "dessert-kheer",
      category: "dessert",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Kheer / Firni", en: "Kheer / Firni" },
      description: {
        nl: "Rijstpudding met amandelen en rozijnen.",
        en: "Rice pudding with almonds and raisins."
      },
      price: 5.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/kheer.jpg",
        remote: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* AFGANI POPULAR */
    {
      id: "afgani-qorma-murgh",
      category: "afgani-popular",
      featured: true,
      available: true,
      spicy: 2,
      name: { nl: "Qorma-E-Murgh (Afgani Chicken)", en: "Qorma-E-Murgh (Afgani Chicken)" },
      description: {
        nl: "Populaire Afghaanse kip in romige tomatensaus met amandel. Met rijst.",
        en: "Popular Afghani chicken in creamy tomato-almond sauce. Served with rice."
      },
      price: 19.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/qorma-murgh.jpg",
        remote: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "afgani-qorma-gosht",
      category: "afgani-popular",
      featured: false,
      available: true,
      spicy: 2,
      name: { nl: "Qorma-E-Gosht (Afgani Lamb)", en: "Qorma-E-Gosht (Afgani Lamb)" },
      description: {
        nl: "Populaire Afghaanse lam in romige tomatensaus met amandel. Met rijst.",
        en: "Popular Afghani lamb in creamy tomato-almond sauce. Served with rice."
      },
      price: 20.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/qorma-gosht.jpg",
        remote: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "afgani-qabuli",
      category: "afgani-popular",
      featured: true,
      available: true,
      spicy: 1,
      name: { nl: "Qabuli Palauw (Afgani)", en: "Qabuli Palauw (Afgani)" },
      description: {
        nl: "Feestelijke gekarameliseerde rijst met wortel, rozijnen en lamsvlees.",
        en: "Festive caramelized rice with baked carrots, raisins and lamb."
      },
      price: 21.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/qabuli.jpg",
        remote: "https://images.unsplash.com/photo-1598515213692-d2f6c5ea4b07?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "afgani-darya-veg",
      category: "afgani-popular",
      featured: false,
      available: true,
      spicy: 1,
      name: { nl: "Darya (Vegetarian)", en: "Darya (Vegetarian)" },
      description: {
        nl: "Bruine gekarameliseerde rijst met wortel en rozijnen, geserveerd met dahl.",
        en: "Caramelized rice with carrots and raisins, served with lentil stew."
      },
      price: 18.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/darya-veg.jpg",
        remote: "https://images.unsplash.com/photo-1514516345957-556ca7ff72d9?auto=format&fit=crop&w=1200&q=80"
      }
    },

    /* DRINKS */
    {
      id: "drink-mango-lassi",
      category: "drinks",
      featured: true,
      available: true,
      spicy: 0,
      name: { nl: "Mango Lassi", en: "Mango Lassi" },
      description: {
        nl: "Yoghurt drank met mango.",
        en: "Yoghurt drink with mango."
      },
      price: 5.95,
      image: {
        local: "/Delhi-darbar-Final-/menu/mango-lassi.jpg",
        remote: "https://images.unsplash.com/photo-1553530666-ba11a90a0863?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "drink-cola",
      category: "drinks",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Cola", en: "Cola" },
      description: { nl: "Frisdrank.", en: "Soft drink." },
      price: 3.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/cola.jpg",
        remote: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "drink-fanta",
      category: "drinks",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Fanta", en: "Fanta" },
      description: { nl: "Frisdrank.", en: "Soft drink." },
      price: 3.0,
      image: {
        local: "/Delhi-darbar-Final-/menu/fanta.jpg",
        remote: "https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1200&q=80"
      }
    },
    {
      id: "drink-redbull",
      category: "drinks",
      featured: false,
      available: true,
      spicy: 0,
      name: { nl: "Red Bull", en: "Red Bull" },
      description: { nl: "Energy drink.", en: "Energy drink." },
      price: 3.5,
      image: {
        local: "/Delhi-darbar-Final-/menu/redbull.jpg",
        remote: "https://images.unsplash.com/photo-1622480916113-cd6f0d88f2d0?auto=format&fit=crop&w=1200&q=80"
      }
    }
  ],

  testimonials: {
    nl: [
      {
        name: "Aarav M.",
        rating: 5,
        text: "Fantastische smaken en super service. Butter Chicken en naan waren top."
      },
      {
        name: "Sofia K.",
        rating: 5,
        text: "Mooie sfeer, authentiek eten en vriendelijk personeel. Zeker aanrader."
      },
      {
        name: "Luca D.",
        rating: 5,
        text: "Perfect voor familie diner. Snel, warm en kwalitatief heel sterk."
      }
    ],
    en: [
      {
        name: "Aarav M.",
        rating: 5,
        text: "Fantastic flavors and excellent service. Butter Chicken and naan were perfect."
      },
      {
        name: "Sofia K.",
        rating: 5,
        text: "Great ambience, authentic food, and friendly staff. Highly recommended."
      },
      {
        name: "Luca D.",
        rating: 5,
        text: "Perfect for family dinner. Fast, warm service and great quality."
      }
    ]
  },

  checkout: {
    minDeliveryAmount: 20,
    deliveryFee: 2.5,
    paymentMethods: ["ideal", "card", "cash"],
    termsRequired: true
  },

  reservation: {
    whatsappNumber: "31613533612",
    fallbackEmail: "info@delhid*
