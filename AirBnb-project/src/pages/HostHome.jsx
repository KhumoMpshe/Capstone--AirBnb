import welcomeImage from "../assets/images/celebrate.jpg";
import "./HostHome.css";

function HostHome() {
    return (
        <div className="host-home">

            <h1>Welcome back!</h1>

            <p>
                Manage your Airbnb listings here.
            </p>
            <img
                src={welcomeImage}
                alt="Welcome"
                className="host-welcome-image"
            />

            

        </div>
    );
}

export default HostHome;