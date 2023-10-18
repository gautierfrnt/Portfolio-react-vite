import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MesProjets from "./pages/MesProjets.jsx";
import NoPage from "./pages/NoPage.jsx";
import PageContact from "./pages/PageContact.jsx";
import ProjetEDN from './pages/ProjetEDN.jsx';
import ProjetEnergcuma from './pages/ProjetEnergcuma.jsx';


const router = createBrowserRouter([
  {
    path: '/Portfolio-react-vite/',
    element: <Home />,
    children: [
      // {
      //   path: '/Portfolio-react-vite/',
      //   element: <Home />,
      // },
      {
        path: '/Portfolio-react-vite/Mesprojets',
        element: <MesProjets />,
      },
      {
        path: '/Portfolio-react-vite/Nopage',
        element: <NoPage />,
      },
      {
        path: '/Portfolio-react-vite/PageContact',
        element: <PageContact />,
      },
      {
        path: '/Portfolio-react-vite/ProjetEDN',
        element: <ProjetEDN />,
      },
      {
        path: '/Portfolio-react-vite/ProjetEnergcuma',
        element: <ProjetEnergcuma />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



