import React from 'react';

interface ErrorScreenProps {
  onRetry: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-red-600 p-8 text-center animate-in shake duration-300">
      <style>
        {`
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
          }
          .animate-in.shake {
            animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
          }
        `}
      </style>
      
      {/* Step 4.2: Message */}
      <div className="mb-12">
        <h2 className="text-white font-bold leading-tight" style={{ fontSize: '60px' }}>
          ACCESO<br />DENEGADO
        </h2>
      </div>

      {/* Icon for visual feedback */}
      <div className="mb-12 text-white opacity-80">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </div>

      {/* Step 4.2: Retry Button */}
      <button
        onClick={onRetry}
        className="bg-gray-200 text-black font-bold py-4 px-8 hover:bg-white transition-colors shadow-lg outline-none"
        style={{ fontSize: '24px' }}
      >
        VOLVER A INTENTAR
      </button>
    </div>
  );
};