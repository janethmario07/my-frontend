
 import Login from "../components/Login/Login";
 import Home from "../components/Page/home";
 import UpdateProfile from "../components/Login/UpdateProfile";


export const route1 = [
  {
    id: 1,
    path: "/",
    element: <Login />,
  },
   {
    id: 2,
    path: "/home",
    element: <Home />,
  },
   {
    id: 2,
    path: "/updateProfile",
    element: <UpdateProfile />,
  },
];
