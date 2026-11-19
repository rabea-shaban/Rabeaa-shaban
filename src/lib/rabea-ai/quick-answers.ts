import { knowledgeBase } from "./knowledge";
import { verifiedProjects } from "./knowledge/projects";
import { getInstantFaqAnswer } from "./faq-retrieval";

type Language = "en" | "ar";

export const rabeaAiSuggestions = [
  { id: "profile", icon: "user", question: { en: "Who is Rabea Shaban?", ar: "من هو ربيع شعبان؟" } },
  { id: "skills", icon: "code", question: { en: "What are his technical skills?", ar: "ما أبرز مهاراته التقنية؟" } },
  { id: "projects", icon: "layers", question: { en: "Tell me about his projects.", ar: "حدثني عن مشروعاته." } },
  { id: "experience", icon: "briefcase", question: { en: "Tell me about his experience.", ar: "ما خبراته المهنية والتدريبية؟" } },
  { id: "education", icon: "education", question: { en: "What is his educational background?", ar: "ما خلفيته التعليمية؟" } },
  { id: "certifications", icon: "award", question: { en: "What certifications does he have?", ar: "ما الشهادات التي حصل عليها؟" } },
  { id: "availability", icon: "briefcase", question: { en: "Is Rabea available for work?", ar: "هل ربيع متاح للعمل؟" } },
  { id: "contact", icon: "mail", question: { en: "How can I contact him?", ar: "كيف أتواصل معه؟" } },
  { id: "ai", icon: "layers", question: { en: "What AI experience does he have?", ar: "ما خبرته في الذكاء الاصطناعي؟" } },
  { id: "training", icon: "education", question: { en: "What training programs has he completed?", ar: "ما البرامج التدريبية التي أتمها؟" } },
  { id: "services", icon: "briefcase", question: { en: "What services can he provide?", ar: "ما الخدمات التي يستطيع تقديمها؟" } },
  { id: "graduationProject", icon: "layers", question: { en: "What was his graduation project?", ar: "ما مشروع تخرجه؟" } },
] as const;

const asBullets = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

function profileAnswer(language: Language) {
  const { personal } = knowledgeBase;
  return language === "ar"
    ? `## نبذة مهنية\n**${personal.nameAr} (${personal.name})** مهندس برمجيات شامل يطوّر تطبيقات ويب متكاملة، مع تركيز أساسي على الواجهات الأمامية وتجربة المستخدم. يمتد عمله إلى بناء واجهات React وNext.js، وربطها بواجهات REST، وتطوير خدمات الخلفية وقواعد البيانات باستخدام Node.js وExpress وMongoDB.\n\nيركز مهنيًا على **React وNext.js وTypeScript وMERN Stack**، ويهتم أيضًا بتطبيقات الذكاء الاصطناعي والحوسبة السحابية وDevOps. يذكر ملفه عملًا حرًا في هندسة البرمجيات منذ 2023.\n\nيمكن استكشاف مشروعاته وخبراته وشهاداته من الأسئلة المقترحة، أو طلب تفاصيل أي مشروع بالاسم. لا يتضمن الملف تأكيدًا حاليًا على مدى توفره للعمل.`
    : `## Professional overview\n**${personal.name}** is a Full Stack Software Engineer who builds end-to-end web applications, with a strong focus on frontend engineering and user experience. His work spans React and Next.js interfaces, REST API integration, backend services, and database-driven applications using Node.js, Express, and MongoDB.\n\nHis core focus is **React, Next.js, TypeScript, and the MERN stack**, with additional interests in AI-powered applications, cloud computing, and DevOps. His portfolio describes freelance software engineering work from 2023 onward.\n\nAsk about a project by name for its purpose, features, technology, and available links. Current work availability is not confirmed in the portfolio.`;
}

