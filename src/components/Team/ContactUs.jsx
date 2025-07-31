import {
  Box,
  Button,
  Grid,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const ContactUs = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces, no numbers or special characters
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // For name field, only allow letters and spaces during typing
    if (name === "name") {
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, ""); // Remove numbers and special characters
      setFormData((prev) => ({
        ...prev,
        [name]: filteredValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name should contain only letters and spaces";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);

      // Here you can add your API call or form submission logic
      alert("Form submitted successfully!");

      // Reset form
      setFormData({ name: "", email: "" });
    }
  };

  // Check if form is valid for button styling
  const isFormValid =
    nameRegex.test(formData.name.trim()) &&
    emailRegex.test(formData.email.trim());

  return (
    <>
      <Box
        sx={{ bgcolor: "#FFFFFF", borderRadius: "18px", overflow: "hidden" }}
      >
        <Grid container>
          <Grid
            xs={12}
            md={9}
            sx={{
              px: { xs: "29px", md: "40px", lg: "116px" },
              pt: { xs: "38px", lg: "105px" },
              pb: { xs: "38px", lg: "80px" },
            }}
          >
            <Box>
              <Typography
                fontSize={{ xs: "24px", md: "48px" }}
                lineHeight={{ xs: "32px", md: "56px" }}
                className="font-sora"
                sx={{
                  color: "#1A3F1C",
                  borderLeft: "6px solid #49B047",
                  pl: { xs: "8px", md: 2 },
                }}
              >
                Ready to{" "}
                <span style={{ fontWeight: 700 }}>make an impact?</span> Join
                our team and become a part of our mission.
              </Typography>
              <Box sx={{ mt: { xs: "28px", md: "70px" } }}>
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Grid
                      container
                      display={"flex"}
                      alignItems="center"
                      justifyContent="start"
                      gap={{ xs: 3, md: 0 }}
                    >
                      <Grid item xs={12} md={5} sx={{ pr: { xs: 0, md: 2 } }}>
                        <Typography
                          className="font-sora"
                          sx={{
                            color: "#212121",
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          Name
                        </Typography>
                        <InputBase
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="font-sora"
                          placeholder="Your Name..."
                          fullWidth
                          sx={{
                            borderBottom: `1px solid ${
                              errors.name ? "#f44336" : "#212121"
                            }`,
                            fontSize: { xs: "16px", md: "20px" },
                          }}
                        />
                        {errors.name && (
                          <Typography
                            variant="caption"
                            sx={{ color: "#f44336", fontSize: "12px" }}
                          >
                            {errors.name}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} md={5} sx={{ px: { xs: 0, md: 2 } }}>
                        <Typography
                          className="font-sora"
                          sx={{
                            color: "#212121",
                            fontSize: { xs: "14px", md: "16px" },
                          }}
                        >
                          Email
                        </Typography>
                        <InputBase
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="font-sora"
                          fullWidth
                          placeholder="Your Email..."
                          sx={{
                            borderBottom: `1px solid ${
                              errors.email ? "#f44336" : "#212121"
                            }`,
                            fontSize: { xs: "16px", md: "20px" },
                          }}
                        />
                        {errors.email && (
                          <Typography
                            variant="caption"
                            sx={{ color: "#f44336", fontSize: "12px" }}
                          >
                            {errors.email}
                          </Typography>
                        )}
                      </Grid>
                      <Grid item xs={12} md={2} sx={{ pl: { xs: 0, md: 2 } }}>
                        <Button
                          type="submit"
                          sx={{
                            border: "1px solid #00000014",
                            background: isFormValid
                              ? "linear-gradient(90deg, #42AE6D 0%, #A8DA7F 100%)"
                              : "#F7F7F6",
                            textTransform: "none",
                            color: isFormValid ? "#FFFFFF" : "#586150",
                            py: "7px",
                            px: "30px",
                            width: { xs: "100%", md: "fit-content" },
                            borderRadius: "32px",
                            fontSize: { xs: "18px", md: "20px" },
                            fontWeight: isFormValid ? 600 : 400,
                            "&:hover": {
                              background: isFormValid
                                ? "linear-gradient(90deg, #3A9B61 0%, #96C572 100%)"
                                : "#EEEEEE",
                            },
                          }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={3}>
            {isMobile ? (
              <Image
                src="/images/oog_mask_m.png"
                layout="intrinsic"
                height={300}
                width={1000}
              />
            ) : (
              <Box
                sx={{
                  position: "relative",
                  height: "500px",
                  width: "100%",
                }}
              >
                <Image
                  src="/images/oog_mask.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
