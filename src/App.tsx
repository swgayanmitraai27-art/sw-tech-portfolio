import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

const categories = [
  "Bakers and cake shops", "Banquet halls and Marriage lawns", 
  "Boutiques and Clothing stores", "Cafes and Coffee shops", 
  "Cloud kitchens", "Coaching institutes", "Competitive exam coaching", 
  "Computer training institutes", "Family restaurants", "Hotels", 
  "IIT JEE coaching", "Jewelry showrooms", "NEET coaching centers", 
  "Private schools", "Restaurants", "Spoken English classes", "Sweet shops"
];

function Home() {
  return (
    <div className="relative z-10 w-full h-full pt-32 px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center space-y-6 min-h-[60vh]"
      >
        <div className="inline-block px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-md text-sm tracking-widest uppercase">
          Top IIT Bombay Engineer
        </div>
        <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
          SW Tech Solution
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light max-w-2xl">
          Hi, I am Aditya. Bringing 5 Years of Experience and world-class digital experiences to your brand.
        </h2>
      </motion.div>

      <div className="py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">We Build Websites For</h2>
          <p className="text-gray-400 text-lg">Select a category to view its live cinematic demo template.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link to={`/demo/${encodeURIComponent(cat)}`} key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all cursor-pointer overflow-hidden"
              >
                <h3 className="text-xl font-semibold z-10 relative">{cat}</h3>
                <p className="text-white/40 mt-2 text-sm z-10 relative">View Demo Template ?</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function DemoWebsite() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category || "Template");

  return (
    <div className="relative z-10 w-full min-h-screen bg-black flex flex-col items-center justify-center text-center p-8">
      <Link to="/" className="absolute top-8 left-8 text-white/50 hover:text-white transition-colors">
        ? Back to Portfolio
      </Link>
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
      >
        {decodedCategory} Premium Template
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        className="text-xl text-gray-400 max-w-3xl"
      >
        This is a live cinematic demo generated for {decodedCategory}. Imagine this with high-quality 3D assets, smooth scroll effects, and professional UI/UX optimized for high conversions.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
        className="mt-16 w-full max-w-4xl h-[40vh] border border-white/10 rounded-3xl bg-white/5 flex items-center justify-center backdrop-blur-md"
      >
        <span className="text-white/20 text-2xl">3D Hero Showcase Area</span>
      </motion.div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Router>
      <div className="relative w-full min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <ambientLight intensity={0.5} />
            <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
          </Canvas>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/:category" element={<DemoWebsite />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
