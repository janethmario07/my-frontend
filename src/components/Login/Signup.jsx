import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Login from "./login";
import { toast } from "sonner";

const Signup = () => {
    const [isSignin, setisSignin] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    designation: "",
    company: "",
    state: "",
    city: "",
  });

  const { register, isLoading, error } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await register(formData);
    if(success) {
                toast.success("Your account has been created successfully");
      
        setisSignin(true);

    }
  };
const opensignin=async()=>{
  setisSignin(true);
}
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
     {!isSignin &&    <div className="bg-white shadow-md rounded-lg flex flex-col md:flex-row max-w-2xl w-full overflow-hidden">
        <div className="w-full p-4">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">LinkedIn</h2>
          <h3 className="text-2xl font-bold mb-4">Create your account</h3>
          <p className="text-sm text-gray-600 mb-6">
            Already have an account?{" "}
            <button className="text-blue-600 hover:underline" onClick={opensignin}>
              Sign in
            </button>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Software Developer"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Ahaguru Education Pvt Ltd"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Tamil Nadu"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Chennai"
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
            >
              {isLoading ? "Creating account..." : "Create your account"}
            </button>
          </form>
        </div>
      </div>}
       {isSignin  && <Login />}
    </section>
  );
};

export default Signup;
