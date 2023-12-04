import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import HomePage from './routes/HomePage.jsx'
import './index.css'

import SearchBar from './components/SearchBar.jsx'
import Playlist from './routes/Playlist.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
  },
  {
    path: "/playlist",
    element: <Playlist/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

