import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import HomePage from './routes/HomePage.jsx'
import './index.css'

import SearchBar from './routes/SearchBar.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
  },
  {
    path: "/search",
    element: <SearchBar />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

