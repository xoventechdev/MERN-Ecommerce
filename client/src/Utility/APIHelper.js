import axios from "axios";

const BaseUrl = "http://localhost:3030/api/v1";

export const getBrandList = async () => {
  try {
    const res = await axios.get(`${BaseUrl}/getBrandList`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getCategoryList = async () => {
  try {
    const res = await axios.get(`${BaseUrl}/getCategoryList`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const addProductToServer = async (data) => {
  try {
    const res = await axios.post(`${BaseUrl}/addProduct`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export default { getBrandList, getCategoryList };
