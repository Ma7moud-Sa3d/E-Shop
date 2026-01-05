import axios from "axios";

export const productsAPI = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data; // 👈 Array
  } catch (error) {
    console.log('Error in API', error);
    return [];
  }
};
