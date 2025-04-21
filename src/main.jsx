import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfoliohome from './Components/Portfoliohome'
import './Components/PortfolioAnimation.js';
import './Components/Navigation.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfoliohome />
  </StrictMode>,
)
