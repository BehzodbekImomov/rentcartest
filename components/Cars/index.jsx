"use client";
import Tabs from "../Tabs";


import "./Cars.scss";


const Cars = () => {
 

  return (
    <section className="cars" id="brands">
      <div className="container_custom">
        <div className="cars_content">
          <h3>Most popular car rental deals</h3>
          <p>
          A high-performing car rental system and website in AE
          </p>
        </div>

        <Tabs />
      </div>
    </section>
  );
};

export default Cars;
