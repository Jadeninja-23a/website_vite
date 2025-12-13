import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Import your images here (adjust paths as needed)
import g1 from '../assets/week2_p2_g1.gif'
import g2 from '../assets/week2_p2_g2.gif'
import g3 from '../assets/week2_p2_g3.gif'
import g4 from '../assets/week2_p2_g4.gif'

import w1 from '../assets/week2_p2_1.png'
import w2 from '../assets/week2_p2_2.png'
import w3 from '../assets/week2_p2_3.png'
import w4 from '../assets/week2_p2_4.png'
import w5 from '../assets/week2_p2_5.png'
import w6 from '../assets/week2_p2_6.png'
import w7 from '../assets/week2_p2_7.png'
import w8 from '../assets/week2_p2_8.png'
import w9 from '../assets/week2_p2_9.png'

// import compressedRqt from '../assets/compressed_rqt.png';
// import compressedRviz from '../assets/compressed_rviz.png';
// import rqtReconfigure from '../assets/rqt_reconfigure.png';
// import lidarImg from '../assets/lidar.png';
// import visualizeLidar from '../assets/visualize_lidar.png';
// import decay from '../assets/decay.png';
// import ironMongerOverload from '../assets/iron-monger-overload.gif';
// import ironManLidar from '../assets/iron-man-lidar.gif';
// import ironManEating from '../assets/iron-man-eating.gif';

