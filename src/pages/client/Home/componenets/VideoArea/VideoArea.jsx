import React from "react";
import "./VideoArea.css";

function VideoArea() {
  return (
    <div class="video-area">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="video-wrap">
              <div class="play-btn ">
                <a
                  class="popup-video"
                  href="https://preview.colorlib.com/theme/timezone/assets/img/gallery/sectin_bg1.png.webp"
                >
                  <h1>+</h1>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="thumb-content-box">
          <div class="thumb-content">
            <h3>
              Next Video <span>-></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoArea;
