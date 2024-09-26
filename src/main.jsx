import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Event from './components/Event.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/team',
        element:<Team />
      },
      {
        path:'/event',
        element:<Event />
      },
      {
        path:'/contact',
        element:<Contact />
      }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
