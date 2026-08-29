import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Smartphone, Globe, Zap, Database, Palette } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

const categories = [
  "Bakers and cake shops", "Banquet halls and Marriage lawns", 
  "Boutiques and Clothing stores", "Cafes and Coffee shops", 
  "Cloud kitchens", "Coaching institutes", "Competitive exam coaching", 
  "Computer training institutes", "Family restaurants", "Hotels", 
  "IIT JEE coaching", "Jewelry showrooms", "NEET coaching centers", 
  "Private schools", "Restaurants", "Spoken English classes", "Sweet shops"
];

const technologies = ["React", "Flutter", "Node.js", "Python", "AWS", "Firebase", "MongoDB", "TailwindCSS", "Three.js"];

export default function Portfolio() {
  return (
    <div className="relative w-full min-h-screen bg-neutral-950 text-white overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <Canvas>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float speed={2} rotationIntensity={2} floatIntensity={2}>
            <Sphere args={[1.5, 64, 64]} position={[4, 2, -5]}>
              <MeshDistortMaterial color="#4f46e5" attach="material" distort={0.5} speed={2} />
            </Sphere>
          </Float>
          <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
            <Sphere args={[1, 64, 64]} position={[-4, -2, -3]}>
              <MeshDistortMaterial color="#ec4899" attach="material" distort={0.6} speed={3} />
            </Sphere>
          </Float>
          <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        </Canvas>
      </div>

      <div className="relative z-10 w-full h-full pt-32 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Khatarnak Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center space-y-8 min-h-[70vh]"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-xl text-sm tracking-[0.2em] text-blue-400 uppercase font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Top IIT Bombay Engineer
          </motion.div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20">SW TECH</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">SOLUTION</span>
          </h1>
          <p className="text-xl md:text-3xl text-neutral-400 font-light max-w-3xl leading-relaxed">
            Hi, I am <span className="text-white font-medium">Aditya</span>. I build world-class Mobile Apps & Websites with 5+ Years of deep tech expertise.
          </p>
          <div className="flex gap-4 pt-8">
            <button className="px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-neutral-200 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              Start Your Project
            </button>
            <button className="px-10 py-5 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-full hover:bg-white/10 backdrop-blur-md transition-all">
              View Demos
            </button>
          </div>
        </motion.div>

        {/* Technologies Marquee */}
        <div className="py-24 border-y border-white/5 mt-20 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>
          <motion.div 
            animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-16 items-center whitespace-nowrap"
          >
            {[...technologies, ...technologies, ...technologies].map((tech, i) => (
              <span key={i} className="text-4xl font-bold text-white/20 uppercase tracking-widest">{tech}</span>
            ))}
          </motion.div>
        </div>

        {/* Services Bento Grid */}
        <div className="py-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">What We Build</h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto">From scalable mobile applications to immersive 3D web experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-blue-900/20 to-purple-900/10 border border-white/10 p-10 rounded-3xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Smartphone className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Mobile App Development</h3>
              <p className="text-neutral-400 text-lg">High-performance iOS & Android apps built with Flutter and React Native. Custom solutions for your business.</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/10 border border-white/10 p-10 rounded-3xl group">
              <Globe className="w-12 h-12 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Web Apps</h3>
              <p className="text-neutral-400 text-lg">Fast, secure, and SEO-optimized web platforms.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/20 to-rose-900/10 border border-white/10 p-10 rounded-3xl group">
              <Palette className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-neutral-400 text-lg">Awwwards-winning interfaces that convert.</p>
            </div>
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-orange-900/20 to-amber-900/10 border border-white/10 p-10 rounded-3xl group">
              <Database className="w-12 h-12 text-orange-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Backend & Cloud AI</h3>
              <p className="text-neutral-400 text-lg">Scalable AWS infrastructure, AI integrations, and robust APIs to power your digital ecosystem.</p>
            </div>
          </div>
        </div>

        {/* 17 Categories Demo Showcase */}
        <div className="py-32 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Live Demos</h2>
            <p className="text-neutral-400 text-xl max-w-2xl mx-auto">Click any category below to view a fully interactive, 5-page real website template with premium animations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <Link to={`/demo/${encodeURIComponent(cat)}`} key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: (index % 3) * 0.1 }}
                  className="group relative h-64 rounded-3xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800 transition-all cursor-pointer overflow-hidden flex flex-col justify-end p-8"
                >
                  <img src={`https://picsum.photos/seed/${cat.replace(/\s+/g, "")}/600/400`} alt={cat} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <h3 className="text-2xl font-bold z-10 relative group-hover:text-blue-400 transition-colors">SW {cat.split(" ")[0]}</h3>
                  <p className="text-neutral-300 mt-2 text-sm z-10 relative opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore 5-Page Demo ?</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 text-center text-neutral-500 border-t border-white/5 mt-20">
          <p>� 2026 SW Tech Solution by Aditya. IIT Bombay Engineer.</p>
        </footer>
      </div>
    </div>
  );
}
