// Kerala Location Data - All 14 Districts with LSGIs and Wards
const KERALA_DATA = {
  state: "Kerala",
  districts: [
    {
      id: "tvpm",
      name: "Thiruvananthapuram",
      nameML: "തിരുവനന്തപുരം",
      headquarters: "Thiruvananthapuram",
      lat: 8.5241,
      lng: 76.9366,
      lsgis: [
        { id: "tvpm-corp", name: "Thiruvananthapuram Corporation", type: "corporation", wards: ["Ward 1 - Parassala", "Ward 2 - Kazhakuttam", "Ward 3 - Vattiyoorkavu", "Ward 4 - Nemom", "Ward 5 - Kowdiar", "Ward 6 - Pattom", "Ward 7 - Palayam", "Ward 8 - Thampanoor", "Ward 9 - Fort", "Ward 10 - Vanchiyoor", "Ward 11 - Poojappura", "Ward 12 - Mannanthala", "Ward 13 - Sreekaryam", "Ward 14 - Ulloor", "Ward 15 - Kesavadasapuram", "Ward 16 - Pappanamcode"] },
        { id: "tvpm-nmp", name: "Nedumangad Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Ward 9", "Ward 10"] },
        { id: "tvpm-attingal", name: "Attingal Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Ward 9", "Ward 10"] },
        { id: "tvpm-varkala", name: "Varkala Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "tvpm-thiruvananthapuram-gp", name: "Thiruvananthapuram Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Ward 9", "Ward 10"] },
        { id: "tvpm-aruvikkara", name: "Aruvikkara Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "tvpm-pangode", name: "Pangode Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7"] }
      ]
    },
    {
      id: "klm",
      name: "Kollam",
      nameML: "കൊല്ലം",
      headquarters: "Kollam",
      lat: 8.8932,
      lng: 76.6141,
      lsgis: [
        { id: "klm-corp", name: "Kollam Corporation", type: "corporation", wards: ["Ward 1 - Thevally", "Ward 2 - Ashramam", "Ward 3 - Vaddy", "Ward 4 - Chinnakada", "Ward 5 - Mundakkal", "Ward 6 - Kandachira", "Ward 7 - Kilikollur", "Ward 8 - Sakthikulangara", "Ward 9 - Neendakara", "Ward 10 - Kavanad", "Ward 11 - Kottiyam", "Ward 12 - Thrikkovilvattom"] },
        { id: "klm-punalur", name: "Punalur Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "klm-karunagappally", name: "Karunagappally Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "klm-kottarakkara", name: "Kottarakkara Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "klm-anchal-gp", name: "Anchal Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] }
      ]
    },
    {
      id: "pta",
      name: "Pathanamthitta",
      nameML: "പത്തനംതിട്ട",
      headquarters: "Pathanamthitta",
      lat: 9.2648,
      lng: 76.7870,
      lsgis: [
        { id: "pta-muni", name: "Pathanamthitta Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Ward 9", "Ward 10"] },
        { id: "pta-adoor", name: "Adoor Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7"] },
        { id: "pta-thiruvalla", name: "Thiruvalla Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "pta-ranni-gp", name: "Ranni Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] }
      ]
    },
    {
      id: "alp",
      name: "Alappuzha",
      nameML: "ആലപ്പുഴ",
      headquarters: "Alappuzha",
      lat: 9.4981,
      lng: 76.3388,
      lsgis: [
        { id: "alp-muni", name: "Alappuzha Municipality", type: "municipality", wards: ["Ward 1 - Thanneermukkom", "Ward 2 - YMCA", "Ward 3 - Mullackal", "Ward 4 - Komala", "Ward 5 - Cullan", "Ward 6 - Nehru Trophy", "Ward 7 - Beach", "Ward 8 - South", "Ward 9 - Aryad North", "Ward 10 - Aryad South", "Ward 11 - Thathampally", "Ward 12 - Punnamada", "Ward 13 - Cherthala", "Ward 14 - Mararikulam", "Ward 15 - Ambalapuzha"] },
        { id: "alp-cherthala", name: "Cherthala Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7"] },
        { id: "alp-kayamkulam", name: "Kayamkulam Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "alp-haripad-gp", name: "Haripad Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "ktm",
      name: "Kottayam",
      nameML: "കോട്ടയം",
      headquarters: "Kottayam",
      lat: 9.5916,
      lng: 76.5222,
      lsgis: [
        { id: "ktm-muni", name: "Kottayam Municipality", type: "municipality", wards: ["Ward 1 - Kumaranalloor", "Ward 2 - Nagampadam", "Ward 3 - Vadavathoor", "Ward 4 - Kanjikuzhy", "Ward 5 - Market", "Ward 6 - Collectorate", "Ward 7 - Nattakom", "Ward 8 - Kanjirappally", "Ward 9 - Pampady", "Ward 10 - Changanacherry"] },
        { id: "ktm-changanacherry", name: "Changanacherry Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7"] },
        { id: "ktm-pala", name: "Pala Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "ktm-ettumanoor-gp", name: "Ettumanoor Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] }
      ]
    },
    {
      id: "idk",
      name: "Idukki",
      nameML: "ഇടുക്കി",
      headquarters: "Painavu",
      lat: 9.9189,
      lng: 76.9748,
      lsgis: [
        { id: "idk-thodupuzha", name: "Thodupuzha Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "idk-nedumkandam-gp", name: "Nedumkandam Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "idk-munnar-gp", name: "Munnar Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "ekm",
      name: "Ernakulam",
      nameML: "എറണാകുളം",
      headquarters: "Kakkanad",
      lat: 9.9312,
      lng: 76.2673,
      lsgis: [
        { id: "ekm-corp", name: "Kochi Corporation", type: "corporation", wards: ["Ward 1 - Fort Kochi", "Ward 2 - Mattancherry", "Ward 3 - Palluruthy", "Ward 4 - Vaduthala", "Ward 5 - Ernakulam", "Ward 6 - Elamakkara", "Ward 7 - Edappally", "Ward 8 - Kalamassery", "Ward 9 - Thrikkakara", "Ward 10 - Thrippunithura", "Ward 11 - Maradu", "Ward 12 - Cheranalloor", "Ward 13 - Poonithura", "Ward 14 - Vypeen", "Ward 15 - Njarakkal"] },
        { id: "ekm-aluva", name: "Aluva Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "ekm-angamaly", name: "Angamaly Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "ekm-muvattupuzha", name: "Muvattupuzha Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "ekm-perumbavoor", name: "Perumbavoor Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "ekm-tripunithura", name: "Thrippunithura Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] }
      ]
    },
    {
      id: "tsr",
      name: "Thrissur",
      nameML: "തൃശ്ശൂർ",
      headquarters: "Thrissur",
      lat: 10.5276,
      lng: 76.2144,
      lsgis: [
        { id: "tsr-corp", name: "Thrissur Corporation", type: "corporation", wards: ["Ward 1 - Poothole", "Ward 2 - Ayyanthole", "Ward 3 - Olari", "Ward 4 - Punkunnam", "Ward 5 - Kuriachira", "Ward 6 - East Fort", "Ward 7 - West Fort", "Ward 8 - Chembukkavu", "Ward 9 - Vallathol Nagar", "Ward 10 - Naikkanal", "Ward 11 - Pavaratty", "Ward 12 - Mulamkunnathukavu", "Ward 13 - Thrichur Rural"] },
        { id: "tsr-chalakudy", name: "Chalakudy Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "tsr-guruvayur", name: "Guruvayur Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 7", "Ward 8"] },
        { id: "tsr-irinjalakuda", name: "Irinjalakuda Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "tsr-kunnamkulam", name: "Kunnamkulam Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "pkd",
      name: "Palakkad",
      nameML: "പാലക്കാട്",
      headquarters: "Palakkad",
      lat: 10.7867,
      lng: 76.6548,
      lsgis: [
        { id: "pkd-muni", name: "Palakkad Municipality", type: "municipality", wards: ["Ward 1 - Olavakode", "Ward 2 - Sulthanpet", "Ward 3 - Fort", "Ward 4 - Town", "Ward 5 - Kalmandapam", "Ward 6 - East", "Ward 7 - West", "Ward 8 - North", "Ward 9 - South", "Ward 10 - Eruthenpathy", "Ward 11 - Chandranagar", "Ward 12 - Chittur"] },
        { id: "pkd-shornur", name: "Shornur Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "pkd-ottapalam", name: "Ottapalam Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "pkd-mannarkkad-gp", name: "Mannarkkad Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "mlp",
      name: "Malappuram",
      nameML: "മലപ്പുറം",
      headquarters: "Malappuram",
      lat: 11.0510,
      lng: 76.0711,
      lsgis: [
        { id: "mlp-muni", name: "Malappuram Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8", "Ward 9", "Ward 10"] },
        { id: "mlp-tirur", name: "Tirur Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "mlp-manjeri", name: "Manjeri Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "mlp-perinthalmanna", name: "Perinthalmanna Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "mlp-ponnani", name: "Ponnani Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] }
      ]
    },
    {
      id: "kzd",
      name: "Kozhikode",
      nameML: "കോഴിക്കോട്",
      headquarters: "Kozhikode",
      lat: 11.2588,
      lng: 75.7804,
      lsgis: [
        { id: "kzd-corp", name: "Kozhikode Corporation", type: "corporation", wards: ["Ward 1 - Vadakara", "Ward 2 - Quilandy", "Ward 3 - Feroke", "Ward 4 - Beypore", "Ward 5 - Elathur", "Ward 6 - Westhill", "Ward 7 - Puzhakkattiri", "Ward 8 - Cheruvannur", "Ward 9 - Nanminda", "Ward 10 - Town Hall", "Ward 11 - Vellimadukunnu", "Ward 12 - Malaparamba", "Ward 13 - Mankave", "Ward 14 - Pavangad", "Ward 15 - Mukdam"] },
        { id: "kzd-vadakara", name: "Vadakara Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "kzd-koyilandy", name: "Koyilandy Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "wyd",
      name: "Wayanad",
      nameML: "വയനാട്",
      headquarters: "Kalpetta",
      lat: 11.6854,
      lng: 76.1320,
      lsgis: [
        { id: "wyd-kalpetta", name: "Kalpetta Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7"] },
        { id: "wyd-mananthavady", name: "Mananthavady Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] },
        { id: "wyd-sulthan-bathery", name: "Sulthan Bathery Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "knr",
      name: "Kannur",
      nameML: "കണ്ണൂർ",
      headquarters: "Kannur",
      lat: 11.8745,
      lng: 75.3704,
      lsgis: [
        { id: "knr-corp", name: "Kannur Corporation", type: "corporation", wards: ["Ward 1 - Town North", "Ward 2 - Town South", "Ward 3 - Thavakkara", "Ward 4 - Pappanamcode", "Ward 5 - East Hill", "Ward 6 - Calvathy", "Ward 7 - Mundayad", "Ward 8 - Cheruvathur", "Ward 9 - Pinarayi", "Ward 10 - Payyannur"] },
        { id: "knr-thalassery", name: "Thalassery Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "knr-payyannur", name: "Payyannur Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    },
    {
      id: "ksg",
      name: "Kasaragod",
      nameML: "കാസർഗോഡ്",
      headquarters: "Kasaragod",
      lat: 12.4996,
      lng: 74.9869,
      lsgis: [
        { id: "ksg-muni", name: "Kasaragod Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"] },
        { id: "ksg-kanhangad", name: "Kanhangad Municipality", type: "municipality", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6"] },
        { id: "ksg-nileshwar-gp", name: "Nileshwar Grama Panchayat", type: "grama_panchayat", wards: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"] }
      ]
    }
  ]
};

// Kerala Waste Categories
const WASTE_CATEGORIES = [
  {
    id: "biodegradable",
    name: "Biodegradable Waste",
    nameML: "ജൈവ മാലിന്യം",
    icon: "🌿",
    color: "#4CAF50",
    description: "Food waste, vegetable peels, leaves, garden waste",
    descriptionML: "ഭക്ഷണ അവശിഷ്ടങ്ങൾ, പച്ചക്കറി തൊലി, ഇലകൾ, തോട്ട മാലിന്യം",
    segregationTips: "Use green bin. Compost at home using biogas plant or composting pit.",
    segregationTipsML: "പച്ച ബക്കറ്റ് ഉപയോഗിക്കുക. വീട്ടിൽ ബയോഗ്യാസ് പ്ലാന്റ് അല്ലെങ്കിൽ കമ്പോസ്റ്റ് കുഴി ഉപയോഗിക്കുക.",
    bin: "Green Bin"
  },
  {
    id: "non_biodegradable",
    name: "Non-Biodegradable Waste",
    nameML: "അജൈവ മാലിന്യം",
    icon: "🗑️",
    color: "#FF5722",
    description: "Plastic, metal, glass and other non-decomposable materials",
    descriptionML: "പ്ലാസ്റ്റിക്, ലോഹം, ഗ്ലാസ് തുടങ്ങിയ അഴുകാത്ത വസ്തുക്കൾ",
    segregationTips: "Use blue bin. Clean before disposal. Separate by material type.",
    segregationTipsML: "നീല ബക്കറ്റ് ഉപയോഗിക്കുക. നൽകുന്നതിനു മുൻപ് വൃത്തിയാക്കുക.",
    bin: "Blue Bin"
  },
  {
    id: "plastic",
    name: "Plastic Waste",
    nameML: "പ്ലാസ്റ്റിക് മാലിന്യം",
    icon: "♻️",
    color: "#2196F3",
    description: "Plastic bottles, bags, containers, packaging",
    descriptionML: "പ്ലാസ്റ്റിക് കുപ്പികൾ, സഞ്ചി, പാത്രങ്ങൾ, പാക്കേജിംഗ്",
    segregationTips: "Rinse plastic items. Crush bottles. Avoid single-use plastic.",
    segregationTipsML: "പ്ലാസ്റ്റിക് വസ്തുക്കൾ കഴുകി വൃത്തിയാക്കുക. ഒറ്റ ഉപയോഗ പ്ലാസ്റ്റിക് ഒഴിവാക്കുക.",
    bin: "Blue Bin"
  },
  {
    id: "paper",
    name: "Paper & Cardboard",
    nameML: "കടലാസ് & കാർഡ്ബോർഡ്",
    icon: "📰",
    color: "#FF9800",
    description: "Newspapers, cardboard boxes, paper bags",
    descriptionML: "പത്രങ്ങൾ, കാർഡ്ബോർഡ് പെട്ടികൾ, കടലാസ് സഞ്ചി",
    segregationTips: "Keep dry. Bundle newspapers. Flatten cardboard boxes.",
    segregationTipsML: "ഉണക്കി സൂക്ഷിക്കുക. പത്രം കെട്ടി വയ്ക്കുക. കാർഡ്ബോർഡ് നിരപ്പാക്കുക.",
    bin: "Blue Bin"
  },
  {
    id: "glass",
    name: "Glass Waste",
    nameML: "ഗ്ലാസ് മാലിന്യം",
    icon: "🫙",
    color: "#9C27B0",
    description: "Glass bottles, jars, broken glass",
    descriptionML: "ഗ്ലാസ് കുപ്പികൾ, ഭരണികൾ, തകർന്ന ഗ്ലാസ്",
    segregationTips: "Wrap broken glass in paper. Remove lids. Rinse before disposal.",
    segregationTipsML: "തകർന്ന ഗ്ലാസ് കടലാസിൽ പൊതിയുക. മൂടി നീക്കം ചെയ്യുക.",
    bin: "Blue Bin"
  },
  {
    id: "metal",
    name: "Metal Waste",
    nameML: "ലോഹ മാലിന്യം",
    icon: "🔧",
    color: "#607D8B",
    description: "Tin cans, aluminium foil, scrap metal",
    descriptionML: "ടിൻ കാനുകൾ, അലുമിനിയം ഫോയിൽ, സ്ക്രാപ്പ് ലോഹം",
    segregationTips: "Rinse cans. Flatten when possible. Separate from other materials.",
    segregationTipsML: "കാനുകൾ കഴുകുക. സാധ്യമാകുമ്പോൾ പരത്തുക.",
    bin: "Blue Bin"
  },
  {
    id: "ewaste",
    name: "E-Waste",
    nameML: "ഇ-മാലിന്യം",
    icon: "💻",
    color: "#F44336",
    description: "Old electronics, mobile phones, batteries, cables",
    descriptionML: "പഴഞ്ചൻ ഇലക്ട്രോണിക്സ്, മൊബൈൽ ഫോൺ, ബാറ്ററി, കേബിൾ",
    segregationTips: "Never dispose in regular bin. Use e-waste collection drives or authorized centres.",
    segregationTipsML: "സാധാരണ ബക്കറ്റിൽ ഇടരുത്. ഇ-വേസ്റ്റ് ശേഖരണ കേന്ദ്രത്തിൽ ഏൽപ്പിക്കുക.",
    bin: "Red E-Waste Bin"
  },
  {
    id: "sanitary",
    name: "Sanitary Waste",
    nameML: "സാനിറ്ററി മാലിന്യം",
    icon: "🏥",
    color: "#E91E63",
    description: "Diapers, sanitary napkins, bandages, cotton",
    descriptionML: "ഡയപ്പർ, സാനിറ്ററി നാപ്കിൻ, ബാൻഡേജ്, പഞ്ഞി",
    segregationTips: "Wrap in newspaper before disposal. Use separate bag.",
    segregationTipsML: "വലിച്ചെറിയുന്നതിനു മുൻപ് പത്രത്തിൽ പൊതിയുക. പ്രത്യേക ബാഗ് ഉപയോഗിക്കുക.",
    bin: "Red Bin"
  },
  {
    id: "hazardous",
    name: "Domestic Hazardous Waste",
    nameML: "ഗാർഹിക അപകടകരമായ മാലിന്യം",
    icon: "⚠️",
    color: "#FF6F00",
    description: "Pesticides, cleaning chemicals, paints, medicines",
    descriptionML: "കീടനാശിനി, ക്ലീനിംഗ് കെമിക്കൽ, പെയ്ന്റ്, മരുന്ന്",
    segregationTips: "Never pour down drain. Keep in original container. Contact LSGI for special disposal.",
    segregationTipsML: "ഓടയിൽ ഒഴിക്കരുത്. യഥാർത്ഥ പാത്രത്തിൽ സൂക്ഷിക്കുക. LSGI-ഇൽ അറിയിക്കുക.",
    bin: "Orange Hazardous Bin"
  },
  {
    id: "garden",
    name: "Garden Waste",
    nameML: "തോട്ട മാലിന്യം",
    icon: "🌱",
    color: "#8BC34A",
    description: "Tree branches, dry leaves, grass clippings",
    descriptionML: "മരക്കൊമ്പ്, ഉണങ്ങിയ ഇലകൾ, പുല്ല് വെട്ടിയ അവശിഷ്ടം",
    segregationTips: "Compost at home or bundle for collection. Good for biogas plants.",
    segregationTipsML: "വീട്ടിൽ കമ്പോസ്റ്റ് ചെയ്യുക. ബയോഗ്യാസ് പ്ലാന്റിന് ഉത്തമം.",
    bin: "Green Bin"
  }
];

// Kerala Collection Centers (Sample real locations)
const COLLECTION_CENTERS = [
  { id: "cc1", name: "Thiruvananthapuram Waste Treatment Plant", nameML: "തിരുവനന്തപുരം മാലിന്യ സംസ്കരണ കേന്ദ്രം", lat: 8.5241, lng: 76.9366, type: "treatment_plant", district: "tvpm" },
  { id: "cc2", name: "Brahmapuram Waste Plant, Kochi", nameML: "ബ്രഹ്മപുരം മാലിന്യ പ്ലാന്റ്, കൊച്ചി", lat: 10.0145, lng: 76.3379, type: "treatment_plant", district: "ekm" },
  { id: "cc3", name: "Lalam Waste Management, Thrissur", nameML: "ലാലം മാലിന്യ പരിപാലന കേന്ദ്രം, തൃശ്ശൂർ", lat: 10.5276, lng: 76.2144, type: "recycling_center", district: "tsr" },
  { id: "cc4", name: "Kozhikode Waste Treatment Facility", nameML: "കോഴിക്കോട് മാലിന്യ സംസ്കരണ സൗകര്യം", lat: 11.2588, lng: 75.7804, type: "treatment_plant", district: "kzd" },
  { id: "cc5", name: "Kollam Recycling Center", nameML: "കൊല്ലം റീസൈക്ലിംഗ് കേന്ദ്രം", lat: 8.8932, lng: 76.6141, type: "recycling_center", district: "klm" },
  { id: "cc6", name: "Alappuzha Waste Management", nameML: "ആലപ്പുഴ മാലിന്യ പരിപാലനം", lat: 9.4981, lng: 76.3388, type: "treatment_plant", district: "alp" }
];

// App Settings
const APP_CONFIG = {
  defaultLanguage: "en",
  supportedLanguages: ["en", "ml"],
  appName: "EcoTrack Kerala",
  appNameML: "ഇക്കോ ട്രാക്ക് കേരളം",
  version: "1.0.0",
  organization: "Kerala Local Self-Government Department"
};

