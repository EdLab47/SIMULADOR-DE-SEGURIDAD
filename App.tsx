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
    <main className={isSimulator ? "h-screen w-screen overflow-hidden select-none font-sans bg-gray-100 relative" : "bg-white"}>
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
      
      {/* Botón flotante para regresar a instrucciones */}
      {isSimulator && (
        <button
          onClick={() => navigateTo(ScreenState.INSTRUCTIONS)}
          className="absolute top-4 right-4 z-50 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg transition-all border border-gray-200 hover:scale-105 active:scale-95 flex items-center gap-2"
          title="Salir de la demostración y ver instrucciones"
        >
          <i className="fas fa-book-open"></i>
          <span>Instrucciones</span>
        </button>
      )}
    </main>
  );
};

export default App;