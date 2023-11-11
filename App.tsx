import { StatusBar } from 'expo-status-bar';

import { AppProvider } from './src/context/AppProvider';
import { Routes } from './src/routes';

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <Routes />
    </AppProvider>
  );
}
