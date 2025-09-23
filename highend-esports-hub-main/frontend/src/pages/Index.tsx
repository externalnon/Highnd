import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Teams from "@/components/Teams";
import News from "@/components/News";
import About from "@/components/About";
import Jobs from "@/components/Jobs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Teams />
        <News />
        <About />
        <Jobs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
