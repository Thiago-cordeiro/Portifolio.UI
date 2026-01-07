
"use client";
import Image from "next/image";
import FooterDemo from "./sections/footer";
import HomeSection from "./sections/home";
import { Projects } from "./sections/projects";
import AboutSection from "./sections/about";
import { ContactsSection } from "./sections/contacts";
import { TimelineDemo } from "@/components/timeLineDemo";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeSection></HomeSection>
      <AboutSection></AboutSection>
      <TimelineDemo></TimelineDemo>
      <Projects></Projects>
      <ContactsSection></ContactsSection>
      <FooterDemo></FooterDemo>
    </div>
  );
}
