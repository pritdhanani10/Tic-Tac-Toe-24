import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { registeraction } from "./components/RegisterForm.jsx"
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { uploadbook } from './components/Upload.jsx';
import Upload from './components/Upload.jsx';
import { Provider } from "react-redux";
import {store} from "./store/index.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/index.js";
import Logout from './components/Logout.jsx';
import Items from './components/Items.jsx';
const router=createBrowserRouter(
  [{
    path: "/",
    element: <App/>, 
    children:[
      {
        path:"/upload",
        element:<Upload/>,
        action:uploadbook
      },
      {
        path:"/",
        element:<Items/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>

  },
  {
    path:"/register",
    element:<Register/>,
    action:registeraction
  }
  ,
  {
    path:"/logout",
    element:<Logout/>
  }
  ]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
  
      </PersistGate>
    </Provider>
  </StrictMode>
)
