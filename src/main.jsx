import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {AuthLayout} from './components/index.js'
import {AddPost,AllPost,EditPost,Home,Login,Post,SignUp} from "./pages/index.js"

const router =createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPost/>
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        }
      ]
    }     
  ]
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <RouterProvider router={router}/>
  </Provider>,
)
