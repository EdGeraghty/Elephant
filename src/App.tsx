import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';
import GuardianPinModal from './components/GuardianPinModal';
import SettingsPanel from './components/SettingsPanel';
import AppearancePanel from './components/AppearancePanel';
import ActivityReport from './components/ActivityReport';
import ContactsManager from './components/ContactsManager';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPinModal, setShowPinModal] = useState(false);
  const [isGuardianMode, setIsGuardianMode] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showActivityReport, setShowActivityReport] = useState(false);
  const [showContactsManager, setShowContactsManager] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [guardianPin] = useState('1234'); // In production, this should be stored securely server-side

  const handleStartChat = () => {
    setShowWelcome(false);
  };

  const handleGuardianClick = () => {
    setPinError(false);
    setShowPinModal(true);
  };

  const handleAppearanceClick = () => {
    setShowAppearance(true);
  };

  const handleActivityReportClick = () => {
    setShowActivityReport(true);
  };

  const handleContactsManagerClick = () => {
    setShowContactsManager(true);
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

  const handleCloseAppearance = () => {
    setShowAppearance(false);
  };

  const handleCloseActivityReport = () => {
    setShowActivityReport(false);
  };

  const handleCloseContactsManager = () => {
    setShowContactsManager(false);
  };

  if (showWelcome) {
    return (
      <ThemeProvider>
        <WelcomeScreen onStart={handleStartChat} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      {showAppearance ? (
        <AppearancePanel onClose={handleCloseAppearance} />
      ) : showActivityReport ? (
        <ActivityReport onClose={handleCloseActivityReport} />
      ) : showContactsManager ? (
        <ContactsManager onClose={handleCloseContactsManager} />
      ) : isGuardianMode ? (
        <SettingsPanel 
          onExit={handleExitGuardianMode}
          onActivityReportClick={handleActivityReportClick}
          onContactsManagerClick={handleContactsManagerClick}
        />
      ) : (
        <ChatInterface 
          onGuardianClick={handleGuardianClick}
          onAppearanceClick={handleAppearanceClick}
        />
      )}
      {showPinModal && (
        <GuardianPinModal
          onSubmit={handlePinSubmit}
          onCancel={handlePinCancel}
          hasError={pinError}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
