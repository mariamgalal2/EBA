import React, { useRef, useEffect } from 'react';
import './VideoBanner.css';

export default function VideoBanner() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5; // 🔥 Speed boost!
    }
  }, []);

  return (
    <section className="videoSplitSection">
      <div className="textColumn">
        <h1 className="heroTitle">Join the Egyptian Blockchain Association</h1>
        <p className="heroSubtitle">Empowering Egypt’s future through Web3 innovation.</p>
      </div>
      <div className="videoColumn">
  <div className="framedVideoContainer">
    <video
      ref={videoRef}
      className="framedVideo"
      src="/assets/blockchain.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
</div>

    </section>
  );
}
