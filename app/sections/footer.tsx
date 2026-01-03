"use client";

import {
    Twitter,
    Linkedin,
    Github,
    Mail,
    NotepadTextDashed,
    ChessKing,
} from "lucide-react";
import { Footer } from "../../components/footerComponent";

export default function FooterDemo() {
    const socialLinks = [
        {
            icon: <Linkedin className="w-6 h-6" />,
            href: "https://linkedin.com",
            label: "LinkedIn",
        },
        {
            icon: <Github className="w-6 h-6" />,
            href: "https://github.com",
            label: "GitHub",
        },
        {
            icon: <Mail className="w-6 h-6" />,
            href: "mailto:contact@resumegpt.com",
            label: "Email",
        },
    ];

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "Skills", href: "/" },
        { label: "Projects", href: "/" },
        { label: "Contacts", href: "/" },
    ];

    return (
        <Footer
            brandName="Thiago Cordeiro"
            brandDescription="Desenvolvedor Full Stack | NEXT JS | REACT | NODE JS | JAVASCRIPT | TYPESCRIPT | JAVA | SPRING BOOT"
            socialLinks={socialLinks}
            navLinks={navLinks}
            creatorName="Thiago Cordeiro"
            creatorUrl="https://github.com/thiago-cordeiro"
            brandIcon={<ChessKing className="w-8 sm:w-10 md:w-14 h-8 sm:h-10 md:h-14 text-background drop-shadow-lg" />}
        />
    );
}