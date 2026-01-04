import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Copy, Check } from 'lucide-react';

// Import all images
import starterPackage from '../assets/starter-package.png';
import starterPackage1 from '../assets/starter-package-1.png';
import links from '../assets/links.png';
import shoulder from '../assets/shoulder.png';
import jointStates from '../assets/joint-states.png';
import elbow from '../assets/elbow.png';
import wrist from '../assets/wrist.png';
import gripper from '../assets/gripper.png';
import jointStates1 from '../assets/joint-states-1.png';
import jointTrajectoryController from '../assets/joint-trajectory-controller.png';
import jointStates2 from '../assets/joint-states-2.png';
import models3d from '../assets/3d-models.png';
import grabbing from '../assets/grabbing.png';
import grabbing1 from '../assets/grabbing-1.png';
import contactSensor from '../assets/contact-sensor.png';
import endEffector from '../assets/end-effector.png';
import gripperCamera from '../assets/gripper-camera.png';
import tableCamera from '../assets/table-camera.png';
import rgbdCamera from '../assets/rgbd-camera.png';
import rqtArmController from '../assets/rqt-arm-controller.png';
import jointAngles from '../assets/joint-angles.png';
import jointAngles1 from '../assets/joint-angles-1.png';
import ik3 from '../assets/ik_3.png';
import ik2 from '../assets/ik_2.png';
import ik1 from '../assets/ik_1.png';
import inverseKinematics from '../assets/inverse-kinematics.png';

// GIFs
import dumeIronMan from '../assets/dum-e-iron-man.gif';
import dummyRdj from '../assets/dummy-rdj.gif';
import integratedBot from '../assets/integratedbot.png';

