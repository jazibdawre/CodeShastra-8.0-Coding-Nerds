import React from "react";
import Button from "../common/Button";
import "./appRating.css";

const getIosPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="app-rating-icon"
    />
  );
};

const getAndroidPrefix = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="app-rating-icon"
    />
  );
};
const AppRating = () => {
  return (
    <div className="max-width app-rating flex" style={{color:"white"}}>
      <div className="flex app-rating-block flex-col">
        <div>
          <div className="app-rating-value flex flex-col">
            4.8
            <div style={{marginTop:'10px'}}></div>
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            app store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getIosPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="flex app-rating-block flex-col">
        <div>
          <div className="app-rating-value flex flex-col">
            4.7
            <div style={{marginTop:"10px"}}></div>
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="app-rating-stars"
            />
          </div>
          <div className="app-rating-platform">
            play store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            prefix={getAndroidPrefix()}
            buttonText="Download the app"
            customClass="app-rating-button"
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
