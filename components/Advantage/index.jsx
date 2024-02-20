// import CarouselCustom from "../Sliders";
import CustomCarousel from "../Sliders";

import "./Advantage.scss";

export default function Advantage() {
  return (
    <section className="advantage" id="testmonial">
      <div className="container_custom addvan">
        <div className="advantage_title">
          <h3>Trusted by Thousands of Happy Customer</h3>
          <p>
            A high-performing web-based car rental system for any rent-a-car
            company and website
          </p>
        </div>
        
        <CustomCarousel/>
      </div>
    </section>
  );
}
