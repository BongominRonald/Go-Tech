import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ContactModalProvider } from './components/ContactModal.jsx'
import { ThemeProvider } from './components/ThemeContext.jsx'
import { SideRails, PageLoader, ScrollManager, TitleManager, WhatsAppFab } from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import Samples from './pages/Samples.jsx'
import About from './pages/About.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <ContactModalProvider>
        <TitleManager />
        <ScrollManager />
        <PageLoader />
        <SideRails />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/samples" element={<Samples />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </ContactModalProvider>
    </ThemeProvider>
  )
}
