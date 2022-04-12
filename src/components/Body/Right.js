import React from "react";
import call from "../../images/right-call.png";
import CarouselSlide from "../CarouselSlide/CarouselSlide.js";
import ImageUpload from "../ImageUpload/ImageUpload.jsx";
import Slidebar from "../Slidebar/Slidebar.jsx";
import "./Right.css";
const Right = () => {
  return (
    <div className="right-content">
      <div className="margin_right">
        <div className="d-flex align-items-center justify-content-start right-content-role">
          <img src={call} alt="" />
          <h2>
            Get in touch to discuss your project, request a quote or even just
            to pick our brains.
          </h2>
        </div>
        <div className="mt-5 mb-3">
          <h3>1. Tell us about your company</h3>
          <form>
            <input
              className="input-size1"
              type="text"
              placeholder="Your Name *"
            />
            <div>
              <input
                className="input-size input-size2"
                type="text"
                placeholder="Your Name *"
              />
              <input
                className="input-size"
                type="text"
                placeholder="Your Name *"
              />
            </div>
            <div>
              <select
                className="input-size input-size2 select_option"
                name="cars"
                id="cars"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <select
                className="input-size select_option"
                name="cars"
                id="cars"
              >
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>

            <input
              className="input-size1"
              type="text"
              placeholder="Your Name *"
            />
            <input
              className="input-size1"
              type="text"
              placeholder="Your Name *"
            />
          </form>
        </div>
        <div className="mt-5">
          <h4>2. What are you looking to work on?</h4>
          <textarea
            className="input-size1"
            placeholder="Describe your project Brief *"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <p className="mt-2 mb-5">What’s your Budget ?</p>
          <Slidebar />
          <ImageUpload />
        </div>
        <h4 className="my-5">
          3. Schedule a call with our tech expert. Get a detailed
          <br />
          <span className="ms-4">tech consultation for free!</span>
        </h4>
        <div className="d-flex">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input checkbox_input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              60 Min Meeting
            </label>
          </div>
          <p className="text-white ms-5">Select a Day</p>
        </div>
        <div className="CarouselSlide">
          <CarouselSlide />
        </div>
        <div className="d-flex right-content-role-last">
          <p className="text-white">Schedule Meeting :</p>
          <select className="select_option select_time" name="cars" id="cars">
            <option value="time">11 : 00 am - 12 : 00 pm</option>
            <option value="time">11 : 00 am - 12 : 00 pm</option>
            <option value="time">11 : 00 am - 12 : 00 pm</option>
            <option value="time">11 : 00 am - 12 : 00 pm</option>
            <option value="time">11 : 00 am - 12 : 00 pm</option>
          </select>
        </div>
        <button className="submit_btn">Submit</button>
      </div>
    </div>
  );
};

export default Right;
