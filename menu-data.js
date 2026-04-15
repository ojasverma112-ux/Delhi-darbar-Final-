/* ==========================================================================
   DELHI DARBAAR - FINAL BACKEND EDITABLE DATA
   Edit this file to update:
   - opening notices
   - links
   - categories
   - full menu items
   ========================================================================== */

window.DELHI_DARBAAR_DATA = {
  meta: {
    brand: "Delhi Darbaar Hilversum",
    currency: "€",
    localeDefault: "nl",
    updatedAt: "2026-04-15",
    contact: {
      phone: "+31 613 53 36 12",
      email: "info@delhidarbaar.nl",
      address: "Havenstraat 75, 1211 KH Hilversum"
    },
    links: {
      googleReviews: "https://share.google/Uf3ZmKgW9fJFOXmPP",
      uberEats: "https://www.ubereats.com/nl/store/delhi-darbaar-indiaas-restaurant/ZreIMyHhQma4YGTfFjBAnQ"
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

  items: [
    /* =========================
       DARBAAR SPECIAL MENUS
    ========================== */
    {
      id: "menu-3course-surprise-1p",
      category: "darbaar-special-menus",
      imageKey: "dish1",
      spicy: 1,
      featured: true,
      name: { nl: "Three Course Surprise Dinner- 1 Person", en: "Three Course Surprise Dinner- 1 Person" },
      description: {
        nl: "A surprise menu is composed of authentic starters and as a main course, a combination of different vegetable and meat dishes based on rice. Finally a delicious dessert. Vegetarian mogelijk.",
        en: "A surprise menu with authentic starters, mixed veg and meat mains with rice, and dessert. Vegetarian possible."
      },
      price: 35.0
    },
    {
      id: "menu-veg-deluxe-2p",
      category: "darbaar-special-menus",
      imageKey: "dish2",
      spicy: 1,
      featured: true,
      name: { nl: "Veg Deluxe Menu – 2 Person (3 Courses)", en: "Veg Deluxe Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Veg Samosa & Onion Bhajee. Main: Dal Makhni, Palak Paneer, Mix Vegetable, Rice. Extras: Naan, Raita & Salad, Pappadam & Sauces. Dessert: Kheer & Gulab Jamun.",
        en: "Starter: Veg Samosa & Onion Bhajee. Main: Dal Makhni, Palak Paneer, Mix Vegetable, Rice. Extras: Naan, Raita & Salad, Pappadam & Sauces. Dessert: Kheer & Gulab Jamun."
      },
      price: 69.0
    },
    {
      id: "menu-tandoori-deluxe-2p",
      category: "darbaar-special-menus",
      imageKey: "dish3",
      spicy: 2,
      featured: true,
      name: { nl: "Tandoori Deluxe Menu – 2 Person (3 Courses)", en: "Tandoori Deluxe Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Samosa Lamb & Tandoori Chicken Tikka. Main: Butter Chicken, Tandoori Chicken, Dal Makhni, Rice. Extras + dessert inbegrepen.",
        en: "Starter: Samosa Lamb & Tandoori Chicken Tikka. Main: Butter Chicken, Tandoori Chicken, Dal Makhni, Rice. Extras + dessert included."
      },
      price: 75.0
    },
    {
      id: "menu-seafood-2p",
      category: "darbaar-special-menus",
      imageKey: "dish4",
      spicy: 2,
      name: { nl: "Darbaar Seafood Menu – 2 Person (3 Courses)", en: "Darbaar Seafood Menu – 2 Person (3 Courses)" },
      description: {
        nl: "Starter: Amritsari Fish Pakora, King Prawn Pakora. Main: Fish Curry, King Prawn Curry, Dal Tadka, Rice. Extras + dessert inbegrepen.",
        en: "Starter: Amritsari Fish Pakora, King Prawn Pakora. Main: Fish Curry, King Prawn Curry, Dal Tadka, Rice. Extras + dessert included."
      },
      price: 85.0
    },
    {
      id: "menu-royal-4p",
      category: "darbaar-special-menus",
      imageKey: "dish1",
      spicy: 2,
      featured: true,
      name: { nl: "Darbaar Royal Menu – 4 Person (3 Courses)", en: "Darbaar Royal Menu – 4 Person (3 Courses)" },
      description: {
        nl: "Starter: Samosa & Hot Wings. Main: Butter Chicken, Chicken Madras, Tandoori Mix Grill, Dal Makhni, Rice. Extras + dessert inbegrepen.",
        en: "Starter: Samosa & Hot Wings. Main: Butter Chicken, Chicken Madras, Tandoori Mix Grill, Dal Makhni, Rice. Extras + dessert included."
      },
      price: 140.0
    },

    /* =========================
       SOUP
    ========================== */
    {
      id: "soup-chicken",
      category: "soup",
      imageKey: "dish2",
      spicy: 1,
      name: { nl: "Kip Soup", en: "Chicken Soup" },
      description: { nl: "Chicken curry soup met rijke smaak.", en: "Chicken curry soup with a bound and rich taste." },
      price: 6.5
    },
    {
      id: "soup-dal",
      category: "soup",
      imageKey: "dish3",
      spicy: 1,
      name: { nl: "Dal Soup", en: "Dal Soup" },
      description: { nl: "Indiase linzensoep.", en: "Indian lentil soup." },
      price: 6.5
    },

    /* =========================
       STREET FOOD
    ========================== */
    {
      id: "street-aashak",
      category: "street-food",
      imageKey: "dish1",
      spicy: 1,
      name: { nl: "Aashak (Vegetarian)", en: "Aashak (Vegetarian)" },
      description: {
        nl: "Gestoomde pasta met prei, yoghurt, linzen in tomatensaus, koriander en munt.",
        en: "Steamed pasta with leek, yoghurt, lentils in tomato sauce, coriander and mint."
      },
      price: 9.5
    },
    {
      id: "street-mantu",
      category: "street-food",
      imageKey: "dish2",
      spicy: 2,
      name: { nl: "Mantu", en: "Mantu" },
      description: {
        nl: "Gestoomde pasta gevuld met gemarineerde kip & lam, met yoghurt, linzen en kruiden.",
        en: "Steamed pasta filled with marinated chicken & lamb, topped with yoghurt and lentils."
      },
      price: 9.95
    },

    /* =========================
       VEG STARTER
    ========================== */
    {
      id: "veg-onion-bhaji",
      category: "veg-starter",
      imageKey: "dish3",
      spicy: 1,
      name: { nl: "Onion Bhaji", en: "Onion Bhaji" },
      description: { nl: "Gefrituurde uien in kikkererwtenmeel met Indiase kruiden.", en: "Fried onions in gram flour with Indian spices." },
      price: 6.95
    },
    {
      id: "veg-samosa",
      category: "veg-starter",
      imageKey: "dish4",
      spicy: 1,
      name: { nl: "Punjabi Samosa Vegetarian", en: "Punjabi Samosa Vegetarian" },
      description: { nl: "Gevuld met mild gekruide aardappel en doperwten.", en: "Pastries filled with mild spiced potatoes and peas." },
      price: 6.5
    },
    {
      id: "veg-paneer-pakora",
      category: "veg-starter",
      imageKey: "dish1",
      spicy: 1,
      name: { nl: "Paneer Pakora", en: "Paneer Pakora" },
      description: { nl: "Verse paneer gemarineerd in gekruid beslag en gefrituurd.", en: "Cottage cheese marinated in spiced batter and fried." },
      price: 7.5
    },
    {
      id: "veg-aloo-tikki",
      category: "veg-starter",
      imageKey: "dish2",
      spicy: 1,
      name: { nl: "Aloo Tikki", en: "Aloo Tikki" },
      description: { nl: "Gebakken aardappelkoekjes met chutney.", en: "Fried potato patties served with chutney." },
      price: 7.5
    },
    {
      id: "veg-tandoori-paneer-tikka",
      category: "veg-starter",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "Tandoori Paneer Tikka", en: "Tandoori Paneer Tikka" },
      description: { nl: "Verse paneer gegrild in tandoor met kruiden.", en: "Cottage cheese grilled in tandoor with Indian herbs." },
      price: 9.95
    },

    /* =========================
       NON VEG STARTER
    ========================== */
    {
      id: "nveg-samosa-lamb",
      category: "non-veg-starter",
      imageKey: "dish4",
      spicy: 1,
      name: { nl: "Samosa Lamb", en: "Samosa Lamb" },
      description: { nl: "Pasteitjes gevuld met lamsgehakt.", en: "Pastries filled with minced lamb meat." },
      price: 7.5
    },
    {
      id: "nveg-chicken-pakora",
      category: "non-veg-starter",
      imageKey: "dish1",
      spicy: 2,
      name: { nl: "Chicken Pakora", en: "Chicken Pakora" },
      description: { nl: "Kip gefrituurd met kikkererwtenmeel en kruiden.", en: "Chicken fried with gram flour and Indian spices." },
      price: 7.5
    },
    {
      id: "nveg-chicken-pepper-tikka",
      category: "non-veg-starter",
      imageKey: "dish2",
      spicy: 3,
      name: { nl: "Chicken Pepper Tikka", en: "Chicken Pepper Tikka" },
      description: { nl: "Extra pittige kipstukjes in pepersaus.", en: "Extra hot chicken marinated in pepper sauce." },
      price: 8.95
    },
    {
      id: "nveg-hot-wings",
      category: "non-veg-starter",
      imageKey: "dish3",
      spicy: 3,
      name: { nl: "Hot Chicken Wings", en: "Hot Chicken Wings" },
      description: { nl: "Gegrilde wings in pittige tandoori saus.", en: "Grilled chicken wings in hot tandoori sauce." },
      price: 7.95
    },
    {
      id: "nveg-chicken-tikka-starter",
      category: "non-veg-starter",
      imageKey: "dish4",
      spicy: 2,
      name: { nl: "Chicken Tikka", en: "Chicken Tikka" },
      description: { nl: "Gegrilde kip gemarineerd in tandoorisaus.", en: "Grilled chicken marinated in tandoori sauce." },
      price: 8.5
    },
    {
      id: "nveg-seekh-kebab",
      category: "non-veg-starter",
      imageKey: "dish1",
      spicy: 2,
      name: { nl: "Seekh Kebab", en: "Seekh Kebab" },
      description: { nl: "Gehakt van lam geroosterd op spies in tandoor.", en: "Minced lamb roasted on skewers in clay oven." },
      price: 7.95
    },

    /* =========================
       TANDOORI MAIN
    ========================== */
    {
      id: "tandoori-chicken-main",
      category: "tandoori-main",
      imageKey: "dish2",
      spicy: 2,
      featured: true,
      name: { nl: "Tandoori Chicken", en: "Tandoori Chicken" },
      description: { nl: "Kip uit tandoor met kruiden, gember, knoflook en yoghurt. Met rijst & mix groente.", en: "Chicken roasted in tandoor with herbs, ginger, garlic and yoghurt. Served with rice & mix veg." },
      price: 18.95
    },
    {
      id: "tandoori-chicken-tikka-main",
      category: "tandoori-main",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "Chicken Tikka Tandoori", en: "Chicken Tikka Tandoori" },
      description: { nl: "Gegrilde kip in tandoori marinade. Met rijst & mix groente.", en: "Grilled boneless chicken in tandoori marinade. Served with rice & mix veg." },
      price: 19.95
    },
    {
      id: "tandoori-lamb-tikka-main",
      category: "tandoori-main",
      imageKey: "dish4",
      spicy: 2,
      name: { nl: "Lamb Tikka Tandoori", en: "Lamb Tikka Tandoori" },
      description: { nl: "Gegrilde lamsstukjes gemarineerd in Indiase kruiden. Met rijst & mix groente.", en: "Grilled lamb marinated in Indian spices. Served with rice & mix veg." },
      price: 22.5
    },
    {
      id: "tandoori-mix-grill-main",
      category: "tandoori-main",
      imageKey: "dish1",
      spicy: 3,
      featured: true,
      name: { nl: "DARBAAR spl. Tandoori Mix Grill", en: "DARBAAR spl. Tandoori Mix Grill" },
      description: { nl: "Combinatie van chicken, lamb chop, seekh kebab, lamb & chicken tikka. Met rijst & mix groente.", en: "Combination of tandoori grills: chicken, lamb chop, seekh kebab, lamb & chicken tikka. Served with rice & mix veg." },
      price: 22.95
    },

    /* =========================
       NON VEG MAIN
    ========================== */
    {
      id: "main-butter-chicken",
      category: "non-veg-main",
      imageKey: "dish2",
      spicy: 1,
      featured: true,
      name: { nl: "Butter Chicken", en: "Butter Chicken" },
      description: { nl: "Milde tomaten-curry met tandoori kip. Geserveerd met rijst.", en: "Boneless tandoori chicken in mild tomato curry. Served with rice." },
      price: 19.95
    },
    {
      id: "main-chicken-tikka-masala",
      category: "non-veg-main",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "Chicken Tikka Masala", en: "Chicken Tikka Masala" },
      description: { nl: "Gegrilde kip in kruidige curry met paprika. Met rijst.", en: "Grilled chicken in spiced curry with capsicum. Served with rice." },
      price: 18.95
    },
    {
      id: "main-lamb-tikka-masala",
      category: "non-veg-main",
      imageKey: "dish4",
      spicy: 2,
      name: { nl: "Lamb Tikka Masala", en: "Lamb Tikka Masala" },
      description: { nl: "Gegrilde lam in kruidige curry met paprika. Met rijst.", en: "Grilled lamb in spiced curry with capsicum. Served with rice." },
      price: 20.95
    },
    {
      id: "main-chicken-curry",
      category: "non-veg-main",
      imageKey: "dish1",
      spicy: 2,
      name: { nl: "Chicken Curry", en: "Chicken Curry" },
      description: { nl: "Kip met tomaat, ui en koriander in currysaus. Met rijst.", en: "Chicken cooked with tomatoes, onions and coriander. Served with rice." },
      price: 18.95
    },
    {
      id: "main-lamb-curry",
      category: "non-veg-main",
      imageKey: "dish2",
      spicy: 2,
      name: { nl: "Lamb Curry", en: "Lamb Curry" },
      description: { nl: "Lamsvlees met Indiase kruiden, tomaat en ui. Met rijst.", en: "Lamb cooked with Indian spices, tomatoes and onions. Served with rice." },
      price: 19.95
    },

    /* =========================
       VEG MAIN
    ========================== */
    {
      id: "vegmain-dal-tadka",
      category: "veg-main",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "Dal Tadka", en: "Dal Tadka" },
      description: { nl: "Gele linzen met kruiden, chili en koriander. Met rijst.", en: "Yellow lentils with spices, chilli and coriander. Served with rice." },
      price: 17.95
    },
    {
      id: "vegmain-dal-makhani",
      category: "veg-main",
      imageKey: "dish4",
      spicy: 1,
      name: { nl: "Dal Makhani", en: "Dal Makhani" },
      description: { nl: "Zwarte linzen langzaam gegaard met boter. Met rijst.", en: "Black lentils cooked with butter. Served with rice." },
      price: 17.95
    },
    {
      id: "vegmain-saag-paneer",
      category: "veg-main",
      imageKey: "dish1",
      spicy: 2,
      name: { nl: "Saag Paneer", en: "Saag Paneer" },
      description: { nl: "Verse paneer in gekruide spinazie. Met rijst.", en: "Fresh cottage cheese in spiced spinach. Served with rice." },
      price: 18.95
    },
    {
      id: "vegmain-paneer-tikka-masala",
      category: "veg-main",
      imageKey: "dish2",
      spicy: 2,
      name: { nl: "Paneer Tikka Masala", en: "Paneer Tikka Masala" },
      description: { nl: "Verse paneer in kruidige masala met paprika. Met rijst.", en: "Fresh paneer sautéed in spiced curry with capsicum. Served with rice." },
      price: 19.5
    },
    {
      id: "vegmain-chana-masala",
      category: "veg-main",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "Chana Masala", en: "Chana Masala" },
      description: { nl: "Kikkererwten met ui en tomatensaus. Met rijst.", en: "Chickpeas with onions and tomato sauce. Served with rice." },
      price: 17.95
    },

    /* =========================
       BIRYANI
    ========================== */
    {
      id: "biryani-veg",
      category: "biryani",
      imageKey: "dish4",
      spicy: 2,
      name: { nl: "Special Vegetable Biryani", en: "Special Vegetable Biryani" },
      description: { nl: "Groenten met saffraan basmati, kruiden, noten en rozijnen. Met raita & salade.", en: "Mixed vegetables with saffron basmati, spices, nuts and raisins. Served with raita & salad." },
      price: 18.5
    },
    {
      id: "biryani-chicken",
      category: "biryani",
      imageKey: "dish1",
      spicy: 2,
      featured: true,
      name: { nl: "Chicken Biryani", en: "Chicken Biryani" },
      description: { nl: "Kip met saffraan basmati, kruiden, noten en rozijnen. Met raita & salade.", en: "Chicken with saffron basmati, spices, nuts and raisins. Served with raita & salad." },
      price: 18.95
    },
    {
      id: "biryani-lamb",
      category: "biryani",
      imageKey: "dish2",
      spicy: 2,
      name: { nl: "Lamb Biryani", en: "Lamb Biryani" },
      description: { nl: "Lamsvlees met saffraan basmati en specerijen. Met raita & salade.", en: "Lamb with saffron basmati and spices. Served with raita & salad." },
      price: 20.95
    },
    {
      id: "biryani-king-prawn",
      category: "biryani",
      imageKey: "dish3",
      spicy: 2,
      name: { nl: "King Prawn Biryani", en: "King Prawn Biryani" },
      description: { nl: "Garnalen met saffraan basmati en specerijen. Met raita & salade.", en: "King prawns with saffron basmati and spices. Served with raita & salad." },
      price: 22.5
    },

    /* =========================
       TANDOORI BREADS
    ========================== */
    { id: "bread-naan", category: "tandoori-breads", imageKey: "dish4", spicy: 0, name: { nl: "Naan", en: "Naan" }, description: { nl: "Indiaas brood uit tandoor.", en: "Indian bread from tandoor." }, price: 3.5 },
    { id: "bread-butter-naan", category: "tandoori-breads", imageKey: "dish1", spicy: 0, name: { nl: "Butter Naan", en: "Butter Naan" }, description: { nl: "Naan met boter.", en: "Naan with butter." }, price: 4.5 },
    { id: "bread-garlic-naan", category: "tandoori-breads", imageKey: "dish2", spicy: 0, name: { nl: "Garlic Naan", en: "Garlic Naan" }, description: { nl: "Naan met knoflook.", en: "Naan with garlic." }, price: 4.95 },
    { id: "bread-cheese-naan", category: "tandoori-breads", imageKey: "dish3", spicy: 0, name: { nl: "Cheese Naan", en: "Cheese Naan" }, description: { nl: "Naan met kaas.", en: "Naan with cheese." }, price: 5.5 },
    { id: "bread-cheese-garlic-naan", category: "tandoori-breads", imageKey: "dish4", spicy: 0, name: { nl: "Cheese Garlic Naan", en: "Cheese Garlic Naan" }, description: { nl: "Naan met kruiden, knoflook en kaas.", en: "Naan with herbs, garlic and cheese." }, price: 5.95 },
    { id: "bread-peshwari-naan", category: "tandoori-breads", imageKey: "dish1", spicy: 0, name: { nl: "Peshwari Naan", en: "Peshwari Naan" }, description: { nl: "Gevuld met amandel, rozijn en cashew.", en: "Stuffed with almonds, raisins and cashews." }, price: 5.95 },

    /* =========================
       EXTRAS
    ========================== */
    { id: "extra-papaddam", category: "extras", imageKey: "dish2", spicy: 0, name: { nl: "Papaddam", en: "Papaddam" }, description: { nl: "Krokante linzenchips.", en: "Crispy lentil chips." }, price: 1.5 },
    { id: "extra-saffron-rice", category: "extras", imageKey: "dish3", spicy: 0, name: { nl: "Saffron Rice", en: "Saffron Rice" }, description: { nl: "Basmati saffraanrijst.", en: "Indian basmati saffron rice." }, price: 4.95 },
    { id: "extra-raita", category: "extras", imageKey: "dish4", spicy: 0, name: { nl: "Raita", en: "Raita" }, description: { nl: "Yoghurt met komkommer en kruiden.", en: "Yoghurt with cucumber and spices." }, price: 4.95 },
    { id: "extra-mango-chutney", category: "extras", imageKey: "dish1", spicy: 0, name: { nl: "Mango Chutney", en: "Mango Chutney" }, description: { nl: "Zoet-zure mango chutney.", en: "Sweet-sour mango chutney." }, price: 4.5 },

    /* =========================
       DESSERT
    ========================== */
    { id: "dessert-gulab-jamun", category: "dessert", imageKey: "dish2", spicy: 0, name: { nl: "Gulab Jamun", en: "Gulab Jamun" }, description: { nl: "Klassiek Indiaas dessert.", en: "Classic Indian dessert." }, price: 5.95 },
    { id: "dessert-kheer", category: "dessert", imageKey: "dish3", spicy: 0, name: { nl: "Kheer / Firni", en: "Kheer / Firni" }, description: { nl: "Rijstpudding met amandel en rozijn.", en: "Rice pudding with almonds and raisins." }, price: 5.95 },
    { id: "dessert-baklawa", category: "dessert", imageKey: "dish4", spicy: 0, name: { nl: "Baklawa", en: "Baklawa" }, description: { nl: "Populaire Turkse zoetigheid.", en: "Popular Turkish sweet." }, price: 6.5 },

    /* =========================
       AFGANI / DARYA POPULAR
    ========================== */
    {
      id: "afgani-qorma-murgh",
      category: "afgani-popular",
      imageKey: "dish1",
      spicy: 2,
      featured: true,
      name: { nl: "Qorma-E-Murgh (Afgani Chicken)", en: "Qorma-E-Murgh (Afgani Chicken)" },
      description: { nl: "Populaire Afghaanse kip in romige tomatensaus met amandel. Met rijst.", en: "Popular Afghani chicken in creamy tomato-almond sauce. Served with rice." },
      price: 19.95
    },
    {
      id: "afgani-qorma-gosht",
      category: "afgani-popular",
      imageKey: "dish2",
      spicy: 2,
      name: { nl: "Qorma-E-Gosht (Afgani Lamb)", en: "Qorma-E-Gosht (Afgani Lamb)" },
      description: { nl: "Populaire Afghaanse lam in romige tomatensaus met amandel. Met rijst.", en: "Popular Afghani lamb in creamy tomato-almond sauce. Served with rice." },
      price: 20.95
    },
    {
      id: "afgani-qabuli",
      category: "afgani-popular",
      imageKey: "dish3",
      spicy: 1,
      featured: true,
      name: { nl: "Qabuli Palauw (Afgani)", en: "Qabuli Palauw (Afgani)" },
      description: { nl: "Feestelijk gerecht: gekarameliseerde rijst met wortel, rozijnen en lamsvlees.", en: "Festive Afghan rice with baked carrots, raisins and lamb." },
      price: 21.5
    },
    {
      id: "afgani-darya-veg",
      category: "afgani-popular",
      imageKey: "dish4",
      spicy: 1,
      name: { nl: "Darya (Vegetarian)", en: "Darya (Vegetarian)" },
      description: { nl: "Gekarameliseerde rijst met wortel en rozijnen. Geserveerd met dahl.", en: "Caramelized rice with carrots and raisins. Served with lentil stew." },
      price: 18.5
    },

    /* =========================
       DRINKS
    ========================== */
    { id: "drink-mango-lassi", category: "drinks", imageKey: "dish1", spicy: 0, name: { nl: "Mango Lassi", en: "Mango Lassi" }, description: { nl: "Yoghurt drank met mango.", en: "Yoghurt drink with mango." }, price: 5.95 },
    { id: "drink-cola", category: "drinks", imageKey: "dish2", spicy: 0, name: { nl: "Cola", en: "Cola" }, description: { nl: "Frisdrank.", en: "Soft drink." }, price: 3.0 },
    { id: "drink-cola-zero", category: "drinks", imageKey: "dish3", spicy: 0, name: { nl: "Cola Zero", en: "Cola Zero" }, description: { nl: "Frisdrank.", en: "Soft drink." }, price: 3.0 },
    { id: "drink-fanta", category: "drinks", imageKey: "dish4", spicy: 0, name: { nl: "Fanta", en: "Fanta" }, description: { nl: "Frisdrank.", en: "Soft drink." }, price: 3.0 },
    { id: "drink-redbull", category: "drinks", imageKey: "dish1", spicy: 0, name: { nl: "Red Bull", en: "Red Bull" }, description: { nl: "Energy drink.", en: "Energy drink." }, price: 3.5 },
    { id: "drink-spa-blue", category: "drinks", imageKey: "dish2", spicy: 0, name: { nl: "SPA Blue Water 1 liter", en: "SPA Blue Water 1 liter" }, description: { nl: "Mineraalwater.", en: "Mineral water." }, price: 4.5 },
    { id: "drink-spa-red", category: "drinks", imageKey: "dish3", spicy: 0, name: { nl: "SPA Red Water 1 liter", en: "SPA Red Water 1 liter" }, description: { nl: "Bruiswater.", en: "Sparkling water." }, price: 4.5 }
  ]
};
