import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { StyledEngineProvider } from '@mui/material/styles';
import Home from './pages/Home.tsx'
import PageNotFound from './pages/PageNotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={Home} path='/'/>
          <Route Component={PageNotFound} path='/pageNotFound'/>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  </StrictMode>,
)
