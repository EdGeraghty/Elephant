import React from 'react';

interface SettingsPanelProps {
  onExit: () => void;
  onActivityReportClick: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onExit, onActivityReportClick }) => {
  return (
    <div className="app-container">
      <div className="header">
        <h1>🔧 Guardian Settings</h1>
        <button className="guardian-button" onClick={onExit}>
          Exit Settings
        </button>
      </div>
      <div className="settings-panel">
        <h2>Advanced Settings & Controls</h2>
        
        <div className="setting-item">
          <h3>👥 Approved Contacts</h3>
          <p>
            Manage who your child can chat with. Only approved contacts will be able to send messages.
          </p>
          <button className="button-large">Manage Contacts</button>
        </div>

        <div className="setting-item">
          <h3>🔔 Notifications</h3>
          <p>
            Control when and how notifications are sent to keep your child safe without being intrusive.
          </p>
          <button className="button-large">Configure Notifications</button>
        </div>

        <div className="setting-item">
          <h3>⏰ Time Limits</h3>
          <p>
            Set daily time limits and quiet hours for when the app can be used.
          </p>
          <button className="button-large">Set Time Limits</button>
        </div>

        <div className="setting-item">
          <h3>🔐 Security</h3>
          <p>
            All messages are end-to-end encrypted (E2EE). Configure additional security settings here.
          </p>
          <button className="button-large">Security Settings</button>
        </div>

        <div className="setting-item">
          <h3>🔑 Change Guardian PIN</h3>
          <p>
            Update the PIN required to access these guardian settings.
          </p>
          <button className="button-large">Change PIN</button>
        </div>

        <div className="setting-item">
          <h3>📊 Activity Report</h3>
          <p>
            View your child&apos;s chat activity and usage patterns in a privacy-respecting way.
          </p>
          <button className="button-large" onClick={onActivityReportClick}>View Report</button>
        </div>

        <div className="setting-item">
          <h3>ℹ️ About Elephant</h3>
          <p>
            Version 1.0.0 - A kid-friendly fork of Element, built on the Matrix protocol for secure communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
