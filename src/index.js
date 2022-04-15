import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "swiper/css/bundle";

import App from './App';
const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);
