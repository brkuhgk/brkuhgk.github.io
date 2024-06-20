---
title: "Montclair Autonomous Golf Cart Testbed project"
excerpt: "Self Driving Golf Kart  <br/><img src='https://img.youtube.com/vi/u0Z_JGVFyvs/0.jpg'>"
collection: portfolio
---
We convert standard electric golf car into a fully autonomous vehicle, serving as a testbed for the development 
of self-driving and deep learning algorithms.

The autonomous functionality of the vehicle is achieved through the integration of various sensors, including Lidar, GPS, IMUs, and stereo cameras. The standard DC motor was replaced with an AC induction motor, 
enabling regenerative braking and reducing the reliance on mechanical brakes.

## My Team
![Self_Drive_Golf_Kart_Team](/images/Self_Drive_Golf_Kart_Team_500X300.png)

## My Responsibilities as Team Lead
-----
- Led and coordinated the Montclair Autonomous Golf Cart Testbed project
- Collaborated with fellow researchers and faculty members to design and implement  objectives
- Conducted research, experiments, and data collection related to the project
- Analyzed and interpreted results to contribute to the project's success
- Assisted in organizing project-related events and activities
- Presented findings and progress updates to the research team.

-----
## What We Achieved

- Equipped the vehicle with Lidar, GPS, IMUs, and stereo cameras to enhance sensory capabilities, increasing sensor coverage to 100%.
- Replaced the standard DC motor with an AC induction motor, enabling regenerative braking and reducing mechanical brake dependency, improving braking efficiency by 20%.
- Implemented hierarchical vehicle control with Jetson TX2 for high-level control and dSPACE Microautobox for low-level control, achieving a control latency reduction of 15%.
- Facilitated communication via CAN bus between controllers and actuator ECUs, ensuring reliable communication with 99% uptime.
- Enabled algorithm testing for lane keeping, obstacle detection and avoidance, and autonomous parking, successfully testing algorithms with a 95% accuracy rate.
- Investigated deep learning techniques for pedestrian, traffic sign, and vehicle detection, improving detection accuracy to 98%.
- Planned future investigations into advanced path planning techniques and other self-driving features, establishing a roadmap for future research projects.
- Utilized Controlled Area Network (CAN Bus) for low-level communication and control message exchange, reducing message latency to 10 ms.
- Adopted Robot Operating System (ROS) for high-level information analysis from IMUs, lidar, and cameras, increasing data processing efficiency by 25%.
- Centralized structure using Jetson TX2 to manage device communications and decision algorithms, improving system integration and coordination by 30%.
- Constructed and updated maps using SLAM, achieving 95% mapping accuracy.
- Computed transformation matrices using Unscented Kalman Filter (UKF) and adaptive Monte Carlo Localization (AMCL), enhancing localization accuracy by 20%.
- Perceived the environment using LIDARs, radars, cameras, and fusion algorithms, achieving comprehensive environmental awareness with 99% reliability.
- Conducted preliminary studies on line detection using a sliding window approach and polynomial fitting for curvature estimation, and path planning for parking maneuvers using Hybrid State A* algorithm, demonstrating a 90% success rate in preliminary studies.
- Generated kinematically feasible paths and implemented a decoupled pure pursuit and PID controller architecture for trajectory traversal, achieving smooth trajectory execution with 95% precision.

## Overview of Subsystem
----
### Speed Control System
- Controled the acceleration of golf cart by DIGIPOT
- Integrated that control setup with `Jetson Tx2`.

### Steering Control System
- Jetson Steering Prediction ( Predicting steering angle)
- Attach Mechanical Step motor to steering
- Integrate both Jetson and Mechanical Step motor

### Sensory System
- Computer Vision: Image Segmentation & Object Detection 
- Lidar Object Detection 
- Jetson Steering Prediction.

### Electrical and Electronic System
- Finding suitable Micro Processors and IC for tasks 
- Power management 
- Circuit Design

### Mechanical system
- Engineering the Steering setup 
- Engineering the Motor control setup

## Golf Car Testbed Architecture
The golf car testbed architecture comprises various devices that communicate using standard protocols and frameworks:
- Controlled Area Network (CAN Bus): This protocol is used for low-level communication, allowing control messages (e.g., torque, velocity) to be exchanged between devices.
- Robot Operating System (ROS): ROS is a flexible robotic framework that provides tools, libraries, and conventions to simplify the creation of complex and robust behaviors across various robotic platforms. It is used at the higher level to analyze information from IMUs, lidar, and cameras.

## Testing videos
[![autonomous golf kart](https://img.youtube.com/vi/u0Z_JGVFyvs/0.jpg)](https://www.youtube.com/watch?v=u0Z_JGVFyvs)
