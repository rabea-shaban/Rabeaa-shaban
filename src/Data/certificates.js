import {
  GraduationCap,
  Code,
  Award,
  BookOpen,
  Zap,
  Globe,
  Database,
  Cloud,
} from "lucide-react";

export const certificates = [
  {
    id: 1,
    title: "Bachelor's in Management Information Systems (MIS)",
    titleAr: "بكالوريوس نظم المعلومات الإدارية (MIS)",
    issuer: "Higher Institute of Management Information Systems - Minya",
    issuerAr: "المعهد العالي لنظم المعلومات الإدارية - المنيا",
    date: "2024",
    type: "degree",
    grade: "Distinction - 91.3% (امتياز)",
    gradeAr: "مرتبة الشرف - امتياز 91.3%",
    description:
      "Graduated with distinction in Management Information Systems (Senior Year Grade: 91.3% Excellent / Imtiyaz, Total Cumulative Grade: 83.15% Very Good). Degree accredited by Supreme Council of Universities.",
    descriptionAr:
      "تخرج بتقدير عام ممتاز مع مرتبة الشرف في نظم المعلومات الإدارية (تقدير سنة رابعة: امتياز 91.3%، التراكمي: جيد جداً 83.15%). درجة معتمدة رسمياً من المجلس الأعلى للجامعات.",
    icon: GraduationCap,
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    verified: true,
    pdf: "/cv.pdf",
    image: "/mis-degree-certificate.jpg",
  },
  {
    id: 101,
    title: "AWS Certified Cloud Practitioner",
    titleAr: "شهادة ممارس سحابي معتمد من أمازون (AWS)",
    issuer: "Amazon Web Services (AWS)",
    issuerAr: "أمازون لخدمات الويب (Amazon Web Services)",
    date: "July 22, 2026",
    expirationDate: "July 22, 2029",
    validationNumber: "82c9327146d04dd380a28ecf7b2271b1",
    validationUrl: "https://aws.amazon.com/verification",
    category: "Cloud",
    categoryAr: "الحوسبة السحابية",
    grade: "Official Certification",
    gradeAr: "شهادة مهنية دولية معتمدة",
    description:
      "Official AWS Certification validating overall understanding of AWS Cloud platform, core services, security, architecture, pricing, and support models.",
    descriptionAr:
      "شهادة رسمية معتمدة من AWS تثبت الفهم الشامل لمنصة الحوسبة السحابية، الخدمات الأساسية، الأمان، البنية التحتية، التسعير، ونماذج الدعم السحابي.",
    icon: Cloud,
    verified: true,
    image: "/aws-cloud-practitioner-cert.png",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    titleAr: "شهادة مطور واجهات أمامية محترف من ميتا",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "Jan 2026",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Professional certificate from Meta covering HTML, CSS, JavaScript, React, version control, UX/UI principles, and a final capstone project.",
    descriptionAr:
      "شهادة احترافية شاملة من شركة Meta تغطي HTML وCSS وJavaScript وReact والتحكم في الإصدارات Git ومبادئ تجربة وواجهة المستخدم UX/UI ومشروع التخرج التطبيقي.",
    icon: Code,
    verified: true,
    image: "/metaFrontend.jpeg",
  },

  {
    id: 3,
    title: "Front-End Developer Capstone",
    titleAr: "مشروع تخرج مطور الواجهات الأمامية من ميتا",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Capstone project demonstrating real-world front-end development skills using React and modern best practices.",
    descriptionAr:
      "مشروع تخرج تطبيقي يثبت مهارات بناء وتطوير تطبيقات الويب الحقيقية باستخدام React وأحدث المعايير البرمجية العالمية.",
    icon: Code,
    verified: true,
    image: "/Front-End Developer Capstone.jpeg",
  },

  {
    id: 4,
    title: "Foundations of Digital Marketing & E-commerce",
    titleAr: "أساسيات التسويق الرقمي والتجارة الإلكترونية",
    issuer: "Google (Coursera)",
    issuerAr: "جوجل (Google / Coursera)",
    date: "2024",
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    description:
      "Comprehensive training in digital marketing fundamentals, SEO, analytics, and e-commerce strategies.",
    descriptionAr:
      "تدريب شامل من Google يغطي أساسيات التسويق الرقمي، وتحسين محركات البحث SEO، وتحليلات الويب، واستراتيجيات التجارة الإلكترونية.",
    icon: Award,
    verified: true,
    image: "/DigitalMarketing.png",
  },

  {
    id: 5,
    title: "Digital Marketing Certificate",
    titleAr: "شهادة مهارات التسويق الرقمي من جوجل",
    issuer: "Google",
    issuerAr: "شركة جوجل (Google)",
    date: "2021",
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    description:
      "Completed Google Digital Marketing program covering marketing fundamentals and online growth strategies.",
    descriptionAr:
      "إتمام برنامج مهارات Google للتسويق الرقمي وتغطية مبادئ الانتشار الرقمي، استراتيجيات النمو، وإدارة الحملات الإلكترونية.",
    icon: Award,
    verified: true,
    image: "/Google.jpg",
  },

  {
    id: 6,
    title: "Learn HTML & CSS",
    titleAr: "إتقان لغات HTML5 و CSS3 وتصميم الويب المتجاوب",
    issuer: "Mahara-Tech (ITI)",
    issuerAr: "مهارة تك - معهد تكنولوجيا المعلومات (ITI)",
    date: "2022",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Hands-on training covering HTML5, CSS3, layouts, and responsive design fundamentals.",
    descriptionAr:
      "تدريب عملي مكثف يغطي هيكلة وتنسيق صفحات الويب وتصميم وتخطيط الواجهات المتجاوبة مع كافة الشاشات.",
    icon: Globe,
    verified: true,
    image: "/MaharaTch.jpg",
  },

  {
    id: 7,
    title: "Web Design Training Program",
    titleAr: "برنامج تدريب تصميم وتطوير مواقع الويب",
    issuer: "National Telecommunication Institute (NTI)",
    issuerAr: "المعهد القومي للاتصالات (NTI)",
    date: "2023",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Professional web design program including UI fundamentals and real projects.",
    descriptionAr:
      "برنامج تدريبي احترافي لتصميم الويب يشمل أساسيات واجهات المستخدم وبناء مشاريع واقعية متكاملة.",
    icon: Globe,
    verified: true,
    image: "/NTI.png",
  },

  {
    id: 8,
    title: "Web Development Challenger Track",
    titleAr: "مسار تحدي تطوير الويب من يوداستي",
    issuer: "Udacity – MCIT Egypt",
    issuerAr: "منصة Udacity – وزارة الاتصالات المصرية (MCIT)",
    date: "2022",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Completed intensive web development track powered by Udacity and MCIT Egypt.",
    descriptionAr:
      "إتمام المسار التدريبي المكثف لتطوير الويب بالشراكة بين منصة Udacity العالمية ومبادرة وزارة الاتصالات وتكنولوجيا المعلومات المصرية.",
    icon: Code,
    verified: true,
    image: "/Udacity.jpg",
  },

  {
    id: 9,
    title: "Frontend Advanced React",
    titleAr: "تطوير واجهات المستخدم المتقدمة باستخدام React",
    issuer: "Upskilling IT Center",
    issuerAr: "مركز Upskilling IT",
    date: "2025",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Advanced React concepts including performance optimization and modern patterns.",
    descriptionAr:
      "المفاهيم المتقدمة في React بما في ذلك تحسين أداء التطبيقات، إدارة الحالة، وأنماط التصميم البرمجية الحديثة.",
    icon: Code,
    verified: true,
    image: "/UPSKILLING.jpg",
  },

  {
    id: 10,
    title: "Web Fundamentals Summer Training",
    titleAr: "التدريب الصيفي المكثف لأساسيات الويب",
    issuer: "Information Technology Institute (ITI)",
    issuerAr: "معهد تكنولوجيا المعلومات (ITI)",
    date: "2023",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Intensive summer training covering HTML, CSS, JavaScript, Bootstrap, and Firebase.",
    descriptionAr:
      "تدريب صيفي مكثف معتمد يغطي HTML وCSS وJavaScript وBootstrap وربط قواعد بيانات Firebase.",
    icon: Globe,
    verified: true,
    image: "/ITI SUmar.jpg",
  },

  {
    id: 11,
    title: "Introduction to Front-End Development",
    titleAr: "مقدمة إلى هندسة وتطوير الواجهات الأمامية",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Introduction to front-end development fundamentals including HTML, CSS, and basic web concepts.",
    descriptionAr:
      "مقدمة تأسيسية شاملة في مفاهيم تطوير الويب ومعايير بناء تطبيقات الويب الحديثة من Meta.",
    icon: Globe,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~H6RTRX49KV5Q.jpeg",
  },

  {
    id: 12,
    title: "React Basics",
    titleAr: "أساسيات مكتبة React من ميتا",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Learned React fundamentals including components, props, state, and JSX.",
    descriptionAr:
      "إتقان أساسيات React ومفاهيم المكونات (Components)، الخصائص (Props)، الحالات (State)، وبناء واجهات تفاعلية.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~3DENVJMKRJZT.jpeg",
  },

  {
    id: 13,
    title: "Principles of UX/UI Design",
    titleAr: "مبادئ تصميم تجربة وواجهة المستخدم (UX/UI)",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2026",
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    description:
      "Principles of user experience and user interface design focusing on usability and accessibility.",
    descriptionAr:
      "دراسة وتطبيق مبادئ تجربة المستخدم وسهولة الاستخدام وإمكانية الوصول وتصميم واجهات تفاعلية جذابة.",
    icon: BookOpen,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~BLXGMEHIRE69.jpeg",
  },

  {
    id: 14,
    title: "Programming with JavaScript",
    titleAr: "البرمجة الاحترافية بلغة JavaScript",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Core JavaScript programming concepts including functions, loops, and problem solving.",
    descriptionAr:
      "المفاهيم الأساسية والمتقدمة في لغة JavaScript بما في ذلك الدوال، الحلقات، البرمجة كائنية التوجه، وحل المشكلات البرمجية.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~J6LM5LHGCXEY.jpeg",
  },

  {
    id: 15,
    title: "HTML and CSS in Depth",
    titleAr: "التعمق في تقنيات HTML5 و CSS3 الحديثة",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Advanced HTML and CSS techniques with responsive layouts and best practices.",
    descriptionAr:
      "التقنيات المتقدمة لتخطيط وتنسيق الويب باستخدام Flexbox وGrid وAnimation والتجاوب التام مع مختلف الأجهزة.",
    icon: Globe,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~TEMME3EEAEFH.jpeg",
  },

  {
    id: 16,
    title: "Version Control",
    titleAr: "إدارة إصدارات الأكواد البرمجية (Git & GitHub)",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2024",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Version control fundamentals using Git and GitHub for collaborative development.",
    descriptionAr:
      "إتقان أدوات التحكم في الإصدارات Git وGitHub للعمل الجماعي وإدارة الفروع وتتبع التغييرات البرمجية.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~VVDM6BY8G9KA.jpeg",
  },

  {
    id: 17,
    title: "Digital Egypt Pioneers Program (DEPI)",
    titleAr: "مبادرة رواد مصر الرقمية (مسار .NET Web Developer)",
    issuer: "MCIT – Ministry of Communications & IT",
    issuerAr: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
    date: "2024",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    description:
      "Software Development (.NET Web Developer) track under Digital Egypt Pioneers Program.",
    descriptionAr:
      "مسار تدريبي تخصصي متقدم في تطوير برمجيات وتطبيقات الويب باستخدام C# وASP.NET Core وEntity Framework تحت رعاية وزارة الاتصالات.",
    icon: Code,
    verified: true,
    image: "/Depi net.jpg",
  },

  {
    id: 18,
    title: "Web Masters Front-End Development Program",
    titleAr: "برنامج ويب ماسترز لتطوير الواجهات الأمامية",
    issuer: "Web Masters",
    issuerAr: "أكاديمية Web Masters",
    date: "2023",
    category: "Web Development",
    categoryAr: "تطوير الويب",
    description:
      "Front-End Development training program with focus on React and real-world projects.",
    descriptionAr:
      "برنامج تطبيقي متكامل لبناء وتطوير واجهات الويب التفاعلية الحديثة باستخدام React والمشاريع الواقعية.",
    icon: Globe,
    verified: true,
    image: "/webMaster.jpg",
  },

  {
    id: 19,
    title: "Meta React Specialization",
    titleAr: "التخصص الاحترافي الكامل في React من ميتا",
    issuer: "Meta (Coursera)",
    issuerAr: "شركة ميتا (Meta / Coursera)",
    date: "2026",
    category: "Programming",
    categoryAr: "البرمجة والتطوير",
    level: "Advanced",
    description:
      "Professional React specialization by Meta covering both fundamental and advanced React concepts, including reusable components, state management, data flow, and advanced React patterns. The specialization consists of React Basics and Advanced React courses.",
    descriptionAr:
      "تخصص مهني معتمد من Meta يغطي كل جوانب React التأسيسية والمتقدمة: المكونات القابلة لإعادة الاستخدام، إدارة الحالة المعقدة، وتدفق البيانات والأنماط المعمارية الحديثة.",
    icon: Code,
    verified: true,
    image: "/CERTIFICATE_LANDING_PAGE~Z1MO3QV3BU85.jpeg",
  },
  {
    id: 21,
    title: "Database Fundamentals",
    titleAr: "أساسيات قواعد البيانات العلاقية ومفاهيم SQL",
    issuer: "Mahara-Tech (ITI Platform)",
    issuerAr: "مهارة تك - معهد تكنولوجيا المعلومات (ITI)",
    date: "2024",
    category: "Database",
    categoryAr: "قواعد البيانات",
    level: "Fundamentals",
    duration: "2 Hours 47 Minutes",
    description:
      "Introduction to database fundamentals including basic concepts, data organization, and relational databases.",
    descriptionAr:
      "مقدمة شاملة لأساسيات قواعد البيانات، تصميم الجداول، تنظيم البيانات، والعلاقات بين الجداول (RDBMS).",
    icon: Database,
    verified: true,
    image: "/dataBse-iti.jpg",
  },

  {
    id: 22,
    title: "Freelancing Basics",
    titleAr: "أساسيات العمل الحر والعمل عبر الإنترنت",
    issuer: "Mahara-Tech (ITI Platform)",
    issuerAr: "مهارة تك - معهد تكنولوجيا المعلومات (ITI)",
    date: "2022",
    category: "Education",
    categoryAr: "التعليم الأكاديمي",
    level: "Fundamentals",
    duration: "3 Hours 8 Minutes",
    description:
      "Fundamentals of freelancing including client communication, pricing, and working on freelance platforms.",
    descriptionAr:
      "مهارات وقواعد العمل الحر، إدارة المشاريع، التواصل الفعال مع العملاء الدوليين، والتسعير الاحترافي.",
    icon: BookOpen,
    verified: true,
    image: "/freelancing.jpg",
  },
];

export const certificateCategories = [
  { id: "all", name: "All Certificates", nameAr: "جميع الشهادات", icon: Award },
  { id: "Education", name: "Education", nameAr: "التعليم الأكاديمي", icon: GraduationCap },
  { id: "Programming", name: "Programming", nameAr: "البرمجة والتطوير", icon: Code },
  { id: "Web Development", name: "Web Development", nameAr: "تطوير الويب", icon: Globe },
  { id: "Database", name: "Database", nameAr: "قواعد البيانات", icon: Database },
  { id: "Cloud", name: "Cloud", nameAr: "الحوسبة السحابية", icon: Cloud },
];
