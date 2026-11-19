"use client";

import { lazy, Suspense, useEffect, useRef, useSyncExternalStore, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useSettings } from "@/context/SettingsContext";

const ChatWindow = lazy(() => import("./RabeaAIChatWindow"));
const SEEN_EVENT = "rabea-ai-seen-change";

function getSeenState() {
  try { return window.localStorage.getItem("rabea-ai-seen") === "true"; }
  catch { return false; }
}

function subscribeToSeenState(onChange) {
  window.addEventListener(SEEN_EVENT, onChange);
  return () => window.removeEventListener(SEEN_EVENT, onChange);
}

export default function RabeaAIChat() {
  const { settings } = useSettings();
  const [open, setOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);
  const launcherRef = useRef(null);
  const hasSeen = useSyncExternalStore(subscribeToSeenState, getSeenState, () => true);

  useEffect(() => {
    if (!open && initialized) launcherRef.current?.focus();
  }, [open, initialized]);

  const openChat = () => {
    try { window.localStorage.setItem("rabea-ai-seen", "true"); } catch { /* The indicator is optional when storage is disabled. */ }
    window.dispatchEvent(new Event(SEEN_EVENT));
    setInitialized(true);
    setOpen(true);
  };

  const label = settings.language === "ar" ? "اسأل ربيع AI" : "Ask Rabea AI";

  return (
    <>
      {initialized && (
        <Suspense fallback={null}>
          <ChatWindow
            key={sessionKey}
            open={open}
            onMinimize={() => setOpen(false)}
            onClose={() => { setOpen(false); setSessionKey((value) => value + 1); }}
          />
        </Suspense>
      )}
      <div className="group fixed bottom-[9.75rem] left-6 z-[70] flex items-center md:bottom-[5.75rem] md:left-8">
        <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border/60 bg-card/95 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
          {label}
        </span>
        <button
          ref={launcherRef}
          type="button"
          onClick={open ? () => setOpen(false) : openChat}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          aria-label={open ? (settings.language === "ar" ? "إغلاق المحادثة" : "Close chat") : label}
          aria-expanded={open}
          aria-haspopup="dialog"
          title={label}
        >
          {open ? <MessageCircle className="h-6 w-6" /> : <Image src="/rabea-ai-robot.png" alt="" aria-hidden="true" width={1024} height={1024} priority className="h-12 w-12 object-contain" />}
          {!hasSeen && !open && (
            <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-500" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}
