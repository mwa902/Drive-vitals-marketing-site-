import Demo from "../models/demo.js";

export const createDemo = async (req, res) => {
  try {
    const { company, phonenumber, email, description } = req.body;

    if (!company || !phonenumber || !email || !description) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const demo = new Demo({ company, phonenumber, email, description });
    const saved = await demo.save();

    return res.status(201).json({
      success: true,
      message: "Demo request submitted successfully.",
      data: saved,
    });
  } catch (error) {
    console.error("Error saving demo request:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};
