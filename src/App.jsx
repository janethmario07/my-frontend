import {
  Route,
  Routes,
  useLocation
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import { route1 } from "./utils/AppRoutes";
import ProtectedRoute from "./utils/ProtectedRoute";
import { Toaster } from "sonner";

function App() {
  const location = useLocation();
  const hideSidebarRoutes = ["/"]; // list of routes where Sidebar should be hidden
  const hideHeaderRoutes = ["/", ""];
  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
    <Toaster position="top-right" richColors/>
      {!shouldHideHeader && <Header />}
      {/* <div
        className={`flex h-screen ${
          !shouldHideSidebar ? "pl-[50px]  lg:pl-[220px]" : ""
        }`}
      > */}
        {/* {!shouldHideSidebar && <Sidebar />} */}
        <main className="flex-1 overflow-y-auto p-4 bg-white overflow-auto">
          <Routes>
            {route1.map((ele) => {
              if (ele.path === "/") {
                return (
                  <Route path={ele.path} element={ele.element} key={ele.id} />
                );
              }
              return (
                <Route
                  path={ele.path}
                  key={ele.id}
                  element={<ProtectedRoute>{ele.element}</ProtectedRoute>}
                />
              );
            })}
          </Routes>
        </main>
      {/* </div> */}
    </>
  );
}

export default App;
