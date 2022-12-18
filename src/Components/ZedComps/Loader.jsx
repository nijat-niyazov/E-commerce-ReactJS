import React, { useEffect } from 'react';

export default function LoadingSpinner() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 198, left: 0, behavior: 'smooth' });
  });

  return (
    <div
      className="spinner-container"
      style={{
        margin: '40px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="loading-spinner"></div>
    </div>
  );
}
