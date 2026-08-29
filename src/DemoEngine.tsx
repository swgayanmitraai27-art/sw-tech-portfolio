import { useParams, Link, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Menu, MapPin, Phone, Mail } from "lucide-react";

// Page Components
const Home = ({ cat }: { cat: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <h1 className="text-6xl md:text-8xl font-black leading-tight">Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SW {cat.split(" ")[0]}</span></h1>
        <p className="text-xl text-neutral-400">Experience premium quality and world-class service tailored exactly for your needs in the {cat} industry.</p>
        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">Discover More</button>
      </div>
      <div className="flex-1">
        <img src={`https://picsum.photos/seed/${cat}Hero/800/600`} alt="Hero" className="rounded-3xl shadow-2xl shadow-blue-500/20 w-full object-cover aspect-video" />
      </div>
    </div>
  </motion.div>
);

const About = ({ cat }: { cat: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 px-8 max-w-4xl mx-auto min-h-screen text-center">
    <h2 className="text-5xl font-bold mb-12">Our Story</h2>
    <img src={`https://picsum.photos/seed/${cat}About/1200/500`} alt="About" className="rounded-3xl mb-12 w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
    <p className="text-2xl text-neutral-400 leading-relaxed">
      Established with a vision to redefine the {cat} sector, SW {cat.split(" ")[0]} has been delivering excellence for over a decade. Our passionate team blends innovation with tradition to bring you unparalleled experiences.
    </p>
  </motion.div>
);

const Services = ({ cat }: { cat: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <h2 className="text-5xl font-bold mb-16 text-center">Our Premium Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-neutral-900 border border-white/5 rounded-3xl p-8 hover:bg-neutral-800 transition-colors">
          <img src={`https://picsum.photos/seed/${cat}Service${i}/400/300`} className="rounded-xl w-full h-48 object-cover mb-6" alt="Service" />
          <h3 className="text-2xl font-bold mb-4">Service Offering {i}</h3>
          <p className="text-neutral-400">Exclusive and highly curated services designed specifically for our elite clients in the {cat} domain.</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Gallery = ({ cat }: { cat: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 px-8 max-w-7xl mx-auto min-h-screen">
    <h2 className="text-5xl font-bold mb-16 text-center">Visual Showcase</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <img key={i} src={`https://picsum.photos/seed/${cat}Gal${i}/500/500`} className={`rounded-2xl object-cover w-full h-full ${i === 1 || i === 4 ? "col-span-2 row-span-2" : ""}`} alt="Gallery" />
      ))}
    </div>
  </motion.div>
);

const Contact = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="pt-32 px-8 max-w-4xl mx-auto min-h-screen">
    <h2 className="text-5xl font-bold mb-16 text-center">Get In Touch</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900 p-12 rounded-3xl border border-white/5">
      <div className="space-y-8">
        <h3 className="text-3xl font-bold">Contact Info</h3>
        <div className="flex items-center gap-4 text-neutral-400"><MapPin /> 123 Premium Avenue, Tech City</div>
        <div className="flex items-center gap-4 text-neutral-400"><Phone /> +1 (555) 000-0000</div>
        <div className="flex items-center gap-4 text-neutral-400"><Mail /> hello@swtechsolution.com</div>
      </div>
      <form className="flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="bg-black border border-white/10 rounded-xl p-4 text-white outline-none focus:border-blue-500 transition-colors" />
        <input type="email" placeholder="Your Email" className="bg-black border border-white/10 rounded-xl p-4 text-white outline-none focus:border-blue-500 transition-colors" />
        <textarea placeholder="Message" rows={4} className="bg-black border border-white/10 rounded-xl p-4 text-white outline-none focus:border-blue-500 transition-colors"></textarea>
        <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-colors">Send Message</button>
      </form>
    </div>
  </motion.div>
);

export default function DemoEngine() {
  const { category } = useParams();
  const cat = decodeURIComponent(category || "Template");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: `/demo/${category}` },
    { name: "About", path: `/demo/${category}/about` },
    { name: "Services", path: `/demo/${category}/services` },
    { name: "Gallery", path: `/demo/${category}/gallery` },
    { name: "Contact", path: `/demo/${category}/contact` }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Demo Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-white/5 z-50 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
            <ArrowLeft size={20} /> Back to Agency
          </Link>
          <span className="text-xl font-bold">SW {cat.split(" ")[0]}</span>
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className={`text-sm uppercase tracking-widest transition-colors ${location.pathname === link.path ? "text-blue-400 font-bold" : "text-neutral-400 hover:text-white"}`}>
              {link.name}
            </Link>
          ))}
        </div>
        <button className="md:hidden"><Menu /></button>
      </nav>

      {/* Page Content with AnimatePresence for smooth route transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home cat={cat} />} />
          <Route path="/about" element={<About cat={cat} />} />
          <Route path="/services" element={<Services cat={cat} />} />
          <Route path="/gallery" element={<Gallery cat={cat} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
