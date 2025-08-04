import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import { useNavigate } from "react-router-dom";

export default function UpdateProfile() {
     const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    city: "",
    state: "",
    company: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [userid, setUserid] = useState("");

  // Load user data from localStorage
  useEffect(() => {
    const userInfo = localStorage.getItem("userInformation");
    if (userInfo) {
      const user = JSON.parse(userInfo);
      setUserid(user._id);
      setFormData({
        name: user.name || "",
        email: user.email || "",
        designation: user.designation || "",
        city: user.city || "",
        state: user.state || "",
        company: user.company || "",
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(`https://my-backend-55fe.onrender.com/api/v1/crud/profileUpdate/${userid}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });

      // Save updated user info to localStorage
      localStorage.setItem("userInformation", JSON.stringify(res.data.user));
      setSuccess("Profile updated successfully!");
     navigate("/home");
        toast.success("Your Profile has been Updated successfully");  
    } catch (err) {
      setError("Update failed.");
    }
  };
 
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">     
    <h2 className="text-lg font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "designation", "company", "city", "state"].map(field => (
          <div key={field}>
            <label className="block text-sm font-medium">{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md" onClick={handleSubmit}
        >
          Update Profile
        </button>

        {/* {success && <p className="text-green-600">{success}</p>} */}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}