function skillsAnswer(language: Language, category?: string) {
  const groups = knowledgeBase.skills.filter((group) => !category || group.category.toLowerCase() === category.toLowerCase());
  const lines = groups.map((group) => `**${group.category}:** ${group.skills.join(", ")}`);
  return language === "ar"
    ? `## المهارات والتقنيات\n${lines.join("\n\n")}\n\nهذه قائمة التقنيات المسجلة في ملف ربيع ومشروعاته؛ لا تعني أن مستوى الإتقان متساوٍ أو احترافي في كل تقنية. خبرته العملية الأوضح في بناء تطبيقات React وNext.js وربط الواجهات بخدمات الخلفية وواجهات REST.`
    : `## Skills and technologies\n${lines.join("\n\n")}\n\nThis is the technology inventory recorded in Rabea’s portfolio and projects; it does not imply the same or expert proficiency in every tool. The clearest recurring focus is building React and Next.js applications and connecting interfaces to backend services and REST APIs.`;
}

function experienceAnswer(language: Language) {
  const items = knowledgeBase.experience.map((item) =>
    `**${item.title} (${item.period})**\n${item.description}\n${item.skills?.length ? `Technologies: ${item.skills.join(", ")}.` : ""}`,
  );
  const arabicItems = knowledgeBase.experience.map((item) => {
    const title = item.title.toLowerCase();
    let summary = "خبرة أو تدريب مسجل في الملف المهني.";
    if (title.includes("freelance")) summary = "عمل حر في تطوير تطبيقات ويب متكاملة، من الواجهة إلى الـBackend، باستخدام MERN وNext.js وواجهات REST والاستضافة السحابية.";
    else if (title.includes("digilians")) summary = "دبلومة مكثفة لتطوير البرمجيات بالذكاء الاصطناعي، شملت هندسة البرمجيات وMERN ودمج AI وAWS وDocker وKubernetes وCI/CD.";
    else if (title.includes("meta")) summary = "برنامج مهني في تطوير الواجهات الأمامية ومبادئ UX/UI وReact وإدارة الحالة وتصميم الويب المتجاوب.";
    else if (title.includes("digital egypt")) summary = "تدريب Full Stack بمسار .NET وReact، تضمن مشروع تجارة إلكترونية للمستلزمات الزراعية مع لوحات تحكم وتكامل Stripe.";
    else if (title.includes("national telecommunications")) summary = "تدريب على HTML وCSS وJavaScript وBootstrap، وتطبيق مشروع موقع عيادة لحجز المواعيد ولوحة إدارة.";
    return `**${item.title} (${item.period})**\n${summary}\n${item.skills?.length ? `تقنيات مذكورة: ${item.skills.join("، ")}.` : ""}`;
  });
  return language === "ar"
    ? `## الخبرة والمسار المهني\n${arabicItems.join("\n\n")}\n\nيعرض هذا الملخص الخبرة العملية وبرامج التدريب كما وردت في ملف الموقع، ويفصل بينها وبين المشروعات الأكاديمية والشخصية. التوفر الحالي للعمل غير مؤكد.`
    : `## Professional experience\n${items.join("\n\n")}\n\nThis summary reflects the experience and training entries in the portfolio and distinguishes them from academic or personal projects. Current availability is not confirmed.`;
}

function educationAnswer(language: Language) {
  const [degree, diploma] = knowledgeBase.education;
  const graduation = knowledgeBase.graduationProject;
  return language === "ar"
    ? `## التعليم الأكاديمي\n- **المؤهل:** بكالوريوس نظم معلومات الأعمال (BIS).\n- **المؤسسة:** ${degree.institution}.\n- **سنة التخرج:** 2024.\n- **التقدير:** ممتاز.\n\n## مشروع التخرج\n**${graduation.name}**، نظام للتنبؤ بالجرائم باستخدام ${graduation.technologies.join(" و")}. يذكر الملف أن تقديره ممتاز، بينما تفاصيل المساهمة الفردية وروابط المشروع غير متاحة.\n\n## الدبلومة التخصصية\n**${diploma.name}** من ${diploma.institution}، بالفترة المسجلة ${diploma.period}، ويذكر الملف إتمامها بامتياز.`
    : `## Education\n- **Degree:** ${degree.name}.\n- **Institution:** ${degree.institution}.\n- **Graduated:** 2024, with an **Excellent** grade.\n\n## Graduation project\n**${graduation.name}**, a crime prediction system using ${graduation.technologies.join(" and ")}. The portfolio records an Excellent grade; individual contribution details and project links are unavailable.\n\n## Specialized diploma\n**${diploma.name}**, provided by ${diploma.institution}, during ${diploma.period}. The portfolio records it as completed with distinction.`;
}

