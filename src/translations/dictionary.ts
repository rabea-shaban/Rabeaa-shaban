export interface NavTranslations {
  home: string;
  about: string;
  projects: string;
  services: string;
  contact: string;
  certificates: string;
  toggleTheme: string;
  toggleLang: string;
}

export interface CommonTranslations {
  viewProjects: string;
  downloadResume: string;
  contactMe: string;
  liveDemo: string;
  sourceCode: string;
  viewAll: string;
  allRightsReserved: string;
  builtWith: string;
  loading: string;
  quickLinks: string;
  techStack: string;
  currentlyEnrolled: string;
}

export interface HomeTranslations {
  greeting: string;
  role: string;
  pill: string;
  bio: string;
  timelineBadge: string;
  timelineTitle: string;
  timelineWatermark: string;
  timelineSubtitle: string;
  projectsBadge: string;
  projectsTitle: string;
  projectsWatermark: string;
  projectsSubtitle: string;
  viewAllProjects: string;
}

export interface AboutTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  getKnowMe: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
  p5: string;
  p6: string;
  highlightedSkills: string;
  toolboxBadge: string;
  toolboxTitle: string;
  toolboxWatermark: string;
  toolboxSubtitle: string;
  experienceTitle: string;
  educationTitle: string;
  aiDiplomaTitle: string;
  aiDiplomaOrg: string;
  aiDiplomaLocation: string;
  aiDiplomaPeriod: string;
  aiDiplomaStatus: string;
  bachelorTitle: string;
  bachelorOrg: string;
  bachelorGrade: string;
  graduationProject: string;
  graduationProjectDesc: string;
}

export interface ProjectsTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  all: string;
  fullstack: string;
  frontend: string;
  backend: string;
  noProjects: string;
}

export interface ServicesTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  processBadge: string;
  processTitle: string;
  processWatermark: string;
  processSubtitle: string;
}

export interface CertificatesTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  viewCert: string;
  issuedBy: string;
}

export interface ContactTranslations {
  badge: string;
  title: string;
  watermark: string;
  subtitle: string;
  detailsTitle: string;
  emailLabel: string;
  phoneLabel: string;
  locationLabel: string;
  locationValue: string;
  formTitle: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
  sendBtn: string;
  sendingBtn: string;
  successMsg: string;
  errorMsg: string;
}

export interface TranslationDict {
  nav: NavTranslations;
  common: CommonTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  services: ServicesTranslations;
  certificates: CertificatesTranslations;
  contact: ContactTranslations;
}

