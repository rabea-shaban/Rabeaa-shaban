'use client';

import React from "react";
import { ShieldCheck, Mail, Trash2, Database, MessageSquare, SlidersHorizontal, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useSEO } from "@/hooks/useSEO";
import { useSettings } from "@/context/SettingsContext";

const PrivacyView = () => {
  const { settings } = useSettings();
  const isAr = settings.language === "ar";
  const lastUpdated = isAr ? "12 نوفمبر 2026" : "November 12, 2026";

  useSEO({
    title: isAr
      ? "سياسة الخصوصية وحذف البيانات | ربيع شعبان"
      : "Privacy Policy & Data Deletion | Rabea Shaban",
    description: isAr
      ? "سياسة الخصوصية الخاصة بموقع ربيع شعبان وتكامل واتساب للأعمال (WhatsApp Business Cloud API)، بما يشمل نموذج التواصل وتفضيلات المتصفح وتعليمات حذف البيانات."
      : "Privacy Policy for Rabea Shaban's website and WhatsApp Business Cloud API integration, covering contact form submissions, browser preferences, and data deletion instructions.",
  });

  const sections = isAr
    ? [
        {
          icon: ShieldCheck,
          title: "1. نظرة عامة والجهة المسؤولة",
          paragraphs: [
            "توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية المعلومات عند زيارتك لموقع ربيع شعبان (https://www.rabea-shaban.com) أو تواصلك معنا عبر نموذج التواصل أو عبر قنوات WhatsApp Business API المرتبطة بنشاطنا.",
            "نلتزم بجمع الحد الأدنى اللازم من البيانات للرد على استفساراتك وتقديم خدماتنا البرمجية، ولا نقوم ببيع بياناتك أو تأجيرها أو مشاركتها مع وسطاء إعلانات."
          ],
        },
        {
          icon: Mail,
          title: "2. البيانات التي يجمعها الموقع (نموذج التواصل)",
          paragraphs: [
            "عند استخدامك نموذج التواصل في الموقع (/contact)، يتم إرسال البيانات التي تدخلها طوعًا إلى نقطة النهاية (/api/contact) وتشمل:",
          ],
          bullets: [
            "الاسم (Name)",
            "البريد الإلكتروني (Email)",
            "موضوع الرسالة (Subject - اختياري)",
            "نص الرسالة (Message)"
          ],
          note: "تُستخدم هذه البيانات فقط لقراءة استفسارك والرد عليك عبر البريد الإلكتروني (rabea.elzayate@gmail.com) باستخدام مزوّد البريد (SMTP أو Web3Forms)، ولا تُخزَّن في قاعدة بيانات تسويقية.",
        },
        {
          icon: SlidersHorizontal,
          title: "3. تفضيلات المتصفح والتخزين المحلي",
          paragraphs: [
            "يحفظ الموقع تفضيلات العرض الخاصة بك محليًا داخل متصفحك (localStorage تحت المفتاح rabea_portfolio_settings) لتذكر اختيارك في الزيارات التالية، وتشمل:",
          ],
          bullets: [
            "الوضع الليلي/النهاري (Theme)",
            "اللون المميّز (Accent Color) ونمط الأزرار وحجم الخط",
            "اللغة المختارة (العربية أو الإنجليزية) وتفعيل/تعطيل الحركات"
          ],
          note: "تبقى هذه التفضيلات على جهازك فقط ولا تُستخدم لتتبعك عبر مواقع أخرى، ويمكنك مسحها في أي وقت من إعدادات المتصفح.",
        },
        {
          icon: MessageSquare,
          title: "4. بيانات تكامل WhatsApp Business API وخدمة الـ Webhook",
          paragraphs: [
            "عند مراسلتنا عبر أرقام واتساب للأعمال أو اختبار تكامل WhatsApp Cloud API المرتبط بنقطة نهاية الـ Webhook الخاصة بنا (whaths.vercel.app)، قد نستقبل البيانات التقنية التالية التي ترسلها منصة Meta تلقائيًا:",
          ],
          bullets: [
            "رقم هاتف المرسل ومعرّف واتساب (WhatsApp ID) واسم الملف الشخصي إن أتاحته Meta",
            "محتوى الرسالة النصية أو نوع الوسائط الواردة",
            "الطوابع الزمنية وحالات التسليم والقراءة (sent / delivered / read)"
          ],
          note: "تُستخدم هذه البيانات حصرًا لمعالجة الرسائل الواردة والرد عليها والتحقق من عمل التكامل التقني. في المرحلة الحالية تُعالج أحداث الـ Webhook بشكل لحظي وتظهر في سجلات التشغيل التقنية المؤقتة لدى مزوّد الاستضافة (Vercel) دون الاحتفاظ بها في قاعدة بيانات دائمة.",
        },
        {
          icon: Database,
          title: "5. الأطراف الثالثة والاستضافة",
          paragraphs: [
            "يعتمد تشغيل الموقع وخدمة الـ Webhook على مزوّدي بنية تحتية وخدمات موثوقين بالقدر اللازم للتشغيل فقط:",
          ],
          bullets: [
            "Meta Platforms (WhatsApp Business Cloud API) لتوصيل رسائل وإشعارات واتساب",
            "Vercel لاستضافة الموقع ونقطة نهاية الـ Webhook ومعالجة طلبات الشبكة",
            "مزوّد البريد الإلكتروني (SMTP / Web3Forms) لتسليم رسائل نموذج التواصل"
          ],
        },
        {
          icon: Clock,
          title: "6. الاحتفاظ بالبيانات والأمان",
          paragraphs: [
            "تُحفظ مراسلات البريد الإلكتروني أو المحادثات فقط للمدة اللازمة لمتابعة طلبك أو تنفيذ العمل المتفق عليه، وتُدار اتصالات الموقع والـ Webhook عبر بروتوكول HTTPS المشفّر مع تقييد الوصول إلى متغيرات البيئة ومفاتيح الربط.",
          ],
        },
        {
          icon: Trash2,
          title: "7. حقوقك وطلب حذف البيانات (Data Deletion)",
          paragraphs: [
            "يحق لك في أي وقت طلب الاطلاع على بياناتك أو تصحيحها أو حذفها نهائيًا (سواء رسائل البريد عبر نموذج التواصل أو أي بيانات مرتبطة برقم هاتفك في تكامل واتساب).",
          ],
          bullets: [
            "أرسل بريدًا إلكترونيًا إلى: rabea.elzayate@gmail.com",
            "اجعل عنوان الرسالة: طلب حذف بيانات / Data Deletion Request",
            "اذكر البريد الإلكتروني أو رقم الهاتف الذي تواصلت به حتى نتمكن من تحديد السجل وحذفه"
          ],
          note: "سنؤكد استلام طلبك وننفذ الحذف من مراسلاتنا وسجلاتنا الخاضعة لسيطرتنا في أقرب وقت ممكن وبحد أقصى 7 أيام عمل. أما تفضيلات العرض المخزّنة في متصفحك فيمكنك حذفها فورًا بمسح بيانات الموقع من المتصفح.",
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: "1. Overview & Data Controller",
          paragraphs: [
            "This Privacy Policy explains how information is collected, used, and protected when you visit Rabea Shaban's website (https://www.rabea-shaban.com) or communicate with us through our contact form or associated WhatsApp Business API channels.",
            "We collect only the minimum information needed to respond to inquiries and operate our technical services. We never sell, rent, or trade your personal data to advertisers or data brokers."
          ],
        },
        {
          icon: Mail,
          title: "2. Information Collected via the Website Contact Form",
          paragraphs: [
            "When you voluntarily submit the contact form (/contact), the data is sent to our contact endpoint (/api/contact) and includes:",
          ],
          bullets: [
            "Name",
            "Email address",
            "Subject (optional)",
            "Message content"
          ],
          note: "This information is used solely to review and reply to your inquiry via email (rabea.elzayate@gmail.com) through our mail delivery provider (SMTP or Web3Forms). It is not added to marketing lists.",
        },
        {
          icon: SlidersHorizontal,
          title: "3. Browser Preferences (Local Storage)",
          paragraphs: [
            "The website stores display preferences locally in your browser (localStorage under the key rabea_portfolio_settings) to remember your UI choices across visits:",
          ],
          bullets: [
            "Theme mode (light, dark, or system)",
            "Accent color, button style, and font size",
            "Selected language (English or Arabic) and animation preference"
          ],
          note: "These preferences stay on your device, are not used for cross-site tracking, and can be cleared anytime via your browser settings.",
        },
        {
          icon: MessageSquare,
          title: "4. WhatsApp Business API & Webhook Data",
          paragraphs: [
            "When you send messages to our WhatsApp Business number or interact with our WhatsApp Cloud API integration connected to our webhook endpoint (whaths.vercel.app), Meta transmits webhook payloads that may include:",
          ],
          bullets: [
            "Sender phone number, WhatsApp ID, and profile name (when provided by WhatsApp)",
            "Message content or incoming media metadata",
            "Timestamps and message delivery/read status updates"
          ],
          note: "This data is processed strictly to receive, verify, and reply to WhatsApp messages. Currently, webhook events are handled transiently in serverless runtime logs hosted on Vercel and are not persisted in an external database.",
        },
        {
          icon: Database,
          title: "5. Third-Party Infrastructure & Services",
          paragraphs: [
            "Operating the website and WhatsApp webhook relies only on essential infrastructure and communication providers:",
          ],
          bullets: [
            "Meta Platforms (WhatsApp Business Cloud API) to deliver WhatsApp messages and webhook events",
            "Vercel for hosting the website, serverless webhook endpoint, and operational runtime logs",
            "Email transport providers (SMTP / Web3Forms) to deliver contact form messages"
          ],
        },
        {
          icon: Clock,
          title: "6. Data Retention & Security",
          paragraphs: [
            "Contact inquiries and messages are retained only as long as reasonably necessary to respond to your request or deliver requested services. Traffic to the website and webhook is served over HTTPS, and environment credentials are restricted to server configuration.",
          ],
        },
        {
          icon: Trash2,
          title: "7. Your Rights & Data Deletion Instructions",
          paragraphs: [
            "You may request access to, correction of, or permanent deletion of your personal data (including contact form emails or WhatsApp interaction records under our control) at any time:",
          ],
          bullets: [
            "Send an email to: rabea.elzayate@gmail.com",
            "Use the subject line: Data Deletion Request",
            "Include the email address or WhatsApp phone number used so we can locate and remove the relevant records"
          ],
          note: "We will confirm and complete deletion requests for records under our control promptly (within 7 business days). Browser UI preferences can be cleared immediately from your browser's site storage.",
        },
      ];

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className="pt-28 pb-24 relative bg-background overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <SectionHeading
          as="h1"
          badge={isAr ? "الخصوصية وحماية البيانات" : "Privacy & Data Protection"}
          title={isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          watermark={isAr ? "الخصوصية" : "PRIVACY"}
          subtitle={
            isAr
              ? `آخر تحديث: ${lastUpdated} — تغطي موقع rabea-shaban.com وتكامل WhatsApp Business API`
              : `Last updated: ${lastUpdated} — Covers rabea-shaban.com and WhatsApp Business API integration`
          }
        />

        <div className="space-y-6">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <section
                key={idx}
                className="p-6 sm:p-8 rounded-2xl glass-effect border border-border/60 shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold font-display text-foreground">
                    {section.title}
                  </h2>
                </div>

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-muted-foreground">
                    {section.bullets.map((item, bIdx) => (
                      <li key={bIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.note && (
                  <p className="text-sm leading-relaxed text-foreground/90 bg-primary/5 border border-primary/15 rounded-xl p-4">
                    {section.note}
                  </p>
                )}
              </section>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl border border-border/60 bg-card/70 text-center space-y-2">
          <p className="text-sm font-medium text-foreground">
            {isAr ? "للاستفسارات أو طلبات حذف البيانات:" : "For privacy inquiries or data deletion requests:"}
          </p>
          <a
            href="mailto:rabea.elzayate@gmail.com"
            className="text-primary hover:underline font-mono text-sm inline-block"
          >
            rabea.elzayate@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyView;
