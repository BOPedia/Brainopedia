import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async' // 1. Import the provider
import App from './App.tsx'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Wrap your App in the provider */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)