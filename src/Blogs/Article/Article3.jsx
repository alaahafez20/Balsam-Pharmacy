import React from "react";

import blog4 from "../../assets/blogs/blog-4.jpg";

import { AiFillEye, AiOutlineComment } from "react-icons/ai";

import "./Article.css";
const Article3 = () => {
  return (
    <div className="container">
      <img src={blog4} className="blogImg mt-5 pt-5" alt="" />
      <div className="blogPara mt-5 text-center">
        <i className="text-muted m-4">Corticosteroids Pharmacology</i>
        <p className="mt-4">
          Corticosteroids are among the most widely prescribed drug classes –
          used to treat a wide variety of allergic, inflammatory, and autoimmune
          disorders, as well as a range of malignancies.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          similique ad consectetur, earum aliquam quidem suscipit odio tempore
          itaque sunt nemo facere soluta perferendis! Maxime ipsa architecto vel
          repudiandae mollitia dolor voluptates deserunt! In quae ipsum pariatur
          autem alias voluptas porro est provident eveniet, molestiae quod fuga
          impedit beatae, magnam possimus laboriosam tenetur! Ullam laboriosam
          cum repudiandae magni? Fugiat id dolorem cum temporibus nisi ea
          officia minus, iure tempora laborum sint sequi corporis obcaecati
          minima accusantium perferendis nesciunt error. Facere, optio rerum.
          Saepe sunt voluptatibus, reiciendis facilis perferendis commodi quia
          laborum placeat iure vero ipsam aliquid tempore necessitatibus in
          dolore distinctio. Adipisci quisquam sunt, repellendus repellat nisi
          dicta omnis distinctio voluptas ipsa odio ex natus tempore vitae
          recusandae dolores consequuntur inventore placeat ad? Magnam maxime
          ipsum aperiam id minus repellendus iure totam nisi doloremque
          necessitatibus beatae alias quae officiis.
        </p>
        <ul className="list-group mb-3 mt-5 list-group-flush">
          <li className="list-group-item border-top d-flex text-left">
            <a href="#" className="text-muted text-decoration-none mr-5">
              <AiOutlineComment
                style={{ color: "var(--main-color)", fontSize: "20px" }}
              />
              <p className="text-muted d-inline"> 40 </p>
            </a>
            <a href="#" className="text-muted text-decoration-none">
              <AiFillEye
                style={{ color: "var(--main-color)", fontSize: "20px" }}
              />
              <p className="text-muted d-inline"> 250 </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Article3;
