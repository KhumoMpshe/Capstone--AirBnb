import capeTownApartment from "../assets/images/accommodations/cape-town/apartments/apartment1.jpg";
import capeTownApartment2 from "../assets/images/accommodations/cape-town/apartments/apartment2.jpg";
import capeTownHouse from "../assets/images/accommodations/cape-town/houses/house1.jpg";
import capeTownHouse2 from "../assets/images/accommodations/cape-town/houses/house2.jpg";
import capeTownVilla from "../assets/images/accommodations/cape-town/villas/villa1.jpg";
import capeTownVilla2 from "../assets/images/accommodations/cape-town/villas/villa2.jpg";
import durbanApartment from "../assets/images/accommodations/durban/apartments/apartment1.jpg";
import durbanApartment2 from "../assets/images/accommodations/durban/apartments/apartment2.jpg";
import durbanHouse from "../assets/images/accommodations/durban/houses/house1.jpg";
import durbanHouse2 from "../assets/images/accommodations/durban/houses/house2.jpg";
import durbanVilla from "../assets/images/accommodations/durban/villas/villa1.jpg";
import durbanVilla2 from "../assets/images/accommodations/durban/villas/villa2.jpg";
import joburgApartment from "../assets/images/accommodations/johannesburg/apartments/joburgAliving.avif";
import joburgApartment2 from "../assets/images/accommodations/johannesburg/apartments/joburgAbed.avif";
import joburgHouse from "../assets/images/accommodations/johannesburg/houses/joburgHlounge.avif";
import joburgHouse2 from "../assets/images/accommodations/johannesburg/houses/joburgHkitchen.avif";
import joburgVilla from "../assets/images/accommodations/johannesburg/villas/villa1.jpg";
import joburgVilla2 from "../assets/images/accommodations/johannesburg/villas/villa2.jpg";
import knysnaApartment from "../assets/images/accommodations/knysna/apartments/apartment1.jpg";
import knysnaApartment2 from "../assets/images/accommodations/knysna/apartments/apartment2.jpg";
import knysnaHouse from "../assets/images/accommodations/knysna/houses/house1.jpg";
import knysnaHouse2 from "../assets/images/accommodations/knysna/houses/house2.jpg";
import knysnaVilla from "../assets/images/accommodations/knysna/villas/villa1.jpg";
import knysnaVilla2 from "../assets/images/accommodations/knysna/villas/villa2.jpg";
import capeTownApartment3 from "../assets/images/accommodations/cape-town/apartments/apartment3.jpg";
import durbanApartment3 from "../assets/images/accommodations/durban/apartments/apartment3.jpg";
import joburgApartment3 from "../assets/images/accommodations/johannesburg/apartments/joburgAlounge.avif";
import knysnaApartment3 from "../assets/images/accommodations/knysna/apartments/apartment3.jpg";
import capeTownHouse3 from "../assets/images/accommodations/cape-town/houses/house3.jpg";
import durbanHouse3 from "../assets/images/accommodations/durban/houses/house3.jpg";
import joburgHouse3 from "../assets/images/accommodations/johannesburg/houses/joburgHlounge.avif";
import knysnaHouse3 from "../assets/images/accommodations/knysna/houses/house3.jpg";
import capeTownVilla3 from "../assets/images/accommodations/cape-town/villas/villa3.jpg";
import durbanVilla3 from "../assets/images/accommodations/durban/villas/villa3.jpg";
import joburgVilla3 from "../assets/images/accommodations/johannesburg/villas/villa3.jpg";
import knysnaVilla3 from "../assets/images/accommodations/knysna/villas/villa3.jpg";
import capeTownApartment4 from "../assets/images/accommodations/cape-town/apartments/apartment4.jpg";
import durbanApartment4 from "../assets/images/accommodations/durban/apartments/apartment4.jpg";
import joburgApartment4 from "../assets/images/accommodations/johannesburg/apartments/joburgApatio.avif";
import knysnaApartment4 from "../assets/images/accommodations/knysna/apartments/apartment4.jpg";
import capeTownHouse4 from "../assets/images/accommodations/cape-town/houses/house4.jpg";
import durbanHouse4 from "../assets/images/accommodations/durban/houses/house4.jpg";
import joburgHouse4 from "../assets/images/accommodations/johannesburg/houses/joburgHdining.avif";
import knysnaHouse4 from "../assets/images/accommodations/knysna/houses/house4.jpg";
import capeTownVilla4 from "../assets/images/accommodations/cape-town/villas/villa4.jpg";
import durbanVilla4 from "../assets/images/accommodations/durban/villas/villa4.jpg";
import joburgVilla4 from "../assets/images/accommodations/johannesburg/villas/villa4.jpg";
import knysnaVilla4 from "../assets/images/accommodations/knysna/villas/villa4.jpg";  
import joburgHouse5 from "../assets/images/accommodations/johannesburg/houses/joburgHpatio.avif";

