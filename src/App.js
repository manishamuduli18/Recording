import React, { useState } from 'react';
import Home from './Home';
import Countdown from './Countdown';
import Recording from './Recording';

function App() {
  const [step, setStep] = useState('home');

  const startRecording = () => {
    // Request microphone permission
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => setStep('countdown'))
      .catch(() => alert('Mic permissions needed'));
  };

  const handleCountdownComplete = () => {
    setStep('recording');
  };

  const stopRecording = () => {
    setStep('home');
  };

  return (
    <div className="App">
      {step === 'home' && <Home startRecording={startRecording} />}
      {step === 'countdown' && <Countdown onComplete={handleCountdownComplete} />}
      {step === 'recording' && <Recording stopRecording={stopRecording} />}
    </div>
  );
}

export default App;
