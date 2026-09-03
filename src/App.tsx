import { lazy, Suspense, useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import ClientLayout from "./app/layout.client";

const HomeClient = lazy(() => import("./app/home.client"));
const AboutPage = lazy(() => import("./app/about/AboutPage"));
const BlogPage = lazy(() => import("./app/blog/BlogPage"));
const SilentCrisisPage = lazy(() => import("./app/blog/silent-crisis/page"));
const CareersClient = lazy(() => import("./app/careers/CareersClient"));
const ContactPage = lazy(() => import("./app/contact/ContactPage"));
const AaruchudarFranchise = lazy(() => import("./app/franchise/AaruchudarFranchise"));
const HICoursesPage = lazy(() => import("./app/hi-courses/HICoursesPage"));
const BillingForm = lazy(() => import("./app/hi-courses/billing-form/page"));
const HIEventsPage = lazy(() => import("./app/hi-events/HIEventsPage"));
const HILabPage = lazy(() => import("./app/hi-labs/HILabPage"));
const Lab1Page = lazy(() => import("./app/hi-labs/lab1/page"));
const Lab2Page = lazy(() => import("./app/hi-labs/lab2/page"));
const Lab3Page = lazy(() => import("./app/hi-labs/lab3/page"));
const Lab4Page = lazy(() => import("./app/hi-labs/lab4/page"));
const Lab5Page = lazy(() => import("./app/hi-labs/lab5/page"));
const Lab6Page = lazy(() => import("./app/hi-labs/lab6/page"));
const Lab7Page = lazy(() => import("./app/hi-labs/lab7/page"));
const Lab8Page = lazy(() => import("./app/hi-labs/lab8/page"));
const HIWorkshopPage = lazy(() => import("./app/hi-workshops/HIWorkshopPage"));
const PsychologicalWorkshopPage = lazy(() => import("./app/hi-workshops/psychological/page"));
const IntellectualWorkshopPage = lazy(() => import("./app/hi-workshops/intellectual/page"));
const InnovativeWorkshopPage = lazy(() => import("./app/hi-workshops/innovative/page"));
const InternshipPage = lazy(() => import("./app/internship/InternshipPage"));
const NeuroLensBands = lazy(() => import("./app/neuro/NeuroLens_Bands"));
const NeuroTechSuitePage = lazy(() => import("./app/neuro/tech-suite/page"));
const NeuroLensPage = lazy(() => import("./app/neuro/lens/page"));
const NeuroBandPage = lazy(() => import("./app/neuro/band/page"));
const PrivacyPage = lazy(() => import("./app/privacy/PrivacyPage"));
const ProductPage = lazy(() => import("./app/productpage/ProductPage"));
const ResearchPage = lazy(() => import("./app/research/ResearchPage"));
const TestimonialsPage = lazy(() => import("./app/testimonials/TestimonialsPage"));
const WebinarTrainingPage = lazy(() => import("./app/webinar-training/page"));
const NotFoundPage = lazy(() => import("./app/NotFound"));

const PAGE_TITLES: Record<string, string> = {
  "/": "Aaruchudar | Human Intelligence, Cognitive Training & Neuroscience Platform",
  "/about": "About Aaruchudar | Human Intelligence Research & Cognitive Training",
  "/blog": "Blog | Aaruchudar",
  "/blog/silent-crisis": "The Silent Crisis | Aaruchudar Blog",
  "/careers": "Careers | Aaruchudar",
  "/contact": "Contact | Aaruchudar",
  "/franchise": "Aaruchudar Franchise Opportunities",
  "/hi-courses": "Human Intelligence Courses | Aaruchudar",
  "/hi-courses/billing-form": "Billing Form | Aaruchudar",
  "/hi-events": "Human Intelligence Events | Aaruchudar",
  "/hi-labs": "Human Intelligence Labs | Aaruchudar",
  "/hi-workshops": "Human Intelligence Workshops | Aaruchudar",
  "/internship": "Internship | Aaruchudar",
  "/neuro": "Neuro Band & Neuro Lens | Aaruchudar",
  "/neuro/tech-suite": "Neuro-Tech Suite | Aaruchudar",
  "/neuro/lens": "Neuro Lens | Aaruchudar",
  "/neuro/band": "Neuro Band | Aaruchudar",
  "/privacy": "Privacy Policy | Aaruchudar",
  "/productpage": "Product | Aaruchudar",
  "/research": "Research | Aaruchudar",
  "/testimonials": "Testimonials | Aaruchudar",
  "/webinar-training": "Webinar & Training Request | Aaruchudar",
};

function ScrollAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const exact = PAGE_TITLES[pathname];
    const labMatch = pathname.match(/^\/hi-labs\/lab(\d+)$/);
    const workshopMatch = pathname.match(
      /^\/hi-workshops\/(psychological|intellectual|innovative)$/,
    );
    document.title =
      exact ||
      (labMatch ? `Lab ${labMatch[1]} | Aaruchudar` : null) ||
      (workshopMatch ? "Workshop | Aaruchudar" : null) ||
      "Aaruchudar | Human Intelligence Platform";
  }, [pathname]);

  return null;
}

function PageFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-slate-400">
      Loading...
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollAndTitle />
      <ClientLayout>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomeClient />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/silent-crisis" element={<SilentCrisisPage />} />
            <Route path="/careers" element={<CareersClient />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/franchise" element={<AaruchudarFranchise />} />
            <Route path="/hi-courses" element={<HICoursesPage />} />
            <Route path="/hi-courses/billing-form" element={<BillingForm />} />
            <Route path="/hi-events" element={<HIEventsPage />} />
            <Route path="/hi-labs" element={<HILabPage />} />
            <Route path="/hi-labs/lab1" element={<Lab1Page />} />
            <Route path="/hi-labs/lab2" element={<Lab2Page />} />
            <Route path="/hi-labs/lab3" element={<Lab3Page />} />
            <Route path="/hi-labs/lab4" element={<Lab4Page />} />
            <Route path="/hi-labs/lab5" element={<Lab5Page />} />
            <Route path="/hi-labs/lab6" element={<Lab6Page />} />
            <Route path="/hi-labs/lab7" element={<Lab7Page />} />
            <Route path="/hi-labs/lab8" element={<Lab8Page />} />
            <Route path="/hi-workshops" element={<HIWorkshopPage />} />
            <Route path="/hi-workshops/psychological" element={<PsychologicalWorkshopPage />} />
            <Route path="/hi-workshops/intellectual" element={<IntellectualWorkshopPage />} />
            <Route path="/hi-workshops/innovative" element={<InnovativeWorkshopPage />} />
            <Route path="/internship" element={<InternshipPage />} />
            <Route path="/neuro" element={<NeuroLensBands />} />
            <Route path="/neuro/tech-suite" element={<NeuroTechSuitePage />} />
            <Route path="/neuro/lens" element={<NeuroLensPage />} />
            <Route path="/neuro/band" element={<NeuroBandPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/productpage" element={<ProductPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/webinar-training" element={<WebinarTrainingPage />} />

            <Route path="/workshop" element={<Navigate to="/hi-workshops" replace />} />
            <Route path="/labs" element={<Navigate to="/hi-labs" replace />} />
            <Route path="/cources" element={<Navigate to="/hi-courses" replace />} />
            <Route path="/services" element={<Navigate to="/" replace />} />
            <Route path="/legal" element={<Navigate to="/privacy" replace />} />
            <Route path="/fee-internship" element={<Navigate to="/internship" replace />} />
            <Route path="/workshopregistration" element={<Navigate to="/hi-workshops" replace />} />
            <Route path="/login" element={<Navigate to="/" replace />} />
            <Route path="/register" element={<Navigate to="/contact" replace />} />
            <Route path="/quiz" element={<Navigate to="/" replace />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ClientLayout>
    </>
  );
}
