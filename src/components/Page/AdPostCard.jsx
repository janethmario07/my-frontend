import {React,useState} from "react";
import axios from "axios";
import { toast } from "sonner";

export default function AdPostCard({ posts, loggedInUserId, onPostCreated }) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [editContent, setEditContent] = useState("");
const handleEdit = (post) => {
  console.log(post);
    setSelectedPost(post);
    setEditContent(post.content);
        setSelectedPostId(post._id);

    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
  if (!confirmDelete) return;

  const token = localStorage.getItem("token");

  try {
    await axios.delete(`https://my-backend-55fe.onrender.com/api/v1/crud/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success("Post deleted successfully");

    if (onPostCreated) onPostCreated(); // To refresh posts after deletion

  } catch (error) {
    console.error("Error deleting post:", error);
    toast.error("Failed to delete post");
  }
  };
const handleUpdate = async (e) => {
  e.preventDefault();
  const token = localStorage.getItem("token");

  try {
    await axios.put(
      `https://my-backend-55fe.onrender.com/api/v1/crud/update/${selectedPostId}`,
      { content: editContent },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

   

    // ✅ Reset modal and states
    setEditContent('');
    setSelectedPostId(null);
    setIsEditing(false);
    onPostCreated(); // 🔁 Refresh the posts
 toast.success("Post updated successfully");
  } catch (error) {
    console.error('Error updating post:', error);
    toast.error("Failed to update post", error);
  }
};


  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4 max-w-2xl mx-auto">
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts available.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            className="bg-white shadow-md p-4 mb-4 rounded border border-gray-200 relative"
          >
            {/* Icons at top-right */}
            {post.createdBy === loggedInUserId && (
              <div className="absolute top-2 right-2 flex gap-2 text-gray-600">
                <button onClick={() => handleEdit(post)} title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(post._id)} title="Delete">
                  🗑️
                </button>
              </div>
            )}

            {/* Author */}
            <div className="mb-2">
              <div className="font-bold text-gray-800">{post.createdByName}</div>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-700 mb-2">{post.content}</p>

            {/* Date */}
            <p className="text-sm text-gray-500 mt-2">
              Posted on: {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}


        {/* ✨ Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 space-y-4 shadow-lg relative">
            <h2 className="text-xl font-semibold text-gray-800">Edit Post</h2>
                <form onSubmit={handleUpdate}>

            <textarea
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={4}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            ></textarea>
            <div className="flex justify-end gap-2 mt-4">
              <button
                // onClick={handleUpdate}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => {
                  setIsEditing(false);
                  setSelectedPost(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