function trainingAnswer(language: Language) {
  const items = knowledgeBase.training.map((item) =>
    language === "ar"
      ? `**${item.name}** — ${item.provider}، ${item.track ? `مسار ${item.track}، ` : ""}${item.period}.${item.relatedProject ? ` المشروع المرتبط: ${item.relatedProject}.` : ""}`
      : `**${item.name}** — ${item.provider}, ${item.track ? `${item.track} track, ` : ""}${item.period}.${item.relatedProject ? ` Related project: ${item.relatedProject}.` : ""}`,
  );
  const certificate = knowledgeBase.certifications.find((item) => item.title.includes("Meta Front-End Developer"));
  return language === "ar"
    ? `## التدريب والدراسة المهنية\n${asBullets(items)}\n- **دبلومة تطوير البرمجيات بالذكاء الاصطناعي:** Digilians / MCIT والأكاديمية العسكرية المصرية، ${knowledgeBase.education[1].period}؛ الملف يذكر إتمامها بامتياز.\n- **${certificate?.title ?? "Meta Front-End Developer"}:** ${certificate?.issuer ?? "Meta / Coursera"}، وتغطي أساسيات وتطبيقات تطوير الواجهات الأمامية.`
    : `## Training and professional learning\n${asBullets(items)}\n- **AI-Based Software Development Specialized Diploma:** Digilians / MCIT and the Egyptian Military Academy, ${knowledgeBase.education[1].period}; the portfolio marks it completed with distinction.\n- **${certificate?.title ?? "Meta Front-End Developer"}:** ${certificate?.issuer ?? "Meta / Coursera"}, covering frontend development foundations and practical work.`;
}

function certificationsAnswer(language: Language) {
  const items = knowledgeBase.certifications.map((item) =>
    `${item.title} — ${item.issuer}${item.date ? ` (${item.date})` : ""}${item.expirationDate ? `; expires ${item.expirationDate}` : ""}`,
  );
  return language === "ar"
    ? `## الشهادات والاعتمادات المدرجة\n${asBullets(knowledgeBase.certifications.map((item) => `${item.title} — ${item.issuer}${item.date ? ` (${item.date})` : ""}${item.expirationDate ? `؛ تنتهي ${item.expirationDate}` : ""}`))}\n\nأدرج هنا الاعتمادات التي يضعها ملف الموقع ضمن الشهادات الموثقة، بما فيها الدرجات والدبلومات المهنية. شهادة **AWS Certified Developer – Associate** صادرة في 3 نوفمبر 2026 وتنتهي في 3 نوفمبر 2029 وفق سجل الشهادة بالموقع.`
    : `## Certificates and credentials listed\n${asBullets(items)}\n\nThis list includes the verified credentials shown in the portfolio, including academic degrees and professional diplomas. The portfolio records **AWS Certified Developer – Associate** as issued on November 3, 2026 and expiring on November 3, 2029.`;
}

