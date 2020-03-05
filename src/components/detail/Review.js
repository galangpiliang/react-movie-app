import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Review.scss";

export default function Review() {
  var Review = Array.from(Array(10)).map((a, td_i, arr) => (
    <div className="review-wrapper flex">
      <div className="avatar">
        <img src={require("../home/images/cast.jpg")} alt="" />
      </div>
      <div className="review">
        <h3>Name</h3>
        <div className="starts">
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
          <FontAwesomeIcon
            className="icon-logo"
            icon={["fa", "star-half-alt"]}
          />
          <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
          <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          eveniet at ipsam cumque illum quisquam laborum ex non repellat, eaque
          magnam pariatur quis vel nisi aliquam! Ipsum, ullam. Molestiae,
          labore?
        </p>
      </div>
    </div>
  ));

  return (
    <div className="Review">
      <div className="form flex">
        <div className="avatar">
          <img src={require("../home/images/cast.jpg")} alt="" />
        </div>
        <div className="review">
          <h3>Name</h3>
          <div className="starts">
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
            <FontAwesomeIcon
              className="icon-logo"
              icon={["fa", "star-half-alt"]}
            />
            <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
            <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
          </div>
          <textarea
            name=""
            id=""
            rows="5"
            placeholder="Leave a review"
          ></textarea>
        </div>
      </div>
      <div className="list">{Review}</div>
    </div>
  );
}
