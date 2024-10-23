import React, { useState } from 'react';
import './Recording.css';
import { ReactMic } from 'react-mic';

const Recording = ({ stopRecording }) => {
  const [isRecording, setIsRecording] = useState(true);

  const handleStop = () => {
    setIsRecording(false);
    stopRecording();
  };

  return (
    <div className="recording">     
    <ReactMic
    record={isRecording}
    className="sound-wave"
    onStop={handleStop}
    strokeColor="#000"
    backgroundColor="#FF5733"/>
  
    <div className="waveform">

      </div>
      <div className="recording-container">
      <button onClick={handleStop} className="stop-button">Stop</button>
    </div>
    </div>
  );
};

export default Recording;
