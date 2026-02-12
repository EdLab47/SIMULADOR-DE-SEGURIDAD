import React from 'react';

interface CoverScreenProps {
  onStart: () => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-between h-full w-full bg-white p-8 relative">
      {/* Step 2.1: Header Data */}
      <div className="w-full max-w-2xl border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gray-50 text-center">
        <h1 className="text-2xl font-bold text-black mb-2">
          PROYECTO: SISTEMA DE ACCESO
        </h1>
        <div className="text-lg text-gray-700 space-y-1">
          <p><span className="font-bold">Nombre:</span> [Tu Nombre Completo]</p>
          <p><span className="font-bold">Grado y Grupo:</span> 3º F</p>
          <p><span className="font-bold">Escuela:</span> Secundaria Técnica No. 47</p>
          <p><span className="font-bold">Materia:</span> Electrónica y TICs</p>
        </div>
      </div>

      {/* Decorative center icon or placeholder to make it look like a slide */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-9xl opacity-10">🔒</div>
      </div>

      {/* Step 2.2: Start Button */}
      <div className="mb-16">
        <button
          onClick={onStart}
          className="bg-blue-900 text-white font-bold text-2xl py-4 px-12 shadow-lg hover:bg-blue-800 transition-colors transform hover:scale-105 active:scale-95 outline-none"
          style={{ fontSize: '28px' }}
        >
          ENTRAR AL SISTEMA
        </button>
      </div>
    </div>
  );
};