import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Import your images here (adjust paths as needed)
import g1 from '../assets/week2_p1_g1.gif';
import g2 from '../assets/week2_p1_g2.gif';
import g3 from '../assets/week2_p1_g3.gif';
import g4 from '../assets/week2_p1_g4.gif';
import g5 from '../assets/week2_p1_g5.gif';

import w1 from '../assets/week2_p1_1.jpg';
import w2 from '../assets/week2_p1_2.jpg';
import w3 from '../assets/week2_p1_3.jpg';
import w4 from '../assets/week2_p1_4.jpg';
import w5 from '../assets/week2_p1_5.jpg';
import w6 from '../assets/week2_p1_6.jpg';
import w7 from '../assets/week2_p1_7.jpg';
import w8 from '../assets/week2_p1_8.jpg';
import w9 from '../assets/week2_p1_9.jpg';
import w10 from '../assets/week2_p1_10.jpg';
import w11 from '../assets/week2_p1_11.jpg';
import w12 from '../assets/week2_p1_12.jpg';
import w13 from '../assets/week2_p1_13.jpg';
import w14 from '../assets/week2_p1_14.jpg';
import w15 from '../assets/week2_p1_15.jpg';
import w16 from '../assets/week2_p1_16.jpg';
import w17 from '../assets/week2_p1_17.jpg';
import w18 from '../assets/week2_p1_18.jpg';
import w19 from '../assets/week2_p1_19.jpg';
import dumeBotUrdf from '/downloads/dume_bot.urdf?url';
export default function Week2Part1() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

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

    const downloadDumeBot = () => {
        // Create a download link
        const link = document.createElement('a');
        link.href = dumeBotUrdf;
        link.download = 'dume_bot.urdf';

        // Trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
    };

    const navigate = useNavigate();

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

        code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
        }

        pre code {
          background: transparent;
          padding: 0;
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
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 2 Part 1 Navigation</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
                        <li><button onClick={() => scrollToSection('week2-part1-intro')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Introduction</button></li>
                        <li><button onClick={() => scrollToSection('simulation-lab')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔬 Understanding Simulation Lab</button></li>
                        <li><button onClick={() => scrollToSection('what-is-gazebo')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🌐 What is Gazebo</button></li>
                        <li><button onClick={() => scrollToSection('gazebo-examples')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">▶️ Run Gazebo Examples</button></li>
                        <li><button onClick={() => scrollToSection('download-package')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📦 Download ROS Package</button></li>
                        <li><button onClick={() => scrollToSection('creating-world')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🌍 Creating a Gazebo World</button></li>
                        <li><button onClick={() => scrollToSection('launch-gazebo-ros')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🚀 Launch Gazebo from ROS</button></li>
                        <li><button onClick={() => scrollToSection('urdf')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🤖 URDF</button></li>
                        <li><button onClick={() => scrollToSection('view-rviz')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">👁️ View Robot in RViz</button></li>
                        <li><button onClick={() => scrollToSection('building-robot-2')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎨 Building Robot 2</button></li>
                        <li><button onClick={() => scrollToSection('tf-tree')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🌳 TF Tree</button></li>
                        <li><button onClick={() => scrollToSection('load-urdf-gazebo')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📥 Load URDF in Gazebo</button></li>
                        <li><button onClick={() => scrollToSection('gazebo-integration')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔗 Gazebo Integration</button></li>
                        <li><button onClick={() => scrollToSection('driving-around')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🚗 Driving Around</button></li>
                        <li><button onClick={() => scrollToSection('odometry-trajectory')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📍 Odometry & Trajectory</button></li>
                        <li><button onClick={() => scrollToSection('3d-models')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎭 3D Models</button></li>
                        <li><button onClick={() => scrollToSection('part1-done')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">✅ Part 1 Done</button></li>

                        {/* Navigation to Part 2 */}
                        <li className="pt-4 border-t border-white/10">
                            <button
                                onClick={() => navigate('/week2p2')}
                                className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg flex items-center justify-between group"
                            >
                                <span>Continue to Part 2</span>
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
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
            <header className="text-center px-6 py-20 pt-32 glass-strong mx-6 rounded-3xl relative">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">
                        Week 2 Part 1<span className="text-white"> — Simulating StarkOS Environments</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
                        Building the Virtual Testing Lab
                    </p>
                    <p className="text-lg md:text-xl text-gray-300">
                        Before Tony Stark ever trusted a real suit to fly, fight, or even stand upright,
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mt-2">
                        he tested everything inside controlled simulation chambers.
                    </p>
                </div>
            </header>

            {/* Add a floating navigation button at the bottom right corner */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => navigate('/week2p2')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full transition-all duration-300 transform hover:scale-105 text-base font-bold shadow-lg flex items-center gap-2 group"
                >
                    <span>Next: Part 2</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Week 2 Part 1 - Simulating StarkOS Environments */}
                <section id="week2-part1-intro" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Week 2 — Simulating StarkOS Environments
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Last week, you built the foundations of StarkOS — the software systems that allow different parts of a robot to communicate, coordinate, and respond.<br />
                        But software alone can't move, see, or interact with the world.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Before Tony Stark ever trusted a real suit to fly, fight, or even stand upright, he tested everything inside controlled simulation chambers.<br />
                        Thrusters were stress-tested in virtual environments.<br />
                        Sensors were validated against simulated obstacles.<br />
                        Failures happened safely — without destroying hardware.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g1}
                            alt="Tony Stark Testing Simulation"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 text-center italic">
                        "Tony Stark's Hand Repulsor Simulation"
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This week follows that exact philosophy.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Instead of running code directly on real robots, we will use a <strong>virtual testing lab</strong> to <strong>run, test, and observe robotic behavior</strong> in a realistic simulated world.<br />
                        Nothing is being physically built yet — we are learning how to <em>use</em> simulation as a tool for development, debugging, and validation.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Simulation allows us to:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">test robot behavior safely,</li>
                        <li className="text-lg leading-relaxed">iterate quickly without hardware damage,</li>
                        <li className="text-lg leading-relaxed">visualize physics, motion, and sensor data,</li>
                        <li className="text-lg leading-relaxed">and understand how robots interact with environments before deployment.</li>
                    </ul>
                </section>

                {/* Part 1 - Understanding the Simulation Lab */}
                <section id="simulation-lab" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Part 1 — Understanding the Simulation Lab (Gazebo Basics)
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Gazebo is the simulation environment we will use as our virtual testing lab.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        It provides a 3D world where robots, objects, and sensors exist under realistic physics.<br />
                        You can place robots into environments, observe how they move, collide, and respond, and control them using ROS — all without touching real hardware.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Think of Gazebo as:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                        <li className="text-lg leading-relaxed">a flight simulator for robots,</li>
                        <li className="text-lg leading-relaxed">a sandbox where crashes are free,</li>
                        <li className="text-lg leading-relaxed">and a bridge between theory and real-world deployment.</li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-3">
                        In this part, we focus on:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">launching Gazebo,</li>
                        <li className="text-lg leading-relaxed">understanding what it simulates,</li>
                        <li className="text-lg leading-relaxed">and how it integrates with ROS 2.</li>
                    </ul>
                </section>

                {/* What is Gazebo */}
                <section id="what-is-gazebo" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        What is Gazebo
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Gazebo is a powerful robotics simulation tool that provides a 3D environment for simulating robots, sensors, and objects. It is widely used in the ROS ecosystem for testing and developing robotics algorithms in a realistic virtual environment before deploying them to real hardware.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Gazebo integrates tightly with ROS, enabling simulation and control of robots using ROS topics, services, and actions. In ROS 2, with the latest Gazebo releases, this integration is facilitated by <code>ros_gz</code>.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Key Features of Gazebo
                    </h3>

                    <ul className="list-none space-y-4 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <strong className="text-blue-300">3D Physics Engine</strong><br />
                            Simulates rigid body dynamics, collision detection, gravity, and contact forces using engines like ODE, Bullet, and DART.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-blue-300">Realistic Sensors</strong><br />
                            Simulates cameras, LiDAR, GPS, and other commonly used robotic sensors with configurable parameters.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-blue-300">Plugins</strong><br />
                            Extensible through plugins that allow control of robots, customization of physics behavior, and integration with ROS.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-blue-300">Worlds and Models</strong><br />
                            Enables users to create and load complex environments using pre-built or custom objects and robot models.
                        </li>
                    </ul>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            We are using the latest LTS ROS 2 distribution.<br />
                            <strong>Gazebo Harmonic</strong> is the recommended version for this setup.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        To install Gazebo Harmonic binaries on Ubuntu 24.04, follow the official guide:<br />
                        <a href="https://gazebosim.org/docs/harmonic/install_ubuntu/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            https://gazebosim.org/docs/harmonic/install_ubuntu/
                        </a>
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Once installed, verify the setup by running:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`gz sim shapes.sdf`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        If everything works well you should see the following screen:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w1}
                            alt="Gazebo Shapes Example"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        After Gazebo successfully starts we can install the Gazebo ROS integration with the following command:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`sudo apt install ros-jazzy-ros-gz`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        You can find the official install guide{' '}
                        <a href="https://gazebosim.org/docs/harmonic/ros_installation/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>.
                    </p>
                </section>

                {/* Run Gazebo Examples */}
                <section id="gazebo-examples" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Run Gazebo Examples
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's start again the <code>gz sim shapes.sdf</code> example again and let's see what is important on the Gazebo GUI:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w2}
                            alt="Gazebo GUI Explanation"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <ol className="list-decimal list-inside space-y-3 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <strong className="text-blue-300">Blue</strong> - Start and pause the simulation. By default Gazebo starts the simulation paused but if you add the <code>-r</code> when you start Gazebo it automatically starts the simulation.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-red-300">Red</strong> - You can add basic shapes or lights here and you can move and rotate them.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-pink-300">Pink</strong> - The model hierarchy, every item in the simulation is shown here, you can check the links (children) of the model, their collision, inertia, etc.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-yellow-300">Yellow</strong> - Detailed information of the Gazebo world.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong className="text-green-300">Green</strong> - Plug-in browser, we'll open useful tools like <code>Resource Spawner</code>, <code>Visualize Lidar</code>, <code>Image Display</code>, etc.
                        </li>
                    </ol>

                    <p className="text-lg leading-relaxed mb-4">
                        Gazebo has an online model database available{' '}
                        <a href="https://app.gazebosim.org/" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>, you can browse and download models from here. Normally this online model library is accessible within Gazebo although there might be issues in WSL2 or in virtual machines, so I prepared an offline model library with some basic models.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        <a href="https://drive.google.com/file/d/1tcfoLFReEW1XNHPUAeLpIz2iZXqQBvo_/view?usp=share_link" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            Download this offline model library
                        </a> from Google Drive.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        After download unzip it and place it in the home folder of your user.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w3}
                            alt="File Path"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        To let Gazebo know about the offline model library we have to set the <code>GZ_SIM_RESOURCE_PATH</code> environmental variable, the best is to add it to the <code>.bashrc</code>:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                        <li className="text-lg leading-relaxed">
                            Open <code>.bashrc</code> with this command <code>codium ~/.bashrc</code>.
                        </li>
                        <li className="text-lg leading-relaxed">
                            Paste the command below, save it and source it by <code>source ~/.bashrc</code>.
                        </li>
                    </ol>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`export GZ_SIM_RESOURCE_PATH=~/gazebo_models`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        After setting up the offline model library let's open the <code>empty.sdf</code> in Gazebo and add a few models through the <code>Resource Spawner</code> within the <code>plug-in browser</code> (mentioned above):
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            You won't be able to see the Resource Spawner in Docker, close the World and entity tree by right clicking on it.
                        </p>
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w4}
                            alt="Resource Spawner"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        You can also save the world go to the burger menu on the top left <code>save world</code>, name it as new_world.sdf.
                    </p>
                </section>

                {/* Download ROS Package */}
                <section id="download-package" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Download ROS Package
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        From now, every lesson has a starter package that you can download from GitHub. To download the starter package clone the following git repo to your colcon workspace:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`git clone https://github.com/thee-fool/winteros_week2.git`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's see what's inside the <code>erc_gazebo_basics</code> package with the <code>tree</code> command!
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`.
├── CMakeLists.txt
├── launch
│   └── world.launch.py
├── meshes
│   ├── IronMan_ROS_Body.dae
│   ├── IronManWheelLeftFront.dae
│   ├── IronManWheelRightFront.dae
│   ├── wheel.blend
│   ├── wheel.dae
│   ├── wheel.SLDPRT
│   ├── wheel.STEP
│   └── wheel.STL
├── package.xml
├── rviz
│   ├── rviz.rviz
│   └── urdf.rviz
├── urdf
│   └── materials.xacro
└── worlds
    ├── empty.sdf
    └── world.sdf`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        There are a few folders that we didn't met before:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <strong>meshes:</strong> this folder contains the 3D models in <code>dae</code> format (collada mesh) that we'll use later for our robot's body and wheels. In this lesson it also includes the SolidWorks and Blender models as reference, but it's not needed for the simulation.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>rviz:</strong> pre-configured RViz2 layouts that we can use to display the robot's model and the environment
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>urdf:</strong> URDF = Universal Robot Description Format. We'll create the model of our robots in this folder. It already has a file with color codes and names.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>worlds:</strong> we'll store the Gazebo worlds that we use in the simulation. In the next chapter we learn how to create a Gazebo world.
                        </li>
                    </ul>
                </section>

                {/* Creating a Gazebo World */}
                <section id="creating-world" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Creating a Gazebo World
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        Before we create a new world, let's see how can we open the example <code>world.sdf</code>. Let's navigate to the <code>worlds</code> folder and run the following command:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`gz sim world.sdf`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And it should open the example world I created for this package.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w5}
                            alt="Example World"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Now let's switch to the empty template:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`gz sim empty.sdf`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Build a world you like using the resource spawner and in the end save it into the worlds folder with <code>sdf</code> extension.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w6}
                            alt="Custom World"
                            className="rounded-xl w-full max-w-3xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Launch Gazebo World from ROS */}
                <section id="launch-gazebo-ros" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Launch Gazebo World from ROS
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        After we created the new world file, let's see how can we launch Gazebo and load the world using ROS. First, let's navigate to <code>launch</code> folder within the package. Inside this folder let's create a new launch file <code>world.launch.py</code>.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`import os
from ament_index_python.packages import get_package_share_directory
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, TextSubstitution

def generate_launch_description():
    world_arg = DeclareLaunchArgument(
        'world', default_value='world.sdf',
        description='Name of the Gazebo world file to load'
    )
    
    
    pkg_erc_gazebo_basics = get_package_share_directory('erc_gazebo_basics')
    pkg_ros_gz_sim = get_package_share_directory('ros_gz_sim')
    
    # Update this path to your actual gazebo models directory
    gazebo_models_path = "/home/ubuntu/gazebo_models"
    if os.path.exists(gazebo_models_path):
        os.environ["GZ_SIM_RESOURCE_PATH"] = os.environ.get("GZ_SIM_RESOURCE_PATH", "") + os.pathsep + gazebo_models_path
    
    gazebo_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(pkg_ros_gz_sim, 'launch', 'gz_sim.launch.py'),
        ),
        launch_arguments={'gz_args': [PathJoinSubstitution([
            pkg_erc_gazebo_basics,
            'worlds',
            LaunchConfiguration('world')
        ]),
        TextSubstitution(text=' -r -v -v1')],
        'on_exit_shutdown': 'true'}.items()
    )
    
    launchDescriptionObject = LaunchDescription()
    launchDescriptionObject.add_action(world_arg)
    launchDescriptionObject.add_action(gazebo_launch)
    
    return launchDescriptionObject`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        This launch file has one argument, the world file's name - you can change the default value to your new world. It also ensures that the offline Gazebo model folder is added to the environmental variable, and finally it launches Gazebo through the <code>ros_gz_sim</code> with the right arguments (note that the simulation will start automatically because of the <code>-r</code> flag).
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's build the workspace - if this is the first time that you build this package source the workspace - and we can launch our file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics world.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        At this point, the simulation stops being a toy and starts behaving like an actual system.<br />
                        One command. One configuration. Everything boots together.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g2}
                            alt="Iron Man Suit Up"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        "Iron man's launchfile" → his suitcase
                    </p>
                </section>

                {/* URDF */}
                <section id="urdf" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        URDF
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        URDF is Universal Robot Description Format, it's an XML format for representing a robot model commonly used in ROS, RViz and Gazebo.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        However, we still call it URDF, in practice it also includes the functionalities of <code>xacro</code>, in its full name XML macros. With <code>xacro</code> we can define re-usable constants, do basic mathematical calculations and substitute complete blocks of our robots with parametrized macros. It can be useful for example in case of a 6 DoF robot arm where all links and joints are identical with different length, diameter, weight, etc.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        A robot description (3D model) in URDF is built up as the tree of links and joints that connects links together. A parent link can have multiple children, but a link can only have a single parent.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        In the links we can define the mechanical parameters of the link (weight, inertia), the collision shape for the physical simulation and it's visual properties (e.g. detailed 3D models).
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        In the joints we define the parent and child links and we tell to the simulation what kind of joint do we have (fixed, rotation or linear).
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        For more detailed tutorials you can check out the official documentation{' '}
                        <a href="https://docs.ros.org/en/jazzy/Tutorials/Intermediate/URDF/URDF-Main.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>.
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-6 rounded">
                        <p className="text-sm leading-relaxed italic">
                            "If it moves, it has a frame. If it has a frame, it belongs in the tree."<br />
                            — StarkOS design notes
                        </p>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Building our robot 1
                    </h3>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            This part is optional, if you are interested you can do it. Add this file to urdf folder{' '}
                            <button
                                onClick={downloadDumeBot}
                                className="text-blue-400 hover:text-blue-300 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
                            >
                                dume_bot.urdf
                            </button>{' '}
                            and jump to{' '}
                            <button
                                onClick={() => {
                                    const element = document.getElementById('tf-tree');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="text-blue-400 hover:text-blue-300 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
                            >
                                TF Tree
                            </button>{' '}
                            part.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        First of all let's create our robot's URDF in the <code>urdf</code> folder with <code>dume_bot.urdf</code> name. To start from the bare minimum let's add the following xml code to the file.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`<?xml version='1.0'?>

<robot name="dume_bot" xmlns:xacro="http://www.ros.org/wiki/xacro">

  <!-- STEP 1 - Robot footprint -->
  <link name="base_footprint"></link>

</robot>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Now we only have the very first link of our robot without any mechanical, collision or visual properties, there is nothing to see yet.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's add a fix joint and the next link - <code>base_link</code> - that will be the body of our robot. It's a 40x20x10cm brick with 15kg, the inertia matrix is calculated from these parameters.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w7}
                            alt="Robot Dimensions"
                            className="rounded-xl w-full max-w-2xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        It's always very important to set realistic values into the inertia matrix, at least the order of magnitude should be in the right range. If the inertia matrix is set to a very unrealistic value it will cause unwanted effects during the physical simulation.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        To quickly calculate the inertia matrix from the mechanical parameters you can use various tools, for example{' '}
                        <a href="https://www.omnicalculator.com/physics/mass-moment-of-inertia" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            this online calculator
                        </a>.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We always have to think and verify the values if we use <code>xacro</code>, during these lessons I'll always use the numeric values for the better understanding. Let's add the robot body with the above parameters:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`  <!-- STEP 2 - Robot chassis = base_link -->
  <joint name="base_footprint_joint" type="fixed">
    <origin xyz="0 0 0" rpy="0 0 0" />
    <parent link="base_footprint"/>
    <child link="base_link" />
  </joint>

  <link name='base_link'>
    <pose>0 0 0.1 0 0 0</pose>

    <inertial>
      <mass value="15.0"/>
      <origin xyz="0.0 0 0" rpy=" 0 0 0"/>
      <inertia
          ixx="0.0625" ixy="0" ixz="0"
          iyy="0.2125" iyz="0"
          izz="0.25"
      />
      </inertial>

<collision name='collision'>
  <origin xyz="0 0 0" rpy=" 0 0 0"/> 
  <geometry>
    <box size=".4 .2 .1"/>
  </geometry>
</collision>

<visual name='base_link_visual'>
  <origin xyz="0 0 0" rpy=" 0 0 0"/>
  <geometry>
    <box size=".4 .2 .1"/>
  </geometry>
</visual>
</link>`}</code>
                    </pre>
                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                        <p className="text-sm leading-relaxed">
                            Links and joints always have to be inside the <code>&lt;robot&gt;</code> tag of the URDF!
                        </p>
                    </div>
                </section>
                {/* View Robot in RViz */}
                <section id="view-rviz" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        View the Robot in RViz
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Now we have a robot body that we can visualize. ROS provides several powerful tools to visualize various data, we already met <code>rqt</code> now we meet <code>RViz</code>.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We can start it with the <code>rviz2</code> command. Then we can add (1) the <code>Robot Model</code> view (2), we browse for our URDF file (3) and we type <code>base_link</code> as Fixed Frame (4).
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w8}
                            alt="RViz Setup"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Although is possible to use RViz like this, it's not the most convenient way. Later, when we add more links and joints we'll have the problem that the we don't have any program running that informs RViz about the right transformation among these links (if the joint isn't fixed).
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Instead of this manual usage of RViz, let's move all these tasks into a ROS launch file.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We have to install a few packages first:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`sudo apt install ros-jazzy-urdf
sudo apt install ros-jazzy-urdf-tutorial
sudo apt install ros-jazzy-urdf-launch`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Let's try what can we do with the <code>urdf-tutorial</code> package:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch urdf_tutorial display.launch.py model:=urdf/01-myfirst.urdf`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        The source of this package is available{' '}
                        <a href="https://github.com/ros/urdf_tutorial/tree/ros2" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>. This package does exactly what we need, but we cannot build up our tools onto <code>urdf-tutorial</code>, it's not suitable, but we can create our own launch file based on this package! Let's create the <code>check_urdf.launch.py</code> file in the launch folder with the following content:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution
from launch_ros.substitutions import FindPackageShare
def generate_launch_description():
pkg_erc_gazebo_basics = FindPackageShare('erc_gazebo_basics')
default_rviz_config_path = PathJoinSubstitution([pkg_erc_gazebo_basics, 'rviz', 'urdf.rviz'])

# Show joint state publisher GUI for joints
gui_arg = DeclareLaunchArgument(name='gui', default_value='true', choices=['true', 'false'],
                                description='Flag to enable joint_state_publisher_gui')

# RViz config file path
rviz_arg = DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                description='Absolute path to rviz config file')


# URDF model path within the erc_gazebo_basics package
model_arg = DeclareLaunchArgument(
    'model', default_value='dume_bot.urdf',
    description='Name of the URDF description to load'
)

# Use built-in ROS2 URDF launch package with our own arguments
urdf = IncludeLaunchDescription(
    PathJoinSubstitution([FindPackageShare('urdf_launch'), 'launch', 'display.launch.py']),
    launch_arguments={
        'urdf_package': 'erc_gazebo_basics',
        'urdf_package_path': PathJoinSubstitution(['urdf', LaunchConfiguration('model')]),
        'rviz_config': LaunchConfiguration('rvizconfig'),
        'jsp_gui': LaunchConfiguration('gui')}.items()
)

launchDescriptionObject = LaunchDescription()

launchDescriptionObject.add_action(gui_arg)
launchDescriptionObject.add_action(rviz_arg)
launchDescriptionObject.add_action(model_arg)
launchDescriptionObject.add_action(urdf)

return launchDescriptionObject`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        From now, in every lesson we'll create this launch file, because it's extremely useful during development to visualize our URDF. Build the workspace and let's try it:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics check_urdf.launch.py`}</code>
                    </pre>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w9}
                            alt="Robot in RViz"
                            className="rounded-xl w-full max-w-3xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>
                {/* Building our robot 2 */}
                <section id="building-robot-2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Building our robot 2
                    </h2>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        How to add color
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                        By default everything is rendered in red color in RViz because we were not defining the colors of the links. Let's color the body of our robot orange and the wheels green. To color a link we have to put a <code>&lt;material&gt;</code> tag into the <code>&lt;visual&gt;</code> tag of each links.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We can use the following tags:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`<material name="orange"/>
<material name="green"/>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        By default RViz won't be able to understand these color names though, to define these colors we can include the <code>materials.xacro</code> that is already in the package of this lesson. Add the following import to the very beginning of the URDF within the <code>&lt;robot&gt;</code> tag:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`  <!-- STEP 3 - RViz colors -->
  <xacro:include filename="$(find erc_gazebo_basics)/urdf/materials.xacro" />`}</code>
                    </pre>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Wheel
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Let's keep building the differential drive robot by adding the 4 wheels (color is already added in the wheel):
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`<!-- STEP 4 - Wheels -->
  <joint type="continuous" name="front_left_wheel_joint">
    <origin xyz="0.15 0.15 0" rpy="0 0 0"/>
    <child link="front_left_wheel"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" rpy="0 0 0"/>
    <limit effort="100" velocity="10"/>
    <dynamics damping="1.0" friction="1.0"/>
  </joint>

  <link name='front_left_wheel'>
    <inertial>
      <mass value="5.0"/>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <inertia
          ixx="0.014" ixy="0" ixz="0"
          iyy="0.014" iyz="0"
          izz="0.025"
      />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/> 
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
    </collision>

    <visual name='front_left_wheel_visual'>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
      <material name="green"/>
    </visual>
  </link>

  <joint type="continuous" name="rear_left_wheel_joint">
    <origin xyz="-0.15 0.15 0" rpy="0 0 0"/>
    <child link="rear_left_wheel"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" rpy="0 0 0"/>
    <limit effort="100" velocity="10"/>
    <dynamics damping="1.0" friction="1.0"/>
  </joint>

  <link name='rear_left_wheel'>
    <inertial>
      <mass value="5.0"/>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <inertia
          ixx="0.014" ixy="0" ixz="0"
          iyy="0.014" iyz="0"
          izz="0.025"
      />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/> 
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
    </collision>

    <visual name='rear_left_wheel_visual'>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
      <material name="green"/>
    </visual>
  </link>

  <joint type="continuous" name="front_right_wheel_joint">
    <origin xyz="0.15 -0.15 0" rpy="0 0 0"/>
    <child link="front_right_wheel"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" rpy="0 0 0"/>
    <limit effort="100" velocity="10"/>
    <dynamics damping="1.0" friction="1.0"/>
  </joint>

  <link name='front_right_wheel'>
    <inertial>
      <mass value="5.0"/>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <inertia
          ixx="0.014" ixy="0" ixz="0"
          iyy="0.014" iyz="0"
          izz="0.025"
      />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/> 
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
    </collision>

    <visual name='front_right_wheel_visual'>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
      <material name="green"/>
    </visual>
  </link>

  <joint type="continuous" name="rear_right_wheel_joint">
    <origin xyz="-0.15 -0.15 0" rpy="0 0 0"/>
    <child link="rear_right_wheel"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" rpy="0 0 0"/>
    <limit effort="100" velocity="10"/>
    <dynamics damping="1.0" friction="1.0"/>
  </joint>

  <link name='rear_right_wheel'>
    <inertial>
      <mass value="5.0"/>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <inertia
          ixx="0.014" ixy="0" ixz="0"
          iyy="0.014" iyz="0"
          izz="0.025"
      />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/> 
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
    </collision>

    <visual name='rear_right_wheel_visual'>
      <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
      <geometry>
        <cylinder radius=".1" length=".05"/>
      </geometry>
      <material name="green"/>
    </visual>
  </link>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Rebuild the workspace and let's see it using rviz:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics check_urdf.launch.py`}</code>
                    </pre>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w10}
                            alt="Robot with wheels in RViz"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* TF Tree */}
                <section id="tf-tree" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        TF Tree
                    </h2>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            <strong>Note:</strong> If you skipped building the robot URDF earlier, this section may feel a bit abstract — that's okay.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        The key idea is simple:
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Every part of a robot has its own <strong>reference frame</strong> — a coordinate system attached to that part.<br />
                        You can think of it as each component describing the world from <em>its own point of view</em>.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        When data needs to move between parts (position, velocity, orientation), ROS must <strong>transform</strong> that data from one frame to another.<br />
                        That's exactly what the <strong>TF Tree</strong> represents — how all these frames are connected and how information flows between them.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        You don't need to master this now.<br />
                        Just remember: robots don't agree on "where things are" unless TF tells them how to translate between viewpoints.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        It's time to get to know another useful tool of ROS, the <code>TF Tree</code>. This tool helps visualizing the transformations between the reference frames of the robot. First we need to install the tool:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`sudo apt install ros-jazzy-rqt-tf-tree`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        After that, let's view our robot with the previous command in RViz:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics check_urdf.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        and in another terminal let's run TF Tree:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run rqt_tf_tree rqt_tf_tree`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            You might experience an issue during the first start of TF Tree, in this case make sure that this rqt plugin is discovered:
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mt-2">
                            <code>{`ros2 run rqt_tf_tree rqt_tf_tree --force-discover`}</code>
                        </pre>
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w11}
                            alt="TF Tree visualization"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Load URDF in Gazebo */}
                <section id="load-urdf-gazebo" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Load the URDF in Gazebo
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Now we have a robot model that we see in RViz, but RViz is just a visualization tool, even if we can rotate some joints with the <code>joint_state_publisher_gui</code> it has nothing to do with the physical simulation. To insert our robot model into the Gazebo simulation environment we have to write a new launch file that spawns the robot through the right services of Gazebo.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        At this stage, think of RViz as Stark's design table — blueprints, rotations, and mockups.<br />
                        Gazebo is the test chamber.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Nothing moves in the real world until the design is <em>inserted into physics</em>.<br />
                        This step is where our robot stops being a diagram and starts existing inside gravity, collisions, and time.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's create <code>spawn_robot.launch.py</code> in our launch folder:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_gazebo_basics = get_package_share_directory('erc_gazebo_basics')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_gazebo_basics)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz.'
    )

    world_arg = DeclareLaunchArgument(
        'world', default_value='world.sdf',
        description='Name of the Gazebo world file to load'
    )

    model_arg = DeclareLaunchArgument(
        'model', default_value='dume_bot.urdf',
        description='Name of the URDF description to load'
    )

    # Define the path to your URDF or Xacro file
    urdf_file_path = PathJoinSubstitution([
        pkg_erc_gazebo_basics,
        "urdf",
        LaunchConfiguration('model')
    ])

    world_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(
            os.path.join(pkg_erc_gazebo_basics, 'launch', 'world.launch.py'),
        ),
        launch_arguments={
        'world': LaunchConfiguration('world'),
        }.items()
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', os.path.join(pkg_erc_gazebo_basics, 'rviz', 'rviz.rviz')],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': True},
        ]
    )

    # Spawn the URDF model using the /world/<world_name>/create service
    spawn_urdf_node = Node(
        package="ros_gz_sim",
        executable="create",
        arguments=[
            "-name", "my_robot",
            "-topic", "robot_description",
            "-x", "0.0", "-y", "0.0", "-z", "0.5", "-Y", "0.0"
        ],
        output="screen",
        parameters=[
            {'use_sim_time': True},
        ]
    )

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        name='robot_state_publisher',
        output='screen',
        parameters=[
            {'robot_description': Command(['xacro', ' ', urdf_file_path]),
             'use_sim_time': True},
        ],
        remappings=[
            ('/tf', 'tf'),
            ('/tf_static', 'tf_static')
        ]
    )

    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(world_arg)
    launchDescriptionObject.add_action(model_arg)
    launchDescriptionObject.add_action(world_launch)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(spawn_urdf_node)
    launchDescriptionObject.add_action(robot_state_publisher_node)
    launchDescriptionObject.add_action(joint_state_publisher_gui_node)

    return launchDescriptionObject`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        This launch file will include the <code>world.launch.py</code> that we created earlier, so we don't have to start and load the world into Gazebo separately. It will also open RViz with a pre-configured view. We see 3 new nodes that we didn't use (or didn't know that we used) before:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <code>create</code> node of the <code>ros_gz_sim</code> package to spawn the robot from the <code>robot_description</code> topic into a specific location within the simulation.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>robot_state_publisher</code> will convert and load the URDF/xacro into the <code>robot_description</code> topic it's providing the transformations between the links using static transforms from the URDF and dynamic transforms from real time <code>joint_states</code> topic
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>joint_state_publisher_gui</code> is a <code>joint_state_publisher</code> with the small graphical utility to change joint angles. This node is responsible to update dynamic changes between links through the <code>joint_states</code> topic
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        Although we didn't know before, we've already used the <code>robot_state_publisher</code> and <code>joint_state_publisher_gui</code> through the <code>urdf_launch</code> package that is the basis of our <code>check_urdf.launch.py</code>. We can see how these nodes are used in the <code>description.launch.py</code> and in the <code>display.launch.py</code> files{' '}
                        <a href="https://github.com/ros/urdf_launch/tree/main/launch" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We have to rebuild the workspace and we can try this new launch file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Right now, nothing publishes odometry for our robot so let's change the fixed frame to the <code>base_footprint</code> in RViz.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w12}
                            alt="Robot spawned in Gazebo"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        We see that doesn't matter how we change the wheel joint angles it has no impact on the physical simulation. We did the first step, the robot is spawned into a Gazebo simulation, but the integration just starts from here.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        The robot now <em>exists</em> inside the simulator — it has mass, collisions, and a place in the world.<br />
                        But it is still lifeless.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        No motors.<br />
                        No control logic.<br />
                        No understanding of motion.<br /><br />
                        Just like a suit frame on the workshop floor — complete in shape, useless without actuators and control.
                    </p>
                </section>

                {/* Gazebo Integration */}
                <section id="gazebo-integration" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Gazebo Integration
                    </h2>

                    <p className="text-lg leading-relaxed mb-6">
                        To finally drive our robot in the physical simulation we have to do 2 things, adding a Gazebo plugin that can move the differential drive robot and bridging messages between ROS and Gazebo. Let's start with the first one:
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Diff drive plugin
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Typical differential drive robots are hoverboards, robot vacuum cleaners and robot lawnmovers.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We'll use{' '}
                        <a href="https://gazebosim.org/api/sim/8/classgz_1_1sim_1_1systems_1_1DiffDrive.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            the following Gazebo plugin
                        </a>{' '}
                        to drive our robots. The kinematics of the differential robot is very simple, the radius from the center of curvature is <code>R</code>, the rate of rotation is <code>ω</code> and the wheel speeds are <code>Vl</code> and <code>Vr</code>. The distance between the wheels is <code>l</code>.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w13}
                            alt="Differential Drive Kinematics"
                            className="rounded-xl w-full max-w-2xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        We can describe the kinematics of the differential drive robot{' '}
                        <a href="https://www.cs.columbia.edu/~allen/F17/NOTES/icckinematics.pdf" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            with the following equations
                        </a>:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w14}
                            alt="Differential Drive Equations"
                            className="rounded-xl w-full max-w-2xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        There are 3 special cases of the above equations:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                        <li className="text-lg leading-relaxed">
                            <code>Vl = Vr</code>, in this case <code>R</code> is infinite and <code>ω = 0</code>, the robot is moving straight.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>Vl = -Vr</code>, in this case <code>R = 0</code> and the center of curvature is between the 2 wheels. The robot rotates in place.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>Vl = 0</code> or <code>Vr = 0</code>, in this case <code>R = l / 2</code>, the center of curvature is the standing wheel.
                        </li>
                    </ol>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g3}
                            alt="Math again gif"
                            className="rounded-xl w-full max-w-3xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        Idhar Bhi maths aa gaya
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        The Gazebo plugin is in one hand responsible for calculating the wheel speeds from the control signal. In the other hand, it also implements inverse kinematics, the robot's odometry is calculated from the integral of the wheels speeds and the wheel distance.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's create a <code>dume_bot.gazebo</code> file in the URDF folder:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`<?xml version="1.0"?>
<robot>
  <gazebo>
    <plugin
        filename="gz-sim-diff-drive-system"
        name="gz::sim::systems::DiffDrive">
        <!-- Topic for the command input -->
        <topic>/cmd_vel</topic>

        <!-- Wheel joints -->
        <left_joint>front_left_wheel_joint</left_joint>
        <left_joint>rear_left_wheel_joint</left_joint>
        <right_joint>front_right_wheel_joint</right_joint>
        <right_joint>rear_right_wheel_joint</right_joint>

        <!-- Wheel parameters -->
        <wheel_separation>0.3</wheel_separation>
        <wheel_radius>0.1</wheel_radius> 

        <!-- Control gains and limits (optional) -->
        <max_velocity>3.0</max_velocity> 
        <max_linear_acceleration>1</max_linear_acceleration>
        <min_linear_acceleration>-1</min_linear_acceleration>
        <max_angular_acceleration>2</max_angular_acceleration>
        <min_angular_acceleration>-2</min_angular_acceleration>
        <max_linear_velocity>0.5</max_linear_velocity>
        <min_linear_velocity>-0.5</min_linear_velocity>
        <max_angular_velocity>1</max_angular_velocity>
        <min_angular_velocity>-1</min_angular_velocity>
        
        <!-- Other parameters (optional) -->
        <odom_topic>odom</odom_topic> 
        <tf_topic>tf</tf_topic>
        <frame_id>odom</frame_id>
        <child_frame_id>base_footprint</child_frame_id>
        <odom_publish_frequency>30</odom_publish_frequency>
    </plugin>

    <plugin
        filename="gz-sim-joint-state-publisher-system"
        name="gz::sim::systems::JointStatePublisher">
        <topic>joint_states</topic>
        <joint_name>front_left_wheel_joint</joint_name>
        <joint_name>front_right_wheel_joint</joint_name>
        <joint_name>rear_left_wheel_joint</joint_name>
        <joint_name>rear_right_wheel_joint</jjoint_name>
    </plugin>
  </gazebo>
</robot>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        The <code>gz-sim-diff-drive-system</code> plugin is handling the differential drive kinematics, and we will use another plugin <code>gz-sim-joint-state-publisher-system</code> to publish joint states from Gazebo to ROS2.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's include this new file in our robot's URDF. In the same way how we included the colors, let's add it to the top of our URDF within the <code>&lt;robot&gt;</code> tag.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`  <!-- STEP 5 - Gazebo plugin -->
  <xacro:include filename="$(find erc_gazebo_basics)/urdf/dume_bot.gazebo" />`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Rebuild the workspace and let's try it:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        We see that odometry is still not published for RViz, but at least in Gazebo we can already drive our robot with the <code>teleop</code> plugin:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w15}
                            alt="Gazebo Teleop Plugin"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6">
                        But - just like the odometry - this message is also not forwarded between ROS and Gazebo.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        ROS gz bridge
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        First of all remove the <code>joint_state_publisher_gui</code> from the <code>spawn_robot.launch.py</code> because as soon as we can forward the messages between ROS and Gazebo, Gazebo will handle updating the <code>joint_state</code> topic.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        After that we add another node the <code>parameter_bridge</code> from the <code>ros_gz_bridge</code> package.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    # Node to bridge messages like /cmd_vel and /odom
    gz_bridge_node = Node(
        package="ros_gz_bridge",
        executable="parameter_bridge",
        arguments=[
            "/clock@rosgraph_msgs/msg/Clock[gz.msgs.Clock",
            "/cmd_vel@geometry_msgs/msg/Twist@gz.msgs.Twist",
            "/odom@nav_msgs/msg/Odometry@gz.msgs.Odometry",
            "/joint_states@sensor_msgs/msg/JointState@gz.msgs.Model",
            "/tf@tf2_msgs/msg/TFMessage@gz.msgs.Pose_V"
        ],
        output="screen",
        parameters=[
            {'use_sim_time': True},
        ]
    )`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Make sure <code>ros_gz_bridge</code> is installed!
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mt-2">
                            <code>{`sudo apt install ros-jazzy-ros-gz-bridge`}</code>
                        </pre>
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        You can find the detailed documentation of <code>ros_gz_bridge</code>{' '}
                        <a href="https://github.com/gazebosim/ros_gz/tree/ros2/ros_gz_bridge" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            here
                        </a>. It explains the syntax of bridging topics in details also you can see what kind of messages can be bridged.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We forward the following topics:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <code>/clock</code>: The topic used for tracking simulation time or any custom time source.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>/cmd_vel</code>: We'll control the simulated robot from this ROS topic.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>/odom</code>: Gazebo's diff drive plugin provides this odometry topic for ROS consumers.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>/joint_states</code>: Gazebo's other plugin provides the dynamic transformation of the wheel joints.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>/tf</code>: Gazebo provides the real-time computation of the robot's pose and the positions of its links, sensors, etc.
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        At this point, ROS and Gazebo are both running — but they are speaking different languages.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        The bridge is the translator.<br />
                        Commands go in.<br />
                        Physics comes back.<br />
                        And suddenly, the simulation becomes controllable from ROS.
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            We forward the above messages bi-directionally between ROS2 and Gazebo except <code>/clock</code>. Clock should be published by Gazebo only if we are using simulated environment, but if another node already publishes to the <code>/clock</code> topic the bi-directional bridge won't be created. In the current complexity of the simulation this is not very important, but later this can cause problems. So we have to make sure that <code>/clock</code> is forwarded only in the Gazebo → ROS2 direction, this we can achieve with using the <code>[</code> symbol instead of <code>@</code> in the arguments.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Don't forget to add the new node to the <code>LaunchDescription()</code> object:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    launchDescriptionObject.add_action(gz_bridge_node)`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-6">
                        Then rebuild the workspace.
                    </p>
                </section>

                {/* Driving Around */}
                <section id="driving-around" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Driving Around
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g4}
                            alt="Tony Stark Driving"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        Tony Stark Driving Around
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Now it's time to launch the simulation:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And in another terminal let's start the <code>teleop_twist_keyboard</code>:
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        We can try to drive the robot from ROS with the <code>teleop_twist_keyboard</code> node:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run teleop_twist_keyboard teleop_twist_keyboard`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            If <code>teleop_twist_keyboard</code> is not installed yet, you can install it with the following command:
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mt-2">
                            <code>{`sudo apt install ros-jazzy-teleop-twist-keyboard`}</code>
                        </pre>
                    </div>

                    <p className="text-lg leading-relaxed mb-6">
                        You will be able to run the bot through the terminal
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        The friction between the wheels and the ground plane can be unrealistic so we can adjust it inside our URDF, let's add the following physical simulation parameters to the end of our URDF before the <code>&lt;/robot&gt;</code> tag is closed:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`   <!-- STEP 6 - Gazebo frictions  -->
  <gazebo reference="front_left_wheel">
    <mu1>1.5</mu1>
    <mu2>0.7</mu2>
    <kp>200000.0</kp>
    <kd>5000.0</kd>
    <minDepth>0.002</minDepth>
    <maxVel>0.3</maxVel>
    <fdir1>0 1 0</fdir1>
  </gazebo>

  <gazebo reference="front_right_wheel">
    <mu1>1.5</mu1>
    <mu2>0.7</mu2>
    <kp>200000.0</kp>
    <kd>5000.0</kd>
    <minDepth>0.002</minDepth>
    <maxVel>0.3</maxVel>
    <fdir1>0 1 0</fdir1>
  </gazebo>

  <gazebo reference="rear_left_wheel">
    <mu1>1.5</mu1>
    <mu2>0.7</mu2>
    <kp>200000.0</kp>
    <kd>5000.0</kd>
    <minDepth>0.002</minDepth>
    <maxVel>0.3</maxVel>
    <fdir1>0 1 0</fdir1>
  </gazebo>

  <gazebo reference="rear_right_wheel">
    <mu1>1.5</mu1>
    <mu2>0.7</mu2>
    <kp>200000.0</kp>
    <kd>5000.0</kd>
    <minDepth>0.002</minDepth>
    <maxVel>0.3</maxVel>
    <fdir1>0 1 0</fdir1>
  </gazebo>

  <gazebo reference="base_link">
    <mu1>0.000002</mu1>
    <mu2>0.000002</mu2>
  </gazebo>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-6">
                        Built the package and source the workspace, run the robot launch file and teleop in the terminals
                    </p>
                </section>

                {/* Odometry and Trajectory */}
                <section id="odometry-trajectory" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Odometry and Trajectory server
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        If we use the <code>rqt_tf_tree</code> tool that we met earlier, we can see an additional transformation between the <code>base_footprint</code> and the <code>odom</code> frame:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w16}
                            alt="TF Tree with Odometry"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        I created a node that helps visualizing the odometry and the trajectory of the robot. Clone the following repo into your workspace (go to src and clone this repo):
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`git clone https://github.com/MOGI-ROS/mogi_trajectory_server`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Rebuild you worksapce and also source the environment since we added a new package (or simply open a new terminal window and .bashrc does the job).
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Then add the node to the <code>spawn_robot.launch.py</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    trajectory_node = Node(
        package='mogi_trajectory_server',
        executable='mogi_trajectory_server',
        name='mogi_trajectory_server',
    )`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And also add it to the <code>LaunchDescription()</code> object:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    launchDescriptionObject.add_action(trajectory_node)`}</code>
                    </pre>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            This package provides a node that saves trajectory data using a TransformListener between <code>reference_frame_id</code> and <code>robot_frame_id</code>, the trajectory is saved internally as a <code>nav_msgs/Path</code> and can be obtained through the <code>trajectory_topic</code> topic.
                        </p>
                    </div>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            There is some problem with the mogi_trajectory_server it uses bitbots_tf_buffer which does not work as expected therefore we will stick with the goated method which uses tf2_ros, navigate to the <code>src/mogi_trajectory_server/mogi_trajectory_server/trajectory.py</code> and replace the whole code with:
                        </p>
                    </div>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`import rclpy
from rclpy.node import Node
from rclpy.duration import Duration
from nav_msgs.msg import Path
from geometry_msgs.msg import PoseStamped, TransformStamped
from tf2_ros import TransformListener, Buffer
import math

class TrajectoryPublisher(Node):
    def __init__(self):
        super().__init__('trajectory_publisher')
        self.declare_parameter("trajectory_topic", "trajectory")
        self.declare_parameter("reference_frame_id", "odom")
        self.declare_parameter("robot_frame_id", "base_link")
        self.declare_parameter("update_rate", 3.0) # in Hz
        self.declare_parameter("publish_rate", 2.0) # in Hz
        self.declare_parameter("min_distance", 0.1) # in meters

        # TF2 Listener - standard tf2_ros implementation
        self.tf_buffer = Buffer()
        self.tf_listener = TransformListener(self.tf_buffer, self)

        # Default values
        self.update_rate = self.get_parameter("update_rate").value
        self.publish_rate = self.get_parameter("publish_rate").value
        self.min_distance = self.get_parameter("min_distance").value
        self.reference_frame_id = self.get_parameter("reference_frame_id").value
        self.robot_frame_id = self.get_parameter("robot_frame_id").value
        self.use_sim_time = self.get_parameter('use_sim_time').get_parameter_value().bool_value

        # Create separate timers for publisher and transformation
        self.path_pub = self.create_publisher(Path, self.get_parameter("trajectory_topic").value, 10)
        self.publish_timer = self.create_timer(1.0/self.publish_rate, self.publish_trajectory)
        self.transform_timer = self.create_timer(1.0/self.update_rate, self.get_pose)
        
        # Trajectory message header is the same as target frame id
        self.last_pose = None
        self.path = Path()
        self.path.header.frame_id = self.get_parameter("reference_frame_id").value

    def get_pose(self):
        try:
            # Look up the transformation between reference frame and robot frame
            transform: TransformStamped = self.tf_buffer.lookup_transform(
                self.reference_frame_id,
                self.robot_frame_id,
                rclpy.time.Time(),
                timeout=rclpy.duration.Duration(seconds=1.0)
            )

            # This will always use the right clock based on value of use_sim_time
            now = self.get_clock().now().to_msg()

            # Extract the position
            pose = PoseStamped()
            pose.header.stamp = now
            pose.header.frame_id = self.reference_frame_id
            pose.pose.position.x = transform.transform.translation.x
            pose.pose.position.y = transform.transform.translation.y
            pose.pose.position.z = transform.transform.translation.z
            pose.pose.orientation = transform.transform.rotation

            # Append the first pose anyway to the path
            if self.last_pose == None:
                self.path.poses.append(pose)
                self.last_pose = pose
                return

            # Check the distance change in 3D
            distance_moved = math.sqrt(
                (pose.pose.position.x - self.last_pose.pose.position.x) ** 2 +
                (pose.pose.position.y - self.last_pose.pose.position.y) ** 2 +
                (pose.pose.position.z - self.last_pose.pose.position.z) ** 2
            )
            
            if distance_moved >= self.min_distance:
                # Append the pose to the path
                self.path.poses.append(pose)
                self.last_pose = pose

            return

        except Exception as e:
            self.get_logger().warn(f"Could not get transform: {e}")
            return

    def publish_trajectory(self):
        # Create timestamp for the header
        self.path.header.stamp = self.get_clock().now().to_msg()
        # Publish the path
        self.path_pub.publish(self.path)

def main(args=None):
    rclpy.init(args=args)
    trajectory_publisher = TrajectoryPublisher()
    rclpy.spin(trajectory_publisher)
    trajectory_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Don't forget to build the package and source the workspace.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Then launch the simulation:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_basics spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And in another terminal let's start the <code>teleop_twist_keyboard</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run teleop_twist_keyboard teleop_twist_keyboard`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And let's see how it looks like in RViz:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w17}
                            alt="Trajectory in RViz"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        We can also see how the nodes are connected to each other using the tool we previously met, <code>rqt_graph</code>:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w18}
                            alt="RQT Graph Complete System"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>
                {/* 3D Models */}
                <section id="3d-models" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        3D Models
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Let's make our robot visually more appealing with some 3D models. I already created the 3D models that can be found in the <code>meshes</code> folder. We can either use <code>.stl</code> files or <code>.dae</code> collada meshes. I recommend the collada meshes because then we can individually color certain areas of meshes (e.g. the tyre, the hub and spokes in case of the wheel). With <code>.stl</code> files we can only assign a single color for the model.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is where the robot stops being a box and starts looking like a machine.<br />
                        Visuals don't affect physics — but they <em>do</em> affect how real the system feels.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Creating a model consists of the following recommended steps:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            Create your model in SolidWorks or any other CAD program and save it to an <code>.stl</code> file.
                        </li>
                        <li className="text-lg leading-relaxed">
                            Import <code>.stl</code> to Blender and export it as <code>.dae</code>, add the model to the URDF and always check it with the <code>check_urdf.launch.py</code>, usually the scale and the centerpoint of the model isn't right.
                        </li>
                        <li className="text-lg leading-relaxed">
                            Iteratively rescale and move the model in Blender, always export to the same <code>.dae</code> file, when everything is in the right place, color the model in Blender</li>
                    </ol>
                    <p className="text-lg leading-relaxed mb-3">
                        The collada meshes are already available for this robot, so it's time to replace the box and cylinders in the URDF file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`    < visual name='base_link_visual'>
                            <origin xyz="0 0 0" rpy=" 0 0 0" />
                            <geometry>
                                <mesh filename="package://erc_gazebo_basics/meshes/IronMan_ROS_Body.dae" />
                                <!-- <box size=".4 .2 .1" /> -->
                            </geometry>
                            <!-- <material name="orange" /> -->
                        </visual>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Similarly do for wheels:
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        For left front and right rear wheel:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`<mesh filename = "package://erc_gazebo_basics/meshes/IronManWheelLeftFront.dae"/>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        and for right front and left rear wheel:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`<mesh filename = "package://erc_gazebo_basics/meshes/IronManWheelRightFront.dae"/>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        ex:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    <visual name='front_left_wheel_visual'>
  <origin xyz="0 0 0" rpy="0 1.5707 1.5707"/>
  <geometry>
    <!-- <cylinder radius=".1" length=".05"/> -->
    <mesh filename = "package://erc_gazebo_basics/meshes/IronManWheelLeftFront.dae"/>
  </geometry>
  <!-- <material name="green"/> -->
