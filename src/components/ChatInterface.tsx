import React, { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: string;
  time: string;
  isOwn: boolean;
}

interface ChatInterfaceProps {
  onGuardianClick: () => void;
}

// Simple counter-based ID generator to avoid collisions
let messageCounter = 0;
const generateMessageId = (): string => {
  messageCounter += 1;
  return `msg-${Date.now()}-${messageCounter}`;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onGuardianClick }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateMessageId(),
      text: 'Hi! Welcome to Elephant! This is a safe space to chat with your family! 🐘',
      sender: 'Elephant Helper',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isOwn: false,
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: generateMessageId(),
        text: inputValue,
        sender: 'You',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate a response (in production, this would use Matrix SDK)
      setTimeout(() => {
        const response: Message = {
          id: generateMessageId(),
          text: 'Great message! 👍',
          sender: 'Elephant Helper',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwn: false,
        };
        setMessages((prev) => [...prev, response]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🐘 Elephant Chat</h1>
        <button className="guardian-button" onClick={onGuardianClick}>
          👨‍👩‍👧 Guardian
        </button>
      </div>
      <div className="chat-container">
        <div className="messages-area">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isOwn ? 'own' : 'other'}`}
            >
              {!message.isOwn && (
                <div className="message-sender">{message.sender}</div>
              )}
              <div>{message.text}</div>
              <div className="message-time">{message.time}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="input-area">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message here... 💬"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
