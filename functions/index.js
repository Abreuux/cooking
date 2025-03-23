const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        status: "error",
        message: "No data provided"
      });
    }

    // Log the contact form submission
    console.log("Received contact form:", data);

    return res.json({
      status: "success",
      message: "Thank you for your message! We'll be in touch soon."
    });
  } catch (error) {
    console.error("Error in contact form submission:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred processing your request."
    });
  }
});

// Demo request endpoint
app.post('/api/demo', async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({
        status: "error",
        message: "No data provided"
      });
    }

    // Log the demo request
    console.log("Received demo request:", data);

    return res.json({
      status: "success",
      message: "Demo request received. We'll contact you soon!"
    });
  } catch (error) {
    console.error("Error in demo request:", error);
    return res.status(500).json({
      status: "error",
      message: "An error occurred processing your request."
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    status: "error",
    message: "An internal server error occurred."
  });
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app); 