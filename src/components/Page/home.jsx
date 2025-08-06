import { useEffect, useState } from "react";
import { toast } from "sonner";
import UserProfileCard from "./UserProfileCard.jsx";
import PostBox from "./PostBox.jsx";
import AdPostCard from "./AdPostCard.jsx";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const NewBill = () => {
//   const [posts, setPosts] = useState([]);
//     const [loggedInUserId, setLoggedInUserId] = useState(null);
//     const [UserPostCount, setUserPostCount] = useState(null);
// const [showOnlyMyPosts, setShowOnlyMyPosts] = useState(false);

//const fetchPosts = async () => {
//   const token = localStorage.getItem("token");
//   if (!token) return;

//   try {
//     const res = await axios.get("https://my-backend-55fe.onrender.com/api/v1/crud/all", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const allpost = res.data;
//     setPosts(allpost);
    
//     const userPosts = allpost.filter((post) => post.createdBy === loggedInUserId);
//     const count = userPosts.length;
//     localStorage.setItem("postCount", count); 
//     setUserPostCount(count); 
//   } catch (err) {
//     console.error("Failed to fetch posts", err);
//   }
// };

// useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     try {
//       const decoded = jwtDecode(token);
//       const id = decoded?.id || decoded?._id;

//       if (id) {
//         setLoggedInUserId(id);
//         const count = localStorage.getItem("postCount");
//         if (count !== null) {
//           setUserPostCount(parseInt(count));
//         }
//       } else {
//         console.warn("Token decoded but no user ID found");
//       }

//     } catch (error) {
//       console.error("Invalid token:", error);
//       localStorage.removeItem("token");
//     }
//   } else {
//     console.warn("No token found in localStorage");
//   }
// }, []);

// useEffect(() => {
//   if (loggedInUserId) {
//     fetchPosts(); // Only fetch when userId is available
//   }
// }, [loggedInUserId]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">hi
      {/* <div className="flex flex-col lg:flex-row gap-6 ">
        <div className="w-full lg:w-1/4 p-3">
          <UserProfileCard UserPostCount={UserPostCount}  showOnlyMyPosts={showOnlyMyPosts}
  setShowOnlyMyPosts={setShowOnlyMyPosts}/>
        </div>
        <div className="w-full lg:w-1/2 p-5 space-y-4">
          <PostBox onPostCreated={fetchPosts}  />
          <AdPostCard
  posts={
    showOnlyMyPosts
      ? posts.filter((post) => post.createdBy === loggedInUserId)
      : posts
  }
  loggedInUserId={loggedInUserId}
  onPostCreated={fetchPosts}
/>
        </div>
      </div> */}
    </div>
  );
};

export default NewBill;