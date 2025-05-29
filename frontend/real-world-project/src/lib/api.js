import axios from "axios";

export const signup = async (signupData) => {
  try {
    const response = await axios.post("/api/signup", signupData);
    return response.data;
  } catch (err) {
    // Re-throw error to be caught by react-query
    throw err;
  }
};
