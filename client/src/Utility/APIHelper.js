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

export const getProductList = async () => {
  try {
    const res = await axios.get(`${BaseUrl}/getProductList`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getProductForEdit = async (id) => {
  try {
    const res = await axios.get(`${BaseUrl}/productForEdit/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${BaseUrl}/productDelete/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export default { getBrandList, getCategoryList };
