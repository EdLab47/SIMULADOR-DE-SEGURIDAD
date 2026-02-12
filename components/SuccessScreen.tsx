import React from 'react';

interface SuccessScreenProps {
  onReset: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-green-600 p-8 text-center animate-in fade-in duration-500">
      {/* Step 4.1: Message */}
      <div className="mb-12">
         <h2 className="text-white font-bold leading-tight" style={{ fontSize: '60px' }}>
          SISTEMA<br />DESBLOQUEADO
        </h2>
      </div>
      
      {/* Icon for visual feedback */}
      <div className="mb-12 text-white opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      </div>

      {/* Step 4.1: Exit Button */}
      <button
        onClick={onReset}
        className="bg-gray-200 text-black font-bold py-4 px-8 hover:bg-white transition-colors shadow-lg outline-none"
        style={{ fontSize: '24px' }}
      >
        SALIR / APAGAR SISTEMA
      </button>
    </div>
  );
};