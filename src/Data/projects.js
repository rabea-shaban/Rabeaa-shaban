import Shahn365 from "../Img/365.jpg";
import AlAmar from "../Img/AlAmar.jpg";
import AlaYman from "../Img/AlaYman.jpg";
import AlertSestem from "../Img/AlertSestem.png";
import ApiCountryImg from "../Img/ApiCountryImg.jpg";
import CarRent from "../Img/CarRent.jpg";
import Latest_Products from "../Img/Latest_Products.jpg";
import Programming from "../Img/Programming.jpg";
import SolidaritySolarImg from "../Img/SolidaritySolarImg.jpg";
import SpiderMan from "../Img/Spider-Man.jpg";
import TaksirWatarmim from "../Img/TaksirWatarmim.jpg";
import TaskOenUpskilling from "../Img/TaskOenUpskilling.jpg";
import UMS from "../Img/UMS.jpg";

export const projects = [
  // =========================================================================
  // 1. PRIMARY FEATURED FULL-STACK PLATFORMS (الأعمال المميزة الأولى)
  // =========================================================================
  {
    title: "EduSphere",
    titleAr: "منصة EduSphere التعليمية الذكية",
    projectType: "Full Stack LMS / Education Management Platform",
    projectTypeAr: "منصة تعليمية ذكية متكاملة (LMS)",
    description: "A comprehensive full-stack LMS & educational management platform connecting students, instructors, and admins with courses, live sessions, real-time messaging, assessments, certificates, payments, and rich analytics.",
    descriptionAr: "منصة تعليمية ذكية متكاملة (Full Stack LMS) لإدارة العملية التعليمية والربط بين الطلاب والمعلمين والإدارة، مع دعم الدروس، والاختبارات، والشهادات، والجلسات المباشرة، والتواصل الفوري، وبوابات الدفع والتحليلات المتقدمة.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "Stripe", "JWT", "Swagger"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Stripe"],
    category: ["Full Stack", "Next.js", "web-app"],
    demo: "https://edusphere-theta-woad.vercel.app/",
    github: "https://github.com/rabea-shaban/EduSphere",
    featured: true,
    img: "/new project/eduspher.png",
    features: [
      "Student Dashboard, Teacher Dashboard, and Admin Dashboard with Role-Based Access Control (RBAC).",
      "Comprehensive Course, Module, and Lesson management with TipTap rich text and media upload.",
      "Real-time communication & live interactive learning sessions via Socket.IO.",
      "Quizzes, automated assignments grading, and verifiable completion certificates.",
      "Secure Stripe payments integration and advanced statistical analytics charts."
    ],
    featuresAr: [
      "لوحات تحكم متطورة ومخصصة لكل من الطالب، المعلم، والإدارة (RBAC).",
      "إدارة متكاملة للدورات والوحدات والدروس ومحرر نصوص غني بالوسائط.",
      "تواصل فوري وجلسات بث مباشر تفاعلية مدعومة بـ Socket.IO.",
      "نظام اختبارات وتقييم واجبات وإصدار شهادات إتمام معتمدة.",
      "بوابة دفع إلكتروني متكاملة مع Stripe وتحليلات بيانية دقيقة."
    ]
  },
  {
    title: "Pharmacy POS",
    titleAr: "نظام إدارة الصيدليات ونقاط البيع (Pharmacy POS)",
    projectType: "Full Stack POS / Pharmacy Management System",
    projectTypeAr: "نظام إدارة الصيدليات ونقاط البيع",
    description: "An end-to-end full-stack Pharmacy Management and Point of Sale (POS) system handling daily operations from medicine inventory, barcode sales, branches, employee permissions, and database backups.",
    descriptionAr: "نظام متكامل لإدارة الصيدليات ونقاط البيع (POS)، تم تصميمه لإدارة العمليات اليومية من مخزون الأدوية، وإدارة الفروع، والمبيعات، وصلاحيات الموظفين، والنسخ الاحتياطي للبيانات.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma ORM", "MySQL", "JWT", "RBAC"],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Prisma ORM", "MySQL", "Tailwind CSS"],
    category: ["Full Stack", "React", "web-app"],
    demo: "https://pharmacy-pos-pharmacy-pos-frontend-ten.vercel.app/#/login",
    github: "https://github.com/rabea-shaban/-PHARMACY-POS",
    featured: true,
    img: "/new project/PHARMO.png",
    features: [
      "Point of Sale (POS) fast checkout and real-time stock sync.",
      "Comprehensive medicine inventory and stock expiry tracking.",
      "Multi-branch and staff management with Role-Based Access Control.",
      "Database migration, seed data, and automated backup routines.",
      "Bulk medicine data import and detailed operational reporting."
    ],
    featuresAr: [
      "نقطة بيع سريعة (POS) مع مزامنة فورية لحركة المخزون.",
      "إدارة شاملة لمخزون الأدوية وتتبع تواريخ الصلاحية والتنبيهات.",
      "إدارة الفروع والموظفين بنظام صلاحيات دقيق (Role-Based Access Control).",
      "إدارة قواعد البيانات مع دعم الترحيل (Migrations)، والبيانات التجريبية، والنسخ الاحتياطي.",
      "إمكانية استيراد بيانات الأدوية وتقارير تفصيلية عن العمليات والمبيعات."
    ]
  },
  {
    title: "Zein Hub",
    titleAr: "منصة زين هب (Zein Hub)",
    projectType: "Full Stack Media & Learning Platform",
    projectTypeAr: "منصة وسائط وتعليم شاملة",
    description: "A full-stack media and educational platform uniting training programs, lessons, instructor profiles, live sessions, assignments, attendance tracking, and certificates with a secure REST API backend.",
    descriptionAr: "منصة متكاملة للمحتوى التعليمي والإعلامي، تجمع بين البرامج التدريبية، والدروس، وملفات المدربين، والجلسات المباشرة، والواجبات، والحضور والشهادات مع واجهة برمجية REST API آمنة.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Swagger"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Swagger"],
    category: ["Full Stack", "Next.js", "web-app"],
    demo: "https://zein-hub.vercel.app/",
    github: "https://github.com/rabea-shaban/Zein-Hub",
    featured: true,
    img: "/new project/zienHup.png",
    features: [
      "User Authentication & Granular User Management.",
      "Instructor Profiles, Courses/Programs, Modules, and Interactive Lessons.",
      "Student Enrollment, Assignments, Attendance tracking, and Verified Certificates.",
      "Live Interactive Sessions and Contact/Application management.",
      "Security Middleware: Rate Limiting, Input Sanitization, Error Handling, and Swagger Docs."
    ],
    featuresAr: [
      "نظام مصادقة متقدم وإدارة حسابات المستخدمين.",
      "ملفات تعريف للمدربين، برامج تدريبية، وحدات تعليمية ودروس تفاعلية.",
      "تسجيل الطلاب، متابعة الحضور، تسليم الواجبات وإصدار الشهادات.",
      "جلسات بث مباشر، وإدارة طلبات التقديم والرسائل الواردة.",
      "حماية برمجية متكاملة: Rate Limiting، تنقية المدخلات، وتوثيق كامل عبر Swagger."
    ]
  },
  {
    title: "Sy2antek",
    titleAr: "منصة صيانِتك (Sy2antek)",
    projectType: "Full Stack Car Maintenance Platform",
    projectTypeAr: "منصة خدمات صيانة السيارات",
    description: "A full-stack digital automotive service and maintenance platform connecting vehicle owners with professional mechanics, featuring service catalogs, technician assignment, admin dashboard, and order lifecycle management.",
    descriptionAr: "منصة رقمية متكاملة لخدمات صيانة السيارات، تربط أصحاب السيارات بالفنيين المعتمدين ومراكز الصيانة، مع إدارة شاملة للطلبات وتعيين الفنيين ولوحة تحكم إدارية تفاعلية.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    category: ["Full Stack", "React", "web-app"],
    demo: "https://sy2antek.vercel.app/",
    github: "https://github.com/rabea-shaban/Sa2yanti",
    featured: true,
    img: "/new project/Syantik.png",
    features: [
      "User registration, authentication with HTTPOnly cookies, and RBAC.",
      "Interactive customer booking pipeline with service categories and filtering.",
      "Technician management dashboard, technician assignment, and order status updates.",
      "Comprehensive Admin dashboard: statistics, blocking/activating users, and system settings.",
      "Full pagination, search, and granular filtering across all resources."
    ],
    featuresAr: [
      "تسجيل ومصادقة مستخدمين آمنة عبر كوكيز HTTPOnly ونظام صلاحيات RBAC.",
      "مسار حجز متكامل للعملاء مع تصنيفات الخدمات وتحديد نوع العطل.",
      "لوحة إدارة الفنيين، تعيين الفني للطلب، وتحديث دورة حياة الخدمة.",
      "لوحة تحكم للمدير: إحصائيات دقيقة، تجميد/تفعيل الحسابات، وإعدادات المنصة.",
      "نظام بحث وفلترة متقدم وتقسيم صفحات (Pagination) لجميع البيانات."
    ]
  },

  // =========================================================================
  // 2. PRIMARY BUSINESS & COMMERCIAL PROJECTS (مشاريع الأعمال والشركات)
  // =========================================================================
  {
    title: "Raqi Gardens",
    titleAr: "حدائق الراقي — Raqi Gardens",
    projectType: "Business Website / Landscaping Services",
    projectTypeAr: "موقع أعمال / خدمات تنسيق حدائق",
    description: "A modern, responsive business website for a landscaping and garden design company, featuring rich visual project showcases, services catalog, and optimized Arabic UI.",
    descriptionAr: "موقع إلكتروني احترافي لشركة متخصصة في تصميم وتنسيق الحدائق والمساحات الخضراء، يعرض الخدمات والأعمال السابقة بطريقة بصرية عصرية ومتجاوبة بالكامل.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: ["Next.js", "website"],
    demo: "https://raqi-gardens.vercel.app/",
    github: "https://github.com/rabea-shaban/raqi-gardens",
    featured: false,
    img: "/new project/Raqi Gardens.png",
    features: [
      "Visual catalog for landscaping, artificial grass, and garden design services.",
      "Interactive project portfolio and photo gallery showcase.",
      "Arabic-first, mobile-friendly responsive layout optimized for conversion.",
      "Dedicated service overview landing pages and fast contact channels."
    ],
    featuresAr: [
      "عرض متكامل لخدمات تصميم وتنسيق الحدائق والمساحات الخضراء.",
      "معرض أعمال وصور مرئي عالي الجودة للمشاريع المنفذة.",
      "واجهة عربية عصرية وسلسة متوافقة تماماً مع مختلف الشاشات والأجهزة.",
      "صفحات تعريفية بالخدمات وتسهيل تواصل العملاء وطلب المعاينات."
    ]
  },
  {
    title: "Elzayat Pharmacies",
    titleAr: "صيدليات الزيات — Elzayat Pharmacies",
    projectType: "Corporate Pharmacy Website",
    projectTypeAr: "موقع مؤسسي لسلسلة صيدليات",
    description: "A clean corporate website for a pharmacy chain, highlighting brand identity, medical services, featured products, and branch locations with a modern medical UI and Framer Motion animations.",
    descriptionAr: "موقع إلكتروني احترافي لسلسلة صيدليات، مصمم لعرض هوية المؤسسة والخدمات الطبية والمنتجات وعناوين الفروع بتصميم طبي حديث وتأثيرات حركية تفاعلية.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["Next.js", "website"],
    demo: "https://elzayat-pharmacies.vercel.app/",
    github: "https://github.com/rabea-shaban/elzayat-pharmacies",
    featured: false,
    img: "/new project/Elzayat Pharmicy.png",
    features: [
      "Medical services showcase and product display sections.",
      "Branch locator and detailed institutional profile.",
      "Fluid UI animations and page transitions with Framer Motion.",
      "Responsive, mobile-first design with high accessibility standards."
    ],
    featuresAr: [
      "عرض خدمات الصيدلية والمنتجات الطبية والتجميلية.",
      "دليل فروع الصيدليات ومعلومات المؤسسة والتواصل.",
      "تحريكات بصرية تفاعلية وانتقالات سلسة باستخدام Framer Motion.",
      "تصميم متجاوب وسهل الاستخدام مهيأ لتصفح الهواتف الذكية."
    ]
  },
  {
    title: "Hadiqat Al-Rayan",
    titleAr: "حدائق الريان — Hadiqat Al-Rayan",
    projectType: "Landscaping Business Website",
    projectTypeAr: "موقع أعمال لخدمات وتنسيق الحدائق",
    description: "A modern, visually engaging business website for Hadiqat Al-Rayan landscaping services, showcasing garden designs, artificial grass, waterfalls, pergolas, and project galleries.",
    descriptionAr: "موقع إلكتروني احترافي لشركة حدائق الريان لتصميم وتنسيق الحدائق والمساحات الخضراء، واستعراض مشاريع الثيل الصناعي والشلالات والبرجولات مع تجربة مستخدم سريعة ومتجاوبة.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    category: ["Next.js", "website"],
    demo: "https://hadiqat-alrayan.com/",
    github: "https://github.com/rabea-shaban/futuregardens",
    featured: false,
    img: "/new project/hadieqAlrayan.png",
    features: [
      "Landscaping, artificial turf, and outdoor decoration showcase.",
      "Interactive visual gallery of completed garden projects.",
      "Arabic-first, mobile-friendly responsive design.",
      "Optimized performance with fast loading and direct contact channels."
    ],
    featuresAr: [
      "عرض خدمات تنسيق وتصميم الحدائق والشلالات والمظلات.",
      "معرض صور مرئي غني للمشاريع السابقة وتفاصيل التنفيذ.",
      "واجهة عربية عصرية وسلسة متوافقة تماماً مع مختلف الشاشات والأجهزة.",
      "أداء فائق السرعة وأزرار تواصل مباشر وسريع."
    ]
  },
  {
    title: "Zahret Al-Wurood",
    titleAr: "زهرة الورود — Zahret Al-Wurood",
    projectType: "Landscaping & Gardening Business Website",
    projectTypeAr: "موقع أعمال لتصميم وتنسيق الحدائق",
    description: "A modern, image-heavy website for a landscaping and garden contracting firm, featuring before/after showcases, interactive layouts, and fluid motion.",
    descriptionAr: "موقع إلكتروني احترافي لشركة متخصصة في تنسيق وتصميم الحدائق، تم تطويره لعرض الخدمات ومعرض صور قبل/بعد للمشاريع المنفذة بتصميم بصري جذاب.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: ["Next.js", "website"],
    demo: "https://zahret-al-wurood.vercel.app/",
    github: "https://github.com/rabea-shaban/zahret-al-wurood",
    featured: false,
    img: "/new project/ZaharetAlwrod.png",
    features: [
      "Extensive project gallery with before/after visual comparisons.",
      "Interactive layout with Framer Motion scroll and entry animations.",
      "Mobile-first responsive experience tailored for regional clientele.",
      "Fast, lightweight Arabic interface with clear calls to action."
    ],
    featuresAr: [
      "معرض مشاريع غني بصور قبل وبعد التنفيذ لإبراز جودة العمل.",
      "تأثيرات حركية تفاعلية وانتقالات مميزة بـ Framer Motion.",
      "تجربة استخدام متجاوبة ومريحة للهواتف الذكية موجهة للجمهور العربي.",
      "أداء فائق السرعة وأزرار تواصل وطلب عروض أسعار سريعة."
    ]
  },
  {
    title: "Nahj Alraqamia",
    titleAr: "نهج الرقمية — Nahj Alraqamia",
    projectType: "Digital Agency Website",
    projectTypeAr: "موقع وكالة رقمية وتقنية",
    description: "Official landing page and corporate portal for a tech and digital services agency, featuring multi-language internationalization (i18n), dark/light themes, and sleek agency UI.",
    descriptionAr: "الموقع الرسمي لوكالة نهج الرقمية المتخصصة في تقديم الخدمات التقنية والحلول البرمجية، يدعم تعدد اللغات (i18n) والوضع الليلي وتصميم رقمي عصري.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl", "next-themes"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    category: ["Next.js", "website"],
    demo: "https://nahjalraqamia.vercel.app/",
    github: "https://github.com/rabea-shaban/nahjalraqamia",
    featured: false,
    img: "/new project/Nahj.png",
    features: [
      "Digital services portfolio and company case studies showcase.",
      "Full internationalization & localization support with next-intl.",
      "Seamless dark and light theme switching via next-themes.",
      "Modern, high-converting digital agency landing page layout."
    ],
    featuresAr: [
      "استعراض شامل للخدمات الرقمية والحلول البرمجية للشركة.",
      "دعم كامل لتعدد اللغات والترجمة الفورية باستخدام next-intl.",
      "التبديل بين الوضع الليلي والنهاري بسلاسة عبر next-themes.",
      "تصميم عصري وجذاب مخصص للشركات التقنية والوكالات الرقمية."
    ]
  },

  // =========================================================================
  // 3. PRIMARY PERSONAL & SPECIAL PLATFORMS (المنصات والمشاريع الخاصة)
  // =========================================================================
  {
    title: "Athar",
    titleAr: "منصة أَثَر — Athar",
    projectType: "Islamic Digital Platform",
    projectTypeAr: "منصة إسلامية رقمية شاملة",
    description: "An Arabic-first Islamic digital portal consolidating Quran reading/listening, audio broadcasting, Hadith, Azkar, prayer times, Islamic library, and daily progress tracking.",
    descriptionAr: "منصة رقمية إسلامية شاملة تجمع مصادر المحتوى الإسلامي في مكان واحد: القرآن الكريم، التلاوات الصوتية، الإذاعة، الأذكار، الحديث الشريف، مواقيت الصلاة، والمكتبة الإسلامية.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    category: ["Next.js", "web-app"],
    demo: "https://athar-sigma-jet.vercel.app/",
    github: "https://github.com/rabea-shaban/athar",
    featured: false,
    img: "/new project/Ather.png",
    features: [
      "Holy Quran browser with fast search and audio recitation streaming.",
      "Quran radio, Hadith collections, Islamic explanations, and library.",
      "Daily Azkar, Tasbeeh counter, prayer timings, and reading progress tracking.",
      "Dark / Light mode support and clean, soothing Arabic typography."
    ],
    featuresAr: [
      "تصفح وبحث فوري في سور وآيات القرآن الكريم مع مشغل تلاوات صوتية.",
      "إذاعة القرآن الكريم، أحاديث نبوية، شروحات ودروس، ومكتبة إسلامية شاملة.",
      "أذكار الصباح والمساء، سبحة إلكترونية، مواقيت الصلاة، ومتابعة تقدم القراءة.",
      "دعم الوضع الليلي والنهاري مع واجهة عربية هادئة ومريحة للعين."
    ]
  },
  {
    title: "LinkStack",
    titleAr: "LinkStack — صفحة الروابط الشخصية",
    projectType: "Personal Branding / Link-in-Bio Website",
    projectTypeAr: "صفحة روابط شخصية وتفاعلية",
    description: "A sleek, interactive personal branding and link-in-bio hub consolidating all social profiles, portfolio links, and developer presence into a single fast-loading destination.",
    descriptionAr: "صفحة شخصية تفاعلية وسريعة لتجميع كافة الروابط والحسابات الاجتماعية ومعرض الأعمال في مكان واحد، مثالية لمشاركتها عبر المنصات الاجتماعية والمهنية.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "React Icons"],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    category: ["React", "website"],
    demo: "https://link-stack-eta.vercel.app/",
    github: "https://github.com/rabea-shaban/LinkStack",
    featured: false,
    img: "/new project/link-stack.png",
    features: [
      "Consolidated social media, GitHub, LinkedIn, and personal portfolio links.",
      "Interactive animations and micro-interactions powered by Framer Motion.",
      "Mobile-first, ultra-lightweight design optimized for rapid loading.",
      "Clean modern aesthetic suited for developer personal branding."
    ],
    featuresAr: [
      "تجميع لكافة حسابات التواصل، رابط GitHub، LinkedIn، والموقع الشخصي.",
      "تأثيرات حركية تفاعلية جذابة باستخدام Framer Motion و React Icons.",
      "تصميم Mobile-First فائق السرعة وخفيف الوزن.",
      "واجهة عصرية تعزز الهوية الشخصية الرقمية والمهنية."
    ]
  },

  // =========================================================================
  // 4. REMAINING ARCHIVED PROJECTS (سائر المشروعات وسابقة الأعمال)
  // =========================================================================
  {
    title: "User Management System",
    titleAr: "نظام إدارة المستخدمين (UMS)",
    description: "A complete user management system built with React and Context API. Features include adding, editing, deleting users, toggling active status, and fetching data from an external API.",
    descriptionAr: "نظام متكامل لإدارة بيانات وصلاحيات المستخدمين مبني باستخدام React و Context API، يدعم إضافة وتعديل وحذف المستخدمين وتفعيل الحالة والربط مع واجهات برمجية خارجية.",
    tech: ["React", "Context API", "React Hook Form", "DummyJSON API", "CSS"],
    category: ["React", "web-app"],
    demo: "https://ums-gamma.vercel.app/",
    github: "https://github.com/rabea-shaban/UMS",
    featured: false,
    features: [
      "Complete CRUD operations with instant UI feedback.",
      "Form validation using React Hook Form.",
      "Global state management with Context API."
    ],
    featuresAr: [
      "عمليات إدارة شاملة (إضافة، تعديل، حذف) مع استجابة فورية للواجهة.",
      "التحقق المتقدم من صحة الحقول عبر React Hook Form.",
      "إدارة الحالة العامة للتطبيق عبر Context API بكفاءة عالية."
    ],
    img: UMS,
  },
  {
    title: "Car Rental React App",
    titleAr: "تطبيق تأجير السيارات التفاعلي",
    description: "A modern car rental web application with advanced filtering, responsive design, car detail pages, client testimonials, and dynamic data integration.",
    descriptionAr: "تطبيق ويب حديث لحجز وتأجير السيارات مع فلاتر بحث متقدمة، صفحات تفاصيل شاملة لكل سيارة، آراء العملاء، وتصميم متجاوب بالكامل باستخدام React و SCSS.",
    tech: ["React", "Axios", "React Router", "SCSS", "Bootstrap", "Swiper.js"],
    category: ["React", "web-app", "e-commerce"],
    demo: "https://car-rental-eosin-ten.vercel.app/",
    github: "https://github.com/rabea-shaban/Car-Rental",
    featured: false,
    img: CarRent,
  },
  {
    title: "Programming Library",
    titleAr: "مكتبة المبرمج الشاملة",
    description: "A comprehensive programming resources library featuring books, podcasts, apps, learning paths, channels, and tools. Built with React and JSON.",
    descriptionAr: "مكتبة مصادر برمجية متكاملة تضم كتباً تقنية، وبودكاست، ومسارات تعليمية، وأدوات تطويرية لمساعدة المطورين في مسيرتهم التعليمية، مبنية بـ React و JSON.",
    tech: ["React", "React Router", "Bootstrap", "Vite", "Font Awesome"],
    category: ["React", "web-app", "website"],
    demo: "https://programminglibrary.vercel.app/",
    github: "https://github.com/rabea-shaban/programming-library",
    featured: false,
    img: Programming,
  },
  {
    title: "365 Furniture Website",
    titleAr: "موقع شركة 365 لنقل وتركيب الأثاث",
    description: "A furniture and shipping service website built for a Riyadh-based company. Fully responsive and built using React and custom CSS.",
    descriptionAr: "موقع خدمات نقل وتركيب وتغليف الأثاث لشركة بالرياض، بتصميم متجاوب بالكامل وسريع التصفح باستخدام React و CSS المخصص.",
    tech: ["React", "CSS", "JSX"],
    category: ["e-commerce", "React"],
    demo: "https://company-365.netlify.app/",
    github: "#",
    featured: false,
    img: Shahn365,
  },
  {
    title: "Demolition & Renovation - Medina",
    titleAr: "تكسير وترميم المباني - المدينة المنورة",
    description: "A professional Arabic WordPress website for a building demolition and renovation company in Medina, Saudi Arabia. It showcases services like wall cutting, plumbing systems, marble installation, and structural restoration. Developed with Elementor and optimized for local SEO.",
    descriptionAr: "موقع ووردبريس احترافي لخدمات تكسير وهدم وترميم المباني بالمدينة المنورة، يقدم خدمات قص الجدران بالليزر والسباكة والترميم الإنشائي وتركيب الرخام.",
    tech: ["WordPress", "Elementor", "Blocksy", "Arabic SEO", "Local Services"],
    category: "website",
    demo: "https://taksir-watarmim.site/",
    github: "#",
    featured: false,
    img: TaksirWatarmim,
  },
  {
    title: "Alert System (React + TS)",
    titleAr: "نظام التنبيهات والإشعارات التفاعلي",
    description: "A modern alert and notification component system built using React and TypeScript. Supports various alert types, custom styles, and animations.",
    descriptionAr: "مكتبة مكونات تنبيهات وإشعارات متقدمة مبنية بـ React و TypeScript تدعم مختلف أنواع التنبيهات مع تحريكات سلسة وأساليب تخصيص مرنة.",
    tech: ["React", "TypeScript", "SCSS", "Lucide-react", "@mixin"],
    category: ["React"],
    demo: "https://alert-react-tsx.vercel.app/",
    github: "https://github.com/Rabea-shaban/AlertReactTsx",
    featured: false,
    img: AlertSestem,
  },
  {
    title: "Spider-Man Far From Home",
    titleAr: "واجهة سبايدرمان التفاعلية",
    description: "Spider-Man Far From Home component design built with Tailwind CSS.",
    descriptionAr: "تصميم تفاعلي مبتكر ومميز لفيلم Spider-Man: Far From Home باستخدام Tailwind CSS مع تأثيرات بصرية جذابة.",
    tech: ["Html", "Css", "Tailwind css"],
    category: "website",
    demo: "https://task-2-web-master-sbider-man.vercel.app",
    github: "https://github.com/rabea-shaban/Task-2-WebMaster-SbiderMan",
    featured: false,
    img: SpiderMan,
  },
  {
    title: "al-yman landscaping",
    titleAr: "مؤسسة اليمان لتنسيق الحدائق",
    description: "A professional WordPress website built using Blocksy and Elementor. Fully responsive and optimized for search engines.",
    descriptionAr: "موقع ووردبريس احترافي لتصميم وتنسيق المساحات الخضراء والحدائق المنزلية، متوافق تماماً مع محركات البحث وجميع الأجهزة الذكية.",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO"],
    category: "website",
    demo: "https://tansiqhadayiq.com/",
    github: "#",
    featured: false,
    img: AlaYman,
  },
  {
    title: "Al-Amar Concrete Cutting",
    titleAr: "شركة العمار لقص وتخريم الخرسانة",
    description: "A professional WordPress website for a Riyadh-based company specializing in laser wall cutting and core drilling. Built using Elementor and the Blocksy theme. Fully responsive, fast-loading, and optimized for Arabic SEO.",
    descriptionAr: "موقع ووردبريس لشركة متخصصة في قص وتخريم الخرسانة وكور الليزر بالرياض، سريع التصفح ومهيأ لمحركات البحث مع عرض واضح لسابقة الأعمال.",
    tech: ["WordPress", "Elementor", "Blocksy", "SEO", "Arabic"],
    category: "website",
    demo: "https://al-amar.org/",
    github: "#",
    featured: false,
    img: AlAmar,
  },
  {
    title: "Latest Products CRUD App",
    titleAr: "تطبيق إدارة أحدث المنتجات (CRUD)",
    description: "A full-featured CRUD app to manage latest products using React 19, TypeScript, and Tailwind CSS 4. Includes toast notifications and unique ID generation.",
    descriptionAr: "تطبيق متكامل لإدارة وعرض المنتجات مبني بـ React 19 و TypeScript و Tailwind CSS 4، يدعم إشعارات التنبيهات الفورية وتوليد المعرفات الفريدة.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "UUID", "react-hot-toast"],
    category: ["React", "web-app"],
    demo: "https://latest-products.vercel.app",
    github: "https://github.com/rabea-shaban/latest-products",
    featured: false,
    img: Latest_Products,
  },
  {
    title: "🚀 Personal Portfolio - TaskOenUpskilling",
    titleAr: "معرض الأعمال الشخصي - TaskOne",
    description: "A professional personal portfolio website showcasing my web development projects and skills. Built using React, Vite, React Router, Bootstrap, and Font Awesome. Designed to be responsive and fast, demonstrating modern frontend best practices.",
    descriptionAr: "موقع معرض أعمال يعرض المشاريع والمهارات البرمجية، مبني باستخدام React و Vite و Bootstrap مع تصميم متجاوب وسريع يجسد أفضل ممارسات الواجهات الأمامية.",
    tech: ["React", "Vite", "React Router", "Bootstrap", "Font Awesome", "Yarn"],
    category: ["React", "web-app"],
    demo: "https://task-oen-upskilling.vercel.app/",
    github: "https://github.com/Rabea-shaban/TaskOenUpskilling",
    featured: false,
    img: TaskOenUpskilling,
  },
  {
    title: "🔆 Solar Company Website - Solidarity Solar",
    titleAr: "موقع شركة سوليداريتي للطاقة الشمسية",
    description: "A responsive landing page for a solar installation company in Plymouth. Built with HTML and CSS, showcasing services, values, and products of the company.",
    descriptionAr: "صفحة هبوط تفاعلية لشركة تركيب أنظمة الطاقة الشمسية تستعرض الخدمات والمنتجات والقيم البيئية والاقتصادية لتوليد الطاقة النظيفة.",
    tech: ["HTML", "CSS", "Responsive Design"],
    category: ["website"],
    demo: "https://task-one-web-master-theta.vercel.app/",
    github: "https://github.com/rabea-shaban/Task-One-webMaster",
    featured: false,
    img: SolidaritySolarImg,
  },
  {
    title: "🌍 API Country Search App",
    titleAr: "تطبيق استكشاف وبيانات الدول",
    description: "A modern country search app using React + TypeScript + Tailwind. Fetches and displays detailed info about countries from REST Countries API in a sleek dark UI.",
    descriptionAr: "تطبيق حديث للبحث عن الدول واستعراض تفاصيلها الجغرافية والسكانية والعملات عبر استهلاك REST Countries API بواجهة داكنة أنيقة وسلسة.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Axios", "Vite"],
    category: ["React", "web-app"],
    demo: "https://api-cuntry.vercel.app",
    github: "https://github.com/rabea-shaban/APICuntry",
    featured: false,
    img: ApiCountryImg,
  }
];
