import React, { useState } from 'react';

interface GuardianPinModalProps {
  onSubmit: (pin: string) => void;
  onCancel: () => void;
  hasError?: boolean;
}

const GuardianPinModal: React.FC<GuardianPinModalProps> = ({ onSubmit, onCancel, hasError }) => {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    onSubmit(pin);
    setPin('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>🔒 Guardian PIN Required</h2>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666' }}>
          Please ask your parent or guardian to enter their PIN
        </p>
        {hasError && (
          <p style={{ textAlign: 'center', fontSize: '1rem', color: '#d32f2f', fontWeight: 'bold' }}>
            ❌ Incorrect PIN! Please ask your guardian for help.
          </p>
        )}
        <input
          type="password"
          className="pin-input"
          placeholder="****"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          onKeyPress={handleKeyPress}
          maxLength={4}
          autoFocus
        />
        <div className="modal-buttons">
          <button className="modal-button secondary" onClick={onCancel}>
            Cancel
          </button>
          <button className="modal-button primary" onClick={handleSubmit}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuardianPinModal;
