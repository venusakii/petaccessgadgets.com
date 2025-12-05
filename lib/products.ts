export interface Product {
  id: number
  slug: string
  name: string
  category: string
  price: number
  originalPrice?: number
  images: string[]
  features: string[]
  description: string
  longDescription: string
  accessibilityFeatures: string[]
  ecoFeatures: string[]
  specs: { label: string; value: string }[]
  amazonUrl?: string
  rating: number
  reviewCount: number
  voiceCompatible: boolean
  inStock: boolean
}

export const products: Product[] = [
  {
    id: 1,
    slug: "voice-activated-smart-feeder",
    name: "Voice-Activated Smart Feeder",
    category: "feeding",
    price: 149.99,
    originalPrice: 179.99,
    images: [
      "/smart-pet-feeder-white-modern-voice-activated.jpg",
      "/smart-pet-feeder-app-control-screen.jpg",
      "/smart-pet-feeder-portion-control-mechanism.jpg",
      "/smart-pet-feeder-cat-eating-from-it.jpg",
    ],
    features: ["Voice Control", "App Connected", "Portion Control"],
    description: "Feed your pet with simple voice commands. Perfect for hands-free operation.",
    longDescription:
      "The Voice-Activated Smart Feeder revolutionizes pet care for those with mobility challenges. Simply say 'feed [pet name]' and the device dispenses the perfect portion. Compatible with Alexa, Google Home, and Siri, it integrates seamlessly into your smart home ecosystem. The built-in camera lets you watch your pet eat from anywhere, and the app tracks feeding schedules and nutrition data.",
    accessibilityFeatures: [
      "Voice activation with multiple assistant support",
      "Large, high-contrast LED display",
      "Tactile buttons with audio feedback",
      "App with screen reader compatibility",
      "No bending or reaching required",
    ],
    ecoFeatures: ["Made from 85% recycled plastics", "Energy-efficient motor", "Rechargeable battery option"],
    specs: [
      { label: "Capacity", value: "6L (approx. 25 cups)" },
      { label: "Portions", value: "1-12 portions per meal" },
      { label: "Power", value: "USB-C or 4x D batteries" },
      { label: "Connectivity", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "iOS 14+, Android 9+" },
      { label: "Dimensions", value: '12" x 8" x 14"' },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.8,
    reviewCount: 324,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 2,
    slug: "automatic-pet-door-sensor",
    name: "Automatic Pet Door with Sensor",
    category: "mobility",
    price: 199.99,
    images: [
      "/automatic-pet-door-sensor-white-modern.jpg",
      "/pet-door-collar-sensor-tag.jpg",
      "/pet-door-installation-guide.jpg",
      "/dog-going-through-smart-pet-door.jpg",
    ],
    features: ["Motion Sensor", "Size Adjustable", "Secure Lock"],
    description: "Smart door that recognizes your pet and opens automatically.",
    longDescription:
      "Give your pet freedom while maintaining home security. The Automatic Pet Door uses RFID technology in a lightweight collar tag to recognize your pet and unlock instantly. The door stays locked for strays and wildlife, keeping your home safe. Adjustable for pets from 5-80 lbs, with a weatherproof seal that keeps your home insulated.",
    accessibilityFeatures: [
      "Fully automatic operation",
      "Voice control via smart home",
      "Remote lock/unlock via app",
      "Audio notifications when pet enters/exits",
      "No manual operation needed",
    ],
    ecoFeatures: [
      "Solar-powered option available",
      "Excellent insulation reduces energy costs",
      "Made with sustainable materials",
    ],
    specs: [
      { label: "Opening Size", value: '7" x 11" (adjustable)' },
      { label: "Pet Size", value: "5-80 lbs" },
      { label: "Power", value: "4x AA or solar panel" },
      { label: "Range", value: "3 feet detection" },
      { label: "Installation", value: "Door, wall, or glass" },
      { label: "Weather Rating", value: "IP65" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.6,
    reviewCount: 189,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 3,
    slug: "health-monitoring-collar",
    name: "Health Monitoring Smart Collar",
    category: "monitoring",
    price: 89.99,
    originalPrice: 109.99,
    images: [
      "/smart-pet-collar-health-monitor-sleek.jpg",
      "/pet-health-app-dashboard.jpg",
      "/dog-wearing-smart-collar-outdoors.jpg",
      "/pet-collar-charging-station.jpg",
    ],
    features: ["Heart Rate", "Activity Tracking", "GPS Location"],
    description: "Track your pet's health metrics from anywhere with real-time alerts.",
    longDescription:
      "Peace of mind in a collar. The Health Monitoring Smart Collar tracks your pet's vital signs 24/7, including heart rate, activity levels, sleep quality, and location. Get alerts if something seems off, and share health reports directly with your vet. The comfortable, waterproof design means your pet can wear it everywhere.",
    accessibilityFeatures: [
      "Voice-readable health reports",
      "Large-text app interface option",
      "Audio alerts for concerning readings",
      "One-handed collar adjustment",
      "Automatic vet report sharing",
    ],
    ecoFeatures: ["Recyclable packaging", "Long-lasting rechargeable battery", "Vegan-friendly materials"],
    specs: [
      { label: "Battery Life", value: "14 days" },
      { label: "Water Resistance", value: "IP68" },
      { label: "Weight", value: "1.2 oz" },
      { label: "Neck Size", value: "9-26 inches" },
      { label: "GPS Accuracy", value: "10 feet" },
      { label: "Charging", value: "Magnetic USB" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.7,
    reviewCount: 456,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 4,
    slug: "smart-water-fountain",
    name: "Smart Water Fountain",
    category: "feeding",
    price: 79.99,
    images: [
      "/smart-pet-water-fountain-modern-stainless.jpg",
      "/cat-drinking-from-water-fountain.jpg",
      "/water-fountain-filter-replacement.jpg",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["Filter System", "Voice Alerts", "Auto-Refill"],
    description: "Fresh, filtered water with smart monitoring and voice alerts.",
    longDescription:
      "Hydration made easy. The Smart Water Fountain provides a continuous flow of triple-filtered water that encourages pets to drink more. The app monitors water levels and filter status, sending voice alerts when it's time to refill or replace filters. The quiet pump won't disturb your home, and the stainless steel design is hygienic and durable.",
    accessibilityFeatures: [
      "Voice alerts for low water",
      "Easy top-fill design",
      "Filter change reminders",
      "High-contrast water level indicator",
      "No lifting required for refill",
    ],
    ecoFeatures: ["Energy-efficient pump", "Recyclable filters", "BPA-free materials"],
    specs: [
      { label: "Capacity", value: "100 oz (3L)" },
      { label: "Filter Life", value: "4-6 weeks" },
      { label: "Noise Level", value: "<35 dB" },
      { label: "Power", value: "USB-C adapter" },
      { label: "Material", value: "304 Stainless Steel" },
      { label: "Dimensions", value: '8" x 8" x 6"' },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.5,
    reviewCount: 278,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 5,
    slug: "automated-litter-box",
    name: "Self-Cleaning Litter Box",
    category: "automation",
    price: 299.99,
    originalPrice: 349.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["Auto Clean", "Odor Control", "Health Tracking"],
    description: "Never scoop again. Automatic cleaning with health insights.",
    longDescription:
      "The ultimate hands-free litter solution. The Self-Cleaning Litter Box automatically separates waste after each use, sealing it in an odor-trapping drawer. The app tracks your cat's bathroom habits and weight, alerting you to potential health issues. The spacious design accommodates cats up to 20 lbs, and the quiet motor won't startle sensitive pets.",
    accessibilityFeatures: [
      "Zero manual scooping required",
      "Easy drawer removal for disposal",
      "Voice notifications via smart speaker",
      "Large opening for easy cleaning",
      "App with accessibility features",
    ],
    ecoFeatures: ["Uses 50% less litter", "Biodegradable waste bags available", "Energy Star certified"],
    specs: [
      { label: "Cat Weight", value: "Up to 20 lbs" },
      { label: "Drawer Capacity", value: "7 days (1 cat)" },
      { label: "Cleaning Cycle", value: "3-7 minutes" },
      { label: "Power", value: "AC adapter" },
      { label: "Dimensions", value: '24" x 18" x 20"' },
      { label: "Noise Level", value: "<45 dB" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.4,
    reviewCount: 567,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 6,
    slug: "pet-camera-treat-dispenser",
    name: "Pet Camera & Treat Dispenser",
    category: "monitoring",
    price: 129.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["2-Way Audio", "Treat Toss", "Night Vision"],
    description: "See, talk to, and reward your pet from anywhere.",
    longDescription:
      "Stay connected to your pet no matter where you are. The Pet Camera & Treat Dispenser features HD video with night vision, two-way audio so you can comfort your pet, and a treat launcher for rewarding good behavior. Motion and bark alerts keep you informed, and the wide-angle lens captures the whole room.",
    accessibilityFeatures: [
      "Voice-activated treat dispensing",
      "Large buttons on device",
      "Audio descriptions in app",
      "One-tap treat launch",
      "Compatible with screen readers",
    ],
    ecoFeatures: ["Low power consumption", "Recycled plastic housing", "Minimal packaging"],
    specs: [
      { label: "Video", value: "1080p HD" },
      { label: "Field of View", value: "160°" },
      { label: "Night Vision", value: "Up to 20 feet" },
      { label: "Treat Capacity", value: "1.5 lbs" },
      { label: "Toss Distance", value: "Up to 6 feet" },
      { label: "Connectivity", value: "WiFi 2.4/5GHz" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.6,
    reviewCount: 892,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 7,
    slug: "smart-pet-bed-temperature",
    name: "Temperature-Controlled Smart Bed",
    category: "automation",
    price: 179.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["Heating & Cooling", "Orthopedic", "Sleep Tracking"],
    description: "Perfect temperature year-round with health monitoring.",
    longDescription:
      "Comfort meets technology. The Temperature-Controlled Smart Bed keeps your pet at their ideal temperature whether it's summer or winter. The orthopedic memory foam supports joints, making it perfect for senior pets or those with arthritis. Sleep tracking helps you understand your pet's rest patterns and overall health.",
    accessibilityFeatures: [
      "Voice-controlled temperature",
      "Pre-set comfort profiles",
      "No manual adjustment needed",
      "Easy-clean removable cover",
      "Low-profile entry for seniors",
    ],
    ecoFeatures: ["Energy-efficient heating element", "Organic cotton cover option", "CertiPUR-US certified foam"],
    specs: [
      { label: "Sizes", value: "S, M, L, XL" },
      { label: "Temperature Range", value: "60-100°F" },
      { label: "Foam Thickness", value: "4 inches" },
      { label: "Cover", value: "Machine washable" },
      { label: "Power", value: "45W max" },
      { label: "Safety", value: "Auto shut-off" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.8,
    reviewCount: 234,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 8,
    slug: "automatic-ball-launcher",
    name: "Automatic Ball Launcher",
    category: "automation",
    price: 119.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["Adjustable Distance", "Motion Sensor", "Indoor/Outdoor"],
    description: "Endless fetch without the throwing. Keep your dog active.",
    longDescription:
      "Your dog's new best friend. The Automatic Ball Launcher keeps your pup entertained and exercised without requiring you to throw. Adjustable launch distances (10-30 feet) work for any space, and the motion sensor waits for your dog to drop the ball before launching again. Perfect for pet owners with limited mobility.",
    accessibilityFeatures: [
      "Voice activation compatible",
      "Remote control included",
      "No throwing or bending required",
      "Large, easy-press buttons",
      "Audio cues for launch countdown",
    ],
    ecoFeatures: ["Rechargeable battery", "Includes eco-friendly balls", "Durable construction"],
    specs: [
      { label: "Launch Distance", value: "10-30 feet" },
      { label: "Ball Size", value: "Standard tennis" },
      { label: "Battery", value: "8 hours playtime" },
      { label: "Safety", value: "Motion sensor pause" },
      { label: "Use", value: "Indoor/Outdoor" },
      { label: "Angles", value: "3 adjustable" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.5,
    reviewCount: 445,
    voiceCompatible: true,
    inStock: true,
  },
  {
    id: 9,
    slug: "gps-pet-tracker",
    name: "GPS Pet Tracker",
    category: "monitoring",
    price: 49.99,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    features: ["Real-Time GPS", "Geofencing", "Lightweight"],
    description: "Never lose your pet. Real-time location tracking.",
    longDescription:
      "Peace of mind in your pocket. The GPS Pet Tracker attaches to any collar and provides real-time location tracking. Set safe zones with geofencing and get instant alerts if your pet leaves the area. The lightweight design (only 0.8 oz) won't bother even small pets, and the long battery life means fewer charges.",
    accessibilityFeatures: [
      "Voice-readable location updates",
      "Large map interface option",
      "Audio alerts for boundary breaks",
      "Simple one-button operation",
      "Accessible app design",
    ],
    ecoFeatures: ["Long-lasting battery reduces waste", "Recyclable packaging", "Compact design uses less materials"],
    specs: [
      { label: "Weight", value: "0.8 oz" },
      { label: "Battery", value: "7 days" },
      { label: "GPS Accuracy", value: "8 feet" },
      { label: "Water Resistance", value: "IPX7" },
      { label: "Subscription", value: "Required for GPS" },
      { label: "Coverage", value: "US & Canada" },
    ],
    amazonUrl: "https://amazon.com",
    rating: 4.3,
    reviewCount: 1023,
    voiceCompatible: false,
    inStock: true,
  },
]

export const categories = [
  { id: "all", label: "All Products", icon: "🏠" },
  { id: "feeding", label: "Feeding & Nutrition", icon: "🐶" },
  { id: "mobility", label: "Mobility & Access", icon: "🐾" },
  { id: "monitoring", label: "Monitoring & Health", icon: "🧠" },
  { id: "automation", label: "Automation Systems", icon: "🏡" },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((p) => p.category === category)
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, limit)
}
