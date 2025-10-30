import React, { useState } from 'react';

interface NotificationSettingsProps {
  onClose: () => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onClose }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [vibrationEnabled, setVibrationEnabled] = useState(true);
  const [showPreviews, setShowPreviews] = useState(false);
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(true);
  const [quietStart, setQuietStart] = useState('21:00');
  const [quietEnd, setQuietEnd] = useState('07:00');
  const [priorityContacts, setPriorityContacts] = useState(['Mom', 'Dad']);

  return (
    <div className="app-container">
      <div className="header">
        <h1>🔔 Notification Settings</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="notification-settings">
        <div className="settings-intro">
          <p>
            Control when and how your child receives notifications. Balance staying connected with preventing distractions.
          </p>
        </div>

        <div className="settings-section">
          <h2>🔔 General Notifications</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Enable Notifications</strong>
              <p>Allow the app to send notifications for new messages</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Sound</strong>
              <p>Play a sound when notifications arrive</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={soundEnabled}
                onChange={(e) => setSoundEnabled(e.target.checked)}
                disabled={!notificationsEnabled}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Vibration</strong>
              <p>Vibrate when notifications arrive</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={vibrationEnabled}
                onChange={(e) => setVibrationEnabled(e.target.checked)}
                disabled={!notificationsEnabled}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Show Message Previews</strong>
              <p>Display message content in notifications (less private)</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={showPreviews}
                onChange={(e) => setShowPreviews(e.target.checked)}
                disabled={!notificationsEnabled}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>🌙 Quiet Hours</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Enable Quiet Hours</strong>
              <p>Mute notifications during specific times (e.g., bedtime, school)</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={quietHoursEnabled}
                onChange={(e) => setQuietHoursEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {quietHoursEnabled && (
            <div className="time-inputs">
              <div className="time-input-group">
                <label>Start Time:</label>
                <input
                  type="time"
                  value={quietStart}
                  onChange={(e) => setQuietStart(e.target.value)}
                  className="time-input"
                />
              </div>
              <div className="time-input-group">
                <label>End Time:</label>
                <input
                  type="time"
                  value={quietEnd}
                  onChange={(e) => setQuietEnd(e.target.value)}
                  className="time-input"
                />
              </div>
              <p className="time-note">
                Currently set: {quietStart} to {quietEnd} (notifications will be muted)
              </p>
            </div>
          )}
        </div>

        <div className="settings-section">
          <h2>⭐ Priority Contacts</h2>
          <p>These contacts can always reach your child, even during quiet hours:</p>
          <div className="priority-contacts-list">
            {priorityContacts.map((contact, index) => (
              <div key={index} className="priority-contact-item">
                <span className="priority-icon">⭐</span>
                <span className="priority-name">{contact}</span>
                <button
                  className="remove-priority-btn"
                  onClick={() => setPriorityContacts(priorityContacts.filter((_, i) => i !== index))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button className="button-add-priority">+ Add Priority Contact</button>
        </div>

        <div className="settings-note">
          <h3>💡 Best Practices</h3>
          <ul>
            <li>Keep notifications enabled for family members</li>
            <li>Set quiet hours during sleep and study time</li>
            <li>Limit message previews to protect privacy</li>
            <li>Add emergency contacts as priority</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
