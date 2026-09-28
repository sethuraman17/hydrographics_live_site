import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AboutPage, ApplicationsPage, ContactPage, HomePage, NotFound, ProductLanding, ProjectDetailPage, ProjectsPage, TechnologyPage } from "@/pages"

function RouteContent() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  return <>
    <Navbar />
    <AnimatePresence mode="wait" initial={false}>
      <motion.main key={location.pathname} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductLanding />} />
          <Route path="/products/:category" element={<ProductLanding />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/applications" element={<ApplicationsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
    <Footer />
  </>
}

export function App() {
  return <MotionConfig reducedMotion="user"><BrowserRouter><RouteContent /></BrowserRouter></MotionConfig>
}

export default App