const locations = [
  {
    id: 1,
    title: "Sea View Apartment",
    location: "Cape Town",
    type: "Entire apartment",
    image: capeTownApartment,
    gallery: [
      capeTownApartment,
      capeTownApartment2,
      capeTownApartment3,
      capeTownApartment4,
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Kitchen", "Free parking"],
    price: 1250,
    rating: 4.89,
    reviews: 215,
  },
  {
    id: 2,
    title: "Clifton Family House",
    location: "Cape Town",
    type: "Entire house",
    image: capeTownHouse,
    gallery: [
      capeTownHouse,
      capeTownHouse2,
      capeTownHouse3,
      capeTownHouse4,
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Kitchen", "Free parking"],
    price: 1850,
    rating: 4.92,
    reviews: 178,
  },
  {
    id: 3,
    title: "Sunset Villa",
    location: "Cape Town",
    type: "Entire villa",
    image: capeTownVilla,
    gallery: [
      capeTownVilla,
      capeTownVilla2,
      capeTownHouse,
      capeTownApartment,
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Pool", "Free parking"],
    price: 2750,
    rating: 4.95,
    reviews: 132,
  },
  {
    id: 4,
    title: "Durban Beachfront Apartment",
    location: "Durban",
    type: "Entire apartment",
    image: durbanApartment,
    gallery: [
      durbanApartment,
      durbanApartment2,
      durbanHouse,
      durbanVilla,
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Kitchen", "Beach access"],
    price: 980,
    rating: 4.76,
    reviews: 142,
  },
  {
    id: 5,
    title: "Durban Family House",
    location: "Durban",
    type: "Entire house",
    image: durbanHouse,
    gallery: [
      durbanHouse,
      durbanHouse2,
      durbanApartment,
      durbanVilla,
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Free parking", "Patio"],
    price: 1350,
    rating: 4.84,
    reviews: 107,
  },
  {
    id: 6,
    title: "Waterfront Villa",
    location: "Durban",
    type: "Entire villa",
    image: durbanVilla,
    gallery: [
      durbanVilla,
      durbanVilla2,
      durbanHouse,
      durbanApartment,
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Pool", "Kitchen"],
    price: 2150,
    rating: 4.90,
    reviews: 89,
  },
  {
    id: 7,
    title: "City Centre Apartment",
    location: "Johannesburg",
    type: "Entire apartment",
    image: joburgApartment,
    gallery: [
      joburgApartment,
      joburgApartment2,
      joburgHouse,
      joburgVilla,
    ],
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Kitchen", "Gym"],
    price: 930,
    rating: 4.71,
    reviews: 160,
  },
  {
    id: 8,
    title: "Modern House",
    location: "Johannesburg",
    type: "Entire house",
    image: joburgHouse,
    gallery: [
      joburgHouse,
      joburgHouse2,
      joburgApartment,
      joburgVilla,
    ],
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Air conditioning", "Free parking"],
    price: 1280,
    rating: 4.82,
    reviews: 123,
  },
  {
    id: 9,
    title: "Executive Villa",
    location: "Johannesburg",
    type: "Entire villa",
    image: joburgVilla,
    gallery: [
      joburgVilla,
      joburgVilla2,
      joburgApartment,
      joburgHouse,
    ],
    guests: 7,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Pool", "Free parking"],
    price: 2420,
    rating: 4.93,
    reviews: 98,
  },
  {
    id: 10,
    title: "Lagoon Apartment",
    location: "Knysna",
    type: "Entire apartment",
    image: knysnaApartment,
    gallery: [
      knysnaApartment,
      knysnaApartment2,
      knysnaHouse,
      knysnaVilla,
    ],
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Kitchen", "Free parking"],
    price: 1120,
    rating: 4.85,
    reviews: 146,
  },
  {
    id: 11,
    title: "Forest Retreat House",
    location: "Knysna",
    type: "Entire house",
    image: knysnaHouse,
    gallery: [
      knysnaHouse,
      knysnaHouse2,
      knysnaApartment,
      knysnaVilla,
    ],
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Fireplace", "Kitchen"],
    price: 1490,
    rating: 4.88,
    reviews: 112,
  },
  {
    id: 12,
    title: "Garden Villa",
    location: "Knysna",
    type: "Entire villa",
    image: knysnaVilla,
    gallery: [
      knysnaVilla,
      knysnaVilla2,
      knysnaHouse,
      knysnaApartment,
    ],
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Pool", "Kitchen"],
    price: 2280,
    rating: 4.94,
    reviews: 104,
  },
];

export default locations;
