import { useState, type FormEvent, type ReactNode } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronRight, Plus } from "lucide-react"
import { HeroSection } from "@/components/home/HeroSection"
import { ProcessIntro } from "@/components/home/ProcessIntro"
import { ProductCategories } from "@/components/home/ProductCategories"
import { CountUp } from "@/components/shared/Animations"
import { MagneticButton } from "@/components/shared/MagneticButton"
import { applications, chemicals, companyValues, films, machines, processSteps, projects, stats } from "@/data/content"

const ease = [0.22, 1, 0.36, 1] as const

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span />{children}</div>
}

function SectionTitle({ eyebrow, title, muted, copy }: { eyebrow: string; title: string; muted?: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}{muted && <><br /><span>{muted}</span></>}</h2>
      </div>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function ImageReveal({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      className={`image-reveal ${className}`}
      initial={reduceMotion ? false : { clipPath: "inset(12% 0 12% 0)", opacity: 0.6 }}
      whileInView={{ clipPath: "inset(0% 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, ease }}
    >
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
    </motion.div>
  )
}

function ArrowLink({ to, children, light = false }: { to: string; children: string; light?: boolean }) {
  return <Link className={`arrow-link ${light ? "arrow-link-light" : ""}`} to={to}>{children}<ArrowUpRight size={15} strokeWidth={1.5} /></Link>
}

function CTASection({ title = "Make your next surface" , accent = "exceptional." }: { title?: string; accent?: string }) {
  return (
    <section className="cta-section">
      <div className="cta-image"><img src="/workshop-interior.webp" alt="Hydra Surface Technology production environment" loading="lazy" /></div>
      <div className="cta-content">
        <Eyebrow>Start a conversation</Eyebrow>
        <h2>{title}<br /><span>{accent}</span></h2>
        <p>Tell us what you’re building. Our technical team will help map the right process, materials and equipment.</p>
        <MagneticButton href="/contact" variant="outline" className="cta-button">Talk to our team <ArrowRight size={15} /></MagneticButton>
      </div>
      <span className="cta-index">HST / 01</span>
    </section>
  )
}

function StatsBand() {
  const metrics = [
    { end: 400, suffix: "+" },
    { end: 15, suffix: "+" },
    { end: 50, suffix: "K+" },
    { end: 30, suffix: "+" },
  ]
  return (
    <section className="stats-band">
      <div className="stats-band-intro"><Eyebrow>Built on consistency</Eyebrow><p>Surface technology<br />that scales with you.</p></div>
      {stats.map((item, index) => <div className="stat-item" key={item.label}><CountUp end={metrics[index].end} suffix={metrics[index].suffix} className="stat-number" /><span className="stat-label">{item.label}</span><span className="stat-note">{item.description}</span><span className="stat-index">0{index + 1}</span></div>)}
    </section>
  )
}

function HomePage() {
  const selectedProjects = projects.slice(0, 3)
  return (
    <>
      <HeroSection />
      <section className="intro-band">
        <div className="intro-label"><Eyebrow>Beyond the surface</Eyebrow><span>01 — 04</span></div>
        <h2>Where material meets<br /><span>imagination.</span></h2>
        <div className="intro-copy"><p>We engineer the complete hydrographic system — the film, chemistry, equipment and expertise behind finishes that follow every contour.</p><ArrowLink to="/technology">Explore the technology</ArrowLink></div>
      </section>
      <ProcessIntro />
      <ProductCategories />
      <section className="applications-preview section-pad">
        <SectionTitle eyebrow="Made to move across forms" title="One process." muted="Infinite applications." copy="A precise, durable finish for the components that define a product — from the cockpit to the factory floor." />
        <div className="application-feature-grid">
          {applications.slice(0, 3).map((item, index) => (
            <Link className={`application-feature application-feature-${index + 1}`} key={item.id} to="/applications">
              <ImageReveal src={item.image} alt={item.title} />
              <div className="application-caption"><span>0{index + 1} / {item.tag}</span><h3>{item.title}</h3><ArrowUpRight size={18} /></div>
            </Link>
          ))}
        </div>
        <div className="feature-bottom-link"><ArrowLink to="/applications">View all applications</ArrowLink></div>
      </section>
      <section className="project-preview section-pad">
        <SectionTitle eyebrow="Selected work / 2023—24" title="Made to be" muted="looked at." copy="Every project starts with an object and a question: what could this surface become?" />
        <div className="project-preview-grid">
          {selectedProjects.map((project, index) => <ProjectTile project={project} index={index} key={project.id} />)}
        </div>
        <div className="feature-bottom-link"><ArrowLink to="/projects">Explore selected projects</ArrowLink></div>
      </section>
      <StatsBand />
      <CTASection title="Let’s define what" accent="comes next." />
    </>
  )
}

function PageHero({ eyebrow, title, accent, intro, image, number }: { eyebrow: string; title: string; accent?: string; intro: string; image: string; number: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero-image"><img src={image} alt="" fetchPriority="high" /></div>
      <div className="page-hero-shade" />
      <div className="page-hero-content">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}{accent && <><br /><span>{accent}</span></>}</h1>
        <p>{intro}</p>
      </div>
      <div className="page-hero-meta"><span>{number}</span><span>HYDRA / SURFACE TECHNOLOGY</span></div>
      <div className="page-hero-scroll"><ArrowDown size={15} /> SCROLL TO EXPLORE</div>
    </section>
  )
}

function ProductLanding() {
  const location = useLocation()
  const selected = location.pathname.split("/").filter(Boolean).at(-1)
  const isAll = !selected || selected === "products"
  const data = {
    films: { eyebrow: "Material library / 01", title: "Patterns in", accent: "motion.", intro: "Precision-printed PVA films, selected for reliable release, fine detail and consistent transfer across complex forms.", image: "/films-collection.webp", titleText: "Hydrographic films", copy: "Our pattern library spans technical carbon weaves, natural grains, stone, metal and custom graphics. Every film is chosen for dependable activation and a clean, repeatable transfer.", points: ["400+ production-ready patterns", "Widths and repeats for varied part sizes", "Custom pattern sourcing and development"] },
    chemicals: { eyebrow: "Process chemistry / 02", title: "Control the", accent: "chemistry.", intro: "A coordinated coating system, formulated to move from preparation through protection with confidence.", image: "/chemicals.webp", titleText: "Chemistry, in balance", copy: "Reliable transfer is a system outcome. Our primers, base coats, activators and clears are selected to work together across a broad range of substrates and production conditions.", points: ["Substrate-specific primers", "Stable activation window", "Gloss, satin and matte protection"] },
    machines: { eyebrow: "Production systems / 03", title: "Built around", accent: "the process.", intro: "Industrial dipping systems designed for repeatable water conditions, clean workflow and production-scale operation.", image: "/equipment-tank.webp", titleText: "Equipment with intent", copy: "From compact work cells to large-format tanks, each system is designed to support predictable transfer conditions, safer handling and efficient movement through the finishing line.", points: ["Stainless steel tank options", "Integrated filtration and overflow", "Production planning and commissioning"] },
    accessories: { eyebrow: "Shop-floor essentials / 04", title: "The details", accent: "matter.", intro: "Purposeful tools and accessories that make a professional hydrographics workflow more precise, repeatable and safe.", image: "/workshop-interior.webp", titleText: "A considered toolkit", copy: "The right accessories keep every stage under control — from accurate film placement to consistent spray application, rinse quality and final inspection.", points: ["Film handling and cutting tools", "Application and spray equipment", "Preparation, inspection and PPE"] },
  }[selected as "films" | "chemicals" | "machines" | "accessories"]

  if (isAll) {
    return <>
      <PageHero eyebrow="The Hydra system / Products" title="Everything in" accent="its place." intro="An integrated surface-finishing system. Materials, chemistry and equipment designed to perform together." image="/films-collection.webp" number="01 / 04" />
      <section className="product-index section-pad"><SectionTitle eyebrow="Explore the system" title="Four disciplines." muted="One result." copy="From selecting a pattern to protecting the finished component, every element has a role in repeatable quality." />
        <div className="product-index-list">
          {[{ name: "Hydrographic Films", meta: "Material library", href: "/products/films", image: "/films-collection.webp" }, { name: "Chemistry & Coatings", meta: "Activators / Primers / Clears", href: "/products/chemicals", image: "/chemicals.webp" }, { name: "Machines & Equipment", meta: "Production systems", href: "/products/machines", image: "/equipment-tank.webp" }, { name: "Accessories", meta: "Tools for the process", href: "/products/accessories", image: "/workshop-interior.webp" }].map((item, i) => <Link to={item.href} className="product-index-row" key={item.href}><span className="product-row-no">0{i + 1}</span><div className="product-row-image"><img src={item.image} alt="" loading="lazy" /></div><div className="product-row-copy"><span>{item.meta}</span><h3>{item.name}</h3></div><ArrowUpRight className="product-row-arrow" size={21} /></Link>)}
        </div>
      </section>
      <CTASection title="The right system" accent="starts here." />
    </>
  }
  if (!data) return <NotFound />

  const rows = selected === "films" ? films.map((item) => ({ name: item.name, type: item.category, description: item.description, spec: `${item.pattern} / ${item.width}` }))
    : selected === "chemicals" ? chemicals.map((item) => ({ name: item.name, type: item.type, description: item.description, spec: item.volume }))
    : selected === "machines" ? machines.map((item) => ({ name: item.name, type: item.type, description: item.description, spec: `${item.capacity} capacity` }))
    : [
      { name: "Precision Film Cutter", type: "Film handling", description: "A stable, clean cutting surface and guided edge for accurate pattern preparation.", spec: "Bench / production" },
      { name: "HVLP Application Kit", type: "Spray equipment", description: "Controlled, even application for activator and finishing coats across part geometries.", spec: "Fine-mist control" },
      { name: "Rinse & Inspection Tools", type: "Finishing", description: "Purposeful tools for a clean post-transfer rinse and reliable quality inspection.", spec: "Workshop grade" },
      { name: "Personal Protection Set", type: "Safety", description: "Essential protective equipment for professional surface-finishing environments.", spec: "PPE essentials" },
    ]

  return <>
    <PageHero eyebrow={data.eyebrow} title={data.title} accent={data.accent} intro={data.intro} image={data.image} number={`0${["films", "chemicals", "machines", "accessories"].indexOf(selected!) + 1} / 04`} />
    <section className="product-story section-pad">
      <ImageReveal src={data.image} alt={data.titleText} className="product-story-image" />
      <div className="product-story-copy"><Eyebrow>Designed as a system</Eyebrow><h2>{data.titleText}</h2><p>{data.copy}</p><ul>{data.points.map((point) => <li key={point}><Check size={14} />{point}</li>)}</ul><ArrowLink to="/contact">Discuss specifications</ArrowLink></div>
    </section>
    <section className="product-specs section-pad"><SectionTitle eyebrow="System components" title="Selected for" muted="repeatability." copy="A focused overview of the technologies available through the Hydra surface system. Tell us about your application for detailed technical guidance." />
      <div className="spec-list">{rows.map((row, index) => <div className="spec-row" key={row.name}><span className="spec-index">0{index + 1}</span><div className="spec-main"><span>{row.type}</span><h3>{row.name}</h3><p>{row.description}</p></div><span className="spec-meta">{row.spec}</span><Plus size={17} className="spec-plus" /></div>)}</div>
    </section>
    <CTASection title="Find the right fit" accent="for your line." />
  </>
}

function TechnologyPage() {
  const [activeStep, setActiveStep] = useState(0)
  const step = processSteps[activeStep]
  return <>
    <PageHero eyebrow="Process intelligence / Technology" title="Precision at" accent="every stage." intro="Hydrographics brings ink, water, surface chemistry and motion into a single controlled transfer — a balance refined one stage at a time." image="/process-water.webp" number="02 / PROCESS" />
    <section className="tech-intro section-pad"><div className="tech-intro-title"><Eyebrow>How the system works</Eyebrow><h2>Eight steps.<br /><span>One seamless finish.</span></h2></div><div className="tech-intro-copy"><p>Each stage prepares the next. Surface condition, water temperature, film release and dip motion all contribute to a result that is both expressive and durable.</p><div className="tech-readout"><span>PROCESS WINDOW</span><strong>CONTROLLED</strong><span>FILM / CHEMISTRY / MOTION</span></div></div></section>
    <section className="process-detail section-pad">
      <div className="process-detail-head"><Eyebrow>Process sequence / 01—08</Eyebrow><span>SELECT A STAGE TO INSPECT</span></div>
      <div className="process-detail-grid">
        <div className="process-step-list">{processSteps.map((item, i) => <button key={item.step} className={activeStep === i ? "active" : ""} onClick={() => setActiveStep(i)}><span>{item.step}</span><strong>{item.title}</strong><ChevronRight size={16} /></button>)}</div>
        <AnimatePresence mode="wait"><motion.div key={step.step} className="process-stage" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease }}>
          <div className="process-stage-image"><img src={step.image} alt={step.title} loading="lazy" /><span className="stage-watermark">{step.step}</span><span className="stage-status"><i /> PROCESS STAGE</span></div>
          <div className="process-stage-content"><div><Eyebrow>{step.duration} / EST. DURATION</Eyebrow><h3>{step.title}</h3><p>{step.description}</p></div><div className="stage-tools"><span>TOOLS & CONTROLS</span><div>{step.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div></div>
        </motion.div></AnimatePresence>
      </div>
      <div className="process-progress"><span style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }} /></div>
    </section>
    <section className="technical-visual"><img src="/technology-diagram.webp" alt="Hydrographic production process engineering diagram" loading="lazy" /><div><Eyebrow>Transfer / system overview</Eyebrow><p>Engineered conditions.<br />Expressive outcomes.</p></div></section>
    <CTASection title="Build a process" accent="that performs." />
  </>
}

