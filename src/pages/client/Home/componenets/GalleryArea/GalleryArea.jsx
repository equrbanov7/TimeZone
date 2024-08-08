import React from "react";
import "./GalleryArea.css";

function GalleryArea() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <div className="cardImg">
            <img
              className="img-fluid"
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-3">
          <div className="cardImg">
            <img
              className="img-fluid"
              src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp"
              alt=""
            />
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-12">
              <div className="cardImg">
                <img
                  className="img-fluid"
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12">
              <div className="cardImg mt-4">
                <img
                  className="img-fluid"
                  src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryArea;
