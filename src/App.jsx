import { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Header from './components/Header/Header'
import Home from './pages/Home'
import Vozm from './pages/Vozm'
import Us from './pages/Us'
import Footer from './components/Footer/Footer'
import GMain2 from './components/GaleryMain/GMain2'
import GMain3 from './components/GaleryMain/GMain3'
import './i18n'
import Sert from './components/Serts/Sert'
import NotFound from './components/NotFound/NotFound'

import WhatsAppWidget from './components/WhatsAppWidget/WhatsAppWidget'
import StickyContact from './components/StickyContact/StickyContact'
import Articles from './pages/Articles'

function App() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Detect language prefix from route path
    let pathLang = 'ru';
    let cleanPath = pathname;
    if (pathname.startsWith('/en')) {
      pathLang = 'en';
      cleanPath = pathname.substring(3) || '/';
    } else if (pathname.startsWith('/uz')) {
      pathLang = 'uz';
      cleanPath = pathname.substring(3) || '/';
    }

    const supportedLangs = ['ru', 'en', 'uz'];
    const currentI18nLang = (i18n.language || 'ru').split('-')[0].toLowerCase();
    const activeLang = supportedLangs.includes(currentI18nLang) ? currentI18nLang : 'ru';

    // If path lang matches active language state, do nothing
    if (pathLang === activeLang) {
      return;
    }

    // Auto-redirect if URL doesn't have lang prefix but active language state is non-Russian
    if (pathLang === 'ru' && activeLang !== 'ru') {
      navigate(`/${activeLang}${cleanPath === '/' ? '' : cleanPath}`, { replace: true });
    } else {
      // User directly visited a language route, update active translation context
      i18n.changeLanguage(pathLang);
    }
  }, [pathname, i18n.language, navigate]);

  return (
    <>
      <ScrollToElement />
      <Header />
      <main className="main-content">
        <Routes>
          {/* Default Paths (Russian) */}
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Vozm />} />
          <Route path='/about' element={<Us />} />
          <Route path='/sertificates' element={<Sert />} />
          <Route path='/video' element={<GMain2 />} />
          <Route path='/img' element={<GMain3 />} />
          <Route path='/technology' element={<Articles />} />
          <Route path='/technology/:id' element={<Articles />} />

          {/* English Paths */}
          <Route path='/en'>
            <Route index element={<Home />} />
            <Route path='products' element={<Vozm />} />
            <Route path='about' element={<Us />} />
            <Route path='sertificates' element={<Sert />} />
            <Route path='video' element={<GMain2 />} />
            <Route path='img' element={<GMain3 />} />
            <Route path='technology' element={<Articles />} />
            <Route path='technology/:id' element={<Articles />} />
          </Route>

          {/* Uzbek Paths */}
          <Route path='/uz'>
            <Route index element={<Home />} />
            <Route path='products' element={<Vozm />} />
            <Route path='about' element={<Us />} />
            <Route path='sertificates' element={<Sert />} />
            <Route path='video' element={<GMain2 />} />
            <Route path='img' element={<GMain3 />} />
            <Route path='technology' element={<Articles />} />
            <Route path='technology/:id' element={<Articles />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <StickyContact />
    </>
  )
}

function ScrollToElement() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Сначала прокрутка в начало
    window.scrollTo(0, 0)

    // Log visit to analytics
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5001";
    fetch(`${apiUrl}/api/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ page: pathname })
    }).catch(err => console.error('Analytics error:', err));

    if (hash) {
      const id = hash.replace('#', '')
      // Немного задержим, чтобы DOM успел отрендериться
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [pathname, hash])

  return null
}
export default App
