
import Image from "next/image";

import "./About_work.scss";

export default function About_work() {
  return (
    <section className="about_work" id="rental">
      <div className="container_custom">
        <div className="work_content">
          <h3>How it work</h3>
          <p className="paragraf">
            With us you can rent a car on favorable terms
          </p>
        </div>

        <ul className="work_boxs">
          <li>
            <div className="box_img">
              <Image
                src="/svg/location.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
            <h4>Choose Location</h4>
            <p>
              You can pick up and leave the car in a city convenient for you.
            </p>
          </li>
          <li>
            <div className="box_img">
              <Image src="/images/data.png" alt="" width={45} height={45} />
            </div>

            <h4>Choice a Date</h4>
            <p>
               You can book a car at a time convenient for you.
            </p>
          </li>
          <li>
            <div className="box_img">
              <Image
                style={{ color: "#FEC31D", opacity: "1" }}
                src="/images/car.png"
                alt=""
                width={45}
                height={45}
              />
            </div>
            <h4>Choice a Car</h4>
            <p>
               The largest selection of sports, luxury, premium,
              econom category cars is only with us
            </p>
          </li>
        </ul>

        <div className="vector1">
          <Image src="/svg/vector1.svg" width={460} height={83} alt="vector" />
        </div>
        <div className="vector2">
          <Image src="/svg/vector2.svg" width={460} height={83} alt="vector" />
        </div>
      </div>
    </section>
  );
}
