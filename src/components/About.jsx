import React from 'react'
// import { Cloud, Thermometer, Wind, Droplet } from "lucide-react";
// import { motion } from "framer-motion";

function About() {
  return (
      <main
      className="min-h-screen bg-center text-white flex items-center justify-center p-6 relative"
    >
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-indigo-500/90 via-purple-500/90 to-pink-500/90 backdrop-blur-md rounded-2xl shadow-2xl p-10 animate-fadeInUp">
        <h1 className="text-4xl font-extrabold mb-6 text-center animate-fadeInDown">About WeatherView</h1>
        <p className="text-white/90 mb-8 text-lg text-center animate-fadeIn delay-200">
          WeatherView is a simple, fast, and reliable weather app that shows you temperature, wind speed, humidity, and cloud coverage — all in one clean view.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">
          <li className="bg-white/20 p-5 rounded-lg shadow-md animate-fadeInUp delay-300">
            Temperature — Current and feels-like values
          </li>
          <li className="bg-white/20 p-5 rounded-lg shadow-md animate-fadeInUp delay-400">
            Wind Speed — Know the speed and direction
          </li>
          <li className="bg-white/20 p-5 rounded-lg shadow-md animate-fadeInUp delay-500">
            Humidity — Air moisture level
          </li>
          <li className="bg-white/20 p-5 rounded-lg shadow-md animate-fadeInUp delay-600">
            Cloud Coverage — Percentage of sky covered
          </li>
        </ul>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease forwards; }
        .animate-fadeInDown { animation: fadeInDown 0.8s ease forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </main>
  )
}

export default About
