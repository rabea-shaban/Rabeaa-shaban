"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  Bot,
  BriefcaseBusiness,
  Check,
  CircleHelp,
  Code2,
  Copy,
  GraduationCap,
  Layers3,
  LoaderCircle,
  Mail,
  MessageSquareText,
  Send,
  Trash2,
  UserRound,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { useSettings } from "@/context/SettingsContext";
import { getPreparedRabeaAnswer, rabeaAiQuickAnswers, rabeaAiSuggestions } from "@/lib/rabea-ai/quick-answers";

const LIMIT = 1200;
const getCurrentTimestamp = () => Date.now();

const suggestionIcons = {
  user: UserRound,
  code: Code2,
  layers: Layers3,
  briefcase: BriefcaseBusiness,
  education: GraduationCap,
  award: Award,
  mail: Mail,
};

function safeLink(value) {
  try {
    const url = new URL(value);
    return ["https:", "mailto:"].includes(url.protocol) ? url.href : null;
  } catch {
    return null;
  }
}

function inlineMarkdown(text, keyPrefix) {
  const chunks = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\)|https?:\/\/[^\s<>]+)/g);
  return chunks.map((chunk, index) => {
    const key = `${keyPrefix}-${index}`;
    const linked = chunk.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    const bare = chunk.match(/^(https?:\/\/[^\s<>]+)$/);
    if (linked || bare) {
      const label = linked?.[1] || bare?.[1];
      const href = safeLink(linked?.[2] || bare?.[1]);
      if (href) return <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="break-all text-primary underline underline-offset-2">{label}</a>;
    }
    if (chunk.startsWith("**") && chunk.endsWith("**")) return <strong key={key}>{chunk.slice(2, -2)}</strong>;
    return chunk;
  });
}

function MessageContent({ text }) {
  const lines = text.split("\n");
  return (
    <div className="space-y-1.5">
      {lines.map((line, index) => {
        const cleanLine = line.replace(/^\s*[-*]\s+/, "");
        const isList = /^\s*[-*]\s+/.test(line);
        const content = inlineMarkdown(cleanLine, `line-${index}`);
        return isList
          ? <div key={index} className="flex gap-2"><span aria-hidden="true">•</span><span>{content}</span></div>
          : <p key={index} className="min-h-4">{content}</p>;
      })}
    </div>
  );
}

function newId() {
  return window.crypto?.randomUUID?.() || "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = Math.random() * 16 | 0;
    return (character === "x" ? random : (random & 0x3 | 0x8)).toString(16);
  });
}

