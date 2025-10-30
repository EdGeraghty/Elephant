# 🐘 Elephant

A kid-friendly fork of Element - Safe E2EE messaging for tweens

## Overview

Elephant is a child-friendly Matrix chat client designed for tweens to communicate safely with their parents, family, and vetted friends. Built on the Matrix protocol, it provides end-to-end encrypted (E2EE) messaging with a simplified, colorful interface featuring large, clear GUI elements.

## Features

### For Kids
- 🎨 **Big, Clear Interface** - Large buttons and text designed for easy reading and use
- 💬 **Simple Chat** - Easy-to-use messaging without complex features
- 🔒 **Private & Safe** - All messages are end-to-end encrypted
- 🎉 **Fun & Friendly** - Colorful design with emojis and positive interactions

### For Guardians
- 🔐 **Guardian PIN Access** - Advanced settings hidden behind a 4-digit PIN
- 👥 **Approved Contacts** - Control who can message your child
- ⏰ **Time Limits** - Set usage limits and quiet hours
- 📊 **Activity Reports** - Monitor usage in a privacy-respecting way
- 🔔 **Notification Controls** - Manage how and when notifications appear

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EdGeraghty/Elephant.git
cd Elephant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Guardian PIN

The default guardian PIN is `1234`. In a production environment, this should be:
- Set during initial setup
- Stored securely (hashed)
- Changeable through the guardian settings

## Development

### Project Structure
```
Elephant/
├── public/          # Static files
├── src/
│   ├── components/  # React components
│   ├── App.tsx      # Main application
│   ├── index.tsx    # Entry point
│   └── styles.css   # Global styles
├── package.json     # Dependencies
└── webpack.config.js # Build configuration
```

### Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## Future Roadmap

- [ ] Full Matrix protocol integration
- [ ] Contact management system
- [ ] Time limit enforcement
- [ ] Activity reporting
- [ ] Debian package creation
- [ ] Mobile app versions (iOS/Android)
- [ ] Parental notification system
- [ ] Content filtering options

## Security Note

This is an early version. For production use:
- Implement secure PIN storage
- Add proper authentication
- Integrate full Matrix SDK
- Add content moderation features
- Implement proper session management

## License

Apache License 2.0

## Credits

Based on Element Web, built on the Matrix protocol.

---

Made with ❤️ for safe family communication
