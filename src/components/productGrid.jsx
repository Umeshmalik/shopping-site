import React from "react";
import { Link } from "react-router-dom";
import Aromas from "../assets/Aromas.mp4";
import "./productGrid.css";

const productGrid = () => {
  return (
    <>
      <div className="grid_container">
        <div className="first_grid">
          <div className="first_grid_left"></div>
          <div className="product_3">
            <Link to="/collection">
              <div style={{ height: "300px" }}>
                <div className="product_name">
                  <p>PERFUME OIL</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="product_4">
            <Link to="/collection">
              <div style={{ height: "300px" }}>
                <div className="product_name">
                  <p>PERFUME OIL</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="second_grid">
          <div className="second_grid_left">
            <video src={Aromas} autoPlay muted loop className="my_video" />
          </div>

          <div className="second_grid_right">
            <div style={{ height: "200px" }}>
              <h4>OUR STORY</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                semper ipsum neque, nec maximus ligula varius quis. Aliquam
                congue lectus at mauris maximus, sit amet porta purus
                pellentesque. Duis et convallis felis. Ut finibus pharetra quam,
                eu tincidunt metus faucibus a. Cras a leo vulputate, vehicula
                lorem quis, auctor felis. Etiam aliquet sem nec nibh efficitur,
                sed facilisis ipsum venenatis. Morbi elementum, justo at egestas
                luctus, ligula ex auctor odio, vitae elementum odio est a dolor.
                Sed elementum ut nisl ac rhoncus.{" "}
              </p>

              <p>
                Nulla iaculis in risus at varius. In tempus enim arcu. Aliquam
                eget tempor sem, vel dapibus nulla. Nam hendrerit in nunc in
                dignissim. Proin lacus risus, facilisis eu facilisis nec, varius
                eu dui. Nulla orci elit, condimentum at tempus nec, accumsan ac
                ligula. Aliquam a neque ex. Quisque id purus eget lorem mollis
                lacinia eu et nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productGrid;
