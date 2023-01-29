import axios from "axios";

export async function getAllProduct() {
  try {
    const products = await axios.get("/api/product/all");
    console.log(products.data);
    return products;
  } catch (err) {
    console.error(err);
  }
}
