import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import w1 from '../assets/week1_1.png';
import w2 from '../assets/week1_2.png';
import w3 from '../assets/week1_3.png';
import w4 from '../assets/week1_4.png';
import w5 from '../assets/week1_5.png';
import w6 from '../assets/week1_6.png';
import w7 from '../assets/week1_7.png';
import w8 from '../assets/week1_8.png';
import g1 from '../assets/week1_g1.gif';
import g2 from '../assets/week1_g2.gif';
import g3 from '../assets/week1_g3.gif';
import g4 from '../assets/week1_g4.gif';
import g5 from '../assets/week1_g5.gif';
import g6 from '../assets/week1_g6.gif';
import g7 from '../assets/week1_g7.gif';
import g8 from '../assets/week1_g8.gif';
import g9 from '../assets/week1_g9.gif';
import g10 from '../assets/week1_g10.gif';
import g11 from '../assets/week1_g11.gif';
export default function Week1() {
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
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 1 Navigation</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')}className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
                        <li><button onClick={() => scrollToSection('intro')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">⚙️ Understanding Stark OS</button></li>
                        <li><button onClick={() => scrollToSection('configuring')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔧 Configuring Environment</button></li>
                        <li><button onClick={() => scrollToSection('installing')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📦 Installing Tools</button></li>
                        <li><button onClick={() => scrollToSection('packages')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📁 Packages</button></li>
                        <li><button onClick={() => scrollToSection('colcon')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔨 Colcon</button></li>
                        <li><button onClick={() => scrollToSection('workspace')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🗂️ Workspace</button></li>
                        <li><button onClick={() => scrollToSection('nodes')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔵 Nodes</button></li>
                        <li><button onClick={() => scrollToSection('topics')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📡 Topics</button></li>
                        <li><button onClick={() => scrollToSection('services')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔔 Services</button></li>
                        <li><button onClick={() => scrollToSection('launch')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🚀 Launch Files</button></li>
                        <li><button onClick={() => scrollToSection('pubsub')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">💬 Publisher-Subscriber</button></li>
                        <li><button onClick={() => scrollToSection('assignment')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Assignment</button></li>
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
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">
                        Week 1<span className="text-white"> — Understanding Stark OS</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
                        Building the Foundation of a Robotic System
                    </p>
                    <p className="text-lg md:text-xl text-gray-300">
                        When Tony Stark first started sketching the Mark-1 inside that cave, he knew one thing:
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mt-2">
                        a suit isn't just metal—it needs systems that talk to each other, respond instantly, and never fail.
                    </p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Intro Section */}
                <section id="intro" className="glass-strong rounded-2xl p-8 mb-12">
                    <p className="text-lg leading-relaxed mb-4">
                        When Tony Stark first started sketching the Mark-1 inside that cave, he knew one thing: a suit isn't just metal—it needs systems that talk to each other, respond instantly, and never fail. Before he could build anything advanced, he had to understand how all the pieces would interact.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        ROS (Robot Operating System) serves that same purpose for robotics. Stepping out of the cave analogy for a moment: ROS is an open-source framework that helps us structure robot software in a clean, modular, and scalable way. Instead of writing one giant program that controls everything, ROS encourages you to break a robot into smaller components—each responsible for a specific task.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Now jump back to Stark. Imagine the flamethrower, the servos, the power monitor, and the HUD all needing to coordinate. If he hard-wired everything manually, the suit would fall apart the moment one subsystem misbehaved. ROS solves this exact kind of challenge in robotics.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Instead of forcing the developer to manually manage every device and connection, ROS handles the backbone architecture behind the scenes—abstracting hardware so your code works across devices, enabling clean message communication between components, managing how programs are structured and reused, controlling motors and sensors cleanly, and even allowing different parts of a robot to run across multiple machines without you touching low-level networking. In short, it gives you reliable building blocks so you can focus on <em>behavior</em>, not plumbing—exactly what Stark needs when assembling the Mark-1's internal systems.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        This week, we'll begin assembling the foundations of <strong>ROS</strong>: exploring <strong>nodes, topics, services, parameters, actions, packages, workspaces</strong>, and <strong>launch files</strong>. You'll see how each of these pieces fits into the larger architecture of a robotic system—much like each subsystem of the Mark-1 fits into the larger whole.
                    </p>
                    <p className="text-lg leading-relaxed">
                        By the end of this week, you'll understand the core structure that every ROS-based robot relies on—the same kind of structure Stark would rely on before building anything that could actually move.
                    </p>
                    <div className="mb-4 flex justify-center">
                        <img
                            src={w1}
                            alt="Tony Stark working on StarkOS"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Configuring Environment */}
                <section id="configuring" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Configuring StarkOS Environment
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Before the Mark-1 can respond, obey, or calculate anything, the cave terminal must be wired with the correct environment settings—just like Tony rerouting power through salvaged circuits.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Step 1: Source the Core ROS2 Setup files
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Every new terminal needs to load the Mark-1 system logic.
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`source /opt/ros/jazzy/setup.bash`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        To automatically initialize ROS in future terminals, add this line to your shell configuration:
                    </p>
                    <div className="glass rounded-lg p-4 mb-3 border-l-4 border-yellow-300 bg-yellow-300/5">
                        <p className="text-sm md:text-base">
                            <strong>Note:</strong> Tony never repeats a command he can automate; the suit should always wake up ready.
                        </p>
                    </div>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc`}</code>
                    </pre>
                    <p className="text-sm text-gray-400 mb-6">
                        This ensures ROS boots with every terminal—the same way Mark-1 core systems initialize the moment the suit powers on.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Step 2: Verifying System Diagnostics
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        When Tony powers a new subsystem, he checks readings, voltages, and signals. You'll do the same with ROS environment variables:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`printenv | grep -i ROS`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Check that the variables like <code>ROS_DISTRO</code> and <code>ROS_VERSION</code> are set.
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ROS_VERSION=2
ROS_PYTHON_VERSION=3
ROS_DISTRO=jazzy`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed">
                        If these variables are not set correctly, which means something didn't snap into place. Reinstall ROS—the Mark-1 doesn't run on half-connected systems.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Step 3: Assigning Domain ID
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        This is your Mark-1 frequency channel—the identifier that prevents your system from interfering with other ROS devices around you. Set the <code>domain ID</code>. Set the domain ID between <strong>0 and 101</strong>.
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`echo "export ROS_DOMAIN_ID=<your_domain_id>" >> ~/.bashrc`}</code>
                    </pre>
                </section>

                {/* Installing Tools */}
                <section id="installing" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Installing <code>turtlesim</code> and <code>rqt</code>
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Before piloting a jet-powered exosuit, Tony practiced with tiny subsystems.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        <code>turtlesim</code> is your equivalent—a cute little robot to help you understand movement, commands, topics, and behavior.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        <code>rqt</code> is your holographic UI—a mini version of the Iron Man HUD for viewing and calling ROS functionality.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        This will install some tools to have some hands on experience with the upcoming topics.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Task 1: Installing turtlesim
                    </h3>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`sudo apt update
sudo apt install ros-jazzy-turtlesim`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        To check if the package is installed, run the following command:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 pkg executables turtlesim`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        It should output:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`turtlesim draw_square
turtlesim mimic
turtlesim turtle_teleop_key
turtlesim turtlesim_node`}</code>
                    </pre>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Task 2: Running turtlesim to check installation
                    </h3>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run turtlesim turtlesim_node`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        It will open a window.
                    </p>
                    <img
                        src={w2}
                        alt="Turtle_sim Screen"
                        className="rounded-xl w-full max-w-xl h-auto border-2 border-blue-400/20"
                    />
                    <p className="text-lg leading-relaxed mb-4">
                        If the window opens correctly then congratulations <code>turtlesim</code> is installed correctly on your system.
                    </p>

                    <div className="glass rounded-lg p-4 mb-6 border-l-4 border-blue-400 bg-blue-400/5">
                        <p className="font-semibold mb-2">P.S. Click here if you want to have some fun with your newfound turtle</p>
                        <p className="mb-2">Open a new terminal and run:</p>
                        <pre className="glass rounded-lg p-3 text-sm overflow-x-auto mb-2">
                            <code>{`ros2 run turtlesim turtle_teleop_key`}</code>
                        </pre>
                        <p>You will be able to move your turtle now through the terminal!! This confirms that StarkOS can successfully issue movement commands—your first proof that the system can control something in the real (or simulated) world.</p>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Task 3: Activating StarkOS HUD (<code>rqt</code>)
                    </h3>

                    <img
                        src={w3}
                        alt="Stark HUD in iron man suit"
                        className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        Open a new terminal to install <code>rqt</code> and its plugins:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`sudo apt update
sudo apt install '~nros-jazzy-rqt*'`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        To run <code>rqt</code> just run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`rqt`}</code>
                    </pre>

                    <img
                        src={w4}
                        alt="rqt screen"
                        className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                    />

                    <p className="text-lg leading-relaxed">
                        If this opens then your <code>rqt</code> is installed correctly.
                    </p>
                </section>

                {/* Concepts Introduction */}
                <section className="glass-strong rounded-2xl p-8 mb-12">
                    <p className="text-lg leading-relaxed mb-4">
                        Before Stark could weld metal plates or fire up thrusters, he needed to understand the <strong>concepts</strong> behind what he was building. In the quiet moments of the cave, he studied the scraps, traced power lines, tested circuits—learning how each part would behave once everything came alive.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The Mark-1 didn't start with sparks; it started with <strong>understanding</strong>.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        We're in that same phase now.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        This step is about configuring your environment so ROS2 Jazzy runs smoothly—but more importantly, it's about learning the <strong>core concepts</strong> that shape every ROS system.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Before any hands-on coding or robot behavior, you need a sense of:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li>how ROS organizes software</li>
                        <li>how components communicate</li>
                        <li>how a robot's functionality is structured</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                        To begin learning these concepts, you'll create your first ROS workspace and explore the ROS filesystem. This isn't just setup—it's understanding the structure you'll rely on for the rest of the bootcamp.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Just as Stark had to grasp the fundamentals before assembling the suit, you need to understand the foundational concepts behind ROS.
                    </p>
                    <p className="text-xl font-bold text-yellow-300 text-center mt-6">
                        And the first concept we explore?
                    </p>
                    <p className="text-3xl font-bold text-blue-400 text-center mt-4">
                        Packages.
                    </p>
                </section>

                {/* Packages */}
                <section id="packages" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        What is a package?
                    </h2>

                    <figure className="mb-6">
                        <img
                            src={g1}
                            alt="tony stark's packages gif"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20 mx-auto"
                        />
                        <figcaption className="text-center text-xl text-gray-400 mt-4">
                            "Tony Stark's Package"
                        </figcaption>
                    </figure>



                    <p className="text-lg leading-relaxed mb-4">
                        In the world of ROS, a package is the key to organizing your programs, much like a case file contains all the details needed for investigation. Every ROS program you write is contained within a package, which can include source code (either Python or C++), configuration files, launch files, and dependencies. The package structure is organized into files and directories such as:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li><code>launch</code>: Contains launch files</li>
                        <li><code>scripts</code>: Contains source files (Python)</li>
                        <li><code>package.xml</code>: Information about the package and its dependencies</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                        In ROS2, Python or C++ are typically used for writing the script files in the package. If you want to move forward, understanding how to work with packages will be essential.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Just like Stark groups every component of the Mark-1 into functional modules, ROS expects you to organize your robot's logic into packages before anything powerful can be built.
                    </p>
                </section>

                {/* Colcon */}
                <section id="colcon" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Colcon
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        In the ROS ecosystem, software is organized into many packages. Unlike workflows where a developer works on just one package at a time, ROS developers often handle multiple packages simultaneously. To manage this, Colcon is used as a build tool to compile all the packages together with a single command.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Just like Stark tests entire suit subsystems together—not one bolt at a time—Colcon lets you build every ROS package in your workspace with a single, unified process.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        To install and configure <code>colcon</code>, run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`sudo apt install python3-colcon-common-extensions`}</code>
                    </pre>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Why colcon?
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                        When Stark builds a suit, each subsystem depends on another—the thrusters rely on the power system, the power system relies on the reactor, and the HUD relies on sensors feeding it data. Change one part, and everything connected to it needs to adapt. Robotics software works the same way.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Imagine you're working on a robot project, and you've divided the software into multiple packages:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li><strong>Package A:</strong> Reads sensor data.</li>
                        <li><strong>Package B:</strong> Processes that data.</li>
                        <li><strong>Package C:</strong> Controls the motors based on the processed data.</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                        These packages depend on each other:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li>If you make a change to Package A, Package B might need to adapt to the updated data structure.</li>
                        <li>If you modify Package B, you'd need to ensure Package C works correctly with the updated processing logic.</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                        This is exactly the kind of chain reaction Stark deals with—adjust the thruster output, and the stabilizers, HUD indicators, and power usage all need updating too.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Instead of manually building each package one by one and resolving dependencies yourself, Colcon automates this process. It:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li>Detects all the packages in your workspace.</li>
                        <li>Figures out the correct build order based on dependencies.</li>
                        <li>Compiles everything with a single command: <code>colcon build</code>.</li>
                    </ul>
                    <p className="text-lg leading-relaxed">
                        Just like Stark needs one system check that validates the entire suit, Colcon gives you one command that builds your entire ROS workspace—safely, cleanly, and in the right order.
                    </p>
                </section>

                {/* Workspace */}
                <section id="workspace" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Workspace
                    </h2>

                    <figure className="mb-6">
                        <img
                            src={w5}
                            alt="tony stark's workspace"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20 mx-auto"
                        />
                        <figcaption className="text-center text-xl text-gray-400 mt-2">
                            "Tony Stark's current workspace"
                        </figcaption>
                    </figure>

                    <p className="text-lg leading-relaxed mb-4">
                        When Stark started assembling the Mark-1 in the cave, he didn't just scatter parts everywhere. He cleared a space, organized his tools, and created separate areas for the different projects he was juggling—the robotic arm dummy, the crude weapon his captors expected, and the real project he was secretly building: the Mark-1. Each needed its own space, its own tools, and its own structure.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        A ROS workspace follows that same idea—a dedicated, organized area where all the pieces of your robot's software live and build together without interfering with other projects.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        A ROS workspace is a directory with a particular structure. Commonly, there is a <code>src</code> subdirectory. Inside that subdirectory is where the source code of ROS packages will be located.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Colcon, by default, creates the following directories in the workspace:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li>The <code>build</code> directory will be where intermediate files are stored. For each package, a subfolder will be created.</li>
                        <li>The <code>install</code> directory is where each package will be installed to. By default, each package will be installed into a separate subdirectory.</li>
                        <li>The <code>log</code> directory contains various logging information about each colcon invocation.</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-6">
                        Just like Stark keeps every project organized—ROS workspaces give you a clean structure so you always know where your code lives, how it's built, and where the results end up.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Creating a workspace
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        First, create a directory (<code>erc_ws</code>) to contain our workspace.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Just like Stark clearing a corner of the cave to begin real work, this will be the space where all your ROS code comes together.
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`mkdir -p ~/erc_ws/src
cd ~/erc_ws`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        At this point your workspace contains a single empty directory <code>src</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        From the root of your workspace (<code>erc_ws</code>), you can build your packages using the command:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`cd ..
colcon build`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        butttt that won't really do anything because you don't have any packages yet :P
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Even Stark couldn't power the Mark-1 until he actually built something to connect to the reactor.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Remember how we sourced the jazzy setup earlier? Similarly, since we use custom packages we need to source them too. Run the command:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`echo "source ~/erc_ws/install/setup.bash" >> ~/.bashrc`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        You can restart your terminal or run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`source ~/.bashrc`}</code>
                    </pre>
                </section>

                {/* ROS Graph Introduction */}
                <section className="glass-strong rounded-2xl p-8 mb-12">
                    <p className="text-lg leading-relaxed mb-4">
                        Let's now move onto some of the core concepts of ROS—the pieces that come together to form what's known as the "ROS2 graph."
                    </p>

                    <figure className="mb-6">
                        <img
                            src={g2}
                            alt="tony stark's ROS2 GRAPH"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20 mx-auto"
                        />
                        <figcaption className="text-center text-xl text-gray-400 mt-2">
                            "Tony Stark's ROS2 Graph(lol just kidding)"
                        </figcaption>
                    </figure>

                    <p className="text-lg leading-relaxed mb-4">
                        If the Mark-1 had its own internal schematic showing every system talking to every other system—power routing into motors, sensor data feeding targeting, stabilizers reacting to movement—that diagram would be Stark's version of the ROS graph.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        In ROS, the graph is the network of elements all running and communicating at the same time. It includes every executable and every connection between them, like a blueprint of how data flows through the robot.
                    </p>
                    <p className="text-lg leading-relaxed">
                        And like any good blueprint, we begin with its most fundamental component: <strong>nodes.</strong>
                    </p>
                </section>

                {/* Nodes */}
                <section id="nodes" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Nodes
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        In ROS, each program is called a <strong>node</strong>, and each node handles one small, focused task. Think of it like the tiny subsystems inside Stark's suit—not entire weapons or movement modules, but the <em>micro-functions</em> that make everything work:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-lg mb-4">
                        <li>one module just regulates the temperature of the suit,</li>
                        <li>another monitors arc-reactor output,</li>
                        <li>another controls the tiny servos in each finger,</li>
                        <li>another reads sensors that check joint angles,</li>
                        <li>another updates the HUD with status alerts.</li>
                    </ul>
                    <p className="text-lg leading-relaxed mb-4">
                        Each one is small, independent, and specialized—just like a ROS node.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        A ROS node might control a motor, read a sensor, process a camera frame, or send commands to another component. Nodes communicate using <strong>topics, services, actions, and parameters</strong>, just as the suit's internal functions constantly exchange data to keep Stark alive inside the armor.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        We'll dive into each communication method shortly.
                    </p>

                    <img
                        src={g3}
                        alt="ROS2 Graph showing nodes and their communication"
                        className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20 mx-auto"
                    />


                    <p className="text-lg leading-relaxed mb-4">
                        The above is a visual representation of the flow of data between the nodes. A full robotic system is comprised of many nodes working in concert. In ROS 2, a single executable (C++ program, Python program, etc.) can contain one or more nodes.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Experimenting with nodes
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Time to test our first tiny "Mark-1 system" in action. <code>Turtlesim</code> may look simple, but treat it like the suit's very first servo test—small, but essential.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Run the program by using the <code>run</code> command:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run turtlesim turtlesim_node`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Here, the package name is <code>turtlesim</code> and the executable name is <code>turtlesim_node</code>. However, we still don't know the node name
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Open a new terminal and run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 node list`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        It should output:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/turtlesim`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        Voila! We have the name of our turtlesim node. Unsurprisingly, it's also <code>turtlesim</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Open another new terminal and run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run turtlesim turtle_teleop_key`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Here, we're still using the turtlesim package but now with a different executable <code>turtle_telep_key</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Return to the terminal where you ran <code>ros2 node list</code> and run it again. You should now see:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/turtlesim
/teleop_turtle`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        Two nodes online—one drawing the world, the other controlling movement. Just like the suit: one system generates visuals, another responds to Stark's inputs.
                    </p>
                    <p className="text-lg leading-relaxed">
                        These are the two nodes that we ran with our <code>run</code> commands. <code>teleop_turtle</code> is a node which sends messages/commands to the <code>turtlesim</code> node which then listens to that message and moves accordingly.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
                        Remapping
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Remapping allows you to reassign default node properties, like node name, topic names, service names, etc., to custom values.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Now, let's reassign the name of our <code>/turtlesim</code> node. In a <strong>new terminal</strong>, run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 run turtlesim turtlesim_node --ros-args --remap __node:=my_turtle`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        This will again open a <code>turtlesim</code> window but now run <code>ros2 node list</code> and you should see:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/my_turtle
/turtlesim
/turtle_teleop`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        The same executable is running with a different node name.
                    </p>
                    <p className="text-lg leading-relaxed">
                        You've just done the ROS equivalent of Stark saying: "Hey suit, respond to <em>this</em> call sign instead." Same node, new identity—instantly reassigned without touching the underlying code.
                    </p>

                    <h4 className="text-xl font-semibold mt-6 mb-3 text-blue-300">
                        Node info
                    </h4>
                    <p className="text-lg leading-relaxed mb-3">
                        If you want to know a lot more about a particular node, you can run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 node info <node_name>`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        For example, after having run the previous command to make a <code>turtlesim</code> window with node name <code>my_turtle</code>, run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 node info my_turtle`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        This should output:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/my_turtle
  Subscribers:
    /parameter_events: rcl_interfaces/msg/ParameterEvent
    /turtle1/cmd_vel: geometry_msgs/msg/Twist
  Publishers:
    /parameter_events: rcl_interfaces/msg/ParameterEvent
    /rosout: rcl_interfaces/msg/Log
    /turtle1/color_sensor: turtlesim/msg/Color
    /turtle1/pose: turtlesim/msg/Pose
  Service Servers:
    /clear: std_srvs/srv/Empty
    /kill: turtlesim/srv/Kill
    /my_turtle/describe_parameters: rcl_interfaces/srv/DescribeParameters
    /my_turtle/get_parameter_types: rcl_interfaces/srv/GetParameterTypes
    /my_turtle/get_parameters: rcl_interfaces/srv/GetParameters
    /my_turtle/get_type_description: type_description_interfaces/srv/GetTypeDescription
    /my_turtle/list_parameters: rcl_interfaces/srv/ListParameters
    /my_turtle/set_parameters: rcl_interfaces/srv/SetParameters
    /my_turtle/set_parameters_atomically: rcl_interfaces/srv/SetParametersAtomically
    /reset: std_srvs/srv/Empty
    /spawn: turtlesim/srv/Spawn
    /turtle1/set_pen: turtlesim/srv/SetPen
    /turtle1/teleport_absolute: turtlesim/srv/TeleportAbsolute
    /turtle1/teleport_relative: turtlesim/srv/TeleportRelative
  Service Clients:

  Action Servers:
    /turtle1/rotate_absolute: turtlesim/action/RotateAbsolute
  Action Clients:`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        This gives detailed info about a particular node. It gives a list of subscribers, publishers, services, and actions. i.e. the ROS graph connections that interact with that node.
                    </p>
                    <p className="text-lg leading-relaxed">
                        This is the ROS equivalent of Stark pulling up diagnostics on a single suit component—checking what signals it sends, what it listens to, and what capabilities it exposes.
                    </p>
                </section>

                {/* Topics */}
                <section id="topics" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Topics
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        ROS 2 breaks complex systems down into many modular nodes. Topics are a vital element of the ROS graph that act as a bus for nodes to exchange messages.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        Think of topics as the suit's data channels—the paths where information flows between its micro-systems.
                    </p>

                    <img
                        src={g4}
                        alt="ROS2 Graph showing topics and their communication"
                        className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20 mx-auto"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        A node may publish data to any number of topics and simultaneously have subscription to any number of topics.
                    </p>

                    <img
                        src={g5}
                        alt="ROS2 Graph showing nodes communicating over topics with multiple nodes"
                        className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20 mx-auto mb-6"
                    />

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Experimenting with Topics
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Let's start off with our trusty old turtlesim. Open a new terminal and run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run turtlesim turtlesim_node`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Open another terminal and run:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 run turtlesim turtle_teleop_key`}</code>
                    </pre>

                    <img
                        src={g6}
                        alt="Tony stark fancy holographic diagnostics"
                        className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20 mx-auto mb-6"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        Tony Stark has all the fancy holographic diagnostics to analyze his suit—but since we don't have a HUD projector (yet), we use <code>rqt_graph</code> instead.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        Throughout this section, we'll use <code>rqt_graph</code> to visualize the nodes, topics, and the connections between them. <code>rqt_graph</code> is a plugin of <code>rqt</code>, which you installed earlier.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        To run <code>rqt_graph</code>, open a new terminal and enter the command:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run rqt_graph rqt_graph`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        You can also open rqt_graph by opening <code>rqt</code> and selecting Plugins &gt; Introspection &gt; Node Graph.
                    </p>
                    <div className="glass rounded-lg p-4 mb-4 border-l-4 border-yellow-300 bg-yellow-300/5">
                        <p className="text-sm md:text-base">
                            On start, your Node Graph might look empty. If it is, just click on the refresh button in the top left corner
                        </p>
                        <img
                            src={w6}
                            alt="rqt_graph refresh button"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20 mx-auto mb-6"
                        />
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        If the dropdown says "Nodes only", change it to "Nodes/Topics(active)". Also, set the <strong>Group</strong> counter right below the refresh button to 0.
                    </p>
                    <div className="glass rounded-lg p-4 mb-4 border-l-4 border-yellow-300 bg-yellow-300/5">
                        <p className="text-sm md:text-base">
                            You should see something like this:
                        </p>
                        <img
                            src={w7}
                            alt="rqt_graph"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20 mx-auto mb-6"
                        />
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        You should see the above nodes and topic, as well as two actions around the periphery of the graph (let's ignore those for now). If you hover your mouse over the topic in the center, you'll see the color highlighting like in the image above.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The graph is depicting how the <code>/turtlesim</code> node and the <code>/teleop_turtle</code> node are communicating with each other over a topic. The <code>/teleop_turtle</code> node is publishing data (the keystrokes you enter to move the turtle around) to the <code>/turtle1/cmd_vel</code> topic, and the <code>/turtlesim</code> node is subscribed to that topic to receive the data.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The highlighting feature of rqt_graph is very helpful when examining more complex systems with many nodes and topics connected in many different ways.
                    </p>
                    <p className="text-lg leading-relaxed mb-6">
                        This is basically the suit's comms map—who's sending signals, who's listening, and how everything stays in sync.
                    </p>
                    <p className="text-lg leading-relaxed">
                        rqt_graph is a graphical introspection tool. Now we'll look at some command line tools for introspecting topics.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
                        <code>ros2 topic list</code>
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        Running the <code>ros2 topic list</code> command in a new terminal will output:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/parameter_events
/rosout
/turtle1/cmd_vel
/turtle1/color_sensor
/turtle1/pose`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        <code>ros2 topic list -t</code> will return the same list of topics but with the topic type appended to it:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`/parameter_events [rcl_interfaces/msg/ParameterEvent]
/rosout [rcl_interfaces/msg/Log]
/turtle1/cmd_vel [geometry_msgs/msg/Twist]
/turtle1/color_sensor [turtlesim/msg/Color]
/turtle1/pose [turtlesim/msg/Pose]`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        These attributes, particularly the type, are how nodes know they're talking about the same information as it moves over topics.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        If you're wondering where all the topics are in <code>rqt_graph</code>, uncheck all the boxes under <strong>Hide</strong>. But for our use case let's keep all the boxes checked.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Think of it like Stark pulling up a list of all active suit channels—power feeds, sensor pings, HUD alerts—each one a data stream flowing through the armor.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
                        <code>ros2 topic echo</code>
                    </h3>
                    <p className="text-lg leading-relaxed mb-3">
                        To see the data being published on a topic, use:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 topic info &lt;topic_name&gt;`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Since we know that <code>/teleop_turtle</code> publishes data to <code>/turtlesim</code> over the <code>/turtle1/cmd_vel</code> topic, let's use <code>echo</code> to introspect that topic:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 topic info /turtle1/cmd_vel`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        At first, this command won't return any data. That's because it's waiting for <code>/teleop_turtle</code> to publish something.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Return to the terminal where <code>turtle_teleop_key</code> is running and use the <strong>arrows</strong> to move the turtle around. Watch the terminal where your echo is running at the same time, and you'll see position data being published for every movement you make:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`linear:
  x: 2.0
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0
---
linear:
  x: -2.0
  y: 0.0
  z: 0.0
angular:
  x: 0.0
  y: 0.0
  z: 0.0
...`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed">
                        This is the ROS version of watching real-time diagnostics on the suit. Every arrow key press is like Stark moving his hand—the HUD immediately shows the output.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
                        <code>ros2 interface show</code>
                    </h3>
                    <p className="text-lg leading-relaxed mb-4">
                        Nodes send data over topics using messages. Publishers and subscribers must send and receive the same type of message to communicate.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The topic types we saw earlier after running <code>ros2 topic list -t</code> let us know what message type is used on each topic. Recall that the <code>cmd_vel</code> topic has the type <code>geometry_msgs/msg/Twist</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        This means that in the package <code>geometry_msgs</code> there is a <code>msg</code> called <code>Twist</code>.
                    </p>
                    <p className="text-lg leading-relaxed mb-3">
                        Now we can run <code>ros2 interface show &lt;msg_type&gt;</code> on this type to learn its details. Specifically, what structure of data this message expects.
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 interface show geometry_msgs/msg/Twist`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Which will return:
                    </p>
                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`# This expresses velocity in free space broken into its linear and angular parts.

Vector3  linear
	float64 x
	float64 y
	float64 z
Vector3  angular
	float64 x
	float64 y
	float64 z`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed">
                        This tells you that the <code>/turtlesim</code> node is expecting a message with two vectors, <code>linear</code> and <code>angular</code>, of three elements each. If you recall the data we saw <code>/teleop_turtle</code> passing to <code>/turtlesim</code> with the <code>echo</code> command, it's in the same structure.
                    </p>
                </section>

                {/* Services */}
                <section id="services" className="glass-strong rounded-2xl p-8 mb-12">

                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Services
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Services are another method of communication for nodes in the ROS graph. Services are based on a call-and-response model versus the publisher-subscriber model of topics. While topics allow nodes to subscribe to data streams and get continual updates, services only provide data when they are specifically called by a client.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        It’s like Stark saying, “Open the faceplate.”<br />
                        The suit performs the action only when commanded—it doesn’t keep opening and closing on its own.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        That’s how a ROS service behaves.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        A single ROS service server can handle requests from many clients.<br />
                        Think of the Iron Man faceplate: there’s only <strong>one</strong> mechanism that opens it (the server), but <strong>multiple clients</strong> can request it — Tony, Pepper over comms, or even an emergency protocol. Different requesters, same action mechanism.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g7}
                            alt="Service graph"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Experimenting with Services
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        Set up the two turtlesim nodes, if not already.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 run turtlesim turtlesim_node`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        In another terminal:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 run turtlesim turtle_teleop_key`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Running the <code>ros2 service list</code> command in a new terminal will return a list of all the services currently active in the system:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 service list
/clear
/kill
/reset
/spawn
/teleop_turtle/describe_parameters
/teleop_turtle/get_parameter_types
/teleop_turtle/get_parameters
/teleop_turtle/get_type_description
/teleop_turtle/list_parameters
/teleop_turtle/set_parameters
/teleop_turtle/set_parameters_atomically
/turtle1/set_pen
/turtle1/teleport_absolute
/turtle1/teleport_relative
/turtlesim/describe_parameters
/turtlesim/get_parameter_types
/turtlesim/get_parameters
/turtlesim/get_type_description
/turtlesim/list_parameters
/turtlesim/set_parameters
/turtlesim/set_parameters_atomically`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        You will see that both nodes have the same six services with parameters in their names. Nearly every node in ROS 2 has these infrastructure services that parameters are built off of. There will be more about parameters in the next section.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        <code>ros2 service type</code>
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Services have types that describe how the request and response data of a service is structured. Service types are defined similarly to topic types, except service types have two parts: one message for the request and another for the response.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is like checking the exact protocol the suit expects for a command. Some functions need detailed instructions — others, like “clear display,” need nothing at all.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        To find out the type of a service, use the command:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 service type &lt;service_name&gt;`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Let’s take a look at turtlesim’s <code>/clear</code> service. In a new terminal, enter the command:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 service type /clear`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        It should output:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`std_srvs/srv/Empty`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        The <code>Empty</code> type means the service call sends no data when making a request and receives no data when receiving a response.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Similar to topics, if you want to see the type of service alongside the list, run:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 service list -t`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-6">
                        Think of this as Stark pulling up a list of all suit abilities currently online — commands the armor can execute the moment he asks for them.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        <code>ros2 service info</code>
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        To see information of a particular service, use the command:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`ros2 service info &lt;service_name&gt;`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        This is the diagnostics screen Stark uses to see which suit functions are active, who can trigger them, and whether the system is ready to respond.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        This returns the service type and the count of service clients and servers.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`$ ros2 service info /clear
Type: std_srvs/srv/Empty
Clients count: 0
Services count: 1`}</code>
                    </pre>

                </section>

                {/* Launch Files */}
                <section id="launch-files" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Launch Files
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        ROS 2 Launch files allow you to start up and configure a number of executables containing ROS 2 nodes simultaneously.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Think of a launch file as Stark hitting one button in the cave and watching multiple subsystems boot up at once—lights flicker on, servos hum, diagnostics scroll.<br />
                        One command. Many systems awakening.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        To start off, let us create a new package in our workspace.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src
ros2 pkg create --build-type ament_python week1_tutorials
cd week1_tutorials`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Create a new directory in <code>erc_ws/src/week1_tutorials</code> to store your launch files:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials
mkdir launch`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's put together a ROS 2 launch file using the turtlesim package and its executables.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd launch
touch turtlesim_mimic_launch.py
chmod +x turtlesim_mimic_launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        This file is going to act like a mini "Mark-1 startup sequence."<br />
                        When it runs, multiple nodes will launch in perfect sync—just like Stark powering up separate suit modules together.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Open this directory with <code>VS Code</code> or whatever your default code editor is configured to with:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`code .`}</code>
                    </pre>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            If you're running a fresh install of Ubuntu 24.04, you may get an error message saying <code>command not found: code</code>.
                        </p>
                        <p className="text-sm leading-relaxed mb-2">
                            If yes, copy paste the commands:
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto">
                            <code>{`wget 'https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64' -O /tmp/code_latest_amd64.deb
sudo dpkg -i /tmp/code_latest_amd64.deb`}</code>
                        </pre>
                    </div>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            If prompted by a message saying "Do you trust the authors?", click on YES.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Copy and paste the complete code into the <code>launch/turtlesim_mimic_launch.py</code> file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='turtlesim',
            namespace='turtlesim1',
            executable='turtlesim_node',
            name='sim'
        ),
        Node(
            package='turtlesim',
            namespace='turtlesim2',
            executable='turtlesim_node',
            name='sim'
        ),
        Node(
            package='turtlesim',
            executable='mimic',
            name='mimic',
            remappings=[
                ('/input/pose', '/turtlesim1/turtle1/pose'),
                ('/output/cmd_vel', '/turtlesim2/turtle1/cmd_vel'),
            ]
        )
    ])`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Take your time and understand the above code. Pay special attention to how we are calling multiple nodes along with their respective names and mappings.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Each Node() entry here is like toggling on a separate component of the suit—one for visuals, one for motion, and the mimic node acting as the suit's internal autopilot linking them together.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Save the changes to the file (<code>CTRL+S</code>) and close the window.<br />
                        To run the launch file created above:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`cd ~/erc_ws/src/week1_tutorials/launch
ros2 launch turtlesim_mimic_launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Yayy! You've successfully created two identical turtles from a single command!!<br />
                        But they're just stationary. Let's make them move without using our teleop node.
                    </p>
                </section>

                {/* Publishing Messages */}
                <section id="publishing-messages" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Publishing Messages
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        To see the system in action, open a new terminal and run the <code>ros2 topic pub</code> command on the <code>/turtlesim1/turtle1/cmd_vel</code> topic to get the first turtle moving
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        The topic <code>/turtlesim1/turtle1/cmd_vel</code> is responsible for moving the turtle. As you saw earlier, the movement commands you gave via the <code>turtle_teleop</code> node were published to the <code>cmd_vel</code> topic as well.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials/launch`}</code>
                    </pre>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 topic pub -r 1 /turtlesim1/turtle1/cmd_vel geometry_msgs/msg/Twist "{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: -1.8}}"`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        But what does this command mean? Let's break it down:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                        <li className="text-lg leading-relaxed">
                            <code>ros2 topic pub -r 1</code> publishes a message to a particular topic at a rate of 1 Hz.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>/turtlesim1/turtle1/cmd_vel</code> is the topic to which we are publishing
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>geometry_msgs/msg/Twist</code> is the type of message we are publishing. As we saw earlier, that is the type of message that the <code>cmd_vel</code> topic uses
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>{`{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: -1.8}}`}</code> is the actual message that we publish to that topic. As we saw in the ros2 interface section, the format of the <code>Twist</code> message is observed
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        This is the closest thing to "manual suit control."<br />
                        You're injecting velocity commands straight into the system—no intermediary node, no UI, just pure control flow like Stark hot-wiring the Mark-1.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This was an easy example of publisher-subscriber using the builtin topics of ROS. Later, we will see how to built it from scratch.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w8}
                            alt="Turtlesim Mimic"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Your file structure will look something like this now:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`erc_ws/
└── src
    └── week1_tutorials
        ├── launch
        │   └── turtlesim_mimic_launch.py
        ├── package.xml
        ├── resource
        │   └── week1_tutorials
        ├── setup.cfg
        ├── setup.py
        ├── test
        │   ├── test_copyright.py
        │   ├── test_flake8.py
        │   └── test_pep257.py
        └── week1_tutorials
            └── __init__.py

8 directories, 10 files`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Consider this your first real "Mark-1 cave directory."<br />
                        A simple layout now—but every great system starts with a clean structure.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            <strong>PS:</strong> In the turtlesim_launch we run the launch file from the same directory, if we want to run it from any directory using the generalized command, i.e.
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mb-2">
                            <code>{`ros2 launch <package name> <launch file name>`}</code>
                        </pre>
                        <p className="text-sm leading-relaxed">
                            We have to specify the path in <code>setup.py</code> and then go to workspace directory and then colcon build, and run this. Here we exceuted the run file directly from the directory, though we will do this later in the end of the tutorial in the <code>pubsub.launch.py</code> case.
                        </p>
                    </div>
                </section>


                {/* Publisher-Subscriber Interface */}
                <section id="publisher-subscriber" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Publisher-Subscriber Interface
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Message passing in ROS happens with the Publisher-Subscriber interface provided by the ROS library functions.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Creating a publisher or subscriber node is just like creating any other node:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">Go to the package where you want to create these nodes</li>
                        <li className="text-lg leading-relaxed">Make a new directory <code>scripts</code></li>
                        <li className="text-lg leading-relaxed">Create python script files for a publisher and a subscriber</li>
                    </ol>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Create an executable python file
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        Navigate into <code>erc_ws/src/week1_tutorials/week1_tutorials</code> and then create a python file
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`cd ~/erc_ws/src/week1_tutorials/week1_tutorials
touch talker.py
chmod +x talker.py # Making the python file executable`}</code>
                    </pre>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Writing a simple Publisher Node
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        This is a basic publisher node python script <code>talker.py</code> (taken from the official ROS tutorials from the website, and comments are added to help you understand the working of each line):
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This will be your very first custom-built ROS node—the Mark-1's version of a "Hello World" repulsor test.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Open VS Code using <code>code .</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Paste the following in the <code>talker.py</code>
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`#!/usr/bin/env python
import rclpy
from std_msgs.msg import String

def timer_callback(timer, i):
    # Create a String message
    msg = String()
    msg.data = 'Hello World'

    # Publish the message using the global publisher
    publisher.publish(msg)

    # Print a message indicating what is being published
    print('Publishing: "%s"' % msg.data)

def main(args=None):
    # Initialize the ROS 2 system
    rclpy.init(args=args)

    # Create a ROS 2 node named 'minimal_publisher'
    node = rclpy.create_node('minimal_publisher')

    # Create a global publisher for the 'topic' with a message type of String
    global publisher
    publisher = node.create_publisher(String, 'topic', 10)

    # Set the timer period to 0.5 seconds
    timer_period = 0.5

    # Initialize a counter variable
    i = 0

    # Create a timer that calls the timer_callback function every timer_period seconds
    timer = node.create_timer(timer_period, lambda: timer_callback(timer, i))

    # Increment the counter
    i += 1

    try:
        # Start spinning the ROS 2 node
        rclpy.spin(node)
    finally:
        # Destroy the node explicitly when done spinning
        # (optional - otherwise it will be done automatically
        # when the garbage collector destroys the node object)
        node.destroy_node()

        # Shutdown the ROS 2 system
        rclpy.shutdown()

# Entry point to the script
if __name__ == '__main__':
    # Call the main function if this script is the main module
    main()`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-6">
                        Take your time and look at the code and try to understand. Save the file.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Add dependencies
                    </h3>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Dependencies are packages or libraries that a ROS package needs to compile and run. These are often declared in the package.xml file or the CMakeLists.txt file of a package.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Navigate to <code>erc_ws/src/week1_tutorials</code> directory, where the <code>setup.py</code>, <code>setup.cfg</code>, and <code>package.xml</code> files have been created
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials
code .`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Open <code>package.xml</code> with your text editor. Add the following dependencies corresponding to your node's import statements:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`<exec_depend>rclpy</exec_depend>
<exec_depend>std_msgs</exec_depend>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Add these after the <code>&lt;test_depend&gt;..&lt;/test_depend&gt;</code> lines.<br />
                        Save the changes to the file.<br />
                        This declares that the package needs <code>rclpy</code> and <code>std_msgs</code> when its code is executed
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Just like Stark confirming which components the prototype needs before powering it on—no missing parts, no surprises.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Add an entry point
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        Open the <code>setup.py</code> file, and add the following line within the <code>console_scripts</code> brackets of the <code>entry_points</code> field:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`entry_points={
    'console_scripts': [
        'publisher = week1_tutorials.talker:main',
    ],
},`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Adding this entry point is like giving the subsystem a call sign.<br />
                        Now ROS knows exactly how to launch your publisher node on command.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        This is the ROS equivalent of Stark clearing a corner of the cave and wiring up his first test circuit—a tiny subsystem that sends out data into the suit.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Writing a simple Subscriber Node
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        If the publisher was Stark building a tiny module that speaks, the subscriber is the one that listens.<br />
                        Every suit needs both—output and feedback.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Make the <code>listener.py</code> similarly as we have done for <code>talker.py</code><br />
                        This is a basic subscriber node python script <code>listener.py</code> (taken from the official ROS tutorials from the website, and comments are added to help you understand the working of each line):
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials/week1_tutorials
touch listener.py
chmod +x listener.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Paste the following in the <code>listener.py</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`#!/usr/bin/env python
import rclpy
from std_msgs.msg import String

def listener_callback(msg):
    print('I heard: "%s"' % msg.data)

def main(args=None):
    # Initialize the ROS 2 system
    rclpy.init(args=args)

    # Create a ROS 2 node named 'minimal_subscriber'
    node = rclpy.create_node('minimal_subscriber')

    # Create a subscription to the 'topic' with a message type of String
    subscription = node.create_subscription(String, 'topic', listener_callback, 10)

    # Prevent unused variable warning
    subscription

    try:
        # Start spinning the ROS 2 node
        rclpy.spin(node)
    finally:
        # Destroy the node explicitly when done spinning
        # (optional - otherwise it will be done automatically
        # when the garbage collector destroys the node object)
        node.destroy_node()

        # Shutdown the ROS 2 system
        rclpy.shutdown()

# Entry point to the script
if __name__ == '__main__':
    # Call the main function if this script is the main module
    main()`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Save the file.<br />
                        Now we have to add entry points for the subscriber node just like we did for the publisher node
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials
code .`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Change the following in <code>setup.py</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`entry_points={
    'console_scripts': [
        'publisher = week1_tutorials.talker:main',
        'subscriber = week1_tutorials.listener:main',
    ],
},`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        You're essentially giving this new listener module its own activation protocol—so StarkOS knows how to launch it just like any other suit component.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Save the file.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        This is the Mark-1's "ears"—a node waiting patiently for incoming messages, ready to report whatever it hears.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Build and run
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        You likely already have the <code>rclpy</code> and <code>std_msgs</code> packages installed as part of your ROS2 system. It's good practice to run <code>rosdep</code> in the root of your workspace (<code>erc_ws</code>) to check for missing dependencies before building:
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Rosdep is a command-line tool that identifies and installs system dependencies for ROS (Robot Operating System) packages.
                        </p>
                    </div>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        <em>Optional</em>
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`rosdep install -i --from-path src --rosdistro jazzy -y`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        Think of rosdep as the suit's system check—Stark never powers anything up before scanning for missing parts or faulty connections.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g8}
                            alt="Iron Man hitting the ceiling"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 text-center italic">
                        What happens if you don't check for bugs properly
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            While running this for the first time, you may get an ERROR saying <code>rosdep installation has not been initialized yet</code>. Don't worry that's normal. Just run the commands given below and will probably be listed in your command line as well:
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mb-2">
                            <code>{`sudo rosdep init
rosdep update`}</code>
                        </pre>
                        <p className="text-sm leading-relaxed">
                            This will update your ROS2 caches.<br />
                            Now run the given <code>rosdep</code> command again.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Finally, we build the workspace
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`cd ~/erc_ws
colcon build`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Now we source the setup files:
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            We do this to ensure that the custom packages and nodes that you make are available to the terminal <code>ros2</code> command. It's used to set up your environment. After every <code>colcon build</code>, <strong>make sure to source your setup</strong>.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Sourcing is like reconnecting the suit's power bus — the system won't recognize new modules until the link is refreshed
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`source install/setup.bash`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Now run the publisher node:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 run week1_tutorials publisher`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Open a new terminal and run the publisher node. Make sure to source the setup files
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`source ~/erc_ws/install/setup.bash
ros2 run week1_tutorials subscriber`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        You can see that <code>I heard: "Hello World"</code> is being printed in the subscriber terminal and the publisher terminal is printing <code>Publishing: "Hello World"</code>.<br />
                        You can change the message to whatever you want by modifying <code>msg.data</code> in <code>talker.py</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is your first live data loop — one part of the system speaking, the other responding.<br />
                        It's the Mark-1 equivalent of Stark firing a test pulse and watching the HUD confirm the signal.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Note that once you stop the publisher node, the subscriber node stops as well.<br />
                        (You can stop the running by pressing <code>CTRL+C</code>)
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g9}
                            alt="Tony Stark Working"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        How does working in ROS feel like
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Running the publisher and subscriber from a launch file
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        Create a file <code>pubsub.launch.py</code> in the <code>launch</code> folder of <code>erc_ws/src/week1_tutorials</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This launch file is your first automated boot sequence — the same idea as Stark pressing one button and watching multiple suit systems power on together
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials/launch
touch pubsub.launch.py
chmod +x pubsub.launch.py
code .`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Add the following code to the file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`from launch import LaunchDescription
from launch_ros.actions import Node
def generate_launch_description():
return LaunchDescription([
Node(
package='week1_tutorials',
executable='publisher',
),
Node(
package='week1_tutorials',
executable='subscriber',
),
])`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        <code>package</code> refers to the name of the package from which you are running the executable<br />
                        <code>executable</code> refers to the name of the executable
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        In other words, this file tells ROS:<br />
                        "When the system boots, bring these two modules online."<br />
                        Exactly how Stark orchestrates multiple subsystems during suit startup.
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`cd ~/erc_ws/src/week1_tutorials
code .`}</code></pre>
                    <p className="text-lg leading-relaxed mb-3">
                        Now add the following line in <code>setup.py</code> in the <code>data_files</code>
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-3">
                        <code>{`(os.path.join('share', package_name, 'launch'), glob(os.path.join('launch', 'pubsub.launch.py'))),`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        It should look like this:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`data_files=[
('share/ament_index/resource_index/packages',
    ['resource/' + package_name]),
('share/' + package_name, ['package.xml']),
(os.path.join('share', package_name, 'launch'), glob(os.path.join('launch', 'pubsub.launch.py'))),
],`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        This step registers your launch file with the ROS ecosystem — like adding a new entry into the suit's internal command menu.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Add import statements for <code>os</code> and <code>glob</code> on top of the <code>setup.py</code> file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`import os
from glob import glob`}</code>
                    </pre>
                    <p className="text-lg leading-relaxed mb-4">
                        These imports help ROS locate and load your launch file during runtime, just like the suit needs the correct directories wired before executing a startup script.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        On executing <code>ros2 launch week1_tutorials pubsub.launch.py</code>, you will be able to see <strong>Publisher</strong> and <strong>Subscriber</strong> in the list of nodes.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        With one command, both nodes activate — the publisher speaks, the subscriber listens.<br />
                        It's your first coordinated StarkOS launch.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        While it is still running, you can run <code>rqt_graph</code> on another terminal to see the relationship betweeen the nodes and topics graphed out visually.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Opening <code>rqt_graph</code> now feels like watching a mini Mark-1 schematic:<br />
                        lines flowing between systems, data moving live, the whole loop breathing for the first time.
                    </p>
                </section>

                {/* Assignment */}
                <section id="assignment" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        🚀 Assignment — Stark OS: Multi-Node Communication Test
                    </h2>
                    <p className="text-lg leading-relaxed mb-4">
                        Create a new package <code>stark_os</code> inside your <code>erc_ws</code> workspace.<br />
                        This package will contain <strong>three nodes</strong> and <strong>one launch file</strong>.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Your mission: simulate a small part of Tony Stark's Mark-1 diagnostics system using ROS2 publishers and subscribers.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        1️⃣ Node 1 — Publish to <code>reactor_status</code>
                    </h3>

                    <p className="text-lg leading-relaxed mb-6">
                        This node should publish the following text to the topic <code>reactor_status</code>:
                    </p>

                    <div className="glass rounded-lg p-4 mb-6">
                        <code className="text-green-400">Arc Reactor online. Output stable.</code>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        2️⃣ Node 2 — Publish to <code>system_diag</code>
                    </h3>

                    <p className="text-lg leading-relaxed mb-6">
                        This node should publish the following text to the topic <code>system_diag</code>:
                    </p>

                    <div className="glass rounded-lg p-4 mb-6">
                        <code className="text-green-400">Suit integrity at 85%. All systems responsive.</code>
                    </div>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        3️⃣ Node 3 — Subscribe to both topics
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        This node should subscribe to <strong>both</strong> <code>reactor_status</code> and <code>system_diag</code>.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        It must combine both messages and print the following line at some frequency:
                    </p>

                    <div className="glass rounded-lg p-4 mb-6">
                        <code className="text-green-400">Arc Reactor online. Output stable. Suit integrity at 85%. All systems responsive.</code>
                    </div>

                    <p className="text-lg leading-relaxed mb-6">
                        This is your mini Mark-1 HUD diagnostic readout.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        4️⃣ Launch File
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Create a launch file that starts <strong>all three nodes</strong> together —<br />
                        your own tiny Mark-1 boot sequence.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Just like how Mark-1 boots up here
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g10}
                            alt="Iron Man Armor Boot Up"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <h3 className="text-3xl font-semibold mt-8 mb-4 text-red-400">
                        🔥 That's it for this week.
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        You've built the first real building blocks of Stark OS — nodes, topics, services, launches…<br />
                        The Mark-1's mind is no longer theory. It's alive.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        And now…<br />
                        as Tony would say after pulling off something ridiculously impressive:
                    </p>

                    <p className="text-2xl font-bold mb-6 text-yellow-300 text-center">
                        "Not bad. Not bad at all."
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g11}
                            alt="Tony Stark - That was easy"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-xl leading-relaxed mb-4 text-center">
                        Suit up —
                    </p>

                    <p className="text-2xl font-bold text-center text-blue-400">
                        Next week, StarkOS gets <em>serious</em>.
                    </p>
                </section>

            </div>
        </div>
    );
}