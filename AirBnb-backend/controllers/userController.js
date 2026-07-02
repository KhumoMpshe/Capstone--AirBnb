import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
        message: "User created successfully!",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
        },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

    
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password.",
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            }
        );

        res.status(200).json({
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const hostSignup = async (req, res) => {
  try {
    const { username, businessName, email, phoneNumber, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Display name, email, and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "An account with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newHost = await User.create({
      username,
      businessName: businessName || "", 
      email,
      phoneNumber: phoneNumber || "",   
      password: hashedPassword,         
      role: 'host'
    });

    res.status(201).json({ 
      message: "Host registered successfully!", 
      host: {
        id: newHost._id,
        username: newHost.username,
        email: newHost.email,
        role: newHost.role
      } 
    });

  } catch (error) {
    console.error("Error creating host:", error);
    res.status(500).json({ message: "Server error during host signup" });
  }
};