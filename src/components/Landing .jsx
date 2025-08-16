import React from 'react'
import weather from "../components/weather.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
  <div className="flex flex-col min-h-screen">
  {/* Hero Section with Background */}
  <div
    className="flex flex-col justify-center items-center text-center flex-shrink-0 h-screen relative bg-no-repeat bg-center bg-cover animate-fadeInUp"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      minHeight: "100vh"
    }}
  >
    <div className="bg-black bg-opacity-40 absolute inset-0"></div>
    <div className="relative z-10 px-4">
     <div className="text-center animate-fadeIn">
  <h1
    className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-xl mb-6 transform transition-all duration-700 hover:scale-110 hover:tracking-wider animate-slideIn"
  >
    Welcome to WeatherView
  </h1>

  <p
    className="text-lg md:text-xl text-white drop-shadow-md mb-8 max-w-2xl mx-auto animate-fadeUp"
  >
    Get real-time weather updates, forecasts, and explore global weather patterns at your fingertips.
  </p>

  <Link
    to="/explorer"
    className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-semibold shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-500 transform hover:scale-110 animate-bounceSlow"
  >
    Explore Weather
  </Link>

  <style jsx>{`
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(-30px) scale(0.95);
      }
      60% {
        opacity: 1;
        transform: translateY(10px) scale(1.02);
      }
      100% {
        transform: translateY(0) scale(1);
      }
    }
    .animate-slideIn {
      animation: slideIn 1.2s ease forwards;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .animate-fadeIn {
      animation: fadeIn 1.5s ease forwards;
    }

    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeUp {
      animation: fadeUp 1.5s ease 0.3s forwards;
    }

    @keyframes bounceSlow {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-6px);
      }
    }
    .animate-bounceSlow {
      animation: bounceSlow 2.5s infinite;
    }
  `}</style>
</div>

    </div>
  </div>

  {/* Footer */}
  <footer className="bg-sky-300 bg-opacity-70 text-center py-4 text-sky-900 font-medium">
    © {new Date().getFullYear()} WeatherView. All rights reserved.
  </footer>
</div>

  )
}

export default Landing 
