"use client"
import { useEffect, useRef } from 'react';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleVideoEnd = () => {
        video.parentNode?.removeChild(video);
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <div>
       <video ref={videoRef} src="/assets/logov.mp4" autoPlay muted style={{ position: 'fixed', width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default Video;

