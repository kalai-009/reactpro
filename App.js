import React from "react";

export default function SchoolLandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold text-green-600">WiSchool</h1>
        <nav className="hidden md:flex gap-6">
          <a href="https://example.com" className="hover:text-green-500">Home</a>
          <a href="https://example.com" className="hover:text-green-500">Courses</a>
          <a href="https://example.com" className="hover:text-green-500">Instructors</a>
          <a href="https://example.com" className="hover:text-green-500">Schedule</a>
          <a href="https://example.com" className="hover:text-green-500">Contact Us</a>
        </nav>
        <div className="flex gap-4">
          <button className="text-green-600">Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 p-10 items-center">
        <div>
          <h2 className="text-4xl font-bold leading-snug">
            Quality <span className="text-green-600">Education</span><br />
            By Any Means Necessary.
          </h2>
          <p className="mt-4">Learn from best instructors around the globe.</p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded">Get Started</button>
        </div>
        <img src="/hero-image.jpg" alt="Hero" className="rounded-xl" />
      </section>

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {["Problem Solving", "Live chat", "Group Reading", "15k Courses", "Hands-on activities"].map((item, idx) => (
          <span key={idx} className="bg-gray-100 px-4 py-2 rounded-full text-sm">
            {item}
          </span>
        ))}
      </div>

      {/* Categories */}
      <section className="p-10">
        <h3 className="text-xl font-semibold mb-4">Choose favourite course from top categories</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {["Marketing", "Design", "Programming", "Technology"].map((cat, i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-40 flex items-end p-4 font-bold text-white" style={{backgroundImage: `url(/cat${i+1}.jpg)`, backgroundSize: 'cover'}}>{cat}</div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="p-10">
        <h3 className="text-xl font-semibold mb-4">Most Popular Courses</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <img src={`/course${i+1}.jpg`} alt="course" className="rounded" />
              <h4 className="mt-2 font-semibold text-sm">Course Title</h4>
              <p className="text-xs text-gray-500">6 weeks · 15k Students</p>
              <p className="text-green-600 font-bold mt-1">$30.55</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-Hour Skills */}
      <section className="p-10">
        <h3 className="text-xl font-semibold mb-4">Learn A New Skill In Two Hours</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              <img src={`/skill${i+1}.jpg`} alt="skill" className="rounded" />
              <h4 className="mt-2 font-semibold text-sm">Skill Title</h4>
              <p className="text-xs text-gray-500">5 weeks · 11k Students</p>
              <p className="text-green-600 font-bold mt-1">$30.55</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-6 p-10 items-center">
        <img src="/about-image.jpg" alt="About" className="rounded-xl" />
        <div>
          <h3 className="text-2xl font-bold mb-4">Let Your Education Do The Walking</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Free E-book, Videos and kits</li>
            <li>Learn at your own pace</li>
            <li>Collaborate with learners globally</li>
            <li>Top instructors around the globe</li>
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="p-10">
        <h3 className="text-xl font-semibold mb-4">What Our Students Say About Us</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {["Mohh Jumah", "John Mark"].map((name, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow">
              <p className="italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <p className="font-semibold mt-2">{name}</p>
              <p className="text-sm text-gray-500">Senior Developer</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="p-10">
        <h3 className="text-xl font-semibold mb-4">Meet our instructors</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["John Mark", "Lora Shrof", "Zeng Chin"].map((name, i) => (
            <div key={i} className="text-center">
              <img src={`/inst${i+1}.jpg`} alt={name} className="w-20 h-20 mx-auto rounded-full mb-2" />
              <h4 className="font-semibold">{name}</h4>
              <p className="text-sm text-gray-500">Senior Developer</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-800 text-white p-10 text-center">
        <h3 className="text-2xl font-semibold">You Don’t Have To See The Whole Staircase Just Take The First Step</h3>
        <p className="mt-4 max-w-xl mx-auto">Amet in a suspendisse convallis eget...</p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-green-600 px-6 py-2 rounded">Get Started</button>
          <button className="bg-white text-green-600 px-6 py-2 rounded">Place a Call</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white p-10">
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold mb-2">WiSchool</h4>
            <p className="text-sm">We are not here to sell you products, we sell value through our expertise.</p>
            <div className="flex gap-3 mt-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p>Email: wis@school.com</p>
            <p>Call: +1234567890</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Subscribe</h4>
            <input type="email" placeholder="Your Email address" className="p-2 w-full rounded text-black" />
            <button className="mt-2 bg-green-600 w-full p-2 rounded">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
