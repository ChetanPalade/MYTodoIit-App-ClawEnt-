import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className='container d-flex justify-content-center align-items-center flex-column'>
        <h1 className='home-heading'>Organize your <br/> work and life, finally...</h1>
        <p className='home-des'>Become focused, organized, and calm with <br/>todoLiT app. The World's best task manager app.</p>
        <button class="home-btn p-2">Make TodoLit</button>
      </div>
    </div>
  );
};

export default Home;