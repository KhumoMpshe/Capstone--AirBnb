const API_URL = "http://localhost:5000/api/accommodations";

export async function getAccommodations() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch accommodations.");
    }

    return response.json();
}