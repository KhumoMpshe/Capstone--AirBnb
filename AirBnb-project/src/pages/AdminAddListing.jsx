import { useState } from "react";
import "./AdminAddListing.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

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
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value, files } = event.target;

    if (name === "images") {
      setImages(Array.from(files || []));
      return;
    }

    setListing((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("token");
    setIsSubmitting(true);

    try {
      const formData = new FormData();

      formData.append("title", listing.title);
      formData.append("location", listing.location);
      formData.append("description", listing.description);
      formData.append("type", listing.type);
      formData.append("guests", listing.guests);
      formData.append("bedrooms", listing.bedrooms);
      formData.append("bathrooms", listing.bathrooms);
      formData.append("price", listing.price);
      formData.append("amenities", JSON.stringify(["Wi-Fi", "Kitchen"]));
      formData.append("cleaningFee", "350");
      formData.append("serviceFee", "250");
      formData.append("occupancyTaxes", "180");

      images.forEach((image) => formData.append("images", image));

      const response = await fetch(`${API_URL}/api/accommodations`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

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
        setImages([]);
      } else {
        alert(data.message || "Failed to add listing.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong while adding your listing.");
    } finally {
      setIsSubmitting(false);
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

        <input
          type="file"
          name="images"
          placeholder="Upload images"
          onChange={handleChange}
          multiple
          accept="image/*"
        />

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding..." : "Add Listing"}
        </button>

      </form>

    </div>
  );
}

export default AdminAddListing;