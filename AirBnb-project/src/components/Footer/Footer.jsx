import "./Footer.css";
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">

        <div className="footer-top">
            <div>
                <h3>Support</h3>
                <p>Help Centre</p>
                <p>Get help with a safety issue</p>
                <p>AirCover</p>
                <p>Anti-discrimination</p>
                <p>Disability support</p>
                <p>Cancellation options</p>
                <p>Report neighborhood concern</p>
            </div>

            <div>
                <h3>Hosting</h3>
                <p>Airbnb your home</p>
                <p>Airbnb your experience</p>
                <p>Airbnb your service</p>
                <p>AirCover for Hosts</p>
                <p>Hosting resources</p>
                <p>Community forum</p>
                <p>Hosting responsibly</p>
                <p>Join a free hosting class</p>
                <p>Find a co-host</p>
                <p>Refer a host</p>
            </div>

            <div>
                <h3>Airbnb</h3>
                <p>2026 Summer Release</p>
                <p>Newsroom</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb emergency stays</p>
            </div>
        </div>

      <hr />

        <div className="footer-bottom">
            <p>© 2026 Airbnb, Inc. · Privacy · Terms</p>

            <div className="footer-right">
                <button className="icon-btn">
                    <FaGlobe /> English R ZAR
                </button>

                <button className="icon-btn">
                    <FaFacebookF />
                </button>

                <button className="icon-btn">
                    <FaTwitter />
                </button>

                <button className="icon-btn">
                    <FaInstagram />
                </button>
            </div>
        </div>

        

    </footer>
  );
}

export default Footer;