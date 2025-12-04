import React, { useState, useEffect } from 'react';
import w1 from '../assets/week0_1.gif';
import w2 from '../assets/week0_2.png';
import w3 from '../assets/week0_3.png';
import w4 from '../assets/week0_4.png';
import w5 from '../assets/week0_5.png';
import w6 from '../assets/week0_6.png';
import w7 from '../assets/week0_7.png';
import w8 from '../assets/week0_8.gif';

import { useNavigate } from "react-router-dom";

export default function Week0() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0); // kept for parity with winteros.jsx

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
        className={`fixed top-0 right-0 h-full w-80 glass-strong z-40 transition-transform duration-300 overflow-y-auto ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-20">
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 0 Navigation</h3>
          <ul className="space-y-4">
            <li><button onClick={() => navigate('/winteros')}className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
            <li>
              <button
                onClick={() => scrollToSection('intro')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                ⚙️ Initialization Sequence
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('index')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                📚 Index
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('windows')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                🪟 Windows Installation
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('macos')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                🍎 macOS Installation
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('ubuntu')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                🐧 Ubuntu + Docker
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('native-ros')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                ⚡ Native ROS2 Jazzy
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('systems-online')}
                className="text-lg hover:text-blue-400 transition-colors w-full text-left"
              >
                🧠 Systems Online
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
          {/* Hero Image Placeholder */}
          {/* <div className="mb-8 flex justify-center">
            <img
              src="WEEK0_HERO_IMAGE_PLACEHOLDER"
              alt="Docker & ROS Cave Terminal"
              className="rounded-2xl max-w-2xl w-full h-auto border-2 border-blue-400/20"
            />
          </div> */}
          {/* Back Button */}
                <button
                    onClick={() => navigate('/winteros')}
                    className="absolute top-30 left-8 flex items-center gap-3 px-6 py-3 glass rounded-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 group text-lg font-semibold shadow-lg"
                >
                    <svg
                        className="w-6 h-6 transform group-hover:-translate-x-2 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to WinterROS Home</span>
                </button>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">
            Week 0<span className="text-white"> — Initialization Sequence</span>
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
            Docker Installation & Running ROS Containers
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Project Mark-1: <span className="text-red-400 font-semibold">Powering Up the Cave Terminal</span>
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro Section */}
        <section id="intro" className="glass-strong rounded-2xl p-8 mb-12">
          <p className="text-lg leading-relaxed mb-4">
            Before Tony Stark could weld armor plates or fire up a repulsor, he needed one thing above all:{' '}
            <strong>a working cave terminal</strong> — a system capable of running ROS, simulations, sensors, and code.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            This guide is that first spark — powering up your own cave setup by installing Docker and preparing the
            environment where every part of the Mark-1 (Weeks 0–5) will be built.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Once everything is ready, your ROS container will run like this:
          </p>

          {/* GIF Placeholder */}
          <div className="mb-4 flex justify-center">
            <img
              src={w1}
              alt="ROS container running preview"
              className="rounded-xl w-full max-w-2xl h-auto border-2 border-blue-400/20"
            />
          </div>

          <div className="mt-6 glass rounded-xl p-4 border-l-4 border-blue-400">
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">❄️ Week 0 Begins</h2>
            <p className="text-lg leading-relaxed mb-2">
              Before building intelligence, mobility, vision, or manipulation for the Mark-1, you need the{' '}
              <strong>base system</strong>.
            </p>
            <p className="text-lg leading-relaxed mb-2">
              This installation is the <strong>System Boot Protocol</strong> — the foundational step Tony had to take
              before creating anything else. Once your ROS container runs, you’re ready to begin forging the digital
              nervous system of Stark’s escape machine.
            </p>
          </div>
        </section>

        {/* Index Section */}
        <section id="index" className="glass-strong rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">📚 Index</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <button
                onClick={() => scrollToSection('windows')}
                className="hover:text-blue-400 text-left"
              >
                Windows Installation
              </button>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <button
                onClick={() => scrollToSection('macos')}
                className="hover:text-blue-400 text-left"
              >
                macOS Installation
              </button>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <button
                onClick={() => scrollToSection('ubuntu')}
                className="hover:text-blue-400 text-left"
              >
                Ubuntu Installation (Docker Desktop)
              </button>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3 mt-1">•</span>
              <button
                onClick={() => scrollToSection('native-ros')}
                className="hover:text-blue-400 text-left"
              >
                ROS Installation in Native Ubuntu (No Docker)
              </button>
            </li>
          </ul>
        </section>

        {/* Windows Section */}
        <section id="windows" className="glass-strong rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
            🪟 For Windows
          </h2>

          {/* Step 1 */}
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
            Step 1: Install WSL (Windows Subsystem for Linux)
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open <strong>PowerShell</strong> as Administrator.</li>
            <li>
              Run this command:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`wsl --install`}</code>
              </pre>
            </li>
            <li>Once the installation is complete, reboot your system.</li>
          </ol>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> If you already have WSL installed, you can skip this step and move to the next
              one. You can check if WSL is installed by running <code>wsl --list --verbose</code> in PowerShell. It
              will show the list of distros installed in WSL, or say command not found if it’s not installed.
            </p>
          </div>

          {/* Step 2 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 2: Install Docker Desktop
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>
              Visit the{' '}
              <a
                href="https://docs.docker.com/desktop/setup/install/windows-install/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Docker installation page for Windows
              </a>
              .
            </li>
            <li>Download the <code>.exe</code> file for Docker Desktop.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>After installation, reboot your system.</li>
          </ol>

          {/* Step 3 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 3: Running the ROS Container
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open <strong>Docker Desktop</strong> after logging into your system.</li>
            <li>In the bottom-right corner, open the <strong>Docker Terminal</strong>.</li>
          </ol>

          {/* Windows Image Placeholder 1 */}
          <div className="my-4 flex justify-center">
            <img
              src={w2}
              alt="Docker Desktop terminal on Windows"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          <ol className="list-decimal pl-8 space-y-2 text-lg mt-4">
            <li>
              Run the following command to start the ROS Docker container:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`docker run -p 6080:80 --security-opt seccomp=unconfined --shm-size=512m adtyp/winteros_docker:jazzy`}</code>
              </pre>
            </li>
            <li>Wait for the container to initialize. This may take around 30 minutes for first-time users.</li>
          </ol>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> First launch takes 20–30 minutes as Docker assembles the system — just like Tony’s
              first cave prototype.
            </p>
          </div>

          {/* Windows Image Placeholder 2 */}
          <div className="my-4 flex justify-center">
            <img
              src={w3}
              alt="ROS container logs on Windows"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          {/* Step 4 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 4: Access ROS in the Browser
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open your web browser.</li>
            <li>In the address bar, type <code>localhost:6080</code> and press Enter.</li>
            <li>You should now see your ROS environment running inside Docker.</li>
            <li>
              To stop it, press <code>Ctrl + C</code> in the terminal. To run the container again, just toggle the
              play button in Docker Desktop — no need to run the command again.
            </li>
          </ol>

          {/* Windows Image Placeholder 3 */}
          <div className="my-4 flex justify-center">
            <img
              src={w4}
              alt="ROS VNC session in browser on Windows"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> You only need to paste the command once. From next time, simply use the play button
              in the <strong>Containers</strong> section of Docker Desktop.
            </p>
          </div>
        </section>

        {/* macOS Section */}
        <section id="macos" className="glass-strong rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
            🍎 For macOS
          </h2>

          {/* Step 1 */}
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
            Step 1: Install XQuartz — External HUD Renderer
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Tony built his HUD from scraps.
            <br />
            You&apos;re installing yours with a DMG file.
          </p>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>
              Download and install XQuartz from{' '}
              <a
                href="https://www.xquartz.org/releases/XQuartz-2.8.1.html"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                here
              </a>
              .
            </li>
            <li>Follow the on-screen instructions to complete the installation.</li>
          </ol>

          {/* Step 2 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 2: Install Docker Desktop
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>
              Visit the{' '}
              <a
                href="https://docs.docker.com/desktop/setup/install/mac-install/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Docker installation page for macOS
              </a>
              .
            </li>
            <li>Download the <code>.dmg</code> file for Docker Desktop.</li>
            <li>Run the <code>.dmg</code> and follow the instructions.</li>
          </ol>

          {/* macOS Image Placeholder 1 */}
          <div className="my-4 flex justify-center">
            <img
              src={w5}
              alt="Docker Desktop terminal on macOS"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          {/* Step 3 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 3: Running the ROS Container
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open <strong>Docker Desktop</strong> after logging into your system.</li>
            <li>In the bottom-right corner, open the <strong>Docker Terminal</strong>.</li>
            <li>
              Run:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`docker run -p 6080:80 --security-opt seccomp=unconfined --shm-size=512m adtyp/winteros_docker:jazzy`}</code>
              </pre>
            </li>
            <li>Wait for the container to initialize (may take around 30 minutes for first-time users).</li>
          </ol>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> The first run may take some time to download necessary files and set up the
              environment.
            </p>
          </div>

          {/* macOS Image Placeholder 2 */}
          <div className="my-4 flex justify-center">
            <img
              src={w6}
              alt="ROS container logs on macOS"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          {/* Step 4 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 4: Access ROS in the Browser (HUD Access)
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open your web browser.</li>
            <li>Type <code>localhost:6080</code> in the address bar and press Enter.</li>
            <li>You should now see your ROS environment running inside Docker.</li>
            <li>
              To stop it, press <code>Ctrl + C</code> in the terminal. To run it again, toggle the play button in Docker
              Desktop.
            </li>
          </ol>

          {/* macOS Image Placeholder 3 */}
          <div className="my-4 flex justify-center">
            <img
              src={w7}
              alt="ROS VNC session in browser on macOS"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> Same as Windows — you only paste the command once. After that, use the Containers
              tab in Docker Desktop to start/stop.
            </p>
          </div>
        </section>

        {/* Ubuntu + Docker Section */}
        <section id="ubuntu" className="glass-strong rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
            🐧 For Ubuntu (with Docker Desktop)
          </h2>

          <div className="glass rounded-lg p-4 mt-2 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base mb-4">
            <p>
              <strong>Note:</strong> Ubuntu is the closest thing to Tony’s raw Linux cave setup. If you’re not using
              GNOME Terminal:
            </p>
            <pre className="mt-2 glass rounded-lg p-3 text-xs overflow-x-auto">
              <code>{`sudo apt install gnome-terminal`}</code>
            </pre>
          </div>

          {/* Step 1 */}
          <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
            Step 1: Download Docker Desktop
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>
              Download the <code>.deb</code> file for Ubuntu from the{' '}
              <a
                href="https://docs.docker.com/desktop/setup/install/linux/ubuntu/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Docker installation page
              </a>
              .
            </li>
          </ol>

          {/* Step 2 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 2: Install Docker Desktop
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>
              Open the terminal and run:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`sudo apt-get update
sudo apt-get install ./docker-desktop-amd64.deb`}</code>
              </pre>
            </li>
            <li>Reboot your system.</li>
          </ol>

          {/* Step 3 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 3: Running the ROS Container
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open the <strong>Terminal</strong>.</li>
            <li>
              Run:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`docker run -p 6080:80 --security-opt seccomp=unconfined --shm-size=512m adtyp/winteros_docker:jazzy`}</code>
              </pre>
            </li>
            <li>Wait for the container to initialize (first-time: ~30 minutes).</li>
          </ol>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> The first run may take some time to download necessary files and set up the
              environment.
            </p>
          </div>

          {/* Ubuntu Image Placeholder 1 */}
          <div className="my-4 flex justify-center">
            <img
              src={w6}
              alt="ROS container logs on Ubuntu"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          {/* Step 4 */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Step 4: Access ROS in the Browser
          </h3>
          <ol className="list-decimal pl-8 space-y-2 text-lg">
            <li>Open your web browser.</li>
            <li>Type <code>localhost:6080</code> and press Enter.</li>
            <li>You should now see your ROS environment running inside Docker.</li>
            <li>
              To stop it, press <code>Ctrl + C</code>. To start again, toggle the play button in the Docker Desktop
              container list.
            </li>
          </ol>

          {/* Ubuntu Image Placeholder 2 */}
          <div className="my-4 flex justify-center">
            <img
              src={w7}
              alt="ROS VNC session in browser on Ubuntu"
              className="rounded-xl w-full h-auto max-w-3xl border-2 border-blue-400/20"
            />
          </div>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> Again — you only paste the run command once. After that, Docker Desktop&apos;s
              interface is enough to manage containers.
            </p>
          </div>
        </section>

        {/* Native ROS Section */}
        <section id="native-ros" className="glass-strong rounded-2xl p-8 mb-12">
          <h2 className="text-4xl font-bold mb-4 text-red-400 border-l-4 border-red-400 pl-6">
            ⚡ ROS Installation in Native Ubuntu — No Docker
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            <strong className="text-red-400">WARNING — This is pure arc reactor work.</strong>
            <br />
            Raw, exposed, no safety suit.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Recommended only for users who plan to work with ROS long-term. Follow the steps below to install ROS2
            Jazzy natively.
          </p>

          {/* Ubuntu version note */}
          <h3 className="text-2xl font-semibold mt-4 mb-3 text-yellow-300">
            Ubuntu Installation (Ubuntu 24.04)
          </h3>
          <div className="glass rounded-lg p-4 mb-4 border-l-4 border-blue-400 bg-blue-400/5 text-sm md:text-base">
            <p>
              <strong>Note:</strong> Skip this part if you already have <strong>Ubuntu 24.04</strong> installed on your
              computer. ROS2 Jazzy is supported from Ubuntu 24.04 onwards, so please upgrade if you are on an older
              version.
            </p>
          </div>

          {/* Dual boot */}
          <h4 className="text-xl font-semibold mt-4 mb-2 text-blue-300">Dual boot</h4>
          <p className="text-lg leading-relaxed mb-3">
            Follow this{' '}
            <a
              href="https://youtu.be/alFosqQ1ang?si=47hL29TceYc_6h89"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline"
            >
              tutorial
            </a>{' '}
            to install Ubuntu 24.04 on your Windows PC.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            For macOS, follow this{' '}
            <a
              href="https://youtu.be/jbUulXVZIBI?si=XTMyoI4yP6OC0Jc5"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline"
            >
              tutorial
            </a>
            .
          </p>
          <div className="glass rounded-lg p-4 mb-4 border-l-4 border-red-400 bg-red-400/5 text-sm md:text-base">
            <p>
              <strong className="text-red-400">WARNING:</strong> Dual booting can be risky, especially on <strong>macOS</strong>. Do this at your
              own risk. Always back up your data and follow instructions carefully.
            </p>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            For absolute beginners, Docker installation is recommended. You can move to dual boot once you&apos;re
            comfortable with Linux.
          </p>

          {/* Linux familiarity */}
          <h4 className="text-xl font-semibold mt-4 mb-2 text-blue-300">Get Familiar with Linux</h4>
          <p className="text-lg leading-relaxed mb-3">
            Here are a few resources to get comfortable with Linux:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-lg">
            <li>
              <a
                href="https://www.youtube.com/watch?v=IVquJh3DXUA"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Video-based tutorial
              </a>
            </li>
            <li>
              <a
                href="https://ryanstutorials.net/linuxtutorial/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Text-based tutorial
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1aroDJBIP-mqYovI8sVYYjGrn_1ugpN5NBauLLihvEjM/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 underline"
              >
                Useful Linux commands document
              </a>
            </li>
          </ul>

          {/* Clearing older versions */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            Clearing Out Older ROS Versions
          </h3>
          <p className="text-lg leading-relaxed mb-3">
            We will be using ROS2 Jazzy for the bootcamp. Before installing, make sure you don&apos;t have any older ROS
            installations (even faulty ones).
          </p>
          <ul className="list-disc pl-8 space-y-3 text-lg">
            <li>
              Check which version of ROS is installed:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`dpkg -l | grep ros-*`}</code>
              </pre>
            </li>
            <li>
              If you get any version other than <strong>Jazzy</strong>, remove it:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`sudo apt remove ~nros-<your-ros-version>-*`}</code>
              </pre>
              <p className="mt-2 text-sm md:text-base">
                Example for ROS2 Humble:
              </p>
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`sudo apt remove ~nros-humble-*`}</code>
              </pre>
            </li>
            <li>
              Run cleanup:
              <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
                <code>{`sudo apt autoremove`}</code>
              </pre>
            </li>
          </ul>

          {/* ROS2 Jazzy Installation */}
          <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
            ROS2 Jazzy Installation
          </h3>
          <p className="text-lg leading-relaxed mb-3">
            We&apos;ll follow the official{' '}
            <a
              href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html"
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 underline"
            >
              ROS2 Jazzy installation tutorial
            </a>{' '}
            with simplified steps here.
          </p>

          {/* Step 1 */}
          <h4 className="text-xl font-semibold mt-4 mb-2 text-blue-300">Step 1: Locale Setup</h4>
          <p className="text-lg leading-relaxed mb-2">
            Make sure you have a locale which supports <code>UTF-8</code>.
          </p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`locale # check for UTF-8

sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

locale # verify settings`}</code>
          </pre>
          <p className="text-sm md:text-base mt-2">Enter your password if prompted.</p>

          {/* Step 2 */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-300">Step 2: Add ROS2 apt Repository</h4>
          <p className="text-lg leading-relaxed mb-2">
            First ensure that the Ubuntu Universe repository is enabled:
          </p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`sudo apt install software-properties-common
sudo add-apt-repository universe # Click [ENTER] after running command`}</code>
          </pre>
          <p className="text-lg leading-relaxed mt-3 mb-2">
            Then install the <code>ros2-apt-source</code> package which configures ROS2 repositories:
          </p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`sudo apt update && sudo apt install curl -y
export ROS_APT_SOURCE_VERSION=$(curl -s https://api.github.com/repos/ros-infrastructure/ros-apt-source/releases/latest | grep -F "tag_name" | awk -F\\" '{print $4}')
curl -L -o /tmp/ros2-apt-source.deb "https://github.com/ros-infrastructure/ros-apt-source/releases/download/\${ROS_APT_SOURCE_VERSION}/ros2-apt-source_\${ROS_APT_SOURCE_VERSION}.$(. /etc/os-release && echo \${UBUNTU_CODENAME:-\${VERSION_CODENAME}})_all.deb"
sudo dpkg -i /tmp/ros2-apt-source.deb`}</code>
           </pre>

          {/* Step 3 */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-300">Step 3: Update & Install</h4>
          <p className="text-lg leading-relaxed mb-2">Update apt caches and install ROS2 Jazzy:</p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`sudo apt update
sudo apt upgrade

sudo apt install ros-dev-tools
sudo apt install ros-jazzy-desktop`}</code>
          </pre>

          {/* Source setup */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-300">Enable ROS2 in Your Terminal</h4>
          <p className="text-lg leading-relaxed mb-2">Temporarily (for current terminal):</p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`source /opt/ros/jazzy/setup.bash`}</code>
          </pre>
          <p className="text-lg leading-relaxed mt-3 mb-2">
            Permanently (auto-source on every new terminal):
          </p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc`}</code>
          </pre>

          <p className="text-lg leading-relaxed mt-4">
            And VOILA!! You have installed ROS2 Jazzy on your system. Great job. Let&apos;s test it.
          </p>

          {/* Example */}
          <h4 className="text-xl font-semibold mt-6 mb-2 text-blue-300">Example: Talker & Listener</h4>
          <p className="text-lg leading-relaxed mb-2">Open one terminal and run:</p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`ros2 run demo_nodes_cpp talker`}</code>
          </pre>
          <p className="text-lg leading-relaxed mt-3 mb-2">In another terminal, run:</p>
          <pre className="mt-2 glass rounded-lg p-3 text-sm overflow-x-auto">
            <code>{`ros2 run demo_nodes_py listener`}</code>
          </pre>
          <p className="text-lg leading-relaxed mt-3">
            If ROS2 Jazzy has been installed correctly, the <code>talker</code> will say it&apos;s &quot;Publishing
            messages&quot; and the <code>listener</code> will say &quot;I heard&quot; those messages.
          </p>

          <div className="glass rounded-lg p-4 mt-4 border-l-4 border-yellow-300 bg-yellow-300/5 text-sm md:text-base">
            <p>
              If the example nodes don&apos;t run, or you see <code>Package 'demo_nodes_cpp' not found</code>, run{' '}
              <code>sudo apt install ros-jazzy-desktop</code> again and retry the examples.
            </p>
          </div>
        </section>

        {/* Systems Online */}
        <section id="systems-online" className="glass-strong rounded-3xl p-10 mb-12">
          <h2 className="text-4xl font-bold mb-6 text-red-400 text-center">
            ⚡ SYSTEMS ONLINE
          </h2>

          {/* Final Image Placeholder */}
          <div className="mb-6 flex justify-center">
            <img
              src={w8}
              alt="Iron Man reactor / systems online"
              className="rounded-2xl max-w-md w-full h-auto border-2 border-blue-400/20"
            />
          </div>

          <p className="text-lg leading-relaxed mb-3 text-center">
            Your cave terminal is active.
            <br />
            Docker is running.
            <br />
            ROS is online.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-center">
            This is the moment Tony Stark looked at his glowing reactor and said:
          </p>
          <p className="text-2xl font-bold text-yellow-300 text-center mb-6">
            “Yeah… I can work with this.”
          </p>

          <p className="text-lg leading-relaxed text-center mb-2">
            You’ve built the furnace.
          </p>
          <p className="text-lg leading-relaxed text-center mb-4">
            Next week, we forge the mind inside it.
          </p>

                    {/* Week 1 Link Section */}
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-blue-300 mb-4">
              ▶️ Initiate Next Sequence: Week 1 — StarkOS Foundations
            </p>

            <p className="text-lg text-gray-300 mb-6">
              The cave terminal is running. Now it’s time to start building the <span className="text-yellow-300 font-semibold">brain</span> —
              publishers, subscribers, nodes, and the communication grid that powers every Iron Man suit.
              <br />
              In Week 1, you begin crafting the <strong className="text-red-400">digital nervous system</strong> of StarkOS.
            </p>

            <a
              href="/week1"   // <-- change to your actual route
              className="glass px-10 py-4 rounded-full text-lg font-semibold text-yellow-300 border-2 border-yellow-300/40 transition-all duration-300 hover:bg-yellow-300/10 hover:border-yellow-300/70"
            >
              🚀 Enter Week 1: Building StarkOS Foundations
            </a>
          </div>


          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              className="glass px-10 py-4 rounded-full text-lg font-semibold text-blue-400 border-2 border-blue-400/30 transition-all duration-300 hover:bg-blue-400/10 hover:border-blue-400/60"
              onClick={() => scrollToSection('windows')}
            >
              Go to Docker Setup
            </button>
            <button
              className="glass px-10 py-4 rounded-full text-lg font-semibold text-red-400 border-2 border-red-400/30 transition-all duration-300 hover:bg-red-400/10 hover:border-red-400/60"
              onClick={() => scrollToSection('native-ros')}
            >
              View Native ROS Install
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
