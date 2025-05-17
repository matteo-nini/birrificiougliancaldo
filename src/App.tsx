import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Preloader from './components/ui/Preloader';

const HomePage = lazy(() => import('./pages/HomePage'));
const BeersPage = lazy(() => import('./pages/BeersPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const VisitPage = lazy(() => import('./pages/VisitPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Preloader />
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/beers" element={<BeersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;