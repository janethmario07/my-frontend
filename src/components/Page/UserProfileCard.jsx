import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function UserProfileCard({ UserPostCount, showOnlyMyPosts, setShowOnlyMyPosts }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfoString = localStorage.getItem("userInformation");
    if (userInfoString) {
      try {
        const parsedUser = JSON.parse(userInfoString);
        setUser(parsedUser);
      } catch (err) {
        console.error("Invalid user JSON:", err);
      }
    }
  }, []);

  return (
    <div className="max-w-xs mx-auto space-y-4 font-sans">
      {/* Show nothing if user is not yet loaded */}
      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-16 bg-gray-200" />
            <div className="flex flex-col items-center p-4 -mt-8">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-semibold border-4 border-white shadow">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div className="text-center mt-2">
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-600">
                  {user.designation} {user.company && `at - ${user.company}`}
                </p>
                <p className="text-sm text-gray-500">{user.city}, {user.state}</p>
              </div>
            </div>
          
          </div>

          {/* Connections & Filter */}
          <div className="bg-white rounded-lg shadow-md">
           <div className="p-4 border-b">
  <div className="flex justify-between items-center text-sm text-gray-600">
    <span>Total Post: {UserPostCount}</span>
    <span className="text-gray-500 text-xs">(posted by yourside)</span>
  </div>
</div>
            <div className="p-4">
              <div className="text-blue-600 font-semibold text-sm">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="showOnlyMyPosts"
                    checked={showOnlyMyPosts}
                    onChange={(e) => setShowOnlyMyPosts(e.target.checked)}
                  />
                  <label
                    htmlFor="showOnlyMyPosts"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Show only my posts
                  </label>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}