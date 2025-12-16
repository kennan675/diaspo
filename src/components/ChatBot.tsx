import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Message = {
    id: string;
    sender: "user" | "bot";
    text: string;
};

const KNOWLEDGE_BASE = [
    {
        keywords: ["hello", "hi", "hey", "start", "greetings"],
        response: "Hello! I'm the DiaspoCare AI assistant. How can I help you support your family's health today?",
    },
    {
        keywords: ["what is diaspocare", "about"],
        response: "DiaspoCare is a healthcare financing platform that allows the African diaspora to directly pay for medication and services for their loved ones back home. We ensure your money is used for care, not cash-outs.",
    },
    {
        keywords: ["pricing", "cost", "fee", "how much"],
        response: "We offer transparent pricing. You pay for the specific services or medications your family needs properly verified by our partners. There are no hidden monthly fees for the basic wallet.",
    },
    {
        keywords: ["hpod", "kiosk", "clinic"],
        response: "Our hPods are telemedicine kiosks equipped with diagnostic tools. They allow your family members to get vitals checked, consult with a doctor remotely, and get instant digital prescriptions in 15 minutes.",
    },
    {
        keywords: ["wallet", "monitor", "money"],
        response: "The Family Health Wallet is where you deposit funds. Providers bill this wallet directly, so you have full visibility of every transaction and peace of mind.",
    },
    {
        keywords: ["contact", "support", "human", "talk to"],
        response: "You can talk to our care coordinators directly via the contact page, or email us at support@diaspocare.com.",
    },
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: "welcome", sender: "bot", text: "Hi there! 👋 I can answer your questions about DiaspoCare immediately. Try asking about 'hPods', 'Pricing', or 'How it works'." },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    // Listen for global open event (e.g. from Navigation)
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-diaspocare-chat", handleOpen);
        return () => window.removeEventListener("open-diaspocare-chat", handleOpen);
    }, []);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            sender: "user",
            text: inputValue.trim(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking time
        setTimeout(() => {
            const lowerInput = userMsg.text.toLowerCase();
            let botResponse = "I'm not sure about that specific detail, but I'd love to connect you with a care coordinator. You can reach us on our Contact page.";

            // Simple keyword matching
            for (const entry of KNOWLEDGE_BASE) {
                if (entry.keywords.some((k) => lowerInput.includes(k))) {
                    botResponse = entry.response;
                    break;
                }
            }

            setMessages((prev) => [
                ...prev,
                { id: (Date.now() + 1).toString(), sender: "bot", text: botResponse },
            ]);
            setIsTyping(false);
        }, 1200);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                        >
                            <Button
                                onClick={() => setIsOpen(true)}
                                className="h-14 w-14 rounded-full bg-gradient-to-r from-[#283692] to-[#007FFF] text-white shadow-xl transition-transform hover:scale-110 hover:shadow-2xl"
                            >
                                <div className="relative">
                                    <MessageCircle className="h-7 w-7" />
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                    </span>
                                </div>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-[400px] overflow-hidden rounded-2xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl sm:bottom-24 sm:right-6 dark:bg-gray-900/95"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#283692] to-[#007FFF] p-4 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">DiaspoCare Assistant</h3>
                                        <p className="text-xs text-blue-100 flex items-center gap-1">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            Online Now
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-white hover:bg-white/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div
                            ref={scrollRef}
                            className="h-[400px] overflow-y-auto bg-gray-50 p-4 space-y-4 dark:bg-gray-800/50 scroll-smooth"
                        >
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex w-full",
                                        msg.sender === "user" ? "justify-end" : "justify-start"
                                    )}
                                >
                                    <div className="flex max-w-[80%] items-end gap-2">
                                        {msg.sender === "bot" && (
                                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                                <Bot className="h-4 w-4 text-blue-600" />
                                            </div>
                                        )}
                                        <div
                                            className={cn(
                                                "rounded-2xl px-4 py-2 text-sm shadow-sm",
                                                msg.sender === "user"
                                                    ? "bg-[#007FFF] text-white rounded-br-none"
                                                    : "bg-white text-gray-800 border border-gray-100 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
                                            )}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex w-full justify-start">
                                    <div className="flex max-w-[80%] items-end gap-2">
                                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                            <Bot className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div className="rounded-2xl rounded-bl-none bg-white p-3 text-gray-400 border border-gray-100 shadow-sm dark:bg-gray-700">
                                            <div className="flex gap-1">
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
                                                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    placeholder="Ask a question..."
                                    className="w-full rounded-full border border-gray-200 bg-gray-50 py-3 pl-4 pr-12 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <Button
                                    size="icon"
                                    className="absolute right-1 h-8 w-8 rounded-full bg-[#007FFF] hover:bg-[#0066cc]"
                                    onClick={handleSend}
                                >
                                    <Send className="h-4 w-4 text-white" />
                                </Button>
                            </div>
                            <div className="mt-2 text-center text-[10px] text-gray-400">
                                Powered by DiaspoCare AI
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
