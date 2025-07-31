import axios from "axios";
import helperAPI from "@/utils/Index";

// Fetch all data for a specific section
const AllData = async (section) => {
  try {
    const res = await helperAPI.getRequest(`/api/section/${section}/post`);

    return res;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export {
  AllData
};