export default function Week2Part2() {
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
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 2 Part 2 Navigation</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">❄️ WinterROS Home</button></li>
                        <li><button onClick={() => navigate('/week2p1')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">← Back to Part 1</button></li>
                        <li className="pt-2 border-t border-white/10"></li>
                        <li><button onClick={() => scrollToSection('week2-part2-intro')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Introduction</button></li>
                        <li><button onClick={() => scrollToSection('download-package')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📦 Download Package</button></li>
                        <li><button onClick={() => scrollToSection('camera')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📷 Camera Sensor</button></li>
                        <li><button onClick={() => scrollToSection('image-transport')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🔄 Image Transport</button></li>
                        <li><button onClick={() => scrollToSection('rqt-reconfigure')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">⚙️ RQT Reconfigure</button></li>
                        <li><button onClick={() => scrollToSection('lidar')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">📡 LiDAR Sensor</button></li>
                        <li><button onClick={() => scrollToSection('assignment')} className="text-lg hover:text-blue-400 transition-colors w-full text-left">🎯 Assignment</button></li>

                        {/* Navigation to home */}
                        <li className="pt-4 border-t border-white/10">
                            <button
                                onClick={() => navigate('/winteros')}
                                className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 w-full text-left px-4 py-3 rounded-lg flex items-center justify-between group"
                            >
                                <span>Back to Home</span>
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
                        Week 2 Part 2<span className="text-white"> — Gazebo Sensors</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">
                        Giving the Robot Awareness
                    </p>
                    <p className="text-lg md:text-xl text-gray-300">
                        A robot that can move is powerful. A robot that can see is unstoppable.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mt-2">
                        This is where perception begins — sensors that let the machine understand its world.
                    </p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Introduction Section */}
                <section id="week2-part2-intro" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Introduction
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g1}
                            alt="Iron Man's Sensors Working"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        "Iron Man's Sensors working"
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        In the first part of this week, you built a simulated robot that you can drive around manually. Now, it's time to verify that our robot can actually <strong>sense</strong> the world.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        A robot that cannot sense its environment is just a remote-controlled car. In this lesson, we will equip our robot with two critical sensors:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <strong>Camera (Visual Perception):</strong> To see the world in color.
                        </li>
                        <li className="text-lg leading-relaxed">
                            <strong>LiDAR (Spatial Perception):</strong> To detect obstacles and measure distances.
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        We will focus on the <strong>integration pipeline</strong>:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">Adding the physical links in <strong>URDF</strong></li>
                        <li className="text-lg leading-relaxed">Configuring the <strong>Gazebo plugins</strong></li>
                        <li className="text-lg leading-relaxed">Establishing the <strong>ROS 2 Bridge</strong></li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        By the end of this module, you will be able to visualize what the robot sees in <strong>RViz2</strong> in real-time.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        This is where StarkOS stops reacting blindly and starts observing.<br />
                        Sensors are not features — they are the inputs that every intelligent decision depends on.
                    </p>
                </section>

                {/* Download ROS Package */}
                <section id="download-package" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Download ROS Package
                    </h2>

                    <p className="text-lg leading-relaxed mb-3">
                        To download the starter package clone the following git repo to your colcon workspace:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`git clone https://github.com/ysdesha/winteros_week2_sensors.git`}</code>
                    </pre>

                    <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-300">
                        Test the starter package
                    </h3>

                    <p className="text-lg leading-relaxed mb-4">
                        After we download the package from GitHub, let's rebuild the workspace and source the <code>install/setup.bash</code> file to make sure ROS and its tools are aware about the new package.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Then we can test the package with the usual launch file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_sensors spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        And we can also start a teleop node:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 run teleop_twist_keyboard teleop_twist_keyboard`}</code>
                    </pre>
                </section>

                {/* Camera Section */}
                <section id="camera" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Camera
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Cameras are the robot's primary visual interface with the world.<br />
                        In simulation, this lets us validate perception pipelines, image transport, and data flow<br />
                        long before deploying to real hardware.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        To add a camera - and every other sensors later - we have to change 2 files:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            The <code>erc_bot.urdf</code>: we have to define the position, orientation and other physical properties of the camera in this file. This is not necessarily simulation dependent, we have to do these same changes in the urdf in case of a real robot with a real sensor.
                        </li>
                        <li className="text-lg leading-relaxed">
                            The <code>erc_bot.gazebo</code>: this is fully simulation dependent, we have to define the properties of the simulated camera in this file.
                        </li>
                    </ol>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's add the camera first to the <code>erc_bot.urdf</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`  <!-- STEP 7 - Camera -->
  <joint type="fixed" name="camera_joint">
    <origin xyz="0.225 0 0.075" rpy="0 0 0"/>
    <child link="camera_link"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" />
  </joint>

  <link name='camera_link'>
    <pose>0 0 0 0 0 0</pose>
    <inertial>
      <mass value="0.1"/>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <inertia
          ixx="1e-6" ixy="0" ixz="0"
          iyy="1e-6" iyz="0"
          izz="1e-6"
      />
    </inertial>

    <collision name='collision'>
      <origin xyz="0 0 0" rpy="0 0 0"/> 
      <geometry>
        <box size=".03 .03 .03"/>
      </geometry>
    </collision>

    <visual name='camera_link_visual'>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <box size=".03 .03 .03"/>
      </geometry>
    </visual>

  </link>

  <gazebo reference="camera_link">
    <material>Gazebo/Red</material>
  </gazebo>

  <joint type="fixed" name="camera_optical_joint">
    <origin xyz="0 0 0" rpy="-1.5707 0 -1.5707"/>
    <child link="camera_link_optical"/>
    <parent link="camera_link"/>
  </joint>

  <link name="camera_link_optical">
  </link>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        As we see above, the camera is a 3 x 3 x 3 cm cube, attached to the <code>base_link</code> with a fixed joint. But there is another thing, <code>camera_link_optical</code> which is connected to the <code>camera_link</code> through the <code>camera_optical_joint</code>! The purpose of this additional link and joint to solve the conflict between 2 different conventional coordinate systems:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">By default, URDF uses the right-handed coordinate system with X forward, Y left, and Z up.</li>
                        <li className="text-lg leading-relaxed">However, many ROS drivers and vision processing pipelines expect a camera's optical axis to be aligned with Z forward, X to the right, and Y down.</li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        <code>camera_optical_joint</code> applies a static rotation so that the camera data will be interpreted correctly by ROS tools that assume the Z-forward convention for image and depth sensors.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Now let's add the simulated camera into <code>erc_bot.gazebo</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`  <gazebo reference="camera_link">
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
        <optical_frame_id>camera_link_optical</optical_frame_id>
        <camera_info_topic>camera/camera_info</camera_info_topic>
      </camera>
      <always_on>1</always_on>
      <update_rate>20</update_rate>
      <visualize>true</visualize>
      <topic>camera/image</topic>
    </sensor>
  </gazebo>`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            Don't forget that the above code snippets must be placed within the already existing <code>&lt;robot&gt;</code> tag!
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        With the above plugin we define a couple of things for Gazebo, let's see the important ones one by one:
                    </p>

                    <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                        <li className="text-lg leading-relaxed">
                            <code>&lt;gazebo reference="camera_link"&gt;</code>, we have to refer to the <code>camera_link</code> that we defined in the <code>urdf</code>
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>&lt;horizontal_fov&gt;1.3962634&lt;/horizontal_fov&gt;</code>, the field of view of the simulated camera
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>width</code>, <code>height</code>, <code>format</code> and <code>update_rate</code>, properties of the video stream
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>&lt;optical_frame_id&gt;camera_link_optical&lt;/optical_frame_id&gt;</code>, we have to use the <code>camera_link_optical</code> that we checked in details above to ensure the right static transformations between the coordinate systems
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>&lt;camera_info_topic&gt;camera/camera_info&lt;/camera_info_topic&gt;</code>, certain tools like rviz requires a <code>camera_info</code> topic that describes the physical properties of the camera. The topic's name must match camera's topic (in this case both are <code>camera/...</code>)
                        </li>
                        <li className="text-lg leading-relaxed">
                            <code>&lt;topic&gt;camera/image&lt;/topic&gt;</code>, we define the camera topic here
                        </li>
                    </ul>

                    <p className="text-lg leading-relaxed mb-4">
                        We can rebuild the workspace and try our changes, but it will not yet work. The camera's red cube model is visible but the topics aren't available for ROS (we can check it for example with <code>rqt</code>)
                    </p>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            It's possible to reload the urdf without restarting the nodes by setting the parameter from the terminal:
                        </p>
                        <pre className="glass rounded-lg p-3 text-xs overflow-x-auto mt-2">
                            <code>{`ros2 param set /robot_state_publisher robot_description "$(xacro $(ros2 pkg prefix erc_gazebo_sensors)/share/erc_gazebo_sensors/urdf/erc_bot.urdf)"`}</code>
                        </pre>
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w1}
                            alt="Adding a camera"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        With the new Gazebo simulator topics are not automatically forwarded as we already saw it in the previous lesson, we have to use the <code>parameter_bridge</code> of the <code>ros_gz_bridge</code> package. It has{' '}
                        <a href="https://github.com/gazebosim/ros_gz/tree/ros2/ros_gz_bridge" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">
                            a very detailed readme
                        </a>{' '}
                        what kind of topic types can be forwarded between ROS and Gazebo. We have to extend the arguments of the <code>parameter_bridge</code> in our launch file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    # Node to bridge /cmd_vel and /odom
    gz_bridge_node = Node(
        package="ros_gz_bridge",
        executable="parameter_bridge",
        arguments=[
            "/clock@rosgraph_msgs/msg/Clock[gz.msgs.Clock",
            "/cmd_vel@geometry_msgs/msg/Twist@gz.msgs.Twist",
            "/odom@nav_msgs/msg/Odometry@gz.msgs.Odometry",
            "/joint_states@sensor_msgs/msg/JointState@gz.msgs.Model",
            "/tf@tf2_msgs/msg/TFMessage@gz.msgs.Pose_V",
            "/camera/image@sensor_msgs/msg/Image@gz.msgs.Image",
            "/camera/camera_info@sensor_msgs/msg/CameraInfo@gz.msgs.CameraInfo",

        ],
        output="screen",
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's rebuild the workspace and try it again:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_sensors spawn_robot.launch.py`}</code>
                    </pre>

                    <div className="mb-4 flex justify-center">
                        <img
                            src={w2}
                            alt="Camera working"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w3}
                            alt="Camera in RQT"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

               {/* Image Transport Section - CONTINUATION */}
                <section id="image-transport" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Image Transport
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        We can see that both <code>/camera/camera_info</code> and <code>/camera/image</code> topics are forwarded. Although this is still not the ideal way to forward the camera image from Gazebo. ROS has a very handy feature with it's image transport protocol plugins, it's able to automatically compress the video stream in the background without any additional work on our side. But this feature doesn't work together with <code>parameter_bridge</code>. Without compression the 640x480 camera stream consumes almost 20 MB/s network bandwidth which is unacceptable for a wireless mobile robot.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        On a real mobile robot, camera streams are almost always transmitted over<br />
                        limited-bandwidth links. Compression is not an optimization — it is a requirement.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Even Stark didn't stream raw sensor data when he didn't need to.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g2}
                            alt="Iron Monger Overload"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        "What happens to your robot when you send uncompressed image data"
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        Therefore there is a dedicated <code>image_bridge</code> node in the <code>ros_gz_image</code> package. Let's modify our launch file to the following:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    # Node to bridge /cmd_vel and /odom
    gz_bridge_node = Node(
        package="ros_gz_bridge",
        executable="parameter_bridge",
        arguments=[
            "/clock@rosgraph_msgs/msg/Clock[gz.msgs.Clock",
            "/cmd_vel@geometry_msgs/msg/Twist@gz.msgs.Twist",
            "/odom@nav_msgs/msg/Odometry@gz.msgs.Odometry",
            "/joint_states@sensor_msgs/msg/JointState@gz.msgs.Model",
            "/tf@tf2_msgs/msg/TFMessage@gz.msgs.Pose_V",
            #"/camera/image@sensor_msgs/msg/Image@gz.msgs.Image",
            "/camera/camera_info@sensor_msgs/msg/CameraInfo@gz.msgs.CameraInfo",

        ],
        output="screen",
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

    # Node to bridge camera image with image_transport and compressed_image_transport
    gz_image_bridge_node = Node(
        package="ros_gz_image",
        executable="image_bridge",
        arguments=[
            "/camera/image",
        ],
        output="screen",
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time'),
             'camera.image.compressed.jpeg_quality': 75},
        ],
    )`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        We also have to add the new node to the <code>launchDescription</code>:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`launchDescriptionObject.add_action(gz_image_bridge_node)`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        After rebuild we can try it using <code>rqt</code> and we will see huge improvement in the bandwidth thanks to the <code>jpeg</code> compression.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w4}
                            alt="Compressed RQT"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed mb-2">
                            If compressed images are not visible in rqt, you have to install the plugins you want to use:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                            <li><code>sudo apt install ros-jazzy-compressed-image-transport</code>: for jpeg and png compression</li>
                            <li><code>sudo apt install ros-jazzy-theora-image-transport</code>: for theora compression</li>
                            <li><code>sudo apt install ros-jazzy-zstd-image-transport</code>: for zstd compression</li>
                        </ul>
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        But we face another issue, this time in RViz, the uncompressed camera stream is visible as before but the compressed one isn't due to the following warning:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`Camera Info
Expecting Camera Info on topic [/camera/image/camera_info]. No CameraInfo received. Topic may not exist.`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        It's because RViz always expects the <code>image</code> and the <code>camera_info</code> topics with the same prefix which works well for:
                    </p>

                    <p className="text-lg leading-relaxed mb-2 ml-4">
                        <code>/camera/image</code> → <code>/camera/camera_info</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        But doesn't work for:
                    </p>

                    <p className="text-lg leading-relaxed mb-4 ml-4">
                        <code>/camera/image/compressed</code> → <code>/camera/image/camera_info</code>
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        because we don't publish the <code>camera_info</code> to that topic. We could remap the <code>camera_info</code> to that topic, but then the uncompressed image won't work in RViz, so it's not the desired solution.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        But there is another useful tool that we can use, the <code>relay</code> node from the <code>topic_tools</code> package:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    # Relay node to republish /camera/camera_info to /camera/image/camera_info
    relay_camera_info_node = Node(
        package='topic_tools',
        executable='relay',
        name='relay_camera_info',
        output='screen',
        arguments=['camera/camera_info', 'camera/image/camera_info'],
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Of course, don't forget to add it to the <code>launchDescription</code> too:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`launchDescriptionObject.add_action(relay_camera_info_node)`}</code>
                    </pre>

                    <div className="bg-blue-500/10 border-l-4 border-blue-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            If <code>topic_tools</code> is not installed you can install it with <code>sudo apt install ros-jazzy-topic-tools</code>
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Rebuild the workspace and let's try it!
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_sensors spawn_robot.launch.py`}</code>
                    </pre>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w5}
                            alt="Compressed RViz"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                {/* RQT Reconfigure Section */}
                <section id="rqt-reconfigure" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        RQT Reconfigure
                    </h2>

                    <p className="text-lg leading-relaxed mb-4">
                        Robotics systems rarely run with fixed parameters.<br />
                        Being able to inspect and tune live systems is essential for debugging and validation.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        We already set up the <code>jpeg</code> quality in the <code>image_bridge</code> node with the following parameter:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`'camera.image.compressed.jpeg_quality': 75`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-4">
                        But how do we know what is the name of the parameter and what other settings can we change? To see that we will use the <code>rqt_reconfigure</code> node.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        First start the simulation:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`ros2 launch erc_gazebo_sensors spawn_robot.launch.py`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Then start rqt_reconfigure:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 run rqt_reconfigure rqt_reconfigure`}</code>
                    </pre>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w8}
                            alt="RQT Reconfigure"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        We can play with the parameters here, change the compression or the algorithm as we wish and we can monitor its impact with <code>rqt</code>.
                    </p>
                </section>

                {/* LiDAR Section */}
                <section id="lidar" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        LiDAR
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g3}
                            alt="How LiDAR Works"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        "How LiDAR works (kinda)"
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        LIDAR (an acronym for "Light Detection and Ranging" or "Laser Imaging, Detection, and Ranging") is a sensing technology that uses laser light to measure distances. LIDAR sensor typically emits pulses of laser light in a scanning pattern (2D or 3D) and measures how long it takes for the light to return after hitting nearby objects. From this, the system computes distances to obstacles or surfaces in the environment. By continuously scanning the surroundings, the LIDAR provides a 2D or 3D map of distances to any objects around the robot. Lidars are simple and important sensors of almost every mobile robot application, it's widely used in Simultaneous Localization and Mapping (SLAM) algorithms which use LIDAR scans to build a map of the environment in real time while also estimating the robot's pose (position and orientation) within that map.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Unlike cameras, LiDAR does not interpret the world — it measures it.<br />
                        This makes it a cornerstone sensor for localization, mapping, and navigation.
                    </p>

                    <p className="text-lg leading-relaxed mb-6">
                        Think of this as spatial awareness, not vision.
                    </p>

                    <p className="text-lg leading-relaxed mb-3">
                        First, we start with a simple 2D lidar, let's add it to the urdf:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`  <!-- STEP 10 - Lidar -->
  <joint type="fixed" name="scan_joint">
    <origin xyz="0.0 0 0.15" rpy="0 0 0"/>
    <child link="scan_link"/>
    <parent link="base_link"/>
    <axis xyz="0 1 0" rpy="0 0 0"/>
  </joint>

  <link name='scan_link'>
    <inertial>
      <mass value="1e-5"/>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <inertia
          ixx="1e-6" ixy="0" ixz="0"
          iyy="1e-6" iyz="0"
          izz="1e-6"
      />
    </inertial>
    <collision name='collision'>
      <origin xyz="0 0 0" rpy="0 0 0"/> 
      <geometry>
        <box size=".1 .1 .1"/>
      </geometry>
    </collision>

    <visual name='scan_link_visual'>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <mesh filename = "package://erc_gazebo_sensors/meshes/lidar.dae"/>
      </geometry>
    </visual>
  </link>`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Then add the plugin to the <code>erc_bot.gazebo</code> file:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`  <gazebo reference="scan_link">
    <sensor name="gpu_lidar" type="gpu_lidar">
      <update_rate>10</update_rate>
      <topic>scan</topic>
      <gz_frame_id>scan_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>720</samples>
            <!--(max_angle-min_angle)/samples * resolution -->
            <resolution>1</resolution>
            <min_angle>-3.14156</min_angle>
            <max_angle>3.14156</max_angle>
          </horizontal>
          <!-- Dirty hack for fake lidar detections with ogre 1 rendering in VM -->
          <!-- <vertical>
              <samples>3</samples>
              <min_angle>-0.001</min_angle>
              <max_angle>0.001</max_angle>
          </vertical> -->
        </scan>
        <range>
          <min>0.05</min>
          <max>10.0</max>
          <resolution>0.01</resolution>
        </range>
        <noise>
            <type>gaussian</type>
            <mean>0.0</mean>
            <stddev>0.01</stddev>
        </noise>
        <frame_id>scan_link</frame_id>
      </lidar>
      <always_on>1</always_on>
      <visualize>true</visualize>
    </sensor>
  </gazebo>`}</code>
                    </pre>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 mb-4 rounded">
                        <p className="text-sm leading-relaxed">
                            If you are using OGRE 1 rendering in VM and lidar reading is not properly rendered (it renders only within a small circle around the sensor) you can try to enable 3 vertical samples with very small vertical angles.
                        </p>
                    </div>

                    <p className="text-lg leading-relaxed mb-3">
                        Before we can test our lidar we have to update the <code>parameter_bridge</code> to forward the lidar scan topic:
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-4">
                        <code>{`    # Node to bridge /cmd_vel and /odom
    gz_bridge_node = Node(
        package="ros_gz_bridge",
        executable="parameter_bridge",
        arguments=[
            "/clock@rosgraph_msgs/msg/Clock[gz.msgs.Clock",
            "/cmd_vel@geometry_msgs/msg/Twist@gz.msgs.Twist",
            "/odom@nav_msgs/msg/Odometry@gz.msgs.Odometry",
            "/joint_states@sensor_msgs/msg/JointState@gz.msgs.Model",
            "/tf@tf2_msgs/msg/TFMessage@gz.msgs.Pose_V",
            #"/camera/image@sensor_msgs/msg/Image@gz.msgs.Image",
            "/camera/camera_info@sensor_msgs/msg/CameraInfo@gz.msgs.CameraInfo",
            "/scan@sensor_msgs/msg/LaserScan@gz.msgs.LaserScan",
        ],
        output="screen",
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )`}</code>
                    </pre>

                    <p className="text-lg leading-relaxed mb-3">
                        Let's try it in the simulation!
                    </p>

                    <pre className="glass rounded-lg p-4 text-sm overflow-x-auto mb-6">
                        <code>{`ros2 launch erc_gazebo_sensors spawn_robot.launch.py`}</code>
                    </pre>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w7}
                            alt="LiDAR in Gazebo"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        We can also verify the rendering of lidars in Gazebo with the <strong>Visualize Lidar</strong> tool:
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w9}
                            alt="Visualize LiDAR"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        If we increase decay time of the visualization of lidar scans and we drive around the robot we can do a very simple "mapping" of the environment. Although in the next lesson we will see that mapping algorithms are more complicated, usually this is a good quick and dirty test on real robots if odometry, lidar scan and the other components are working well together.
                    </p>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={w6}
                            alt="LiDAR Decay Visualization"
                            className="rounded-xl w-full max-w-4xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-4">
                        At this point, the robot can move, see, and measure its surroundings.<br />
                        More importantly, you now understand how sensor data flows<br />
                        from simulation to ROS — exactly as it would on real hardware.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        StarkOS now has perception.<br />
                        The robot is no longer blind.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Manual control ends here.<br />
                        Next, the robot begins to reason.
                    </p>
                </section>

                {/* Assignment Section */}
                <section id="assignment" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Assignment
                    </h2>

                    <div className="mb-6 flex justify-center">
                        <img
                            src={g4}
                            alt="Assignment Coming Soon"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>

                    <p className="text-lg leading-relaxed mb-6 text-center italic">
                        "Tony Stark's eating now. He will give you the assignment later."
                    </p>

                    <p className="text-lg leading-relaxed mb-4 text-center text-xl font-semibold">
                        Your robot can now see and sense the world around it.
                    </p>

                    <p className="text-lg leading-relaxed mb-4 text-center text-xl font-semibold">
                        An assignment that puts this perception to the test is coming soon.
                    </p>

                    <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-6 mt-6 rounded">
                        <h3 className="text-2xl font-semibold mb-3 text-yellow-300">Stay Tuned</h3>
                        <p className="text-lg leading-relaxed">
                            The next challenge will test your understanding of sensor integration and data visualization. Make sure your robot's sensors are functioning correctly and you're comfortable with the ROS 2 bridge configuration.
                        </p>
                    </div>
                </section>

            </div>

    
        </div>
    );
}