import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Layout/Home/Home/Home';
import Login from './Layout/Login/Login';
import Signup from './Layout/Signup/Signup';
import AuthProvider from './providers/AuthProvider';
import CheckOut from './Layout/pages/CheckOut';
import Booking from './Layout/pages/Booking/Booking';
import PrivateRoute from './Layout/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Signup></Signup>
      },
      {
        path:'checkout/:id',
        element:<CheckOut></CheckOut>,
        loader:({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Booking></Booking></PrivateRoute>
      }
   
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-7xl mx-auto'>
<React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
</div>
)
