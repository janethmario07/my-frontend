import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom'; 
import Signup from './Signup'; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate(); 
  const [isSignup, setisSignup] = useState(false);

  const { login, isLoading, error } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const success = await login(formData); 
  console.log(success);
  if(success==true) {
    navigate("/home");
  }
};
const opensignup=async()=>{
  setisSignup(true);
}
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {!isSignup && <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-2xl w-full overflow-hidden">
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">LinkedIn123</h2>
          <h3 className="text-2xl font-bold mb-4">Welcome back</h3>
          <p className="text-sm text-gray-600 mb-6">
            Welcome to your professional community?{" "}
            <a onClick={opensignup} className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>

        <form onSubmit={handleSubmit} className="space-y-4">
  <div>
    <label className="block mb-1 text-sm font-medium">Email</label>
    <input
      type="email"
      name="username"
      value={formData.username}
      onChange={(e) =>
        setFormData({ ...formData, username: e.target.value })
      }
      className="w-full px-4 py-2 border rounded-md"
      placeholder="name@company.com"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Password</label>
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={(e) =>
        setFormData({ ...formData, password: e.target.value })
      }
      className="w-full px-4 py-2 border rounded-md"
      placeholder="••••••••"
    />
  </div>

  {error && <p className="text-red-600 text-sm">{error}</p>}

  <button
    type="submit"
    disabled={isLoading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
  >
    {isLoading ? "Signing in..." : "Sign in to your account"}
  </button>
</form>



        </div>
      </div> }
      {isSignup && <Signup />}
    </section>
  );
};

export default Login;