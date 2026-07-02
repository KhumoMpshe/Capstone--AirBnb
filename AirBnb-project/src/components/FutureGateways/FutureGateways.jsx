import "./FutureGateways.css";

function FutureGateways() {
  return (
    <section className="future">

      <h2>Inspiration for future getaways</h2>

      <div className="future-tabs">
        <button>Destinations</button>
        <button>Mountains</button>
        <button>Beach</button>
        <button>Popular</button>
      </div>

      <div className="future-grid">

        <div>
          <h4>Cape Town</h4>
          <p>South Africa</p>
        </div>

        <div>
          <h4>Paris</h4>
          <p>France</p>
        </div>

        <div>
          <h4>London</h4>
          <p>United Kingdom</p>
        </div>

        <div>
          <h4>Dubai</h4>
          <p>United Arab Emirates</p>
        </div>

        <div>
          <h4>Rome</h4>
          <p>Italy</p>
        </div>

        <div>
          <h4>Tokyo</h4>
          <p>Japan</p>
        </div>

        <div>
          <h4>New York</h4>
          <p>United States</p>
        </div>

        <div>
          <h4>Sydney</h4>
          <p>Australia</p>
        </div>

      </div>

    </section>
  );
}

export default FutureGateways;