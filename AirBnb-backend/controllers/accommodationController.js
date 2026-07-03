import Accommodation from "../models/Accommodation.js";

// Create a new accommodation
export const createAccommodation = async (req, res) => {
  try {
    // Get uploaded image paths
    const imagePaths = req.files
      ? req.files.map((file) => `/uploads/${file.filename}`)
      : [];

    // Create accommodation
    const accommodation = await Accommodation.create({
      host: req.user.id,
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      type: req.body.type,
      guests: Number(req.body.guests),
      bedrooms: Number(req.body.bedrooms),
      bathrooms: Number(req.body.bathrooms),
      price: Number(req.body.price),

      amenities: req.body.amenities
        ? JSON.parse(req.body.amenities)
        : [],

      cleaningFee: Number(req.body.cleaningFee),
      serviceFee: Number(req.body.serviceFee),
      occupancyTaxes: Number(req.body.occupancyTaxes),

      images: imagePaths,
    });

    res.status(201).json({
      message: "Accommodation created successfully!",
      accommodation,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// Get all accommodations
export const getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();

    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update an accommodation
export const updateAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findOneAndUpdate(
      {
        _id: req.params.id,
        host: req.user.id,
      },
      req.body,
      {
        new: true,
      }
    );

    if (!accommodation) {
      return res.status(404).json({
        message: "Accommodation not found.",
      });
    }

    res.status(200).json({
      message: "Accommodation updated successfully!",
      accommodation,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete an accommodation
export const deleteAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findOneAndDelete(
      {
        _id: req.params.id,
        host: req.user.id,
      }
    );

    if (!accommodation) {
      return res.status(404).json({
        message: "Accommodation not found.",
      });
    }

    res.status(200).json({
      message: "Accommodation deleted successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getMyListings = async (req, res) => {
  try {
    const listings = await Accommodation.find({
      host: req.user.id,
    });

    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};