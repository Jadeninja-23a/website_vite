

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Copy, Check, ArrowLeft } from 'lucide-react';

import g1 from '../assets/week3_p2_g1.gif';
import g2 from '../assets/week3_p2_g2.gif';
import g3 from '../assets/week3_p2_g3.gif';
import g4 from '../assets/week3_p2_g4.gif';

import w1 from '../assets/week3_p2_w1.png';
import w2 from '../assets/week3_p2_w2.png';
import w3 from '../assets/week3_p2_w3.png';
import w4 from '../assets/week3_p2_w4.png';
import w5 from '../assets/week3_p2_w5.png';
import w6 from '../assets/week3_p2_w6.png';
import w7 from '../assets/week3_p2_w7.png';
import w8 from '../assets/week3_p2_w8.png';
import w9 from '../assets/week3_p2_w9.png';
import w10 from '../assets/week3_p2_w10.png';
import w11 from '../assets/week3_p2_w11.png';
import w12 from '../assets/week3_p2_w12.png';
import w13 from '../assets/week3_p2_w13.png';
import w14 from '../assets/week3_p2_w14.png';
import w15 from '../assets/week3_p2_w15.png';
import w16 from '../assets/week3_p2_w16.png';
import w17 from '../assets/week3_p2_w17.png';
import w18 from '../assets/week3_p2_w18.png';
import w19 from '../assets/week3_p2_w19.png';
import w20 from '../assets/week3_p2_w20.png';
import w21 from '../assets/week3_p2_w21.png';
import w22 from '../assets/week3_p2_w22.png';
import w23 from '../assets/week3_p2_w23.png';
import w24 from '../assets/week3_p2_w24.png';
function CodeBlock({ code, language = 'bash', maxHeight = '300px' }) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-4">
            <div className="flex items-center justify-between bg-gray-800/90 backdrop-blur px-4 py-2 rounded-t-lg border border-gray-700">
                <span className="text-xs font-mono text-gray-400 uppercase">{language}</span>
                <button onClick={copyToClipboard} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-700/50 hover:bg-gray-700 transition-all">
                    {copied ? <><Check size={16} className="text-green-400" /><span className="text-green-400">Copied!</span></> : <><Copy size={16} className="text-gray-300" /><span className="text-gray-300">Copy</span></>}
                </button>
            </div>
            <div className="overflow-auto bg-gray-900/95 backdrop-blur rounded-b-lg border border-t-0 border-gray-700" style={{ maxHeight }}>
                <pre className="p-4 m-0"><code className="text-sm font-mono text-gray-100 leading-relaxed">{code}</code></pre>
            </div>
        </div>
    );
}

