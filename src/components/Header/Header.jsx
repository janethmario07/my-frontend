import { useContext,useEffect,useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider"; // Correct context import
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logout } = useContext(AuthContext); // ✅ use AuthContext here
  const navigate = useNavigate();
    const [userdata, setUserdata] = useState(null);
  
 useEffect(() => {
    const userInfoString = localStorage.getItem("userInformation");
    if (userInfoString) {
      try {
        const parsedUser = JSON.parse(userInfoString);
        setUserdata(parsedUser);
      } catch (err) {
        console.error("Invalid user JSON:", err);
      }
    }
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
  };
const updateProfile=()=>{
  navigate("/updateProfile");
}
  return (
    <header className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-blue-600">CIAAN CYBER TECH PRIVATE LIMITED</h1>

      <div className="flex items-center gap-4" >
{user && userdata && (
  <span className="text-gray-700 cursor-pointer" onClick={updateProfile}>
    Hi, {userdata.name}
  </span>
)}        <button
          onClick={handleLogout}
          className=""
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;