function ApplicationsPage() {
  return <>
    <PageHero eyebrow="Where the process goes / Applications" title="Designed for" accent="every contour." intro="From sculpted automotive interiors to demanding industrial housings, hydrographics opens a new design language for complex surfaces." image="/automotive-finish.webp" number="03 / APPLICATIONS" />
    <section className="application-list section-pad">{applications.map((item, index) => <article className={`application-row ${index % 2 ? "reverse" : ""}`} key={item.id}>
      <ImageReveal src={item.image} alt={item.title} className="application-row-image" />
      <div className="application-row-content"><Eyebrow>0{index + 1} / {item.tag}</Eyebrow><h2>{item.title}</h2><span className="application-subtitle">{item.subtitle}</span><p>{item.description}</p><div className="application-items">{item.items.map((part) => <span key={part}>{part}</span>)}</div><ArrowLink to="/contact">Discuss this application</ArrowLink></div>
    </article>)}</section>
    <CTASection title="Have a surface" accent="in mind?" />
  </>
}

function ProjectTile({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return <Link to={`/projects/${project.id}`} className={`project-tile project-tile-${index + 1}`}><ImageReveal src={project.hero} alt={project.title} /><div className="project-tile-info"><span>{project.category} / {project.year}</span><h3>{project.title}</h3><ArrowUpRight size={18} /></div></Link>
}

function ProjectsPage() {
  const [filter, setFilter] = useState("All")
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))]
  const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter)
  return <>
    <PageHero eyebrow="Selected work / Projects" title="The proof is" accent="in the finish." intro="A collection of surfaces transformed through process, patience and a precise eye for detail." image="/gallery-1.webp" number="04 / SELECTED WORK" />
    <section className="projects-section section-pad"><div className="projects-toolbar"><div><Eyebrow>Project archive / 2023—24</Eyebrow><h2>Surfaces, <span>reimagined.</span></h2></div><div className="project-filters" aria-label="Filter projects">{categories.map((item) => <button className={filter === item ? "active" : ""} key={item} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
      <motion.div layout className="projects-grid">{filtered.map((project, index) => <motion.div layout key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, delay: index * 0.04 }}><ProjectTile project={project} index={index % 3} /></motion.div>)}</motion.div>
    </section>
    <CTASection title="Your project could" accent="be next." />
  </>
}

