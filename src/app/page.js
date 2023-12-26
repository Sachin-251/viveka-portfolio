import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import AchievementsSection from './components/AchievementsSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto">
      <Navbar />
      <div className='container px-12 xl:px-24 lg:px-10 md:px-4 py-4 mt-24 mx-auto'>
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <Experience />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
