const API_URL = "https://onrender.com/api/accommodations";

export async function getAccommodations() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch accommodations.");
    }

    return response.json();
}