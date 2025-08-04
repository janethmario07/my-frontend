import React, { useState } from 'react';

export default function PostPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      {/* Top Bar */}
        <UserProfileCard />
      <div className="w-full max-w-5xl bg-white shadow-sm p-4 flex justify-between items-center rounded-md mb-4">
        <div className="text-xl font-bold text-blue-600">LinkedIn Clone</div>
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-blue-500">Home</button>
          <button className="text-gray-600 hover:text-blue-500">My Network</button>
          <button className="text-gray-600 hover:text-blue-500">Jobs</button>
          <button className="text-gray-600 hover:text-blue-500">Messaging</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-4">
        {/* Start a Post */}
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center text-xl font-bold">J</div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100"
          >
            Start a post
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <h2 className="text-xl font-semibold mb-4">Create a Post</h2>
            <textarea
              className="w-full h-40 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring resize-none"
              placeholder="What do you want to talk about?"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="mr-2 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}