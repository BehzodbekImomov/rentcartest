import Image from "next/image";
import PhoneIcon from '@mui/icons-material/Phone';
import DiscountIcon from '@mui/icons-material/Discount';
import PlaceIcon from '@mui/icons-material/Place';
import "./Informations.scss";

export default function Informations() {
  return (
    <section className="informations" id="choose">
      <div className="container_custom info">
        <div className="info_title">
          <h3>Why choose us</h3>
          <p>
            A high-performing web-based car rental system for any rent-a-car
            company and website
          </p>
        </div>
        <div className="info_content">
          <Image src="/images/info_box.png" width={566} height={528} alt="" />
          <ul>
            <li>
              <div className="info_box"><PhoneIcon sx={{color:"var(--white)"}}/></div>
              <div className="info_desc">
                <h4>Customer Support</h4>
                <p>
                With us you can rent a car on favorable terms
                </p>
              </div>
            </li>
            <li>
              <div className="info_box"><DiscountIcon sx={{color:"var(--white)"}}/></div>
              <div className="info_desc">
                <h4>Best Price Guarantted</h4>
                <p>
                  Aliquam erat volutpat. Integer malesuada turpis id fringilla
                  suscipit. Maecenas ultrices.
                </p>
              </div>
            </li>
            <li>
              <div className="info_box"><PlaceIcon sx={{color:"var(--white)"}}/></div>
              
              <div className="info_desc">
                <h4>Many Location</h4>
                <p>
                We have many car delivery locations
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
