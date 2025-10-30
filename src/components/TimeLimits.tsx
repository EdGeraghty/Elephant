import React, { useState } from 'react';

interface TimeLimitsProps {
  onClose: () => void;
}

const TimeLimits: React.FC<TimeLimitsProps> = ({ onClose }) => {
  const [dailyLimitEnabled, setDailyLimitEnabled] = useState(true);
  const [dailyLimitHours, setDailyLimitHours] = useState(2);
  const [dailyLimitMinutes, setDailyLimitMinutes] = useState(30);
  const [schoolHoursEnabled, setSchoolHoursEnabled] = useState(true);
  const [schoolStart, setSchoolStart] = useState('08:00');
  const [schoolEnd, setSchoolEnd] = useState('15:00');
  const [weekendDifferent, setWeekendDifferent] = useState(true);
  const [weekendHours, setWeekendHours] = useState(4);
  const [weekendMinutes, setWeekendMinutes] = useState(0);

  const todayUsage = {
    minutes: 87,
    percentUsed: 58,
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>⏰ Time Limits</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="time-limits">
        <div className="settings-intro">
          <p>
            Help your child develop healthy screen time habits by setting daily limits and blocking times when the app shouldn't be used.
          </p>
        </div>

        <div className="settings-section usage-section">
          <h2>📊 Today's Usage</h2>
          <div className="usage-display">
            <div className="usage-circle">
              <svg viewBox="0 0 100 100" className="usage-ring">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="var(--primary-color)"
                  strokeWidth="8"
                  strokeDasharray={`${todayUsage.percentUsed * 2.827} 282.7`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="usage-text">
                <div className="usage-number">{todayUsage.minutes}</div>
                <div className="usage-label">minutes</div>
              </div>
            </div>
            <div className="usage-info">
              <p><strong>{todayUsage.percentUsed}%</strong> of daily limit used</p>
              <p className="usage-remaining">
                {dailyLimitEnabled
                  ? `${dailyLimitHours * 60 + dailyLimitMinutes - todayUsage.minutes} minutes remaining today`
                  : 'No limit set'}
              </p>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>⏱️ Daily Time Limit</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Enable Daily Limit</strong>
              <p>Set a maximum amount of time per day</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={dailyLimitEnabled}
                onChange={(e) => setDailyLimitEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {dailyLimitEnabled && (
            <div className="time-limit-picker">
              <div className="time-limit-input">
                <label>Hours:</label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={dailyLimitHours}
                  onChange={(e) => setDailyLimitHours(parseInt(e.target.value) || 0)}
                  className="number-input"
                />
              </div>
              <div className="time-limit-input">
                <label>Minutes:</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="15"
                  value={dailyLimitMinutes}
                  onChange={(e) => setDailyLimitMinutes(parseInt(e.target.value) || 0)}
                  className="number-input"
                />
              </div>
              <p className="limit-summary">
                Daily limit: <strong>{dailyLimitHours}h {dailyLimitMinutes}m</strong>
              </p>
            </div>
          )}
        </div>

        <div className="settings-section">
          <h2>🏫 School Hours Block</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Block During School Hours</strong>
              <p>Prevent app usage during school time (Mon-Fri)</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={schoolHoursEnabled}
                onChange={(e) => setSchoolHoursEnabled(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {schoolHoursEnabled && (
            <div className="time-inputs">
              <div className="time-input-group">
                <label>School Start:</label>
                <input
                  type="time"
                  value={schoolStart}
                  onChange={(e) => setSchoolStart(e.target.value)}
                  className="time-input"
                />
              </div>
              <div className="time-input-group">
                <label>School End:</label>
                <input
                  type="time"
                  value={schoolEnd}
                  onChange={(e) => setSchoolEnd(e.target.value)}
                  className="time-input"
                />
              </div>
              <p className="time-note">
                Blocked: Monday-Friday, {schoolStart} to {schoolEnd}
              </p>
            </div>
          )}
        </div>

        <div className="settings-section">
          <h2>🎮 Weekend Settings</h2>
          <div className="setting-toggle">
            <div className="toggle-info">
              <strong>Different Limit on Weekends</strong>
              <p>Allow more time on Saturday and Sunday</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={weekendDifferent}
                onChange={(e) => setWeekendDifferent(e.target.checked)}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {weekendDifferent && dailyLimitEnabled && (
            <div className="time-limit-picker">
              <div className="time-limit-input">
                <label>Hours:</label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={weekendHours}
                  onChange={(e) => setWeekendHours(parseInt(e.target.value) || 0)}
                  className="number-input"
                />
              </div>
              <div className="time-limit-input">
                <label>Minutes:</label>
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="15"
                  value={weekendMinutes}
                  onChange={(e) => setWeekendMinutes(parseInt(e.target.value) || 0)}
                  className="number-input"
                />
              </div>
              <p className="limit-summary">
                Weekend limit: <strong>{weekendHours}h {weekendMinutes}m</strong>
              </p>
            </div>
          )}
        </div>

        <div className="settings-note">
          <h3>💡 Recommendations</h3>
          <ul>
            <li>For tweens (8-12 years): 1-2 hours per day on weekdays</li>
            <li>Adjust for weekends and holidays as needed</li>
            <li>Block during homework and family time</li>
            <li>Emergency contacts can still be reached when app is blocked</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimeLimits;
