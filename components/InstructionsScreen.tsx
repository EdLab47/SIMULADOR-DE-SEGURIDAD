import React from 'react';

interface InstructionsScreenProps {
  onStartDemo: () => void;
}

export const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onStartDemo }) => {
  return (
    <div className="instructions-wrapper">
      <style>{`
        .instructions-wrapper {
            --bg-body: #f1f5f9;
            --primary: #4f46e5;
            --primary-light: #8b5cf6;
            --success: #10b981;
            --error: #ef4444;
            --text-main: #1e293b;
            --white: #ffffff;
            --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            font-family: 'Lexend', sans-serif;
            background-color: var(--bg-body);
            color: var(--text-main);
            line-height: 1.6;
            padding: 20px;
            min-height: 100vh;
        }

        .instructions-wrapper * {
            box-sizing: border-box;
        }

        .instructions-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .instructions-header {
            background: linear-gradient(135deg, var(--primary), var(--primary-light));
            padding: 40px 20px;
            border-radius: 24px;
            text-align: center;
            color: var(--white);
            margin-bottom: 30px;
            box-shadow: var(--shadow);
        }

        .instructions-header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .instructions-header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .bento-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .card {
            background: var(--white);
            padding: 30px;
            border-radius: 24px;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card h2 {
            display: flex;
            align-items: center;
            gap: 12px;
            color: var(--primary);
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .card i {
            font-size: 1.2rem;
            background: #eef2ff;
            padding: 12px;
            border-radius: 12px;
        }

        .step-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .step-list li {
            margin-bottom: 15px;
            padding-left: 35px;
            position: relative;
        }

        .step-list li::before {
            content: "\f058";
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
            position: absolute;
            left: 0;
            color: var(--primary-light);
        }

        .highlight-box {
            background-color: #f0fdf4;
            border-left: 5px solid var(--success);
            padding: 20px;
            border-radius: 16px;
            margin: 20px 0;
        }

        .instruction-tag {
            display: inline-block;
            background: #e2e8f0;
            padding: 2px 8px;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            margin: 2px;
        }

        .important-note {
            background-color: #fff7ed;
            border-left: 5px solid #f97316;
            padding: 15px;
            border-radius: 12px;
            font-size: 0.9rem;
            margin-top: 10px;
        }

        .demo-btn {
            background-color: var(--white);
            color: var(--primary);
            border: none;
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            cursor: pointer;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: all 0.2s;
            margin-top: 20px;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }
        
        .demo-btn:hover {
            transform: scale(1.05);
            background-color: #f8fafc;
        }

        footer {
            text-align: center;
            padding: 40px 0;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
            margin-top: 40px;
        }

        @media (max-width: 600px) {
            .instructions-header h1 { font-size: 1.8rem; }
            .card { padding: 20px; }
        }
      `}</style>

      <div className="instructions-container">
        <header className="instructions-header">
            <h1>SISTEMA DE ACCESO CON CLAVE</h1>
            <p>Simulador de Seguridad Industrial | Electrónica y TICs</p>
            <p><strong>Escuela Secundaria Técnica No. 47</strong></p>
            
            <button onClick={onStartDemo} className="demo-btn">
                <i className="fas fa-play-circle"></i> VER EJEMPLO FUNCIONANDO
            </button>
        </header>

        <div className="highlight-box">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><i className="fas fa-rocket"></i> ¿QUÉ VAMOS A HACER?</h3>
            <p>Vas a programar un <strong>Simulador de Seguridad Industrial</strong>. Tu reto es crear un sistema de 4 etapas donde el usuario debe identificarse, ingresar una clave y, en caso de error, reintentar. Aprenderás a diseñar interfaces profesionales y lógica de control de "lazo cerrado".</p>
        </div>

        <div className="bento-grid">
            <div className="card" style={{ gridColumn: 'span 1' }}>
                <h2><i className="fas fa-map"></i> El Mapa de tu Trabajo</h2>
                <p>Asegúrate de tener estas 4 Diapositivas:</p>
                <ul className="step-list" style={{ marginTop: '15px' }}>
                    <li><strong>Hoja 1:</strong> Portada y Botón de Inicio.</li>
                    <li><strong>Hoja 2:</strong> Panel de Clave (3 botones alineados).</li>
                    <li><strong>Hoja 3:</strong> PANTALLA DE ÉXITO (Fondo verde y botón de apagado).</li>
                    <li><strong>Hoja 4:</strong> PANTALLA DE ERROR (Fondo rojo y botón de reintento).</li>
                </ul>
            </div>

            <div className="card">
                <h2><i className="fas fa-file-code"></i> PASO 1: Preparación</h2>
                <ul className="step-list">
                    <li><strong>Abrir:</strong> En el escritorio de tu PC, busca el icono Naranja con la letra "P" (PowerPoint). Elige "Presentación en blanco".</li>
                    <li><strong>Guardar:</strong> Ve a <span className="instruction-tag">ARCHIVO &gt; GUARDAR COMO &gt; EXAMINAR</span>.</li>
                    <li><strong>Nombre:</strong> Escribe <code style={{ background: '#eee', padding: '2px 5px' }}>3F_Apellido_Nombre_Seguridad</code> y clic en GUARDAR.</li>
                </ul>
            </div>

            <div className="card">
                <h2><i className="fas fa-id-card"></i> PASO 2: Portada (Hoja 1)</h2>
                <ul className="step-list">
                    <li><strong>Tus Datos:</strong> Ve a <span className="instruction-tag">INSERTAR &gt; Cuadro de texto</span>. Escribe: Nombre completo, Grado, Grupo y Escuela. (Fuente Arial, tamaño 24, Negrita).</li>
                    <li><strong>El Botón de Inicio:</strong>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Ve a <span className="instruction-tag">INSERTAR &gt; FORMAS &gt; Rectángulo</span>. Dibújalo abajo al centro.</li>
                            <li><strong>Color:</strong> Relleno Azul Marino | <strong>Bordes:</strong> Sin Contorno.</li>
                            <li><strong>Texto:</strong> Clic derecho &gt; EDITAR TEXTO: "ENTRAR AL SISTEMA" (Arial 28, Blanca, Negrita).</li>
                            <li><strong>Disparador:</strong> <span className="instruction-tag">INSERTAR &gt; ACCIÓN</span>. Elige Hipervínculo a: Diapositiva siguiente.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="card">
                <h2><i className="fas fa-key"></i> PASO 3: Panel de Seguridad (Hoja 2)</h2>
                <ul className="step-list">
                    <li>Crea una hoja nueva (<span className="instruction-tag">INICIO &gt; Nueva Diapositiva</span>).</li>
                    <li><strong>Fondo:</strong> Clic derecho &gt; FORMATO DE FONDO &gt; Color GRIS OSCURO.</li>
                    <li><strong>Título:</strong> Cuadro de texto que diga: SELECCIONE EL BOTÓN DE ACCESO. (Arial 44, Negrita, Blanco).</li>
                    <li><strong>Botones:</strong>
                        <ul className="list-disc ml-6 mt-2">
                            <li>Dibuja un rectángulo pequeño.</li>
                            <li>Usa <kbd className="bg-gray-200 px-1 rounded">CTRL+C</kbd> y <kbd className="bg-gray-200 px-1 rounded">CTRL+V</kbd> para tener 3 iguales.</li>
                            <li><strong>Alinear:</strong> <span className="instruction-tag">FORMATO DE FORMA &gt; ALINEAR &gt; ALINEAR EN EL MEDIO</span> y DISTRIBUIR HORIZONTALMENTE.</li>
                            <li><strong>Colores:</strong> Pinta 1° Azul, 2° Amarillo y 3° Café. (Sin contorno).</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="card" style={{ gridColumn: 'span 1' }}>
                <h2><i className="fas fa-desktop"></i> PASO 4: Pantallas de Respuesta</h2>
                <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                    <strong>Hoja 3 (ÉXITO):</strong>
                    <p>Fondo VERDE. Texto: "SISTEMA DESBLOQUEADO" (Arial 60, Negrita). Botón Gris Claro "SALIR / APAGAR SISTEMA". Acción: PRIMERA DIAPOSITIVA.</p>
                </div>
                <div>
                    <strong>Hoja 4 (FALLO):</strong>
                    <p>Fondo ROJO. Texto: "ACCESO DENEGADO" (Arial 60, Negrita). Botón Gris Claro "VOLVER A INTENTAR". Acción: Diapositiva 2.</p>
                </div>
            </div>

            <div className="card">
                <h2><i className="fas fa-shield-alt"></i> PASO 5 y 6: Finalización</h2>
                <div className="important-note">
                    <strong>Blindaje:</strong> En la pestaña <span className="instruction-tag">TRANSICIONES</span>, desmarca "Al hacer clic con el mouse" y pulsa "APLICAR A TODAS".
                </div>
                <ul className="step-list" style={{ marginTop: '15px' }}>
                    <li><strong>Ortografía:</strong> Pestaña <span className="instruction-tag">REVISAR &gt; ORTOGRAFÍA</span>.</li>
                    <li><strong>Prueba Final:</strong> Regresa a Hoja 1, presiona <kbd className="bg-gray-200 px-1 rounded">F5</kbd>.</li>
                    <li>Prueba que el botón Azul lleve al éxito y los demás al error.</li>
                    <li>Guarda los cambios finales en el icono del disquete.</li>
                </ul>
            </div>
        </div>

        <footer>
            <p>&copy; 2026 - Educación Tecnológica</p>
        </footer>
      </div>
    </div>
  );
};