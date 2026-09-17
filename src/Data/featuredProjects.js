import Kashf3laj from "../Img/Kashf3laj.jpg";
import CarRent from "../Img/CarRent.jpg";
import Latest_Products from "../Img/Latest_Products.jpg";

export const featuredProjects = [
  {
    title: "Journey Care Mother",
    titleAr: "منصة رعاية الأم والطفل (Journey Care)",
    description: "A comprehensive MERN-stack platform for pregnancy tracking, infant growth logs, and virtual consultations with healthcare practitioners. Features weekly milestones and chat features.",
    descriptionAr: "منصة متكاملة بنظام MERN Stack لمتابعة مراحل الحمل ونمو الرضع، والاستشارات الافتراضية مع الأطباء، ومتابعة المراحل الأسبوعية ومحادثات تفاعلية.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS"],
    category: ["React", "web-app"],
    demo: "https://journey-care.vercel.app/",
    liveUrl: "https://journey-care.vercel.app/",
    github: "https://github.com/rabea-shaban/journey-care-mother",
    featured: true,
    img: Kashf3laj,
  },
  {
    title: "Sa2yanti",
    titleAr: "تطبيق صيانتي لصيانة السيارات",
    description: "Car maintenance request and booking application. Connects car owners with mechanics, supporting location mapping, request pipelines, and pricing estimates.",
    descriptionAr: "تطبيق لطلب وحجز خدمات صيانة السيارات يربط بين أصحاب السيارات والفنيين ومراكز الصيانة، مع دعم تتبع الموقع الجغرافي وتقدير التكلفة وإدارة مراحل الطلب.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Google Maps", "JWT"],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Google Maps", "JWT"],
    category: ["React", "web-app"],
    demo: "https://sa2yanti.vercel.app/",
    liveUrl: "https://sa2yanti.vercel.app/",
    github: "https://github.com/rabea-shaban/sa2yanti",
    featured: true,
    img: CarRent,
  },
  {
    title: "AGRSUP",
    titleAr: "متجر AGRSUP للمستلزمات الزراعية",
    description: "A full-stack e-commerce platform for agricultural supplies featuring secure authentication, user roles, product management, shopping cart, and online payment integration using Stripe.",
    descriptionAr: "منصة تجارة إلكترونية متكاملة للمستلزمات الزراعية تدعم المصادقة الآمنة، وتعدد أدوار المستخدمين، وإدارة المنتجات، وسلة التسوق، والدفع الإلكتروني المباشر عبر Stripe.",
    tech: ["React", ".NET Core", "SQL Server", "Stripe", "REST APIs"],
    technologies: ["React", ".NET Core", "SQL Server", "Stripe", "REST APIs"],
    category: ["React", "e-commerce"],
    demo: "https://agrsup.vercel.app/",
    liveUrl: "https://agrsup.vercel.app/",
    github: "https://github.com/rabea-shaban/AGRSUP",
    featured: true,
    img: Latest_Products,
  }
];
