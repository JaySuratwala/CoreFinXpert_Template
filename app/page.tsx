import Image from "next/image";
import { NavbarDemo } from "./nav";
import { HeroParallaxDemo } from "./heroParall";
import { TabsDemo } from "./tabs";
import { CanvasRevealEffectDemo } from "./canvas-reveal-effect";
import { BackgroundBeamsDemo } from "./contactUs";
import { AnimatedTooltipPreview } from "./social";


export default function Home() {
  return (
    <>
      <NavbarDemo />
      <main>
        <HeroParallaxDemo />
        <TabsDemo />
        <CanvasRevealEffectDemo/>
      <BackgroundBeamsDemo/>
      </main>
      <AnimatedTooltipPreview/>
    </>
  );
}