function projectAnswer(project: (typeof verifiedProjects)[number], language: Language) {
  if (project.name.toLowerCase() === "athar") {
    return language === "ar"
      ? "## مشروع ATHAR — تعارض يحتاج إلى توضيح\nصفحة المشروع الحالية في الموقع تعرض ATHAR كمنصة ويب عربية. في المقابل، ملف الأسئلة الشخصي المقدم يصف تطبيق موبايل باستخدام React Native وExpo وFirebase. لا أستطيع تأكيد هل هما نسختان للمنتج نفسه أم مشروعان مختلفان؛ لذلك لن أخلط التقنيات أو الخصائص بين الوصفين. الرابط المنشور: [athar-library.vercel.app](https://athar-library.vercel.app/)."
      : "## ATHAR — conflicting descriptions\nThe current portfolio page describes ATHAR as an Arabic web platform. The supplied personal Q&A document instead describes a mobile app using React Native, Expo, and Firebase. I can’t confirm whether these are two versions of one product or separate projects, so I won’t merge their features or stacks. Published link: [athar-library.vercel.app](https://athar-library.vercel.app/).";
  }
  const name = language === "ar" ? project.nameAr || project.name : project.name;
  const description = language === "ar" ? project.descriptionAr || project.description : project.description;
  const type = language === "ar" ? project.typeAr || project.type : project.type;
  const features = language === "ar" && project.featuresAr?.length ? project.featuresAr : project.features;
  const lines = [
    `## ${name}`,
    type ? `**${language === "ar" ? "النوع" : "Type"}:** ${type}` : "",
    description || "",
    features?.length ? `**${language === "ar" ? "أبرز الوظائف" : "Key features"}:\n${asBullets(features)}` : "",
    project.technologies?.length ? `**${language === "ar" ? "التقنيات" : "Technologies"}:** ${project.technologies.join(", ")}` : "",
    `**${language === "ar" ? "روابط" : "Links"}:** ${project.demo !== "Unavailable" ? `[${language === "ar" ? "العرض المباشر" : "Live demo"}](${project.demo})` : language === "ar" ? "العرض المباشر غير متاح في الملف" : "Live demo unavailable in the portfolio"}${project.source !== "Unavailable" ? ` · [GitHub](${project.source})` : ` · ${language === "ar" ? "مستودع GitHub غير متاح في الملف" : "GitHub repository unavailable in the portfolio"}`}`,
    language === "ar"
      ? `**دور ربيع وحالة المشروع:** يسجل الموقع المشروع ضمن أعماله، لكنه لا يوضح مساهمته الفردية بالتفصيل أو حالة الصيانة الحالية؛ لذلك لا أفترض تفاصيل غير موثقة.`
      : `**Rabea’s role and project status:** The portfolio lists this as his work, but does not document his individual contribution in detail or its current maintenance status, so I won’t infer those details.`,
  ].filter(Boolean);
  return lines.join("\n\n");
}

function projectsAnswer(language: Language) {
  const featured = verifiedProjects.filter((project) => project.featured);
  const list = featured.length ? featured : verifiedProjects.slice(0, 8);
  const lines = list.map((project) => {
    const name = language === "ar" ? project.nameAr || project.name : project.name;
    const description = language === "ar" ? project.descriptionAr || project.description : project.description;
    const tech = project.technologies?.length ? ` (${project.technologies.slice(0, 6).join(", ")})` : "";
    return `**${name}:** ${description}${tech}${project.demo !== "Unavailable" ? ` — [${language === "ar" ? "عرض المشروع" : "view project"}](${project.demo})` : ""}`;
  });
  return language === "ar"
    ? `## مشروعات مختارة\n${asBullets(lines)}\n\nهذه المشروعات المميزة المسجلة في ملف الموقع. يمكنني شرح أي مشروع بالتفصيل إذا ذكرت اسمه؛ سأعرض هدفه وخصائصه وتقنياته وروابطه المتاحة. التفاصيل غير المسجلة عن الدور الفردي أو حالة التشغيل سأوضح أنها غير مؤكدة.`
    : `## Selected projects\n${asBullets(lines)}\n\nThese are the featured projects recorded in the portfolio. Name any project for a detailed breakdown of its purpose, features, stack, and available links. If the portfolio does not document an individual role or current status, I’ll say so rather than guess.`;
}

