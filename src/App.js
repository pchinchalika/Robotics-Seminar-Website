import React from 'react';
import './App.css';
import logo from './assets/logo1.jpeg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="Binghamton University Logo" />
                <h1>ROBOTICS SEMINAR</h1>
                <nav>
                  <ul>
                    <li><a href="#upcoming-talks">UPCOMING TALKS</a></li>
                    <li><a href="#past-talks">PAST TALKS</a></li>
                    <li><a href="#archive">ARCHIVE</a></li>
                  </ul>
                </nav>
            </header>
            <main>
            <section className="talks-section">
                    <div className="upcoming-talks" id="upcoming-talks">
                        <h2>Upcoming Talks</h2>
                        <ul>
                            <li>October 11, 2024: AI and Robotics</li>
                            <li>November 5, 2024: Deep Learning Innovations</li>
                        </ul>
                    </div>
                    <div className="past-talks" id="past-talks">
                        <h2>Past Talks</h2>
                        <div className="talk">
                            <div className="talk-details">
                                <div className="talk-time">
                                    <p> Friday, September 13, 2024, 12:00 PM, Engineering Building, T1 |</p>
                                </div>
                                <div className="talk-abstract">
                                    <h3>Zain Nasir</h3>
                                    <p>
                                        <strong>Title:</strong> 
                                        <span className="normal-text"> NetSLAM: Network-Aware Path Planning for Edge-Assisted UAV Swarms</span>
                                    </p>
                                    <p><strong>Abstract:</strong> Mapping and Localization in large environments is becoming increasingly important for autonomous UAV swarms. UAV swarms solving problems in disaster response, infrastructure inspection, and agriculture rely on fresh and accurate maps to make navigation decisions. SLAM methods are capable of providing highly accurate maps through visual information, but are computationally heavy and ill-suited for unmanned aerial vehicles. For this reason, UAV swarms often dedicate one or more drones to frequent mapping, while other drones use map information for planning and trajectory generation. UAV swarms also centralize heavy-weight workloads like AI inference and SLAM map combination at the edge to extend UAV battery lives at the expense of network availability. Both map sharing and offloading necessitate high network bandwidth, but few SLAM or planning approaches account for this. We present NetSLAM, a network-assisted SLAM and planning system that builds environmental maps and UAV trajectories that meet quality of service requirements. NetSLAM embeds network information into SLAM maps so planning can compensate for changes in network connectivity across the environment. We also present NetPlan, a path planning algorithm which utilizes NetSLAM maps to build trajectories that maintain network connectivity requirements to maximize performance. Through real-world experiments and simulation, we show that NetSLAM maps network environments with limited additional overhead compared to existing SLAM approaches, while improving offloading performance significantly when multi-agent swarms consider network availability.</p>
                                    <p><strong>Bio:</strong> I am an incoming software developer and researcher at Memorial Sloan Kettering currently completing my Masters in Computer Science (AI Track) from Binghamton University. My expertise includes autonomous navigation systems in drones, computer vision, and machine learning. My current research involves optimizing edge-based SLAM techniques and tailoring them for deployment on small drones with limited compute power.</p>
                                </div>
                            </div>
                        </div>
                        <div className="talk-notes">
                            <p>This Bing-Robotics talk is also part of the SoC Seminar Series, jointly hosted by Profs. KD Kang and William Hallahan.</p>
                        </div>
                    </div>
                    <div className="archive" id="archive">
                        <h2>Archive</h2>
                        <p>Access archives of past talks and events.</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Binghamton University State University of New York</p>
            </footer>
        </div>
    );
}

export default App;
