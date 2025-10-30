import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

interface AppearancePanelProps {
  onClose: () => void;
}

const predefinedThemes = [
  {
    name: 'Purple Dream',
    colors: { primary: '#667eea', secondary: '#764ba2' },
  },
  {
    name: 'Ocean Blue',
    colors: { primary: '#4facfe', secondary: '#00f2fe' },
  },
  {
    name: 'Sunset Orange',
    colors: { primary: '#f857a6', secondary: '#ff5858' },
  },
  {
    name: 'Forest Green',
    colors: { primary: '#56ab2f', secondary: '#a8e063' },
  },
  {
    name: 'Pink Lemonade',
    colors: { primary: '#fa709a', secondary: '#fee140' },
  },
  {
    name: 'Night Sky',
    colors: { primary: '#2c3e50', secondary: '#4ca1af' },
  },
];

const fontOptions = [
  { name: 'Default', value: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif' },
  { name: 'Comic Sans (Fun!)', value: '"Comic Sans MS", "Chalkboard SE", cursive' },
  { name: 'Rounded', value: '"Nunito", "Quicksand", sans-serif' },
  { name: 'Bold & Clear', value: '"Arial Black", "Helvetica Bold", sans-serif' },
  { name: 'Friendly', value: '"Verdana", "Geneva", sans-serif' },
];

const AppearancePanel: React.FC<AppearancePanelProps> = ({ onClose }) => {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [customPrimary, setCustomPrimary] = useState(theme.colors.primary);
  const [customSecondary, setCustomSecondary] = useState(theme.colors.secondary);

  const handleThemeSelect = (colors: { primary: string; secondary: string }) => {
    updateTheme({ colors });
    setCustomPrimary(colors.primary);
    setCustomSecondary(colors.secondary);
  };

  const handleFontSelect = (fontFamily: string) => {
    updateTheme({ fontFamily });
  };

  const handleCustomColors = () => {
    updateTheme({
      colors: {
        primary: customPrimary,
        secondary: customSecondary,
      },
    });
  };

  const handleReset = () => {
    resetTheme();
    setCustomPrimary('#667eea');
    setCustomSecondary('#764ba2');
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>🎨 Appearance</h1>
        <button className="guardian-button" onClick={onClose}>
          Done
        </button>
      </div>
      <div className="appearance-panel">
        <h2>Make Elephant Your Own! 🐘</h2>
        <p className="appearance-intro">
          Choose your favorite colors and fonts to personalize your chat experience!
        </p>

        <div className="appearance-section">
          <h3>🌈 Color Themes</h3>
          <div className="theme-grid">
            {predefinedThemes.map((presetTheme) => (
              <button
                key={presetTheme.name}
                className="theme-option"
                onClick={() => handleThemeSelect(presetTheme.colors)}
                style={{
                  background: `linear-gradient(135deg, ${presetTheme.colors.primary} 0%, ${presetTheme.colors.secondary} 100%)`,
                }}
              >
                {presetTheme.name}
              </button>
            ))}
          </div>
        </div>

        <div className="appearance-section">
          <h3>🎨 Custom Colors</h3>
          <p className="appearance-help">Pick your own colors!</p>
          <div className="custom-color-picker">
            <div className="color-input-group">
              <label htmlFor="primary-color">First Color:</label>
              <input
                id="primary-color"
                type="color"
                value={customPrimary}
                onChange={(e) => setCustomPrimary(e.target.value)}
              />
              <span className="color-value">{customPrimary}</span>
            </div>
            <div className="color-input-group">
              <label htmlFor="secondary-color">Second Color:</label>
              <input
                id="secondary-color"
                type="color"
                value={customSecondary}
                onChange={(e) => setCustomSecondary(e.target.value)}
              />
              <span className="color-value">{customSecondary}</span>
            </div>
            <button className="button-large" onClick={handleCustomColors}>
              Apply Custom Colors
            </button>
          </div>
        </div>

        <div className="appearance-section">
          <h3>✏️ Font Style</h3>
          <div className="font-options">
            {fontOptions.map((font) => (
              <button
                key={font.name}
                className={`font-option ${theme.fontFamily === font.value ? 'active' : ''}`}
                onClick={() => handleFontSelect(font.value)}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>

        <div className="appearance-section">
          <h3>🔄 Reset to Default</h3>
          <p className="appearance-help">Don&apos;t like your changes? Reset to the original look!</p>
          <button className="button-large button-secondary" onClick={handleReset}>
            Reset to Default Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppearancePanel;
