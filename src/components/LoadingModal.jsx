import React from 'react';

const LoadingModal = ({ isLoading }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 ${isLoading ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg p-8">
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
        <p className="text-center">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
