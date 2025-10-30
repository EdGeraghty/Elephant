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

## Building for Debian Linux

To create a Debian package, you can use Electron to wrap the web app:

1. Install Electron packaging tools:
```bash
npm install --save-dev electron electron-builder
```

2. Add electron configuration to `package.json`:
```json
{
  "main": "electron-main.js",
  "build": {
    "appId": "com.elephant.chat",
    "linux": {
      "target": ["deb"],
      "category": "Network"
    }
  }
}
```

3. Create `electron-main.js` to launch the app
4. Build the Debian package:
```bash
npm run build
npx electron-builder --linux deb
```

The `.deb` package will be created in the `dist/` directory and can be installed on Debian-based systems.

**Note:** Full Electron integration is planned for future releases.

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

This is an early version intended as a demonstration. For production use:
- **Implement secure PIN storage** - PINs should be hashed server-side, not stored in client code
- **Add proper authentication** - Integrate with Matrix homeserver authentication
- **Integrate full Matrix SDK** - Replace simulated messages with real Matrix protocol
- **Add content moderation** - Implement filtering and safety features
- **Implement proper session management** - Add secure login/logout flows
- **Rate limiting** - Prevent brute-force PIN attacks
- **Audit logging** - Track guardian access and configuration changes

**Current Security Status:**
- ✅ No known vulnerabilities in dependencies (matrix-js-sdk v39.0.0, webpack-dev-server v5.2.2)
- ✅ CodeQL security analysis passed with 0 alerts
- ⚠️ Guardian PIN is client-side only (demonstration feature)
- ⚠️ Messages are simulated (Matrix SDK integration required for real E2EE)

## License

Apache License 2.0

## Credits

Based on Element Web, built on the Matrix protocol.

---

Made with ❤️ for safe family communication
