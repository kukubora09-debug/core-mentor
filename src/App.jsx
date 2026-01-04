import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X, CheckCircle, GraduationCap, ArrowRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { colleges } from './data';

// --- PREMIUM COMPONENTS ---

const WhatsAppButton = ({ text, message, variant = "primary", className }) => {
  const phoneNumber = "919876543210";
  const encodedMsg = encodeURIComponent(message || "Hi CoreMentor, I need premium guidance.");
  
  const baseStyle = "flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg";
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-green-500/30",
    dark: "bg-gray-900 hover:bg-gray-800 text-white border border-gray-700",
    outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
  };

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      <Phone size={20} className="fill-current" />
      {text || "Chat on WhatsApp"}
    </a>
  );
};

const CollegeCard = ({ college, onApply }) => (
  <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-2xl transition-all duration-300 relative">
    {/* Image Container */}
    <div className="h-56 overflow-hidden relative">
      <img src={college.img} alt={college.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-brand-dark px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">
        {college.tier}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
        <h3 className="text-white text-xl font-bold font-heading">{college.name}</h3>
        <p className="text-gray-300 text-sm flex items-center gap-1"><MapPin size={14}/> {college.location}</p>
      </div>
    </div>

    {/* Details */}
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-semibold">
          <Star size={14} className="fill-current" /> {college.naac}
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Approx Fees</p>
          <p className="text-brand-primary font-bold">{college.fees}</p>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={() => onApply(college.name)} className="flex-1 bg-brand-dark text-white py-3 rounded-xl font-semibold hover:bg-black transition shadow-lg">
          Apply Now
        </button>
        <button onClick={() => onApply(college.name)} className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
          Details
        </button>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-heading text-brand-dark flex items-center gap-2">
          <div className="bg-brand-primary p-2 rounded-lg text-white">
            <GraduationCap size={24} />
          </div>
          CoreMentor<span className="text-brand-primary">.</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['Home', 'B.Tech Admissions', 'Colleges', 'About'].map((item) => (
             <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-gray-600 font-medium hover:text-brand-primary transition">
               {item}
             </Link>
          ))}
          <WhatsAppButton text="Free Counsel" className="px-5 py-2.5 text-sm" />
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-6 shadow-xl absolute w-full">
          {['Home', 'B.Tech Admissions', 'Colleges'].map((item) => (
             <Link key={item} to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-700">
               {item}
             </Link>
          ))}
          <WhatsAppButton text="Chat Now" />
        </div>
      )}
    </nav>
  );
};

// --- PAGES ---

const Home = () => {
  return (
    <div className="pt-20">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-brand-dark text-white py-20 lg:py-32">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block bg-white/10 backdrop-blur rounded-full px-4 py-1 text-sm font-medium mb-6 border border-white/10 text-brand-accent">
            ✨ Admissions Open for 2025-26 Batch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
            Your Future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Guaranteed.</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Secure your seat in top Tier-1 colleges with honest, transparent, and parent-friendly guidance. No hidden costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WhatsAppButton text="Start Free Application" variant="primary" className="text-lg px-8" />
            <Link to="/colleges" className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2">
              View Colleges <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Stats Ribbon */}
      <div className="bg-brand-surface py-8 border-b border-gray-800">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-20 text-center">
            {[
              { num: "500+", label: "Students Placed" },
              { num: "100%", label: "Transparency" },
              { num: "50+", label: "Partner Colleges" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white font-heading">{stat.num}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Smart Filter & Results */}
      <SmartFilter />

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Why Parents Trust Us</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We understand the anxiety of admissions. That's why we prioritize transparency above all else.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "100% Legitimate", desc: "We only deal with official management quotas. No back-door scams.", color: "text-green-600", bg: "bg-green-50" },
              { icon: CheckCircle, title: "Zero Hidden Fees", desc: "Every rupee is accounted for. We provide a written breakdown of costs.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Phone, title: "24/7 Support", desc: "Direct access to your counsellor until the day your child joins the hostel.", color: "text-purple-600", bg: "bg-purple-50" },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const SmartFilter = () => {
  const [filters, setFilters] = useState({ budget: '', state: '', tier: '', course: 'BTech' });

  const handleApply = (collegeName) => {
    const msg = `Hi CoreMentor, I'm interested in ${collegeName} (Budget: ${filters.budget}, Tier: ${filters.tier}).`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const filtered = colleges.filter(c => 
    (filters.course === 'All' || c.course === filters.course) &&
    (filters.tier === '' || c.tier === filters.tier)
  );

  return (
    <section className="py-20 bg-gray-50 -mt-10 rounded-t-[3rem] relative z-20">
      <div className="container mx-auto px-6">
        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-3xl shadow-xl -mt-32 mb-16 border border-gray-100 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {['budget', 'state', 'tier', 'course'].map((f) => (
              <select 
                key={f}
                className="w-full bg-gray-50 border-0 rounded-xl px-4 py-4 font-medium text-gray-700 focus:ring-2 focus:ring-brand-primary cursor-pointer hover:bg-gray-100 transition"
                onChange={(e) => setFilters({...filters, [f]: e.target.value})}
              >
                <option value="">Select {f.charAt(0).toUpperCase() + f.slice(1)}</option>
                {/* Options would go here - simplified for demo */}
                <option value="Tier-1">Tier 1</option>
                <option value="Tier-2">Tier 2</option>
              </select>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(college => (
            <CollegeCard key={college.id} college={college} onApply={handleApply} />
          ))}
        </div>
        
        {/* Load More Trigger */}
        <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Showing top results based on your preferences</p>
            <button className="text-brand-primary font-bold border-b-2 border-brand-primary hover:text-blue-700">View Full College List</button>
        </div>
      </div>
    </section>
  );
};

// --- APP WRAPPER ---

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans selection:bg-brand-primary selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<div className="pt-32 text-center text-2xl font-bold text-gray-400">All Colleges List Page</div>} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-brand-dark text-white py-12 border-t border-gray-800 mt-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-bold font-heading mb-4">CoreMentor.</h2>
                <p className="text-gray-500">Building Careers with Trust.</p>
            </div>
        </footer>

        {/* Sticky Mobile Fab */}
        <div className="fixed bottom-6 right-6 md:hidden z-50">
          <WhatsAppButton text="" className="w-14 h-14 p-0 shadow-2xl shadow-green-900/50" />
        </div>
      </div>
    </Router>
  );
}

export default App;