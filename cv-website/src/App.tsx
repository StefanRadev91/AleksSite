import { AppShell } from '@mantine/core'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { PortfolioSection } from './components/PortfolioSection'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div style={{ width: '100vw', overflowX: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppShell style={{ width: '100%', maxWidth: '100vw', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <BlogSection />
        </main>
        <Footer />
      </AppShell>
    </div>
  )
}

export default App
