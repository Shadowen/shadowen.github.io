---
title: Heartbeat
summary: "A custom Java-Arduino serial bridge"
repositories: ["https://github.com/Shadowen/Heartbeat_cpp", "https://github.com/Shadowen/Heartbeat_java"]
banner-image: "/res/heartbeat.bmp"
article-background: "/res/DSC_0779.jpg"

thumbnail: "/res/heartbeat.bmp"
tags: [Java, Arduino]
---
<p class="lead">Heartbeat is a custom serial communication program written to link a computer to an Arduino microprocessor. Heartbeat can be used as both a debugging interface and an I/O method for the robot. It offers extended capabilities to monitor the state of the Arduino from a computer.</p>
The <a href="http://rxtx.qbang.org/wiki/index.php/Main_Page">RXTX library</a> allows the computer to receive serial communication from a USB port in Java. Custom graphics and user interface can then be drawn on the screen. The Heartbeat program is built to allow a user to easily monitor the internal state of the Arduino from a computer. For this purpose, line and bar graphs are frequently used.
This library was mainly designed for use in the AER201 design competition alongside <a href="/projects/robot.html">the robot</a>. The Java portion of the program would run on a laptop, while the C++ portion would be embedded in the program running on the Arduino. The two parts of the program would communicate with each other with over a wireless radio-frequency serial connection. This would allow us to input configuration data and start the program, as well as monitor the state of the robot throughout the competition.

# Virtual oscilloscope
One simple use of Heartbeat is as a virtual oscilloscope using the analog inputs of the Arduino. Of course, since the analog inputs are not truly analog, but Analog-to-Digital Converters (ADCs), the time resolution of such a device is abysmal (on the order of seconds).
