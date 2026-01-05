import HomeHero from "./home/HomeHero";
import HomeServices from "./home/HomeServices";
import HomeAbout from "./home/HomeAbout";
import StatsSection from "./home/StatsSection";
import Homestats from "./home/Homestats";
import HomeStack from "./home/HomeStack";
import HomeIndustries from "./home/HomeIndustries";
import HomeConnect from "./home/HomeConnect"



export default function Home() {
  return (
    <div >
      <HomeHero />
      <StatsSection/>
            <Homestats />
                   <HomeAbout />
                   <HomeStack/>
      <HomeServices />
      <HomeIndustries/>
      <HomeConnect/>



    </div>
  );
}
