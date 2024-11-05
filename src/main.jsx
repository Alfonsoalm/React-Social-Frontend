
// Importaciones obligatorias de react
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Importar assets 
import './assets/fonts/fontawesome-free-6.1.2-web/css/all.css';

import './assets/css/commons/form.css';
import './assets/css/commons/layout.css';
import './assets/css/commons/normalize.css';
import './assets/css/commons/content.css';
import './assets/css/commons/header.css';
import './assets/css/commons/responsive.css';

import './assets/css/login.css';
import './assets/css/publicLayout.css';
import './assets/css/privateLayout.css';
import "./assets/css/register.css"; // Estilos personalizados
import './assets/css/sidebar&profile.css';

// Cargar configuracion react time ago
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

TimeAgo.addDefaultLocale(es);
TimeAgo.addLocale(es);

createRoot(document.getElementById('root')).render(
    <App />
)