function formatTime(value, isArabic) {
  return new Intl.DateTimeFormat(isArabic ? "ar-EG" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function RabeaAIChatWindow({ onClose, onMinimize, open }) {
  const { settings } = useSettings();
  const isArabic = settings.language === "ar";
  const copy = isArabic ? {
    title: "ربيع AI",
    subtitle: "مساعدك للتعرّف على خبرة ربيع ومشروعاته",
    online: "متصل",
    welcome: "أهلًا! أنا مساعد ربيع الذكي.",
    welcomeDetails: "اسألني عن خلفيته المهنية ومهاراته ومشروعاته وشهاداته. أقدر أساعدك تكتشف المناسب لك بسرعة.",
    welcomeTime: "الآن",
    suggestions: "أسئلة مقترحة",
    viewAll: "عرض الكل",
    viewLess: "عرض أقل",
    clear: "مسح المحادثة",
    close: "إغلاق المحادثة",
    placeholder: "اسأل عن ربيع...",
    send: "إرسال",
    thinking: "يكتب الآن",
    tooLong: "الرسالة طويلة جدًا.",
    requestError: "تعذر إرسال الرسالة الآن. حاول مرة أخرى بعد قليل.",
    serviceError: "المساعد غير متاح الآن. يرجى المحاولة لاحقًا.",
    copy: "نسخ الإجابة",
    copied: "تم النسخ",
    charCount: "حرف",
    enterHint: "Enter للإرسال · Shift + Enter لسطر جديد",
    assistant: "مساعد ربيع",
    sideEyebrow: "مساعد الملف المهني بالذكاء الاصطناعي",
    sideTitle: "اسأل ربيع AI",
    sideDescription: "دليلك للتعرّف على خبرة ربيع ومشروعاته ومهاراته وإنجازاته.",
    sideBadge: "Rabea AI Assistant",
    sidebarLinks: [
      { href: "/projects", icon: Zap, title: "تعرّف على أعمالي", description: "المشروعات والخبرة والأثر" },
      { href: "/about", icon: Layers3, title: "اكتشف مهاراتي", description: "التقنيات والأدوات التي أستخدمها" },
      { href: "/certificates", icon: Award, title: "شاهد شهاداتي", description: "اعتمادات AWS وMeta وغيرها" },
      { href: "/contact", icon: UsersRound, title: "فرص التعاون", description: "التواصل والعمل معًا" },
    ],
  } : {
    title: "Rabea AI",
    subtitle: "Explore Rabea’s professional journey",
    online: "Online",
    welcome: "Hello! 👋 I’m Rabea’s AI portfolio assistant.",
    welcomeDetails: "I can help you explore his professional background, projects, technical skills, certifications, and experience.",
    welcomeTime: "Now",
    suggestions: "Suggested questions",
    viewAll: "View all",
    viewLess: "View less",
    clear: "Clear chat",
    close: "Close chat",
    placeholder: "Ask anything about Rabea...",
    send: "Send message",
    thinking: "Writing",
    tooLong: "That message is too long.",
    requestError: "Your message could not be sent. Please try again shortly.",
    serviceError: "The assistant is unavailable right now. Please try again later.",
    copy: "Copy answer",
    copied: "Copied",
    charCount: "characters",
    enterHint: "Enter to send · Shift + Enter for a new line",
    assistant: "Rabea’s AI assistant",
    sideEyebrow: "AI PORTFOLIO ASSISTANT",
    sideTitle: "Ask Rabea’s AI",
    sideDescription: "Your guide to Rabea’s professional journey, projects, skills, and achievements.",
    sideBadge: "Rabea AI Assistant",
    sidebarLinks: [
      { href: "/projects", icon: Zap, title: "Get to know my work", description: "Projects, experience, and impact" },
      { href: "/about", icon: Layers3, title: "Explore my skills", description: "Technologies and tools I use" },
      { href: "/certificates", icon: Award, title: "View my certifications", description: "AWS, Meta, and more" },
      { href: "/contact", icon: UsersRound, title: "Find collaboration opportunities", description: "Roles, projects, and contact details" },
    ],
  };

  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [copiedId, setCopiedId] = useState("");
  const [conversationId, setConversationId] = useState(() => typeof window === "undefined" ? "" : newId());
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);
  const language = isArabic ? "ar" : "en";

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    const handleKeys = (event) => {
      if (event.key === "Escape") onMinimize();
      if (event.key === "Tab") {
        const focusable = [...document.querySelectorAll('[role="dialog"] a[href], [role="dialog"] button:not(:disabled), [role="dialog"] textarea:not(:disabled)')];
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeys);
    };
  }, [open, onMinimize]);

  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy, error, showAllSuggestions]);

  async function sendMessage(text = draft, preparedAnswer = "") {
    const content = text.trim();
    if (!content || busy) return;
    if (content.length > LIMIT) {
      setError(copy.tooLong);
      return;
    }

    setError("");
    setDraft("");
    setShowAllSuggestions(false);
    const createdAt = getCurrentTimestamp();
    const userTurn = { role: "user", content, id: newId(), createdAt };
    const assistantTurn = { role: "assistant", content: preparedAnswer, id: newId(), createdAt };
    setMessages((items) => [...items, userTurn, assistantTurn]);

    if (preparedAnswer) return;

    setBusy(true);
    const requestMessages = [...messages, userTurn]
      .filter((message) => message.content?.trim())
      .slice(-10)
      .map(({ role, content: value }) => ({ role, content: value }));
    const aborter = new AbortController();
    abortRef.current = aborter;

    try {
      const response = await fetch("/api/rabea-ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "text/event-stream" },
        body: JSON.stringify({ conversationId, messages: requestMessages }),
        signal: aborter.signal,
      });
      if (!response.ok || !response.body) {
        const payload = await response.json().catch(() => ({}));
        setError(payload.error === "chat_unavailable" || payload.error === "provider_unavailable" ? copy.serviceError : copy.requestError);
        setMessages((items) => items.filter((item) => item.id !== assistantTurn.id));
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";
        for (const eventText of events) {
          const dataLine = eventText.split("\n").find((line) => line.startsWith("data: "));
          if (!dataLine) continue;
          const event = JSON.parse(dataLine.slice(6));
          if (event.type === "start" && event.conversationId) setConversationId(event.conversationId);
          if (event.type === "delta") {
            setMessages((items) => items.map((item) => item.id === assistantTurn.id ? { ...item, content: item.content + event.text } : item));
          }
          if (event.type === "error") setError(copy.serviceError);
        }
        if (done) break;
      }
    } catch (requestError) {
      if (requestError.name !== "AbortError") setError(copy.requestError);
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  function askSuggested(suggestion, responseLanguage = language) {
    const question = suggestion.question[responseLanguage];
    const answer = getPreparedRabeaAnswer(question, responseLanguage)
      || rabeaAiQuickAnswers[responseLanguage][suggestion.id];
    sendMessage(question, answer);
  }

  function sendDraft() {
    const cleanDraft = draft.trim();
    const preparedAnswer = getPreparedRabeaAnswer(cleanDraft, language);
    if (preparedAnswer) {
      sendMessage(cleanDraft, preparedAnswer);
      return;
    }
    sendMessage(cleanDraft);
  }

  function clearConversation() {
    abortRef.current?.abort();
    setMessages([]);
    setError("");
    setBusy(false);
    setShowAllSuggestions(false);
    setConversationId(newId());
    inputRef.current?.focus();
  }

  async function copyAnswer(message) {
    try {
      await navigator.clipboard.writeText(message.content);
      setCopiedId(message.id);
      window.setTimeout(() => setCopiedId(""), 1400);
    } catch {
      setError(isArabic ? "تعذر نسخ الإجابة من المتصفح." : "Could not copy the answer from this browser.");
    }
  }

  const visibleSuggestions = showAllSuggestions ? rabeaAiSuggestions : rabeaAiSuggestions.slice(0, messages.length ? 2 : 5);

  return (
    <div
      className={`${open ? "flex" : "hidden"} fixed inset-0 z-[80] items-center justify-center bg-black/75 p-0 backdrop-blur-sm md:p-4`}
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-labelledby="rabea-ai-title"
        dir="ltr"
        className="flex h-[100dvh] w-full max-w-[1320px] overflow-hidden border border-border/70 bg-background text-foreground shadow-2xl md:h-[min(900px,calc(100dvh-2rem))] md:rounded-[30px]"
      >
        <aside
          dir={isArabic ? "rtl" : "ltr"}
          className="relative hidden w-[32%] min-w-[300px] shrink-0 flex-col overflow-hidden border-r border-border/70 bg-gradient-to-br from-card via-card to-primary/10 p-7 lg:flex xl:p-8"
        >
          <div className="flex items-center justify-center gap-3 text-[11px] font-bold tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            <span>{copy.sideEyebrow}</span>
            <span className="h-px w-8 bg-border" />
          </div>
          <h1 className="mt-5 text-center font-display text-3xl font-bold leading-tight xl:text-4xl">{copy.sideTitle}</h1>
          <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">{copy.sideDescription}</p>

          <div className="relative mx-auto my-7 flex h-48 w-48 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/20 xl:h-52 xl:w-52">
            <span className="absolute inset-3 rounded-full border border-primary/15" />
            <Image src="/rabea-ai-robot.png" alt="" aria-hidden="true" width={1024} height={1024} priority className="relative z-10 h-52 w-52 object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.22)] xl:h-56 xl:w-56" />
          </div>

          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-xs font-semibold text-muted-foreground">
            <Bot className="h-3.5 w-3.5 text-primary" />
            {copy.sideBadge}
          </div>

          <nav aria-label={isArabic ? "استكشف الموقع" : "Explore the portfolio"} className="mt-auto space-y-2.5">
            {copy.sidebarLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="group flex items-center gap-3 rounded-2xl border border-border/60 bg-background/35 p-3 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-tight">{item.title}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{item.description}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col" dir={isArabic ? "rtl" : "ltr"}>
          <header dir="ltr" className="flex shrink-0 items-center gap-3 border-b border-border/70 bg-card/70 px-4 py-3.5 sm:px-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary/10 shadow-sm"><Image src="/rabea-ai-robot.png" alt="" aria-hidden="true" width={1024} height={1024} className="h-full w-full object-contain" /></div>
            <div className="min-w-0 flex-1" dir={isArabic ? "rtl" : "ltr"}>
              <div className={`flex items-center gap-2 ${isArabic ? "justify-start" : "justify-start"}`}>
                <h2 id="rabea-ai-title" className="truncate font-bold">{copy.title}</h2>
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" aria-label={copy.online} title={copy.online} />
              </div>
              <p className="truncate text-xs text-muted-foreground">{copy.subtitle}</p>
            </div>
            <button type="button" onClick={clearConversation} className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-background/40 px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:px-4 sm:text-sm" aria-label={copy.clear} title={copy.clear}>
              <Trash2 className="h-4 w-4" /><span className="hidden sm:inline">{copy.clear}</span>
            </button>
            <button type="button" onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={copy.close} title={copy.close}>
              <X className="h-5 w-5" />
            </button>
          </header>

          <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 sm:px-6 sm:py-6" aria-live="polite" aria-relevant="additions text">
            <div className={`flex items-start gap-3 ${isArabic ? "flex-row" : "flex-row"}`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/25 bg-primary/10"><Image src="/rabea-ai-robot.png" alt="" aria-hidden="true" width={1024} height={1024} className="h-full w-full object-contain" /></div>
              <div className="max-w-[min(760px,92%)] rounded-2xl border border-border/70 bg-card/80 px-5 py-4 text-sm leading-relaxed shadow-sm sm:px-6 sm:py-5">
                <p className="font-semibold">{copy.welcome}</p>
                <p className="mt-3 text-muted-foreground">{copy.welcomeDetails}</p>
                <span className="mt-4 block text-end text-[11px] text-muted-foreground">{copy.welcomeTime}</span>
              </div>
            </div>

            <section className="mb-6 mt-6" aria-label={copy.suggestions}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground"><CircleHelp className="h-4 w-4 text-primary" />{copy.suggestions}</h3>
                <button type="button" onClick={() => setShowAllSuggestions((value) => !value)} className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {showAllSuggestions ? copy.viewLess : copy.viewAll}<ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {visibleSuggestions.map((suggestion) => {
                  const Icon = suggestionIcons[suggestion.icon];
                  return (
                    <button key={suggestion.id} type="button" disabled={busy} onClick={() => askSuggested(suggestion)} className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3.5 py-2.5 text-start text-xs font-semibold transition-colors hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm">
                      <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{suggestion.question[language]}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="space-y-5 pb-2">
              {messages.map((message) => {
                const isUser = message.role === "user";
                const rowAlignment = isUser ? (isArabic ? "justify-start" : "justify-end") : (isArabic ? "justify-end" : "justify-start");
                return (
                  <div key={message.id} className={`flex items-start gap-3 ${rowAlignment}`}>
                    {!isUser && <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-primary/25 bg-primary/10"><Image src="/rabea-ai-robot.png" alt="" aria-hidden="true" width={1024} height={1024} className="h-full w-full object-contain" /></div>}
                    <article className={`w-fit max-w-[min(760px,88%)] rounded-2xl px-4 py-3.5 text-sm leading-relaxed sm:px-5 sm:py-4 ${isUser ? "bg-primary text-primary-foreground" : "border border-border/70 bg-card/80 shadow-sm"}`}>
                      {!isUser && (
                        <div className="mb-3 flex items-center justify-between gap-4 border-b border-border/50 pb-2.5">
                          <div className="flex min-w-0 items-center gap-2 font-semibold"><Bot className="h-4 w-4 shrink-0 text-primary" /><span className="truncate">{copy.assistant}</span></div>
                          {message.content && (
                            <button type="button" onClick={() => copyAnswer(message)} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/70 px-2.5 py-1.5 text-[11px] font-semibold text-muted-foreground hover:bg-muted hover:text-foreground" aria-label={copiedId === message.id ? copy.copied : copy.copy}>
                              {copiedId === message.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                              <span className="hidden sm:inline">{copiedId === message.id ? copy.copied : copy.copy}</span>
                            </button>
                          )}
                        </div>
                      )}
                      {message.content
                        ? <MessageContent text={message.content} />
                        : busy && <span className="flex items-center gap-2 text-muted-foreground"><LoaderCircle className="h-4 w-4 animate-spin" />{copy.thinking}</span>}
                      <time className={`mt-3 block text-[10px] ${isUser ? "text-end text-primary-foreground/70" : "text-end text-muted-foreground"}`}>{formatTime(message.createdAt, isArabic)}</time>
                    </article>
                    {isUser && <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/70 bg-muted text-muted-foreground"><UserRound className="h-5 w-5" /></div>}
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={(event) => { event.preventDefault(); sendDraft(); }} className="shrink-0 border-t border-border/70 bg-card/75 p-3 sm:p-5">
            {error && <p role="alert" className="mb-2 px-2 text-xs text-destructive">{error}</p>}
            <div className="flex items-end gap-2 rounded-2xl border border-input bg-background p-2.5 shadow-inner focus-within:ring-2 focus-within:ring-ring/40 sm:p-3">
              <MessageSquareText className="mb-2 ml-1 h-5 w-5 shrink-0 text-primary/80" aria-hidden="true" />
              <label className="sr-only" htmlFor="rabea-ai-input">{copy.placeholder}</label>
              <textarea
                ref={inputRef}
                id="rabea-ai-input"
                value={draft}
                onChange={(event) => { setDraft(event.target.value); setError(""); }}
                onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); sendDraft(); } }}
                placeholder={copy.placeholder}
                maxLength={LIMIT}
                rows={1}
                disabled={busy}
                className="max-h-28 min-h-10 flex-1 resize-y bg-transparent px-2 py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-60"
              />
              <button type="submit" disabled={busy || !draft.trim()} aria-label={copy.send} title={copy.send} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45">
                {busy ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              </button>
            </div>
            <div className="flex items-center justify-between px-2 pt-2 text-[10px] text-muted-foreground"><span>{copy.enterHint}</span><span>{draft.length}/{LIMIT} {copy.charCount}</span></div>
          </form>
        </div>
      </section>
    </div>
  );
}