</visual>
</link>`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        This is the "try it on" moment — the system works, now it finally looks right.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Note that also <code>&lt;material&gt;</code> tag is removed, if we don't remove it, Gazebo will still apply a single color on the model!
                        </p>
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w19}
                            alt="Robot with 3D Models"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>
                {/* Part 1 Done */}
                <section id="part1-done" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 border-l-4 border-green-400 pl-6">
                        Part 1 — Done
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        You built a full robot pipeline:<br />
                        URDF → RViz → Gazebo → ROS control → motion → visualization → real meshes.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        This is a real simulated robot now.
                    </p>

                    <div className="mb-8 flex justify-center">
                        <img
                            src={g5}
                            alt="Tony Stark Approves"
                            className="rounded-xl w-full max-w-2xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        Tony Stark Approves of Your Work
                    </p>

                    <p className="text-lg leading-relaxed mb-6 text-center">
                        Next up: giving the robot awareness — sensors and perception in Gazebo.<br />
                        👉 <strong>Part 2 — Gazebo with Sensors</strong>
                    </p>

                    <div className="flex justify-center">
                        <button
                            onClick={() => navigate('/week2p2')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl font-bold shadow-lg"
                        >
                            Continue to Part 2 →
                        </button>
                    </div>
                </section>
            </div>
        </div >
    );
}