const details = {
  en: {
    availability: "The portfolio does not confirm Rabea’s current availability for employment or freelance work. For a current answer, contact him directly through the public email or LinkedIn listed below.",
    contact: `## Public contact\n- Email: [${knowledgeBase.contact.email}](mailto:${knowledgeBase.contact.email})\n- LinkedIn: [Rabea Shaban](${knowledgeBase.contact.linkedin})\n- GitHub: [rabea-shaban](${knowledgeBase.contact.github})\n- Portfolio: [rabea-shaban.com](${knowledgeBase.contact.portfolio})\n- Freelance profiles: [Upwork](${knowledgeBase.contact.otherPublicProfiles[0]}) · [Mostaql](${knowledgeBase.contact.otherPublicProfiles[1]})`,
    ai: "Rabea’s portfolio lists AI-Based Software Development as a focus and documents a specialized diploma covering AI workflow integration, Generative AI, LLM applications, AI agents, prompt engineering, and n8n automation. The project portfolio describes AI integration in software products, but details not documented in a specific project should be confirmed before making claims about ownership or production usage.",
    services: "Based on the portfolio, Rabea can work on responsive React/Next.js interfaces, full-stack web applications, REST API integration, Node.js/Express backend features, database-backed workflows, authentication and role-based access, and AI integrations in web products. The exact scope, timeline, and availability for a specific engagement should be discussed with him directly.",
    career: "The portfolio positions Rabea for Frontend Engineer, React.js Developer, Next.js Developer, and Full Stack Software Engineer opportunities. His strongest recurring focus is frontend engineering, while his training and project portfolio also include Node.js/Express backend development, MongoDB, AI integration, and AWS fundamentals. Remote, hybrid, and relocation preferences should be confirmed directly because they can change.",
    graduationProject: `## Graduation project: ${knowledgeBase.graduationProject.name}\nAn academic crime-prediction system built with ${knowledgeBase.graduationProject.technologies.join(" and ")}. The portfolio records an **Excellent** grade. It does not document Rabea’s individual contribution, a public repository, or a live demo, so those details are unavailable.`,
  },
  ar: {
    availability: "ملف ربيع لا يؤكد مدى توفره الحالي لوظيفة أو لمشروع عمل حر. للحصول على إجابة حديثة، تواصل معه مباشرة عبر البريد الإلكتروني أو LinkedIn العامين.",
    contact: `## وسائل التواصل العامة\n- البريد الإلكتروني: [${knowledgeBase.contact.email}](mailto:${knowledgeBase.contact.email})\n- LinkedIn: [Rabea Shaban](${knowledgeBase.contact.linkedin})\n- GitHub: [rabea-shaban](${knowledgeBase.contact.github})\n- الموقع: [rabea-shaban.com](${knowledgeBase.contact.portfolio})\n- حسابات العمل الحر: [Upwork](${knowledgeBase.contact.otherPublicProfiles[0]}) · [مستقل](${knowledgeBase.contact.otherPublicProfiles[1]})`,
    ai: "يذكر ملف ربيع تطوير البرمجيات بالذكاء الاصطناعي ضمن اهتماماته، وتغطي دبلومته دمج تدفقات الذكاء الاصطناعي، وGenerative AI، وتطبيقات LLM، ووكلاء الذكاء الاصطناعي، وPrompt Engineering، والأتمتة باستخدام n8n. كما يسجل ملف المشروعات دمج تقنيات الذكاء الاصطناعي في البرمجيات. أي تفاصيل عن الملكية أو الاستخدام الإنتاجي يجب تأكيدها من وصف المشروع نفسه.",
    services: "بحسب ملف الموقع، يستطيع ربيع العمل على واجهات React وNext.js متجاوبة، وتطبيقات ويب Full Stack، وربط REST APIs، وخصائص Backend باستخدام Node.js وExpress، وتدفقات تعتمد على قواعد البيانات، والمصادقة والصلاحيات، ودمج الذكاء الاصطناعي في منتجات الويب. نطاق التنفيذ والمدة والتوفر لمشروع بعينه تحتاج اتفاقًا مباشرًا معه.",
    career: "يعرض ملف ربيع توجهه لوظائف Frontend Engineer وReact.js Developer وNext.js Developer وFull Stack Software Engineer. تركيزه الأوضح هو هندسة الواجهات الأمامية، مع تدريب ومشروعات تشمل Backend باستخدام Node.js وExpress وMongoDB ودمج الذكاء الاصطناعي وأساسيات AWS. تفضيلات العمل عن بُعد أو الهجين أو الانتقال قد تتغير، لذا يفضل تأكيدها معه مباشرة.",
    graduationProject: `## مشروع التخرج: ${knowledgeBase.graduationProject.name}\nنظام أكاديمي للتنبؤ بالجرائم باستخدام ${knowledgeBase.graduationProject.technologies.join(" و")}. يذكر الملف أن التقدير **ممتاز**. لا تتوفر تفاصيل موثقة عن مساهمة ربيع الفردية أو مستودع عام أو عرض مباشر للمشروع.`,
  },
} as const;

