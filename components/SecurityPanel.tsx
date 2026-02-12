import React from 'react';

interface SecurityPanelProps {
  onSuccess: () => void;
  onError: () => void;
}

export const SecurityPanel: React.FC<SecurityPanelProps> = ({ onSuccess, onError }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gray-800 p-8">
      {/* Step 3.3: Title */}
      <h2 className="text-white font-bold mb-16 text-center" style={{ fontSize: '44px' }}>
        SELECCIONE EL BOTÓN DE ACCESO
      </h2>

      {/* Step 3.4: Buttons */}
      <div className="flex flex-row gap-8 items-center justify-center">
        {/* Blue Button - The correct key (Step 6 reference) */}
        <button
          onClick={onSuccess}
          className="w-32 h-32 bg-blue-500 hover:bg-blue-400 transition-colors shadow-xl transform active:scale-95 outline-none"
          aria-label="Clave Azul"
        ></button>

        {/* Yellow Button - Incorrect */}
        <button
          onClick={onError}
          className="w-32 h-32 bg-yellow-400 hover:bg-yellow-300 transition-colors shadow-xl transform active:scale-95 outline-none"
          aria-label="Clave Amarilla"
        ></button>

        {/* Brown Button - Incorrect */}
        <button
          onClick={onError}
          className="w-32 h-32 bg-amber-800 hover:bg-amber-700 transition-colors shadow-xl transform active:scale-95 outline-none"
          aria-label="Clave Café"
        ></button>
      </div>

      <div className="mt-16 text-gray-400 text-sm">
        * Seleccione el color correcto para desbloquear
      </div>
    </div>
  );
};