export const translations: Record<'en' | 'ar', TranslationDict> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      certificates: "Certificates",
      toggleTheme: "Toggle theme",
      toggleLang: "عربي",
    },
    common: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      contactMe: "Contact Me",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      viewAll: "View All",
      allRightsReserved: "All rights reserved.",
      builtWith: "Built with Next.js, Tailwind CSS & Framer Motion",
      loading: "Loading...",
      quickLinks: "Quick Links",
      techStack: "Tech Stack",
      currentlyEnrolled: "Currently Enrolled",
    },
    home: {
      greeting: "Hi, I'm",
      role: "Full-Stack Software Engineer",
      pill: "End-to-End Web Engineering • MERN • AWS",
      bio: "I engineer complete web products, from React and Next.js interfaces to Node.js APIs, databases, and cloud deployment. My training includes the Digilians software development diploma and hands-on frontend and backend internships.",
      timelineBadge: "TIMELINE",
      timelineTitle: "Professional Journey",
      timelineWatermark: "JOURNEY",
      timelineSubtitle: "Full-stack engineering work, hands-on internships, and the Digilians software development diploma.",
      projectsBadge: "PORTFOLIO",
      projectsTitle: "Featured Work",
      projectsWatermark: "PROJECTS",
      projectsSubtitle: "A selection of my key projects showcased together with demo, source code, and design.",
      viewAllProjects: "View All Projects",
    },
    about: {
      badge: "INTRODUCTION",
      title: "About Me",
      watermark: "About Me",
      subtitle: "Rabea Shaban is a Full Stack Software Engineer specializing in the MERN Stack and modern JavaScript technologies. He builds scalable and high-performance web applications using React.js, Next.js, Node.js, Express.js, TypeScript, MongoDB, and cloud technologies such as AWS.",
      getKnowMe: "Get to Know Me",
      p1: "I'm Rabea Shaban (ربيع شعبان), a Full Stack Software Engineer based in Minya, Egypt. I graduated in 2024 with a Bachelor's degree in Management Information Systems (MIS), earning an Excellent grade.",
      p2: "I specialize in developing end-to-end web applications using MongoDB, Express.js, React.js, Node.js, Next.js, and TypeScript. My experience includes designing responsive user interfaces, building secure RESTful APIs, implementing JWT authentication, and creating maintainable applications following clean architecture principles.",
      p3: "Alongside Full Stack development, I'm expanding my expertise in Cloud Computing and DevOps. I work with Docker for containerization, Kubernetes and Helm for container orchestration, Terraform for Infrastructure as Code (IaC), GitHub Actions for CI/CD automation, and AWS and Linux as part of modern cloud-native development.",
      p4: "I completed the Digilians AI-Based Software Development Specialized Diploma from Dec 2025 to Sep 2026 at the Egyptian Military Academy in Heliopolis, Cairo, organized by MCIT. The intensive program strengthened my software engineering, cloud computing, AI, and DevOps skills.",
      p5: "I've contributed to projects for clients in Egypt and the Gulf region, delivering responsive websites, business dashboards, booking systems, and modern web applications. My hands-on training includes frontend internships at Digital Fortress and WEB MASTER, plus backend development training at Darwish & Co.",
      p6: "I'm committed to continuous learning, writing clean and maintainable code, and building reliable, production-ready software that follows modern engineering best practices.",
      highlightedSkills: "HIGHLIGHTED SKILLS:",
      toolboxBadge: "TECH STACK",
      toolboxTitle: "Technical Toolbox",
      toolboxWatermark: "TOOLBOX",
      toolboxSubtitle: "The core languages, frameworks, databases, and DevOps tools I use daily.",
      experienceTitle: "Experience",
      educationTitle: "Education",
      aiDiplomaTitle: "AI-Based Software Development Specialized Diploma",
      aiDiplomaOrg: "Digilians Initiative – Ministry of Communications & IT (MCIT)",
      aiDiplomaLocation: "Egyptian Military Academy • Dept of Information Technology (MCIT)",
      aiDiplomaPeriod: "Dec 2025 – Sep 2026",
      aiDiplomaStatus: "Completed with Distinction",
      bachelorTitle: "Bachelor of Management Information Systems (MIS)",
      bachelorOrg: "Higher Institute of Technology, Management and Information - Minya",
      bachelorGrade: "Excellent Grade (Imtiyaz)",
      graduationProject: "GRADUATION PROJECT",
      graduationProjectDesc: "Crime Prediction System using React & Firebase (Accredited Excellent)",
    },
    projects: {
      badge: "MY WORK",
      title: "Projects Showcase",
      watermark: "PROJECTS",
      subtitle: "Explore a curated collection of full stack web applications, REST APIs, enterprise systems, and client solutions.",
      all: "All",
      fullstack: "Full Stack",
      frontend: "Frontend",
      backend: "Backend",
      noProjects: "No projects found in this category.",
    },
    services: {
      badge: "WHAT I OFFER",
      title: "Services & Solutions",
      watermark: "SERVICES",
      subtitle: "End-to-end software development and cloud engineering services tailored to your business needs.",
      processBadge: "METHODOLOGY",
      processTitle: "How I Work",
      processWatermark: "PROCESS",
      processSubtitle: "From requirements discovery to deployment and scaling.",
    },
    certificates: {
      badge: "CREDENTIALS",
      title: "Certificates & Badges",
      watermark: "CERTIFICATES",
      subtitle: "Professional certifications and accredited technical diplomas earned from leading global tech platforms.",
      viewCert: "Verify Certificate",
      issuedBy: "Issued by",
    },
    contact: {
      badge: "LET'S CONNECT",
      title: "Get In Touch",
      watermark: "CONTACT",
      subtitle: "Have a new project, freelance opportunity, or technical inquiry? Send a message and let me know how I can help!",
      detailsTitle: "Contact Details",
      emailLabel: "Email Address",
      phoneLabel: "Phone / WhatsApp",
      locationLabel: "Location",
      locationValue: "Minya / Cairo, Egypt",
      formTitle: "Send a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "How can I help with your project?",
      sendBtn: "Send Message",
      sendingBtn: "Sending Message...",
      successMsg: "Thank you! Your message has been sent successfully. I will get back to you soon.",
      errorMsg: "Failed to send message. Please try again or reach out directly via email or WhatsApp.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من أنا",
      projects: "المشروعات",
      services: "الخدمات",
      contact: "تواصل معي",
      certificates: "الشهادات",
      toggleTheme: "تبديل المظهر",
      toggleLang: "EN",
    },
    common: {
      viewProjects: "استعراض المشروعات",
      downloadResume: "تحميل السيرة الذاتية",
      contactMe: "تواصل معي",
      liveDemo: "معاينة حية",
      sourceCode: "كود المصدر",
      viewAll: "عرض الكل",
      allRightsReserved: "جميع الحقوق محفوظة.",
      builtWith: "تم التطوير بواسطة Next.js و Tailwind CSS و Framer Motion",
      loading: "جاري التحميل...",
      quickLinks: "روابط سريعة",
      techStack: "التقنيات المستخدمة",
      currentlyEnrolled: "قيد الدراسة حالياً",
    },
    home: {
      greeting: "أهلاً، أنا",
      role: "مهندس برمجيات Full-Stack",
      pill: "هندسة تطبيقات ويب متكاملة • MERN • AWS",
      bio: "أهندس منتجات ويب متكاملة من واجهات React وNext.js إلى خدمات Node.js وقواعد البيانات والنشر السحابي. تشمل خبرتي دبلومة تطوير البرمجيات من Digilians وتدريبات عملية في الواجهات الأمامية والخلفية.",
      timelineBadge: "مسيرتي",
      timelineTitle: "المسيرة المهنية والتعليمية",
      timelineWatermark: "مسيرتي",
      timelineSubtitle: "خبرة في هندسة البرمجيات المتكاملة، وتدريبات عملية، ودبلومة تطوير البرمجيات من Digilians.",
      projectsBadge: "معرض الأعمال",
      projectsTitle: "مشروعات مميزة",
      projectsWatermark: "المشروعات",
      projectsSubtitle: "مجموعة مختارة من أبرز التطبيقات والأنظمة البرمجية التي قمت بتصميمها وتطويرها بالكامل.",
      viewAllProjects: "عرض جميع المشروعات",
    },
    about: {
      badge: "مقدمة",
      title: "من أنا",
      watermark: "من أنا",
      subtitle: "ربيع شعبان هو مهندس برمجيات وتطوير ويب شامل (Full Stack Software Engineer) متخصص في MERN Stack وتقنيات الويب الحديثة، يقوم ببناء تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام React.js و Next.js و Node.js و Express.js و TypeScript و MongoDB وتقنيات السحابة مثل AWS.",
      getKnowMe: "نبذة عني وعن خبراتي",
      p1: "أنا ربيع شعبان، مهندس برمجيات وتطوير ويب شامل (Full Stack Software Engineer) مقيم في المنيا / القاهرة، مصر. تخرجت في عام 2024 بدرجة البكالوريوس في نظم المعلومات الإدارية (MIS) بتقدير عام ممتاز.",
      p2: "أتخصص في تطوير تطبيقات الويب المتكاملة من البداية للنهاية باستخدام MongoDB، Express.js، React.js، Node.js، Next.js، و TypeScript. تشمل خبراتي تصميم واجهات مستخدم تفاعلية متجاوبة، بناء وتأمين واجهات برمجة التطبيقات REST APIs، تطبيق بروتوكولات المصادقة JWT، وتطوير برمجيات نظيفة وقابلة للصيانة وفق Clean Architecture.",
      p3: "إلى جانب التطوير البرمجي، أعمل على تعزيز خبراتي في الحوسبة السحابية وهندسة DevOps، حيث أستخدم Docker للحاويات البرمجية، Kubernetes و Helm لإدارة الحاويات، Terraform للبنية التحتية ككود (IaC)، و GitHub Actions لأتمتة CI/CD بالإضافة لخدمات AWS وبيئة Linux.",
      p4: "أتممت دبلومة Digilians التخصصية في تطوير البرمجيات القائمة على الذكاء الاصطناعي من ديسمبر 2025 إلى سبتمبر 2026، بمقر الأكاديمية العسكرية المصرية في مصر الجديدة بالقاهرة تحت إشراف وزارة الاتصالات وتكنولوجيا المعلومات (MCIT). عزز البرنامج المكثف خبرتي في هندسة البرمجيات والسحابة والذكاء الاصطناعي وDevOps.",
      p5: "ساهمت في إنجاز مشروعات متنوعة لعملاء في مصر ودول الخليج، تشمل مواقع تفاعلية ولوحات تحكم وأنظمة حجز وتطبيقات ويب حديثة. وتشمل تدريباتي العملية تطوير الواجهات في Digital Fortress وWEB MASTER، وتدريب تطوير الأنظمة الخلفية في Darwish & Co.",
      p6: "ألتزم بالتعلم المستمر، كتابة كود نظيف وقابل للتطوير، وبناء برمجيات قوية وجاهزة للإنتاج تتبع أفضل المعايير الهندسية الحديثة.",
      highlightedSkills: "أبرز المهارات والتقنيات:",
      toolboxBadge: "المهارات",
      toolboxTitle: "الأدوات والتقنيات",
      toolboxWatermark: "التقنيات",
      toolboxSubtitle: "اللغات، أطر العمل، قواعد البيانات، وأدوات DevOps التي أعتمد عليها يومياً.",
      experienceTitle: "الخبرات العملية",
      educationTitle: "التعليم والشهادات الأكاديمية",
      aiDiplomaTitle: "دبلومة تطوير البرمجيات القائمة على الذكاء الاصطناعي (التخصصية)",
      aiDiplomaOrg: "مبادرة الرواد الرقميون (Digilians) – وزارة الاتصالات (MCIT)",
      aiDiplomaLocation: "الأكاديمية العسكرية المصرية • وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
      aiDiplomaPeriod: "ديسمبر 2025 – سبتمبر 2026",
      aiDiplomaStatus: "إتمام معتمد بتقدير امتياز",
      bachelorTitle: "بكالوريوس نظم المعلومات الإدارية (MIS)",
      bachelorOrg: "المعهد العالي لتكنولوجيا الإدارة والمعلومات بالمنيا",
      bachelorGrade: "تقدير عام ممتاز (امتياز)",
      graduationProject: "مشروع التخرج",
      graduationProjectDesc: "نظام التنبؤ بالجريمة باستخدام React و Firebase (معتمد بتقدير امتياز)",
    },
    projects: {
      badge: "أعمالي",
      title: "معرض المشروعات",
      watermark: "المشروعات",
      subtitle: "استكشف أحدث تطبيقات الويب المتكاملة، واجهات برمجة التطبيقات، والأنظمة البرمجية التي قمت بتطويرها.",
      all: "الكل",
      fullstack: "تطوير شامل",
      frontend: "واجهات أمامية",
      backend: "أنظمة خلفية",
      noProjects: "لم يتم العثور على مشروعات في هذا التصنيف.",
    },
    services: {
      badge: "ماذا أقدم",
      title: "الخدمات والحلول",
      watermark: "الخدمات",
      subtitle: "خدمات هندسة برمجية وحلول سحابية متكاملة مصممة خصيصاً لتلبية احتياجات أعمالك الرقمية.",
      processBadge: "منهجية العمل",
      processTitle: "كيف أعمل",
      processWatermark: "الخطوات",
      processSubtitle: "من تحليل المتطلبات والتصميم وحتى النشر السحابي والتوسع المستمر.",
    },
    certificates: {
      badge: "الاعتمادات",
      title: "الشهادات والاعتمادات",
      watermark: "الشهادات",
      subtitle: "الشهادات التقنية والاعتمادات المهنية المعتمدة من كبرى المنصات والمؤسسات البرمجية العالمية.",
      viewCert: "التحقق من الشهادة",
      issuedBy: "جهة الإصدار",
    },
    contact: {
      badge: "تواصل معي",
      title: "اترك رسالة",
      watermark: "تواصل",
      subtitle: "هل لديك مشروع جديد، فرصة عمل حر، أو استفسار تقني؟ أرسل رسالتك وسأكون سعيداً بمساعدتك!",
      detailsTitle: "معلومات التواصل المباشر",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف / واتساب",
      locationLabel: "الموقع الجغرافي",
      locationValue: "المنيا / القاهرة، مصر",
      formTitle: "أرسل رسالة سريعة",
      namePlaceholder: "الاسم بالكامل",
      emailPlaceholder: "بريدك الإلكتروني",
      subjectPlaceholder: "موضوع الرسالة",
      messagePlaceholder: "كيف يمكنني مساعدتك في مشروعك؟",
      sendBtn: "إرسال الرسالة الآن",
      sendingBtn: "جاري إرسال الرسالة...",
      successMsg: "شكراً لتواصلك! تم إرسال رسالتك بنجاح وسأقوم بالرد عليك في أقرب وقت.",
      errorMsg: "عذراً، حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل مباشرة عبر البريد أو واتساب.",
    },
  },
};
