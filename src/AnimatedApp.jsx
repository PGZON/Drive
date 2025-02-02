import React, { useState, useEffect } from 'react';
import './App.css';

function AnimatedApp() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoadingComplete(true);
    }, 3000); // 3 seconds delay for demonstration
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      // Redirect to Drive after 3 seconds of loading
      window.location.href = "https://drive.google.com/drive/folders/1IXxbMOwnqnXvhLXb9RWxABt4bqBOMa2_?usp=sharing";
    }
  }, [loadingComplete]);

  return (
    <div className="App">
      <div className="ascii-art">
        <div className="text">
          <span className="letter letter-t">T</span>
          <span className="letter letter-y">Y</span>
          <span className="letter letter-a">A</span>
        </div>
      </div>
    </div>
  );
}

export default AnimatedApp;
