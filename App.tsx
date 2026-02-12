import React, { useState } from 'react';
import { ScreenState } from './types';
import { InstructionsScreen } from './components/InstructionsScreen';
import { CoverScreen } from './components/CoverScreen';
import { SecurityPanel } from './components/SecurityPanel';
import { SuccessScreen } from './components/SuccessScreen';
import { ErrorScreen } from './components/ErrorScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(ScreenState.INSTRUCTIONS);

  const navigateTo = (screen: ScreenState) => {
    setCurrentScreen(screen);
  };

  const isSimulator = currentScreen !== ScreenState.INSTRUCTIONS;

  return (
    // We adjust the main container class based on whether we are showing the instructions (scrolling allowed) 
    // or the simulator (full screen kiosk mode)
    <main className={isSimulator ? "h-screen w-screen overflow-hidden select-none font-sans bg-gray-100" : "bg-white"}>
      {currentScreen === ScreenState.INSTRUCTIONS && (
        <InstructionsScreen onStartDemo={() => navigateTo(ScreenState.COVER)} />
      )}

      {currentScreen === ScreenState.COVER && (
        <CoverScreen onStart={() => navigateTo(ScreenState.PANEL)} />
      )}
      
      {currentScreen === ScreenState.PANEL && (
        <SecurityPanel 
          onSuccess={() => navigateTo(ScreenState.SUCCESS)}
          onError={() => navigateTo(ScreenState.ERROR)}
        />
      )}

      {currentScreen === ScreenState.SUCCESS && (
        <SuccessScreen onReset={() => navigateTo(ScreenState.COVER)} />
      )}

      {currentScreen === ScreenState.ERROR && (
        <ErrorScreen onRetry={() => navigateTo(ScreenState.PANEL)} />
      )}
      
      {/* Optional: Add a hidden way to go back to instructions from cover if needed, 
          but for Kiosk feel we usually don't. The user can refresh the page to see instructions again. */}
    </main>
  );
};

export default App;