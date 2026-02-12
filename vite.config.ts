import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno según el modo (development/production)
  const env = loadEnv(mode, '.', '');

  return {
    // REGLA 1: OBLIGATORIO para GitHub Pages. 
    // Permite que los archivos se carguen correctamente desde rutas relativas.
    base: './', 

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    define: {
      // Inyecta las variables de entorno para que sean accesibles en el código
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        // Configura el alias '@' para apuntar a la raíz del proyecto
        '@': path.resolve(__dirname, '.'),
      },
    },

    build: {
      // Configuración adicional para asegurar compatibilidad en la carpeta docs
      outDir: 'dist',
    }
  };
});