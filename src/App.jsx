import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Phone, Menu, X, CheckCircle, GraduationCap, Users, BookOpen } from 'lucide-react';
import { colleges } from './data';

// --- SHARED COMPONENTS ---

const WhatsAppButton = ({ text, message, className }) => {
  const phoneNumber = "919876543210"; // REPLACE WITH YOUR NUMBER
  const encodedMsg = encodeURIComponent(message || "Hi CoreMentor, I need guidance for admissions.");
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all ${className}`}
    >
      <Phone size={20} />
      {text || "Chat on WhatsApp"}
    </a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-brand-blue flex items-center gap-2">
          <GraduationCap /> CoreMentor
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-brand-blue font-medium">Home</Link>
          <Link to="/btech" className="hover:text-brand-blue font-medium">B.Tech Admissions</Link>
          <Link to="/colleges" className="hover:text-brand-blue font-medium">Colleges</Link>
          <Link to="/about" className="hover:text-brand-blue font-medium">About Us</Link>
          <WhatsAppButton text="Free Consultation" className="py-2 px-4 text-sm" />
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/btech" onClick={() => setIsOpen(false)}>B.Tech Admissions</Link>
          <Link to="/colleges" onClick={() => setIsOpen(false)}>Colleges</Link>
          <WhatsAppButton text="Chat Now" />
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-brand-dark text-white py-10">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">CoreMentor</h3>
        <p className="text-gray-400">Right guidance, no scams, transparent admission support for students and parents across India.</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/btech">B.Tech Admissions</Link></li>
          <li><Link to="/colleges">College List</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <p className="text-gray-400 mb-2">📞 +91 98765 43210</p>
        <p className="text-gray-400">📍 New Delhi, India</p>
        <div className="mt-4">
           <WhatsAppButton text="Message Us" />
        </div>
      </div>
    </div>
    <div className="text-center text-gray-500 mt-8 pt-8 border-t border-gray-700">
      © 2026 CoreMentor. All rights reserved.
    </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-800 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Guaranteed Guidance for B.Tech 2025–26</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">VIT | SRM | BITS | Management Quota | Merit</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
          <WhatsAppButton text="Apply for Free Counselling" className="w-full" />
        </div>
      </section>

      {/* Scrolling Ribbon */}
      <div className="bg-gray-100 py-4 border-b border-gray-200 scroll-container">
        <div className="scroll-content flex gap-12 text-gray-500 font-bold text-xl uppercase tracking-wider px-4">
          <span>VIT Vellore</span><span>SRM Chennai</span><span>KIIT</span><span>LPU</span><span>Amity</span><span>Manipal</span><span>Jain University</span>
          <span>VIT Vellore</span><span>SRM Chennai</span><span>KIIT</span><span>LPU</span><span>Amity</span><span>Manipal</span><span>Jain University</span>
        </div>
      </div>

      {/* Smart Filter Section */}
      <SmartFilter />

      {/* Why Us */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Parents Trust CoreMentor</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <CheckCircle className="text-green-500" />, title: "No Fake Promises", desc: "We only promise what is legally possible. No false admission guarantees." },
            { icon: <Users className="text-brand-blue" />, title: "Parent-Friendly", desc: "We explain every fee, hidden cost, and process clearly to parents." },
            { icon: <BookOpen className="text-purple-500" />, title: "End-to-End Support", desc: "From application form filling to hostel booking assistance." }
          ].map((item, idx) => (
            <div key={idx} className="p-6 border rounded-xl shadow-sm hover:shadow-md transition bg-white text-center">
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const SmartFilter = () => {
  const [filters, setFilters] = useState({ budget: '', state: '', tier: '', course: 'BTech' });

  const handleApply = (collegeName) => {
    // This generates the specific message requested in prompt
    const msg = `Hi CoreMentor, 
I searched colleges with:
Budget: ${filters.budget || 'Any'}
State: ${filters.state || 'Any'}
Tier: ${filters.tier || 'Any'}
Course: ${filters.course}

I am interested in ${collegeName}. Please guide me.`;
    
    // Redirect logic
    const phoneNumber = "919876543210";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Simple filter logic
  const filteredColleges = colleges.filter(c => {
    return (filters.course === 'All' || c.course === filters.course) &&
           (filters.tier === '' || c.tier === filters.tier);
    // Note: Budget logic is complex for string ranges, kept simple for demo
  });

  return (
    <section className="bg-brand-light py-16 px-4" id="find-colleges">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect College</h2>
        
        {/* Filter Inputs */}
        <div className="bg-white p-6 rounded-xl shadow-lg grid md:grid-cols-4 gap-4 mb-10">
          <select className="border p-3 rounded" onChange={(e) => setFilters({...filters, budget: e.target.value})}>
            <option value="">Select Budget</option>
            <option value="<2L">Less than 2L/year</option>
            <option value="2L-4L">2L - 4L/year</option>
            <option value=">4L">Above 4L/year</option>
          </select>
          <select className="border p-3 rounded" onChange={(e) => setFilters({...filters, state: e.target.value})}>
            <option value="">Select State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi/NCR">Delhi/NCR</option>
          </select>
          <select className="border p-3 rounded" onChange={(e) => setFilters({...filters, tier: e.target.value})}>
            <option value="">Select Tier</option>
            <option value="Tier-1">Tier 1 (Top Ranked)</option>
            <option value="Tier-2">Tier 2 (Good Value)</option>
            <option value="Tier-3">Tier 3 (Budget Friendly)</option>
          </select>
          <select className="border p-3 rounded" value={filters.course} onChange={(e) => setFilters({...filters, course: e.target.value})}>
            <option value="BTech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="BBA">BBA</option>
          </select>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredColleges.map(college => (
            <div key={college.id} className="bg-white rounded-xl shadow overflow-hidden border border-gray-100">
              <img src={college.img} alt={college.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{college.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{college.naac}</span>
                </div>
                <p className="text-gray-500 mb-2">📍 {college.location}</p>
                <p className="text-gray-700 font-medium mb-4">💰 {college.fees}</p>
                <div className="flex gap-2">
                  <button onClick={() => handleApply(college.name)} className="flex-1 bg-brand-blue text-white py-2 rounded font-medium hover:bg-blue-800 transition">
                    Apply Now
                  </button>
                  <button onClick={() => handleApply(college.name)} className="flex-1 border border-brand-blue text-brand-blue py-2 rounded font-medium hover:bg-blue-50 transition">
                    Check Eligibility
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BtechPage = () => (
  <div className="container mx-auto px-4 py-10">
    <h1 className="text-3xl font-bold mb-6">B.Tech Admissions 2025</h1>
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-xl font-bold mb-4 text-brand-blue">Who Can Apply?</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Students with 12th PCM (Any Board).</li>
          <li>Students with low rank or no rank in JEE/Entrance.</li>
          <li>Gap year students eligible for specific universities.</li>
        </ul>
        
        <h2 className="text-xl font-bold mt-8 mb-4 text-brand-blue">Popular Specialisations</h2>
        <div className="flex flex-wrap gap-2">
          {['CSE', 'AI & ML', 'Cyber Security', 'Data Science', 'ECE', 'Mechanical'].map(s => (
            <span key={s} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{s}</span>
          ))}
        </div>
      </div>
      <div className="bg-brand-light p-8 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">Get Fee Structure & College List</h3>
        <p className="mb-6 text-gray-600">Don't be confused by brochures. Get the honest fee structure and hidden costs directly on WhatsApp.</p>
        <WhatsAppButton text="Download Fee Structure" />
      </div>
    </div>
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/btech" element={<BtechPage />} />
            {/* Other routes can be added similarly */}
          </Routes>
        </main>
        <Footer />
        
        {/* Sticky Mobile Button */}
        <div className="fixed bottom-4 right-4 md:hidden z-50">
          <WhatsAppButton text="Chat" className="rounded-full shadow-lg" />
        </div>
      </div>
    </Router>
  );
}

export default App;