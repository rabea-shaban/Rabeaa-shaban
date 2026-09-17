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
      role: "Full Stack Software Engineer",
      pill: "MERN Stack & Next.js Expert",
      bio: "I build scalable, secure, and high-performance web applications using React, Next.js, Node.js, Express, MongoDB, and Cloud DevOps.",
      timelineBadge: "TIMELINE",
      timelineTitle: "Professional Journey",
      timelineWatermark: "JOURNEY",
      timelineSubtitle: "A chronological overview of my professional experience, education, and milestones.",
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
      subtitle: "Full Stack Software Engineer specializing in building modern, scalable web applications using the MERN Stack. Passionate about Cloud Computing, DevOps, and creating secure, production-ready software with modern development practices.",
      getKnowMe: "Get to Know Me",
      p1: "I'm Rabea Shaban, a Full Stack Software Engineer based in Minya, Egypt. I graduated in 2024 with a Bachelor's degree in Management Information Systems (MIS), earning an Excellent grade.",
      p2: "I specialize in developing end-to-end web applications using MongoDB, Express.js, React.js, Node.js, Next.js, and TypeScript. My experience includes designing responsive user interfaces, building secure RESTful APIs, implementing JWT authentication, and creating maintainable applications following clean architecture principles.",
      p3: "Alongside Full Stack development, I'm expanding my expertise in Cloud Computing and DevOps. I work with Docker for containerization, Kubernetes and Helm for container orchestration, Terraform for Infrastructure as Code (IaC), GitHub Actions for CI/CD automation, and AWS and Linux as part of modern cloud-native development.",
      p4: "I'm currently enrolled in the Digitans AI-Based Software Development Diploma at the Egyptian Military Academy in Heliopolis, Cairo, where I'm strengthening my skills in Software Engineering, Cloud Computing, Artificial Intelligence, and DevOps through intensive hands-on training.",
      p5: "I've contributed to projects for clients in Egypt and the Gulf region, delivering responsive websites, business dashboards, booking systems, and modern web applications with a strong focus on performance, scalability, accessibility, and user experience.",
      p6: "I'm committed to continuous learning, writing clean and maintainable code, and building reliable, production-ready software that follows modern engineering best practices.",
      highlightedSkills: "HIGHLIGHTED SKILLS:",
      toolboxBadge: "TECH STACK",
      toolboxTitle: "Technical Toolbox",
      toolboxWatermark: "TOOLBOX",
      toolboxSubtitle: "The core languages, frameworks, databases, and DevOps tools I use daily.",
      experienceTitle: "Experience",
      educationTitle: "Education",
      aiDiplomaTitle: "AI-Based Software Development Diploma",
      aiDiplomaOrg: "Digitans Initiative / Professional Digital Pioneers",
      aiDiplomaLocation: "Egyptian Military Academy • Dept of IT and Information Technology (MCIT)",
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
      role: "مهندس برمجيات وتطوير ويب شامل",
      pill: "خبير MERN Stack و Next.js والأنظمة السحابية",
      bio: "أقوم ببناء وتطوير تطبيقات ويب سريعة، آمنة، وعالية الأداء باستخدام React و Next.js و Node.js و Express و MongoDB وهندسة DevOps السحابية.",
      timelineBadge: "مسيرتي",
      timelineTitle: "المسيرة المهنية والتعليمية",
      timelineWatermark: "مسيرتي",
      timelineSubtitle: "نظرة زمنية شاملة على خبراتي العملية، دراستي الأكاديمية، وأهم المحطات في مسيرتي التقنية.",
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
      subtitle: "مهندس برمجيات شامل متخصص في بناء وتطوير تطبيقات ويب حديثة وقابلة للتوسع باستخدام MERN Stack، مع شغف بالحوسبة السحابية، هندسة DevOps، وتطوير برمجيات آمنة وعالية الاعتمادية.",
      getKnowMe: "نبذة عني وعن خبراتي",
      p1: "أنا ربيع شعبان، مهندس برمجيات وتطوير ويب شامل (Full Stack Software Engineer) مقيم في المنيا / القاهرة، مصر. تخرجت في عام 2024 بدرجة البكالوريوس في نظم المعلومات الإدارية (MIS) بتقدير عام ممتاز.",
      p2: "أتخصص في تطوير تطبيقات الويب المتكاملة من البداية للنهاية باستخدام MongoDB، Express.js، React.js، Node.js، Next.js، و TypeScript. تشمل خبراتي تصميم واجهات مستخدم تفاعلية متجاوبة، بناء وتأمين واجهات برمجة التطبيقات REST APIs، تطبيق بروتوكولات المصادقة JWT، وتطوير برمجيات نظيفة وقابلة للصيانة وفق Clean Architecture.",
      p3: "إلى جانب التطوير البرمجي، أعمل على تعزيز خبراتي في الحوسبة السحابية وهندسة DevOps، حيث أستخدم Docker للحاويات البرمجية، Kubernetes و Helm لإدارة الحاويات، Terraform للبنية التحتية ككود (IaC)، و GitHub Actions لأتمتة CI/CD بالإضافة لخدمات AWS وبيئة Linux.",
      p4: "ملتحق حالياً بدبلومة تطوير البرمجيات القائمة على الذكاء الاصطناعي (Digitans AI-Based Software Development Diploma) بالأكاديمية العسكرية المصرية في مصر الجديدة بالقاهرة، لصقل مهاراتي في هندسة البرمجيات والأنظمة السحابية والذكاء الاصطناعي.",
      p5: "ساهمت في إنجاز مشروعات متنوعة لعملاء في مصر ودول الخليج، تشمل مواقع تفاعلية، لوحات تحكم أعمال، أنظمة حجز وإدارة، وتطبيقات حديثة تركز على الأداء، التوسع، وتجربة المستخدم السلسة.",
      p6: "ألتزم بالتعلم المستمر، كتابة كود نظيف وقابل للتطوير، وبناء برمجيات قوية وجاهزة للإنتاج تتبع أفضل المعايير الهندسية الحديثة.",
      highlightedSkills: "أبرز المهارات والتقنيات:",
      toolboxBadge: "المهارات",
      toolboxTitle: "الأدوات والتقنيات",
      toolboxWatermark: "التقنيات",
      toolboxSubtitle: "اللغات، أطر العمل، قواعد البيانات، وأدوات DevOps التي أعتمد عليها يومياً.",
      experienceTitle: "الخبرات العملية",
      educationTitle: "التعليم والشهادات الأكاديمية",
      aiDiplomaTitle: "دبلومة تطوير البرمجيات بالذكاء الاصطناعي",
      aiDiplomaOrg: "مبادرة رواد مصر الرقمية (Digitans / DEPI)",
      aiDiplomaLocation: "الأكاديمية العسكرية المصرية • وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
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
