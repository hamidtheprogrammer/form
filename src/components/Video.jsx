import React, { useEffect } from "react";

const Video = () => {
  useEffect(() => {
    const video = document.querySelector(`video`);
    const videoSection = document.querySelector(`#video`);
    window.addEventListener("scroll", () => {
      animateVideo();
    });

    function animateVideo() {
      const { top, bottom } = videoSection.getBoundingClientRect();
      let scale = 1 - (bottom - window.innerHeight) * 0.0004;
      //   console.log(bottom);
      scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;

      video.style.transform = `scale(${scale})`;
    }
  }, []);
  return (
    <section id="video">
      <div className="sticky">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://framerusercontent.com/assets/BcIElVBzSD9P1ht5PhehnVyzTA.mp4"
        ></video>
      </div>
    </section>
  );
};

export default Video;