export const rabeaAiQuickAnswers = {
  en: {
    profile: profileAnswer("en"),
    skills: skillsAnswer("en"),
    frontend: skillsAnswer("en", "Frontend"),
    backend: skillsAnswer("en", "Backend"),
    cloud: skillsAnswer("en", "Cloud & DevOps"),
    projects: projectsAnswer("en"),
    experience: experienceAnswer("en"),
    education: educationAnswer("en"),
    training: trainingAnswer("en"),
    certifications: certificationsAnswer("en"),
    availability: details.en.availability,
    contact: details.en.contact,
    ai: details.en.ai,
    services: details.en.services,
    career: details.en.career,
    graduationProject: details.en.graduationProject,
  },
  ar: {
    profile: profileAnswer("ar"),
    skills: skillsAnswer("ar"),
    frontend: skillsAnswer("ar", "Frontend"),
    backend: skillsAnswer("ar", "Backend"),
    cloud: skillsAnswer("ar", "Cloud & DevOps"),
    projects: projectsAnswer("ar"),
    experience: experienceAnswer("ar"),
    education: educationAnswer("ar"),
    training: trainingAnswer("ar"),
    certifications: certificationsAnswer("ar"),
    availability: details.ar.availability,
    contact: details.ar.contact,
    ai: details.ar.ai,
    services: details.ar.services,
    career: details.ar.career,
    graduationProject: details.ar.graduationProject,
  },
} as const;

