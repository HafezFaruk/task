import React from "react";
import logo from "../../images/upload.jpeg";
import "./ImageUpload.css";
const ImageUpload = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
    >
      <div className="">
        <div className="upload-box">
          <span className="img">
            <img src={logo} alt="" />
          </span>
          <span className="drag">Drag or browse your project brief</span>

          <input
            type="file"
            placeholder="Drag or browse your project brief"
            id=""
          />
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;