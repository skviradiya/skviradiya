export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  playStoreLink?: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: "birla-opus",
    title: "Birla Opus ID",
    description:
      "A contractor portal app for Aditya Birla Group with features like Adobe Analytics integration, Clever Tap integration, and advanced QR scanning capabilities.",
    image: `/assets/images/birla-opus-id.webp?height=400&width=600`,
    link: "/projects/birla-opus",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.birlaopusid.contractorportal",
    technologies: [
      "React Native",
      "TypeScript",
      "Adobe Analytics",
      "Clever Tap",
      "Anyline",
      "Google ML Kit",
      "Dynamsoft",
    ],
    features: [
      "Adobe Analytics integration for user behavior tracking",
      "Clever Tap integration for enhanced user engagement",
      "Advanced QR scanning and OCR capabilities",
      "VAPT (Vulnerability Assessment and Penetration Testing) handling",
      "Multiple environment configurations using flavors",
      "CI/CD pipeline integration",
    ],
  },
  {
    id: "nettpage",
    title: "Nettpage",
    description:
      "A mobile application that combines e-commerce and social media features, allowing users to browse, purchase, and sell products while interacting with other users.",
    image: `/assets/images/nettpage.webp?height=400&width=600`,
    link: "/projects/nettpage",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.app.nettpage",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS",
    ],
    features: [
      "User authentication and profile management",
      "Product listing and search functionality",
      "Real-time chat and notifications",
      "Social media features (likes, comments, shares)",
      "Secure payment integration",
      "Scalable backend architecture",
    ],
  },
  
  {
    id: "tipoff",
    title: "TipOff",
    description:
      "A word guessing game app featuring video conference gameplay capabilities.",
    image: `/assets/images/tipoff.png?height=400&width=600`,
    link: "/projects/tipoff",
    playStoreLink:
      "https://apps.apple.com/us/app/tipoff-word-guessing-game/id1110306961",
    technologies: [
      "React Native",
      "WebRTC",
      "Socket.io",
      "Node.js",
      "MongoDB",
      "Redis",
    ],
    features: [
      "Real-time video conferencing for multiplayer games",
      "Custom game logic for word guessing gameplay",
      "User account management and friend lists",
      "Leaderboards and achievement tracking",
      "In-app purchases for additional content",
      "Low-latency networking for smooth gameplay",
    ],
  },
  {
    id: "wesmoke",
    title: "WeSmoke",
    description:
      "A social media app combining various features such as podcasting, chatting, and media posting.",
    image: `/assets/images/wesmoke.png?height=400&width=600`,
    link: "/projects/wesmoke",
    playStoreLink: "https://apps.apple.com/us/app/wesmoke/id1577787304",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
    ],
    features: [
      "User profile creation and customization",
      "Social media post creation and sharing",
      "Podcast recording, uploading, and streaming",
      "Real-time chat functionality",
      "Content moderation and reporting system",
      "Analytics dashboard for content creators",
    ],
    
  },
  {
    id: "satsang",
     title: "Satsang App",
    description:
      "An app for managing and analyzing large data sets with comprehensive CRUD operations.",
    image: `/assets/images/satsang.webp?height=400&width=600&resize=true`,
    link: "/projects/satsang",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.baps_yuva",
    technologies: [
      "React Native",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
    ],
    features: [
      "User authentication and role-based access control",
      "Data visualization with interactive charts and graphs",
      "Advanced filtering and search capabilities",
      "Offline data synchronization",
      "Push notifications for updates and alerts",
      "Export functionality for reports and data sets",
    ],
  },
]

