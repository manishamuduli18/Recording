import React from 'react';
import './Home.css';

const Home = ({ startRecording }) => {
  return (
    <div className="home">
        <div className="circle-container">
      <button onClick={startRecording} className="babble-button">Babble</button>
    </div>
    </div>
  );
};

export default Home;
