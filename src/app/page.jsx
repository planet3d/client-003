import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
//import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full justify-center items-center">
      <HeroSection/>
    </main>
  );
}
