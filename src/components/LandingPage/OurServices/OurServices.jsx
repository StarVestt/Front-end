import React from "react";
import "./OurServices.css";

const OurServices = () => {
  return (
    <>
      <div className="m-os">
        <div className="section-header">
          <h2 style={{ color: "white" }}>Our services</h2>
        </div>
        <div className="m-os-c">
          <div className="m-card">
            {/* <a href="/"> */}
            <div
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/Reviews.jpg")`,
                backgroundPosition:"60% 0%"
              }}
            >
              <h5 className="m-card-h5">Reviews</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
              {/* <a href="/" className="m-card-a">Explore More</a> */}
            </div>
            {/* </a> */}
          </div>
          <div className="m-card">
            <div
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/RoadMap.jpg")`,
              }}
            >
              <h5 className="m-card-h5">RoadMap</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
            </div>
          </div>
          <div className="m-card">
            <div
              className="m-card-comp"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0,0,5,1) 8%, rgba(249,249,249,0) 71%, rgba(255,255,255,1) 100%), url("../../../../assests/landingPage/Blog.jpg")`,
              }}
            >
              <h5 className="m-card-h5">Blog</h5>
              <p className="m-card-p">
                Lorem ipsum, dolor sit amet vivek is consectetur adipisicing
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
