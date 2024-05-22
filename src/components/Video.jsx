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
      scale = scale < 0.5 ? 0.5 : scale > 1 ? 1 : scale;

      video.style.transform = `scale(${scale})`;

      let textTrans = bottom - innerHeight;
      const textHeaderleft = document.querySelector(`.text_header_left`);
      const textHeaderright = document.querySelector(`.text_header_right`);

      textHeaderleft.style.transform = `translateX(${-textTrans}px)`;
      textHeaderright.style.transform = `translateX(${textTrans}px)`;
    }
  }, []);
  return (
    <section id="video">
      <div className="shim"></div>
      <div className="sticky">
        <video
          autoPlay
          muted
          loop
          playsInline
          src="https://framerusercontent.com/assets/BcIElVBzSD9P1ht5PhehnVyzTA.mp4"
        ></video>
        <div className="video_text_overlay">
          <h2 className="text_header_left">SHOW</h2>
          <h2 className="text_header_right">CASE</h2>
        </div>
      </div>
    </section>
  );
};

export default Video;
