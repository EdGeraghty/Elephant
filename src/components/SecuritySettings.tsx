import React, { useState } from 'react';

interface SecuritySettingsProps {
  onClose: () => void;
}

const SecuritySettings: React.FC<SecuritySettingsProps> = ({ onClose }) => {
  const [e2eeEnabled, setE2eeEnabled] = useState(true);
  const [keyBackupEnabled, setKeyBackupEnabled] = useState(true);
  const [deviceVerificationEnabled, setDeviceVerificationEnabled] = useState(true);
  const [crossSigningEnabled, setCrossSigningEnabled] = useState(true);
  const [showReadReceipts, setShowReadReceipts] = useState(true);
  const [showTypingIndicators, setShowTypingIndicators] = useState(true);

  const securityStatus = {
    encryptedMessages: 247,
    verifiedDevices: 2,
    unverifiedDevices: 0,
    backupStatus: 'Active',
    lastBackup: '2024-10-30',
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🔐 Security Settings</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="security-settings">
        <div className="settings-intro">
          <p>
            Elephant uses end-to-end encryption (E2EE) to keep all messages private and secure. Configure additional security features here.
          </p>
        </div>

        <div className="settings-section security-status">
          <h2>✅ Security Status</h2>
          <div className="status-grid">
            <div className="status-card">
              <div className="status-icon">🔐</div>
              <div className="status-value">{securityStatus.encryptedMessages}</div>
              <div className="status-label">Encrypted Messages</div>
            </div>
            <div className="status-card">
              <div className="status-icon">✅</div>
              <div className="status-value">{securityStatus.verifiedDevices}</div>
              <div className="status-label">Verified Devices</div>
            </div>
            <div className="status-card">
              <div className="status-icon">💾</div>
              <div className="status-value">{securityStatus.backupStatus}</div>
              <div className="status-label">Backup Status</div>
            </div>
            <div className="status-card">
              <div className="status-icon">📅</div>
              <div className="status-value">{securityStatus.lastBackup}</div>
              <div className="status-label">Last Backup</div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>🔒 Encryption</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>End-to-End Encryption (E2EE)</strong>
              <p>All messages are encrypted and can only be read by sender and recipient</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={e2eeEnabled}
                onChange={(e) => setE2eeEnabled(e.target.checked)}
                disabled={true}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <p className="security-note">
            ⚠️ E2EE is always enabled and cannot be turned off for your child's safety.
          </p>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Key Backup</strong>
              <p>Securely backup encryption keys to recover messages if device is lost</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={keyBackupEnabled}
                onChange={(e) => setKeyBackupEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>🔍 Device Verification</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Require Device Verification</strong>
              <p>Verify new devices before they can send/receive messages</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={deviceVerificationEnabled}
                onChange={(e) => setDeviceVerificationEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Cross-Signing</strong>
              <p>Automatically verify devices across all family members</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={crossSigningEnabled}
                onChange={(e) => setCrossSigningEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="device-list">
            <h3>Trusted Devices</h3>
            <div className="device-item">
              <div className="device-icon">📱</div>
              <div className="device-info">
                <div className="device-name">iPhone 12</div>
                <div className="device-date">Verified: 2024-01-15</div>
              </div>
              <div className="device-status verified">✅ Verified</div>
            </div>
            <div className="device-item">
              <div className="device-icon">💻</div>
              <div className="device-info">
                <div className="device-name">Chrome on MacBook</div>
                <div className="device-date">Verified: 2024-10-20</div>
              </div>
              <div className="device-status verified">✅ Verified</div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>👁️ Privacy</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Send Read Receipts</strong>
              <p>Let others know when your child has read their messages</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={showReadReceipts}
                onChange={(e) => setShowReadReceipts(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Show Typing Indicators</strong>
              <p>Let others see when your child is typing a message</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={showTypingIndicators}
                onChange={(e) => setShowTypingIndicators(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-note">
          <h3>🛡️ Security Best Practices</h3>
          <ul>
            <li>Keep E2EE enabled at all times (always on)</li>
            <li>Enable key backup to prevent message loss</li>
            <li>Verify all devices used by family members</li>
            <li>Review trusted devices regularly</li>
            <li>Never share encryption keys or recovery phrases</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
