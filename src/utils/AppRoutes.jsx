
 import Login from "../components/login/Login";
 import Home from "../components/page/Home";
 import UpdateProfile from "../components/login/UpdateProfile";


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
