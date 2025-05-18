// src/App.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaChalkboardTeacher, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="text-gray-800 bg-white font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between p-6 shadow-md">
        <h1 className="text-xl font-bold text-green-600">WiSchool</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="https://example.com" className="hover:text-green-600">Home</a>
          <a href="https://example.com" className="hover:text-green-600">Courses</a>
          <a href="https://example.com" className="hover:text-green-600">Instructors</a>
          <a href="https://example.com" className="hover:text-green-600">Schedule</a>
          <a href="https://example.com" className="hover:text-green-600">Contact Us</a>
        </nav>
        <div className="space-x-4">
          <button className="text-sm font-semibold">Login</button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-green-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl font-bold leading-snug">
            Quality <span className="text-green-600">Education</span> <br />
            By Any Means Necessary.
          </h2>
          <p className="mt-4 text-gray-600">Learn from the best instructors around the globe.</p>
          <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">Get Started</button>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="https://undraw.co/api/illustrations/1f5d6ad1-2a87-4a34-96f2-10b053f74c69" // Replace with your image
          alt="Student"
          className="w-full md:w-1/2 mt-8 md:mt-0 rounded-xl"
        />
      </section>

      {/* Features */}
      <section className="p-10 grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
        {['Problem Solving', 'Live Chat', 'Group Reading', '10k+ Courses', 'Hands-on Activities', 'Expert Mentors'].map((item, idx) => (
          <div key={idx} className="bg-gray-100 py-3 rounded shadow-md hover:shadow-lg transition">{item}</div>
        ))}
      </section>

      {/* Categories */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Choose favourite course from top categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Marketing", "Design", "Programming", "Technology"].map((cat, idx) => (
            <div key={idx} className="bg-green-100 hover:bg-green-200 p-6 rounded text-center font-semibold transition">{cat}</div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="p-10">
        <h3 className="text-2xl font-semibold mb-6 text-center">Most Popular Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Learn Marketing From Top Instructors', 'Front-End Development', 'Everything You Need To Know In UX'].map((title, idx) => (
            <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-xl transition">
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-sm text-gray-500">6 weeks - 1.5k students</p>
              <p className="text-green-600 font-bold mt-2">$30.55</p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Reviews */}
      <section className="p-10 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-6 text-center">What Our Students Say About Us</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-sm text-gray-600 italic">"Education will be for you what you want it to be."</p>
            <p className="font-bold mt-4">John Mark - Senior Developer</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-sm text-gray-600 italic">"Knowledge has to be improved, challenged, and increased constantly."</p>
            <p className="font-bold mt-4">Lora Shrof - Marketing Lead</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="p-10 flex flex-col md:flex-row justify-between items-center bg-green-600 text-white">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold">You Don’t Have To See The Whole Staircase</h3>
          <p className="mt-2">Just Take The First Step</p>
        </div>
        <div className="space-x-4">
          <button className="bg-black text-green-600 px-6 py-2 rounded hover:bg-gray-100 transition">Get Started</button>
          <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-green-600 transition">Place a Call</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">WiSchool</h4>
            <p className="text-sm">We create not to sell you products, but to show you value through our experience.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Links</h5>
            <ul className="text-sm space-y-1">
              <li>Home</li>
              <li>Reviews</li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-sm flex items-center gap-2"><FaEnvelope /> wischool@gmail.com</p>
            <p className="text-sm flex items-center gap-2 mt-1"><FaPhoneAlt /> +123456789</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Subscribe</h5>
            <input type="email" placeholder="Your email" className="w-full p-2 rounded text-black" />
            <button className="w-full mt-2 bg-green-600 py-2 rounded hover:bg-green-700 transition">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;