function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)
  if (!project) return <NotFound />
  return <>
    <PageHero eyebrow={`${project.category} / ${project.year} / Selected project`} title={project.title} accent="Surface study." intro={project.description} image={project.hero} number={`${project.year} / ${project.id.toUpperCase()}`} />
    <section className="project-detail-facts section-pad"><div><Eyebrow>Project brief</Eyebrow><p>{project.description}</p></div><div className="project-fact"><span>APPLICATION</span><strong>{project.category}</strong></div><div className="project-fact"><span>PATTERN</span><strong>{project.pattern}</strong></div><div className="project-fact"><span>CLIENT</span><strong>{project.client}</strong></div></section>
    <section className="project-detail-gallery section-pad"><div className="project-detail-heading"><Eyebrow>Process / material / outcome</Eyebrow><h2>Precision in<br /><span>every detail.</span></h2></div><div className="project-gallery-grid">{project.gallery.map((src, i) => <ImageReveal key={`${src}-${i}`} src={src} alt={`${project.title} process detail ${i + 1}`} className={`project-gallery-image project-gallery-${i + 1}`} />)}</div></section>
    <section className="project-materials section-pad"><div><Eyebrow>System used</Eyebrow><h2>Materials &<br /><span>process.</span></h2></div><div className="material-list">{project.materials.map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div></section>
    <div className="project-next"><span>Continue exploring</span><ArrowLink to="/projects">All selected projects</ArrowLink></div>
  </>
}

