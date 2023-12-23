import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Experience from './components/Experience'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto">
      <Navbar />
      <div className='container px-12 md:px-24 py-4 mt-24 mx-auto'>
        <HeroSection />
        <AboutSection />
        <Experience />
        <EmailSection />
      </div>
      <Footer />
    </main>
  )
}
