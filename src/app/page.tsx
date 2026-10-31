import FaqMarklab from "@/components/sections/marklab/FaqMarklab";
import FinalCta from "@/components/sections/marklab/FinalCta";
import HeroMarklab from "@/components/sections/marklab/HeroMarklab";
import LogoMarquee from "@/components/sections/marklab/LogoMarquee";
import MarklabIntroCards from "@/components/sections/marklab/MarklabIntroCards";
import ProcessTabs from "@/components/sections/marklab/ProcessTabs";
import SmartServices from "@/components/sections/marklab/SmartServices";
import Testimonials from "@/components/sections/marklab/Testimonials";

export default function Home() {
  return (
    <>
      <HeroMarklab />
      <LogoMarquee />
      <MarklabIntroCards />
      <SmartServices />
      <ProcessTabs />
      <Testimonials />
      <FaqMarklab />
      <FinalCta />
    </>
  );
}
