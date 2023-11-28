import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import HomePage from './components/HomePage.jsx'
import './index.css'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <SignUp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

