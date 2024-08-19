// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Participantes from './components/Participantes';
import Ref from './components/Ref';
import Materiais from './components/Materiais';
import Guia from './components/Guia';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Participantes",
    element: <Participantes/>
  },
  {
    path: "/Materiais",
    element: <Materiais/>,
  },
  {
    path: "/Guia",
    element: <Guia/>,
  },
  {
    path: "/Ref",
    element: <Ref/>,
  },


]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
