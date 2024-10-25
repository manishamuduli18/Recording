import React, { useState } from 'react';
import Home from './Home';
import Countdown from './Countdown';
import Recording from './Recording';
import Recordresume from './Recordresume';

function App() {
  const [step, setStep] = useState('home');

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => setStep('countdown'))
      .catch(() => alert('Mic permissions needed'));
  };

  const handleCountdownComplete = () => {
    setStep('recording');
  };

  const stopRecording = () => {
    setStep('recordresume');
  };

  const recordresume = () => {
    setStep('home');
  }

  return (
    <div className="App">
      {step === 'home' && <Home startRecording={startRecording} />}
      {step === 'countdown' && <Countdown onComplete={handleCountdownComplete} />}
      {step === 'recording' && <Recording stopRecording={stopRecording} />}
      {step === 'recordresume' && <Recordresume resume={Recording} />}
    </div>
  );
}

export default App;
