// src/main.jsx
import React    from 'react';
import ReactDOM from 'react-dom/client';
import App      from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/index.css';

// ── Capacitor native setup ────────────────────────────────────────────────────
// Runs only when loaded inside a Capacitor WebView (Android / iOS).
// On the web this is a no-op because `window.Capacitor` is undefined.
//
// We use dynamic imports so these packages are code-split out of the main
// bundle. If they aren't installed the import simply rejects and we catch it.
if (window.Capacitor?.isNative) {
  // 1. Status bar — make it overlay so our dark bg shows behind it
  import('@capacitor/status-bar').then(({ StatusBar, Style }) => {
    StatusBar.setStyle({ style: Style.Dark }).catch(() => {});
    StatusBar.setBackgroundColor({ color: '#0a0a12' }).catch(() => {});
    StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});
  }).catch(() => {});

  // 2. Keyboard — prevent the keyboard from resizing the WebView (causes layout jumps)
  import('@capacitor/keyboard').then(({ Keyboard }) => {
    Keyboard.setResizeMode({ mode: 'none' }).catch(() => {});
  }).catch(() => {});
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
