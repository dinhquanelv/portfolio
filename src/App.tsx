import Header from '@/components/Header';
import Home from '@/components/Home';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto max-w-[1440px] px-4">
        <Header />
        <main className="mt-[56px] w-full">
          <Home />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
