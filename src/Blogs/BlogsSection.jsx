import React from "react";
import "./BlogsSection.css";

import blog2 from "../assets/blogs/blog-2.jpg";
import blog3 from "../assets/blogs/blog-3.jpg";
import blog4 from "../assets/blogs/blog-4.jpg";
import { AiFillEye, AiOutlineComment } from "react-icons/ai";
import { Link } from "react-router-dom";


const BlogsSection = () => {
  return (
    <div className="container">
      <h2 className=" blogs-heading section_title pt-5 mt-5">Blogs</h2>
      <div className="row justify-content-between ">
        <div className=" px-3 py-3 my-1  blog_card col-9 col-sm-6 col-md-4">
        <Link to="/Article" style={{color:'black'}}>
          <div className="blog_card_img position-relative">
            <img src={blog2} className="img-fluid pl-4 pt-2  d-block" alt="" />
            <div className="card__img__text text-center position-absolute">
              <h2 className="text-white m-0"> 25 </h2>
              <p className="text-white text-uppercase m-0"> jan </p>
            </div>
          </div>
          <div className="card-body text-left">
            <h6 className="card-title "> Corticosteroids Pharmacology </h6>
            <p className="card-text text-muted">
               Corticosteroids are among the most
              widely prescribed drug classes – used to treat a wide variety of
              allergic, inflammatory, and autoimmune disorders, as well as a
              range of malignancies.
            </p>
          </div>
          </Link>
          <ul className="list-group  list-group-flush">
            <li className="list-group-item border-top d-flex text-left">
              <a href="#" className="text-muted text-decoration-none mr-5">
                <AiOutlineComment
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 500 </p>
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <AiFillEye
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 1200 </p>
              </a>
            </li>
          </ul>
        </div>
        <div className=" px-3 py-3 my-1  blog_card col-9 col-sm-6 col-md-4">
        <Link to="/Article2" style={{color:'black'}}>
          <div className="blog_card_img position-relative">
            <img src={blog3} className="img-fluid pl-4 pt-2  d-block" alt="" />
            <div className="card__img__text text-center position-absolute">
              <h2 className="text-white m-0"> 11 </h2>
              <p className="text-white text-uppercase m-0"> feb </p>
            </div>
          </div>
          <div className="card-body text-left">
            <h6 className="card-title "> Corticosteroids Pharmacology </h6>
            <p className="card-text text-muted">
               Corticosteroids are among the most
              widely prescribed drug classes – used to treat a wide variety of
              allergic and inflammatory. and autoimmune disorders, as well as a
              range of malignancies.
            </p>
          </div>
          </Link>
          <ul className="list-group  list-group-flush">
            <li className="list-group-item border-top d-flex text-left">
              <a href="#" className="text-muted text-decoration-none mr-5">
                <AiOutlineComment
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 300 </p>
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <AiFillEye
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 500 </p>
              </a>
            </li>
          </ul>
        </div>
        <div className=" px-3 py-3 my-1  blog_card col-9 col-sm-6 col-md-4">
        <Link to="Article3" style={{color:'black'}}>
          <div className="blog_card_img position-relative">
            <img src={blog4} className="img-fluid pl-4 pt-2  d-block" alt="" />
            <div className="card__img__text text-center position-absolute">
              <h2 className="text-white m-0"> 20 </h2>
              <p className="text-white text-uppercase m-0"> Dec </p>
            </div>
          </div>
          <div className="card-body text-left">
            <h6 className="card-title "> Corticosteroids Pharmacology </h6>
            <p className="card-text text-muted">
               Corticosteroids are among the most
              widely prescribed drug classes – used to treat a wide variety of
              allergic, inflammatory, and autoimmune disorders, as well as a
              range of malignancies.
            </p>
          </div>
          </Link>
          <ul className="list-group  list-group-flush">
            <li className="list-group-item border-top d-flex text-left">
              <a href="#" className="text-muted text-decoration-none mr-5">
                <AiOutlineComment
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 250 </p>
              </a>
              <a href="#" className="text-muted text-decoration-none">
                <AiFillEye
                  style={{ color: "var(--main-color)", fontSize: "20px" }}
                />
                <p className="text-muted d-inline"> 40 </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
