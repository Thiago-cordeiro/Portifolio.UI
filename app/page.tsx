
import Image from "next/image";
import FooterDemo from "./sections/footer";
import HomeSection from "./sections/home";
import { Projects } from "./sections/projects";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HomeSection></HomeSection>
      <Projects></Projects>
      <FooterDemo></FooterDemo>
    </div>
  );
}
