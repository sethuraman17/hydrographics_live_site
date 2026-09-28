export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", children: [
    { label: "Hydrographic Films", href: "/products/films" },
    { label: "Chemicals", href: "/products/chemicals" },
    { label: "Machines & Equipment", href: "/products/machines" },
    { label: "Accessories", href: "/products/accessories" },
  ]},
  { label: "Technology", href: "/technology" },
  { label: "Applications", href: "/applications" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export const productCategories = [
  {
    id: "films",
    title: "Hydrographic Films",
    subtitle: "400+ patterns",
    description: "Premium PVA films engineered for flawless transfer. From carbon fiber to custom camouflage, our films deliver precision detail at every scale.",
    image: "/films-collection.webp",
    href: "/products/films",
    tag: "FILMS",
  },
  {
    id: "chemicals",
    title: "Activators & Coatings",
    subtitle: "Professional grade",
    description: "Precision-formulated activators, base coats, primers, and top coats — each designed to maximize adhesion, depth, and durability of the final finish.",
    image: "/chemicals.webp",
    href: "/products/chemicals",
    tag: "CHEMICALS",
  },
  {
    id: "machines",
    title: "Machines & Equipment",
    subtitle: "Industrial scale",
    description: "From compact bench units to large-scale industrial dipping tanks, our equipment is engineered for precision performance and production efficiency.",
    image: "/equipment-tank.webp",
    href: "/products/machines",
    tag: "EQUIPMENT",
  },
  {
    id: "accessories",
    title: "Accessories",
    subtitle: "Complete the system",
    description: "Spray guns, film cutters, surface prep tools, protective equipment — every accessory you need to run a professional hydrographics operation.",
    image: "/automotive-finish.webp",
    href: "/products/accessories",
    tag: "ACCESSORIES",
  },
]

export const films = [
  { id: "cf-001", name: "Carbon Fiber Series 1K", category: "Carbon Fiber", pattern: "3K weave", width: "100cm", description: "Industry-standard 3K carbon fiber weave, delivering photorealistic detail and exceptional depth.", image: "/films-collection.webp" },
  { id: "cf-002", name: "Carbon Fiber Series 2K", category: "Carbon Fiber", pattern: "Honeycomb", width: "100cm", description: "Honeycomb carbon structure for aerospace-inspired surface finishes.", image: "/films-collection.webp" },
  { id: "cam-001", name: "Tactical Camouflage", category: "Camouflage", pattern: "Multi-terrain", width: "100cm", description: "Multi-terrain pattern engineered for hunting and tactical equipment.", image: "/films-collection.webp" },
  { id: "wood-001", name: "Exotic Walnut Burl", category: "Wood Grain", pattern: "Walnut burl", width: "100cm", description: "Premium walnut burl with rich grain structure and natural tonal variation.", image: "/films-collection.webp" },
  { id: "geo-001", name: "Geometric Precision", category: "Geometric", pattern: "Hexagonal lattice", width: "100cm", description: "Sharp geometric patterns for contemporary industrial and consumer applications.", image: "/films-collection.webp" },
  { id: "mar-001", name: "Calacatta Marble", category: "Marble", pattern: "Italian marble", width: "100cm", description: "Authentic Calacatta marble pattern with gold veining and white ground.", image: "/films-collection.webp" },
]

export const chemicals = [
  { id: "act-001", name: "HydroActivator Pro", type: "Activator", volume: "1L / 5L / 20L", description: "Fast-dissolving activator formulated for rapid film dissolution and consistent transfer adhesion across temperature ranges.", image: "/chemicals.webp" },
  { id: "act-002", name: "HydroActivator Industrial", type: "Activator", volume: "20L / 200L", description: "Industrial-grade activator engineered for high-volume production environments with extended pot life.", image: "/chemicals.webp" },
  { id: "base-001", name: "ChromaBase White", type: "Base Coat", volume: "1L / 4L", description: "High-hiding white base coat providing the optimal foundation for vivid pattern transfer and color accuracy.", image: "/chemicals.webp" },
  { id: "base-002", name: "ChromaBase Black", type: "Base Coat", volume: "1L / 4L", description: "Deep black base coat for dramatic pattern depth, carbon finishes, and dark substrate applications.", image: "/chemicals.webp" },
  { id: "primer-001", name: "SurfacePrime Universal", type: "Primer", volume: "1L / 4L", description: "Multi-surface adhesion primer compatible with plastics, metals, composites, and wood substrates.", image: "/chemicals.webp" },
  { id: "clear-001", name: "HydroGuard Gloss", type: "Top Coat", volume: "1L / 4L", description: "Premium gloss clear coat with UV protection, chemical resistance, and exceptional depth of finish.", image: "/chemicals.webp" },
  { id: "clear-002", name: "HydroGuard Matte", type: "Top Coat", volume: "1L / 4L", description: "Flat matte clear coat for tactical, industrial, and contemporary design applications.", image: "/chemicals.webp" },
]

export const machines = [
  {
    id: "tank-mini", name: "HydroDip Compact 80", type: "Dipping Tank", capacity: "80L", dimensions: "100 × 60 × 60 cm", temperature: "Ambient–50°C", description: "Entry-level professional tank ideal for small components, helmets, and automotive trim pieces.", features: ["Stainless steel construction", "Adjustable overflow drain", "Leveling feet", "Temperature-stable design"], image: "/equipment-tank.webp",
  },
  {
    id: "tank-pro", name: "HydroDip Professional 300", type: "Dipping Tank", capacity: "300L", dimensions: "200 × 80 × 80 cm", temperature: "Ambient–50°C", description: "Professional mid-size tank for medium volume production. Ideal for wheel rims, bumpers, and complex assemblies.", features: ["Grade 304 stainless steel", "Integrated overflow system", "Forklift pockets", "Water filtration ready"], image: "/equipment-tank.webp",
  },
  {
    id: "tank-industrial", name: "HydroDip Industrial 1200", type: "Dipping Tank", capacity: "1,200L", dimensions: "400 × 120 × 100 cm", temperature: "Ambient–50°C", description: "Large-format industrial tank for full body panels, large equipment, and production-scale operations.", features: ["Heavy-gauge 316L stainless steel", "Dual overflow systems", "Crane lift points", "Industrial filtration system", "Water recirculation pump"], image: "/equipment-tank.webp",
  },
  {
    id: "spray-001", name: "AirPro Activator System", type: "Spray Equipment", capacity: "—", dimensions: "Portable unit", temperature: "—", description: "Professional HVLP spray system engineered for consistent, fine-mist activator application across all film types.", features: ["HVLP turbine system", "Adjustable spray pattern", "Stainless steel fluid paths", "Chemical-resistant seals"], image: "/equipment-tank.webp",
  },
]

export const applications = [
  {
    id: "automotive",
    title: "Automotive",
    subtitle: "Interior & Exterior Components",
    description: "From dashboards and trim panels to full body kits, hydrographics transforms automotive surfaces with unmatched durability and design precision.",
    items: ["Dashboard panels", "Door trim inserts", "Center consoles", "Gear shifters", "Bumpers & body panels", "Wing mirrors"],
    image: "/automotive-finish.webp",
    tag: "AUTOMOTIVE",
  },
  {
    id: "motorsport",
    title: "Motorsport & Helmets",
    subtitle: "High-performance applications",
    description: "Racing helmets, fairings, and motorsport components demand finishes that perform under extreme conditions. Our films and coatings deliver.",
    items: ["Racing helmets", "Motorcycle fairings", "Fuel tanks", "Exhaust heat shields", "Carbon fiber accents", "Race car interiors"],
    image: "/helmet-finish.webp",
    tag: "MOTORSPORT",
  },
  {
    id: "industrial",
    title: "Industrial Components",
    subtitle: "Functional surfaces at scale",
    description: "Industrial equipment, protective housings, and mechanical assemblies benefit from the corrosion resistance and aesthetic enhancement of hydrographic coatings.",
    items: ["Equipment housings", "Control panels", "Safety equipment", "Tool casings", "Protective gear", "Machine covers"],
    image: "/workshop-interior.webp",
    tag: "INDUSTRIAL",
  },
  {
    id: "consumer",
    title: "Consumer & Lifestyle",
    subtitle: "Design meets function",
    description: "Consumer electronics, sports equipment, and lifestyle products elevated through precision hydrographic finishing.",
    items: ["Phone cases & electronics", "Sports equipment", "Hunting accessories", "Firearms & stocks", "Bicycles & helmets", "Home décor"],
    image: "/wheel-rim.webp",
    tag: "LIFESTYLE",
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Surface Preparation",
    description: "The substrate is thoroughly cleaned, sanded, and degreased to ensure a perfectly smooth and contamination-free surface ready to accept primer.",
    image: "/surface-prep.webp",
    duration: "30–60 min",
    tools: ["Sanding equipment", "Degreaser", "Tack cloth"],
  },
  {
    step: "02",
    title: "Base Coat",
    description: "A specially formulated base coat is applied by HVLP spray gun. The base colour directly affects the final pattern depth and chromatic richness.",
    image: "/chemicals.webp",
    duration: "20–40 min",
    tools: ["HVLP spray gun", "Base coat", "Curing oven"],
  },
  {
    step: "03",
    title: "Film Preparation",
    description: "The hydrographic film is cut to size and carefully placed on the water surface, pattern side up. Water temperature is controlled for optimal film dissolution.",
    image: "/films-collection.webp",
    duration: "5–10 min",
    tools: ["Film cutter", "Dipping tank", "Thermometer"],
  },
  {
    step: "04",
    title: "Activation",
    description: "A precise quantity of activator is applied by spray to dissolve the PVA carrier and chemically activate the ink layer, creating a floating liquid ink surface.",
    image: "/process-water.webp",
    duration: "60–90 sec",
    tools: ["HVLP spray system", "Activator", "Timer"],
  },
  {
    step: "05",
    title: "Water Transfer",
    description: "The prepared part is dipped through the activated ink layer at a controlled angle and speed. The ink wraps and adheres to every contour of the substrate.",
    image: "/process-water.webp",
    duration: "Variable",
    tools: ["Dipping rig", "Part fixture", "Dipping tank"],
  },
  {
    step: "06",
    title: "Rinsing",
    description: "The part is removed and immediately rinsed with clean water to remove residual PVA film and excess ink, revealing the transferred pattern.",
    image: "/process-water.webp",
    duration: "5–10 min",
    tools: ["Rinse tank", "Soft brush", "Clean water supply"],
  },
  {
    step: "07",
    title: "Clear Coat",
    description: "After thorough drying, a premium clear coat is applied to seal and protect the hydrographic print, adding gloss depth and UV/chemical resistance.",
    image: "/chemicals.webp",
    duration: "30–60 min",
    tools: ["HVLP spray gun", "Clear coat", "Spray booth"],
  },
  {
    step: "08",
    title: "Final Finish",
    description: "The finished piece is cured, inspected, and optionally polished to achieve the desired final sheen — from ultra-matte to mirror gloss.",
    image: "/automotive-finish.webp",
    duration: "24–48 hrs",
    tools: ["Curing oven", "Polish & compounds", "Inspection light"],
  },
]

export const projects = [
  {
    id: "proj-001",
    title: "Carbon Series GT",
    category: "Automotive",
    client: "Private",
    year: "2024",
    description: "Full interior transformation of a high-performance GT vehicle using 1K carbon fiber hydrographic film across all trim surfaces, console, and instrument cluster surround.",
    pattern: "1K Carbon Fiber",
    materials: ["CF-001 Carbon Film", "ChromaBase Black", "HydroGuard Gloss", "SurfacePrime Universal"],
    hero: "/automotive-finish.webp",
    gallery: ["/automotive-finish.webp", "/films-collection.webp", "/process-water.webp"],
    tags: ["Carbon Fiber", "Interior", "Automotive"],
  },
  {
    id: "proj-002",
    title: "Tactical Helmet Series",
    category: "Motorsport",
    client: "Racing Team",
    year: "2024",
    description: "Custom camouflage helmet series for a professional racing team — 12 helmets with matching pattern orientation and precise edge termination.",
    pattern: "Multi-Terrain Camo",
    materials: ["CAM-001 Tactical Film", "ChromaBase White", "HydroGuard Matte", "AirPro Activator"],
    hero: "/helmet-finish.webp",
    gallery: ["/helmet-finish.webp", "/process-water.webp", "/films-collection.webp"],
    tags: ["Camouflage", "Helmets", "Motorsport"],
  },
  {
    id: "proj-003",
    title: "Industrial Control Suite",
    category: "Industrial",
    client: "Manufacturing Co.",
    year: "2023",
    description: "Large-scale industrial control panel housing and equipment enclosures finished with durable graphite-grey hydrographic wrap for chemical and UV resistance.",
    pattern: "Brushed Metal",
    materials: ["GEO-001 Geometric Film", "ChromaBase Black", "HydroGuard Industrial Clear"],
    hero: "/workshop-interior.webp",
    gallery: ["/workshop-interior.webp", "/equipment-tank.webp", "/automotive-finish.webp"],
    tags: ["Industrial", "Equipment", "Large Scale"],
  },
  {
    id: "proj-004",
    title: "Precision Wheel Program",
    category: "Automotive",
    client: "Tuning Workshop",
    year: "2023",
    description: "Set of 20 custom alloy wheels finished with geometric hydrographic pattern in bronze and black — matching an exclusive limited-production tuning build.",
    pattern: "Geometric Lattice",
    materials: ["GEO-001 Geometric Film", "ChromaBase Black", "HydroGuard Gloss"],
    hero: "/wheel-rim.webp",
    gallery: ["/wheel-rim.webp", "/films-collection.webp", "/automotive-finish.webp"],
    tags: ["Wheels", "Geometric", "Automotive"],
  },
  {
    id: "proj-005",
    title: "Walnut Burl Interior",
    category: "Automotive",
    client: "Luxury Coach Builder",
    year: "2023",
    description: "Bespoke walnut burl wood grain hydrographic finish across 40+ interior components for a luxury coach conversion project — precision matched across all pieces.",
    pattern: "Exotic Walnut Burl",
    materials: ["WOOD-001 Walnut Film", "ChromaBase Tan", "HydroGuard Gloss"],
    hero: "/gallery-2.webp",
    gallery: ["/gallery-2.webp", "/films-collection.webp", "/automotive-finish.webp"],
    tags: ["Wood Grain", "Interior", "Luxury"],
  },
  {
    id: "proj-006",
    title: "Skull Series Custom",
    category: "Lifestyle",
    client: "Custom Shop",
    year: "2024",
    description: "Limited run of custom hydrographic motorcycle tanks and fenders with dramatic skull and fire pattern — a collector's series for a boutique custom bike shop.",
    pattern: "Skull & Flames",
    materials: ["Custom Film", "ChromaBase White", "HydroGuard Gloss"],
    hero: "/gallery-1.webp",
    gallery: ["/gallery-1.webp", "/helmet-finish.webp", "/process-water.webp"],
    tags: ["Custom", "Motorcycle", "Lifestyle"],
  },
]

export const stats = [
  { value: "400+", label: "Film Patterns", description: "In active catalogue" },
  { value: "15+", label: "Years Experience", description: "Industry expertise" },
  { value: "50K+", label: "Parts Finished", description: "Across all sectors" },
  { value: "30+", label: "Countries Served", description: "Global distribution" },
]

export const companyValues = [
  {
    title: "Engineering Precision",
    description: "Every product in our system is engineered to work together. Consistent chemistry, controlled processes, repeatable results.",
    icon: "precision",
  },
  {
    title: "Industrial Scale",
    description: "From a single part to thousands of units, our equipment and chemistry scales with your operation without compromising quality.",
    icon: "scale",
  },
  {
    title: "Technical Support",
    description: "Our team of process engineers provides hands-on training, troubleshooting, and continuous technical support throughout your operation.",
    icon: "support",
  },
  {
    title: "Global Distribution",
    description: "Serving professional finishers across 30+ countries with fast, reliable logistics and local distribution partnerships.",
    icon: "global",
  },
]
