import React from 'react'
import ReactDOM from 'react-dom/client'

import { Portfolio } from './Portfolio'
import './index.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  delay: 500,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
)
