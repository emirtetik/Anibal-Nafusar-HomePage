"use client"
import { useEffect, useRef, useState } from 'react';

const Video = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video && isFirstRender) { 
      const handleVideoEnd = () => {
        video.parentNode?.removeChild(video);
      };

      video.addEventListener('ended', handleVideoEnd);

      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }

  }, [isFirstRender]); 
 
   useEffect(() => {
    setIsFirstRender(false);
   }, [])
   
  return (
    isFirstRender && ( 
      <div>
        <video ref={videoRef} src="/assets/logov.mp4" autoPlay muted style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '110%', objectFit: 'cover', zIndex:"100"  }} />
      </div>
    )
  );
}

export default Video;
