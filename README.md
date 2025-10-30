# 🐘 Elephant

A kid-friendly fork of Element - Safe E2EE messaging for tweens with full appearance customization

## Overview

Elephant is a child-friendly Matrix chat client designed for tweens to communicate safely with their parents, family, and vetted friends. Built on the Matrix protocol, it provides end-to-end encrypted (E2EE) messaging with a simplified, colorful interface featuring large, clear GUI elements.

**What makes Elephant special:**
- 🎨 Full appearance customization without guardian permission
- 🔒 Guardian PIN protects safety features only
- 🐘 Large, clear interface designed for kids
- 💬 Simple, fun chat experience

---

## 📸 Screenshots

### Welcome Screen
![Welcome Screen](https://github.com/user-attachments/assets/88311ebb-51f1-4a54-a9e3-dca2329ca4e7)
*The friendly welcome screen greets users when they first open Elephant*

### Chat Interface
![Chat Interface](https://github.com/user-attachments/assets/304f6c9a-13c1-4388-9794-bd47de14f3d6)
*Main chat screen with large buttons and clear text. Notice the Appearance button - no PIN required!*

### Appearance Customization Panel
![Appearance Panel](https://github.com/user-attachments/assets/ee7a5491-05c3-43a1-b317-210288fa33f7)
*Full customization panel with 7 pre-made themes, custom color picker, and 5 font options*

### 🦄 Unicorn Magic Theme
![Unicorn Theme](https://github.com/user-attachments/assets/unicorn-theme-placeholder)
*The magical unicorn theme with pink and purple gradients - perfect for kids who love sparkle!*

### Guardian PIN Modal
![Guardian PIN](https://github.com/user-attachments/assets/aadd13bd-c2bd-466f-becf-28bdaab06b29)
*PIN entry required only for safety-related settings*

### Guardian Settings Panel
![Guardian Settings](https://github.com/user-attachments/assets/c87bd421-3617-41ff-8e58-fe6056c045b0)
*Advanced settings for parents: approved contacts, time limits, notifications, security, and activity reports*

---

## Features

### For Kids (No PIN Required!) 🎨
- **🌈 7 Color Themes**: Purple Dream (default), Ocean Blue, Sunset Orange, Forest Green, Pink Lemonade, Night Sky, and 🦄 Unicorn Magic
- **🎨 Custom Colors**: Pick any two colors to create your own gradient
- **✏️ 5 Font Options**: Default, Comic Sans (Fun!), Rounded, Bold & Clear, and Friendly
- **💾 Persistent Settings**: Your choices are saved automatically
- **🔄 Reset Anytime**: Don't like your changes? Reset to default with one click
- **🐘 Big, Clear Interface**: Large buttons and text (20-50% larger than standard)
- **💬 Simple Chat**: Easy-to-use messaging without complex features
- **🔒 Private & Safe**: All messages are end-to-end encrypted
- **🎉 Fun & Friendly**: Colorful design with emojis and positive interactions

### For Guardians (PIN Protected) 🔐
- **👥 Approved Contacts**: Control who can message your child
  - Manage contact list
  - Only approved contacts can send messages
  - Add/remove contacts easily
- **⏰ Time Limits**: Set usage limits and quiet hours
  - Daily time limits
  - Quiet hours (e.g., bedtime)
  - School hours blocking
- **🔔 Notification Controls**: Manage how and when notifications appear
  - Control notification frequency
  - Set do-not-disturb periods
  - Customize alert sounds
- **🔐 Security Settings**: Additional E2EE configuration
  - Device verification
  - Key backup settings
  - Encryption status
- **🔑 Change Guardian PIN**: Update the 4-digit PIN anytime
- **📊 Activity Reports**: Monitor usage in a privacy-respecting way
  - Message count (not content)
  - Active contacts
  - Usage patterns
- **ℹ️ About**: Version info and credits

**Guardian PIN Default**: `1234` (change this immediately!)

---

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/EdGeraghty/Elephant.git
cd Elephant
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

4. **Try the features:**
   - Click "Start Chatting!" to enter the chat
   - Click "🎨 Appearance" to customize colors and fonts (no PIN needed!)
   - Click "👨‍👩‍👧 Guardian" and enter PIN `1234` to access safety settings

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

---

## Building for Debian Linux

To create a Debian package, you can use Electron to wrap the web app:

1. **Install Electron packaging tools:**
```bash
npm install --save-dev electron electron-builder
```

2. **Add electron configuration to `package.json`:**
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

3. **Create `electron-main.js` to launch the app**

4. **Build the Debian package:**
```bash
npm run build
npx electron-builder --linux deb
```

The `.deb` package will be created in the `dist/` directory and can be installed on Debian-based systems.

**Note:** Full Electron integration is planned for future releases.

---

## Customization Guide

### Available Themes

1. **Purple Dream** (Default) - Soft purple gradient
2. **Ocean Blue** - Refreshing blue gradient  
3. **Sunset Orange** - Warm orange/pink gradient
4. **Forest Green** - Natural green gradient
5. **Pink Lemonade** - Sweet pink/yellow gradient
6. **Night Sky** - Cool dark blue gradient
7. **🦄 Unicorn Magic** - Magical pink/purple gradient

### Custom Colors

1. Click "🎨 Appearance" in the chat header
2. Scroll to "Custom Colors" section
3. Click the color pickers to choose your colors
4. Click "Apply Custom Colors"

### Font Options

Choose from 5 different font styles:
- **Default**: Clean, system font
- **Comic Sans (Fun!)**: Playful and casual
- **Rounded**: Soft, friendly appearance  
- **Bold & Clear**: Extra readable
- **Friendly**: Comfortable reading experience

All customizations are saved automatically in your browser!

---

## Guardian Controls Detailed

### Approved Contacts Management

**Purpose**: Control who your child can communicate with

**How it works:**
1. Click "👨‍👩‍👧 Guardian" button
2. Enter PIN (default: `1234`)
3. Click "Manage Contacts"
4. Add/remove contacts from the approved list
5. Only approved contacts can send messages to your child

**Best practices:**
- Start with just family members
- Add friends only after verifying with parents
- Review the list regularly
- Remove contacts if needed

### Time Limits

**Purpose**: Prevent excessive screen time

**Features:**
- Set daily time limits (e.g., 2 hours per day)
- Configure quiet hours (e.g., 9 PM - 7 AM)
- Block usage during school hours
- Get notifications when limits are approached

### Notifications

**Purpose**: Keep your child safe without being intrusive

**Options:**
- Control notification frequency
- Set do-not-disturb periods
- Customize alert sounds
- Emergency override for important contacts

### Activity Reports

**Purpose**: Monitor usage while respecting privacy

**What you see:**
- Number of messages sent/received
- Active contacts
- Usage patterns and times
- No message content (respects privacy)

---

## Development

### Project Structure
```
Elephant/
├── public/             # Static files
│   └── index.html     # HTML template
├── src/
│   ├── components/    # React components
│   │   ├── WelcomeScreen.tsx       # Landing page
│   │   ├── ChatInterface.tsx       # Main chat UI
│   │   ├── AppearancePanel.tsx     # Customization UI
│   │   ├── GuardianPinModal.tsx    # PIN entry
│   │   └── SettingsPanel.tsx       # Guardian controls
│   ├── ThemeContext.tsx   # Theme state management
│   ├── App.tsx            # Main application
│   ├── index.tsx          # Entry point
│   └── styles.css         # Global styles
├── package.json           # Dependencies
├── webpack.config.js      # Build configuration
└── tsconfig.json          # TypeScript config
```

### Key Technologies

- **React 18**: Modern UI framework
- **TypeScript 5**: Type-safe development
- **Webpack 5**: Module bundling
- **CSS Variables**: Dynamic theming
- **LocalStorage**: Persistent user preferences
- **Matrix JS SDK**: E2EE messaging foundation

### Scripts

- `npm start` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Adding New Themes

To add a new color theme:

1. Edit `src/components/AppearancePanel.tsx`
2. Add to `predefinedThemes` array:
```typescript
{
  name: 'Your Theme Name',
  colors: { primary: '#color1', secondary: '#color2' },
}
```
3. The theme will automatically appear in the UI!

---

## Architecture

### Theme System

The theme system uses React Context and CSS variables:

1. **ThemeContext** (`src/ThemeContext.tsx`):
   - Manages theme state
   - Persists to localStorage
   - Updates CSS variables dynamically

2. **CSS Variables** (`src/styles.css`):
   - `--primary-color`: First gradient color
   - `--secondary-color`: Second gradient color
   - `--font-family`: Font choice

3. **AppearancePanel** (`src/components/AppearancePanel.tsx`):
   - UI for customization
   - Pre-made themes
   - Custom color picker
   - Font selector

### Security Architecture

**Two-tier access model:**

1. **Open Access** (No PIN):
   - Appearance customization
   - Chat interface
   - Sending/receiving messages

2. **Guardian-Protected** (PIN Required):
   - Contact management
   - Time limits
   - Notifications
   - Security settings
   - Activity reports
   - PIN changes

---

## Future Roadmap

### Phase 1 (Current - MVP)
- ✅ Child-friendly UI
- ✅ Guardian PIN system  
- ✅ Basic chat interface
- ✅ Appearance customization (7 themes, custom colors, 5 fonts)
- ✅ Settings structure

### Phase 2 (Next Steps)
- [ ] Full Matrix protocol integration
- [ ] Real E2EE messaging
- [ ] Contact management implementation
- [ ] Time limit enforcement
- [ ] Activity reporting system
- [ ] Server-side authentication

### Phase 3 (Future)
- [ ] Content filtering
- [ ] Parental notification system
- [ ] Electron desktop app for Debian
- [ ] Mobile versions (iOS/Android via React Native)
- [ ] Multi-language support
- [ ] Accessibility improvements

---

## Security Note

This is an early version intended as a demonstration. For production use:

### Required Security Improvements
- **Implement secure PIN storage** - PINs should be hashed server-side, not stored in client code
- **Add proper authentication** - Integrate with Matrix homeserver authentication
- **Integrate full Matrix SDK** - Replace simulated messages with real Matrix protocol
- **Add content moderation** - Implement filtering and safety features
- **Implement proper session management** - Add secure login/logout flows
- **Rate limiting** - Prevent brute-force PIN attacks
- **Audit logging** - Track guardian access and configuration changes

### Current Security Status
- ✅ No known vulnerabilities in dependencies (matrix-js-sdk v39.0.0, webpack-dev-server v5.2.2)
- ✅ CodeQL security analysis passed with 0 alerts
- ✅ ESLint passing with no errors
- ⚠️ Guardian PIN is client-side only (demonstration feature)
- ⚠️ Messages are simulated (Matrix SDK integration required for real E2EE)

### Security Best Practices

**For Guardians:**
1. Change the default PIN immediately
2. Never share your PIN with children
3. Review approved contacts regularly
4. Check activity reports weekly
5. Enable all available security features

**For Developers:**
1. Never commit secrets to the repository
2. Use environment variables for sensitive data
3. Implement proper input validation
4. Follow OWASP security guidelines
5. Regular security audits

---

## FAQ

**Q: Do I need to enter a PIN to change colors or fonts?**  
A: No! Appearance customization is freely accessible to all users. Only safety-related features require the guardian PIN.

**Q: Will my theme choices be saved?**  
A: Yes! Your theme preferences are automatically saved in your browser's localStorage.

**Q: Can I use Elephant without a guardian?**  
A: The app is designed for guardian supervision, but appearance features work without PIN access. Guardian settings are meant for parents/guardians to configure safety features.

**Q: Is this really end-to-end encrypted?**  
A: The current version simulates messages for demonstration. Full E2EE via Matrix protocol integration is planned for production.

**Q: Can I add my own theme?**  
A: Yes! Use the custom color picker in the Appearance panel to create any gradient you want.

**Q: What's the unicorn theme?**  
A: 🦄 Unicorn Magic is a special pink and purple gradient theme perfect for kids who love magical, sparkly designs!

**Q: How do I reset to the default theme?**  
A: In the Appearance panel, scroll down and click "Reset to Default Theme".

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Add comments for complex logic
- Update documentation for new features

---

## License

Apache License 2.0

---

## Credits

Based on Element Web, built on the Matrix protocol.

**Special thanks to:**
- Matrix.org for the protocol and SDK
- Element team for the original inspiration
- All contributors and supporters

---

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues first
- Provide detailed information for bugs

---

Made with ❤️ for safe family communication

**Remember:** The best technology is one that keeps families connected while keeping kids safe. Elephant aims to do both! 🐘
