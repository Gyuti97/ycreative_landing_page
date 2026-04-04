import { Hero } from "../components/Hero";
import { Proof } from "../components/Proof";
import { Platforms } from "../components/Platforms";
import { Showcase } from "../components/Showcase";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Platforms />
      <Showcase />
      <Process />
      <CTA />
    </>
  );
}
