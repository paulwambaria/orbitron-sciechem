'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, MessageCircle, Minimize2 } from 'lucide-react';

type Message = { role: 'user' | 'assistant'; content: string };

const QUICK_ACTIONS = [
  'What products do you offer?',
  'I need industrial chemicals — help me choose',
  'I want to place an order',
  'Where are you located and what countries do you deliver to?',
];

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hello! I'm **Orbi**, Orbitron Sciechem's AI assistant.\n\nI can help you find the right chemicals, get product info, and place orders directly via WhatsApp. What can I help you with today?",
};

const WA_LINK_RE = /https:\/\/wa\.me\/[^\s)>\]]+/g;

function WhatsAppIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.852L0 24l6.335-1.51A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.873 0-3.625-.487-5.146-1.339l-.369-.22-3.763.898.944-3.674-.244-.377A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function parseBold(text: string, dark: boolean) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i} className={dark ? 'text-white font-bold' : 'text-neutral-900 font-bold'}>
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}

function MessageContent({ content, isUser }: { content: string; isUser: boolean }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-1 text-[13px] leading-relaxed">
      {lines.map((line, li) => {
        if (!line.trim()) return <div key={li} className="h-1" />;

        const waMatches = Array.from(line.matchAll(WA_LINK_RE));
        if (waMatches.length > 0) {
          const url = waMatches[0][0];
          const before = line.substring(0, line.indexOf(url));
          const after = line.substring(line.indexOf(url) + url.length).trim();
          return (
            <div key={li} className="space-y-1.5">
              {before.trim() && <p className={isUser ? 'text-white' : 'text-neutral-700'}>{parseBold(before.trim(), isUser)}</p>}
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-heading font-bold text-[12px] px-4 py-2 rounded-xl transition-colors shadow-sm"
              >
                <WhatsAppIcon size={14} />
                Open WhatsApp to Place Order
              </a>
              {after && <p className={isUser ? 'text-white' : 'text-neutral-700'}>{parseBold(after, isUser)}</p>}
            </div>
          );
        }

        const trimmed = line.trimStart();
        const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ');
        if (isBullet) {
          return (
            <p key={li} className={`flex gap-2 ${isUser ? 'text-white' : 'text-neutral-700'}`}>
              <span className="shrink-0 mt-[3px] w-1.5 h-1.5 rounded-full bg-current opacity-60 self-start mt-1.5" />
              <span>{parseBold(trimmed.slice(2), isUser)}</span>
            </p>
          );
        }

        return (
          <p key={li} className={isUser ? 'text-white' : 'text-neutral-700'}>
            {parseBold(line, isUser)}
          </p>
        );
      })}
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-1 py-0.5">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
          style={{ animationDelay: `${delay}ms`, animationDuration: '900ms' }}
        />
      ))}
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isLoading, isOpen, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMsg: Message = { role: 'user', content: trimmed };
      const next = [...messages, userMsg];
      setMessages(next);
      setInput('');
      setIsLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages: next.slice(-14).map((m) => ({ role: m.role, content: m.content })),
          }),
        });

        const data = await res.json();
        const reply = data.reply ?? 'Sorry, I had trouble with that. Please contact us on WhatsApp: +254 742 651 823.';

        setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
        if (!isOpen) setHasUnread(true);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content:
              'I\'m having connectivity issues right now. Please reach our team directly:\n\nWhatsApp: https://wa.me/254742651823\n\nOr call **+254 742 651 823**',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, isOpen]
  );

  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send(input);
      }
    },
    [input, send]
  );

  const showQuickActions = messages.length === 1;

  return (
    <>
      {/* ── Chat panel ── */}
      {isOpen && (
        <div
          ref={panelRef}
          className="fixed bottom-[88px] left-4 sm:left-6 z-50 flex flex-col bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden"
          style={{ width: 'min(380px, calc(100vw - 2rem))', height: 'min(540px, calc(100dvh - 120px))' }}
        >
          {/* Header */}
          <div className="shrink-0 bg-[#003B7A] px-4 py-3.5 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <MessageCircle size={18} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold text-white text-sm leading-none mb-0.5">
                Orbi — AI Assistant
              </p>
              <p className="font-sans text-blue-200/70 text-[11px] truncate">
                Orbitron Sciechem Limited
              </p>
            </div>
            <div className="flex items-center gap-1.5 shrink-0 mr-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-sans text-blue-200/60 text-[11px]">Online</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Minimize chat"
              className="text-white/50 hover:text-white transition-colors"
            >
              <Minimize2 size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-neutral-50/80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#003B7A] flex items-center justify-center shrink-0 mb-0.5">
                    <span className="text-white text-[9px] font-black font-heading">OS</span>
                  </div>
                )}
                <div
                  className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 ${
                    msg.role === 'user'
                      ? 'bg-[#003B7A] rounded-br-sm shadow-sm'
                      : 'bg-white border border-neutral-100 shadow-sm rounded-bl-sm'
                  }`}
                >
                  <MessageContent content={msg.content} isUser={msg.role === 'user'} />
                </div>
              </div>
            ))}

            {/* Quick action chips — only before user first speaks */}
            {showQuickActions && (
              <div className="space-y-1.5 pt-1">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action}
                    onClick={() => send(action)}
                    disabled={isLoading}
                    className="w-full text-left text-[12px] font-sans text-blue-700 bg-blue-50 border border-blue-100 hover:bg-blue-100 hover:border-blue-300 rounded-xl px-3.5 py-2 transition-all disabled:opacity-50"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-[#003B7A] flex items-center justify-center shrink-0 mb-0.5">
                  <span className="text-white text-[9px] font-black font-heading">OS</span>
                </div>
                <div className="bg-white border border-neutral-100 shadow-sm rounded-2xl rounded-bl-sm px-4 py-3">
                  <TypingDots />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input row */}
          <div className="shrink-0 px-3 py-3 border-t border-neutral-100 bg-white">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about products, pricing, orders…"
                disabled={isLoading}
                className="flex-1 text-[13px] font-sans text-neutral-700 placeholder-neutral-400 bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all disabled:opacity-50"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="w-10 h-10 bg-[#003B7A] hover:bg-blue-700 disabled:bg-neutral-200 disabled:text-neutral-400 text-white rounded-xl flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={15} />
              </button>
            </div>
            <p className="text-[10px] font-sans text-neutral-400 text-center mt-2">
              Powered by Groq AI &middot; Orbitron Sciechem Ltd
            </p>
          </div>
        </div>
      )}

      {/* ── Trigger button ── */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? 'Close chat' : 'Chat with Orbi'}
        className="fixed bottom-6 left-4 sm:left-6 z-50 flex items-center gap-2.5 bg-[#003B7A] hover:bg-blue-700 text-white rounded-2xl pl-3.5 pr-4 py-3 shadow-lg shadow-blue-900/30 hover:shadow-xl transition-all hover:-translate-y-0.5 group"
      >
        {isOpen ? (
          <X size={18} />
        ) : (
          <div className="relative">
            <MessageCircle size={18} />
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#F58220] rounded-full border-2 border-[#003B7A]" />
            )}
          </div>
        )}
        <span className="font-heading font-bold text-sm leading-none">
          {isOpen ? 'Close' : 'Chat with Orbi'}
        </span>
      </button>
    </>
  );
}
