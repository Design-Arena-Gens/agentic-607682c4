import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Innovation } from '@/components/Innovation';
import { Programs } from '@/components/Programs';
import { Stats } from '@/components/Stats';
import { Testimonials } from '@/components/Testimonials';
import { Vision } from '@/components/Vision';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Programs />
      <Innovation />
      <Vision />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
