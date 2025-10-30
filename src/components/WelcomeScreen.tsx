import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="welcome-screen">
      <h1>🐘 Welcome to Elephant!</h1>
      <p>
        A safe and fun place to chat with your family and friends!
        All your messages are private and protected. 🔒
      </p>
      <button className="welcome-button" onClick={onStart}>
        Start Chatting! 🎉
      </button>
    </div>
  );
};

export default WelcomeScreen;
