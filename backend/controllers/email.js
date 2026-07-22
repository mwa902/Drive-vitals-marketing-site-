import Email from "../models/email.js";

export const createEmail = async (req, res) => {
  try {
    const {
      fullname,
      email,
      company,
      phonenumber,
      fleetsize,
      inquirytype,
      message,
    } = req.body;

    if (!fullname || !email || !company || !phonenumber || !inquirytype || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const newEmail = new Email({
      fullname,
      email,
      company,
      phonenumber,
      fleetsize,
      inquirytype,
      message,
    });

    const savedEmail = await newEmail.save();

    return res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully.",
      data: savedEmail,
    });
  } catch (error) {
    console.error("Error saving inquiry:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong.",
      error: error.message,
    });
  }
};
