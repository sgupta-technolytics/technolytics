import BlueCube from "@/components/BlueCube";
import HomeHero from "./home/HomeHero";
import HomeServices from "./home/HomeServices";
import HomeAbout from "./home/HomeAbout";


export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero + Cube */}
      <section className="h-screen w-full flex items-center justify-center relative">
        <BlueCube />
        <div className="absolute top-0 left-0 w-full h-full">
          <HomeHero />
        </div>
      </section>

      {/* Additional homepage sections */}
      <HomeServices />
      <HomeAbout />
    </div>
  );
}
