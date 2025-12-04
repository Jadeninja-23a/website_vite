import React, { useState, useEffect } from 'react';
import backimg from '../assets/winback.jpeg';
import main1 from '../assets/main1.gif';
import WEEK_0 from '../assets/main2.jpg';
import WEEK_1 from '../assets/main3.gif';
import WEEK_2 from '../assets/main4.png';
import WEEK_3 from '../assets/main5.png';
import WEEK_4 from '../assets/main6.png';
import WEEK_5 from '../assets/main7.png';



const weekImages = {
  0: WEEK_0,
  1: WEEK_1,
  2: WEEK_2,
  3: WEEK_3,
  4: WEEK_4,
  5: WEEK_5
};

import { useNavigate } from 'react-router-dom';
export default function WinteROS() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const navigateToWeek = (weekNum) => {
    // Replace these URLs with your actual week page URLs
    const weekUrls = {
      0: '/week0',  // Change to your actual Week 0 URL
      1: '/week1',  // Change to your actual Week 1 URL
      2: '/week2',  // Change to your actual Week 2 URL
      3: '/week3',  // Change to your actual Week 3 URL
      4: '/week4',  // Change to your actual Week 4 URL
      5: '/week5'   // Change to your actual Week 5 URL
    };
    window.location.href = weekUrls[weekNum];
  };

  const weeks = [
    {
      week: 0,
      title: "Powering Up the Cave Terminal",
      subtitle: "Installation Only",
      description: "Tony Stark wakes up in a cold cave with nothing but scrap metal, a half-broken laptop, and a car battery. Before he can weld armor, power servos, or design intelligence, he needs one thing:",
      highlight: "A workstation that actually boots.",
      details: "This week is nothing fancy - just getting the cave terminal alive. He installs Docker (or ROS2 natively), makes sure the system can start containers, and verifies that the environment responds. No nodes, no topics, no robots - just pure foundation.",
      conclusion: "By the end of Week 0, the dusty monitors flicker awake. The cave hums with energy. Tony finally has a machine he can build on.",
      imagePlaceholder: "Installation Setup"
    },
    {
      week: 1,
      title: "Learning and Building the Mark-1 Neural System",
      subtitle: null,
      description: "With the terminal working, Tony dives straight into ROS2 — beginning the construction of the first software systems that will run the Mark-1.",
      details: "This week, he sets up a workspace, creates packages, and writes his first nodes. He works with topics, parameters, services, actions, launch files, and remaps — assembling every core component needed to control a robot from scratch. He tests motion through turtlesim and inspects his system through rqt, watching each piece of StarkOS come alive on the screen.",
      conclusion: "By the end of the week, Tony has forged the early brainstem of the Mark-1: code that can communicate, react, coordinate, and respond. The cave flickers brighter as terminals begin to glow. StarkOS is waking up.",
      imagePlaceholder: "ROS2 Terminal Animation"
    },
    {
      week: 2,
      title: "Forging the Body: The Mark-0 Cave Crawler",
      subtitle: "The Mark-0 Cave Crawler",
      description: "Tony now needs a physical platform - something that can survive the cave's brutal tunnels and carry his systems through narrow passages.",
      details: "Using Gazebo, he begins constructing a crude but powerful escape vehicle: A rugged, armored, four-wheeled prototype designed from leftover scrap. Not a suit yet - but a rolling testbed for everything the suit will become. In simulation, Tony builds its chassis, joints, wheels, sensors, and physics. He mounts cameras and lidar onto the frame. He connects the motors to ROS2 topics to give the machine real movement. Then he programs its first instinct: avoid obstacles using sensor data. The vehicle crashes, reverses, finds new paths, and learns. Piece by piece, Tony refines it.",
      conclusion: "By the end of Week 2, the Cave Crawler becomes the Mark-1's first metal backbone.",
      imagePlaceholder: "Robotic Vehicle Simulation"
    },
    {
      week: 3,
      title: "Vision & Autonomy: Teaching the Machine to See",
      subtitle: null,
      description: "To navigate the cave, Tony's machine must see - truly see.",
      details: "He integrates cameras and processes images through OpenCV. The system learns to detect shapes, markers, and objects. Then, he enables SLAM - a technology that lets the Crawler map the cave while identifying its own position inside the maze of tunnels. Navigation algorithms give the robot autonomy: it plans paths, avoids threats, and explores unknown areas without guidance.",
      conclusion: "This week, the Cave Crawler evolves from a vehicle into an intelligent explorer - the early mind of the Mark-1 suit.",
      imagePlaceholder: "Navigation Visualization"
    },
    {
      week: 4,
      title: "Manipulation: The Arm of the Mark-1",
      subtitle: null,
      description: "Movement and vision aren't enough. Tony needs the ability to interact: to lift debris, reach controls, manipulate objects, and eventually operate machinery during the escape.",
      details: "He begins designing the mechanical arm - the prototype of what will one day become the iconic Iron Man gauntlet. He studies kinematics, joint control, trajectories, and ROS2 interfaces for robotic arms. Then, he conceptualizes how this arm will mount onto his real robot.",
      conclusion: "This is where the machine becomes more than a vehicle - it becomes a tool for survival.",
      imagePlaceholder: "Robotic Arm Simulation"
    },
    {
      week: 5,
      title: "Integration: Assembling the Mark-1 Escape System",
      subtitle: null,
      description: "The final step is integration. Tony unites everything he has built.",
      listItems: [
        "The Mark-0 Cave Crawler",
        "Camera and sensor systems",
        "SLAM and navigation logic",
        "OpenCV-based vision",
        "The robotic arm",
        "The ROS2 control framework that powers it all"
      ],
      details: "He tests the complete sequence: Explore. Map. Navigate. Detect obstacles. Use the arm to clear the exit path.",
      conclusion: "When the machine succeeds, Tony finally has what he needs: The first fully functional version of the Mark-1 escape system. The cave walls tremble as he begins the breakout.",
      imagePlaceholder: "Integrated System Visualization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Figtree', sans-serif;
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Unbounded', sans-serif;
        }

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glass-strong {
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 107, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 61, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hamburger {
          cursor: pointer;
          z-index: 1000;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background: white;
          margin: 5px 0;
          transition: 0.3s;
        }

        .menu-open .line1 {
          transform: rotate(-45deg) translate(-5px, 6px);
        }

        .menu-open .line2 {
          opacity: 0;
        }

        .menu-open .line3 {
          transform: rotate(45deg) translate(-5px, -6px);
        }
      `}</style>

      {/* Hamburger Menu Button */}
      <div className="fixed top-28 right-10 z-50">
        <div
          className={`hamburger ${menuOpen ? 'menu-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="line1 bg-white"></div>
          <div className="line2 bg-white"></div>
          <div className="line3 bg-white"></div>
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 glass-strong z-40 transition-transform duration-300 overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-8 pt-20">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Navigation</h3>
          <ul className="space-y-4">

            <li className="pt-4 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-3 font-semibold">WORKSHOP WEEKS</p>
            </li>

            {weeks.map(week => (
              <li key={week.week}>
                <button
                  onClick={() => navigateToWeek(week.week)}
                  className="text-lg hover:text-blue-400 transition-colors w-full text-left flex items-center justify-between group"
                >
                  <span>Week {week.week}</span>
                  <span className="text-sm text-gray-400 group-hover:text-blue-400">→</span>
                </button>
              </li>
            ))}

            <li className="pt-4 border-t border-white/10">
              <button
                onClick={() => scrollToSection('cta')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                🚀 Begin Mission
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <header className="text-center px-6 py-20 pt-32 glass-strong mx-6 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          {/* Thumbnail Placeholder - Replace src with your image URL */}
          <div className="mb-8 flex justify-center">
            <img
              src={backimg}
              alt="Iron Man Hammer"
              className="rounded-2xl max-w-2xl w-full h-auto border-2 border-blue-400/20"
            />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-blue-400">
            WinteROS<span className="text-white">_2025</span>
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300 font-semibold">
            Forging the Mark-1 in the Cave
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Notice Board
        <div id="intro" className="glass-strong rounded-2xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-300">📋 Notice Board</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>This workshop requires basic knowledge of Linux terminal commands and Python programming.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Ensure you have at least 20GB of free disk space for ROS2 installation and simulations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>If you already have ROS2 Jazzy installed and initialized, you can skip Week 0 and jump directly to Week 1.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>Each week builds upon the previous one - complete them in order for the best learning experience.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <span>All code examples and resources are available in the GitHub repository linked at the end of each week.</span>
            </li>
          </ul>
        </div> */}

        {/* Introduction */}
        <div className="glass-strong rounded-2xl p-10 mb-12">
          <p className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-center tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-yellow-300 drop-shadow-md">
            Welcome to WinteROS.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Tony Stark was wounded - trapped in a cold, echoing cave, surrounded by enemies who demanded he build them a weapon.<br />
            Instead, he found scraps of metal, broken sensors, old circuits… and a battered laptop running Linux.
          </p>



          <p className="text-lg leading-relaxed mb-4">
            On that laptop, one powerful framework was still installed: <strong className="text-blue-400">ROS2.</strong>
          </p>

          <p className="text-lg leading-relaxed mb-4">
            To escape, Tony needed more than metal.<br />
            He needed intelligence.<br />
            He needed systems.<br />
            He needed a machine that could <em>think</em>.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            And this workshop is the guide that teaches him every skill required to build the first version of the <strong className="text-red-400">Mark-1 escape system</strong>.
          </p>

          <p className="text-lg leading-relaxed">
            Every week strengthens a new subsystem.<br />
            Every concept becomes part of the suit.<br />
            Every step takes Tony closer to breaking out of the cave.
          </p>

          <div className="flex justify-center">
            <img
              src={main1}
              alt="Introduction placeholder"
              className="rounded-xl w-80 h-auto border-2 border-blue-400/20"
            />
          </div>
        </div>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-12" />

        {/* The Cave Section */}
        <div id="cave" className="glass-strong rounded-2xl p-10 mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-400 border-l-4 border-red-400 pl-6">
            <span className="text-blue-400">❄️</span> The Cave
          </h2>
          <p className="text-xl leading-relaxed mb-4">
            The walls rumble with distant machinery.<br />
            Tony lies on a cot, sparks flickering from scavenged wires.<br />
            He examines the scraps, the tools, the sensors.<br />
            He knows one thing:
          </p>

          <p className="text-xl leading-relaxed mb-4">
            If he wants to survive, he must build something smarter than a weapon -<br />
            he must build a machine capable of navigating, sensing, and acting on its own.
          </p>

          <p className="text-xl leading-relaxed">
            This is where winteROS begins:<br />
            with knowledge that becomes machinery.
          </p>
        </div>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-12" />

        {/* Weeks Timeline */}
        {weeks.map((week, index) => (
          <div key={week.week} id={`week-${week.week}`} className="mb-12">
            <div className="glass rounded-2xl p-8 transition-all duration-400 hover:bg-white/[0.08]">
              <h2
                onClick={() => navigate(`/week${week.week}`)}
                className="text-3xl font-bold mb-4 text-red-400 border-l-4 border-red-400 pl-6 cursor-pointer hover:text-red-300 transition-colors duration-300"
              >
                <span className="text-blue-400">❄️</span> Week {week.week} - {week.title}
              </h2>

              {week.subtitle && week.subtitle !== week.title && (
                <h3 className="text-xl font-semibold text-yellow-300 mb-4 pl-6">{week.subtitle}</h3>
              )}

              <div className="pl-6">
                <p className="text-lg leading-relaxed mb-4">{week.description}</p>

                {week.highlight && (
                  <p className="text-lg leading-relaxed mb-4">
                    <strong className="text-yellow-300">{week.highlight}</strong>
                  </p>
                )}

                {week.listItems && (
                  <ul className="list-none pl-6 mb-4 space-y-2">
                    {week.listItems.map((item, i) => (
                      <li key={i} className="text-lg before:content-['•'] before:text-blue-400 before:mr-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="text-base leading-relaxed mb-4 text-gray-300">{week.details}</p>

                <p className="text-lg leading-relaxed mb-6">{week.conclusion}</p>
              </div>

              {/* Image Placeholder - Replace src with your image URL */}
              <div className="flex justify-center">
                <img
                  src={weekImages[week.week]}
                  alt={week.imagePlaceholder}
                  className="rounded-xl w-100 h-auto border-2 border-blue-400/20"
                />
              </div>
            </div>
          </div>
        ))}

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent my-12" />

        {/* Call to Action */}
        <div id="cta" className="glass-strong rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-400">
            <span className="text-blue-400">❄️</span> Begin the Mission
          </h2>
          <p className="text-xl leading-relaxed mb-4">
            This is Tony Stark's story - a story of building, learning, surviving.
          </p>
          <p className="text-xl leading-relaxed mb-4">
            Open the terminal. Power up ROS2. And help forge the Mark-1.
          </p>
          <p className="text-2xl font-bold text-blue-400 mb-8">
            The escape begins now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            {/* <button className="glass px-10 py-4 rounded-full text-lg font-semibold text-blue-400 border-2 border-blue-400/30 transition-all duration-300 hover:bg-blue-400/10 hover:border-blue-400/60">
              Jump to Week 0
            </button> */}
            <button
              onClick={() => navigate('/week0')}
              className="glass px-10 py-4 rounded-full text-lg font-semibold text-red-400 border-2 border-red-400/30 transition-all duration-300 hover:bg-red-400/10 hover:border-red-400/60"
            >
              Start Initialization Sequence
            </button>
          </div>

          <div className="glass rounded-lg p-5 border-l-4 border-yellow-300 bg-yellow-300/5 text-left">
            <p className="text-base">
              <strong className="text-yellow-300">Note:</strong> If you already have ROS2 Jazzy installed and initialized to launch on your system, then skip the Initialization Sequence and head directly to Week 1.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
