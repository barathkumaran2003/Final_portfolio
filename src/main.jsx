import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Portfoliohome from './Components/Portfoliohome'
import './PortfolioAnimation.js';
import './Navigation.js';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfoliohome />
  </StrictMode>,
)
