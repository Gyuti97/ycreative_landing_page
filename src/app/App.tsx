import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Proof } from "./components/Proof";
import { Showcase } from "./components/Showcase";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950">
        <Header />
        <main>
          <Hero />
          <Proof />
          <Showcase />
          <Process />
          <CTA />
        </main>
      </div>
    </LanguageProvider>
  );
}