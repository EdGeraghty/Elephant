import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import WelcomeScreen from './components/WelcomeScreen';
import ChatInterface from './components/ChatInterface';
import GuardianPinModal from './components/GuardianPinModal';
import SettingsPanel from './components/SettingsPanel';
import AppearancePanel from './components/AppearancePanel';
import ActivityReport from './components/ActivityReport';
import ContactsManager from './components/ContactsManager';
import NotificationSettings from './components/NotificationSettings';
import TimeLimits from './components/TimeLimits';
import SecuritySettings from './components/SecuritySettings';
import ChangePin from './components/ChangePin';

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showPinModal, setShowPinModal] = useState(false);
  const [isGuardianMode, setIsGuardianMode] = useState(false);
  const [showAppearance, setShowAppearance] = useState(false);
  const [showActivityReport, setShowActivityReport] = useState(false);
  const [showContactsManager, setShowContactsManager] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTimeLimits, setShowTimeLimits] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showChangePin, setShowChangePin] = useState(false);
  const [pinError, setPinError] = useState(false);
  const [guardianPin, setGuardianPin] = useState('1234'); // In production, this should be stored securely server-side

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

  const handleNotificationsClick = () => {
    setShowNotifications(true);
  };

  const handleTimeLimitsClick = () => {
    setShowTimeLimits(true);
  };

  const handleSecurityClick = () => {
    setShowSecurity(true);
  };

  const handleChangePinClick = () => {
    setShowChangePin(true);
  };

  const handlePinChanged = (newPin: string) => {
    setGuardianPin(newPin);
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

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleCloseTimeLimits = () => {
    setShowTimeLimits(false);
  };

  const handleCloseSecurity = () => {
    setShowSecurity(false);
  };

  const handleCloseChangePin = () => {
    setShowChangePin(false);
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
      ) : showNotifications ? (
        <NotificationSettings onClose={handleCloseNotifications} />
      ) : showTimeLimits ? (
        <TimeLimits onClose={handleCloseTimeLimits} />
      ) : showSecurity ? (
        <SecuritySettings onClose={handleCloseSecurity} />
      ) : showChangePin ? (
        <ChangePin 
          onClose={handleCloseChangePin}
          currentPin={guardianPin}
          onPinChanged={handlePinChanged}
        />
      ) : isGuardianMode ? (
        <SettingsPanel 
          onExit={handleExitGuardianMode}
          onActivityReportClick={handleActivityReportClick}
          onContactsManagerClick={handleContactsManagerClick}
          onNotificationsClick={handleNotificationsClick}
          onTimeLimitsClick={handleTimeLimitsClick}
          onSecurityClick={handleSecurityClick}
          onChangePinClick={handleChangePinClick}
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
