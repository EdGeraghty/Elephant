import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';
import GuardianPinModal from './components/GuardianPinModal';
import SettingsPanel from './components/SettingsPanel';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPinModal, setShowPinModal] = useState(false);
  const [isGuardianMode, setIsGuardianMode] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [guardianPin] = useState('1234'); // In production, this should be stored securely server-side

  const handleStartChat = () => {
    setShowWelcome(false);
  };

  const handleGuardianClick = () => {
    setPinError(false);
    setShowPinModal(true);
  };

  const handlePinSubmit = (pin: string) => {
    if (pin === guardianPin) {
      setIsGuardianMode(true);
      setShowPinModal(false);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handlePinCancel = () => {
    setShowPinModal(false);
    setPinError(false);
  };

  const handleExitGuardianMode = () => {
    setIsGuardianMode(false);
  };

  if (showWelcome) {
    return <WelcomeScreen onStart={handleStartChat} />;
  }

  return (
    <>
      {isGuardianMode ? (
        <SettingsPanel onExit={handleExitGuardianMode} />
      ) : (
        <ChatInterface onGuardianClick={handleGuardianClick} />
      )}
      {showPinModal && (
        <GuardianPinModal
          onSubmit={handlePinSubmit}
          onCancel={handlePinCancel}
          hasError={pinError}
        />
      )}
    </>
  );
};

export default App;
