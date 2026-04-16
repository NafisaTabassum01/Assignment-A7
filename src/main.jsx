import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from './Layout/RootLayout';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Banner from './Component/Banner/Banner';
import HomePage from './Pages/HomePage/HomePage';
import FriendDetails from './Pages/FriendDetails/FriendDetails';
import TimeLine from './Pages/TimeLine/TimeLine';
import TimeLineContext from './Context/TimeLineContext';
import Charts from './Pages/Charts/Charts';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        element: <HomePage></HomePage>
      },
      {
        path:"/friendDetails/:FriendId",
        element: <FriendDetails></FriendDetails>,
        loader: ()=> fetch("/data.json")
      },
      {
        path:"/timeLine",
        element: <TimeLine></TimeLine>
      },
      {
        path:"/charts",
        element: <Charts></Charts>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */} <TimeLineContext>
      <RouterProvider router={router} />
      </TimeLineContext>

  </StrictMode>,
)
