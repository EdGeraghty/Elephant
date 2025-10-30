import React from 'react';

interface ActivityReportProps {
  onClose: () => void;
}

const ActivityReport: React.FC<ActivityReportProps> = ({ onClose }) => {
  // Mock data for demonstration
  const activityData = {
    totalMessages: 247,
    messagesThisWeek: 58,
    activeContacts: 4,
    averageDaily: 12,
    peakUsageTime: '4:00 PM - 6:00 PM',
    totalTimeToday: '1h 23m',
  };

  const weeklyActivity = [
    { day: 'Mon', messages: 15 },
    { day: 'Tue', messages: 8 },
    { day: 'Wed', messages: 12 },
    { day: 'Thu', messages: 6 },
    { day: 'Fri', messages: 10 },
    { day: 'Sat', messages: 4 },
    { day: 'Sun', messages: 3 },
  ];

  const recentContacts = [
    { name: 'Mom', messages: 32, lastActive: '2 hours ago' },
    { name: 'Dad', messages: 18, lastActive: '5 hours ago' },
    { name: 'Grandma', messages: 6, lastActive: 'Yesterday' },
    { name: 'Best Friend', messages: 2, lastActive: '3 days ago' },
  ];

  const maxMessages = Math.max(...weeklyActivity.map(d => d.messages));

  return (
    <div className="app-container">
      <div className="header">
        <h1>📊 Activity Report</h1>
        <button className="guardian-button" onClick={onClose}>
          Back to Settings
        </button>
      </div>
      <div className="activity-report">
        <div className="activity-intro">
          <p>
            This report shows your child&apos;s usage patterns without revealing message content.
            All data respects privacy while helping you monitor healthy usage.
          </p>
        </div>

        <div className="activity-section">
          <h2>📈 Overview</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">💬</div>
              <div className="stat-value">{activityData.totalMessages}</div>
              <div className="stat-label">Total Messages</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value">{activityData.messagesThisWeek}</div>
              <div className="stat-label">This Week</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-value">{activityData.activeContacts}</div>
              <div className="stat-label">Active Contacts</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-value">{activityData.averageDaily}</div>
              <div className="stat-label">Daily Average</div>
            </div>
          </div>
        </div>

        <div className="activity-section">
          <h2>📅 Weekly Activity</h2>
          <div className="chart-container">
            {weeklyActivity.map((day) => (
              <div key={day.day} className="chart-bar-wrapper">
                <div className="chart-bar-container">
                  <div
                    className="chart-bar"
                    style={{
                      height: `${(day.messages / maxMessages) * 100}%`,
                    }}
                  >
                    <span className="chart-value">{day.messages}</span>
                  </div>
                </div>
                <div className="chart-label">{day.day}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-section">
          <h2>👥 Contact Activity</h2>
          <div className="contact-list">
            {recentContacts.map((contact) => (
              <div key={contact.name} className="contact-activity-item">
                <div className="contact-info">
                  <div className="contact-name">{contact.name}</div>
                  <div className="contact-last-active">{contact.lastActive}</div>
                </div>
                <div className="contact-messages">
                  {contact.messages} messages
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="activity-section">
          <h2>⏰ Usage Patterns</h2>
          <div className="usage-info">
            <div className="usage-item">
              <div className="usage-label">Peak Usage Time:</div>
              <div className="usage-value">{activityData.peakUsageTime}</div>
            </div>
            <div className="usage-item">
              <div className="usage-label">Time Spent Today:</div>
              <div className="usage-value">{activityData.totalTimeToday}</div>
            </div>
          </div>
        </div>

        <div className="activity-note">
          <h3>🔒 Privacy Note</h3>
          <p>
            This report shows only statistics and patterns. Message content is never stored
            or displayed. All messages remain end-to-end encrypted between users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityReport;
