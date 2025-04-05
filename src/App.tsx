import Header from '@/components/Header';
import Home from '@/components/Home';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="m-auto flex max-w-[1440px] flex-col items-center justify-center px-16">
      <Header />
      <main className="h-[1000px] mt-[56px]">
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
