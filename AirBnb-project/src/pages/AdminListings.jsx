import { useEffect, useState } from "react";
import "./AdminListings.css";
import { FaLocationPin } from "react-icons/fa6";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function AdminListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/accommodations/my-listings`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      
      
      const data = await response.json();

      setListings(data);
    } catch (error) {
      console.error("Failed to fetch listings", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Loading listings...</h2>;
  }

  return (
    <div className="admin-listings">

      <h1>My Listings</h1>

      {listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="listing-grid">
          {listings.map((listing) => (
            <div className="listing-card" key={listing._id}>

              <img
                src={
                  listing.images?.length
                    ? `${API_URL}${listing.images[0]}`
                    : "https://placehold.co/400x300?text=No+Image"
                }
                alt={listing.title}
              />

              <div className="listing-info">

                <h2>{listing.title}</h2>

                <p> <FaLocationPin /> {listing.location}</p>

                <p>{listing.type}</p>

                <h3>R{listing.price} / night</h3>

                <div className="listing-buttons">

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default AdminListings;