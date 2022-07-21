import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryAll from "./CategoryAll";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// // import './Categories.css';
// import './assets/css/bootstrap.min.css'
// import './assets/css/owl.carousel.min.css'
// import './assets/css/slicknav.css'
// import './assets/css/flaticon.css'
// import './assets/css/gijgo.css'
// import './assets/css/animate.min.css'
// import './assets/css/animated-headline.css'
// import './assets/css/magnific-popup.css'
// import './assets/css/fontawesome-all.min.css'
// import './assets/css/themify-icons.css'
// import './assets/css/slick.css'
// import './assets/css/nice-select.css'
// import './assets/css/style.css'
// import imgUrl1 from '../Categories/assets/img/gallery/gallery1.png'
// import imgUrl2 from '../Categories/assets/img/gallery/gallery2.png'
// import imgUrl5 from '../Categories/assets/img/gallery/gallery5.png'

const Categories = () => {
  const [categoriesAll, setcategoriesAll] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get("/ExerciseCategory");
      setcategoriesAll(data);
    };
    fetchCategory();
  }, []);

  return (
    <>
      <Row className="mt-5">
        <Col lg={12}>
          <div className="section-title">
            <h2>OUR Exercises</h2>
          </div>
        </Col>
      </Row>
      <Row className="g-4">
        {categoriesAll &&
          categoriesAll.map((category) => (
            <Col key={category._id} xl={4} lg={6} md={6} sm={6}>
              <CategoryAll category={category} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Categories;
