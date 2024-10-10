import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './components/Users.jsx';
import Login from './components/Login.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path:"/addCoffee",
    element: <AddCoffe></AddCoffe>
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffe></UpdateCoffe>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signIn',
    element: <Login></Login>
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  // {
  //   path:'/signUp',
  //   element:<SignUp></SignUp>
  // },
  // {
  //   path: '/signIn',
  //   element: <Login></Login>
  // },
  {
    path: '/users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/user')
  }


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

         <AuthProvider>
             <RouterProvider router={router} />
         </AuthProvider>
         
  </StrictMode>,
)
