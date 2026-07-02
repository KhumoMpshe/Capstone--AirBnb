import { useState } from "react";
import "./AdminAddListing.css";

function AdminAddListing() {
  const [listing, setListing] = useState({
    title: "",
    location: "",
    description: "",
    type: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setListing((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:5000/api/accommodations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...listing,
            amenities: ["Wi-Fi", "Kitchen"],
            images: ["image1.jpg"],
            cleaningFee: 350,
            serviceFee: 250,
            occupancyTaxes: 180,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Listing added successfully!");

        setListing({
          title: "",
          location: "",
          description: "",
          type: "",
          guests: "",
          bedrooms: "",
          bathrooms: "",
          price: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong.");
    }
  }

  return (
    <div className="admin-page">

      <h1>Add New Listing</h1>

      <form onSubmit={handleSubmit} className="listing-form">

        <input
          type="text"
          name="title"
          placeholder="Listing title"
          value={listing.title}
          onChange={handleChange}
          required
        />

        <select
          name="location"
          value={listing.location}
          onChange={handleChange}
          required
        >
          <option value="">Choose a city</option>
          <option>Cape Town</option>
          <option>Johannesburg</option>
          <option>Durban</option>
          <option>Knysna</option>
        </select>

        <select
          name="type"
          value={listing.type}
          onChange={handleChange}
          required
        >
          <option value="">Accommodation Type</option>
          <option>Apartment</option>
          <option>House</option>
          <option>Villa</option>
          <option>Cabin</option>
        </select>

        <textarea
          name="description"
          placeholder="Description"
          value={listing.description}
          onChange={handleChange}
          rows="4"
        />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={listing.guests}
          onChange={handleChange}
        />

        <input
          type="number"
          name="bedrooms"
          placeholder="Bedrooms"
          value={listing.bedrooms}
          onChange={handleChange}
        />

        <input
          type="number"
          name="bathrooms"
          placeholder="Bathrooms"
          value={listing.bathrooms}
          onChange={handleChange}
        />

        <input
          type="number"
          name="price"
          placeholder="Price per night"
          value={listing.price}
          onChange={handleChange}
        />

        <button type="submit">
          Add Listing
        </button>

      </form>

    </div>
  );
}

export default AdminAddListing;