// import { useEffect, useState } from "react";
// import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  Row,
  Container,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";

const CategoryAll = ({ category }) => {
  return (
    <>
      <div className="gallery-area section-padding30">
        <div className="box snake mb-30">
          <div className="gallery-img big-img">
            <img src={category.categoryImg} alt="" />
          </div>
          <div className="overlay">
            <div className="overlay-content">
              {category.exercises.map((items, index) => (
                <div key={index}>
                  <p>{items.exercisesName}</p>
                </div>
              ))}
              <Link to={`/category/${category._id}`}>
                <i className="bi bi-plus"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryAll;
