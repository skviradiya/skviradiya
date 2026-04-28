import {
  birlaOpusImage,
  nettpageImage,
  satsangAppImage,
  tipOffImage,
  wesmokeImage,
} from "@/lib/imagesList";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: StaticImageData;
  link: string;
  playStoreLink?: string;
  technologies: string[];
  features: string[];
  category?: "mobile" | "web";
}

export const projects: Project[] = [
  {
    id: "tidymy",
    title: "TidyMy Vendor-Customer",
    description:
      "A comprehensive service platform similar to Urban Company, featuring a Customer App, Vendor App, and responsive landing page for connecting service providers with customers.",
    link: "/projects/tidymy",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "Firebase",
      "Stripe",
    ],
    features: [
      "Customer mobile app with service discovery and booking",
      "Vendor app with real-time job management",
      "Responsive landing page with React.js",
      "Real-time notifications and updates",
      "Secure payment integration",
      "Rating and review system",
    ],
    category: "web",
  },
  {
    id: "pbsa-news",
    title: "PBSA News & BTR News",
    description:
      "A specialized real estate news web application with administrative portal and main website, leveraging React.js and Next.js for optimized SEO and performance.",
    link: "/projects/pbsa-news",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Firebase",
      "GraphQL",
    ],
    features: [
      "SEO-optimized news listings and article pages",
      "Administrative portal for content management",
      "Real-time news updates and notifications",
      "Advanced search and filtering capabilities",
      "Multi-tenant architecture",
      "Performance optimization for fast loading",
    ],
    category: "web",
  },
  {
    id: "background-screening",
    title: "Background Screening System",
    description:
      "A secure background verification web and mobile application ensuring strict compliance with UK legal standards for enterprise use.",
    link: "/projects/background-screening",
    technologies: [
      "React.js",
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Role-Based Access Control",
    ],
    features: [
      "Secure background verification process",
      "UK legal compliance and data protection",
      "Role-based access control (RBAC)",
      "Document management and verification",
      "Audit trails and reporting",
      "Multi-language support",
    ],
    category: "web",
  },
  {
    id: "erp-system",
    title: "Enterprise Resource Planning (ERP) System",
    description:
      "A robust ERP system implementing Role-Based Access Control with dedicated modules for sales, projects, finance, and logistics.",
    link: "/projects/erp-system",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
      "Redux",
    ],
    features: [
      "Sales module with CRM capabilities",
      "Project management and tracking",
      "Financial management and reporting",
      "Logistics and inventory management",
      "Advanced reporting and analytics",
      "Multi-user role-based access control",
    ],
    category: "web",
  },
  {
    id: "birla-opus",
    title: "Birla Opus ID",
    description:
      "A contractor portal app for Aditya Birla Group with features like Adobe Analytics integration, Clever Tap integration, and advanced QR scanning capabilities.",
    image: birlaOpusImage,
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
    category: "mobile",
  },
  {
    id: "nettpage",
    title: "Nettpage",
    description:
      "A mobile application that combines e-commerce and social media features, allowing users to browse, purchase, and sell products while interacting with other users.",
    image: nettpageImage,
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
    category: "mobile",
  },

  {
    id: "tipoff",
    title: "TipOff",
    description:
      "A word guessing game app featuring video conference gameplay capabilities.",
    image: tipOffImage,
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
    category: "mobile",
  },
  {
    id: "wesmoke",
    title: "WeSmoke",
    description:
      "A social media app combining various features such as podcasting, chatting, and media posting.",
    image: wesmokeImage,
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
    category: "mobile",
  },
  {
    id: "satsang",
    title: "Satsang App",
    description:
      "An app for managing and analyzing large data sets with comprehensive CRUD operations.",
    image: satsangAppImage,
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
    category: "mobile",
  },
];
