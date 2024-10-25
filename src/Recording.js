import React, { useState } from 'react';
import './Recording.css';
import Recordresume from './Recordresume';

const Recording = ({ stopRecording }) => {
  const [isRecording, setIsRecording] = useState(true);

  const handleStop = () => {
    setIsRecording(false);
    stopRecording();
    Recordresume();
  };

  return (
    <div className="waveform-container">
      <div className="waveform"></div>
      <div className="recording-container">
        <button onClick={handleStop} className="stop-button">Stop</button>
      </div>
    </div>
  );
};

export default Recording;
