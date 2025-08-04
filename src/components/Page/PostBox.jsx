import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast } from "sonner";

export default function PostBox({onPostCreated }) {
    const [showModal, setShowModal] = useState(false);
    const [post,setPost]=useState('');
    
    const [content, setContent] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
        const token = localStorage.getItem("token");console.log(token);

    try {
      await axios.post('https://my-backend-55fe.onrender.com/api/v1/crud/create',{ content }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
            setContent('');
      setSuccess(true);
      setShowModal(false);
       onPostCreated();    
          toast.success("Post Created Successfully");
          setSuccess(false);

    } catch (error) {
      console.error('Error posting:', error);
    }
  };


  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 space-y-4 max-w-2xl mx-auto">
        {/* Top Row */}
     <div className="flex flex-wrap items-center gap-2 p-2 sm:p-3 md:p-4 bg-white rounded-md shadow-sm w-full max-w-full">
  {/* Profile Circle */}
  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-semibold flex-shrink-0">
    J
  </div>

  {/* Responsive Input */}
  <div className="flex-1 min-w-[200px]">
    <input
      type="text"
      placeholder="Start a post"
      className="w-full bg-gray-100 rounded-full px-4 py-2 focus:outline-none cursor-pointer text-sm sm:text-base"
      onClick={() => setShowModal(true)}
      readOnly
    />
  </div>
</div>



      </div>

      {/* Modal */}
      {showModal && (
<div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-white rounded-lg w-full max-w-lg p-6 space-y-4 shadow-lg relative">
    <h2 className="text-xl font-semibold text-gray-800">Create a Post</h2>

    <form onSubmit={handleSubmit}>
      <textarea
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        rows={4}
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>

      <div className="flex justify-end gap-2 mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Post
        </button>
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded transition"
        >
          Cancel
        </button>
      </div>

      {success && (
        <p className="text-green-600 mt-2 text-sm">Post created successfully!</p>
      )}
    </form>
  </div>
</div>

      )}
    </>
  );
}