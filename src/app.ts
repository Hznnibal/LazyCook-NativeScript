import * as React from 'react';
import * as ReactNativeScript from 'react-nativescript';
import { MainStack } from './components/MainStack';
import './i18n';

// Ensure i18n is initialized before the app starts
Object.defineProperty(global, '__DEV__', { value: false });

// Create a wrapper component to handle i18n initialization
const App = () => {
  return React.createElement(MainStack, {}, null);
};

ReactNativeScript.start(React.createElement(App, {}, null));