import React from 'react';
import './Home.css';

const Home = ({ startRecording }) => {
  return (
    <div className="home">
        <div className="circle-container">
        <div className="outer-ring"></div>
          <div className="mid-ring"></div>
            <div className="inner-ring"></div>
      <button onClick={startRecording} className="babble-button">Babble</button>
    </div>
    </div>
  );
};

export default Home;