const phraseSignals: Record<string, { en: string[]; ar: string[] }> = {
  profile: {
    en: ["who is rabea", "about rabea", "tell me about him", "introduce rabea", "professional summary", "who are you"],
    ar: ["من هو ربيع", "مين ربيع", "من هو ربيع شعبان", "عرفني على ربيع", "نبذة عن ربيع", "احكيلي عن ربيع", "عرفني بنفسك"],
  },
  skills: {
    en: ["technical skills", "his skills", "his tech stack", "technologies does he use", "technologies does he work with", "what can he build with", "list his skills"],
    ar: ["مهاراته التقنية", "مهارات ربيع", "تقنيات ربيع", "تقنياته", "بيشتغل بايه", "بيعرف تقنيات ايه", "الستاك بتاعه", "بيستخدم تقنيات ايه"],
  },
  frontend: {
    en: ["frontend skills", "front-end skills", "react experience", "next.js experience", "react and next", "frontend technologies"],
    ar: ["خبرته في الواجهات", "خبرة رياكت", "خبرته في رياكت", "خبرته في next", "مهارات الفرونت", "مهارات الواجهة الامامية"],
  },
  backend: {
    en: ["backend skills", "back-end skills", "node.js experience", "express experience", "database experience", "backend technologies"],
    ar: ["خبرته في الباك", "خبرة الباك اند", "خبرته في نود", "مهارات الباك", "خبرة قواعد البيانات", "تقنيات الباك اند"],
  },
  cloud: {
    en: ["cloud skills", "devops skills", "aws experience", "his aws experience", "cloud technologies"],
    ar: ["خبرته في aws", "خبرته في الكلاود", "مهارات devops", "خبرة الحوسبة السحابية", "تقنيات السحابة"],
  },
  projects: {
    en: ["his projects", "rabea projects", "portfolio projects", "projects has he built", "what has rabea built", "show me his work", "project portfolio"],
    ar: ["مشروعاته", "مشاريع ربيع", "مشروعات ربيع", "اعمال ربيع", "المشاريع بتاعته", "وريني شغله", "مشاريعه البرمجية", "بنى ايه"],
  },
  experience: {
    en: ["his experience", "what experience does rabea have", "work experience", "professional background", "career history", "employment history", "his previous work", "his professional work"],
    ar: ["خبراته المهنية", "خبرة ربيع", "الخبرة العملية", "تاريخه المهني", "اشتغل فين", "خبرته في الشغل", "خبراته السابقة", "ايه خبرة ربيع"],
  },
  education: {
    en: ["educational background", "his degree", "university degree", "what did he study", "what did rabea study", "his education"],
    ar: ["خلفيته التعليمية", "مؤهله الدراسي", "مؤهله الجامعي", "درس ايه", "ربيع درس ايه", "دراسته الجامعية", "تقديره"],
  },
  training: {
    en: ["training programs", "courses has he completed", "what training has rabea done", "his diplomas", "professional training", "what courses"],
    ar: ["البرامج التدريبية", "دوراته", "كورسات ربيع", "دبلوماته", "تدريباته", "ما الدورات", "تدريبات ربيع"],
  },
  certifications: {
    en: ["his certifications", "his certificates", "certificates does he have", "what certifications", "list his certificates", "aws certifications", "aws certificates", "aws certified developer", "cloud practitioner", "developer associate", "dva c02", "clf c02", "professional certificates"],
    ar: ["شهاداته", "شهادات ربيع", "ايه شهاداته", "ايه شهادات ربيع", "شهادات aws", "شهادة مطور معتمد", "اعتماداته المهنية", "الشهادات التي حصل عليها"],
  },
  availability: {
    en: ["available for work", "is he hiring", "open to work", "availability", "looking for a job"],
    ar: ["متاح للعمل", "متاح لوظيفة", "يدور على شغل", "متاح للتوظيف", "هل يبحث عن عمل"],
  },
  contact: {
    en: ["contact him", "his email", "his linkedin", "his github", "rabea linkedin", "rabea github", "contact details", "how can i reach"],
    ar: ["اتواصل معه", "اتواصل مع ربيع", "بريده الالكتروني", "لينكدان ربيع", "لينكد ان ربيع", "حساب github", "طرق التواصل"],
  },
  ai: {
    en: ["ai experience", "artificial intelligence experience", "generative ai", "llm experience", "ai projects", "gemini experience"],
    ar: ["خبرته في الذكاء الاصطناعي", "خبرة الذكاء الاصطناعي", "خبرة generative ai", "مشاريع الذكاء الاصطناعي", "خبرته في جيمناي"],
  },
  services: {
    en: ["services can he provide", "what can he build", "hire him for", "freelance services", "what services"],
    ar: ["الخدمات التي يقدمها", "يقدر يبني ايه", "اقدر اوظفه في ايه", "خدمات العمل الحر", "ماذا يستطيع ان يقدم"],
  },
  career: {
    en: ["what role is he looking", "career goals", "which roles", "job preferences", "what roles can he apply"],
    ar: ["الوظائف المناسبة له", "الوظائف التي يستهدفها", "مجال عمله", "تفضيلاته الوظيفية", "يشتغل ايه"],
  },
  graduationProject: {
    en: ["graduation project", "his capstone", "crime prediction system"],
    ar: ["مشروع تخرجه", "مشروع التخرج", "نظام التنبؤ بالجرائم"],
  },
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

export function getPreparedRabeaAnswer(question: string, preferredLanguage: Language) {
  const query = normalize(question);
  const language: Language = /[\u0600-\u06FF]/.test(question) ? "ar" : preferredLanguage;

  const answerFromFaq = getInstantFaqAnswer(question);
  if (answerFromFaq) return answerFromFaq;

  const project = verifiedProjects.find((item) =>
    [item.name, item.nameAr].some((name) => name && normalize(name).length >= 3 && query.includes(normalize(name))),
  );
  if (project) return projectAnswer(project, language);

  const selected = Object.entries(phraseSignals)
    .filter(([, signals]) => signals[language].some((phrase) => query.includes(normalize(phrase))))
    .map(([id]) => id)
    .slice(0, 2);
  if (!selected.length) {
    const subjectTerms = language === "ar"
      ? ["ربيع", "هو", "عنده", "له", "بتاعه", "انت", "بتشتغل"]
      : ["rabea", "he", "his", "him", "you", "your"];
    const aboutRabea = subjectTerms.some((term) => query.split(" ").includes(normalize(term)));
    if (!aboutRabea) return undefined;

    const hasAny = (terms: string[]) => terms.some((term) => query.includes(normalize(term)));
    if (hasAny(["certificate", "certification", "certified", "aws", "شهادة", "شهادات", "اعتماد"])) selected.push("certifications");
    if (hasAny(["contact", "email", "linkedin", "github", "reach", "تواصل", "بريد", "لينكد", "حساب"])) selected.push("contact");
    if (hasAny(["available", "availability", "hiring", "job", "وظيفة", "متاح", "عمل"])) selected.push("availability");
    if (hasAny(["education", "degree", "university", "study", "bis", "تعليم", "دراسة", "مؤهل", "جامعة"])) selected.push("education");
    if (hasAny(["training", "course", "diploma", "nti", "depi", "meta", "تدريب", "دورة", "كورسات", "دبلوم"])) selected.push("training");
    if (hasAny(["experience", "career", "internship", "years", "worked", "خبرة", "خبرات", "سنين", "سنوات", "اشتغل"])) selected.push("experience");
    if (hasAny(["artificial intelligence", "generative ai", "llm", "gemini", "n8n", "ذكاء اصطناعي", "ذكاء", "جيمناي"])) selected.push("ai");
    if (hasAny(["cloud", "devops", "aws", "docker", "kubernetes", "terraform", "سحابة", "كلاود", "ديف اوبس"])) selected.push("cloud");
    if (hasAny(["frontend", "front end", "react", "next.js", "nextjs", "tailwind", "واجهة امامية", "فرونت"])) selected.push("frontend");
    if (hasAny(["backend", "back end", "node.js", "nodejs", "express", "mongodb", "mysql", "backend", "باك اند", "قواعد بيانات"])) selected.push("backend");
    if (hasAny(["skill", "technology", "technologies", "tech stack", "tools", "مهارة", "مهارات", "تقنيات", "ستاك"])) selected.push("skills");
    if (hasAny(["project", "projects", "built", "portfolio", "مشروع", "مشاريع", "مشروعات", "اعمال"])) selected.push("projects");
    if (hasAny(["services", "hire", "freelance", "build for me", "خدمات", "توظيف", "العمل الحر"])) selected.push("services");
  }
  const uniqueSelected = [...new Set(selected)].slice(0, 2);
  if (!uniqueSelected.length) return undefined;

  return uniqueSelected
    .map((id) => rabeaAiQuickAnswers[language][id as keyof (typeof rabeaAiQuickAnswers)[typeof language]])
    .filter(Boolean)
    .join("\n\n---\n\n");
}
