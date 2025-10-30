import React, { useState } from 'react';

interface ChangePinProps {
  onClose: () => void;
  currentPin: string;
  onPinChanged: (newPin: string) => void;
}

const ChangePin: React.FC<ChangePinProps> = ({ onClose, currentPin, onPinChanged }) => {
  const [currentPinInput, setCurrentPinInput] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState<'current' | 'new' | 'confirm'>('current');

  const handleCurrentPinSubmit = () => {
    if (currentPinInput === currentPin) {
      setError('');
      setStep('new');
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  const handleNewPinSubmit = () => {
    if (newPin.length !== 4) {
      setError('PIN must be exactly 4 digits');
      return;
    }
    if (!/^\d{4}$/.test(newPin)) {
      setError('PIN must contain only numbers');
      return;
    }
    if (newPin === currentPin) {
      setError('New PIN must be different from current PIN');
      return;
    }
    setError('');
    setStep('confirm');
  };

  const handleConfirmPinSubmit = () => {
    if (confirmPin === newPin) {
      onPinChanged(newPin);
      setSuccess(true);
      setError('');
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      setError('PINs do not match. Please try again.');
      setConfirmPin('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter') {
      action();
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🔑 Change Guardian PIN</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="change-pin">
        <div className="settings-intro">
          <p>
            Update the 4-digit PIN required to access guardian settings. Make sure to choose a PIN that's easy for you to remember but hard for others to guess.
          </p>
        </div>

        {success ? (
          <div className="pin-success">
            <div className="success-icon">✅</div>
            <h2>PIN Changed Successfully!</h2>
            <p>Your new PIN is now active. Returning to settings...</p>
          </div>
        ) : (
          <>
            <div className="pin-steps">
              <div className={`pin-step ${step === 'current' ? 'active' : step === 'new' || step === 'confirm' ? 'completed' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-label">Current PIN</div>
              </div>
              <div className="step-line"></div>
              <div className={`pin-step ${step === 'new' ? 'active' : step === 'confirm' ? 'completed' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-label">New PIN</div>
              </div>
              <div className="step-line"></div>
              <div className={`pin-step ${step === 'confirm' ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <div className="step-label">Confirm</div>
              </div>
            </div>

            <div className="pin-input-section">
              {step === 'current' && (
                <>
                  <h2>Enter Current PIN</h2>
                  <p>First, verify your current PIN</p>
                  <input
                    type="password"
                    maxLength={4}
                    value={currentPinInput}
                    onChange={(e) => setCurrentPinInput(e.target.value.replace(/\D/g, ''))}
                    onKeyPress={(e) => handleKeyPress(e, handleCurrentPinSubmit)}
                    className="pin-input-large"
                    placeholder="••••"
                    autoFocus
                  />
                  {error && <div className="pin-error">{error}</div>}
                  <button
                    className="button-primary"
                    onClick={handleCurrentPinSubmit}
                    disabled={currentPinInput.length !== 4}
                  >
                    Continue
                  </button>
                </>
              )}

              {step === 'new' && (
                <>
                  <h2>Enter New PIN</h2>
                  <p>Choose a 4-digit PIN</p>
                  <input
                    type="password"
                    maxLength={4}
                    value={newPin}
                    onChange={(e) => setNewPin(e.target.value.replace(/\D/g, ''))}
                    onKeyPress={(e) => handleKeyPress(e, handleNewPinSubmit)}
                    className="pin-input-large"
                    placeholder="••••"
                    autoFocus
                  />
                  {error && <div className="pin-error">{error}</div>}
                  <div className="pin-buttons">
                    <button className="button-secondary" onClick={() => { setStep('current'); setNewPin(''); setError(''); }}>
                      Back
                    </button>
                    <button
                      className="button-primary"
                      onClick={handleNewPinSubmit}
                      disabled={newPin.length !== 4}
                    >
                      Continue
                    </button>
                  </div>
                </>
              )}

              {step === 'confirm' && (
                <>
                  <h2>Confirm New PIN</h2>
                  <p>Enter your new PIN again to confirm</p>
                  <input
                    type="password"
                    maxLength={4}
                    value={confirmPin}
                    onChange={(e) => setConfirmPin(e.target.value.replace(/\D/g, ''))}
                    onKeyPress={(e) => handleKeyPress(e, handleConfirmPinSubmit)}
                    className="pin-input-large"
                    placeholder="••••"
                    autoFocus
                  />
                  {error && <div className="pin-error">{error}</div>}
                  <div className="pin-buttons">
                    <button className="button-secondary" onClick={() => { setStep('new'); setConfirmPin(''); setError(''); }}>
                      Back
                    </button>
                    <button
                      className="button-primary"
                      onClick={handleConfirmPinSubmit}
                      disabled={confirmPin.length !== 4}
                    >
                      Change PIN
                    </button>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <div className="settings-note">
          <h3>💡 PIN Tips</h3>
          <ul>
            <li>Choose a PIN that's easy for you to remember</li>
            <li>Avoid obvious combinations like 1234 or 0000</li>
            <li>Don't share your PIN with your child</li>
            <li>Change your PIN regularly for better security</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangePin;