export default function Week3Part2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pb-32">
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');*{margin:0;padding:0;box-sizing:border-box;font-family:'Figtree',sans-serif}h1,h2,h3,h4{font-family:'Unbounded',sans-serif}.glass-strong{background:rgba(255,255,255,0.06);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.12)}.hamburger{cursor:pointer;z-index:1000}.hamburger div{width:25px;height:3px;background:white;margin:5px 0;transition:0.3s}.menu-open .line1{transform:rotate(-45deg)translate(-5px,6px)}.menu-open .line2{opacity:0}.menu-open .line3{transform:rotate(45deg)translate(-5px,-6px)}`}</style>

            {/* Hamburger */}
            <div className="fixed top-28 right-10 z-50">
                <div className={`hamburger ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <div className="line1 bg-white"></div><div className="line2 bg-white"></div><div className="line3 bg-white"></div>
                </div>
            </div>

            {/* Menu */}
            <div className={`fixed top-0 right-0 h-full w-80 glass-strong z-40 transition-transform duration-300 overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 pt-20">
                    <h3 className="text-2xl font-bold mb-6 text-blue-400">Week 3 Part 2</h3>
                    <ul className="space-y-4">
                        <li><button onClick={() => navigate('/winteros')} className="text-lg hover:text-blue-400 w-full text-left">❄️ Home</button></li>
                        <li><button onClick={() => navigate('/week3p1')} className="text-lg hover:text-blue-400 w-full text-left">← Part 1</button></li>
                        <li className="pt-2 border-t border-white/10"></li>
                        <li><button onClick={() => scrollTo('intro')} className="text-lg hover:text-blue-400 w-full text-left">🎯 Intro</button></li>
                        <li><button onClick={() => scrollTo('autonomous-nav')} className="text-lg hover:text-blue-400 w-full text-left">📦 Download</button></li>
                        <li><button onClick={() => scrollTo('mapping')} className="text-lg hover:text-blue-400 w-full text-left">🗺️ Mapping</button></li>
                        <li><button onClick={() => scrollTo('localization')} className="text-lg hover:text-blue-400 w-full text-left">📍 Localization</button></li>
                        <li><button onClick={() => scrollTo('navigation')} className="text-lg hover:text-blue-400 w-full text-left">🧭 Navigation</button></li>
                        <li><button onClick={() => scrollTo('exploration')} className="text-lg hover:text-blue-400 w-full text-left">🔍 Exploration</button></li>
                        <li><button onClick={() => scrollTo('assignment')} className="text-lg hover:text-blue-400 w-full text-left">🎯 Assignment</button></li>
                        <li><button onClick={() => scrollTo('Week3-done')} className="text-lg hover:text-blue-400 w-full text-left">✅ Week 3 Done</button></li>
                    </ul>
                </div>
            </div>

            {menuOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={() => setMenuOpen(false)}></div>}

            {/* Back to Part 1 button */}
            <div className="fixed bottom-8 left-8 z-50">
                <button onClick={() => navigate('/week3p1')} className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg flex items-center gap-2 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Back: Part 1</span>
                </button>
            </div>

            <header className="text-center px-6 py-20 pt-32 glass-strong mx-6 rounded-3xl">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-400">Week 3 Part 2<span className="text-white"> — Navigation & Autonomy</span></h1>
                    <p className="text-2xl md:text-3xl text-yellow-300 font-semibold mb-2">Letting StarkOS Decide</p>
                    <p className="text-lg text-gray-300">From seeing to deciding — autonomous navigation begins</p>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Due to character limits, I'll provide the structure. You should continue adding sections following the markdown content */}

                <section id="intro" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">Part 2 — Autonomy: Letting StarkOS Decide</h2>
                    <p className="text-lg mb-4">In Part 1, we taught StarkOS how to see.</p>
                    <p className="text-lg mb-4">Now, we stop telling it what to do.</p>
                    <p className="text-lg mb-4">In <strong>Week 3 · Part 2</strong>, we move from perception to <em>autonomous navigation</em> — where the robot uses sensor data to make decisions on its own.</p>
                    <p className="text-lg mb-4">We'll explore how robots:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                        <li>understand their position,</li>
                        <li>reason about their surroundings,</li>
                        <li>and move purposefully without manual control.</li>
                    </ul>
                    <p className="text-lg mb-4">This is where the system starts behaving less like a remote-controlled machine and more like an <em>independent agent</em>.</p>
                    <p className="text-lg">No flashy tricks — just the fundamentals that power real-world robots.</p>
                    <div className="mb-6 flex justify-center">
                        <img
                            src={g1}
                            alt="Iron Man's Navigating"
                            className="rounded-xl w-full max-w-5xl h-auto border-2 border-blue-400/20"
                        />
                    </div>
                </section>

                <section className="glass-strong rounded-2xl p-6 mb-8 border-l-4 border-yellow-400">
                    <div className="flex items-start gap-4">
                        <div className="text-yellow-400 text-2xl">ℹ️</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Note</h3>
                            <p className="text-lg">
                                In this section, we'll be primarily focusing on the <strong>implementation</strong> of navigation algorithms on our ROS2 robot. 
                                If you'd like a deeper understanding of how these algorithms work under the hood, check out this helpful playlist:
                            </p>
                            <a 
                                href="https://youtu.be/Fw8JQ5Q-ZwU" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-blue-400 hover:text-blue-300 underline transition-colors"
                            >
                                Navigation Algorithms Explained →
                            </a>
                        </div>
                    </div>
                </section>

                <section id="autonomous-nav" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">Autonomous Navigation</h2>
                    <p className="text-lg mb-4">In this lesson we'll learn how to map the robot's environment, how to do localization on an existing map and we'll learn to use ROS2's navigation stack.</p>

                    <h2 className="text-4xl font-bold mb-4 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Download ROS Package
                    </h2>

                    <p className="text-lg mb-4">
                        To download the package, go to <code className="bg-gray-800 px-2 py-1 rounded">Downloads</code> and clone the repo with the following command:
                    </p>

                    <CodeBlock code="git clone https://github.com/Sagarv812/winteros_week3" />

                    <p className="text-lg mt-4 mb-4">
                        This will make a folder named <code className="bg-gray-800 px-2 py-1 rounded">winteros_week3</code> in your Downloads. In that folder there will be three more folders named:
                    </p>

                    <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-lg">
                        <li><code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_navigation</code></li>
                        <li><code className="bg-gray-800 px-2 py-1 rounded">erc_ros2_navigation_py</code></li>
                        <li><code className="bg-gray-800 px-2 py-1 rounded">erc_trajectory_server</code></li>
                    </ul>

                    <p className="text-lg mb-4">
                        Copy all these folders and paste them in <code className="bg-gray-800 px-2 py-1 rounded">~/erc_ws/src</code>, i.e., inside the <code className="bg-gray-800 px-2 py-1 rounded">src</code> folder of your ROS2 workspace.
                    </p>

                    <p className="text-lg mb-4">
                        Now <strong>build</strong> and <strong>source</strong> your workspace.
                    </p>

                    <p className="text-lg mb-4">
                        You can now test it by running:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />
                </section>

                {/* Continue with remaining sections... Due to length, showing structure */}
                <section id="mapping" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Mapping
                    </h2>

                    <p className="text-lg mb-4">
                        Let's learn how to create the map of the robot's surrounding. In practice we are using SLAM algorithms, SLAM stands for Simultaneous Localization and Mapping. It is a fundamental technique in robotics (and other fields) that allows a robot to:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 ml-4 mb-6 text-lg">
                        <li>Build a map of an unknown environment (mapping).</li>
                        <li>Track its own pose (position and orientation) within that map at the same time (localization).</li>
                    </ol>

                    <p className="text-lg mb-4">Usually SLAM algorithms consists of 4 core functionalities:</p>

                    <div className="space-y-4 mb-6">
                        <div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">1. Sensor inputs</h3>
                            <p className="text-lg">SLAM typically uses sensor data (e.g., LIDAR scans, camera images, or depth sensor measurements) to detect features or landmarks in the environment.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">2. State estimation</h3>
                            <p className="text-lg">An internal state (the robot's pose, including x, y, yaw) is estimated using algorithms like Extended Kalman Filters, Particle Filters, or Graph Optimization.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">3. Map building</h3>
                            <p className="text-lg">As the robot moves, it accumulates new sensor data. The SLAM algorithm integrates that data into a global map (2D grid map, 3D point cloud, or other representations).</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-blue-300 mb-2">4. Loop closure</h3>
                            <p className="text-lg">When the robot revisits a previously mapped area, the SLAM algorithm detects that it's the same place (loop closure). This knowledge is used to reduce accumulated drift and refine both the map and pose estimates.</p>
                        </div>
                    </div>

                    <div className="my-6">
                        <img
                            src={w1}
                            alt="Tony Stark mapping the city"
                            className="w-full rounded-lg"
                        />
                        <p className="text-center text-gray-400 mt-2 italic">Tony Stark mapping the city</p>
                    </div>
                </section>

                <section id="mapping1" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Installing SLAM Toolbox</h3>

                    <p className="text-lg mb-4">
                        For doing all this, we will use the <code className="bg-gray-900 px-2 py-1 rounded">slam_toolbox</code> package that has to be installed first:
                    </p>

                    <CodeBlock code={`sudo apt update
sudo apt install ros-jazzy-slam-toolbox`} />
                </section>

                <section id="mapping2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Creating the Mapping Launch File</h3>

                    <p className="text-lg mb-4">
                        Now we will make a new launch file for mapping.
                    </p>

                    <p className="text-lg mb-4">
                        Let's also move the RViz related functions into the new launch file from <code className="bg-gray-900 px-2 py-1 rounded">spawn_robot.launch.py</code>. Go to that file and comment out:
                    </p>

                    <CodeBlock code={`# launchDescriptionObject.add_action(rviz_launch_arg)
# launchDescriptionObject.add_action(rviz_config_arg)
launchDescriptionObject.add_action(world_arg)
launchDescriptionObject.add_action(model_arg)
launchDescriptionObject.add_action(x_arg)
launchDescriptionObject.add_action(y_arg)
launchDescriptionObject.add_action(yaw_arg)
launchDescriptionObject.add_action(sim_time_arg)
launchDescriptionObject.add_action(world_launch)
# launchDescriptionObject.add_action(rviz_node)
launchDescriptionObject.add_action(spawn_urdf_node)
launchDescriptionObject.add_action(gz_bridge_node)
launchDescriptionObject.add_action(gz_image_bridge_node)
launchDescriptionObject.add_action(relay_camera_info_node)
launchDescriptionObject.add_action(robot_state_publisher_node)
launchDescriptionObject.add_action(trajectory_node)
launchDescriptionObject.add_action(ekf_node)`} />

                    <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-4">
                        <p className="text-lg">
                            <strong>Note:</strong> You can add a comment or make a pre-existing a line a comment in python by adding a '#' before it.
                        </p>
                    </div>

                    <p className="text-lg mb-4">
                        Also change the <code className="bg-gray-900 px-2 py-1 rounded">reference_frame_id</code> of <code className="bg-gray-900 px-2 py-1 rounded">erc_trajectory_server</code> from <code className="bg-gray-900 px-2 py-1 rounded">odom</code> to <code className="bg-gray-900 px-2 py-1 rounded">map</code> because this will be our new reference frame when we have a map!
                    </p>

                    <CodeBlock code={`trajectory_node = Node(
    package='erc_trajectory_server',
    executable='erc_trajectory_server',
    name='erc_trajectory_server',
    parameters=[{'reference_frame_id': 'map'}] # Change in this line
)`} />
                </section>

                <section id="mapping3" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Creating mapping.launch.py</h3>

                    <p className="text-lg mb-4">
                        Let's create <code className="bg-gray-900 px-2 py-1 rounded">mapping.launch.py</code>. Create the file inside the <code className="bg-gray-900 px-2 py-1 rounded">launch</code> folder of <code className="bg-gray-900 px-2 py-1 rounded">erc_ros2_navigation</code>:
                    </p>

                    <CodeBlock code={`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_ros2_navigation = get_package_share_directory('erc_ros2_navigation')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_ros2_navigation)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz'
    )

    rviz_config_arg = DeclareLaunchArgument(
        'rviz_config', default_value='mapping.rviz',
        description='RViz config file'
    )

    sim_time_arg = DeclareLaunchArgument(
        'use_sim_time', default_value='True',
        description='Flag to enable use_sim_time'
    )

    # Path to the Slam Toolbox launch file
    slam_toolbox_launch_path = os.path.join(
        get_package_share_directory('slam_toolbox'),
        'launch',
        'online_async_launch.py'
    )

    slam_toolbox_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'slam_toolbox_mapping.yaml'
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', PathJoinSubstitution([pkg_erc_ros2_navigation, 'rviz', LaunchConfiguration('rviz_config')])],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

    slam_toolbox_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(slam_toolbox_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'slam_params_file': slam_toolbox_params_path,
        }.items()
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(rviz_config_arg)
    launchDescriptionObject.add_action(sim_time_arg)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(slam_toolbox_launch)

    return launchDescriptionObject`} />
                </section>

                <section id="mapping4" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Running the Mapping</h3>

                    <p className="text-lg mb-4">
                        Build the workspace and open two terminals. Make sure to <strong>source</strong> your workspace in both.
                    </p>

                    <p className="text-lg mb-2">In one terminal:</p>
                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-2">And in another:</p>
                    <CodeBlock code="ros2 launch erc_ros2_navigation mapping.launch.py" />

                    <p className="text-lg mb-4">
                        You will be able to see an additional frame <code className="bg-gray-900 px-2 py-1 rounded">map</code> over the <code className="bg-gray-900 px-2 py-1 rounded">odom</code> odometry frame. This can also be visualized in RViz.
                    </p>

                    <div className="my-6">
                        <img
                            src={w2}
                            alt="RViz showing map frame"
                            className="w-full rounded-lg"
                        />
                    </div>
                </section>

                <section id="mapping5" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Saving Maps</h3>

                    <p className="text-lg mb-4">With SLAM Toolbox we can also save the maps, we have two options:</p>

                    <div className="space-y-4 mb-6">
                        <div>
                            <h4 className="text-xl font-semibold text-blue-200 mb-2">1) Save Map</h4>
                            <p className="text-lg">The map is saved as a <code className="bg-gray-900 px-2 py-1 rounded">.pgm</code> file and a <code className="bg-gray-900 px-2 py-1 rounded">.yaml</code> file. This is a black and white image file that can be used with other ROS nodes for localization as we will see later. Since it's only an image file it's impossible to continue the mapping with such a file because SLAM Toolbox handles the map in the background as a graph that cannot be restored from an image.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-blue-200 mb-2">2) Serialize Map</h4>
                            <p className="text-lg">With this feature we can serialize and later deserialize SLAM Toolbox's graph, so it can be loaded and the mapping can be continued. Although other ROS nodes won't be able to read or use it for localization.</p>
                        </div>
                    </div>

                    <div className="my-6">
                        <img
                            src={w3}
                            alt="Saving map options"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">After saving a serialized map next time we can load (deserialize it):</p>

                    <div className="my-6">
                        <img
                            src={w4}
                            alt="Loading serialized map"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">And we can also load the map that is in the starter package of this lesson:</p>

                    <div className="my-6">
                        <img
                            src={w5}
                            alt="Loading starter package map"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 my-4">
                        <p className="text-lg mb-2">
                            The paths provided are relative, assuming that your packages are located in the src directory and you are executing mapping.launch.py from the workspace root. If the launch fails, verify your current working directory and ensure the relative path to the maps is correct from that location.
                        </p>
                        <p className="text-lg">
                            <strong>Best Practice:</strong> When saving files, specify the full directory path rather than just the filename to ensure data is stored in the intended location.
                        </p>
                    </div>
                </section>

                <section id="localization" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Localization
                    </h2>

                    <p className="text-lg mb-4">
                        While mapping was the process of creating a representation (a map) of an environment. Localization is the process by which a robot determines its own position and orientation within a known environment (map). In other words:
                    </p>

                    <ul className="list-disc list-inside space-y-2 ml-4 mb-6 text-lg">
                        <li>The environment or map is typically already available or pre-built.</li>
                        <li>The robot's task is to figure out "Where am I?" or "Which direction am I facing?" using sensor data, often by matching its current perceptions to the known map.</li>
                    </ul>

                    <p className="text-lg italic text-blue-300 mb-4">
                        The suit already knows the city — now it just needs to know where it's standing.
                    </p>
                </section>

                <section id="localization1" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Localization with AMCL</h3>

                    <p className="text-lg mb-4">
                        AMCL (Adaptive Monte Carlo Localization) is a particle filter–based 2D localization algorithm. The robot's possible poses (position + orientation in 2D) are represented by a set of particles. It adaptively samples the robot's possible poses according to sensor readings and motion updates, converging on an accurate estimate of where the robot is within a known map.
                    </p>

                    <p className="text-lg italic text-blue-300 mb-6">
                        Jarvis isn't guessing — he's narrowing down possibilities until only one makes sense.
                    </p>

                    <p className="text-lg mb-4">
                        AMCL is part of the ROS2 navigation stack, let's install it first:
                    </p>

                    <CodeBlock code={`sudo apt install ros-jazzy-nav2-bringup 
sudo apt install ros-jazzy-nav2-amcl`} />
                </section>

                <section id="localization2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Creating localization.launch.py</h3>

                    <p className="text-lg mb-4">
                        And then let's create a new launch file <code className="bg-gray-900 px-2 py-1 rounded">localization.launch.py</code>:
                    </p>

                    <CodeBlock code={`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_ros2_navigation = get_package_share_directory('erc_ros2_navigation')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_ros2_navigation)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz'
    )

    rviz_config_arg = DeclareLaunchArgument(
        'rviz_config', default_value='localization.rviz',
        description='RViz config file'
    )

    sim_time_arg = DeclareLaunchArgument(
        'use_sim_time', default_value='True',
        description='Flag to enable use_sim_time'
    )

    # Path to the Slam Toolbox launch file
    nav2_localization_launch_path = os.path.join(
        get_package_share_directory('nav2_bringup'),
        'launch',
        'localization_launch.py'
    )

    localization_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'amcl_localization.yaml'
    )

    map_file_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'maps',
        'my_map.yaml'
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', PathJoinSubstitution([pkg_erc_ros2_navigation, 'rviz', LaunchConfiguration('rviz_config')])],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

 
    localization_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(nav2_localization_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'params_file': localization_params_path,
                'map': map_file_path,
        }.items()
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(rviz_config_arg)
    launchDescriptionObject.add_action(sim_time_arg)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(localization_launch)

    return launchDescriptionObject`} />

                    <p className="text-lg mb-4 mt-6">
                        Following the same procedure as earlier, this file should be made in the <code className="bg-gray-900 px-2 py-1 rounded">launch</code> folder. Now <strong>build</strong> the workspace and <strong>source</strong> it in both the terminals.
                    </p>
                </section>

                <section id="localization3" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Running Localization</h3>

                    <p className="text-lg mb-2">In one terminal:</p>
                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-2">And in another:</p>
                    <CodeBlock code="ros2 launch erc_ros2_navigation localization.launch.py" />

                    <p className="text-lg mb-4 mt-6">
                        To start using AMCL, we have to provide an initial pose to the <code className="bg-gray-900 px-2 py-1 rounded">/initialpose</code> topic. It's basically like telling the robot that hey i'm starting here at these coordinates. We can use RViz's built in tool for that.
                    </p>

                    <div className="my-6">
                        <img
                            src={w6}
                            alt="Setting initial pose in RViz"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        This will initialize AMCL's particles around the initial pose which can be displayed in RViz as a particle cloud where each particle represents a pose (position + orientation in 2D).
                    </p>

                    <div className="my-6">
                        <img
                            src={w7}
                            alt="AMCL particle cloud visualization"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        The main purpose of the localization algorithm is establishing the transformation between the fixed map and the robot's odometry frame based on real time sensor data. We can visualize this in RViz as we saw it during mapping:
                    </p>

                    <div className="my-6">
                        <img
                            src={w8}
                            alt="Map to odom transformation"
                            className="w-full rounded-lg"
                        />
                    </div>
                </section>

                <section id="localization4" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Localization with SLAM Toolbox</h3>

                    <p className="text-lg mb-4">
                        It's possible to use SLAM toolbox in localization mode, it requires a small adjustment on the parameters which is already part of this lesson, <code className="bg-gray-900 px-2 py-1 rounded">slam_toolbox_localization.yaml</code>. This requires the path to the serialized map file.
                    </p>

                    <div className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 my-4">
                        <p className="text-lg">
                            Make sure the <code className="bg-gray-900 px-2 py-1 rounded">map_file_name</code> parameter is changed to the path on your machine to the serialized map file!
                        </p>
                    </div>

                    <p className="text-lg mb-4">
                        Let's create the launch file for localization, <code className="bg-gray-900 px-2 py-1 rounded">localization_slam_toolbox.launch.py</code>, it's very similar to the SLAM toolbox mapping launch file:
                    </p>

                    <CodeBlock code={`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription, GroupAction
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_ros2_navigation = get_package_share_directory('erc_ros2_navigation')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_ros2_navigation)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz'
    )

    rviz_config_arg = DeclareLaunchArgument(
        'rviz_config', default_value='mapping.rviz',
        description='RViz config file'
    )

    sim_time_arg = DeclareLaunchArgument(
        'use_sim_time', default_value='True',
        description='Flag to enable use_sim_time'
    )

    # Path to the Slam Toolbox launch file
    slam_toolbox_launch_path = os.path.join(
        get_package_share_directory('slam_toolbox'),
        'launch',
        'localization_launch.py'
    )

    slam_toolbox_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'slam_toolbox_localization.yaml'
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', PathJoinSubstitution([pkg_erc_ros2_navigation, 'rviz', LaunchConfiguration('rviz_config')])],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

    slam_toolbox_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(slam_toolbox_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'slam_params_file': slam_toolbox_params_path,
        }.items()
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(rviz_config_arg)
    launchDescriptionObject.add_action(sim_time_arg)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(slam_toolbox_launch)

    return launchDescriptionObject`} />

                    <p className="text-lg mb-4 mt-6">
                        Rebuild the workspace and try it, we'll see that the map keeps updating unlike with AMCL, this is the normal behavior of the localization with SLAM toolbox. According to <a href="https://joss.theoj.org/papers/10.21105/joss.02783" className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer">this paper</a>, the localization mode does continue to update the pose-graph with new constraints and nodes, but the updated map expires over some time. SLAM toolbox describes it as "elastic", which means it holds the updated graph for some amount of time, but does not add it to the permanent graph.
                    </p>

                    <div className="my-6">
                        <img
                            src={w9}
                            alt="SLAM Toolbox localization mode"
                            className="w-full rounded-lg"
                        />
                    </div>
                </section>

                <section id="navigation" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Navigation
                    </h2>

                    <p className="text-lg mb-4">
                        Navigation in robotics is the overall process that enables a robot to move from one location to another in a safe, efficient, and autonomous manner. It typically involves:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 ml-4 mb-6 text-lg">
                        <li>Knowing where the robot is (localization or SLAM),</li>
                        <li>Knowing where it needs to go (a goal pose or waypoint),</li>
                        <li>Planning a path to reach that goal (path planning), and</li>
                        <li>Moving along that path while avoiding dynamic and static obstacles (motion control and obstacle avoidance).</li>
                    </ol>

                    <p className="text-lg mb-4">
                        ROS's nav2 navigation stack implements the above points 2 to 4, for the first point we already met several possible solutions.
                    </p>
                </section>

                <section id="navigation1" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Creating navigation.launch.py</h3>

                    <p className="text-lg mb-4">
                        Let's create a launch file that uses both AMCL and the nav2 navigation stack, <code className="bg-gray-900 px-2 py-1 rounded">navigation.launch.py</code>:
                    </p>

                    <CodeBlock code={`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_ros2_navigation = get_package_share_directory('erc_ros2_navigation')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_ros2_navigation)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz'
    )

    rviz_config_arg = DeclareLaunchArgument(
        'rviz_config', default_value='navigation.rviz',
        description='RViz config file'
    )

    sim_time_arg = DeclareLaunchArgument(
        'use_sim_time', default_value='True',
        description='Flag to enable use_sim_time'
    )

    # Path to the Slam Toolbox launch file
    nav2_localization_launch_path = os.path.join(
        get_package_share_directory('nav2_bringup'),
        'launch',
        'localization_launch.py'
    )

    nav2_navigation_launch_path = os.path.join(
        get_package_share_directory('nav2_bringup'),
        'launch',
        'navigation_launch.py'
    )

    localization_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'amcl_localization.yaml'
    )

    navigation_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'navigation.yaml'
    )

    map_file_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'maps',
        'my_map.yaml'
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', PathJoinSubstitution([pkg_erc_ros2_navigation, 'rviz', LaunchConfiguration('rviz_config')])],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

    localization_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(nav2_localization_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'params_file': localization_params_path,
                'map': map_file_path,
        }.items()
    )

    navigation_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(nav2_navigation_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'params_file': navigation_params_path,
        }.items()
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(rviz_config_arg)
    launchDescriptionObject.add_action(sim_time_arg)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(localization_launch)
    launchDescriptionObject.add_action(navigation_launch)

    return launchDescriptionObject`} />
                </section>

                <section id="navigation2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Running Navigation</h3>

                    <p className="text-lg mb-4">
                        We'll need 2 terminals as before, one for the simulation:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-4">
                        And in another terminal we launch the new <code className="bg-gray-900 px-2 py-1 rounded">navigation.launch.py</code>:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation navigation.launch.py" />

                    <p className="text-lg mb-4">
                        We are using AMCL, so first we'll have to publish an initial pose, then we have to tell the pose goal to the navigation stack. For that we can also use RViz's other built-in feature:
                    </p>

                    <div className="my-6">
                        <img
                            src={w10}
                            alt="Setting navigation goal in RViz"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        As soon as the pose goal is received the navigation stack plans a global path to the goal and the controller ensures locally that the robot follows the global path while it avoids dynamic obstacles. The controller calculates a cost map around the robot that determines the ideal trajectory of the robot. If there aren't any obstacles around the robot this cost map weighs the global plan.
                    </p>

                    <p className="text-lg italic text-blue-300 mb-4">
                        Target locked. Calculating path.
                    </p>

                    <div className="my-6">
                        <img
                            src={w11}
                            alt="Global path planning"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        If obstacles are detected around the robot those can be visualized as a cost map too:
                    </p>

                    <div className="my-6">
                        <img
                            src={w12}
                            alt="Obstacle cost map"
                            className="w-full rounded-lg"
                        />
                    </div>
                </section>

                <section id="navigation3" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Waypoint Navigation</h3>

                    <p className="text-lg mb-4">
                        We can use the navigation stack for waypoint navigation, this can be done through the GUI of RViz or writing a custom node. Let's start with the first one.
                    </p>

                    <p className="text-lg mb-4">
                        We'll need 2 terminals as before, one for the simulation:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-4">
                        And in another terminal we launch the <code className="bg-gray-900 px-2 py-1 rounded">navigation.launch.py</code>:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation navigation.launch.py" />

                    <p className="text-lg mb-4">
                        First, we have to make sure that the <code className="bg-gray-900 px-2 py-1 rounded">Nav2 Goal</code> toolbar is added to RViz! If not, we can add it under the <code className="bg-gray-900 px-2 py-1 rounded">+</code> sign.
                    </p>

                    <div className="my-6">
                        <img
                            src={w13}
                            alt="Adding Nav2 Goal toolbar"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        Then we have to switch nav2 to waypoint following mode:
                    </p>

                    <div className="my-6">
                        <img
                            src={w14}
                            alt="Switching to waypoint mode"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        Using the <code className="bg-gray-900 px-2 py-1 rounded">Nav2 Goal</code> tool we can define the waypoints:
                    </p>

                    <div className="my-6">
                        <img
                            src={w15}
                            alt="Defining waypoints"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        And when we are done with the waypoints we can start the navigation through them:
                    </p>

                    <div className="my-6">
                        <img
                            src={w16}
                            alt="Starting waypoint navigation"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="my-6">
                        <img
                            src={w17}
                            alt="Robot following waypoints"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        It's possible to run multiple loops through the waypoints and it's also possible to save and load the waypoints. One example is already in the <code className="bg-gray-900 px-2 py-1 rounded">config</code> folder: <code className="bg-gray-900 px-2 py-1 rounded">waypoints.yaml</code>. You can see a video about it here (optional):
                    </p>

                    <div className="my-6">
                        <a href="https://youtu.be/ED6AXnAR2sc" target="_blank" rel="noopener noreferrer">
                            <img
                                src={w18}
                                alt="Waypoint navigation video"
                                className="w-full rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </section>

                <section id="navigation4" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Programmatic Waypoint Following</h3>

                    <p className="text-lg mb-4">
                        It's also possible to follow waypoints through the nav2 navigation stack's API with a custom node. Let's create <code className="bg-gray-900 px-2 py-1 rounded">follow_waypoints.py</code> in the <code className="bg-gray-900 px-2 py-1 rounded">erc_ros2_navigation_py</code> package:
                    </p>

                    <CodeBlock code={`import rclpy
from rclpy.node import Node
from geometry_msgs.msg import PoseStamped
from nav2_msgs.action import FollowWaypoints
from rclpy.action import ActionClient
from tf_transformations import quaternion_from_euler

class WaypointFollower(Node):
    def __init__(self):
        super().__init__('waypoint_follower')
        self._action_client = ActionClient(self, FollowWaypoints, 'follow_waypoints')

    def define_waypoints(self):
        waypoints = []

        # Waypoint 1
        wp1 = PoseStamped()
        wp1.header.frame_id = 'map'
        wp1.pose.position.x = 6.0
        wp1.pose.position.y = 1.5
        q = quaternion_from_euler(0, 0, 0)
        wp1.pose.orientation.x = q[0]
        wp1.pose.orientation.y = q[1]
        wp1.pose.orientation.z = q[2]
        wp1.pose.orientation.w = q[3]
        waypoints.append(wp1)

        return waypoints

    def send_goal(self):
        waypoints = self.define_waypoints()
        goal_msg = FollowWaypoints.Goal()
        goal_msg.poses = waypoints

        self._action_client.wait_for_server()
        self._send_goal_future = self._action_client.send_goal_async(
            goal_msg, feedback_callback=self.feedback_callback
        )
        self._send_goal_future.add_done_callback(self.goal_response_callback)

    def goal_response_callback(self, future):
        goal_handle = future.result()
        if not goal_handle.accepted:
            self.get_logger().info('Goal rejected.')
            return

        self.get_logger().info('Goal accepted.')
        self._get_result_future = goal_handle.get_result_async()
        self._get_result_future.add_done_callback(self.get_result_callback)

    def feedback_callback(self, feedback_msg):
        feedback = feedback_msg.feedback
        current_waypoint = feedback.current_waypoint
        self.get_logger().info(f'Navigating to waypoint {current_waypoint}')

    def get_result_callback(self, future):
        result = future.result().result
        self.get_logger().info('Waypoint following completed.')
        rclpy.shutdown()

def main(args=None):
    rclpy.init(args=args)
    waypoint_follower = WaypointFollower()
    waypoint_follower.send_goal()
    rclpy.spin(waypoint_follower)

if __name__ == '__main__':
    main()`} />

                    <p className="text-lg mb-4">
                        The definition of the waypoints are identical to the config file we have, we define the <code className="bg-gray-900 px-2 py-1 rounded">x</code>, <code className="bg-gray-900 px-2 py-1 rounded">y</code> and <code className="bg-gray-900 px-2 py-1 rounded">z</code> position and the orientation in a quaternion.
                    </p>

                    <p className="text-lg mb-4">
                        Let's add the entry point to the <code className="bg-gray-900 px-2 py-1 rounded">setup.py</code>:
                    </p>

                    <CodeBlock code={`    entry_points={
        'console_scripts': [
            'send_initialpose = erc_ros2_navigation_py.send_initialpose:main',
            'slam_toolbox_load_map = erc_ros2_navigation_py.slam_toolbox_load_map:main',
            'follow_waypoints = erc_ros2_navigation_py.follow_waypoints:main',
        ],
    },`} />

                    <p className="text-lg mb-4">
                        Build the workspace, and we'll need 3 terminals this time, one for the simulation:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-4">
                        Another terminal to launch the <code className="bg-gray-900 px-2 py-1 rounded">navigation.launch.py</code>:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation navigation.launch.py" />

                    <p className="text-lg mb-4">
                        And in the third one:
                    </p>

                    <CodeBlock code="ros2 run erc_ros2_navigation_py follow_waypoints" />

                    <p className="text-lg mb-4">
                        We can add more waypoints easily:
                    </p>

                    <CodeBlock code={`...
        # Waypoint 2
        wp2 = PoseStamped()
        wp2.header.frame_id = 'map'
        wp2.pose.position.x = -2.0
        wp2.pose.position.y = -8.0
        q = quaternion_from_euler(0, 0, 1.57)
        wp2.pose.orientation.x = q[0]
        wp2.pose.orientation.y = q[1]
        wp2.pose.orientation.z = q[2]
        wp2.pose.orientation.w = q[3]
        waypoints.append(wp2)

        # Waypoint 3
        wp3 = PoseStamped()
        wp3.header.frame_id = 'map'
        wp3.pose.position.x = 0.0
        wp3.pose.position.y = 0.0
        q = quaternion_from_euler(0, 0, 0)
        wp3.pose.orientation.x = q[0]
        wp3.pose.orientation.y = q[1]
        wp3.pose.orientation.z = q[2]
        wp3.pose.orientation.w = q[3]
        waypoints.append(wp3)

        # Add more waypoints as needed
...`} />

                    <div className="my-6">
                        <a href="https://youtu.be/3OhAyDFqBIs" target="_blank" rel="noopener noreferrer">
                            <img
                                src={w19}
                                alt="Programmatic waypoint following video"
                                className="w-full rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </section>

                <section id="navigation5" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Navigation with SLAM</h3>

                    <p className="text-lg mb-4">
                        As we saw to navigate a mobile robot we need to know 2 things:
                    </p>

                    <ol className="list-decimal list-inside space-y-2 ml-4 mb-6 text-lg">
                        <li>Knowing where the robot is (localization or SLAM),</li>
                        <li>Knowing where it needs to go (a goal pose or waypoint)</li>
                    </ol>

                    <p className="text-lg mb-4">
                        In the previous examples we used localization on a known map, but it's also possible to navigate together with an online SLAM. It means we don't know the complete environment around the robot but we can already navigate in the known surrounding.
                    </p>

                    <p className="text-lg mb-4">
                        Let's create a <code className="bg-gray-900 px-2 py-1 rounded">navigation_with_slam.launch.py</code> launch file where we start both the SLAM toolbox and the navigation stack:
                    </p>

                    <CodeBlock code={`import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, IncludeLaunchDescription
from launch.conditions import IfCondition
from launch.launch_description_sources import PythonLaunchDescriptionSource
from launch.substitutions import LaunchConfiguration, PathJoinSubstitution, Command
from launch_ros.actions import Node
from ament_index_python.packages import get_package_share_directory

def generate_launch_description():

    pkg_erc_ros2_navigation = get_package_share_directory('erc_ros2_navigation')

    gazebo_models_path, ignore_last_dir = os.path.split(pkg_erc_ros2_navigation)
    os.environ["GZ_SIM_RESOURCE_PATH"] += os.pathsep + gazebo_models_path

    rviz_launch_arg = DeclareLaunchArgument(
        'rviz', default_value='true',
        description='Open RViz'
    )

    rviz_config_arg = DeclareLaunchArgument(
        'rviz_config', default_value='navigation.rviz',
        description='RViz config file'
    )

    sim_time_arg = DeclareLaunchArgument(
        'use_sim_time', default_value='True',
        description='Flag to enable use_sim_time'
    )

    nav2_navigation_launch_path = os.path.join(
        get_package_share_directory('nav2_bringup'),
        'launch',
        'navigation_launch.py'
    )

    navigation_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'navigation.yaml'
    )

    slam_toolbox_params_path = os.path.join(
        get_package_share_directory('erc_ros2_navigation'),
        'config',
        'slam_toolbox_mapping.yaml'
    )

    # Launch rviz
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        arguments=['-d', PathJoinSubstitution([pkg_erc_ros2_navigation, 'rviz', LaunchConfiguration('rviz_config')])],
        condition=IfCondition(LaunchConfiguration('rviz')),
        parameters=[
            {'use_sim_time': LaunchConfiguration('use_sim_time')},
        ]
    )

    # Path to the Slam Toolbox launch file
    slam_toolbox_launch_path = os.path.join(
        get_package_share_directory('slam_toolbox'),
        'launch',
        'online_async_launch.py'
    )

    slam_toolbox_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(slam_toolbox_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'slam_params_file': slam_toolbox_params_path,
        }.items()
    )

    navigation_launch = IncludeLaunchDescription(
        PythonLaunchDescriptionSource(nav2_navigation_launch_path),
        launch_arguments={
                'use_sim_time': LaunchConfiguration('use_sim_time'),
                'params_file': navigation_params_path,
        }.items()
    )

    launchDescriptionObject = LaunchDescription()

    launchDescriptionObject.add_action(rviz_launch_arg)
    launchDescriptionObject.add_action(rviz_config_arg)
    launchDescriptionObject.add_action(sim_time_arg)
    launchDescriptionObject.add_action(rviz_node)
    launchDescriptionObject.add_action(slam_toolbox_launch)
    launchDescriptionObject.add_action(navigation_launch)

    return launchDescriptionObject`} />

                    <p className="text-lg mb-4 mt-6">
                        Build the workspace and let's try it!
                    </p>

                    <p className="text-lg mb-4">
                        We'll need 2 terminals as before, one for the simulation:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-4">
                        And in another terminal we launch the new <code className="bg-gray-900 px-2 py-1 rounded">navigation_with_slam.launch.py</code>:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation navigation_with_slam.launch.py" />

                    <div className="my-6">
                        <img
                            src={w20}
                            alt="Navigation with SLAM"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="my-6">
                        <a href="https://youtu.be/gZrYEP2ctfY" target="_blank" rel="noopener noreferrer">
                            <img
                                src={w21}
                                alt="Navigation with SLAM video"
                                className="w-full rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </section>

                <section id="navigation6" className="glass-strong rounded-2xl p-8 mb-12">
                    <div className="my-6">
                        <img
                            src={g2}
                            alt="Tony Stark Proud"
                            className="w-full rounded-lg"
                        />

                        <p className="text-lg leading-relaxed mb-6 text-center italic">Tony Stark is surprised you made it this far.</p>
                    </div>

                    <p className="text-xl mb-4 text-blue-300">
                        Vision, mapping, localization, navigation — you've crossed almost every major subsystem that turns code into autonomy.
                    </p>

                    <p className="text-2xl font-bold text-blue-400">
                        There's only one piece left now.
                    </p>
                </section>

                <section id="exploration" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Exploration
                    </h2>

                    <p className="text-lg mb-4">
                        Exploration is a process by which a robot operating in an unknown or partially known environment actively searches the space to gather new information. This is a real life use case to use SLAM together with the navigation stack.
                    </p>

                    <p className="text-lg mb-4">
                        There is a simple exploration package that we will use in this lesson, you can download it from the GitHub:
                    </p>

                    <CodeBlock code="git clone https://github.com/Jadeninja-23a/exploring.git" />

                    <p className="text-lg mb-4">
                        Copy the package from here and keep it in the <code className="bg-gray-900 px-2 py-1 rounded">src</code> folder of your workspace
                    </p>

                    <p className="text-lg mb-4">
                        Build the workspace and source the <code className="bg-gray-900 px-2 py-1 rounded">setup.bash</code> to make sure ROS is aware about the new package!
                    </p>
                </section>

                <section id="exploration1" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Running Exploration</h3>

                    <p className="text-lg mb-4">
                        We'll need 3 terminals, one for the simulation:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />

                    <p className="text-lg mb-4">
                        In another terminal we launch the <code className="bg-gray-900 px-2 py-1 rounded">navigation_with_slam.launch.py</code>:
                    </p>

                    <CodeBlock code="ros2 launch erc_ros2_navigation navigation_with_slam.launch.py" />

                    <p className="text-lg mb-4">
                        And in the third one we launch the exploration:
                    </p>

                    <CodeBlock code="ros2 launch explore_lite explore.launch.py" />

                    <p className="text-lg mb-4">
                        The exploration node will identify the boundaries of the known surrounding and will navigate the robot until it finds all the physical boundaries of the environment.
                    </p>

                    <div className="my-6">
                        <img
                            src={w22}
                            alt="Robot exploring environment"
                            className="w-full rounded-lg"
                        />
                    </div>
                </section>

                <section id="exploration2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Understanding the System</h3>

                    <p className="text-lg mb-4">
                        We can take a look on the <code className="bg-gray-900 px-2 py-1 rounded">rqt_graph</code> of the simulation, but we'll see it's quite big! We can find the exploration node and we can see that it subscribes to the <code className="bg-gray-900 px-2 py-1 rounded">/map</code> and to the action status and feedback of the navigation stack.
                    </p>

                    <div className="my-6">
                        <img
                            src={w23}
                            alt="RQT graph showing exploration nodes"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <p className="text-lg mb-4">
                        And finally here is a video about exploration:
                    </p>

                    <div className="my-6">
                        <a href="https://youtu.be/1jlpu-zfNac" target="_blank" rel="noopener noreferrer">
                            <img
                                src={w24}
                                alt="Exploration demonstration video"
                                className="w-full rounded-lg hover:opacity-80 transition-opacity"
                            />
                        </a>
                    </div>
                </section>

                <section id="assignment" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-4xl font-bold mb-6 text-blue-400 border-l-4 border-blue-400 pl-6">
                        Assignment ??
                    </h2>

                    <p className="text-lg mb-4">
                        You've been working incredibly hard, so there is no formal assignment this week!
                    </p>

                    <div className="my-6 flex justify-center">
                        <img
                            src={g3}
                            alt="No Assignment - Tony Stark relieved"
                            className="rounded-lg max-w-md"
                        /><br></br>
                    </div>
                         <p className="text-center text-gray-400 mt-2 italic">No Assignment</p>
                    <p className="text-lg mb-4">
                        Instead, we're doing a cool integration activity: combining Exploration with Chase the Ball. Your goal is to have the bot autonomously search the entire house until it finds the red ball.
                    </p>
                </section>

                <section id="assignment1" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">🔄 Continuous Exploration</h3>

                    <p className="text-lg mb-4">
                        Before we integrate the chase logic, we need to fix a limitation in our exploration code. Currently, once the bot finishes mapping the house, it returns to its starting position and stops.
                    </p>

                    <p className="text-lg mb-4">
                        In a real-world scenario, the environment is dynamic—people move, and objects might appear or disappear. To ensure we find the ball, we are modifying <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> to run in an infinite loop. This keeps the bot re-exploring the house indefinitely until the target is located.
                    </p>

                    <p className="text-lg mb-4">
                        <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> is in the src folder in the explore package
                    </p>

                    <p className="text-lg mb-4">
                        First we add this to <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> at the top with the other <code className="bg-gray-900 px-2 py-1 rounded">#include</code>s:
                    </p>

                    <CodeBlock code={`#include "nav2_msgs/srv/clear_entire_costmap.hpp"
#include "slam_toolbox/srv/reset.hpp"`} />

                    <p className="text-lg mb-4">
                        To enable map resetting for re-exploration, the above service definitions are required.
                    </p>

                    <p className="text-lg mb-4">
                        Disabled parameters and functions related to returning to the initial position to prioritize continuous exploration.
                    </p>

                    <CodeBlock code={` double timeout;
  double min_frontier_size;
  this->declare_parameter<float>("planner_frequency", 1.0);
  this->declare_parameter<float>("progress_timeout", 30.0);
  this->declare_parameter<bool>("visualize", false);
  this->declare_parameter<float>("potential_scale", 1e-3);
  this->declare_parameter<float>("orientation_scale", 0.0);
  this->declare_parameter<float>("gain_scale", 1.0);
  this->declare_parameter<float>("min_frontier_size", 0.5);
  // this->declare_parameter<bool>("return_to_init", false);

  
  this->get_parameter("planner_frequency", planner_frequency_);
  this->get_parameter("progress_timeout", timeout);
  this->get_parameter("visualize", visualize_);
  this->get_parameter("potential_scale", potential_scale_);
  this->get_parameter("orientation_scale", orientation_scale_);
  this->get_parameter("gain_scale", gain_scale_);
  this->get_parameter("min_frontier_size", min_frontier_size);
  // this->get_parameter("return_to_init", return_to_init_);
  this->get_parameter("robot_base_frame", robot_base_frame_);`} />

                    <CodeBlock code={`// void Explore::returnToInitialPose()
// {
//   RCLCPP_INFO(logger_, "Returning to initial pose.");
//   auto goal = nav2_msgs::action::NavigateToPose::Goal();
//   goal.pose.pose.position = initial_pose_.position;
//   goal.pose.pose.orientation = initial_pose_.orientation;
//   goal.pose.header.frame_id = costmap_client_.getGlobalFrameID();
//   goal.pose.header.stamp = this->now();

//   auto send_goal_options =
//       rclcpp_action::Client<nav2_msgs::action::NavigateToPose>::SendGoalOptions();
//   move_base_client_->async_send_goal(goal, send_goal_options);
// }`} />

                    <div className="bg-blue-900/30 border-l-4 border-blue-400 p-4 my-4">
                        <p className="text-lg">
                            Don't add this code we are just commenting/removing it from the <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> file.
                        </p>
                    </div>
                </section>

                <section id="assignment2" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Reset Exploration State</h3>

                    <p className="text-lg mb-4">
                        Now let's add the function that resets the exploration state and reset the map. Add this function after <code className="bg-gray-900 px-2 py-1 rounded">void Explore::reachedGoal</code> function.
                    </p>

                    <CodeBlock code={`void Explore::resetExplorationState() {
  // costmap_client_.clear();
  prev_goal_ = geometry_msgs::msg::Point();
  progress_timeout_ = this->get_parameter("progress_timeout").as_double();
  last_markers_count_ = 0;
  RCLCPP_INFO(logger_, "Exploration state RESET — starting over!");
  auto global_costmap_client = this->create_client<nav2_msgs::srv::ClearEntireCostmap>("/global_costmap/clear_entirely_global_costmap");
  if (global_costmap_client->wait_for_service(std::chrono::seconds(2))) {
    auto request = std::make_shared<nav2_msgs::srv::ClearEntireCostmap::Request>();
    global_costmap_client->async_send_request(request);
    RCLCPP_INFO(this->get_logger(), "Requested global costmap clear.");
  } else {
    RCLCPP_WARN(this->get_logger(), "Global costmap clear service not available.");
  }

  // --- Clear local costmap too (optional) ---
  auto local_costmap_client = this->create_client<nav2_msgs::srv::ClearEntireCostmap>("/local_costmap/clear_entirely_local_costmap");
  if (local_costmap_client->wait_for_service(std::chrono::seconds(2))) {
    auto request = std::make_shared<nav2_msgs::srv::ClearEntireCostmap::Request>();
    local_costmap_client->async_send_request(request);
    RCLCPP_INFO(this->get_logger(), "Requested local costmap clear.");
  } else {
    RCLCPP_WARN(this->get_logger(), "Local costmap clear service not available.");
  }

  // --- Reset SLAM map ---
  auto slam_reset_client = this->create_client<slam_toolbox::srv::Reset>("/slam_toolbox/reset");
  if (slam_reset_client->wait_for_service(std::chrono::seconds(2))) {
    auto request = std::make_shared<slam_toolbox::srv::Reset::Request>();
    slam_reset_client->async_send_request(request);
    RCLCPP_INFO(this->get_logger(), "Requested SLAM map reset.");
  } else {
    RCLCPP_WARN(this->get_logger(), "SLAM reset service not available.");
  }
  
  RCLCPP_INFO(logger_, "Waiting for sensors map update...");
  // Instead of plain resume:
  spinGoal();

}`} />

                    <p className="text-lg mb-4 mt-6">
                        When we delete the map, we also lose the current sensor data. This can make the robot confused because it suddenly sees an empty world. To fix this, the spinGoal function makes the robot perform a 180-degree turn in place.
                    </p>

                    <p className="text-lg mb-4">
                        This rotation allows the sensors (like LIDAR) to scan the surroundings and update the map immediately so exploration can continue smoothly.
                    </p>

                    <p className="text-lg mb-4">
                        Add this after the previous function.
                    </p>

                    <CodeBlock code={`void Explore::spinGoal()
{
  RCLCPP_INFO(logger_, "Spinning in place to refresh sensors.");

  auto goal = nav2_msgs::action::NavigateToPose::Goal();
  goal.pose.header.frame_id = costmap_client_.getGlobalFrameID();
  goal.pose.header.stamp = this->now();

  // Keep same position
  auto pose = costmap_client_.getRobotPose();
  goal.pose.pose.position = pose.position;

  // Just change orientation: 180 deg spin for example
  tf2::Quaternion q_orig, q_rot, q_new;
  tf2::fromMsg(pose.orientation, q_orig);
  q_rot.setRPY(0, 0, M_PI);  // Rotate 180 deg
  q_new = q_rot * q_orig;
  q_new.normalize();
  goal.pose.pose.orientation = tf2::toMsg(q_new);

  auto send_goal_options = rclcpp_action::Client<nav2_msgs::action::NavigateToPose>::SendGoalOptions();
  send_goal_options.result_callback = [this](const NavigationGoalHandle::WrappedResult& result) {
    if (result.code == rclcpp_action::ResultCode::SUCCEEDED) {
      RCLCPP_INFO(logger_, "Spin goal succeeded, resuming exploration.");
    } else {
      RCLCPP_WARN(logger_, "Spin goal failed or canceled, resuming anyway.");
    }
    // After spin, continue normal exploration
    resume();
  };

  move_base_client_->async_send_goal(goal, send_goal_options);
}`} />

                    <p className="text-lg mb-4 mt-6">
                        We added 2 new functions in <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> so let's add them in <code className="bg-gray-900 px-2 py-1 rounded">explore.h</code> (located in include folder):
                    </p>

                    <CodeBlock code={`  geometry_msgs::msg::Pose initial_pose_;
  //void returnToInitialPose(void);
  void resetExplorationState();
  void spinGoal();`} />

                    <p className="text-lg mb-4">
                        We also removed the <code className="bg-gray-900 px-2 py-1 rounded">returnToInitialPose</code> function.
                    </p>
                </section>

                <section id="assignment3" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Update Dependencies</h3>

                    <p className="text-lg mb-4">
                        Remember we added some random includes at the starting of <code className="bg-gray-900 px-2 py-1 rounded">explore.cpp</code> now we need to tell the package where to find those files are therefore make the following changes in the following files.
                    </p>

                    <p className="text-lg mb-4">
                        In <code className="bg-gray-900 px-2 py-1 rounded">CMakeLists.txt</code> add slam_toolbox and nav2_msgs:
                    </p>

                    <CodeBlock code={`# find dependencies
find_package(ament_cmake REQUIRED)
find_package(rclcpp REQUIRED)
find_package(std_msgs REQUIRED)
find_package(sensor_msgs REQUIRED)
find_package(tf2_ros REQUIRED)
find_package(tf2 REQUIRED)
find_package(tf2_geometry_msgs REQUIRED)
find_package(nav2_msgs REQUIRED)
find_package(nav_msgs REQUIRED)
find_package(map_msgs REQUIRED)
find_package(visualization_msgs REQUIRED)
find_package(nav2_costmap_2d REQUIRED)
find_package(slam_toolbox REQUIRED)

set(DEPENDENCIES
  rclcpp
  std_msgs
  sensor_msgs
  tf2
  tf2_ros
  tf2_geometry_msgs
  nav2_msgs
  nav_msgs
  map_msgs
  nav2_costmap_2d
  visualization_msgs
  slam_toolbox
)`} />

                    <p className="text-lg mb-4 mt-6">
                        In <code className="bg-gray-900 px-2 py-1 rounded">package.xml</code> make sure these dependencies are added:
                    </p>

                    <CodeBlock code={`  <depend>map_msgs</depend>
  <depend>nav2_costmap_2d</depend>
  <depend>nav2_msgs</depend>
  <depend>nav_msgs</depend>
  <depend>rclcpp</depend>
  <depend>sensor_msgs</depend>
  <depend>std_msgs</depend>
  <depend>tf2</depend>
  <depend>tf2_geometry_msgs</depend>
  <depend>tf2_ros</depend>
  <depend>visualization_msgs</depend>
  <depend>slam_toolbox</depend>`} />

                    <p className="text-lg mb-4 mt-6">
                        Even though most probably the libraries are installed there is a chance for them to be missing so just for safety run the following 2 commands:
                    </p>

                    <CodeBlock code={`sudo apt install ros-jazzy-nav2-msgs
sudo apt install ros-jazzy-slam-toolbox`} />

                    <p className="text-lg mb-4">
                        Now the map should automatically reset after it's fully explored build the workspace and run the same commands you did for exploration.
                    </p>
                </section>

                <section id="assignment4" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Controller Node</h3>

                    <p className="text-lg mb-4">
                        To make our life simple let's add a controller node which checks from <code className="bg-gray-900 px-2 py-1 rounded">chase_the_ball.py</code> whether a ball has been found or not and depending on that give msg to explore.cpp whether to continue exploring or stop exploring and run the chase the ball code.
                    </p>

                    <p className="text-lg mb-4">
                        In erc_ros2_navigation_py package in the erc_ros2_navigation_py folder make file called <code className="bg-gray-900 px-2 py-1 rounded">controller_node.py</code> and copy paste the following code.
                    </p>

                    <CodeBlock code={`import rclpy
from rclpy.node import Node
from std_msgs.msg import Bool
import time

class ExploreController(Node):
    def __init__(self):
        super().__init__('explore_controller')
        self.sub = self.create_subscription(Bool, '/object_detected', self.detected_callback, 10)
        self.pub = self.create_publisher(Bool, '/explore/resume', 10)
        
        self.current_state = None  # Track current state to avoid republishing
        self.last_publish_time = 0
        self.publish_cooldown = 1.0  # 1 second cooldown between state changes

    def detected_callback(self, msg):
        current_time = time.time()
        
        # Avoid rapid state changes
        if current_time - self.last_publish_time < self.publish_cooldown:
            return
        
        # Only publish if state actually changed
        if msg.data == self.current_state:
            return
        
        control_msg = Bool()
        
        if msg.data:
            # Object detected - STOP exploration
            self.get_logger().info("🔴 Object detected! Stopping exploration...")
            control_msg.data = False  # False = stop exploring
            self.pub.publish(control_msg)
            self.current_state = True
            
        else:
            # Object lost - RESUME exploration
            self.get_logger().info("🟢 Object lost! Resuming exploration...")
            control_msg.data = True  # True = resume exploring
            self.pub.publish(control_msg)
            self.current_state = False
        
        self.last_publish_time = current_time


def main(args=None):
    rclpy.init(args=args)
    node = ExploreController()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()`} />

                    <p className="text-lg mb-4 mt-6">
                        Add an entry point in <code className="bg-gray-900 px-2 py-1 rounded">setup.py</code>:
                    </p>

                    <CodeBlock code={`'console_scripts': [
            'send_initialpose = erc_ros2_navigation_py.send_initialpose:main',
            'slam_toolbox_load_map = erc_ros2_navigation_py.slam_toolbox_load_map:main',
            'follow_waypoints = erc_ros2_navigation_py.follow_waypoints:main',
            'controller_node = erc_ros2_navigation_py.controller_node:main', 
        ],`} />

                    <p className="text-lg mb-4 mt-6">
                        Include the following dependencies in <code className="bg-gray-900 px-2 py-1 rounded">package.xml</code>
                    </p>

                    <CodeBlock code={`<?xml version="1.0"?>
<?xml-model href="http://download.ros.org/schema/package_format3.xsd" schematypens="http://www.w3.org/2001/XMLSchema"?>
<package format="3">
  <name>erc_ros2_navigation_py</name>
  <version>1.0.0</version>
  <description>Python nodes for slam, localization and navigation with Gazebo Harmonic and ROS Jazzy for BME MOGI ROS2 course</description>
  <maintainer email="sagarv812@gmail.com">ERC IITB</maintainer>
  <license>Apache License 2.0</license>

  <!-- changed -->

  <exec_depend>rclpy</exec_depend>
  <exec_depend>std_msgs</exec_depend>
  <exec_depend>launch</exec_depend>
  <exec_depend>launch_ros</exec_depend>

  <test_depend>ament_copyright</test_depend>
  <test_depend>ament_flake8</test_depend>
  <test_depend>ament_pep257</test_depend>
  <test_depend>python3-pytest</test_depend>

  <export>
    <build_type>ament_python</build_type>
  </export>
</package>`} />
                </section>

                <section id="assignment5" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Update Chase the Ball</h3>

                    <p className="text-lg mb-4">
                        That's well and good but no point of this node if it's not getting information in the <code className="bg-gray-900 px-2 py-1 rounded">/object_detected</code> topic from <code className="bg-gray-900 px-2 py-1 rounded">chase_the_ball.py</code>. Let's change <code className="bg-gray-900 px-2 py-1 rounded">chase_the_ball.py</code> (It was in <code className="bg-gray-900 px-2 py-1 rounded">erc_gazebo_sensors_py</code> package)
                    </p>

                    <p className="text-lg mb-4">
                        Add the following variables in <code className="bg-gray-900 px-2 py-1 rounded">__init__</code> function:
                    </p>

                    <CodeBlock code={`self.object_detected_pub = self.create_publisher(Bool, "/object_detected", 10)
self.ball_detected = False
self.stopped_near_ball = False        
self.area_threshold = 0.25`} />

                    <p className="text-lg mb-4 mt-6">
                        And replace the <code className="bg-gray-900 px-2 py-1 rounded">process_image</code> function with the following function:
                    </p>

                    <CodeBlock code={`def process_image(self, img):
        """Image processing task."""
        msg = Twist()
        msg.linear.x = 0.0
        msg.linear.y = 0.0
        msg.linear.z = 0.0
        msg.angular.x = 0.0
        msg.angular.y = 0.0
        msg.angular.z = 0.0

        rows, cols = img.shape[:2]
        total_area = rows * cols

        
        R, G, B = self.convert2rgb(img)

        redMask = self.threshold_binary(R, (220, 255))
        stackedMask = np.dstack((redMask, redMask, redMask))
        contourMask = stackedMask.copy()
        crosshairMask = stackedMask.copy()

        # return value of findContours depends on OpenCV version
        (contours, hierarchy) = cv2.findContours(
            redMask.copy(), 1, cv2.CHAIN_APPROX_NONE
        )
        
        detection_msg = Bool()

        # Find the biggest contour (if detected)
        if len(contours) > 0:

            c = max(contours, key=cv2.contourArea)
            contour_area = cv2.contourArea(c)
            area_percentage = contour_area / total_area
            
            M = cv2.moments(c)

            # Make sure that "m00" won't cause ZeroDivisionError: float division by zero
            if M["m00"] != 0:
                cx = int(M["m10"] / M["m00"])
                cy = int(M["m01"] / M["m00"])
            else:
                cx, cy = 0, 0

            # Show contour and centroid
            cv2.drawContours(contourMask, contours, -1, (0, 255, 0), 10)
            cv2.circle(contourMask, (cx, cy), 5, (0, 255, 0), -1)

            # Show crosshair and difference from middle point
            cv2.line(crosshairMask, (cx, 0), (cx, rows), (0, 0, 255), 10)
            cv2.line(crosshairMask, (0, cy), (cols, cy), (0, 0, 255), 10)
            cv2.line(
                crosshairMask,
                (int(cols / 2), 0),
                (int(cols / 2), rows),
                (255, 0, 0),
                10,
            )
            
            # Check if ball is close enough (based on area)
            if area_percentage >= self.area_threshold:
                # Ball is close enough - STOP
                msg.linear.x = 0.0
                msg.angular.z = 0.0
                
                if not self.stopped_near_ball:
                    self.get_logger().info(f"Ball detected and close enough! Area: {area_percentage:.2%} - STOPPING")
                    self.stopped_near_ball = True
                    self.ball_detected = True
                    
                    # Publish object detected = True (state changed)
                    detection_msg.data = True
                    self.object_detected_pub.publish(detection_msg)
                
            else:
                # Ball detected but not close enough - Chase it
                if self.stopped_near_ball:
                    # State change: was stopped, now chasing again
                    self.get_logger().info(f"Ball moved away, chasing again... Area: {area_percentage:.2%}")
                    detection_msg.data = True
                    self.object_detected_pub.publish(detection_msg)
                
                self.stopped_near_ball = False
                
                if not self.ball_detected:
                    # State change: ball just appeared
                    self.get_logger().info(f"Ball detected! Starting chase... Area: {area_percentage:.2%}")
                    detection_msg.data = True
                    self.object_detected_pub.publish(detection_msg)
                    self.ball_detected = True
                
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
            # No ball detected
            
            if self.ball_detected or self.stopped_near_ball:
                self.get_logger().info("Ball lost! Resuming exploration...")
                self.ball_detected = False
                self.stopped_near_ball = False
                
                # Publish object detected = False (ball lost - state changed)
                detection_msg.data = False
                self.object_detected_pub.publish(detection_msg)

        # Publish cmd_vel
        self.publisher.publish(msg)

        # Return processed frames
        return redMask, contourMask, crosshairMask`} />
                </section>

                <section id="assignment6" className="glass-strong rounded-2xl p-8 mb-12">
                    <h3 className="text-2xl font-bold mb-4 text-blue-300">Running the Complete System</h3>

                    <p className="text-lg mb-4">
                        Now finally we can run and test it!!
                    </p>

                    <p className="text-lg mb-4">
                        First of all don't forget to build and source the workspace.
                    </p>

                    <p className="text-lg mb-4">
                        We need to open 5 terminals (and source in all terminals don't forget) and write the following commands in each terminal.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <p className="text-lg font-semibold text-blue-200 mb-2">Terminal 1:</p>
                            <CodeBlock code="ros2 launch erc_ros2_navigation spawn_robot.launch.py" />
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-blue-200 mb-2">Terminal 2:</p>
                            <CodeBlock code="ros2 launch erc_ros2_navigation navigation_with_slam.launch.py" />
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-blue-200 mb-2">Terminal 3:</p>
                            <CodeBlock code="ros2 launch explore_lite explore.launch.py" />
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-blue-200 mb-2">Terminal 4:</p>
                            <CodeBlock code="ros2 run erc_ros2_navigation_py controller_node" />
                        </div>

                        <div>
                            <p className="text-lg font-semibold text-blue-200 mb-2">Terminal 5:</p>
                            <CodeBlock code="ros2 launch erc_gazebo_sensors_py chase_the_ball" />
                        </div>
                    </div>

                    <p className="text-lg mb-4 mt-6">
                        And voila!! It should be working use the resource spawner to spawn the ball and see how our bot finds the ball. You can also remove the ball to see how the bot continues to explore if the ball is lost. Experiment around and enjoy;)
                    </p>
                </section>

                <section id="Week3-done" className="glass-strong rounded-2xl p-8 mb-12">
                    <h2 className="text-5xl font-bold mb-6 text-blue-400">
                        Week 3 Complete! 🎉
                    </h2>

                    <p className="text-2xl mb-6 text-gray-300">
                        You've mastered autonomous navigation.
                    </p>

                    <p className="text-xl mb-8 text-gray-400">
                        From perception to mapping, localization to navigation, and even exploration — you've built a truly autonomous system.
                    </p>

                    <div className="my-6 flex justify-center">
                        <img
                            src={g4}
                            alt="Iron Man cool"
                            className="rounded-lg max-w-5xl w-full"
                        />
                    </div>

                    <div className="mt-8 space-y-4">
                        <p className="text-3xl font-bold text-blue-300">
                            The suit doesn't just see anymore.
                        </p>
                        <p className="text-3xl font-bold text-blue-300">
                            It thinks. It navigates. It explores.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700">
                        <p className="text-xl text-gray-400 italic">
                            Vision, mapping, localization, navigation, exploration...
                        </p>
                        <p className="text-2xl font-bold text-blue-400 mt-4">
                            You've crossed every major subsystem that turns code into autonomy.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}