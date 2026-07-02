import Accommodation from "../models/Accommodation.js";

// Create a new accommodation
export const createAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.create(req.body);

    res.status(201).json({
      message: "Accommodation created successfully!",
      accommodation,
    });
  } catch (error) {
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
    const accommodation = await Accommodation.findByIdAndUpdate(
      req.params.id,
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
    const accommodation = await Accommodation.findByIdAndDelete(
      req.params.id
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