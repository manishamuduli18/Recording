import React, { useState } from 'react';
import './Recording.css';
import Wave from 'react-wavify';

const Recording = ({ stopRecording }) => {
  const [isRecording, setIsRecording] = useState(true);

  const handleStop = () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    
    <div className="waveform-container">
      <div className="recording-container">
        <button onClick={handleStop} className="stop-button">Stop</button>    
      </div>
      <div className='wave'>
      <Wave
          fill='orange'
          paused={false}
          options={{
            height: 100,
            amplitude: 35,
            speed: 0.20,
            points: 8
          }}
          />
          </div>
          <div className='wave2'>
          </div>
    </div>
  );
};

export default Recording;
