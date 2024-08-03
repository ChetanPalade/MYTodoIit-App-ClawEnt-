import React from 'react'
import "./About.css";

const About = () => {
  return (
    <div className='about-container d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='d-flex'>
          <h1 className='about-head'>About Us</h1>
        </div>
          <p className='about-desc'>Instantly declutter your mind, 
          boost productivity and build habits with Todoist. 
          With a simple tap, add your tasks and set reminders,
          enjoy multiple views like calendar, list and board, filter tasks by work and/or personal life, 
          collaborate on projects, and achieve peace of mind. </p>
          <p>
        <ul>
          <li>Natural language recognition: Type almost anything into the task field and TodoLiT will fill your to-do list <br/></li>
          <li>Task sorting: Automatically sorts tasks into Today, Upcoming, and custom filter views</li>
          <li>Sections and sub-tasks: Break down big tasks into manageable ones </li>
          <li>Infinitely flexible views: Show you just the tasks that are relevant right now </li>
          <li>Collaboration: Keep everyone in sync with shared projects, assigned tasks, and comments </li>
          <li>Progress tracking: Track your progress</li>
          <li>Unlimited reminders: Set unlimited reminders</li>
          <li>Color coding: Organize with color coding  </li>
        </ul>
        </p>
      </div>
    </div>
  );
}

export default About;