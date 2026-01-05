import HomeHero from "./home/HomeHero";
import HomeServices from "./home/HomeServices";
import HomeAbout from "./home/HomeAbout";
import StatsSection from "./home/StatsSection";
import Homestats from "./home/Homestats";
import HomeStack from "./home/HomeStack";



export default function Home() {
  return (
    <div className="bg-[#030712] text-white">
      <HomeHero />
      <StatsSection/>
            <Homestats />
                   <HomeAbout />
                   <HomeStack/>
      <HomeServices />



    </div>
  );
}