// Reusable CodeBlock component
function CodeBlock({ code, language = 'bash', maxHeight = '400px' }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            <div className="flex items-center justify-between bg-gray-800/90 backdrop-blur px-4 py-2 rounded-t-lg border border-gray-700">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {language}
                </span>
                <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-all duration-200 text-sm"
                >
                    {copied ? (
                        <>
                            <Check size={16} className="text-green-400" />
                            <span className="text-green-400">Copied!</span>
                        </>
                    ) : (
                        <>
                            <Copy size={16} className="text-gray-300" />
                            <span className="text-gray-300">Copy</span>
                        </>
                    )}
                </button>
            </div>
            <div
                className="overflow-auto bg-gray-900/95 backdrop-blur rounded-b-lg border border-t-0 border-gray-700"
                style={{ maxHeight }}
            >
                <pre className="p-4 m-0">
                    <code className="text-sm font-mono text-gray-100 leading-relaxed">
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default function Week4() {
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
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 4 Navigation</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
                        <li className="pt-2 border-t border-white/10"></li>
                        <li><button onClick={() => scrollToSection('introduction')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Introduction</button></li>
                        <li><button onClick={() => scrollToSection('download-package')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📦 Download Package</button></li>
                        <li><button onClick={() => scrollToSection('building-arm')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔧 Building the Arm</button></li>
                        <li><button onClick={() => scrollToSection('ros-controller')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎮 ROS Controller</button></li>
                        <li><button onClick={() => scrollToSection('3d-model')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎨 3D Model</button></li>
                        <li><button onClick={() => scrollToSection('grabbing-objects')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🤖 Grabbing Objects</button></li>
                        <li><button onClick={() => scrollToSection('collision-detection')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">💥 Collision Detection</button></li>
                        <li><button onClick={() => scrollToSection('end-effector')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 End Effector</button></li>
                        <li><button onClick={() => scrollToSection('cameras')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📷 Simulating Cameras</button></li>
                        <li><button onClick={() => scrollToSection('ros-node-movement')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔄 Moving with ROS Node</button></li>
                        <li><button onClick={() => scrollToSection('inverse-kinematics')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📐 Inverse Kinematics</button></li>
                        <li><button onClick={() => scrollToSection('final-project')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🏆 Final Project</button></li>
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
                        Week 4<span className="text-white"> — Simple Robotic Arm</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
                        Engineering Intelligence, One Joint at a Time
                    </p>
                    <p className="text-lg md:text-xl text-gray-300">
                        From metal to mind — building control systems that think
                    </p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Introduction Section */}
                 <section id="introduction" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Introduction
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        In this lesson, we're stepping straight into Stark's workshop mode. Not theory. Not spectator mode. You're going to build a four-axis robotic arm the way Tony would — piece by piece, joint by joint, tightening bolts with one hand while running math in your head with the other. This isn't a kit you "assemble." It's a system you engineer.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        But the real magic isn't the metal — it's the mind you put inside it.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        You won't just download someone else's solution. You'll design your own inverse kinematics — your personal targeting computer, the same class of math that lets a suit align repulsors, stabilize flight vectors, and hit exactly what it intends to. Your custom ROS 2 nodes become the nervous system, firing commands like Stark-grade neural impulses, turning coordinates into controlled motion.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        By the end, the arm won't just move.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        It will obey geometry, respect physics, and execute with Stark-level precision —<br />
                        not because it has to… but because you built it to.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={dumeIronMan}
                            alt="Dum-E Iron Man Robot"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-xl leading-relaxed font-semibold text-center text-blue-300">
                        Let's get started!
                    </p>
                </section>

                {/* Download ROS Package Section */}
                                
                <section id="download-package" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Download ROS Package
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        To download the starter package, clone the following git repo into your colcon workspace:
                    </p>

                    <CodeBlock
                        code="git clone https://github.com/Aswath0929/WinteROS_Week4final1"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Let's take a look what's inside the <code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_simple_arm</code> package with the <code className="bg-gray-800 px-2 py-1 rounded">tree</code> command!
                    </p>

                    <CodeBlock
                        code={`.
                ├── CMakeLists.txt
                ├── package.xml
                ├── config
                │   ├── controller_position.yaml
                │   └── gz_bridge.yaml
                ├── launch
                │   ├── check_urdf.launch.py
                │   ├── spawn_robot.launch.py
                │   └── world.launch.py
                ├── meshes
                │   ├── forearm.blend
                │   ├── forearm.dae
                │   ├── forearm.SLDPRT
                │   ├── forearm.STEP
                │   ├── forearm.STL
                │   ├── shoulder.blend
                │   ├── shoulder.dae
                │   ├── shoulder.SLDPRT
                │   ├── shoulder.STEP
                │   ├── shoulder.STL
                │   ├── upper_arm.blend
                │   ├── upper_arm.dae
                │   ├── upper_arm.SLDPRT
                │   ├── upper_arm.STEP
                │   ├── upper_arm.STL
                │   ├── wrist.blend
                │   ├── wrist.dae
                │   ├── wrist.SLDPRT
                │   ├── wrist.STEP
                │   └── wrist.STL
                ├── rviz
                │   ├── rviz.rviz
                │   └── urdf.rviz
                ├── urdf
                │   ├── materials.xacro
                │   └── mogi_arm.xacro
                └── worlds
                    ├── empty.sdf
                    └── world.sdf`}
                        language="bash"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Let's see what will we do with the existing files and folders:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <strong>config:</strong> As we saw previously, we usually store parameters and large configuration files for ROS packages which aren't comfortable to handle from the launchfiles directly. In this lesson we will use configuration files for the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge</code> and the position controller of the robotic arm.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>launch:</strong> Default launch files are already part of the starting package, we can test the package with <code className="bg-gray-800 px-2 py-1 rounded">spawn_robot.launch.py</code>.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>meshes:</strong> this folder contains the 3D models in SolidWorks, Blender and exported <code className="bg-gray-800 px-2 py-1 rounded">dae</code> format (collada mesh) that we use for our robot's links.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>rviz:</strong> Pre-configured RViz2 layouts
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>urdf:</strong> The URDF models of our robot, we'll extend the <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.xacro</code> during this lesson
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>worlds:</strong> default Gazebo worlds that we'll use in the simulations.
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        We have another package <code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_simple_arm_py</code> for our python scripts:
                    </p>

                    <CodeBlock
                        code={`.
                ├── erc_ros2_simple_arm_py
                │   ├── __init__.py
                │   └── test_inverse_kinematics.py
                ├── package.xml
                ├── resource
                │   └── erc_ros2_simple_arm_py
                ├── setup.cfg
                └── setup.py`}
                        language="bash"
                        maxHeight="200px"
                    />

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Test the Starter Package
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        After we downloaded the starter branch from GitHub, let's rebuild the workspace and source the <code className="bg-gray-800 px-2 py-1 rounded">install/setup.bash</code> file to make sure ROS and its tools are aware about the new package.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's test the package with the usual launch file:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={starterPackage}
                            alt="Starter Package Testing"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Building the Robotic Arm Section */}
                                
                <section id="building-arm" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Building the Robotic Arm
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        The base of the robotic arm is already in the URDF file, but the colors in RViz and Gazebo doesn't match. Before we move forward let's fix this, include the materials in the URDF file:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 3 - RViz colors -->
                <xacro:include filename="$(find erc_ros2_simple_arm)/urdf/materials.xacro" />`}
                        language="xml"
                        maxHeight="150px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={starterPackage1}
                            alt="RViz Colors Fixed"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Now we can proceed to adding the links of the robotic arm! We'll add the following links:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={links}
                            alt="Robotic Arm Links Diagram"
                            className="rounded-xl w-full max-w-3xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    {/* Shoulder Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Shoulder
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        The shoulder of our robot is actually not 1 but 2 links, one for the pan and the other for lift. Let's add it to the URDF file:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 4 - Shoulder -->
                <joint name="shoulder_pan_joint" type="revolute">
                <limit lower="-3.14" upper="3.14" effort="330.0" velocity="3.14"/>
                <parent link="base_link"/>
                <child link="shoulder_link"/>
                <axis xyz="0 0 1"/>
                <origin xyz="0.0 0.0 0.05" rpy="0.0 0.0 0.0"/>
                <dynamics damping="0.0" friction="0.0"/>
                </joint>

                <!-- Shoulder link -->
                <link name="shoulder_link">
                <inertial>
                    <mass value="0.5"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.0014" ixy="0.0" ixz="0.0"
                            iyy="0.0014" iyz="0.0"
                            izz="0.0025"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <cylinder radius="0.1" length="0.05"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <cylinder radius="0.1" length="0.05"/>
                    </geometry>
                    <material name="orange"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>

                <!-- Shoulder lift joint -->
                <joint name="shoulder_lift_joint" type="revolute">
                <limit lower="-1.5708" upper="1.5708" effort="330.0" velocity="3.14"/>
                <parent link="shoulder_link"/>
                <child link="upper_arm_link"/>
                <axis xyz="0 1 0"/>
                <origin xyz="0.0 0.0 0.025" rpy="0.0 0.0 0.0"/>
                <dynamics damping="0.0" friction="0.0"/>
                </joint>

                <!-- Upper arm link -->
                <link name="upper_arm_link">
                <inertial>
                    <mass value="0.3"/>
                    <origin xyz="0.0 0.0 0.1" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.0012" ixy="0.0" ixz="0.0"
                            iyy="0.0012" iyz="0.0"
                            izz="0.0004"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <cylinder radius="0.05" length="0.2"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.1" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <cylinder radius="0.05" length="0.2"/>
                    </geometry>
                    <material name="orange"/>
                    <origin xyz="0.0 0.0 0.1" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>`}
                        language="xml"
                        maxHeight="600px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={shoulder}
                            alt="Shoulder Joint Added"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Joint state publisher opens a small GUI where we can adjust the angles of the two new shoulder joints, but this has clearly no impact on the simulation. Let's take a look on <code className="bg-gray-800 px-2 py-1 rounded">rqt_graph</code>, it's clear that the <code className="bg-gray-800 px-2 py-1 rounded">joint_states</code> are not coming from the simulation. We'll handle this a bit later.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={jointStates}
                            alt="Joint States Graph"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    {/* Elbow Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Elbow
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's add the elbow that is the connecting joint between upper arm and forearm.
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 5 - Elbow -->
                <joint name="elbow_joint" type="revolute">
                <limit lower="-2.3562" upper="2.3562" effort="150.0" velocity="3.14"/>
                <parent link="upper_arm_link"/>
                <child link="forearm_link"/>
                <axis xyz="0 1 0"/>
                <origin xyz="0.0 0.0 0.2" rpy="0.0 0.0 0.0"/>
                <dynamics damping="0.0" friction="0.0"/>
                </joint>

                <!-- Forearm link -->
                <link name="forearm_link">
                <inertial>
                    <mass value="0.2"/>
                    <origin xyz="0.0 0.0 0.125" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.0011" ixy="0.0" ixz="0.0"
                            iyy="0.0011" iyz="0.0"
                            izz="0.0004"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <cylinder radius="0.025" length="0.25"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.125" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <cylinder radius="0.025" length="0.25"/>
                    </geometry>
                    <material name="orange"/>
                    <origin xyz="0.0 0.0 0.125" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={elbow}
                            alt="Elbow Joint Added"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    {/* Wrist Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Wrist
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Now add the wrist of the robotic arm:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 6 - Wrist -->
                <joint name="wrist_joint" type="revolute">
                <limit lower="-2.3562" upper="2.3562" effort="54.0" velocity="3.14"/>
                <parent link="forearm_link"/>
                <child link="wrist_link"/>
                <axis xyz="0 1 0"/>
                <origin xyz="0.0 0.0 0.25" rpy="0.0 0.0 0.0"/>
                <dynamics damping="0.0" friction="0.0"/>
                </joint>

                <!-- Wrist link -->
                <link name="wrist_link">
                <inertial>
                    <mass value="0.1"/>
                    <origin xyz="0.0 0.0 0.05" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.00009" ixy="0.0" ixz="0.0"
                            iyy="0.00009" iyz="0.0"
                            izz="0.00002"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <cylinder radius="0.02" length="0.1"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.05" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <cylinder radius="0.02" length="0.1"/>
                    </geometry>
                    <material name="orange"/>
                    <origin xyz="0.0 0.0 0.05" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={wrist}
                            alt="Wrist Joint Added"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    {/* Gripper Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Gripper
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        And finally add a gripper. The gripper consists of a base and two fingers. The fingers are connected with prismatic joints to the base. Also we improve the friction parameters of the fingers in the simulation:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 7 - Gripper -->
                <joint name="gripper_base_joint" type="fixed">
                <parent link="wrist_link"/>
                <child link="gripper_base"/>
                <origin xyz="0.0 0 0.105" rpy="0.0 0 0"/> 
                </joint>

                <!-- Gripper base link -->
                <link name="gripper_base">
                <inertial>
                    <mass value="0.1"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.00009" ixy="0.0" ixz="0.0"
                            iyy="0.00009" iyz="0.0"
                            izz="0.00002"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <box size=".05 .1 .01"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <box size=".05 .1 .01"/>
                    </geometry>
                    <material name="grey"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>

                <!-- Left finger joint -->
                <joint name="left_finger_joint" type="prismatic">
                <limit lower="0" upper="0.04" effort="100.0" velocity="4.0"/>
                <parent link="gripper_base"/>
                <child link="left_finger"/>
                <axis xyz="0 1 0"/>
                <origin xyz="0.0 0.01 0.045" />
                </joint>

                <!-- Left finger link -->
                <link name="left_finger">
                <inertial>
                    <mass value="0.1"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.00009" ixy="0.0" ixz="0.0"
                            iyy="0.00009" iyz="0.0"
                            izz="0.00002"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <box size=".04 .01 .08"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <box size=".04 .01 .08"/>
                    </geometry>
                    <material name="blue"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>

                <gazebo reference="left_finger">
                <kp>1000000.0</kp>
                <kd>100.0</kd>
                <mu1>15</mu1>
                <mu2>15</mu2>
                <fdir1>1 0 0</fdir1>
                <maxVel>1.0</maxVel>
                <minDepth>0.002</minDepth>
                </gazebo>

                <!-- Right finger joint -->
                <joint name="right_finger_joint" type="prismatic">
                <limit lower="0" upper="0.04" effort="100.0" velocity="4.0"/>
                <parent link="gripper_base"/>
                <child link="right_finger"/>
                <axis xyz="0 -1 0"/>
                <origin xyz="0.0 -0.01 0.045" />
                </joint>

                <!-- Right finger link -->
                <link name="right_finger">
                <inertial>
                    <mass value="0.1"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                    <inertia ixx="0.00009" ixy="0.0" ixz="0.0"
                            iyy="0.00009" iyz="0.0"
                            izz="0.00002"
                    />
                </inertial>
                <collision>
                    <geometry>
                    <box size=".04 .01 .08"/>
                    </geometry>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </collision>
                <visual>
                    <geometry>
                    <box size=".04 .01 .08"/>
                    </geometry>
                    <material name="blue"/>
                    <origin xyz="0.0 0.0 0.0" rpy="0.0 0.0 0.0"/>
                </visual>
                </link>

                <gazebo reference="right_finger">
                <kp>1000000.0</kp>
                <kd>100.0</kd>
                <mu1>15</mu1>
                <mu2>15</mu2>
                <fdir1>1 0 0</fdir1>
                <maxVel>1.0</maxVel>
                <minDepth>0.002</minDepth>
                </gazebo>`}
                        language="xml"
                        maxHeight="700px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={gripper}
                            alt="Gripper Added"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    {/* Joint State Publishing Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Joint State Publishing
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        As we noticed earlier, we can move the joint angles of the robotic arm in RViz using the <code className="bg-gray-800 px-2 py-1 rounded">joint_state_publisher_gui</code> but this has no impact on the simulation. To move the arm in the simulation first we have to turn off the <code className="bg-gray-800 px-2 py-1 rounded">joint_state_publisher_gui</code> in the <code className="bg-gray-800 px-2 py-1 rounded">spawn_robot.launch.py</code>, it means the small GUI won't open anymore using this launch file.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        The next step is to forward <code className="bg-gray-800 px-2 py-1 rounded">joint_states</code> from Gazebo to ROS, this we can set up in the config file of <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge</code> as we did previously with the mobile robots too:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "joint_states"
                gz_topic_name: "joint_states"
                ros_type_name: "sensor_msgs/msg/JointState"
                gz_type_name: "gz.msgs.Model"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And the last step is to add a <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.gazebo</code> file in the urdf folder with a joint state publisher plugin:
                    </p>

                    <CodeBlock
                        code={`<robot>
                <gazebo>
                    <plugin
                        filename="gz-sim-joint-state-publisher-system"
                        name="gz::sim::systems::JointStatePublisher">
                        <topic>joint_states</topic>
                        <joint_name>shoulder_pan_joint</joint_name>
                        <joint_name>shoulder_lift_joint</joint_name>
                        <joint_name>elbow_joint</joint_name>
                        <joint_name>wrist_joint</joint_name>
                        <joint_name>left_finger_joint</joint_name>
                        <joint_name>right_finger_joint</joint_name>
                    </plugin>
                </gazebo>
                </robot>`}
                        language="xml"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And of course, include it in the beginning of our URDF file:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 8 - Gazebo plugin -->
                <xacro:include filename="$(find erc_ros2_simple_arm)/urdf/mogi_arm.gazebo" />`}
                        language="xml"
                        maxHeight="150px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it together with <code className="bg-gray-800 px-2 py-1 rounded">rqt_graph</code>:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={jointStates1}
                            alt="Joint States from Simulation"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Now the <code className="bg-gray-800 px-2 py-1 rounded">joint_states</code> are coming from the simulation but we still don't have the tools to move the arm.
                    </p>
                </section>

                {/* ROS Controller Section */}
                                
                <section id="ros-controller" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        ROS Controller
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Joint angles are important, but this still doesn't mean that we simulate any actuators in these joints with Gazebo. And here comes the <code className="bg-gray-800 px-2 py-1 rounded">ROS2 control</code> and it's controllers for every joints. Let's add it to our URDF file:
                    </p>

                    <CodeBlock
                        code={`<!-- STEP 9 - ROS2 control -->
                <ros2_control name="GazeboSystem" type="system">
                <hardware>
                    <plugin>gz_ros2_control/GazeboSimSystem</plugin>
                </hardware>
                <joint name="shoulder_pan_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                <joint name="shoulder_lift_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                <joint name="elbow_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                <joint name="wrist_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                <joint name="left_finger_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                <joint name="right_finger_joint">
                    <command_interface name="position">
                    <param name="min">-2</param>
                    <param name="max">2</param>
                    </command_interface>
                    <state_interface name="position">
                    <param name="initial_value">0.0</param>
                    </state_interface>
                    <state_interface name="velocity"/>
                    <state_interface name="effort"/>
                </joint>
                </ros2_control>`}
                        language="xml"
                        maxHeight="700px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        We also have to add the <code className="bg-gray-800 px-2 py-1 rounded">ROS2 control</code> to the <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.gazebo</code> file:
                    </p>

                    <CodeBlock
                        code={`<gazebo>
                <plugin filename="gz_ros2_control-system" name="gz_ros2_control::GazeboSimROS2ControlPlugin">
                    <parameters>$(find erc_ros2_simple_arm)/config/controller_position.yaml</parameters>
                </plugin>
                </gazebo>`}
                        language="xml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        The controller needs a <code className="bg-gray-800 px-2 py-1 rounded">yaml</code> file with it's parameters that is already part of the package:
                    </p>

                    <CodeBlock
                        code={`controller_manager:
                ros__parameters:
                    update_rate: 1000  # Hz

                    joint_state_broadcaster:
                    type: joint_state_broadcaster/JointStateBroadcaster

                arm_controller:
                ros__parameters:
                    type: joint_trajectory_controller/JointTrajectoryController
                    joints:
                    - shoulder_pan_joint
                    - shoulder_lift_joint
                    - elbow_joint
                    - wrist_joint
                    - left_finger_joint
                    - right_finger_joint
                    command_interfaces:
                    - position
                    state_interfaces:
                    - position
                    - velocity`}
                        language="yaml"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And finally we have to start the controller in our launch file:
                    </p>

                    <CodeBlock
                        code={`joint_trajectory_controller_spawner = Node(
                    package='controller_manager',
                    executable='spawner',
                    arguments=[
                        'arm_controller',
                        '--param-file',
                        robot_controllers,
                        ],
                    parameters=[
                        {'use_sim_time': LaunchConfiguration('use_sim_time')},
                    ]
                )`}
                        language="python"
                        maxHeight="300px"
                    />

                    {/* Joint Trajectory Control Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Joint Trajectory Control
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        If the controller is set up finally we can try it out. Start the simulation and in another terminal let's start the <code className="bg-gray-800 px-2 py-1 rounded">joint_trajectory_controller</code>:
                    </p>

                    <CodeBlock
                        code="ros2 run rqt_joint_trajectory_controller rqt_joint_trajectory_controller"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        This opens another small GUI that might look similar in the first glance to the previous <code className="bg-gray-800 px-2 py-1 rounded">joint_state_publisher</code> GUI, but they are very different tools. The previous one was only suitable to tell fake joint angles to RViz without any real control. <code className="bg-gray-800 px-2 py-1 rounded">joint_trajectory_controller</code> sends real motion commands the (real or simulated) controllers of the robotic arm.
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={jointTrajectoryController}
                            alt="Joint Trajectory Controller GUI"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        If we anyway using the <code className="bg-gray-800 px-2 py-1 rounded">controller_manager</code> package now, we can also start using its <code className="bg-gray-800 px-2 py-1 rounded">joint_state_broadcaster</code> functionality, we can add it to our launch file:
                    </p>

                    <CodeBlock
                        code={`joint_state_broadcaster_spawner = Node(
                    package='controller_manager',
                    executable='spawner',
                    arguments=['joint_state_broadcaster'],
                    parameters=[
                        {'use_sim_time': LaunchConfiguration('use_sim_time')},
                    ]
                )`}
                        language="python"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And we can remove forwarding <code className="bg-gray-800 px-2 py-1 rounded">joint_states</code> using the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge</code>, let's delete it from the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge.yaml</code> file:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "joint_states"
                gz_topic_name: "joint_states"
                ros_type_name: "sensor_msgs/msg/JointState"
                gz_type_name: "gz.msgs.Model"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        After rebuilding the workspace we can take a look on <code className="bg-gray-800 px-2 py-1 rounded">rqt_graph</code>:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={jointStates2}
                            alt="Joint States from Broadcaster"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        And we can see that <code className="bg-gray-800 px-2 py-1 rounded">joint_states</code> are now published by <code className="bg-gray-800 px-2 py-1 rounded">joint_state_broadcaster</code>.
                    </p>
                </section>

                {/* 3D Model Section */}
                
                <section id="3d-model" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        3D Model
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        The package already includes the 3D models of the robotic arm, let's visually upgrade the arm before we move forward!
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's change the <code className="bg-gray-800 px-2 py-1 rounded">geometry</code> tag within the <code className="bg-gray-800 px-2 py-1 rounded">visual</code> tags:
                    </p>

                    <CodeBlock
                        code={`<geometry>
                <!-- <cylinder radius="0.1" length="0.05"/> -->
                <mesh filename = "package://erc_ros2_simple_arm/meshes/shoulder.dae"/>
                </geometry>`}
                        language="xml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        The available mesh files are the following:
                    </p>

                    <CodeBlock
                        code={`<mesh filename = "package://erc_ros2_simple_arm/meshes/shoulder.dae"/>
                <mesh filename = "package://erc_ros2_simple_arm/meshes/upper_arm.dae"/>
                <mesh filename = "package://erc_ros2_simple_arm/meshes/forearm.dae"/>
                <mesh filename = "package://erc_ros2_simple_arm/meshes/wrist.dae"/>`}
                        language="xml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and try it:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={models3d}
                            alt="3D Models Applied"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Grabbing Objects Section */}
                                
                <section id="grabbing-objects" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Grabbing Objects
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        In this chapter we'll grab and lift objects around the robots. There are 2 ways to interact objects in the simulation, one is using friction and the physics engine and the other one is attaching and detaching objects to the arm using fake fixed joints on demand.
                    </p>

                    {/* Using Friction Subsection */}
                    <h3 className="text-2xl font-semibold mt-6 mb-4 text-yellow-300">
                        Using Friction
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's try first grabbing with friction!
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Just start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        In another terminal start a joint trajectory controller:
                    </p>

                    <CodeBlock
                        code="ros2 run rqt_joint_trajectory_controller rqt_joint_trajectory_controller"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And adjust the angles of the robotic arm to grab any of the objects:
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={grabbing}
                            alt="Grabbing with Friction"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Grabbing using friction works very well, but it means Gazebo has to simulate physics on all objects. This isn't a problem in a simple simulation but it can start consuming very high resources in a more complicated simulation environment. Also I have to be careful to properly set up the inertia matrix of all simulated objects. A wrong inertia matrix can lead to dancing objects that eat up all of our CPU time.
                    </p>

                    {/* Using Detachable Joints Subsection */}
                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Using Detachable Joints
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Another way is creating fixed joints between the object and the robotic arm, then we can attach and detach such objects with simple commands. To use it we have to add the <code className="bg-gray-800 px-2 py-1 rounded">gazebo-detachable-joint-system</code> plugin to our <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.gazebo</code> file, here we have to define parent and child models and link, and the topics that will be used to control the attach and detach.
                    </p>

                    <CodeBlock
                        code={`<gazebo>
                <plugin filename="ignition-gazebo-detachable-joint-system" name="ignition::gazebo::systems::DetachableJoint">
                    <parent_link>left_finger</parent_link>
                    <child_model>green_cylinder</child_model>
                    <child_link>link</child_link>
                    <detach_topic>/green/detach</detach_topic>
                    <attach_topic>/green/attach</attach_topic>
                    <output_topic>/green/state</output_topic>
                </plugin>
                </gazebo>`}
                        language="xml"
                        maxHeight="300px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        We need to forward the attach and detach topics between ROS and Gazebo, so let's add them to the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge.yaml</code> file:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "/green/detach"
                gz_topic_name: "/green/detach"
                ros_type_name: "std_msgs/msg/Empty"
                gz_type_name: "gz.msgs.Empty"
                direction: "ROS_TO_GZ"

                - ros_topic_name: "/green/attach"
                gz_topic_name: "/green/attach"
                ros_type_name: "std_msgs/msg/Empty"
                gz_type_name: "gz.msgs.Empty"
                direction: "ROS_TO_GZ"

                - ros_topic_name: "/green/state"
                gz_topic_name: "/green/state"
                ros_type_name: "std_msgs/msg/String"
                gz_type_name: "gz.msgs.StringMsg"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Rebuild the workspace and start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        In another terminal start a joint trajectory controller:
                    </p>

                    <CodeBlock
                        code="ros2 run rqt_joint_trajectory_controller rqt_joint_trajectory_controller"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And in a 3rd terminal let's start an <code className="bg-gray-800 px-2 py-1 rounded">rqt</code>. By default, the detachable joint system start with attached child objects! To detach them first we have to publish an empty message to the <code className="bg-gray-800 px-2 py-1 rounded">/green/detach</code> topic. To attach it again we have to publish an empty message to the <code className="bg-gray-800 px-2 py-1 rounded">/green/attach</code> topic.
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={grabbing1}
                            alt="Grabbing with Detachable Joint"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded mt-6">
                        <p className="text-sm leading-relaxed">
                            <strong>Note:</strong> I'll turn off this plugin from now, so I don't have to detach the objects at the start of the simulation. It could be also a solution to start a custom node that ensures that all objects are detached at startup.
                        </p>
                    </div>
                </section>

                {/* Collision Detection Section */}
                               
                <section id="collision-detection" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Detecting Collision
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        In our simulation we might need to dynamically attach and detach objects, but if there are multiple detachable objects, how to determine which one to attach? A good solution is to add a collision detection into the fingers of the gripper, from that we can read out the child object's name that we can use in our own node to dinamically attach the right object.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        We only need to add a contact sensor plugin to our robotic arm, let's add it to the left finger:
                    </p>

                    <CodeBlock
                        code={`  <gazebo reference="left_finger">
                    <sensor name='sensor_contact' type='contact'>
                    <contact>
                        <collision>left_finger_collision</collision>
                        <topic>/contact_left_finger</topic>
                    </contact>
                    <always_on>1</always_on>
                    <update_rate>100</update_rate>
                    </sensor>
                </gazebo>`}
                        language="xml"
                        maxHeight="300px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And we have to forward its topic from Gazebo to ROS, add it to the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge.yaml</code>:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "/contact_left_finger"
                gz_topic_name: "/contact_left_finger"
                ros_type_name: "ros_gz_interfaces/msg/Contacts"
                gz_type_name: "gz.msgs.Contacts"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace and start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-4">
                        In another terminal start a joint trajectory controller and touch an object with the left gripper finger:
                    </p>

                    <CodeBlock
                        code="ros2 run rqt_joint_trajectory_controller rqt_joint_trajectory_controller"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-4">
                        And in a 3rd terminal let's start an <code className="bg-gray-800 px-2 py-1 rounded">rqt</code> to monitor the <code className="bg-gray-800 px-2 py-1 rounded">/contact_left_finger</code> topic:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={contactSensor}
                            alt="Contact Sensor"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded mt-6">
                        <p className="text-base leading-relaxed">
                            <strong>💡 Pro Tip:</strong> The contact sensor can detect the name of the object it's touching, which is perfect for implementing smart grabbing logic in your custom nodes. You can use this information to dynamically attach the correct object when multiple objects are present in the workspace.
                        </p>
                    </div>
                </section>

                {/* End Effector Section */}
                               
                <section id="end-effector" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Adding an End Effector
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        It's useful to have a link that helps better visualizing the tool center point (TCP) pose in the 3D space. Let's add a little red cube to the <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.xacro</code> that has no collision only a visual tag:
                    </p>

                    <CodeBlock
                        code={`  <!-- STEP 10 - End effector -->
                <joint name="end_effector_joint" type="fixed">
                    <origin xyz="0.0 0.0 0.175" rpy="0 0 0"/>
                    <parent link="wrist_link"/>
                    <child link="end_effector_link"/>
                </joint>

                <!-- End effector link -->
                <link name="end_effector_link">
                    <visual>
                    <origin xyz="0 0 0" rpy="0 0 0"/>
                    <geometry>
                        <box size="0.01 0.01 0.01" />
                    </geometry>
                    <material name="red"/>
                    </visual>

                    <inertial>
                    <origin xyz="0 0 0" />
                    <mass value="1.0e-03" />
                    <inertia ixx="1.0e-03" ixy="0.0" ixz="0.0"
                            iyy="1.0e-03" iyz="0.0"
                            izz="1.0e-03" />
                    </inertial>
                </link>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace and start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={endEffector}
                            alt="End Effector"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-cyan-500/10 border-l-4 border-cyan-400 p-4 rounded mt-6">
                        <p className="text-base leading-relaxed">
                            <strong>📍 Tool Center Point (TCP):</strong> The end effector link serves as a visual reference for the exact point where the robot arm interacts with objects. This small red cube helps you visualize the TCP position when planning movements and calculating inverse kinematics.
                        </p>
                    </div>
                </section>

                {/* Cameras Section */}
                                
                <section id="cameras" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Simulating Cameras
                    </h2>

                    <p className="text-lg leading-relaxed mb-6">
                        Let's add a few cameras into the simulation.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Gripper Camera
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        First add a camera to the gripper! Let's start with the URDF file:
                    </p>

                    <CodeBlock
                        code={`  <!-- STEP 11 - Gripper camera -->
                <joint type="fixed" name="gripper_camera_joint">
                    <origin xyz="0.0 0.0 0.0" rpy="0 -1.5707 0"/>
                    <child link="gripper_camera_link"/>
                    <parent link="gripper_base"/>
                </joint>

                <link name='gripper_camera_link'>
                    <pose>0 0 0 0 0 0</pose>
                    <inertial>
                    <mass value="1.0e-03"/>
                    <origin xyz="0 0 0" rpy="0 0 0"/>
                    <inertia
                        ixx="1e-6" ixy="0" ixz="0"
                        iyy="1e-6" iyz="0"
                        izz="1e-6"
                    />
                    </inertial>

                    <visual>
                    <origin xyz="0 0 0" rpy="0 0 0"/>
                    <geometry>
                        <box size=".01 .01 .01"/>
                    </geometry>
                    <material name="red"/>
                    </visual>
                </link>

                <joint type="fixed" name="gripper_camera_optical_joint">
                    <origin xyz="0 0 0" rpy="-1.5707 0 -1.5707"/>
                    <child link="gripper_camera_link_optical"/>
                    <parent link="gripper_camera_link"/>
                </joint>

                <link name="gripper_camera_link_optical">
                </link>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Then add the Gazebo plugin to the <code className="bg-gray-800 px-2 py-1 rounded">mogi_arm.gazebo</code> file:
                    </p>

                    <CodeBlock
                        code={`  <gazebo reference="gripper_camera_link">
                    <sensor name="camera" type="camera">
                    <camera>
                        <horizontal_fov>1.3962634</horizontal_fov>
                        <image>
                        <width>640</width>
                        <height>480</height>
                        <format>R8G8B8</format>
                        </image>
                        <clip>
                        <near>0.1</near>
                        <far>15</far>
                        </clip>
                        <noise>
                        <type>gaussian</type>
                        <!-- Noise is sampled independently per pixel on each frame.
                            That pixel's noise value is added to each of its color
                            channels, which at that point lie in the range [0,1]. -->
                        <mean>0.0</mean>
                        <stddev>0.007</stddev>
                        </noise>
                        <optical_frame_id>gripper_camera_link_optical</optical_frame_id>
                        <camera_info_topic>gripper_camera/camera_info</camera_info_topic>
                    </camera>
                    <always_on>1</always_on>
                    <update_rate>20</update_rate>
                    <visualize>true</visualize>
                    <topic>gripper_camera/image</topic>
                    </sensor>
                </gazebo>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        We have to forward the <code className="bg-gray-800 px-2 py-1 rounded">camera_info</code> topic from Gazebo to ROS, so add it to the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge.yaml</code>:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "gripper_camera/camera_info"
                gz_topic_name: "gripper_camera/camera_info"
                ros_type_name: "sensor_msgs/msg/CameraInfo"
                gz_type_name: "gz.msgs.CameraInfo"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And finally add two nodes to the launch file, these are also familiar from the previous lessons:
                    </p>

                    <CodeBlock
                        code={`    # Node to bridge camera topics
                    gz_image_bridge_node = Node(
                        package="ros_gz_image",
                        executable="image_bridge",
                        arguments=[
                            "/gripper_camera/image",
                        ],
                        output="screen",
                        parameters=[
                            {'use_sim_time': LaunchConfiguration('use_sim_time'),
                            'gripper_camera.image.compressed.jpeg_quality': 75},
                        ],
                    )

                    # Relay node to republish camera_info to image/camera_info
                    relay_gripper_camera_info_node = Node(
                        package='topic_tools',
                        executable='relay',
                        name='relay_camera_info',
                        output='screen',
                        arguments=['gripper_camera/camera_info', 'gripper_camera/image/camera_info'],
                        parameters=[
                            {'use_sim_time': LaunchConfiguration('use_sim_time')},
                        ]
                    )`}
                        language="python"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace and start the simulation, add the camera to RViz:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={gripperCamera}
                            alt="Gripper Camera"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Table Camera
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Now add a fix camera to the environment, start again with the URDF file:
                    </p>

                    <CodeBlock
                        code={`  <!-- STEP 12 - Table camera -->
                <joint type="fixed" name="table_camera_joint">
                    <origin xyz="1.0 0.4 0.2" rpy="0 0 3.6652"/>
                    <child link="table_camera_link"/>
                    <parent link="world"/>
                </joint>

                <link name='table_camera_link'>
                    <pose>0 0 0 0 0 0</pose>
                    <inertial>
                    <mass value="1.0e-03"/>
                    <origin xyz="0 0 0" rpy="0 0 0"/>
                    <inertia
                        ixx="1e-6" ixy="0" ixz="0"
                        iyy="1e-6" iyz="0"
                        izz="1e-6"
                    />
                    </inertial>

                    <visual>
                    <origin xyz="0 0 0" rpy="0 0 0"/>
                    <geometry>
                        <box size=".05 .05 .05"/>
                    </geometry>
                    <material name="red"/>
                    </visual>
                </link>

                <joint type="fixed" name="table_camera_optical_joint">
                    <origin xyz="0 0 0" rpy="-1.5707 0 -1.5707"/>
                    <child link="table_camera_link_optical"/>
                    <parent link="table_camera_link"/>
                </joint>

                <link name="table_camera_link_optical">
                </link>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Now add the Gazebo plugin:
                    </p>

                    <CodeBlock
                        code={`  <gazebo reference="table_camera_link">
                    <sensor name="camera" type="camera">
                    <camera>
                        <horizontal_fov>1.3962634</horizontal_fov>
                        <image>
                        <width>640</width>
                        <height>480</height>
                        <format>R8G8B8</format>
                        </image>
                        <clip>
                        <near>0.1</near>
                        <far>15</far>
                        </clip>
                        <noise>
                        <type>gaussian</type>
                        <!-- Noise is sampled independently per pixel on each frame.
                            That pixel's noise value is added to each of its color
                            channels, which at that point lie in the range [0,1]. -->
                        <mean>0.0</mean>
                        <stddev>0.007</stddev>
                        </noise>
                        <optical_frame_id>table_camera_link_optical</optical_frame_id>
                        <camera_info_topic>table_camera/camera_info</camera_info_topic>
                    </camera>
                    <always_on>1</always_on>
                    <update_rate>20</update_rate>
                    <visualize>true</visualize>
                    <topic>table_camera/image</topic>
                    </sensor>
                </gazebo>`}
                        language="xml"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Add it to the <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge</code>:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "table_camera/camera_info"
                gz_topic_name: "table_camera/camera_info"
                ros_type_name: "sensor_msgs/msg/CameraInfo"
                gz_type_name: "gz.msgs.CameraInfo"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And update <code className="bg-gray-800 px-2 py-1 rounded">image_bridge</code> and add another relay node:
                    </p>

                    <CodeBlock
                        code={`    # Node to bridge camera topics
                    gz_image_bridge_node = Node(
                        package="ros_gz_image",
                        executable="image_bridge",
                        arguments=[
                            "/gripper_camera/image",
                            "/table_camera/image",
                        ],
                        output="screen",
                        parameters=[
                            {'use_sim_time': LaunchConfiguration('use_sim_time'),
                            'gripper_camera.image.compressed.jpeg_quality': 75,
                            'table_camera.image.compressed.jpeg_quality': 75,},
                        ],
                    )

                    # Relay node to republish camera_info to image/camera_info
                    relay_gripper_camera_info_node = Node(
                        package='topic_tools',
                        executable='relay',
                        name='relay_camera_info',
                        output='screen',
                        arguments=['gripper_camera/camera_info', 'gripper_camera/image/camera_info'],
                        parameters=[
                            {'use_sim_time': LaunchConfiguration('use_sim_time')},
                        ]
                    )

                    # Relay node to republish camera_info to image/camera_info
                    relay_table_camera_info_node = Node(
                        package='topic_tools',
                        executable='relay',
                        name='relay_camera_info',
                        output='screen',
                        arguments=['table_camera/camera_info', 'table_camera/image/camera_info'],
                        parameters=[
                            {'use_sim_time': LaunchConfiguration('use_sim_time')},
                        ]
                    )`}
                        language="python"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace and start the simulation, add both cameras to RViz:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={tableCamera}
                            alt="Table Camera"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        RGBD Camera
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's replace the table camera with an RGBD camera as we tried in the <code className="bg-gray-800 px-2 py-1 rounded">Gazebo-sensors</code> lessons! We have to replace the Gazebo camera plugin with an RGBD plugin:
                    </p>

                    <CodeBlock
                        code={`  <gazebo reference="table_camera_link">
                    <sensor name="rgbd_camera" type="rgbd_camera">
                    <camera>
                        <horizontal_fov>1.25</horizontal_fov>
                        <image>
                        <width>320</width>
                        <height>240</height>
                        </image>
                        <clip>
                        <near>0.3</near>
                        <far>15</far>
                        </clip>
                        <optical_frame_id>table_camera_link_optical</optical_frame_id>
                    </camera>
                    <always_on>1</always_on>
                    <update_rate>20</update_rate>
                    <visualize>true</visualize>
                    <topic>table_camera</topic>
                    <gz_frame_id>table_camera_link</gz_frame_id>
                    </sensor>
                </gazebo>`}
                        language="xml"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        And we also have to forward two more messages <code className="bg-gray-800 px-2 py-1 rounded">gz_bridge</code>:
                    </p>

                    <CodeBlock
                        code={`- ros_topic_name: "table_camera/depth_image"
                gz_topic_name: "table_camera/depth_image"
                ros_type_name: "sensor_msgs/msg/Image"
                gz_type_name: "gz.msgs.Image"
                direction: "GZ_TO_ROS"

                - ros_topic_name: "table_camera/points"
                gz_topic_name: "table_camera/points"
                ros_type_name: "sensor_msgs/msg/PointCloud2"
                gz_type_name: "gz.msgs.PointCloudPacked"
                direction: "GZ_TO_ROS"`}
                        language="yaml"
                        maxHeight="300px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace and start the simulation, add the depth cloud visualizer to RViz:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={rgbdCamera}
                            alt="RGBD Camera"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 rounded mt-6">
                        <p className="text-base leading-relaxed">
                            <strong>📝 Note:</strong> I'll switch back to the normal camera from here.
                        </p>
                    </div>
                </section>

                {/* Moving with ROS Node Section */}
                             
                <section id="ros-node-movement" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Moving the Robot with a ROS Node
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        In the previous chapters we moved the robotic arm with the <code className="bg-gray-800 px-2 py-1 rounded">rqt_joint_trajectory_controller</code>, let's take a look on its topic in <code className="bg-gray-800 px-2 py-1 rounded">rqt</code>:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={rqtArmController}
                            alt="RQT Arm Controller"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        The node is sending the joint trajectory commands on the <code className="bg-gray-800 px-2 py-1 rounded">/arm_controller/joint_trajectory</code> topic. Let's write our own node to send joint angles. Create a new <code className="bg-gray-800 px-2 py-1 rounded">send_joint_angles.py</code> node in the <code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_simple_arm_py</code> package:
                    </p>

                    <CodeBlock
                        code={`import rclpy
                from rclpy.node import Node
                from trajectory_msgs.msg import JointTrajectory, JointTrajectoryPoint

                class JointAnglePublisher(Node):
                    def __init__(self):
                        super().__init__('initial_pose_publisher')

                        # Create a publisher for the '/arm_controller/joint_trajectory' topic
                        self.publisher = self.create_publisher(JointTrajectory, '/arm_controller/joint_trajectory', 10)

                        # Create the JointTrajectory message
                        self.trajectory_command = JointTrajectory()
                        joint_names = ['shoulder_pan_joint', 'shoulder_lift_joint', 'elbow_joint', 'wrist_joint', 'left_finger_joint', 'right_finger_joint']
                        self.trajectory_command.joint_names = joint_names

                        point = JointTrajectoryPoint()
                        #['shoulder_pan_joint', 'shoulder_lift_joint', 'elbow_joint', 'wrist_joint', 'left_finger_joint', 'right_finger_joint']
                        point.positions = [0.0, 0.91, 1.37, -0.63, 0.3, 0.3]
                        point.velocities = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                        point.time_from_start.sec = 2

                        self.trajectory_command.points = [point]

                        # Publish the message
                        self.get_logger().info('Publishing joint angles...')

                    def send_joint_angles(self):

                        while rclpy.ok():
                            self.publisher.publish(self.trajectory_command)
                            rclpy.spin_once(self, timeout_sec=0.1)


                def main(args=None):
                    rclpy.init(args=args)
                    node = JointAnglePublisher()

                    try:
                        node.send_joint_angles()
                    except KeyboardInterrupt:
                        pass
                    finally:
                        node.destroy_node()
                        rclpy.shutdown()

                if __name__ == '__main__':
                    main()`}
                        language="python"
                        maxHeight="600px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace, start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-4">
                        And in another terminal start the new node:
                    </p>

                    <CodeBlock
                        code="ros2 run erc_ros2_simple_arm_py send_joint_angles"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={jointAngles}
                            alt="Joint Angles"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Try it with another joint angles:
                    </p>

                    <CodeBlock
                        code={`point.positions = [-0.45, 0.72, 1.84, -1.0, 0.3, 0.3]`}
                        language="python"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={jointAngles1}
                            alt="Joint Angles Alternative"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 rounded mt-6">
                        <p className="text-base leading-relaxed">
                            <strong>🎯 Understanding Joint Control:</strong> By publishing to the <code className="bg-gray-800 px-2 py-1 rounded">/arm_controller/joint_trajectory</code> topic, you're directly commanding the robot's joints. This gives you programmatic control over the arm's position, allowing you to create custom motion sequences and behaviors.
                        </p>
                    </div>
                </section>

                {/* Inverse Kinematics Section */}
                              
                <section id="inverse-kinematics" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Inverse Kinematics
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        In robotics, we often want the robot's tool (TCP) to reach a specific position or follow a path in space. Instead of manually setting each joint angle — which can be complicated and unintuitive — we use inverse kinematics (IK) to automatically calculate the joint angles needed to reach that position. This makes it easier to plan precise movements, especially for tasks like picking, placing, or welding, where the tool's position matters more than individual joint values.
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={ik3}
                            alt="Inverse Kinematics Overview"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        The first joint of our 4 DoF robotic arm is rotating the whole robot around the vertical (<code className="bg-gray-800 px-2 py-1 rounded">z</code>) axis, so we can easily calculate this first joint angle (<code className="bg-gray-800 px-2 py-1 rounded">j0</code>) from the <code className="bg-gray-800 px-2 py-1 rounded">x</code> and <code className="bg-gray-800 px-2 py-1 rounded">y</code> TCP coordinates:
                    </p>

                    <CodeBlock
                        code={`j0 = math.atan(coords[1]/coords[0])`}
                        language="python"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-4">
                        Where <code className="bg-gray-800 px-2 py-1 rounded">coords</code> is the desired [<code className="bg-gray-800 px-2 py-1 rounded">x</code>, <code className="bg-gray-800 px-2 py-1 rounded">y</code>, <code className="bg-gray-800 px-2 py-1 rounded">z</code>] coordinates of the TCP.
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={ik2}
                            alt="First Joint Calculation"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        For our inverse kinematics solver the gripper angle (<code className="bg-gray-800 px-2 py-1 rounded">j3</code>) is an input parameter and it's always interpreted to the robot's base fixed coordinate system, and not to the last moving link! It means <code className="bg-gray-800 px-2 py-1 rounded">0 rad</code> gripper angle is always horizontal, <code className="bg-gray-800 px-2 py-1 rounded">pi / 2 rad</code> is always a vertically pointing down angle.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Since we already know <code className="bg-gray-800 px-2 py-1 rounded">j0</code> and <code className="bg-gray-800 px-2 py-1 rounded">j3</code> we only have to calculate <code className="bg-gray-800 px-2 py-1 rounded">j1</code> and <code className="bg-gray-800 px-2 py-1 rounded">j2</code> like this:
                    </p>

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={ik1}
                            alt="Joint Calculations"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6">
                        The inverse kinematics and forward kinematics calculation can be found in the <code className="bg-gray-800 px-2 py-1 rounded">test_inverse_kinematics.py</code> file in the <code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_simple_arm_py</code> package. This is not a ROS node, just a simple python script to verify the correct calculation of the algorithm.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-yellow-300">
                        Inverse Kinematics ROS Node
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's create a new ROS node for moving the robot using inverse kinematics, create a new file <code className="bg-gray-800 px-2 py-1 rounded">inverse_kinematics.py</code>. Start from the existing code of <code className="bg-gray-800 px-2 py-1 rounded">send_joint_angles.py</code> add the <code className="bg-gray-800 px-2 py-1 rounded">inverse_kinematics()</code> function and calculate the <code className="bg-gray-800 px-2 py-1 rounded">point.positions</code> with this function from a TCP coordinate.
                    </p>

                    <CodeBlock
                        code={`point = JointTrajectoryPoint()
                #['shoulder_pan_joint', 'shoulder_lift_joint', 'elbow_joint', 'wrist_joint', 'left_finger_joint', 'right_finger_joint']
                joint_angles = self.inverse_kinematics([0.4, 0.2, 0.15], "open", 0)
                point.positions = joint_angles
                ...`}
                        language="python"
                        maxHeight="200px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Rebuild the workspace, start the simulation:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_ros2_simple_arm spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-4">
                        And in another terminal start the new node:
                    </p>

                    <CodeBlock
                        code="ros2 run erc_ros2_simple_arm_py inverse_kinematics"
                        language="bash"
                        maxHeight="100px"
                    />

                    <div className="mb-6 flex justify-center mt-6">
                        <img
                            src={inverseKinematics}
                            alt="Inverse Kinematics in Action"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Let's try a few another TCP coordinates:
                    </p>

                    <CodeBlock
                        code={`joint_angles = inverse_kinematics([0.35, 0, 0.05], "open", math.pi/2)
                joint_angles = inverse_kinematics([0.5, 0, 0.05], "open", 0)
                joint_angles = inverse_kinematics([0.4, 0, 0.15], "open", 0)`}
                        language="python"
                        maxHeight="150px"
                    />

                    <div className="mb-8 flex justify-center mt-6">
                        <img
                            src={dummyRdj}
                            alt="Dummy RDJ"
                            className="rounded-xl w-full max-w-3xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-cyan-400 p-6 rounded mt-6">
                        <p className="text-lg leading-relaxed mb-4">
                            At this point, the robot doesn't just move — it <strong>chooses how to move</strong>.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            You've built the bridge from target position to joint motion, from "I want the hand there" to every servo knowing exactly what it must do. Your inverse kinematics node now threads geometry, trigonometry, and ROS messages together into a single decision-making pipeline.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            StarkOS now has control intelligence. The arm is no longer guessing.
                        </p>
                        <p className="text-lg leading-relaxed mb-4">
                            Direct motor commands end here. From now on, the robot computes, solves, and executes.
                        </p>
                        <p className="text-lg leading-relaxed font-semibold">
                            The arm doesn't just follow instructions anymore.
                        </p>
                        <p className="text-lg leading-relaxed">
                            It plans. It reasons about its own body. And it moves with purpose — because you designed the system that tells it how.
                        </p>
                    </div>
                </section>

                {/* Final Project Section */}
                               
                <section id="final-project" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-red-400 border-l-4 border-red-400 pl-6">
                        FINAL PROJECT | One Last Task!
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        You've given the robot perception. You've given the arm intelligence and control.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Now comes the real test — the point where systems stop existing on paper and start behaving like a machine.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Up to this point, the mobile base and the robotic arm have lived separate lives. One explored the environment. One manipulated it. Each worked well in isolation — like early Iron Man prototypes sitting on separate workbenches. Useful. Impressive. But not a suit.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Your mission now is to <strong>integrate them</strong> — to make mobility and manipulation operate as a single coordinated platform. The base must no longer wander without purpose. The arm must no longer act without context. They need to share data, timing, intent, and consequence through ROS.
                    </p>

                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-l-4 border-red-400 p-6 rounded my-6">
                        <p className="text-xl leading-relaxed font-semibold mb-4 text-red-300">
                            The objective is simple to say and difficult to execute:
                        </p>
                        <p className="text-lg leading-relaxed">
                            Build a system where the robot navigates to the target… and the arm completes the task once it arrives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 my-8">
                        <div className="bg-blue-500/10 border border-blue-400/30 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-3 text-blue-300">The base handles</h4>
                            <p className="text-base leading-relaxed">Global motion</p>
                        </div>
                        <div className="bg-cyan-500/10 border border-cyan-400/30 p-6 rounded-lg">
                            <h4 className="text-xl font-semibold mb-3 text-cyan-300">The arm handles</h4>
                            <p className="text-base leading-relaxed">Precision motion</p>
                        </div>
                    </div>

                    <p className="text-lg leading-relaxed mb-4 text-center font-semibold text-yellow-300">
                        Together, they accomplish work.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Navigation meets inverse kinematics. Path planning meets grasp execution. Perception, localization, control — fused.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Just like Stark's suit, every subsystem must stop thinking "I" and start thinking "we." No more isolated nodes doing their own job. You're building coordination logic — who waits, who acts, who decides, and what happens when things go wrong.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-6 rounded my-6">
                        <p className="text-lg leading-relaxed font-semibold mb-3">
                            ⚠️ This will not be a step-by-step recipe.
                        </p>
                        <p className="text-base leading-relaxed mb-2">
                            There is no "copy this launch file and you're done."
                        </p>
                        <p className="text-base leading-relaxed">
                            Instead, you will design message flows. You will decide what modules talk to each other. You will determine who is in command — base or arm — and when that authority switches.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-4 italic text-gray-300">
                        Clues, hints, and mission briefings will be released gradually — the way Stark unlocks new suit capabilities only when you're ready for them.
                    </p>

                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-l-4 border-purple-400 p-6 rounded my-8">
                        <h3 className="text-2xl font-bold mb-4 text-purple-300">Your task now:</h3>
                        <ul className="space-y-3">
                            <li className="text-lg leading-relaxed flex items-start">
                                <span className="text-purple-400 mr-3 text-xl">•</span>
                                <span>Integrate. Synchronize. Orchestrate motion.</span>
                            </li>
                            <li className="text-lg leading-relaxed flex items-start">
                                <span className="text-purple-400 mr-3 text-xl">•</span>
                                <span>Make the mobile robot and arm function as one coherent autonomous unit.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-8 flex justify-center my-8">
                        <img
                            src={integratedBot}
                            alt="Integrated Bot"
                            className="rounded-xl w-full max-w-md h-auto border-2 border-red-400/30"
                        />
                    </div>

                    <div className="space-y-4 my-8">
                        <p className="text-lg leading-relaxed text-center">
                            The suit doesn't assemble itself.
                        </p>
                        <p className="text-lg leading-relaxed text-center">
                            It doesn't magically work on the first try.
                        </p>
                        <p className="text-lg leading-relaxed text-center italic text-gray-300">
                            It comes together through iteration, debugging lasers, broken servos, and sudden breakthroughs at 3 a.m.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-l-4 border-white p-6 rounded my-8">
                        <p className="text-xl leading-relaxed mb-3 font-semibold">
                            You're not just running packages anymore.
                        </p>
                        <p className="text-xl leading-relaxed font-bold text-blue-300">
                            You're architecting a system.
                        </p>
                    </div>

                    <div className="text-center my-12">
                        <p className="text-3xl font-bold text-red-400 mb-4">
                            Build it.
                        </p>
                    </div>

                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={() => navigate('/winteros')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl font-bold shadow-lg"
                        >
                            🏠 Back to Home
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}