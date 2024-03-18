import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import './index.css'
import StepComponent from './steps/step.jsx';

export const DefaultContext = createContext();
export const DefaultProvider = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("/step/")) {
      navigate("/step/one");
    }
  }, []);

  return (
    <DefaultContext.Provider value={{}}>
      <Outlet />
    </DefaultContext.Provider>
  )
}

const router = createBrowserRouter([
  {
    element: <DefaultProvider />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/step",
        children: [
          {
            index: true,
            element: <Navigate to="/step/one" replace />
          },
          {
            path: "one",
            element: <StepComponent next={"/step/two"} />
          },
          {
            path: "two",
            element: <StepComponent next={"/step/three"} />
          },
          {
            path: "three",
            element: <StepComponent next={"/step/four"} />
          },
          {
            path: "four",
            element: <StepComponent next={"/step/one"} />
          }
        ]
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
