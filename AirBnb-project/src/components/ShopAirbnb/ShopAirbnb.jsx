import "./ShopAirbnb.css";
import giftcardImage from "../../assets/images/giftcards.jpg";

function ShopAirbnb() {
  return (
    <section className="shop-airbnb">

      <div className="shop-container">
        <div className="shop-content">

          <h2>Shop Airbnb Gift Cards</h2>

          <button>Learn More</button>

        </div>

        <div
        className="shop-banner"
        style={{ backgroundImage: `url(${giftcardImage})` }}
        >
        </div>
      </div>
    </section>
  );
}

export default ShopAirbnb;