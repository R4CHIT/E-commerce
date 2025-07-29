import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter,createBrowserRouter,RouterProvider } from 'react-router'
import Cart from './components/Cart/Cart.jsx'
import MainAuth from './components/Authentication/MainAuth.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
  },
  {
    path: "/cart",
    element: <div><Cart/></div>,
  },
  {
    path:"auth",
     element: <div><MainAuth /></div>,
  }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
