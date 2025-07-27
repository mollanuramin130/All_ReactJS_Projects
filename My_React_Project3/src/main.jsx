import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import   '../node_modules/bootstrap/dist/css/bootstrap.css';
import   '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {DataBinding} from './data-binding.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataBinding/>
  </StrictMode>,
)
