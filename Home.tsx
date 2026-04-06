import { Hero } from "../components/Hero";
import { LogoStrip } from "../components/LogoStrip";
import { Proof } from "../components/Proof";
import { Platforms } from "../components/Platforms";
import { Showcase } from "../components/Showcase";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <LogoStrip />
      <Proof />
      <Platforms />
      <Showcase />
      <Process />
      <CTA />
    </>
  );
}
