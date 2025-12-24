import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Copy, Check } from 'lucide-react';

import g1 from '../assets/week3_p1_g1.gif';
import g2 from '../assets/week3_p1_g2.gif';
import g3 from '../assets/week3_p1_g3.gif';

import w1 from '../assets/week3_p1_w1.png';
import w2 from '../assets/week3_p1_w2.png';
import w3 from '../assets/week3_p1_w3.png';
import w4 from '../assets/week3_p1_w4.png';
import w5 from '../assets/week3_p1_w5.png';

import cvbridgeImg from '../assets/cvbridge3.png'
// Reusable CodeBlock component
function CodeBlock({ code, language = 'python', maxHeight = '300px' }) {
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

export default function Week3Part1() {
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
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 3 Part 1 Navigation</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
                        <li className="pt-2 border-t border-white/10"></li>
                        <li><button onClick={() => scrollToSection('week3-intro')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Introduction</button></li>
                        <li><button onClick={() => scrollToSection('part1-vision')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">👁️ Part 1 - Vision</button></li>
                        <li><button onClick={() => scrollToSection('opencv')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📷 OpenCV</button></li>
                        <li><button onClick={() => scrollToSection('installation')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">⚙️ Installation</button></li>
                        <li><button onClick={() => scrollToSection('image-processing')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🖼️ Image Processing</button></li>
                        <li><button onClick={() => scrollToSection('create-package')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📦 Create Package</button></li>
                        <li><button onClick={() => scrollToSection('creating-node')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔧 Creating Node</button></li>
                        <li><button onClick={() => scrollToSection('part1-done')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">✅ Part 1 Done</button></li>

                        {/* Navigation to Part 2 */}
                        <li className="pt-4 border-t border-white/10">
                            <button
                                onClick={() => navigate('/week3p2')}
                                className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg flex items-center justify-between group"
                            >
                                <span>Continue to Part 2</span>
                                <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </li>

                        {/* Navigation to home */}
                        <li className="pt-2">
                            <button
                                onClick={() => navigate('/winteros')}
                                className="text-lg hover:text-blue-400 transition-colors w-full text-left px-4 py-2"
                            >
                                ❄️ Back to Home
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

            {/* Floating navigation button at the bottom right corner */}
            <div className="fixed bottom-8 right-8 z-50">
                <button
                    onClick={() => navigate('/week3p2')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full transition-all duration-300 transform hover:scale-105 text-base font-bold shadow-lg flex items-center gap-2 group"
                >
                    <span>Next: Part 2</span>
                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>

            {/* Hero Section */}
            <header className="text-center px-6 py-20 pt-32 glass-strong mx-6 rounded-3xl relative">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">
                        Week 3<span className="text-white"> — JARVIS: Vision & Navigation</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
                        Teaching StarkOS to See
                    </p>
                    <p className="text-lg md:text-xl text-gray-300">
                        Raw data turns into understanding
                    </p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Week 3 Introduction */}
                <section id="week3-intro" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Week 3 — JARVIS: Vision & Navigation
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Up until now, your robot could <strong>move</strong> and <strong>sense</strong> the world.<br />
                        But sensing alone isn't enough.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is the stage where raw data turns into <strong>understanding</strong>.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Before an Iron Man suit can navigate a battlefield or map an unknown structure, it has to interpret what it sees — edges, motion, obstacles, free space. Cameras stop being "images" and start becoming <strong>information</strong>. Sensor data stops being noise and starts forming <strong>maps</strong>.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This week, we step into that layer.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        We'll use <strong>OpenCV</strong> to process camera data and extract meaningful features, and we'll introduce <strong>navigation and SLAM algorithms</strong> that allow a robot to build a map of its environment while figuring out where it is inside it — all at the same time.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This isn't about flashy movement anymore.<br />
                        It's about <strong>reasoning</strong>, <strong>localization</strong>, and <strong>decision-making</strong>.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        The suit doesn't just fly.<br />
                        It knows <em>where</em> it is.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g1}
                            alt="Tony Stark Suits"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* Part 1 - Vision */}
                <section id="part1-vision" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Part 1 — Vision: Teaching Stark OS to See
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        So far, our robot can move and sense distance — but it's still blind.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        In <em>Week 3 · Part 1</em>, we give StarkOS vision.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Using <em>ROS 2 + OpenCV</em>, we'll process live camera feeds, extract useful information from raw pixels, and turn what the robot sees into motion. This is perception in its simplest and most powerful form.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        By the end of this part, the robot won't just drive —<br />
                        it will <em>react visually</em> to its environment.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        No mapping yet.<br />
                        No planning yet.<br />
                        Just <em>seeing → deciding → moving.</em>
                    </p>
                    <div className="mb-6 flex justify-center">
                        <img
                            src={g2}
                            alt="Iron man Vision"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4 text-center italic">
                        "Iron Man's Image processing"
                    </p>
                </section>

                {/* OpenCV */}
                <section id="opencv" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        OpenCV
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w1}
                            alt="OpenCv"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        OpenCV (Open-Source Computer Vision Library) is an open-source library that includes several hundreds of computer vision algorithms. It helps us in performing various operations on images very easily.
                    </p>
                </section>

                {/* Installation and Setup */}
                <section id="installation" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Installation and Setup
                    </h2>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Installing OpenCV
                    </h3>

                    <p className="text-lg leading-relaxed mb-3">
                        Execute:
                    </p>

                    <CodeBlock
                        code="pip --version"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        Ensure that pip is configured with python3.xx. If not you may have to use <code className="bg-gray-800 px-2 py-1 rounded">pip3 --version</code>.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Execute either:
                    </p>

                    <CodeBlock
                        code={`pip install opencv-contrib-python
#or
pip install opencv-python`}
                        language="bash"
                        maxHeight="150px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        Use <code className="bg-gray-800 px-2 py-1 rounded">pip3</code> in the above commands, if python3 is configured with one of them.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Type <code className="bg-gray-800 px-2 py-1 rounded">python3</code> in Terminal to start Python interactive session and type following codes there:
                    </p>

                    <CodeBlock
                        code={`import cv2 as cv
print(cv.__version__)`}
                        language="python"
                        maxHeight="150px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        If you're encountering an issue with the cv2 (OpenCV) library and its interaction with the numpy library, then execute the following. We don't want the most recent version of numpy as it cannot interact with cv_bridge:
                    </p>

                    <CodeBlock
                        code="pip install numpy==1.23.5"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        If the results are printed out without any errors, congratulations!!! You have installed OpenCV-Python successfully.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        You may Install OpenCV from source (Lengthy process). Please refer to{' '}
                        <a href="https://docs.opencv.org/4.5.0/d2/de6/tutorial_py_setup_in_ubuntu.html" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            this link
                        </a>. This installation can take some time so have patience.
                    </p>
                </section>
                    
                <section id="cv-bridge" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">cv_bridge</h2>
                    
                    <p className="text-lg mb-4">
                        Now that we are familiar with the basics of OpenCV and ROS2, we can finally talk about integrating these two and performing various operations on images such as image detection.
                    </p>
                    
                    <p className="text-lg mb-4">
                        However, in ROS2, the format of the images being processed (ROS2 image Message) is quite different than that used in OpenCV (cv::Mat). This is where the library <code className="bg-gray-800 px-2 py-1 rounded">cv_bridge</code> comes to the rescue!
                    </p>
                    
                    <p className="text-lg mb-6">
                        We create a publisher-subscriber model to import and export images out of ROS into OpenCV and back into ROS.
                    </p>
                    
                    <div className="flex justify-center">
                        <img 
                            src={cvbridgeImg}
                            alt="cv_bridge architecture diagram" 
                            className="rounded-lg shadow-lg max-w-md"
                        />
                    </div>
                </section>

                {/* Image Processing with OpenCV */}
                <section id="image-processing" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Image Processing with OpenCV
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        We'll learn how to implement our own node for image processing using ROS and OpenCV. To start, let's create a package alongside our pre-existing package <code className="bg-gray-800 px-2 py-1 rounded">erc_gazebo_sensors</code> that we made in the previous week.
                    </p>
                </section>

                {/* Create new package */}
                <section id="create-package" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Create New Package
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        Ensure you have finished <code className="bg-gray-800 px-2 py-1 rounded">erc_gazebo_sensors</code> and all its content from <strong>Week 2</strong>. Let's now create a new package <code className="bg-gray-800 px-2 py-1 rounded">erc_gazebo_sensors_py</code> to run our python scripts from:
                    </p>

                    <CodeBlock
                        code={`cd ~/erc_ws/src

ros2 pkg create --build-type=ament_python erc_gazebo_sensors_py`}
                        language="bash"
                        maxHeight="150px"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        This will create the package inside your <code className="bg-gray-800 px-2 py-1 rounded">src</code> folder.
                    </p>
                </section>

                {/* Creating new node */}
                <section id="creating-node" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Creating New Node
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        Open your workspace in VS Code/VS Codium and navigate to the <code className="bg-gray-800 px-2 py-1 rounded">erc_gazebo_sensors_py</code> folder.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        The directory will mostly look like this:
                    </p>

                    <CodeBlock
                        code={`erc_gazebo_sensors_py/
├── erc_gazebo_sensors_py
│   └── __init__.py
├── package.xml
├── resource
│   └── erc_gazebo_sensors_py
├── setup.cfg
├── setup.py
└── test
    ├── test_copyright.py
    ├── test_flake8.py
    └── test_pep257.py`}
                        language="bash"
                        maxHeight="250px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        In this, navigate to the inner folder <code className="bg-gray-800 px-2 py-1 rounded">erc_gazebo_sensors_py</code> which has the file <code className="bg-gray-800 px-2 py-1 rounded">__init__.py</code>.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Create a new file of the name <code className="bg-gray-800 px-2 py-1 rounded">chase_the_ball.py</code>. Yes, this will make our robot chase a red ball around. Exciting, isn't it!!!
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Let's do this step by step
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Step 1
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        Making the node which subscribes to <code className="bg-gray-800 px-2 py-1 rounded">/camera/image</code> topic as that contains the camera feed. It then converts it to OpenCV compatible frame and displays it using OpenCV.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Paste this in <code className="bg-gray-800 px-2 py-1 rounded">chase_the_ball.py</code>:
                    </p>

                    <CodeBlock
                        code={`import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image
from cv_bridge import CvBridge
from geometry_msgs.msg import Twist
import cv2
import numpy as np
import threading

class ImageSubscriber(Node):
    def __init__(self):
        super().__init__('image_subscriber')
        
        # Create a subscriber with a queue size of 1 to only keep the last frame
        self.subscription = self.create_subscription(
            Image,
            'camera/image',
            self.image_callback,
            1  # Queue size of 1
        )

        self.publisher = self.create_publisher(Twist, 'cmd_vel', 10)
        
        # Initialize CvBridge
        self.bridge = CvBridge()
        
        # Variable to store the latest frame
        self.latest_frame = None
        self.frame_lock = threading.Lock()  # Lock to ensure thread safety
        
        # Flag to control the display loop
        self.running = True

        # Start a separate thread for spinning (to ensure image_callback keeps receiving new frames)
        self.spin_thread = threading.Thread(target=self.spin_thread_func)
        self.spin_thread.start()

    def spin_thread_func(self):
        """Separate thread function for rclpy spinning."""
        while rclpy.ok() and self.running:
            rclpy.spin_once(self, timeout_sec=0.05)

    def image_callback(self, msg):
        """Callback function to receive and store the latest frame."""
        # Convert ROS Image message to OpenCV format and store it
        with self.frame_lock:
            self.latest_frame = self.bridge.imgmsg_to_cv2(msg, "bgr8")

    def stop(self):
        """Stop the node and the spin thread."""
        self.running = False
        self.spin_thread.join()

    def display_image(self):
        """Main loop to process and display the latest frame."""
        # Create a single OpenCV window
        cv2.namedWindow("frame", cv2.WINDOW_NORMAL)
        cv2.resizeWindow("frame", 800,600)

        while rclpy.ok():
            # Check if there is a new frame available
            if self.latest_frame is not None:

                # Process the current image
                self.process_image(self.latest_frame)

                # Show the latest frame
                cv2.imshow("frame", self.latest_frame)
                self.latest_frame = None  # Clear the frame after displaying

            # Check for quit key
            if cv2.waitKey(1) & 0xFF == ord('q'):
                self.running = False
                break

        # Close OpenCV window after quitting
        cv2.destroyAllWindows()
        self.running = False

    def process_image(self, img):
        """Image processing task."""
        return

def main(args=None):

    print("OpenCV version: %s" % cv2.__version__)

    rclpy.init(args=args)
    node = ImageSubscriber()
    
    try:
        node.display_image()  # Run the display loop
    except KeyboardInterrupt:
        pass
    finally:
        node.stop()
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`}
                        language="python"
                        maxHeight="500px"
                    />

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            In OpenCV, each frame is handled individually and we have to perform operations such as converting it to a CV2 compatible frame for all the frames we get.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Run:
                    </p>

                    <CodeBlock
                        code="chmod +x chase_the_ball.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        So we can make it an executable file.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Don't forget to add the entry point in <code className="bg-gray-800 px-2 py-1 rounded">setup.py</code>:
                    </p>

                    <CodeBlock
                        code={`entry_points={
     'console_scripts': [
         'chase_the_ball = erc_gazebo_sensors_py.chase_the_ball:main'
     ],
 },`}
                        language="python"
                        maxHeight="150px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        Build and source your workspace.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Run:
                    </p>

                    <CodeBlock
                        code="ros2 launch erc_gazebo_sensors spawn_robot.launch.py"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-3">
                        In another terminal sourcing your workspace run:
                    </p>

                    <CodeBlock
                        code="ros2 run erc_gazebo_sensors_py chase_the_ball"
                        language="bash"
                        maxHeight="100px"
                    />

                    <p className="text-lg leading-relaxed mb-4">
                        You can run this after launching your robot as you did in the previous week and you should be able to see a camera feed.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            To end the <code className="bg-gray-800 px-2 py-1 rounded">chase_the_ball</code> program, just clicking <strong>X</strong> on the window isn't enough. Close it with <code className="bg-gray-800 px-2 py-1 rounded">Ctrl + C</code> in the terminal you opened it in.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-6">
                        Don't worry too much about the threads part of the code. It just ensures that the image processing happens on a separate thread as it is quite an intensive task.
                    </p>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Step 2
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        As you may have noticed, the <code className="bg-gray-800 px-2 py-1 rounded">process_image</code> function doesn't really do anything right now. Let's fix that.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Change your <code className="bg-gray-800 px-2 py-1 rounded">process_image</code> function to the one given below:
                    </p>

                    <CodeBlock
                        code={`def process_image(self, img):
    """Image processing task."""
    msg = Twist()
    msg.linear.x = 0.0
    msg.linear.y = 0.0
    msg.linear.z = 0.0
    msg.angular.x = 0.0
    msg.angular.y = 0.0
    msg.angular.z = 0.0

    rows,cols = img.shape[:2]

    R,G,B = self.convert2rgb(img)

    redMask = self.threshold_binary(R, (220, 255))
    stackedMask = np.dstack((redMask, redMask, redMask))
    contourMask = stackedMask.copy()
    crosshairMask = stackedMask.copy()

    # return value of findContours depends on OpenCV version
    (contours, hierarchy) = cv2.findContours(redMask.copy(), 1, cv2.CHAIN_APPROX_NONE)

    # Find the biggest contour (if detected)
    if len(contours) > 0:
        
        c = max(contours, key=cv2.contourArea)
        M = cv2.moments(c)

        # Make sure that "m00" won't cause ZeroDivisionError: float division by zero
        if M["m00"] != 0:
            cx = int(M["m10"] / M["m00"])
            cy = int(M["m01"] / M["m00"])
        else:
            cx, cy = 0, 0

        # Show contour and centroid
        cv2.drawContours(contourMask, contours, -1, (0,255,0), 10)
        cv2.circle(contourMask, (cx, cy), 5, (0, 255, 0), -1)

        # Show crosshair and difference from middle point
        cv2.line(crosshairMask,(cx,0),(cx,rows),(0,0,255),10)
        cv2.line(crosshairMask,(0,cy),(cols,cy),(0,0,255),10)
        cv2.line(crosshairMask,(int(cols/2),0),(int(cols/2),rows),(255,0,0),10)

    # Return processed frames
    return redMask, contourMask, crosshairMask`}
                        language="python"
                        maxHeight="500px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Don't run it quite yet though as we have used some helper functions in the above code that we need to define.
                    </p>

                    <h4 className="text-xl font-semibold mt-6 mb-3 text-cyan-300">
                        <code className="bg-gray-800 px-2 py-1 rounded">convert2RGB</code> and <code className="bg-gray-800 px-2 py-1 rounded">threshold_binary</code>:
                    </h4>

                    <p className="text-lg leading-relaxed mb-3">
                        Write this function above the <code className="bg-gray-800 px-2 py-1 rounded">process_image</code> function.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Please don't write it inside the process image function. They are two fully separate functions which have no overlap.
                        </p>
                    </div>

                    <CodeBlock
                        code={`def convert2rgb(self, img):
    R = img[:, :, 2]
    G = img[:, :, 1]
    B = img[:, :, 0]

    return R, G, B

def threshold_binary(self, img, thresh=(200, 255)):
    binary = np.zeros_like(img)
    binary[(img >= thresh[0]) & (img <= thresh[1])] = 1

    return binary*255`}
                        language="python"
                        maxHeight="250px"
                    />

                    <h3 className="text-2xl font-semibold mt-8 mb-3 text-yellow-300">
                        How does it work?
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        The essence behind OpenCV is that it dissects each frame of the video into three different photo channels - <strong>Red, Blue and Green</strong>.<br />
                        We then perform operations on each of the channels separately using the intensity values of the different colours.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is classic Stark engineering — break a complex signal into simple components, isolate what matters, and ignore the noise.<br />
                        No magic. Just math, thresholds, and a lot of iteration.
                    </p>

                    <h4 className="text-xl font-semibold mt-6 mb-3 text-cyan-300">
                        Change your <code className="bg-gray-800 px-2 py-1 rounded">display_image</code> function to show all the different frames that <code className="bg-gray-800 px-2 py-1 rounded">process_image</code> returns
                    </h4>

                    <CodeBlock
                        code={`def display_image(self):
    """Main loop to process and display the latest frame."""
    # Create a single OpenCV window
    cv2.namedWindow("frame", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("frame", 800,600)

    while rclpy.ok():
        # Check if there is a new frame available
        if self.latest_frame is not None:

            # Process the current image
            mask, contour, crosshair = self.process_image(self.latest_frame)

            # Show the latest frame
            cv2.imshow("frame", self.latest_frame)
            cv2.imshow("mask", mask)
            cv2.imshow("contour", contour)
            cv2.imshow("crosshair", crosshair)
            self.latest_frame = None  # Clear the frame after displaying

        # Check for quit key
        if cv2.waitKey(1) & 0xFF == ord('q'):
            self.running = False
            break

    # Close OpenCV window after quitting
    cv2.destroyAllWindows()
    self.running = False`}
                        language="python"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Okay let's run it once.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This time the node will open 4 OpenCV windows and try to find the red ball on the image. Let's add a red ball to the simulation first using the <code className="bg-gray-800 px-2 py-1 rounded">Resource Spawner</code> plugin of Gazebo.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w2}
                            alt="Resource Spawner"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        The 4 windows
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w3}
                            alt="4 windows"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Handling many OpenCV windows can be uncomfortable, so before we start following the ball, let's overlay the output of the image processing on the camera frame:
                    </p>

                    <CodeBlock
                        code={`# Add small images to the top row of the main image
def add_small_pictures(self, img, small_images, size=(160, 120)):

    x_base_offset = 40
    y_base_offset = 10

    x_offset = x_base_offset
    y_offset = y_base_offset

    for small in small_images:
        small = cv2.resize(small, size)
        if len(small.shape) == 2:
            small = np.dstack((small, small, small))

        img[y_offset: y_offset + size[1], x_offset: x_offset + size[0]] = small

        x_offset += size[0] + x_base_offset

    return img`}
                        language="python"
                        maxHeight="350px"
                    />

                    <p className="text-lg leading-relaxed mb-3 mt-6">
                        Let's modify <code className="bg-gray-800 px-2 py-1 rounded">display_image()</code> function so we can use the above function:
                    </p>

                    <CodeBlock
                        code={`def display_image(self):
    """Main loop to process and display the latest frame."""
    # Create a single OpenCV window
    cv2.namedWindow("frame", cv2.WINDOW_NORMAL)
    cv2.resizeWindow("frame", 800,600)

    while rclpy.ok():
        # Check if there is a new frame available
        if self.latest_frame is not None:

            # Process the current image
            mask, contour, crosshair = self.process_image(self.latest_frame)

            # Add processed images as small images on top of main image
            result = self.add_small_pictures(self.latest_frame, [mask, contour, crosshair])

            # Show the latest frame
            cv2.imshow("frame", result)
            self.latest_frame = None  # Clear the frame after displaying

        # Check for quit key
        if cv2.waitKey(1) & 0xFF == ord('q'):
            self.running = False
            break

    # Close OpenCV window after quitting
    cv2.destroyAllWindows()
    self.running = False`}
                        language="python"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        Now, on running it, we can see that all images are in one window, making it much easier to handle.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w4}
                            alt="better windows"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        Wait but all of this is just to recognize the ball. Where is the code to follow the ball?
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Add this code snippet in <code className="bg-gray-800 px-2 py-1 rounded">process_image()</code> function right after creating the crosshair image:
                    </p>

                    <CodeBlock
                        code={`            cv2.line(crosshairMask, (cx, 0), (cx, rows), (0, 0, 255), 10)
            cv2.line(crosshairMask, (0, cy), (cols, cy), (0, 0, 255), 10)
            cv2.line(
                crosshairMask,
                (int(cols / 2), 0),
                (int(cols / 2), rows),
                (255, 0, 0),
                10,
            )
            # Chase the ball
            if abs(cols / 2 - cx) > 20:
                msg.linear.x = 0.0
                if cols / 2 > cx:
                    msg.angular.z = 0.2
                else:
                    msg.angular.z = -0.2

            else:
                msg.linear.x = 0.2
                msg.angular.z = 0.0

        else:
            msg.linear.x = 0.0
            msg.angular.z = 0.0`}
                        language="python"
                        maxHeight="400px"
                    />

                    <p className="text-lg leading-relaxed mb-4 mt-6">
                        The second else is for the <code className="bg-gray-800 px-2 py-1 rounded">if len(contours) &gt; 0:</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        And now the robot should be able to follow the red ball!!
                    </p>
                    <div className="mb-6 flex justify-center">
                        <img
                            src={w5}
                            alt="WORKING"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>
                {/* Part 1 Done */}
                <section id="part1-done" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-green-400 border-l-4 border-green-400 pl-6">
                        Part 1 — Done
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g3}
                            alt="tony thumbs up"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        🎉 Congratulations! You've successfully given your robot vision and reactive behavior.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Your robot can now see and react to its environment. It identifies a red ball in its camera feed and actively chases it. This is perception-based control in action!
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-6 rounded">
                        <p className="text-lg leading-relaxed font-semibold mb-3">
                            What You've Accomplished:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li className="text-base leading-relaxed">Set up OpenCV and integrated it with ROS 2</li>
                            <li className="text-base leading-relaxed">Created a Python package for image processing</li>
                            <li className="text-base leading-relaxed">Implemented real-time camera feed processing</li>
                            <li className="text-base leading-relaxed">Built color detection and object tracking algorithms</li>
                            <li className="text-base leading-relaxed">Made the robot react to visual input by chasing a ball</li>
                        </ul>
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        The robot now:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">Processes live camera feeds using OpenCV</li>
                        <li className="text-lg leading-relaxed">Extracts meaningful information from raw pixels</li>
                        <li className="text-lg leading-relaxed">Makes movement decisions based on visual input</li>
                        <li className="text-lg leading-relaxed">Tracks and chases objects in real-time</li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        This isn't just moving anymore — it's <strong>seeing → understanding → reacting</strong>.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Next up: Navigation and SLAM — teaching the robot to map its world and know where it is inside it.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => navigate('/week3p2')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl font-bold shadow-lg"
                        >
                            Continue to Part 2 →
                        </button>
                        <button
                            onClick={() => navigate('/winteros')}
                            className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-xl transition-all duration-300 transform hover:scale-105 text-xl font-bold shadow-lg"
                        >
                            Back to Home
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}