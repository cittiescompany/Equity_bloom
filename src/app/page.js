import Image from "next/image";
import Navbar from "@/components/core/shared/Navbar";
import Hero from "@/components/core/Home/Hero";
import SecondHero from "@/components/core/Home/SecondHero";
import AppHero from "@/components/core/Home/AppHero";
import RequiredNoAuth from "@/components/core/shared/RequiredNoAuth";

export default function Home() {
  return (
    // <RequiredNoAuth>
      <div className="mx-auto border-4 border-sky-50 ">
        <div className="mb-20">
          <Navbar />
        </div>
        <Hero />
        <SecondHero />
        <AppHero />
      </div>
    //  </RequiredNoAuth>
  );
}