function AboutPage() {
  return <>
    <PageHero eyebrow="Company / About Hydra" title="A better finish" accent="is engineered." intro="We bring together material knowledge, production technology and the discipline to make complex surface transformation dependable." image="/about-team.webp" number="05 / OUR APPROACH" />
    <section className="about-statement section-pad"><Eyebrow>Our point of view</Eyebrow><h2>Not decoration.<br /><span>A new material expression.</span></h2><p>Hydra Surface Technology exists to make hydrographics more capable, more consistent and more accessible to the professionals who build and finish products. Our work spans technical support, process design, equipment and the materials that bring a finish to life.</p></section>
    <StatsBand />
    <section className="about-values section-pad"><SectionTitle eyebrow="What guides the work" title="Built to deliver" muted="with confidence." copy="The best surface results are never accidental. They come from expertise, clear standards and a team that stays close to the process." /><div className="values-list">{companyValues.map((item, i) => <div className="value-row" key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.description}</p><ArrowUpRight size={17} /></div>)}</div></section>
    <section className="about-image-band"><ImageReveal src="/workshop-interior.webp" alt="Hydra production workshop" /><div><Eyebrow>Capability / built for real production</Eyebrow><p>Good process is<br />measured in outcomes.</p></div></section>
    <CTASection title="Work with a team" accent="that knows the process." />
  </>
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }
  return <>
    <PageHero eyebrow="Contact / Start a conversation" title="Let’s talk" accent="surface." intro="Tell us about your application, production goals or technical question. We’ll help you find a clear next step." image="/workshop-interior.webp" number="06 / CONTACT" />
    <section className="contact-section section-pad"><div className="contact-intro"><Eyebrow>We’re here to help</Eyebrow><h2>Bring us<br /><span>the challenge.</span></h2><p>Whether you’re developing a new product or planning a production line, our team can help shape a process around your needs.</p><div className="contact-direct"><span>GENERAL ENQUIRIES</span><a href="mailto:hello@hydrasurfacetech.com">hello@hydrasurfacetech.com</a></div><div className="contact-direct"><span>TECHNICAL SUPPORT</span><a href="mailto:technical@hydrasurfacetech.com">technical@hydrasurfacetech.com</a></div></div>
      <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><span>PROJECT ENQUIRY / 01</span><span>ALL FIELDS REQUIRED</span></div><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Work email<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label><label>What are you working on?<select name="interest" defaultValue="" required><option value="" disabled>Select an area</option><option>Films & materials</option><option>Chemistry & coatings</option><option>Equipment & production</option><option>Custom application</option><option>Technical support</option></select></label><label>Tell us a little more<textarea name="message" rows={4} required placeholder="Application, substrate, production volume…" /></label><button className="form-submit" type="submit">Send enquiry <ArrowRight size={16} /></button><AnimatePresence>{submitted && <motion.p className="form-confirmation" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><Check size={15} /> Thanks — your enquiry is ready. In this demo, no information is sent to a server.</motion.p>}</AnimatePresence><span className="form-privacy">FRONTEND DEMONSTRATION / NO DATA IS TRANSMITTED</span></form>
    </section>
    <div className="contact-footnote"><span>HYDRA / SURFACE TECHNOLOGY</span><span>Global technical partnerships / By appointment</span></div>
  </>
}

function NotFound() {
  return <section className="not-found"><Eyebrow>404 / Not found</Eyebrow><h1>This surface<br /><span>isn’t mapped.</span></h1><p>The page you’re looking for may have moved.</p><ArrowLink to="/">Return home</ArrowLink></section>
}

export { AboutPage, ApplicationsPage, ContactPage, HomePage, NotFound, ProductLanding, ProjectDetailPage, ProjectsPage, TechnologyPage }
