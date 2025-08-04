
 import Login from "../Components/login/Login";
 import Home from "../Components/page/Home";
 import UpdateProfile from "../Components/login/UpdateProfile";


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
