import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";
import LanguageChanger from "../LanguageChanger";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container_custom foot">
        <div className="foot_content">
          <ul>
            <li>
              <Link href="#">
                <Image
                  src="/images/logo.png"
                  width={73}
                  height={33}
                  alt="logo"
                />
              </Link>
              <p>Our goal is to make your dream come true</p>
              <div className="network">
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/facebook.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/twitter.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
                <a
                  href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                  target="_blank"
                >
                  <Image
                    src="/svg/instagram.svg"
                    width={53}
                    height={53}
                    alt="logo"
                  />
                </a>
              </div>
            </li>
            <li>
              <h4>About</h4>
              <Link href="#">How it works </Link>
            </li>

            <li>
              <h4>Socials</h4>

              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="https://www.instagram.com/portofino_luxurycarrental?igsh=aWpoeHJlaG5mYTk2"
                target="_blank"
              >
                Facebook
              </Link>
            </li>
            <li className="btn_lang">
              <LanguageChanger />
            </li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="food_end">
          <Link
          id="location_id"
            href="https://maps.app.goo.gl/BpqwZZWG9rqxok3fA"
            target="_blank"
          >
            Our Locations
          </Link>
          <Link href="#">Privacy & Policy</Link>
          <Link href="#">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
